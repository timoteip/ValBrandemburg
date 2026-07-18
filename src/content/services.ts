/**
 * The services offered, in the order they appear on the site.
 *
 * `slug` is the canonical identifier: it drives `/services/[slug]`, the sitemap,
 * and the contact form's project-type field. Adding or renaming a service is a
 * single edit here.
 *
 * Icons are Lucide components referenced directly, so an invalid icon is a
 * compile error rather than a broken glyph at runtime.
 *
 * Card copy is faithful marketing language derived from the client's brief.
 * Detail-page `body` copy is a solid working draft; confirm specifics (materials,
 * guarantees, licensing) with the client before launch.
 */

import {
  Bath,
  Blocks,
  ChefHat,
  DoorOpen,
  Grid3x3,
  Hammer,
  House,
  Layers,
  PaintRoller,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

import type { ImageAsset } from "./images";

export type Service = {
  slug: string;
  title: string;
  /** One-line summary for cards and meta descriptions. */
  blurb: string;
  /** Longer detail-page copy, paragraph per entry. */
  body: string[];
  icon: LucideIcon;
  image: ImageAsset;
};

export const services: Service[] = [
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    blurb:
      "Kitchens designed around how you actually cook, gather, and live — beautiful, functional, and built to last.",
    body: [
      "The kitchen is where a home comes together, so we treat it with the attention it deserves. From the first sketch to the final fixture, we design around the way you use the space — the work you do at the counter, the way people gather, the storage you have always wished you had.",
      "We handle the whole transformation: cabinetry, countertops, lighting, and layout, coordinated so the finished room feels considered rather than assembled. The result is a kitchen that looks the way you imagined and holds up to years of daily use.",
    ],
    icon: ChefHat,
    image: {
      src: "/images/services/kitchen-remodeling.jpg",
      alt: "Remodeled kitchen with cherry cabinetry, a curved granite island, and pendant lighting",
      width: 2048,
      height: 1536,
    },
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    blurb: "Spa-like bathrooms that pair clean, timeless design with finishes chosen to last.",
    body: [
      "A well-designed bathroom is a small luxury you feel every single day. We plan every detail — tile, glass, vanities, and lighting — so the room feels calm, bright, and effortless to use.",
      "Behind the finishes, careful waterproofing and quality installation protect your investment for the long term. You get a space that looks like a retreat and performs like it was built by people who care.",
    ],
    icon: Bath,
    image: {
      src: "/images/services/bathroom-remodeling.jpg",
      alt: "Remodeled bathroom with a glass shower, a double vanity, and stone tile",
      width: 960,
      height: 540,
    },
  },
  {
    slug: "whole-home-renovations",
    title: "Whole Home Renovations",
    blurb:
      "Complete transformations that bring an entire home into one cohesive, considered design.",
    body: [
      "A whole-home renovation is the chance to make every room work together. We look at how the spaces connect — light, flow, and finishes — and design a plan that feels intentional from the entry to the back of the house.",
      "One team manages the entire project, so the details line up and the process stays clear from start to finish. The outcome is a home that feels new, but still feels like yours.",
    ],
    icon: House,
    image: {
      src: "/images/services/whole-home-renovations.jpg",
      alt: "Renovated kitchen with natural wood cabinetry and stainless steel appliances",
      width: 1536,
      height: 2048,
    },
  },
  {
    slug: "basement-finishing",
    title: "Basement Finishing",
    blurb: "Unused basements turned into warm, livable rooms — family space, offices, and more.",
    body: [
      "A finished basement is one of the most valuable spaces you can add without changing your home's footprint. We turn cold, unfinished square footage into comfortable rooms: family spaces, home offices, guest suites, or all three.",
      "Proper insulation, lighting, and moisture control make the difference between a basement that feels like an afterthought and one that feels like a natural part of the house.",
    ],
    icon: Layers,
    image: {
      src: "/images/services/basement-finishing.jpg",
      alt: "Finished basement with recessed lighting, a media area, and warm flooring",
      placeholder: true,
    },
  },
  {
    slug: "custom-carpentry",
    title: "Custom Carpentry",
    blurb:
      "Built-ins, trim, and millwork made to fit your home exactly — the details that set a space apart.",
    body: [
      "Custom carpentry is where craftsmanship shows. Built-in shelving, wainscoting, mantels, and trim are made to fit your home precisely, adding character that stock pieces simply cannot match.",
      "We treat these details as part of the architecture, not decoration — designed to belong, and built to last.",
    ],
    icon: Hammer,
    image: {
      src: "/images/services/custom-carpentry.jpg",
      alt: "Custom built-in closet with adjustable shelving and hanging rods",
      width: 720,
      height: 960,
    },
  },
  {
    slug: "windows-doors",
    title: "Windows & Doors",
    blurb: "Windows and doors that improve comfort, efficiency, and curb appeal.",
    body: [
      "New windows and doors change how a home feels and performs. We install quality units that seal properly, cut drafts, and lift the look of the house from the outside in.",
      "Careful measuring and installation are everything here — the difference between a door that simply opens and one that closes with a reassuring, well-fitted weight.",
    ],
    icon: DoorOpen,
    image: {
      src: "/images/services/windows-doors.jpg",
      alt: "Large picture window and a solid entry door in a renovated room",
      placeholder: true,
    },
  },
  {
    slug: "flooring",
    title: "Flooring",
    blurb: "Hardwood, tile, and more — installed cleanly for a floor that wears beautifully.",
    body: [
      "Flooring sets the tone for every room above it. We help you choose materials that fit how each space is used, then install them with the precision that makes a floor feel solid underfoot for years.",
      "From hardwood to tile, the work is in the preparation and the seams — the parts you never notice when they are done right.",
    ],
    icon: Grid3x3,
    image: {
      src: "/images/services/flooring.jpg",
      alt: "Newly installed hardwood flooring running through a sunlit room",
      placeholder: true,
    },
  },
  {
    slug: "painting",
    title: "Painting",
    blurb: "Clean, durable interior and exterior painting with a finish that lasts.",
    body: [
      "A quality paint job is about preparation as much as color. We take the time to prep surfaces properly, protect your home, and apply finishes that stay crisp and even.",
      "The result is the kind of clean edge and smooth wall that makes an entire room feel finished.",
    ],
    icon: PaintRoller,
    image: {
      src: "/images/services/painting.jpg",
      alt: "Freshly painted interior room with crisp trim and even walls",
      placeholder: true,
    },
  },
  {
    slug: "garages",
    title: "Garages",
    blurb: "New builds and garage conversions that add usable, well-built space.",
    body: [
      "Whether you need a new garage or want to convert an existing one into living space, we build for durability and everyday use.",
      "Solid framing, proper finishes, and thoughtful layout turn a garage into space you are glad to have, not just somewhere to park.",
    ],
    icon: Warehouse,
    image: {
      src: "/images/services/garages.jpg",
      alt: "Well-built attached garage with a clean, finished interior",
      placeholder: true,
    },
  },
  {
    slug: "home-additions",
    title: "Home Additions",
    blurb: "More room to live in, designed to look like it was always part of the house.",
    body: [
      "An addition should feel seamless — as if the new space had always been there. We match rooflines, finishes, and proportions so the expansion reads as part of the original home.",
      "From the first drawings through final inspection, we manage the structure, the finishes, and the details that make an addition feel right.",
    ],
    icon: Blocks,
    image: {
      src: "/images/services/home-additions.jpg",
      alt: "Home addition blended into the existing house with matching finishes",
      placeholder: true,
    },
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((service) => service.slug === slug);

/** Header copy for the services index page. */
export const servicesPage = {
  eyebrow: "Our Services",
  heading: "Remodeling and construction for every part of your home",
  lead: "Whether it's a single room or your whole home, we design and build it with one team and one standard of craftsmanship.",
} as const;
