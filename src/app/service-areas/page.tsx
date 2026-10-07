import Link from "next/link";
import { areaGroups } from "@/config/site";
import { Crumbs, FinalCta } from "@/components/bits";
import CoverageMap from "@/components/CoverageMap";
import { meta } from "@/lib/seo";

export const metadata = meta(
  "Home Healthcare Across Mumbai",
  "Visiting Medics provides doctor home visits and home healthcare across Mumbai, from Colaba and Malabar Hill to Bandra, Andheri and Borivali.",
  "/service-areas"
);

const groupIntro: Record<string, string> = {
  "South Mumbai":
    "Doctor home visits, home nursing and elderly care are available in these South Mumbai localities. Visit timing depends on your location and the service needed.",
  "Western suburbs":
    "We provide healthcare at home across the western suburbs listed here, including doctor home visits, home nursing and blood test sample collection.",
  "Northern western suburbs":
    "Families in the northern western suburbs can request doctor home visits, home nursing and care for elderly or bedridden patients at home.",
};

const fallbackIntro =
  "Doctor home visits and home healthcare are available in these localities. Visit timing depends on your location and the service needed.";

const faqs = [
  {
    q: "Do you provide doctor home visits in my area?",
    a: "We serve the localities listed on this page. If yours is not listed, please contact us and we will let you know.",
  },
  {
    q: "How soon can a visit be arranged?",
    a: "Timing depends on your location and the service needed. We confirm the details with you when you book.",
  },
  {
    q: "How do I request a home visit?",
    a: "Use the Book a Home Visit button and share what is needed and where you are. We will get back to you to confirm.",
  },
];

export default function Areas() {
  return (
    <>
      <div className="container">
        <Crumbs items={[{ name: "Service Areas", href: "/service-areas" }]} />
        <h1 style={{ marginTop: "1.2rem" }}>Healthcare at Home Across Mumbai</h1>
        <p className="lead">
          We serve patients in the localities below and in other parts of Mumbai. If yours is not listed, ask us.
        </p>
      </div>

      <section className="section">
        <div className="container two">
          <CoverageMap link={false} />
          <div className="grid">
            {areaGroups.map((g) => (
              <div className="card" key={g.name}>
                <h2 style={{ fontSize: "1.15rem" }}>{g.name}</h2>
                <p style={{ margin: "0.5rem 0 0.8rem" }}>
                  {groupIntro[g.name] ?? fallbackIntro}
                </p>
                <ul className="chips">
                  {g.areas.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p>
            Available services include{" "}
            <Link href="/doctor-home-visit-mumbai">doctor home visits</Link>,{" "}
            <Link href="/home-nursing-mumbai">home nursing</Link> and{" "}
            <Link href="/elderly-care-at-home-mumbai">elderly care at home</Link>. Visit timing depends on your
            location and the service needed.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Frequently asked questions</h2>
          <div className="grid" style={{ marginTop: "1rem" }}>
            {faqs.map((f) => (
              <div className="card" key={f.q}>
                <h3 style={{ fontSize: "1.05rem" }}>{f.q}</h3>
                <p style={{ marginTop: "0.5rem" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
