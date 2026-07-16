/**
 * Frequently asked questions, shown in an accordion and mirrored into FAQ
 * structured data.
 *
 * These answers are written to be true of the business in general terms. Any
 * answer touching specifics — licensing, insurance, warranty length, financing,
 * service radius — is marked and must be confirmed by the client before launch,
 * because it will also appear in structured data that search engines read.
 */

export type FaqItem = {
  question: string;
  answer: string;
  /** Answer depends on a client-specific fact still to be confirmed. */
  needsConfirmation?: boolean;
};

export const faqs: FaqItem[] = [
  {
    question: "How much does a remodel cost?",
    answer:
      "Every project is different, so we do not quote from a template. After a free in-home consultation we can give you a clear, honest estimate based on your space, your finishes, and your goals.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes. We offer a free, no-obligation in-home consultation where we discuss your ideas, review inspiration, and explore options tailored to your home.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on the scope of the work. A bathroom may take a few weeks, while a whole-home renovation runs longer. We give you a realistic schedule during planning, before construction begins.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve homeowners across the Greater Philadelphia area. Contact us with your location and we will confirm that you are within our service area.",
    needsConfirmation: true,
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. We carry the licensing and insurance required for the work we perform. We are happy to share details during your consultation.",
    needsConfirmation: true,
  },
  {
    question: "Will I be involved in the design?",
    answer:
      "Absolutely. Your ideas guide the project. Our design process is built around incorporating your style and preferences at every step, so the finished space reflects you.",
  },
];
