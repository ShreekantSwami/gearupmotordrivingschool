import { getSiteUrl } from "@/lib/site-url";
import type { MetadataRoute } from "next";

const routes = ["", "/about", "/programs", "/testimonials", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl().toString().replace(/\/$/, "");

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
