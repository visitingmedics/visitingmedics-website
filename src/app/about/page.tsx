import Link from "next/link";
import { Crumbs, FinalCta } from "@/components/bits";
import { meta } from "@/lib/seo";
export const metadata = meta("About Us", "Visiting Medics provides healthcare at home in Mumbai, bringing doctor consultation, nursing and medical procedures to patients' homes.", "/about");
export default function About() {
  return (<>
    <div className="container prose"><Crumbs items={[{ name: "About Us", href: "/about" }]} />
      <h1 style={{ marginTop: "1.2rem" }}>About Visiting Medics</h1>
      <p className="lead">Visiting Medics is a healthcare-at-home service in Mumbai.</p>
      <p>We help patients and families receive medical and nursing care at home, so recovery and ongoing care do not depend on repeated hospital or clinic visits. See <Link href="/services">our services</Link>.</p>
      <h2>Ask before you book</h2>
      <p>You are welcome to ask about the qualifications of the professional who will visit you before you confirm a visit.</p>
      <h2>Our approach</h2>
      <p>We explain what we will do, work within our qualifications and tell you plainly when hospital care is the better choice.</p></div><FinalCta /></>);
}
