import type { Metadata } from "next";
import Link from "next/link";
import { Plane, Ship, CarFront, BedDouble } from "lucide-react";
import { SectionHead } from "@/components/site/SectionHead";
import { Reveal } from "@/components/site/Reveal";
import { ITINERARY } from "@/data/itinerary";
import { placeBySlug } from "@/data/places";
import {
  MOVEMENT_COLOR,
  MOVEMENT_SOFT,
  MOVEMENT_LABEL,
} from "@/components/site/movement";

export const metadata: Metadata = {
  title: "Itinerary",
  description: "The eleven-day plan, hour by hour where it matters — three emotional gears from Athens to the Ionian and back over the mountains.",
};

const TRANSPORT_ICON = { flight: Plane, ferry: Ship, car: CarFront } as const;

const LEGEND = [
  { key: "explore", label: "Explore" },
  { key: "switch", label: "Switch off" },
  { key: "adventure", label: "Adventure" },
  { key: "transit", label: "Transit" },
] as const;

export default function ItineraryPage() {
  return (
    <div className="container-narrow container section">
      <SectionHead
        eyebrow="Day by day"
        title="Eleven days, three gears"
        lead="Explore Kefalonia, switch off at the resort, one last adventure in the mountains. Tap any place to open its guide."
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
        {LEGEND.map((l) => (
          <span key={l.key} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--ink-2)", fontWeight: 500 }}>
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: MOVEMENT_COLOR[l.key] }} />
            {l.label}
          </span>
        ))}
      </div>

      <div>
        {ITINERARY.map((day, i) => {
          const color = MOVEMENT_COLOR[day.movement];
          const isLast = i === ITINERARY.length - 1;
          return (
            <div key={day.date} id={`d${day.date}`} style={{ display: "flex", gap: 18, scrollMarginTop: 86 }}>
              {/* date + spine */}
              <div style={{ width: 62, flex: "none", textAlign: "right", paddingTop: 4 }}>
                <div className="serif" style={{ fontSize: 30, fontWeight: 600, color: "var(--ink)", lineHeight: 1 }}>{day.date}</div>
                <div className="mono" style={{ fontSize: 10, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 3 }}>{day.month}</div>
                <div style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 2 }}>{day.weekday}</div>
              </div>

              <div style={{ position: "relative", width: 16, flex: "none", display: "flex", justifyContent: "center" }}>
                <span
                  style={{
                    width: day.anchor ? 16 : 12,
                    height: day.anchor ? 16 : 12,
                    borderRadius: "50%",
                    background: color,
                    border: "2.5px solid var(--surface-page)",
                    boxShadow: `0 0 0 1.5px ${color}`,
                    marginTop: 6,
                    zIndex: 2,
                  }}
                />
                {!isLast && (
                  <span style={{ position: "absolute", top: 18, bottom: -18, width: 0, borderLeft: "2px dotted var(--border-strong)" }} />
                )}
              </div>

              {/* content */}
              <Reveal style={{ flex: 1, paddingBottom: isLast ? 0 : 30 }}>
                <div className="card lift" style={{ padding: "18px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                        color, background: MOVEMENT_SOFT[day.movement], padding: "4px 10px", borderRadius: "var(--radius-pill)",
                      }}
                    >
                      {MOVEMENT_LABEL[day.movement]}
                    </span>
                    {day.transport?.map((t) => {
                      const Icon = TRANSPORT_ICON[t];
                      return (
                        <span key={t} style={{ color: "var(--muted)", display: "inline-flex" }} title={t}>
                          <Icon size={16} strokeWidth={1.75} />
                        </span>
                      );
                    })}
                  </div>

                  <h3 className="serif" style={{ fontSize: 25, color: "var(--ink)", margin: "10px 0 6px" }}>{day.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)", margin: 0 }}>{day.plan}</p>

                  {day.placeSlugs && day.placeSlugs.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 14 }}>
                      {day.placeSlugs.map((s) => {
                        const pl = placeBySlug(s);
                        if (!pl) return null;
                        return (
                          <Link
                            key={s}
                            href={`/places/${s}`}
                            className="chip lift"
                            style={{ fontSize: 12.5, fontWeight: 600 }}
                          >
                            <span style={{ width: 7, height: 7, borderRadius: "50%", background: MOVEMENT_COLOR[pl.movement], display: "inline-block" }} />
                            {pl.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  {day.sleep && (
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--bone-2)", fontSize: 13, color: "var(--muted)" }}>
                      <BedDouble size={15} strokeWidth={1.75} />
                      <span>{day.sleep}</span>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </div>
  );
}
