import type { MetadataRoute } from "next";

import { primaryNav } from "@/content/nav";
import { services } from "@/content/services";
import { site } from "@/content/site";

/**
 * Sitemap, derived from the same sources as the navigation and service catalogue
 * so it never drifts from the real routes. Top-level pages come from the primary
 * nav (plus the footer-only privacy page); one entry per service detail page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const topLevel = [...primaryNav.map((link) => link.href), "/privacy"].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...topLevel, ...serviceRoutes];
}
