/**
 * Image assets.
 *
 * Every image used on the site is described here with its alt text. The
 * `ImageAsset` type makes `alt` required, so an image cannot be referenced
 * without a written alternative. Files live under `public/images/`, grouped by
 * usage, and are referenced by their public path.
 *
 * Placeholder photography is sourced from Unsplash during development and is
 * replaced with the client's own project photography before launch. The
 * `credit` field records attribution while placeholders are in use.
 */

export type ImageAsset = {
  /** Public path, e.g. "/images/hero/kitchen.jpg". */
  src: string;
  /** Required. Describe the content, not the file. Empty string only for purely decorative images. */
  alt: string;
  /** Intrinsic dimensions, used to reserve space and avoid layout shift. */
  width?: number;
  height?: number;
  /** Attribution for placeholder photography; removed once replaced by client photos. */
  credit?: string;
  /** Whether this is temporary stock photography awaiting a real client photo. */
  placeholder?: boolean;
  /** Tiny base64 preview for a blur-up placeholder while the full image loads. */
  blurDataURL?: string;
};

/** Shared, single-use images referenced from more than one place. */
export const images = {
  heroKitchen: {
    src: "/images/hero/kitchen.jpg",
    alt: "Sunlit modern kitchen with a marble island and white cabinetry",
    width: 2400,
    height: 1600,
    placeholder: true,
    credit: "Unsplash — photo-1556911220-bff31c812dba",
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wCEAAYHBwkLCQwNDQwQERAREBgWFBQWGCMZGxkbGSM1ISchISchNS85LysvOS9UQjs7QlRhUk5SYXZpaXaUjZTBwf8BBgcHCQsJDA0NDBAREBEQGBYUFBYYIxkbGRsZIzUhJyEhJyE1LzkvKy85L1RCOztCVGFSTlJhdmlpdpSNlMHB///AABEIAAoAEAMBIgACEQEDEQH/xABcAAEBAAAAAAAAAAAAAAAAAAAGBxAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMiIxQWEBAQEAAAAAAAAAAAAAAAAAAAIDEQEBAQEAAAAAAAAAAAAAAAABAgAR/9oADAMBAAIRAxEAPwChpqNgpO9bosMlipJWkejT2UuSkUoDuBmRiDQayRWLgqDuIJ/TSqKJMdR49ePXHypzanc6kN//2Q==",
  },
  ogDefault: {
    src: "/images/og/default.jpg",
    alt: "Val Brandemburg Inc. — kitchen, bathroom, and whole-home remodeling",
    width: 1200,
    height: 630,
    placeholder: true,
  },
  aboutWorkshop: {
    src: "/images/about/workshop.jpg",
    alt: "Craftsman measuring a length of trim in a bright workshop",
    width: 1600,
    height: 1200,
    placeholder: true,
  },
} satisfies Record<string, ImageAsset>;
