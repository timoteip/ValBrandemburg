import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { whyChooseUs, whyChooseUsSection } from "@/content/home";

/**
 * The trust pillars that follow the hero. Server Component; the only client code
 * is the <Reveal> wrappers, which fade each element in as it scrolls into view.
 * The heading and pillar copy come from the content layer, and the pillar icons
 * are Lucide components referenced directly in the data.
 */
export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-gold-strong text-sm font-semibold tracking-[0.15em] uppercase">
              {whyChooseUsSection.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="why-heading"
              className="mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl"
            >
              {whyChooseUsSection.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-muted-foreground mt-5 text-lg">{whyChooseUsSection.lead}</p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((point, i) => {
            const Icon = point.icon;
            return (
              <li key={point.title} className="h-full">
                <Reveal delay={0.08 * i} className="h-full">
                  <div className="border-border/60 bg-card flex h-full flex-col rounded-xl border p-6">
                    <span className="bg-secondary/50 inline-flex size-12 items-center justify-center rounded-lg">
                      <Icon aria-hidden className="text-gold-strong size-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{point.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
