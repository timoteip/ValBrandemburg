import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { processSection } from "@/content/home";
import { processSteps } from "@/content/process";

/**
 * The five project stages, shown as a numbered vertical timeline. Server
 * Component; only the <Reveal> wrappers are client code.
 */
export function Process() {
  return (
    <section aria-labelledby="process-heading" className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-gold-strong text-sm font-semibold tracking-[0.15em] uppercase">
              {processSection.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="process-heading"
              className="mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl"
            >
              {processSection.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-muted-foreground mt-5 text-lg">{processSection.lead}</p>
          </Reveal>
        </div>

        <ol className="mt-14 max-w-3xl">
          {processSteps.map((step, i) => (
            <li key={step.step} className="relative pb-10 last:pb-0">
              {/* Connecting rail between step markers */}
              {i < processSteps.length - 1 && (
                <span
                  aria-hidden
                  className="bg-border absolute top-12 left-[1.375rem] h-[calc(100%-2rem)] w-px"
                />
              )}
              <Reveal delay={0.05 * i} className="flex gap-6">
                <span className="border-gold-strong/30 bg-card text-gold-strong relative flex size-11 shrink-0 items-center justify-center rounded-full border font-serif text-lg font-semibold">
                  {step.step}
                </span>
                <div className="pt-1.5">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
