import Link from "next/link";
import type { Metadata } from "next";
import { areas, getArea, nearbyOf, services, PHONE, WA, SITE } from "../data";

type P = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const a = getArea(slug)!;
  return {
    title: `Doctor Visit at Home in ${a.name}, Mumbai | Visiting Medics`,
    description: `Doctor home visit, home nursing, elderly care and IV injection at home in ${a.name}, Mumbai. Call ${PHONE} or WhatsApp to book.`,
    alternates: { canonical: `${SITE}/areas/${a.slug}` },
  };
}

export default async function AreaPage({ params }: P) {
  const { slug } = await params;
  const a = getArea(slug)!;
  const near = nearbyOf(a.slug);
  const faqs = [
    { q: `Do you provide doctor home visits in ${a.name}?`, a: `Yes. Visiting Medics arranges doctor home visits in ${a.name} and nearby areas such as ${near.map((n) => n.name).join(", ")}. Call ${PHONE} or message us on WhatsApp to book.` },
    { q: `Which services are available at home in ${a.name}?`, a: `${services.join(", ")}.` },
    { q: `How do I book a home visit near ${a.landmarks[0]}?`, a: `Tap Call Now or WhatsApp Us on this page, share your address in ${a.name} and the care needed, and our team will coordinate the visit.` },
  ];
  const ld = [
    {
      "@context": "https://schema.org", "@type": "MedicalBusiness",
      name: "Visiting Medics", url: SITE, telephone: `+91${PHONE}`,
      areaServed: { "@type": "Place", name: `${a.name}, Mumbai` },
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  const btn = { display: "inline-block", padding: "12px 20px", borderRadius: 8, background: "#0B2A4A", color: "#fff", marginRight: 10, textDecoration: "none" } as const;

  return (
    <section style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <nav style={{ fontSize: 14 }}><Link href="/">Home</Link> / <Link href="/areas">Areas</Link> / {a.name}</nav>
      <h1>Doctor Visit at Home in {a.name}, Mumbai</h1>
      <p>
        Visiting Medics brings doctors and trained nursing support to your home in {a.name}, including the
        areas around {a.landmarks.join(", ")}. {a.note}
      </p>
      <p>
        <a href={`tel:+91${PHONE}`} style={btn}>Call Now</a>
        <a href={WA} style={{ ...btn, background: "#2E9E5B" }}>WhatsApp Us</a>
      </p>
      <h2>Services available in {a.name}</h2>
      <ul>{services.map((s) => <li key={s}>{s}</li>)}</ul>
      {a.subs.length > 0 && (
        <>
          <h2>Neighbourhoods we cover around {a.name}</h2>
          {a.subs.map((s) => (
            <div key={s.slug} id={s.slug}>
              <h3>Doctor Visit at Home in {s.name}</h3>
              <p>Visiting Medics serves {s.name} through our {a.name} service area: doctor home visits, home nursing, injections and elderly care. Call {PHONE} or WhatsApp to book.</p>
            </div>
          ))}
        </>
      )}
      {a.stations.length > 0 && (
        <>
          <h2>Near railway stations</h2>
          {a.stations.map((st) => (
            <div key={st}>
              <h3>Doctor Visit at Home near {st} Railway Station</h3>
              <p>Living or working close to {st} station? Our team can visit you at home for check-ups, nursing and procedures.</p>
            </div>
          ))}
        </>
      )}
      <h2>Frequently asked questions</h2>
      {faqs.map((f) => (<div key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>))}
      <h2>Nearby areas we serve</h2>
      <p>
        {near.map((n) => (<span key={n.slug}><Link href={`/areas/${n.slug}`}>Doctor Visit at Home in {n.name}</Link>{"  |  "}</span>))}
        <Link href="/areas">All areas</Link>
      </p>
    </section>
  );
}
