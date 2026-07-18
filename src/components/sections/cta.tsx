import Link from "next/link";

import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { ctaSection } from "@/content/home";

/**
 * Closing call to action. A charcoal band that ends the page on a clear next
 * step. Server Component; only the <Reveal> wrapper is client code.
 */
export function Cta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <Container className="py-20 text-center sm:py-24">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-balance sm:text-4xl">
            {ctaSection.heading}
          </h2>
          <p className="mt-5 text-lg text-white/80">{ctaSection.lead}</p>
          <Button asChild variant="gold" size="xl" className="mt-9">
            <Link href={ctaSection.button.href}>{ctaSection.button.label}</Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
