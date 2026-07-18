"use client";

import { useId, useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactPage } from "@/content/contact";
import { contactSchema } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type Field = "name" | "email" | "phone" | "projectType" | "message";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const initialValues: Record<Field, string> = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

const fieldClass =
  "border-input bg-card focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition-colors focus-visible:ring-2";

export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const update = (field: Field) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((prev) => ({ ...prev, [field]: event.target.value }));

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setServerError(null);

    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const nextErrors: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as Field;
        if (key && !nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, company: honeypot }),
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
      setValues(initialValues);
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border-border/60 bg-card flex flex-col items-start rounded-2xl border p-8"
      >
        <CheckCircle2 aria-hidden className="text-gold-strong size-10" strokeWidth={1.5} />
        <p className="mt-4 font-serif text-xl font-semibold">{contactPage.success.title}</p>
        <p className="text-muted-foreground mt-2">{contactPage.success.body}</p>
      </div>
    );
  }

  const describedBy = (field: Field) => (errors[field] ? `${formId}-${field}-error` : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from users, catches naive bots. */}
      <div aria-hidden className="hidden">
        <label>
          Company
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="mb-1.5 block text-sm font-medium">
            Name <span className="text-gold-strong">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name")}
            className={fieldClass}
          />
          {errors.name && (
            <p id={`${formId}-name-error`} className="text-destructive mt-1.5 text-sm">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="mb-1.5 block text-sm font-medium">
            Email <span className="text-gold-strong">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            aria-invalid={!!errors.email}
            aria-describedby={describedBy("email")}
            className={fieldClass}
          />
          {errors.email && (
            <p id={`${formId}-email-error`} className="text-destructive mt-1.5 text-sm">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-phone`} className="mb-1.5 block text-sm font-medium">
            Phone
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update("phone")}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={`${formId}-projectType`} className="mb-1.5 block text-sm font-medium">
            Project type
          </label>
          <select
            id={`${formId}-projectType`}
            name="projectType"
            value={values.projectType}
            onChange={update("projectType")}
            className={fieldClass}
          >
            <option value="">Select one…</option>
            {contactPage.projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="mb-1.5 block text-sm font-medium">
          Message <span className="text-gold-strong">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          aria-invalid={!!errors.message}
          aria-describedby={describedBy("message")}
          className={cn(fieldClass, "resize-y")}
        />
        {errors.message && (
          <p id={`${formId}-message-error`} className="text-destructive mt-1.5 text-sm">
            {errors.message}
          </p>
        )}
      </div>

      {serverError && (
        <p role="alert" className="text-destructive text-sm">
          {serverError}
        </p>
      )}

      <Button type="submit" variant="gold" size="xl" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
