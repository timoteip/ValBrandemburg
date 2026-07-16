import Link from "next/link";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { primaryCta, primaryNav } from "@/content/nav";

/**
 * Sticky site header. Server Component: it renders the same on every route and
 * needs no client state. The mobile drawer is the only interactive piece and is
 * isolated in <MobileNav />. The translucent, blurred background keeps the bar
 * legible over any section without tracking scroll position.
 */
export function Header() {
  return (
    <header className="border-border/60 bg-background/80 supports-[backdrop-filter]:bg-background/70 sticky top-0 z-50 border-b backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gold-strong text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="gold" size="md" className="hidden sm:inline-flex">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
