import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { ServiceCard } from "@/components/services/service-card";
import { Button } from "@/components/ui/button";
import { services, servicesPage } from "@/content/services";
import { site } from "@/content/site";

const url = `${site.url}/services`;

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
  description: servicesPage.lead,
  alternates: { canonical: url },
  openGraph: {
    title: `Services | ${site.name}`,
    description: servicesPage.lead,
    url,
    siteName: site.name,
    type: "website",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: service.title,
      url: `${site.url}/services/${service.slug}`,
    })),
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
                {servicesPage.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-5xl">
                {servicesPage.heading}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-muted-foreground mt-5 text-lg">{servicesPage.lead}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <section aria-labelledby="services-list-heading">
        <Container className="py-16 sm:py-20">
          <h2 id="services-list-heading" className="sr-only">
            All services
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <li key={service.slug} className="h-full">
                <Reveal delay={0.05 * i} className="h-full">
                  <ServiceCard service={service} />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="border-border/60 bg-muted/40 border-t">
        <Container className="py-16 text-center">
          <Reveal>
            <h2 className="text-2xl font-semibold text-balance sm:text-3xl">
              Not sure where to start?
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
              Tell us about your project and we&apos;ll help you figure out the right next step — no
              pressure, no obligation.
            </p>
            <Button asChild variant="gold" size="xl" className="mt-8">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
