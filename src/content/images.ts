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
    alt: "Remodeled kitchen with white cabinetry, a dark island, and quartz countertops",
    width: 2048,
    height: 1536,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEDBf/EAB8QAAIBBAIDAAAAAAAAAAAAAAECAwAREiEEQRMx4f/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQADAQAAAAAAAAAAAAAAAAAAAhEB/9oADAMBAAIRAxEAPwBwzRRKnlZcnXIAWN/tUmwk48oWQXKaxG/VYXLhSSGEEW11QhaBRFExVCNgd0a7RGWH/9k=",
  },
  ogDefault: {
    src: "/images/og/default.jpg",
    alt: "Val Brandemburg Inc. — kitchen, bathroom, and whole-home remodeling",
    width: 1200,
    height: 630,
    placeholder: true,
  },
  aboutStory: {
    src: "/images/about/workshop.jpg",
    alt: "A finished kitchen remodel with cherry cabinetry and a large center island",
    width: 960,
    height: 720,
  },
} satisfies Record<string, ImageAsset>;
