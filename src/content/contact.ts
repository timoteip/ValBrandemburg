/**
 * Contact-page copy. Contact details themselves live in `site.ts` (single
 * source of truth); this module only holds page framing and form options.
 */

import { services } from "./services";

export const contactPage = {
  eyebrow: "Contact",
  heading: "Let's talk about your project",
  lead: "Tell us what you have in mind and we'll get back to you to schedule your free, no-obligation consultation.",

  /** Options for the form's project-type select, derived from the services. */
  projectTypes: [...services.map((service) => service.title), "Something else"],

  success: {
    title: "Message sent",
    body: "Thanks for reaching out. We'll be in touch shortly to talk through your project.",
  },
} as const;
