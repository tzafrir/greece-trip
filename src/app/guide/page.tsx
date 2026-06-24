import type { Metadata } from "next";
import {
  IdCard, Coins, Ticket, Receipt, ShieldPlus, Luggage,
  Sun, UtensilsCrossed, Ship,
} from "lucide-react";
import { SectionHead } from "@/components/site/SectionHead";
import { Reveal } from "@/components/site/Reveal";
import { ImageWithFallback } from "@/components/site/ImageWithFallback";
import { placeBySlug } from "@/data/places";

export const metadata: Metadata = {
  title: "Practical guide",
  description: "Late-August weather, what we'll eat, the ferry crossing, and the homework — IDP, insurance, cash, tolls and tickets.",
};

const ESSENTIALS = [
  { icon: IdCard, title: "International Driving Permit", body: "Required to drive in Greece on an Israeli licence. Obtain the IDP from MEMSI before departure — carry it with the home licence." },
  { icon: Coins, title: "Cash in euros", body: "For the accommodation / climate tax paid on-site (up to ~€10/night at a 5-star in peak season), tolls, and tavernas. Reference rate €1 ≈ ₪3.37–3.39." },
  { icon: Ticket, title: "Paper ferry tickets", body: "No e-tickets — collect paper tickets at the port. Outbound at Gate 2, Patras; return at the Sami port office. Web check-in if available." },
  { icon: Receipt, title: "Motorway tolls", body: "~€15–20 each way on the Athens–Patras motorway. Keep coins and small notes handy for the toll booths." },
  { icon: ShieldPlus, title: "Travel & medical insurance", body: "Arrange cover for the trip before leaving — including the driving and the ferry legs." },
  { icon: Luggage, title: "Update the ferry plate", body: "The booking still lists a placeholder vehicle plate — update it to the real ACR plate via Levante / Paleologos before sailing." },
];

function Feature({
  slug, icon, eyebrow, fallbackGradient,
}: {
  slug: string;
  icon: React.ReactNode;
  eyebrow: string;
  fallbackGradient: string;
}) {
  const place = placeBySlug(slug);
  if (!place) return null;
  const img = place.images?.[0];
  const paras = place.summary.split(/\n\n+/).filter(Boolean);
  return (
    <Reveal>
      <div className="card" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", overflow: "hidden" }}>
        <div className="feature-media" style={{ position: "relative", minHeight: 260 }}>
          <ImageWithFallback src={img?.url} alt={img?.alt || place.name} gradient={fallbackGradient} label={place.name} />
        </div>
        <div style={{ padding: "30px 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ color: "var(--gold)" }}>{icon}</span>
            <span className="eyebrow" style={{ color: "var(--gold)" }}>{eyebrow}</span>
          </div>
          <h3 className="serif" style={{ fontSize: 30, color: "var(--ink)", margin: "0 0 12px" }}>{place.name}</h3>
          <div className="prose" style={{ fontSize: 15 }}>
            {paras.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          {place.highlights.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
              {place.highlights.slice(0, 5).map((h) => (
                <span key={h.title} className="chip" style={{ fontSize: 12 }}>{h.title}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function GuidePage() {
  return (
    <div className="container section">
      <SectionHead
        eyebrow="Good to know"
        title="The practical guide"
        lead="What the days will feel like, what we'll eat and sail — and the short list of homework that keeps the whole thing frictionless."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 22, marginBottom: 56 }}>
        <Feature slug="weather-august" icon={<Sun size={17} />} eyebrow="When we go" fallbackGradient="var(--grad-dawn)" />
        <Feature slug="ionian-food" icon={<UtensilsCrossed size={17} />} eyebrow="What we'll eat" fallbackGradient="linear-gradient(150deg, var(--olive), var(--sea-900))" />
        <Feature slug="ionian-ferry" icon={<Ship size={17} />} eyebrow="The crossing" fallbackGradient="var(--grad-sea)" />
      </div>

      {/* Essentials */}
      <Reveal>
        <h2 className="serif" style={{ fontSize: 32, color: "var(--ink)", margin: "0 0 6px" }}>The homework</h2>
        <p style={{ color: "var(--muted)", margin: "0 0 26px", fontSize: 15 }}>
          Hedged and de-risked — safety nets in place before we fly.
        </p>
      </Reveal>
      <div className="grid grid-3">
        {ESSENTIALS.map((e, i) => {
          const Icon = e.icon;
          return (
            <Reveal key={e.title} delay={i * 50}>
              <div className="card" style={{ padding: "22px 24px", height: "100%" }}>
                <span style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: "var(--bone-2)", color: "var(--sea-700)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 style={{ fontSize: 16.5, fontWeight: 700, color: "var(--ink)", margin: "14px 0 6px" }}>{e.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-2)", margin: 0 }}>{e.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Constraints */}
      <Reveal>
        <div style={{ marginTop: 48, padding: "26px 30px", background: "var(--surface-sunk)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)" }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>The fixed preferences</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 26, fontSize: 15, color: "var(--ink-2)" }}>
            <span>Couple-sized only — nothing oversized, nothing built for groups.</span>
            <span>No monasteries.</span>
            <span>The right view — frontal, open, serene — not just any sea view.</span>
            <span>Serenity over buzz. No parties, no strips, no crowds.</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
