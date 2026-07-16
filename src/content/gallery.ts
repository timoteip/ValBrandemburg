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

const item = (id: string, category: GalleryCategory, alt: string): GalleryItem => ({
  id,
  category,
  image: { src: `/images/gallery/${id}.jpg`, alt, placeholder: true },
});

export const galleryItems: GalleryItem[] = [
  item("kitchen-01", "Kitchen", "Bright white kitchen with a marble island and brass fixtures"),
  item("kitchen-02", "Kitchen", "Warm wood-toned kitchen with open shelving"),
  item("kitchen-03", "Kitchen", "Two-tone kitchen with a farmhouse sink and pendant lights"),
  item("bathroom-01", "Bathroom", "Spa-style bathroom with a freestanding tub and stone tile"),
  item("bathroom-02", "Bathroom", "Walk-in glass shower with large-format tile"),
  item("bathroom-03", "Bathroom", "Double vanity with warm wood cabinetry and framed mirrors"),
  item("basement-01", "Basement", "Finished basement lounge with recessed lighting"),
  item("basement-02", "Basement", "Basement home office with built-in shelving"),
  item("whole-home-01", "Whole Home", "Open-plan living and dining space after a full renovation"),
  item("whole-home-02", "Whole Home", "Renovated staircase and entryway with wood detailing"),
  item("exterior-01", "Exterior", "Home exterior with new siding and a covered porch"),
  item("exterior-02", "Exterior", "Renovated entryway with a new front door and windows"),
];
