import type { Metadata } from "next";

import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { privacy } from "@/content/privacy";
import { site } from "@/content/site";

const url = `${site.url}/privacy`;

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: "How Val Brandemburg Inc. collects, uses, and protects your information.",
  alternates: { canonical: url },
  robots: { index: true, follow: true },
};

const formattedDate = new Date(privacy.lastUpdated).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

/** Swap {email} tokens for the real address, kept single-sourced in site.ts. */
function withEmail(text: string) {
  return text.split("{email}");
}

export default function PrivacyPage() {
  return (
    <section>
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-3xl leading-tight font-semibold sm:text-4xl">{privacy.title}</h1>
            <p className="text-muted-foreground mt-3 text-sm">Last updated {formattedDate}</p>
            <p className="text-muted-foreground mt-6 text-lg">{privacy.intro}</p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {privacy.sections.map((section) => (
              <Reveal key={section.heading}>
                <h2 className="text-xl font-semibold">{section.heading}</h2>
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-foreground/90 mt-4 leading-relaxed">
                    {withEmail(paragraph).map((part, j) =>
                      j === 0 ? (
                        part
                      ) : (
                        <span key={j}>
                          <a
                            href={`mailto:${site.email}`}
                            className="text-gold-strong underline-offset-4 hover:underline"
                          >
                            {site.email}
                          </a>
                          {part}
                        </span>
                      ),
                    )}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
