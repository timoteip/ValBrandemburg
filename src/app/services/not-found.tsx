import Link from "next/link";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";

/**
 * Shown when a `/services/...` path doesn't match a real service. Rather than a
 * dead end, it points back to the services we do offer.
 */
export default function ServiceNotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <div className="max-w-xl">
        <p className="text-gold-strong text-sm font-semibold tracking-[0.15em] uppercase">
          Page not found
        </p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          We couldn&apos;t find that service
        </h1>
        <p className="text-muted-foreground mt-5 text-lg">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Here are the
          services we offer:
        </p>

        <ul className="mt-8 flex flex-wrap gap-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="border-border/60 bg-card hover:border-gold-strong/40 inline-flex rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>

        <Button asChild variant="gold" size="xl" className="mt-10">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </Container>
  );
}
