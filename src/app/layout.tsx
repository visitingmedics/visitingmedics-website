import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site, areas } from "@/config/site";
import { Header, Footer, StickyCta } from "@/components/Chrome";
import { JsonLd } from "@/components/bits";
import { services } from "@/data/services";
import AreasAccordion from "./areas/AreasAccordion";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Doctor Home Visit & Healthcare at Home in Mumbai`, template: `%s | ${site.name}` },
  description: "Healthcare at home in Mumbai: doctor home visits, home nursing, elderly care, wound dressing and home medical procedures.",
  keywords: ["doctor home visit Mumbai", "home doctor Mumbai", "doctor at home Mumbai", "general physician home visit Mumbai", "home healthcare Mumbai", "home nursing Mumbai", "home nurse Mumbai", "elderly care at home Mumbai", "blood test at home Mumbai", "IV injection at home Mumbai", "wound dressing at home Mumbai", "catheter care at home Mumbai", "bedridden patient care Mumbai"],
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
  robots: site.indexable ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } } : { index: false, follow: false },
  openGraph: { siteName: site.name, type: "website", locale: "en_IN", images: [site.ogImage] },
};
export const viewport: Viewport = { themeColor: "#0a4f8f", width: "device-width", initialScale: 1 };

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${site.url}/#website`, name: site.name, url: site.url },
    {
      "@type": "MedicalBusiness", "@id": `${site.url}/#business`, name: site.name, url: site.url,
      logo: `${site.url}${site.logo.src}`, description: "Healthcare at home in Mumbai.",
      areaServed: [{ "@type": "City", name: "Mumbai" }, ...areas.map((a) => ({ "@type": "Place", name: a }))],
      ...(site.contactConfigured ? { telephone: site.phone } : {}),
      ...(site.email ? { email: site.email } : {}),
      image: `${site.url}${site.ogImage}`,
      sameAs: Object.values(site.socials).filter(Boolean),
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Home healthcare services",
        itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, url: `${site.url}/${s.slug}` } })) },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <AreasAccordion />
        <StickyCta />
        <JsonLd data={graph} />
      </body>
    </html>
  );
}
