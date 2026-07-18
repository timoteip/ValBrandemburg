import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { Faq } from "@/components/faq/faq";
import { faqs } from "@/content/faq";
import { faqSection } from "@/content/home";

/**
 * FAQ section. Server Component that renders the header, the FAQPage structured
 * data, and the client accordion. The questions and answers come straight from
 * the content layer, so the visible copy and the structured data can never drift
 * apart.
 */
export function FaqSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="max-w-md">
            <Reveal>
              <p className="text-gold-strong text-sm font-semibold tracking-[0.15em] uppercase">
                {faqSection.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="faq-heading"
                className="mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl"
              >
                {faqSection.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-muted-foreground mt-5 text-lg">{faqSection.lead}</p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Faq />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
