import Link from "next/link";

// A schematic route-style map: Arabian Sea on the left, areas listed north to south.
const route = [
  "Borivali",
  "Kandivali",
  "Malad",
  "Goregaon",
  "Jogeshwari",
  "Lokhandwala",
  "Andheri",
  "Juhu",
  "Vile Parle",
  "Santa Cruz",
  "Khar",
  "Bandra",
  "Dadar",
  "Worli",
  "Churchgate",
  "Breach Candy",
  "Malabar Hill",
  "Cuffe Parade",
  "Fort",
  "Colaba",
];

export default function CoverageMap({ link = true }: { link?: boolean }) {
  return (
    <div className="route" role="group" aria-label="Areas we serve in Mumbai, from north to south">
      <p className="rlabel">North</p>
      <ol>
        {route.map((a) => (
          <li key={a}>{link ? <Link href="/service-areas">{a}</Link> : a}</li>
        ))}
      </ol>
      <p className="rlabel">South Mumbai</p>
      <p className="rnote">Schematic view, not to scale. We also serve other areas, just ask.</p>
    </div>
  );
}
