import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Countdown } from "@/components/site/Countdown";
import { WaveDivider } from "@/components/site/WaveDivider";
import { SectionHead } from "@/components/site/SectionHead";
import { PlaceCard } from "@/components/site/PlaceCard";
import { RouteMapClient } from "@/components/site/RouteMapClient";
import { ImageWithFallback } from "@/components/site/ImageWithFallback";
import { Button } from "@/components/core/Button";
import { MOVEMENT_ICON, MOVEMENT_COLOR, MOVEMENT_SOFT } from "@/components/site/movement";
import { TRIP, STATS, MOVEMENTS } from "@/data/trip-meta";
import { PLACES, placeBySlug } from "@/data/places";

const heroImageFor = (slugs: string[]) => {
  for (const s of slugs) {
    const img = placeBySlug(s)?.images?.[0]?.url;
    if (img) return img;
  }
  return undefined;
};

const ROUTE = ["Haifa", "Athens", "Patras", "Kefalonia", "Kalavryta", "Corinth", "Athens", "Haifa"];

const MOVEMENT_LINKS: Record<string, string> = {
  explore: "/places?movement=explore",
  switch: "/places?movement=switch",
  adventure: "/places?movement=adventure",
};

const MOVEMENT_IMG: Record<string, string[]> = {
  explore: ["myrtos", "melissani", "assos", "kefalonia"],
  switch: ["sami", "antisamos"],
  adventure: ["cave-of-the-lakes", "lake-doxa", "acrocorinth", "kalavryta", "vouraikos"],
};

const FEATURED = ["myrtos", "melissani", "assos", "cave-of-the-lakes", "nemea", "acrocorinth"]
  .map((s) => placeBySlug(s))
  .filter(Boolean);

export default function Home() {
  const heroImg = heroImageFor(["myrtos", "assos", "kefalonia", "melissani"]);

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="hero" style={{ minHeight: "calc(100vh - 66px)", display: "flex", alignItems: "center" }}>
        {heroImg && <div className="hero__media" style={{ backgroundImage: `url(${heroImg})` }} />}
        <div className="hero__veil" />
        <div className="hero__inner shell" style={{ padding: "72px 24px" }}>
          <Reveal>
            <span className="eyebrow" style={{ color: "var(--turq-soft)" }}>
              {TRIP.dates} · {TRIP.nights} nights · {TRIP.travelers} travelers
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="display"
              style={{ fontSize: "clamp(46px, 8vw, 86px)", color: "#fff", margin: "16px 0 0", maxWidth: "16ch" }}
            >
              Ten nights on the Ionian
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead" style={{ color: "#DCEDEA", marginTop: 20, fontSize: 19 }}>
              {TRIP.oneLiner}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center", marginTop: 34 }}>
              <Countdown />
              <span style={{ width: 1, height: 44, background: "rgba(255,255,255,0.2)" }} className="hide-sm" />
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/itinerary">
                  <Button variant="primary" size="lg" style={{ background: "var(--turq)", borderColor: "var(--turq)" }}>
                    The day-by-day
                  </Button>
                </Link>
                <Link href="/places">
                  <Button variant="outline" size="lg" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)" }}>
                    Every place
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 9,
                marginTop: 40,
                fontFamily: "var(--font-mono)",
                fontSize: 12.5,
              }}
            >
              {ROUTE.map((stop, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
                  <span style={{ color: "#fff", fontWeight: 700 }}>{stop}</span>
                  {i < ROUTE.length - 1 && <span style={{ color: "var(--turq-soft)" }}>→</span>}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div style={{ position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)", zIndex: 2, color: "rgba(255,255,255,0.7)" }}>
          <ChevronDown size={26} strokeWidth={1.75} />
        </div>
      </section>
      <WaveDivider />

      {/* ===================== THE NUMBERS ===================== */}
      <section className="section-sm">
        <div className="shell">
          <Reveal>
            <p
              className="serif"
              style={{ fontSize: "clamp(22px, 3vw, 30px)", lineHeight: 1.45, color: "var(--ink)", maxWidth: "30ch", fontStyle: "italic" }}
            >
              Planned meticulously, with no patience for hassle, crowds, or anything generic.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: 20,
                marginTop: 34,
                paddingTop: 28,
                borderTop: "1px solid var(--border)",
              }}
              className="stat-grid"
            >
              {STATS.map((s) => (
                <div className="stat" key={s.label}>
                  <span className="stat__num">{s.num}</span>
                  <span className="stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== THE THREE MOVEMENTS ===================== */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Three movements"
            title="One trip, three emotional gears"
            lead="Not a flat itinerary — a deliberate arc. Explore, then switch off, then one last adventure."
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {MOVEMENTS.map((m, i) => {
              const Icon = MOVEMENT_ICON[m.key];
              const color = MOVEMENT_COLOR[m.key];
              const img = heroImageFor(MOVEMENT_IMG[m.key] || []);
              const reversed = i % 2 === 1;
              return (
                <Reveal key={m.key}>
                  <article
                    className="card movement-row"
                    style={{
                      display: "grid",
                      gridTemplateColumns: reversed ? "1fr 1.1fr" : "1.1fr 1fr",
                      minHeight: 280,
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        minHeight: 240,
                        order: reversed ? 2 : 1,
                      }}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={m.title}
                        gradient={`linear-gradient(150deg, ${color}, var(--sea-900))`}
                        label={m.place}
                      />
                    </div>
                    <div
                      className="mv-copy"
                      style={{
                        padding: "38px 40px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 12,
                        order: reversed ? 1 : 2,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span
                          style={{
                            width: 42, height: 42, borderRadius: "50%",
                            background: MOVEMENT_SOFT[m.key], color,
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}
                        >
                          <Icon size={20} strokeWidth={1.75} />
                        </span>
                        <span className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>
                          Movement {m.n} · {m.nights}
                        </span>
                      </div>
                      <h3 className="display" style={{ fontSize: 38 }}>{m.title}</h3>
                      <div style={{ fontSize: 13.5, color: "var(--muted)", fontFamily: "var(--font-mono)" }}>{m.place}</div>
                      <p className="prose" style={{ marginTop: 4 }}>{m.body}</p>
                      <Link href={MOVEMENT_LINKS[m.key]} className="ulink" style={{ marginTop: 6, display: "inline-flex", alignItems: "center", gap: 6, color }}>
                        Explore this chapter <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== THE ROUTE ===================== */}
      <section style={{ background: "var(--surface-sunk)" }}>
        <WaveDivider flip fill="var(--surface-sunk)" />
        <div className="shell section">
          <SectionHead
            eyebrow="The route"
            eyebrowColor="sea"
            title="Engineered to glide"
            lead="An overnight before the ferry so a flight delay can't break the plan. The resort minutes from the early sailing. The mountain lake folded into the drive out."
          />
          <Reveal>
            <RouteMapClient height={460} />
          </Reveal>
          <Reveal delay={100}>
            <div style={{ textAlign: "center", marginTop: 24 }}>
              <Link href="/map">
                <Button variant="primary">Open the full map</Button>
              </Link>
            </div>
          </Reveal>
        </div>
        <WaveDivider fill="var(--surface-page)" />
      </section>

      {/* ===================== FEATURED PLACES ===================== */}
      {FEATURED.length > 0 && (
        <section className="section">
          <div className="shell">
            <SectionHead
              eyebrow="A taste of it"
              title="Places we'll fall for"
              lead="Caves lit by a noon sunbeam, a beach under white cliffs, a village on an isthmus. A few of the twenty-odd waiting for us."
            />
            <div className="grid grid-3">
              {FEATURED.map((p, i) => (
                <Reveal key={p!.slug} delay={i * 60}>
                  <PlaceCard place={p!} />
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div style={{ textAlign: "center", marginTop: 34 }}>
                <Link href="/places">
                  <Button variant="outline" size="lg" iconRight={<ArrowRight size={16} />}>
                    See all {PLACES.filter((p) => p.kind !== "theme" && p.kind !== "ferry").length} places
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ===================== ONE THREAD LEFT ===================== */}
      <section className="section-sm">
        <div className="shell">
          <Reveal>
            <div
              className="gap-band"
              style={{
                background: "var(--grad-hills)",
                borderRadius: "var(--radius-xl)",
                padding: "44px 48px",
                color: "#fff",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 24,
              }}
            >
              <div style={{ maxWidth: "48ch" }}>
                <span className="eyebrow" style={{ color: "var(--clay-soft)" }}>Five stays, all booked</span>
                <h3 className="display" style={{ color: "#fff", fontSize: 34, margin: "10px 0 8px" }}>
                  Everything&apos;s booked — one reservation left
                </h3>
                <p style={{ color: "#EAF0E0", fontSize: 15.5, lineHeight: 1.6, margin: 0 }}>
                  Kalavryta and the Corinth coast are sorted. The last open thread is a Nemea winery tasting on the 30th — booked ahead, with one of us keeping to water for the drive.
                </p>
              </div>
              <Link href="/places/nemea">
                <Button variant="accent" size="lg">See Nemea</Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
