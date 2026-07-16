/**
 * Single source of truth for the business's identity and contact details.
 *
 * Values marked PLACEHOLDER are not yet confirmed by the client and must be
 * verified before launch. They are used by the footer, the contact page, the
 * Google Maps embed, and the LocalBusiness structured data, so a wrong value
 * here is a wrong value in several places at once.
 */

export type OpeningHours = {
  /** Day names as used by schema.org, e.g. "Monday". */
  days: string[];
  opens: string; // "08:00"
  closes: string; // "17:00"
};

export const site = {
  name: "Val Brandemburg Inc.",
  legalName: "Val Brandemburg Inc.",
  shortName: "Val Brandemburg",
  tagline: "Beautiful Kitchens. Elegant Bathrooms. Crafted to Last.",
  description:
    "Kitchen, bathroom, and whole-home remodeling built to last. Over twenty years of craftsmanship for homeowners who expect more.",
  foundedYear: 2001,

  /**
   * Public base URL, no trailing slash. Read from the environment so preview
   * and production resolve correctly; falls back to localhost in development.
   * PLACEHOLDER fallback — set NEXT_PUBLIC_SITE_URL to the real domain.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  phone: {
    display: "(267) 231-6801",
    href: "tel:+12672316801",
  },
  fax: {
    display: "(610) 286-0373",
  },
  email: "valbrandemburginc@gmail.com",

  /**
   * PLACEHOLDER — street address not yet provided by the client. Required for
   * the Maps embed and the LocalBusiness `address`. If the business operates
   * as a service area without a public storefront, we drop `address` and use
   * `areaServed` instead (see docs/decisions.md).
   */
  address: {
    street: "",
    city: "",
    region: "PA",
    postalCode: "",
    country: "US",
  },

  /** PLACEHOLDER — confirm the towns/counties served. */
  serviceArea: ["Greater Philadelphia area"],

  /** PLACEHOLDER — confirm business hours. Drives the LocalBusiness openingHours. */
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    { days: ["Saturday"], opens: "09:00", closes: "14:00" },
  ] satisfies OpeningHours[],

  /** PLACEHOLDER — social profiles not yet provided. Empty entries are hidden in the UI. */
  socials: {
    facebook: "",
    instagram: "",
    houzz: "",
  },
} as const;

export type Site = typeof site;
