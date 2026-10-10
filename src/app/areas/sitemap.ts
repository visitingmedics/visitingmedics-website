import type { MetadataRoute } from "next";
import { areas, SITE } from "./data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/areas`, changeFrequency: "monthly", priority: 0.7 },
    ...areas.map((a) => ({ url: `${SITE}/areas/${a.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
