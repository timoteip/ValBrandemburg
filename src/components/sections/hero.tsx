import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { hero } from "@/content/home";
import { images } from "@/content/images";

/**
 * Full-bleed hero. Server Component; the only client code is the <Reveal>
 * wrappers around the text. The background image is the page's LCP, so it loads
 * with priority and a blur-up placeholder. Layered gradients keep the white
 * copy legible over the photograph on every screen size.
 */
export function Hero() {
  const image = images.heroKitchen;

  return (
    <section className="bg-primary relative isolate flex min-h-[86svh] items-center overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={image.blurDataURL}
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
      />

      <Container className="relative py-24">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm font-medium tracking-[0.2em] text-white/80 uppercase">
              {hero.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 font-serif text-4xl leading-[1.05] font-semibold text-white sm:text-5xl lg:text-6xl">
              {hero.heading}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg text-white/85">{hero.subheading}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild variant="gold" size="xl">
                <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              >
                <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
