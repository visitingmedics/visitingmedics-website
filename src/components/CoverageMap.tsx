import Link from "next/link";
import { coverageRoute } from "@/config/site";
// A schematic route-style map: Arabian Sea on the left, areas listed north to south.
export default function CoverageMap({ link = true }: { link?: boolean }) {
  return (
    <div className="route" role="group" aria-label="Areas we serve in Mumbai, from north to south">
      <p className="rlabel">North</p>
      <ol>{coverageRoute.map((a) => <li key={a}>{link ? <Link href="/service-areas">{a}</Link> : a}</li>)}</ol>
      <p className="rlabel">South Mumbai</p>
      <p className="rnote">Schematic view, not to scale. We also serve other areas, just ask.</p>
    </div>
  );
}
