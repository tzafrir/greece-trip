import type { Metadata } from "next";
import Link from "next/link";
import { SectionHead } from "@/components/site/SectionHead";
import { PlaceCard } from "@/components/site/PlaceCard";
import { Reveal } from "@/components/site/Reveal";
import { DESTINATIONS } from "@/data/places";
import type { Movement } from "@/data/trip-meta";
import { MOVEMENT_COLOR } from "@/components/site/movement";

export const metadata: Metadata = {
  title: "Places",
  description: "Every destination on the trip — caves, beaches, villages, a gorge, a high lake — grouped by the three movements.",
};

const FILTERS: { key: Movement | "all"; label: string }[] = [
  { key: "all", label: "Everywhere" },
  { key: "explore", label: "Explore" },
  { key: "switch", label: "Switch off" },
  { key: "adventure", label: "Adventure" },
  { key: "transit", label: "Gateways" },
];

const GROUPS: { key: Movement; title: string; blurb: string }[] = [
  { key: "explore", title: "Explore — Kefalonia", blurb: "Caves, beaches, villages and a mountain, from the Agia Efimia base." },
  { key: "switch", title: "Switch off — the resort coast", blurb: "Karavomylos and Sami: the do-nothing middle of the trip." },
  { key: "adventure", title: "One last adventure — Kalavryta", blurb: "A gorge, a cave of lakes, cold springs and a high still lake." },
  { key: "transit", title: "The gateways", blurb: "The mainland hinges that hold the plan together." },
];

export default async function PlacesPage({
  searchParams,
}: {
  searchParams: Promise<{ movement?: string }>;
}) {
  const { movement } = await searchParams;
  const active = (FILTERS.find((f) => f.key === movement)?.key ?? "all") as
    | Movement
    | "all";

  const filtered =
    active === "all"
      ? DESTINATIONS
      : DESTINATIONS.filter((p) => p.movement === active);

  return (
    <div className="container section">
      <SectionHead
        eyebrow="Every place"
        title="Twenty places, one island and a mountain"
        lead="Each one researched and ready — what to do, when to go, how long it takes, and the drive from base. Filter by the gear you're in."
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
        {FILTERS.map((f) => {
          const isActive = active === f.key;
          const color = f.key === "all" ? "var(--sea-700)" : MOVEMENT_COLOR[f.key as Movement];
          return (
            <Link
              key={f.key}
              href={f.key === "all" ? "/places" : `/places?movement=${f.key}`}
              className="chip"
              style={{
                padding: "8px 16px",
                borderRadius: "var(--radius-pill)",
                fontWeight: 600,
                fontSize: 13.5,
                background: isActive ? color : "var(--paper)",
                color: isActive ? "#fff" : "var(--ink-2)",
                borderColor: isActive ? color : "var(--border)",
              }}
            >
              {f.label}
            </Link>
          );
        })}
      </div>

      {active === "all" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          {GROUPS.map((g) => {
            const items = DESTINATIONS.filter((p) => p.movement === g.key);
            if (!items.length) return null;
            return (
              <section key={g.key}>
                <Reveal style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ width: 14, height: 14, borderRadius: "50%", background: MOVEMENT_COLOR[g.key] }} />
                    <h2 className="serif" style={{ fontSize: 30, color: "var(--ink)", margin: 0 }}>{g.title}</h2>
                  </div>
                  <p style={{ color: "var(--muted)", margin: "6px 0 0", fontSize: 15 }}>{g.blurb}</p>
                </Reveal>
                <div className="grid grid-3">
                  {items.map((p, i) => (
                    <Reveal key={p.slug} delay={i * 50}>
                      <PlaceCard place={p} />
                    </Reveal>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 50}>
              <PlaceCard place={p} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
