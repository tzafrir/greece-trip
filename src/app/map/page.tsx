import type { Metadata } from "next";
import { RouteMapClient } from "@/components/site/RouteMapClient";
import { SegmentRow } from "@/components/travel/SegmentRow";
import { SectionHead } from "@/components/site/SectionHead";
import { Reveal } from "@/components/site/Reveal";
import { DRIVES } from "@/data/trip-meta";

export const metadata: Metadata = {
  title: "The route",
  description: "An interactive map of the whole journey — Athens, the ferry to Kefalonia, and the mountain loop through Kalavryta.",
};

const LEGEND = [
  { label: "Explore — Kefalonia", color: "var(--olive)" },
  { label: "Switch off — the resort", color: "var(--turq)" },
  { label: "Adventure — Kalavryta", color: "var(--clay)" },
  { label: "Transit days", color: "var(--sea-500)" },
];

export default function MapPage() {
  return (
    <div className="container section">
      <SectionHead
        eyebrow="The route"
        eyebrowColor="sea"
        title="The whole journey, on one map"
        lead="Drag, zoom, and tap a marker. Dotted lines are drives; the turquoise dashes are the two ferry crossings between Patras and Sami."
      />

      <Reveal>
        <RouteMapClient height={620} />
      </Reveal>

      <Reveal>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 18,
            marginTop: 18,
            padding: "14px 18px",
            background: "var(--paper)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
          }}
        >
          {LEGEND.map((l) => (
            <span key={l.label} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--ink-2)", fontWeight: 500 }}>
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: l.color }} />
              {l.label}
            </span>
          ))}
        </div>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 28,
          marginTop: 48,
          alignItems: "start",
        }}
        className="map-cols"
      >
        <Reveal>
          <div className="card" style={{ padding: "22px 24px" }}>
            <h3 className="serif" style={{ fontSize: 24, margin: "0 0 6px", color: "var(--ink)" }}>The transport legs</h3>
            <SegmentRow mode="flight" from="HFA" to="ATH" meta="airHaifa · ATR-72 · 21 Aug" duration="07:30→10:25" />
            <div className="rule-dotted" />
            <SegmentRow mode="ferry" from="Patras" to="Sami" meta="Levante · Andreas Kalvos · 22 Aug" duration="13:00→16:30" accent="var(--turq)" />
            <div className="rule-dotted" />
            <SegmentRow mode="ferry" from="Sami" to="Patras" meta="Return sailing · 29 Aug" duration="08:30→12:00" accent="var(--turq)" />
            <div className="rule-dotted" />
            <SegmentRow mode="flight" from="ATH" to="HFA" meta="airHaifa · return · 31 Aug" duration="18:00 dep" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="card" style={{ padding: "22px 24px" }}>
            <h3 className="serif" style={{ fontSize: 24, margin: "0 0 14px", color: "var(--ink)" }}>Drives & distances</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
              <tbody>
                {DRIVES.map((d) => (
                  <tr key={d.segment} style={{ borderBottom: "1px solid var(--bone-2)" }}>
                    <td style={{ padding: "9px 0", color: "var(--ink-2)" }}>{d.segment}</td>
                    <td style={{ padding: "9px 8px", textAlign: "right", color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 12, whiteSpace: "nowrap" }}>{d.distance}</td>
                    <td style={{ padding: "9px 0", textAlign: "right", color: "var(--sea-700)", fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>{d.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 14, marginBottom: 0 }}>
              Tolls run ~€15–20 each way on the Athens–Patras motorway.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
