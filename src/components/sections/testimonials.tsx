import { Quote } from "lucide-react";

import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { testimonialsSection } from "@/content/home";
import { publishedTestimonials, testimonials } from "@/content/testimonials";

/**
 * Client testimonials. To avoid ever publishing the invented placeholder
 * reviews (see testimonials.ts), production renders only genuine, non-placeholder
 * entries — which is currently none, so the section hides itself until real
 * reviews are supplied. Development still shows the placeholders so the section
 * can be built and styled.
 */
export function Testimonials() {
  const items = process.env.NODE_ENV === "production" ? publishedTestimonials : testimonials;
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="testimonials-heading" className="border-border/60 bg-muted/40 border-y">
      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-gold-strong text-sm font-semibold tracking-[0.15em] uppercase">
              {testimonialsSection.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="testimonials-heading"
              className="mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl"
            >
              {testimonialsSection.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-muted-foreground mt-5 text-lg">{testimonialsSection.lead}</p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((item, i) => (
            <li key={`${item.author}-${i}`} className="h-full">
              <Reveal delay={0.08 * i} className="h-full">
                <figure className="border-border/60 bg-card flex h-full flex-col rounded-xl border p-6">
                  <Quote aria-hidden className="text-gold-strong/70 size-8" strokeWidth={1.5} />
                  <blockquote className="mt-4 flex-1">
                    <p className="text-foreground/90 leading-relaxed">{item.quote}</p>
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="font-semibold">{item.author}</p>
                    <p className="text-muted-foreground text-sm">
                      {item.location} · {item.project}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
