import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/contact-schema";

/**
 * Contact form endpoint.
 *
 * Validates with the shared Zod schema (never trusting the client), drops
 * obvious bots via a honeypot, and applies a small in-memory rate limit before
 * sending the lead by email through Resend. The rate limit is best-effort — it
 * lives in module memory, so it resets on redeploy and is per-instance in a
 * serverless deployment, which is acceptable for basic abuse protection (see
 * docs/decisions.md).
 */

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a hidden field real users never fill. If it's set, accept the
  // request silently so the bot gets no signal, but send nothing.
  const honeypot = (body as { company?: unknown }).company;
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }
  const data = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  // Not configured (e.g. local dev without secrets). Log the lead so it isn't
  // lost and don't fail the visitor. Production wires these via env — see
  // .env.example.
  if (!apiKey || !from || !to) {
    console.warn("[contact] Email delivery not configured; logging submission instead:", data);
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New consultation request — ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "—"}`,
        `Project: ${data.projectType || "—"}`,
        "",
        data.message,
      ].join("\n"),
    });
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again or call us." },
      { status: 502 },
    );
  }
}
