import type { Metadata } from "next";

import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { galleryPage } from "@/content/gallery";
import { site } from "@/content/site";

const url = `${site.url}/gallery`;

export const metadata: Metadata = {
  title: `Gallery | ${site.name}`,
  description: galleryPage.lead,
  alternates: { canonical: url },
  openGraph: {
    title: `Gallery | ${site.name}`,
    description: galleryPage.lead,
    url,
    siteName: site.name,
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="border-border/60 bg-muted/40 border-b">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-gold-strong text-sm font-semibold tracking-[0.15em] uppercase">
                {galleryPage.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-5xl">
                {galleryPage.heading}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-muted-foreground mt-5 text-lg">{galleryPage.lead}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Grid + lightbox */}
      <section aria-label="Project gallery">
        <Container className="py-16 sm:py-20">
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
