/**
 * Project gallery.
 *
 * ⚠️ PLACEHOLDER IMAGERY. The images referenced here are stock photography used
 * to build the gallery layout. Presenting stock photos as the company's own
 * completed work would misrepresent the business, so before launch every item
 * must be replaced with the client's real project photography. The gallery
 * layout and categories are final; only the underlying photos change.
 */

import type { ImageAsset } from "./images";

/** Header copy for the gallery page. */
export const galleryPage = {
  eyebrow: "Our Work",
  heading: "A look at what we've built",
  lead: "A selection of recent kitchen, bathroom, basement, and whole-home projects.",
} as const;

export const galleryCategories = [
  "Kitchen",
  "Bathroom",
  "Basement",
  "Whole Home",
  "Exterior",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  image: ImageAsset;
};

const item = (
  id: string,
  category: GalleryCategory,
  alt: string,
  /** Pass true once a real project photo is in place; defaults to placeholder. */
  real = false,
): GalleryItem => ({
  id,
  category,
  image: { src: `/images/gallery/${id}.jpg`, alt, placeholder: !real },
});

export const galleryItems: GalleryItem[] = [
  item("kitchen-01", "Kitchen", "White kitchen with a dark island, marble countertops, and a bay window", true),
  item("kitchen-02", "Kitchen", "Natural wood kitchen with white quartz countertops and a herringbone backsplash", true),
  item("kitchen-03", "Kitchen", "White kitchen with a marble-topped island and lantern pendant lights", true),
  item("bathroom-01", "Bathroom", "Bathroom with a glass shower and a white vanity with a granite top", true),
  item("bathroom-02", "Bathroom", "Freestanding soaking tub beside a window with wood-look tile flooring", true),
  item("bathroom-03", "Bathroom", "Bathroom with a cream double vanity, framed mirrors, and a towel warmer", true),
  item("basement-01", "Basement", "Finished basement lounge with recessed lighting"),
  item("basement-02", "Basement", "Basement home office with built-in shelving"),
  item("whole-home-01", "Whole Home", "Open-plan living and dining space after a full renovation"),
  item("whole-home-02", "Whole Home", "Renovated staircase and entryway with wood detailing"),
  item("exterior-01", "Exterior", "Home exterior with new siding and a covered porch"),
  item("exterior-02", "Exterior", "Renovated entryway with a new front door and windows"),
];
