import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { ServiceCard } from "@/components/services/service-card";
import { Button } from "@/components/ui/button";
import { servicesSection } from "@/content/home";
import { services } from "@/content/services";

/**
 * The full range of services, shown as cards that link through to each detail
 * page. Server Component: the cards are Links (no client state), and the only
 * client code is the <Reveal> scroll-in wrappers. Sits on a muted background so
 * the white cards read as a distinct band from the sections above and below.
 */
export function ServicesOverview() {
  return (
    <section aria-labelledby="services-heading" className="bg-muted/40 py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-gold-strong text-sm font-semibold tracking-[0.15em] uppercase">
              {servicesSection.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="services-heading"
              className="mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl"
            >
              {servicesSection.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-muted-foreground mt-5 text-lg">{servicesSection.lead}</p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <li key={service.slug} className="h-full">
              <Reveal delay={0.06 * i} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="xl">
            <Link href={servicesSection.cta.href}>
              {servicesSection.cta.label}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
