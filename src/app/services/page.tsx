import Link from "next/link";
import { services } from "@/data/services";
import { Crumbs, FinalCta } from "@/components/bits";
import Photo from "@/components/Photo";
import ServiceIcon from "@/components/ServiceIcon";
import { meta } from "@/lib/seo";
export const metadata = meta("Home Healthcare Services in Mumbai", "Explore doctor home visits, home nursing, elderly care, wound dressing, IV injection and home medical procedures in Mumbai.", "/services");
export default function Services() {
  return (<>
    <div className="container"><Crumbs items={[{ name: "Services", href: "/services" }]} />
      <h1 style={{ marginTop: "1.2rem" }}>Home Healthcare Services in Mumbai</h1>
      <p className="lead">Choose a service to see what a home visit includes, or <Link href="/contact">contact us</Link> if you are unsure.</p></div>
    <section className="section"><div className="container grid g3">
      {services.map((s) => <Link key={s.slug} className="card" href={`/${s.slug}`}><Photo name={s.slug} alt={`${s.name}: care at home in Mumbai`} ratio="16 / 10" sizes="(min-width: 768px) 360px, 100vw" small /><ServiceIcon slug={s.slug} /><h2 style={{ fontSize: "1.15rem", color: "var(--blue)" }}>{s.name}</h2><p>{s.blurb}</p></Link>)}
    </div></section><FinalCta /></>);
}
