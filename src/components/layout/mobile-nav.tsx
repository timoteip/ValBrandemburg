"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { primaryCta, primaryNav } from "@/content/nav";

/**
 * Mobile navigation drawer. Client Component: it owns the open/closed state.
 * Focus trapping, Escape-to-close, and scroll locking come from the underlying
 * Radix Dialog. Selecting a link closes the drawer via SheetClose.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-background w-72 gap-0">
        <SheetHeader className="p-6 pb-2">
          <SheetTitle className="text-gold-strong text-xs font-medium tracking-[0.2em] uppercase">
            Menu
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col px-3">
          {primaryNav.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="hover:bg-muted rounded-md px-3 py-3 font-serif text-lg transition-colors"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-4 px-6">
          <SheetClose asChild>
            <Button asChild variant="gold" size="lg" className="w-full">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
