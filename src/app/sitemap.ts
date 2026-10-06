import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/data/services";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/services", "/service-areas", "/how-it-works", "/faq", "/contact", "/privacy-policy", "/terms-and-conditions", ...services.map((s) => `/${s.slug}`)];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date(), priority: p === "" ? 1 : 0.7 }));
}
