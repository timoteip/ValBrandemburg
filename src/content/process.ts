/**
 * The five stages of a project, shown as a timeline on the home page.
 * Faithful to the client's brief; wording refined for clarity.
 */

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Consultation",
    description:
      "We visit your home, listen to your goals, and talk through ideas, inspiration, and budget — with no pressure and no obligation.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "We translate your ideas into a clear design, choosing layouts and finishes that fit your style, your home, and how you live.",
  },
  {
    step: 3,
    title: "Planning",
    description:
      "We map out the schedule, materials, and every detail in advance, so you can picture the finished project before work begins.",
  },
  {
    step: 4,
    title: "Construction",
    description:
      "Our team builds with care and keeps you informed, treating your home with the respect it deserves at every stage.",
  },
  {
    step: 5,
    title: "Final Walkthrough",
    description:
      "We walk the finished space together, review every detail, and make sure the result lives up to what we promised.",
  },
];
