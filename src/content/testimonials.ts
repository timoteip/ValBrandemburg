/**
 * ⚠️ PLACEHOLDER TESTIMONIALS — NOT REAL REVIEWS. DO NOT LAUNCH WITH THESE.
 *
 * Every entry below is invented sample copy used only to build and style the
 * testimonials section during development. Publishing invented reviews under
 * plausible customer names would misrepresent the business, so before launch
 * this file must be replaced with genuine, attributable client testimonials —
 * or the testimonials section must be removed from the pages that use it.
 *
 * The `placeholder: true` flag is intentional and is checked so the section can
 * be hidden in production until real reviews are supplied.
 */

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  project: string;
  placeholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They understood exactly what we wanted and delivered a kitchen that is even better than we pictured. The craftsmanship is outstanding.",
    author: "Sample Name",
    location: "Sample Town, PA",
    project: "Kitchen Remodeling",
    placeholder: true,
  },
  {
    quote:
      "From the first meeting to the final walkthrough, everything was clear, on time, and done with real care. We could not be happier.",
    author: "Sample Name",
    location: "Sample Town, PA",
    project: "Bathroom Remodeling",
    placeholder: true,
  },
  {
    quote:
      "Our whole home feels brand new. The team was professional, tidy, and genuinely invested in getting every detail right.",
    author: "Sample Name",
    location: "Sample Town, PA",
    project: "Whole Home Renovation",
    placeholder: true,
  },
];

/** Real testimonials only. Empty until the client supplies genuine reviews. */
export const publishedTestimonials = testimonials.filter((t) => !t.placeholder);
