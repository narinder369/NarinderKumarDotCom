import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/clinics",
    "/portfolio",
    "/about",
    "/contact",
    "/solutions/local-businesses",
    "/solutions/startups",
    "/solutions/custom",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date("2026-08-20"),
  }));
}
