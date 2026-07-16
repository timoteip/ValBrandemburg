import Link from "next/link";

import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * Wordmark logo. This is a typographic placeholder standing in for a real logo
 * asset; when the client provides a mark, swap the inner markup here and every
 * usage updates at once.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn(
        "focus-visible:ring-ring inline-flex flex-col leading-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:outline-none",
        className,
      )}
    >
      <span className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
        Val Brandemburg
      </span>
      <span className="text-gold-strong text-[0.625rem] font-medium tracking-[0.25em] uppercase">
        Remodeling &amp; Design
      </span>
    </Link>
  );
}
