import type { Metadata } from "next";
import { Mail, MapPin, Phone, Printer } from "lucide-react";

import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { contactPage } from "@/content/contact";
import { site } from "@/content/site";

const url = `${site.url}/contact`;

export const metadata: Metadata = {
  title: `Contact | ${site.name}`,
  description: contactPage.lead,
  alternates: { canonical: url },
  openGraph: {
    title: `Contact | ${site.name}`,
    description: contactPage.lead,
    url,
    siteName: site.name,
    type: "website",
  },
};

/** "08:00" -> "8:00 AM". */
function formatTime(value: string): string {
  const [rawHour, rawMinute] = value.split(":");
  const h = Number(rawHour ?? "0");
  const m = Number(rawMinute ?? "0");
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, "0")} ${period}`;
}

function formatDays(days: readonly string[]): string {
  const first = days[0] ?? "";
  if (days.length === 1) return first;
  return `${first}–${days[days.length - 1] ?? ""}`;
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone.display,
    areaServed: site.serviceArea,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.phone.display,
      email: site.email,
      areaServed: site.serviceArea,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="border-border/60 bg-muted/40 border-b">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-gold-strong text-sm font-semibold tracking-[0.15em] uppercase">
                {contactPage.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-5xl">
                {contactPage.heading}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-muted-foreground mt-5 text-lg">{contactPage.lead}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Form + details */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="lg:border-border/60 lg:border-l lg:pl-16">
                <h2 className="text-lg font-semibold">Get in touch</h2>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href={site.phone.href}
                      className="hover:text-gold-strong inline-flex items-start gap-3 transition-colors"
                    >
                      <Phone className="text-gold-strong mt-0.5 size-5 shrink-0" />
                      <span>{site.phone.display}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="hover:text-gold-strong inline-flex items-start gap-3 break-all transition-colors"
                    >
                      <Mail className="text-gold-strong mt-0.5 size-5 shrink-0" />
                      <span>{site.email}</span>
                    </a>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-3">
                    <Printer className="text-gold-strong mt-0.5 size-5 shrink-0" />
                    <span>Fax {site.fax.display}</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-3">
                    <MapPin className="text-gold-strong mt-0.5 size-5 shrink-0" />
                    <span>{site.serviceArea.join(", ")}</span>
                  </li>
                </ul>

                <h2 className="mt-10 text-lg font-semibold">Hours</h2>
                <ul className="text-muted-foreground mt-6 space-y-2 text-sm">
                  {site.hours.map((block) => (
                    <li key={block.days.join()} className="flex justify-between gap-6">
                      <span>{formatDays(block.days)}</span>
                      <span>
                        {formatTime(block.opens)} – {formatTime(block.closes)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
