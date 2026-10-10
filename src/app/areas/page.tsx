import Link from "next/link";
import type { Metadata } from "next";
import { areas, zones, SITE } from "./data";

export const metadata: Metadata = {
  title: "Areas We Serve in Mumbai | Visiting Medics",
  description: "Doctor visit at home, home nursing and elderly care across South Mumbai and the Western suburbs.",
  alternates: { canonical: `${SITE}/areas` },
};

export default function AreasHub() {
  return (
    <section style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
      <h1>Home Healthcare Across Mumbai</h1>
      <p>Visiting Medics brings doctors and nurses to your home. Choose your area:</p>
      {zones.map((z) => (
        <div key={z}>
          <h2>{z}</h2>
          <ul>
            {areas.filter((a) => a.zone === z).map((a) => (
              <li key={a.slug}><Link href={`/areas/${a.slug}`}>Doctor Visit at Home in {a.name}</Link></li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
