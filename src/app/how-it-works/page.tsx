import Link from "next/link";
import { Crumbs, FinalCta } from "@/components/bits";
import { meta } from "@/lib/seo";
export const metadata = meta("How a Home Visit Works", "See how to request a home visit from Visiting Medics in Mumbai: contact us, confirm details, receive care at home.", "/how-it-works");
const steps = [
  ["Contact us", "Call, WhatsApp or use the enquiry form. Tell us the patient's need and your area."],
  ["We confirm the details", "We confirm the service, your location and a suitable time. Please keep prescriptions and reports ready."],
  ["Care at home", "A qualified professional visits, carries out the service and explains what was done."],
  ["Next steps", "You receive guidance on follow-up, further visits or hospital care if needed."],
];
export default function How() {
  return (<>
    <div className="container"><Crumbs items={[{ name: "How It Works", href: "/how-it-works" }]} />
      <h1 style={{ marginTop: "1.2rem" }}>How a Home Visit Works</h1></div>
    <section className="section"><div className="container">
      <ol className="steps">{steps.map(([t, d]) => <li key={t}><h2 style={{ fontSize: "1.2rem", marginBottom: ".2em" }}>{t}</h2><p>{d}</p></li>)}</ol>
      <p>Browse <Link href="/services">our services</Link> or read the <Link href="/faq">FAQ</Link>.</p></div></section><FinalCta /></>);
}
