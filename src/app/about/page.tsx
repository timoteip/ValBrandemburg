import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { about } from "@/content/about";
import { images } from "@/content/images";
import { site } from "@/content/site";

const url = `${site.url}/about`;

export const metadata: Metadata = {
  title: `About | ${site.name}`,
  description: about.intro,
  alternates: { canonical: url },
  openGraph: {
    title: `About | ${site.name}`,
    description: about.intro,
    url,
    siteName: site.name,
    type: "website",
  },
};

export default function AboutPage() {
  const story = images.aboutStory;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    foundingDate: String(site.foundedYear),
    areaServed: site.serviceArea,
    telephone: site.phone.display,
    email: site.email,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="border-border/60 bg-muted/40 border-b">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-gold-strong text-sm font-semibold tracking-[0.15em] uppercase">
                {about.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-5xl">
                {about.heading}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-muted-foreground mt-5 text-lg">{about.intro}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section aria-labelledby="story-heading">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="max-w-xl">
                <h2 id="story-heading" className="text-2xl font-semibold sm:text-3xl">
                  {about.storyHeading}
                </h2>
                {about.story.map((paragraph, i) => (
                  <p key={i} className="text-foreground/90 mt-5 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <Image
                src={story.src}
                alt={story.alt}
                width={story.width}
                height={story.height}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="border-border/60 bg-muted/40 border-y">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <h2 id="values-heading" className="text-2xl font-semibold sm:text-3xl">
              {about.valuesHeading}
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((value, i) => (
              <li key={value.title} className="h-full">
                <Reveal delay={0.08 * i} className="h-full">
                  <div className="border-border/60 bg-card flex h-full flex-col rounded-xl border p-6">
                    <span className="text-gold/80 font-serif text-2xl font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Mission */}
      <section>
        <Container className="py-20 sm:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-2xl leading-snug font-medium text-balance sm:text-3xl">
              {about.mission}
            </p>
            <Button asChild variant="gold" size="xl" className="mt-10">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
