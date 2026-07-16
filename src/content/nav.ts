/**
 * Primary navigation. One source of truth for the header, the mobile menu, and
 * the footer, so the routes never drift apart. The sitemap derives its top-level
 * routes from here as well.
 */

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/** Label and destination for the primary call to action used across the site. */
export const primaryCta = {
  label: "Free Consultation",
  href: "/contact",
} as const;
