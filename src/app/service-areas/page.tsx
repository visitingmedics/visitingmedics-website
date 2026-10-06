import Link from "next/link";
import { areaGroups } from "@/config/site";
import { Crumbs, FinalCta } from "@/components/bits";
import CoverageMap from "@/components/CoverageMap";
import { meta } from "@/lib/seo";
export const metadata = meta("Service Areas: Healthcare at Home in Mumbai", "Visiting Medics provides doctor home visits and home healthcare in Andheri, Juhu, Bandra, Goregaon, Malad, Kandivali and other Mumbai areas.", "/service-areas");
export default function Areas() {
  return (<>
    <div className="container"><Crumbs items={[{ name: "Service Areas", href: "/service-areas" }]} />
      <h1 style={{ marginTop: "1.2rem" }}>Healthcare at Home Across Mumbai</h1>
      <p className="lead">We serve patients in the localities below and in other parts of Mumbai. If yours is not listed, ask us.</p></div>
    <section className="section"><div className="container two"><CoverageMap link={false} /><div className="grid">
      {areaGroups.map((g) => <div className="card" key={g.name}><h2 style={{ fontSize: "1.15rem" }}>{g.name}</h2><ul className="chips">{g.areas.map((a) => <li key={a}>{a}</li>)}</ul></div>)}
    </div></div></section>
    <section className="section alt"><div className="container">
      <p>Available services include <Link href="/doctor-home-visit-mumbai">doctor home visits</Link>, <Link href="/home-nursing-mumbai">home nursing</Link> and <Link href="/elderly-care-at-home-mumbai">elderly care at home</Link>. Visit timing depends on your location and the service needed.</p>
      </div></section><FinalCta /></>);
}
