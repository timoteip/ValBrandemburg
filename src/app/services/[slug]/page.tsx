import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/common/container";
import { PlaceholderPanel } from "@/components/common/placeholder-panel";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/content/services";
import { site } from "@/content/site";

type Params = { slug: string };

/**
 * Statically generate one page per service, and 404 anything else. The service
 * catalogue is a fixed list in the content layer, so there is never a valid
 * slug outside it.
 */
export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const title = `${service.title} | ${site.name}`;
  const url = `${site.url}/services/${service.slug}`;

  return {
    title,
    description: service.blurb,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: service.blurb,
      url,
      siteName: site.name,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const otherServices = services.filter((s) => s.slug !== service.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.blurb,
    url: `${site.url}/services/${service.slug}`,
    areaServed: site.serviceArea,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: site.name,
      telephone: site.phone.display,
      url: site.url,
      areaServed: site.serviceArea,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="border-border/60 bg-muted/40 border-b">
        <Container className="py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-muted-foreground text-sm">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-gold-strong transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/services" className="hover:text-gold-strong transition-colors">
                  Services
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-foreground">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <span className="bg-secondary/50 inline-flex size-12 items-center justify-center rounded-lg">
                  <Icon aria-hidden className="text-gold-strong size-6" />
                </span>
                <h1 className="mt-5 text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-5xl">
                  {service.title}
                </h1>
                <p className="text-muted-foreground mt-5 text-lg">{service.blurb}</p>
                <Button asChild variant="gold" size="xl" className="mt-8">
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ServiceMedia service={service} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl">
            {service.body.map((paragraph, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="text-foreground/90 text-lg leading-relaxed not-first:mt-6">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Other services */}
      <section className="border-border/60 bg-muted/40 border-t">
        <Container className="py-16">
          <h2 className="text-2xl font-semibold">Explore other services</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {otherServices.map((s) => {
              const OtherIcon = s.icon;
              return (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="border-border/60 bg-card hover:border-gold-strong/40 inline-flex items-center gap-2.5 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors"
                  >
                    <OtherIcon aria-hidden className="text-gold-strong size-4" />
                    {s.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-10">
            <Link
              href="/services"
              className="text-gold-strong inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
            >
              <ArrowLeft aria-hidden className="size-4" />
              Back to all services
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}

/**
 * The service's photo. While the catalogue still points at placeholder imagery
 * that has not been shot yet, this renders a branded panel with the service
 * icon instead of a broken image. Once a real photo replaces the placeholder in
 * the content layer (a real `src`, `placeholder` removed), it renders as a
 * proper `next/image`.
 */
function ServiceMedia({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;

  if (service.image.placeholder) {
    return (
      <PlaceholderPanel label={service.image.alt} className="aspect-[4/3] rounded-2xl">
        <Icon aria-hidden className="text-gold-strong/70 size-20" strokeWidth={1.25} />
      </PlaceholderPanel>
    );
  }

  return (
    <Image
      src={service.image.src}
      alt={service.image.alt}
      width={service.image.width}
      height={service.image.height}
      priority
      className="aspect-[4/3] w-full rounded-2xl object-cover"
      sizes="(min-width: 1024px) 50vw, 100vw"
    />
  );
}
