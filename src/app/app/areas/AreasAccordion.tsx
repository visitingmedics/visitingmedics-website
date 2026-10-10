import Link from "next/link";
import { areas, zones } from "./data";

export default function AreasAccordion() {
  const small = { fontSize: 14, lineHeight: 1.9, margin: 0 } as const;
  const sep = "  |  ";
  const lk = { color: "inherit" } as const;
  return (
    <details style={{ maxWidth: 1100, margin: "0 auto", padding: "12px 16px" }}>
      <summary style={{ cursor: "pointer", fontWeight: 600 }}>Areas We Serve in Mumbai</summary>
      {zones.map((z) => (
        <div key={z} style={{ marginTop: 10 }}>
          <p style={{ fontWeight: 600, margin: "6px 0" }}>{z}</p>
          <p style={small}>
            {areas.filter((a) => a.zone === z).map((a) => (
              <span key={a.slug}>
                <Link href={`/areas/${a.slug}`} style={lk}>Doctor Visit at Home in {a.name}</Link>{sep}
              </span>
            ))}
          </p>
        </div>
      ))}
      <div style={{ marginTop: 10 }}>
        <p style={{ fontWeight: 600, margin: "6px 0" }}>Neighbourhoods</p>
        <p style={small}>
          {areas.flatMap((a) => a.subs.map((s) => (
            <span key={a.slug + s.slug}>
              <Link href={`/areas/${a.slug}#${s.slug}`} style={lk}>Doctor Visit at Home in {s.name}</Link>{sep}
            </span>
          )))}
        </p>
      </div>
      <div style={{ marginTop: 10 }}>
        <p style={{ fontWeight: 600, margin: "6px 0" }}>Near Railway Stations</p>
        <p style={small}>
          {areas.flatMap((a) => a.stations.map((st) => (
            <span key={a.slug + st}>
              <Link href={`/areas/${a.slug}`} style={lk}>Doctor Visit at Home near {st} Railway Station</Link>{sep}
            </span>
          )))}
        </p>
      </div>
    </details>
  );
}
