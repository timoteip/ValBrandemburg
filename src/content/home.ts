/**
 * Home-page copy that is specific to the home page: the hero and the
 * "Why Choose Us" pillars. Shared data (services, process, testimonials,
 * gallery) is composed from its own modules rather than duplicated here.
 */

import { Award, HandHeart, Ruler, ShieldCheck, type LucideIcon } from "lucide-react";

export const hero = {
  eyebrow: "Remodeling & Design Since 2001",
  heading: "Beautiful Kitchens. Elegant Bathrooms. Crafted to Last.",
  subheading:
    "For over twenty years, Val Brandemburg Inc. has helped homeowners transform the spaces they live in — combining thoughtful design with craftsmanship built to stand the test of time.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/gallery" },
} as const;

export const whyChooseUsSection = {
  eyebrow: "Why Homeowners Choose Us",
  heading: "Craftsmanship you can trust, from the first visit to the final walkthrough",
  lead: "Two decades of remodeling homes, held to the same standard on every project.",
} as const;

export const servicesSection = {
  eyebrow: "What We Do",
  heading: "Remodeling services for every part of your home",
  lead: "From a single room to a whole-home transformation, one team handles the design and the build.",
  cta: { label: "View all services", href: "/services" },
} as const;

export const processSection = {
  eyebrow: "How We Work",
  heading: "A clear process, from first visit to final walkthrough",
  lead: "Every project follows the same five steps, so you always know what is happening and what comes next.",
} as const;

export const testimonialsSection = {
  eyebrow: "What Homeowners Say",
  heading: "Trusted by families across the region",
  lead: "A few words from homeowners we have worked with.",
} as const;

export const faqSection = {
  eyebrow: "FAQ",
  heading: "Answers to common questions",
  lead: "A few things homeowners often ask before getting started.",
} as const;

export const ctaSection = {
  heading: "Ready to start your project?",
  lead: "Book a free, no-obligation consultation and let's talk about what's possible for your home.",
  button: { label: "Get a Free Consultation", href: "/contact" },
} as const;

export type WhyPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyChooseUs: WhyPoint[] = [
  {
    title: "Over 20 Years of Experience",
    description:
      "Two decades of remodeling homes, refined into a process you can trust from the first visit to the final walkthrough.",
    icon: Award,
  },
  {
    title: "True Craftsmanship",
    description:
      "Skilled, careful work in every detail — the kind of quality you notice the moment you walk in.",
    icon: Ruler,
  },
  {
    title: "Honest, Clear Pricing",
    description:
      "Fair estimates and straight answers. We tell you what to expect and we stand behind our word.",
    icon: ShieldCheck,
  },
  {
    title: "Designed Around You",
    description:
      "Your ideas lead every project. We build spaces that reflect your style and the way you live.",
    icon: HandHeart,
  },
];
