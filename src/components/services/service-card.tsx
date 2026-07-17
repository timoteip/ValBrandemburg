import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Service } from "@/content/services";

/**
 * A single service, rendered as a card that links to its detail page. Shared by
 * the homepage services section and the services index so the two stay in sync.
 * Presentation only — callers own the surrounding list item and scroll-reveal.
 */
export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group border-border/60 bg-card hover:border-gold-strong/40 flex h-full flex-col rounded-xl border p-6 transition-colors"
    >
      <span className="bg-secondary/50 inline-flex size-12 items-center justify-center rounded-lg">
        <Icon aria-hidden className="text-gold-strong size-6" />
      </span>
      <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{service.blurb}</p>
      <span className="text-gold-strong mt-5 inline-flex items-center gap-1.5 text-sm font-medium">
        Learn more
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
