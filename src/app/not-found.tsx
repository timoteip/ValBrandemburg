import Link from "next/link";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/content/nav";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <div className="max-w-xl">
        <p className="text-gold-strong text-sm font-semibold tracking-[0.15em] uppercase">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">This page can&apos;t be found</h1>
        <p className="text-muted-foreground mt-5 text-lg">
          The page you&apos;re looking for may have moved or never existed. Here&apos;s where to go
          next:
        </p>

        <ul className="mt-8 flex flex-wrap gap-3">
          {primaryNav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="border-border/60 bg-card hover:border-gold-strong/40 inline-flex rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors"
              >
                {link.label}
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
