import type { Metadata } from "next";
import { Plane, Car, Ship, CircleAlert } from "lucide-react";
import { SectionHead } from "@/components/site/SectionHead";
import { Reveal } from "@/components/site/Reveal";
import { StayCard } from "@/components/travel/StayCard";
import { RefChip } from "@/components/travel/RefChip";
import { Badge } from "@/components/core/Badge";
import { Button } from "@/components/core/Button";
import { STAYS, OUTSTANDING } from "@/data/trip";

export const metadata: Metadata = {
  title: "Stays & bookings",
  description: "Four stays, the flights, the car and the two ferry crossings — every reference number in one place. One gap still to fill: Kalavryta.",
};

type Row = { label: string; value: string; mono?: boolean };

function BookingCard({
  icon,
  title,
  status,
  statusLabel,
  rows,
  refs,
}: {
  icon: React.ReactNode;
  title: string;
  status: "booked" | "pending";
  statusLabel: string;
  rows: Row[];
  refs?: { label: string; value: string; accent?: boolean }[];
}) {
  return (
    <div className="card" style={{ padding: "20px 22px", display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--bone-2)", color: "var(--sea-700)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {icon}
          </span>
          <h3 className="serif" style={{ fontSize: 23, color: "var(--ink)", margin: 0 }}>{title}</h3>
        </div>
        <Badge tone={status}>{statusLabel}</Badge>
      </div>
      <dl style={{ margin: 0 }}>
        {rows.map((r, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "8px 0", borderTop: i > 0 ? "1px solid var(--bone-2)" : "none" }}>
            <dt style={{ fontSize: 13, color: "var(--muted)" }}>{r.label}</dt>
            <dd style={{ margin: 0, fontSize: 13.5, color: "var(--ink)", fontWeight: 600, textAlign: "right", fontFamily: r.mono ? "var(--font-mono)" : "var(--font-body)" }}>{r.value}</dd>
          </div>
        ))}
      </dl>
      {refs && refs.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {refs.map((r) => <RefChip key={r.label} label={r.label} value={r.value} accent={r.accent} />)}
        </div>
      )}
    </div>
  );
}

export default function StaysPage() {
  return (
    <div className="container section">
      <SectionHead
        eyebrow="Where we sleep"
        title="Four stays, one gap"
        lead="Three booked on the island and the gulf, one still open in the mountains — stated honestly. And every reference number we'll need at a port or a desk."
      />

      {/* Stays */}
      <div className="grid grid-4" style={{ marginBottom: 56 }}>
        {STAYS.map((s, i) => (
          <Reveal key={s.name} delay={i * 60}>
            <StayCard {...s} />
          </Reveal>
        ))}
      </div>

      {/* Transport bookings */}
      <Reveal>
        <h2 className="serif" style={{ fontSize: 32, color: "var(--ink)", margin: "0 0 22px" }}>The moving parts</h2>
      </Reveal>
      <div className="grid grid-3" style={{ marginBottom: 56 }}>
        <Reveal>
          <BookingCard
            icon={<Plane size={19} strokeWidth={1.75} />}
            title="Flights"
            status="booked"
            statusLabel="Booked"
            rows={[
              { label: "Carrier", value: "airHaifa · ATR-72" },
              { label: "Outbound", value: "21 Aug · 07:30→10:25", mono: true },
              { label: "Return", value: "31 Aug · 18:00 dep", mono: true },
              { label: "Route", value: "HFA ⇄ ATH" },
              { label: "Passengers", value: "2 · Economy" },
            ]}
          />
        </Reveal>
        <Reveal delay={70}>
          <BookingCard
            icon={<Car size={19} strokeWidth={1.75} />}
            title="Car · ACR"
            status="booked"
            statusLabel="Booked"
            rows={[
              { label: "Pick-up", value: "ATH · 21 Aug (after 10:25)", mono: true },
              { label: "Drop-off", value: "ATH · 31 Aug (before 18:00)", mono: true },
              { label: "Ferry permission", value: "Included, all islands" },
              { label: "Free cancel", value: "≥7 days (~14 Aug)" },
            ]}
          />
        </Reveal>
        <Reveal delay={140}>
          <BookingCard
            icon={<Ship size={19} strokeWidth={1.75} />}
            title="Ferries · Levante"
            status="booked"
            statusLabel="Booked"
            rows={[
              { label: "Vessel", value: "F/B Andreas Kalvos" },
              { label: "Patras → Sami", value: "22 Aug · 13:00→16:30", mono: true },
              { label: "Sami → Patras", value: "29 Aug · 08:30→12:00", mono: true },
              { label: "Tickets", value: "Paper pickup at port" },
              { label: "Plate", value: "Update before sailing" },
            ]}
          />
        </Reveal>
      </div>

      {/* References + Outstanding */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "start" }} className="map-cols">
        <Reveal>
          <div className="card" style={{ padding: "22px 24px" }}>
            <div className="eyebrow sea" style={{ marginBottom: 14 }}>Ferry crossings</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { dir: "Outbound · Patras → Sami", when: "22 Aug" },
                { dir: "Return · Sami → Patras", when: "29 Aug" },
              ].map((c, i) => (
                <div
                  key={c.dir}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 0",
                    borderTop: i > 0 ? "1px solid var(--bone-2)" : "none",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--ink)", fontSize: 14.5 }}>{c.dir}</div>
                    <div style={{ fontSize: 13, color: "var(--muted)" }}>2 passengers + car · lounge seats</div>
                  </div>
                  <span className="mono" style={{ fontSize: 12.5, color: "var(--sea-700)", fontWeight: 700, whiteSpace: "nowrap" }}>{c.when}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "var(--muted)", margin: "14px 0 0", fontStyle: "italic" }}>
              Ticket numbers and passenger details are kept offline.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="card" style={{ padding: "22px 24px" }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Outstanding</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {OUTSTANDING.map(([text, tone], i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 11, padding: "10px 0", fontSize: 14, color: "var(--ink-2)", borderBottom: i < OUTSTANDING.length - 1 ? "1px solid var(--bone-2)" : "none" }}>
                  <span style={{ width: 15, height: 15, flex: "none", marginTop: 2, borderRadius: 4, border: `1.5px solid ${tone === "pending" ? "var(--clay)" : "var(--sea-500)"}` }} />
                  {text}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 18, padding: "14px 16px", background: "rgba(190,103,64,0.08)", borderRadius: "var(--radius-md)", display: "flex", gap: 10, alignItems: "flex-start" }}>
              <CircleAlert size={18} strokeWidth={1.85} style={{ color: "var(--clay)", flex: "none", marginTop: 1 }} />
              <div style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5 }}>
                The Kalavryta hotel is the one thing still to book. Four candidates, all couple-sized.
              </div>
            </div>
            <Button variant="accent" full style={{ marginTop: 16 }}>Book Kalavryta hotel</Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
