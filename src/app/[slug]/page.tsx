import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/data/services";
import { site, areas } from "@/config/site";
import { meta } from "@/lib/seo";
import Photo from "@/components/Photo";
import { photo } from "@/lib/images";
import { Crumbs, CtaButtons, Faqs, FinalCta, JsonLd } from "@/components/bits";

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));
type P = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const s = getService((await params).slug);
  return s ? meta(s.title, s.desc, `/${s.slug}`) : {};
}

export default async function ServicePage({ params }: P) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const has = photo(s.slug) !== null;
  const related = s.related.flatMap((r) => { const x = getService(r); return x ? [x] : []; });
  return (
    <>
      <div className="container">
        <Crumbs items={[{ name: "Services", href: "/services" }, { name: s.name, href: `/${s.slug}` }]} />
        <div className={has ? "intro with-photo" : "intro"}>
          <div>
            <h1 style={{ marginTop: "1.2rem" }}>{s.h1}</h1>
            <p className="lead">{s.intro}</p>
            <CtaButtons />
          </div>
          <Photo name={s.slug} alt={`${s.name}: care at home in Mumbai`} priority />
        </div>
      </div>
      <section className="section"><div className="container prose two">
        <div><h2>About {s.name} in Mumbai</h2><p>{s.what}</p><h2>Who may need {s.name.toLowerCase()}</h2><ul>{s.who.map((w) => <li key={w}>{w}</li>)}</ul></div>
        <div><h2>What the home visit includes</h2><ul>{s.includes.map((w) => <li key={w}>{w}</li>)}</ul></div>
      </div></section>
      <section className="section alt"><div className="container">
        <h2>How it works</h2>
        <ol className="steps">{s.how.map((h) => <li key={h}>{h}</li>)}</ol>
        <h2>Safety</h2><p>{s.safety}</p>
      </div></section>
      <section className="section"><div className="container">
        <h2>Serving Mumbai</h2>
        <p>{s.name} is available across Mumbai, including {areas.join(", ")} and nearby areas. Check <Link href="/service-areas">our service areas</Link> or <Link href="/contact">contact us</Link> to confirm your locality.</p>
        <h2>Questions</h2><Faqs items={s.faqs} />
        <h2>Related services</h2>
        <div className="grid g3">{related.map((r) => <Link key={r.slug} className="card" href={`/${r.slug}`}><h3>{r.name}</h3><p>{r.blurb}</p></Link>)}</div>
      </div></section>
      <FinalCta />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: s.name, serviceType: s.name, description: s.desc,
        provider: { "@id": `${site.url}/#business` }, areaServed: { "@type": "City", name: "Mumbai" }, url: `${site.url}/${s.slug}` }} />
    </>
  );
}
