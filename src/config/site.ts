// Single source of truth for business details. Edit here or via env vars.
const env = process.env;
export const site = {
  name: "Visiting Medics",
  tagline: "Healthcare at Home",
  city: "Mumbai",
  url: env.NEXT_PUBLIC_SITE_URL ?? "https://visitingmedics.com",
  phone: env.NEXT_PUBLIC_PHONE ?? "+91 80808 82201",
  whatsapp: env.NEXT_PUBLIC_WHATSAPP ?? "918080882201",
  email: env.NEXT_PUBLIC_EMAIL ?? "",
  contactConfigured: true,
  indexable: env.NEXT_PUBLIC_INDEXABLE !== "false",
  // Original Visiting Medics logo (scaled copy of the supplied file).
  logo: { src: "/logo.png", width: 900, height: 300 },
  // Must describe your hero photo (public/images/hero.jpg) accurately.
  heroAlt: "A doctor checking an elderly man’s blood pressure at home with his daughter nearby",
  ogImage: "/og-image.png", // add a 1200x630 image to /public
  socials: {
    Instagram: env.NEXT_PUBLIC_INSTAGRAM ?? "https://www.instagram.com/visitingmedics/",
    Facebook: env.NEXT_PUBLIC_FACEBOOK ?? "",
    LinkedIn: env.NEXT_PUBLIC_LINKEDIN ?? "https://www.linkedin.com/company/visitingmedics/",
  } as Record<string, string>,
};
export const areaGroups = [
  { name: "Western suburbs", areas: ["Jogeshwari", "Andheri", "Lokhandwala", "Juhu", "Vile Parle", "Santa Cruz", "Bandra"] },
  { name: "Northern western suburbs", areas: ["Goregaon", "Malad", "Kandivali"] },
  { name: "South Mumbai", areas: ["Churchgate"] },
];
// North to south, used by the coverage map
export const coverageRoute = ["Kandivali", "Malad", "Goregaon", "Jogeshwari", "Lokhandwala", "Andheri", "Juhu", "Vile Parle", "Santa Cruz", "Bandra", "Churchgate"];
export const areas = areaGroups.flatMap((g) => g.areas);
export const telLink = `tel:${site.phone.replace(/\s/g, "")}`;
export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp.replace(/\D/g, "")}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
