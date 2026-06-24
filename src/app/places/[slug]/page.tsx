import type { Metadata } from "next";
import { createElement } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PLACES, DESTINATIONS, placeBySlug } from "@/data/places";
import { Reveal } from "@/components/site/Reveal";
import { ImageWithFallback } from "@/components/site/ImageWithFallback";
import { RouteMapClient } from "@/components/site/RouteMapClient";
import { WaveDivider } from "@/components/site/WaveDivider";
import { Tag } from "@/components/core/Tag";
import {
  MOVEMENT_COLOR,
  MOVEMENT_SOFT,
  MOVEMENT_LABEL,
  kindIcon,
} from "@/components/site/movement";

export function generateStaticParams() {
  return PLACES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const place = placeBySlug(slug);
  if (!place) return { title: "Not found" };
  return {
    title: place.name,
    description: place.tagline,
  };
}

const dayAnchor = (d: string) => `d${d.split(" ")[0]}`;

export default async function PlacePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const place = placeBySlug(slug);
  if (!place) notFound();

  const color = MOVEMENT_COLOR[place.movement];
  const hero = place.images?.[0];
  const gallery = place.images?.slice(1) ?? [];
  const paragraphs = place.summary.split(/\n\n+/).filter(Boolean);

  const idx = DESTINATIONS.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? DESTINATIONS[idx - 1] : null;
  const next = idx >= 0 && idx < DESTINATIONS.length - 1 ? DESTINATIONS[idx + 1] : null;

  return (
    <article>
      {/* HERO */}
      <header
        className="hero"
        style={{ minHeight: 460, display: "flex", alignItems: "flex-end" }}
      >
        {hero?.url && (
          <div className="hero__media" style={{ backgroundImage: `url(${hero.url})`, opacity: 0.6, mixBlendMode: "normal" }} />
        )}
        <div className="hero__veil" />
        <div className="hero__inner shell" style={{ padding: "48px 24px 44px" }}>
          <Reveal>
            <Link
              href="/places"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--turq-soft)", fontSize: 13, fontWeight: 600, marginBottom: 18 }}
              className="ulink"
            >
              <ArrowLeft size={15} /> All places
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "rgba(255,255,255,0.92)", color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                {createElement(kindIcon(place.kind), { size: 22, strokeWidth: 1.85 })}
              </span>
              <span className="mono" style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "#fff", fontWeight: 700 }}>
                {place.region} · {place.kind}
              </span>
            </div>
            <h1 className="display" style={{ color: "#fff", fontSize: "clamp(40px, 7vw, 72px)", margin: "16px 0 0" }}>
              {place.name}
            </h1>
            <p style={{ color: "#EAF4F2", fontSize: 20, fontStyle: "italic", fontFamily: "var(--font-display)", margin: "10px 0 0" }}>
              {place.tagline}
            </p>
          </Reveal>
        </div>
      </header>
      <WaveDivider />

      {/* BODY */}
      <div className="shell section-sm">
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 44, alignItems: "start" }} className="place-cols">
          {/* main */}
          <div>
            <Reveal className="prose" style={{ fontSize: 17 }}>
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </Reveal>

            {place.highlights.length > 0 && (
              <Reveal>
                <h2 className="serif" style={{ fontSize: 28, color: "var(--ink)", margin: "36px 0 16px" }}>
                  What we&apos;ll do here
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {place.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: 14,
                        padding: "16px 0",
                        borderTop: i > 0 ? "1px solid var(--bone-2)" : "none",
                      }}
                    >
                      <span
                        style={{
                          width: 26, height: 26, flex: "none", marginTop: 2,
                          borderRadius: "50%", background: MOVEMENT_SOFT[place.movement],
                          color, display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                      >
                        <Check size={15} strokeWidth={2.4} />
                      </span>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 16, color: "var(--ink)" }}>{h.title}</div>
                        <div style={{ fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.55, marginTop: 2 }}>{h.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {place.tips && place.tips.length > 0 && (
              <Reveal>
                <div
                  style={{
                    marginTop: 30,
                    background: "var(--surface-sunk)",
                    border: "1px solid var(--border)",
                    borderLeft: `3px solid ${color}`,
                    borderRadius: "var(--radius-md)",
                    padding: "20px 22px",
                  }}
                >
                  <div className="eyebrow" style={{ color, marginBottom: 12 }}>Worth knowing</div>
                  <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 9 }}>
                    {place.tips.map((t, i) => (
                      <li key={i} style={{ fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{t}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>

          {/* sidebar */}
          <aside style={{ display: "flex", flexDirection: "column", gap: 20, position: "sticky", top: 86 }} className="place-aside">
            <Reveal className="card" style={{ padding: "20px 22px" }}>
              <div className="eyebrow" style={{ color, marginBottom: 14 }}>The details</div>
              <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: 0 }}>
                {place.practical.map((row, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex", justifyContent: "space-between", gap: 14,
                      padding: "10px 0",
                      borderTop: i > 0 ? "1px solid var(--bone-2)" : "none",
                    }}
                  >
                    <dt style={{ fontSize: 13, color: "var(--muted)" }}>{row.label}</dt>
                    <dd style={{ margin: 0, fontSize: 13.5, color: "var(--ink)", fontWeight: 600, textAlign: "right", fontFamily: "var(--font-mono)" }}>{row.value}</dd>
                  </div>
                ))}
              </dl>

              {place.bestFor && place.bestFor.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 16 }}>
                  {place.bestFor.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              )}

              {place.relatedDays && place.relatedDays.length > 0 && (
                <div style={{ marginTop: 18 }}>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 8 }}>On the plan</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {place.relatedDays.map((d) => (
                      <Link
                        key={d}
                        href={`/itinerary#${dayAnchor(d)}`}
                        className="chip"
                        style={{ background: MOVEMENT_SOFT[place.movement], borderColor: "transparent", fontFamily: "var(--font-mono)", fontSize: 12 }}
                      >
                        {d}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </Reveal>

            {typeof place.lat === "number" && (
              <Reveal>
                <RouteMapClient focusSlug={slug} height={280} />
              </Reveal>
            )}
          </aside>
        </div>

        {/* gallery */}
        {gallery.length > 0 && (
          <Reveal style={{ marginTop: 44 }}>
            <div className="grid grid-3">
              {gallery.map((img, i) => (
                <figure key={i} className="card" style={{ margin: 0, position: "relative", aspectRatio: "4/3" }}>
                  <ImageWithFallback src={img.url} alt={img.alt || place.name} gradient={`linear-gradient(150deg, ${color}, var(--sea-900))`} />
                </figure>
              ))}
            </div>
            {hero?.credit && (
              <p className="credit" style={{ marginTop: 10 }}>
                Photos via {hero.source || "Wikimedia Commons"}.
              </p>
            )}
          </Reveal>
        )}

        {/* prev / next */}
        <nav
          style={{
            display: "flex", justifyContent: "space-between", gap: 16,
            marginTop: 56, paddingTop: 24, borderTop: "1px solid var(--border)",
          }}
        >
          {prev ? (
            <Link href={`/places/${prev.slug}`} style={{ display: "flex", flexDirection: "column", gap: 4 }} className="lift">
              <span className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                <ArrowLeft size={12} style={{ display: "inline", verticalAlign: "middle" }} /> Previous
              </span>
              <span className="serif" style={{ fontSize: 22, color: "var(--ink)" }}>{prev.name}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/places/${next.slug}`} style={{ display: "flex", flexDirection: "column", gap: 4, textAlign: "right" }} className="lift">
              <span className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Next <ArrowRight size={12} style={{ display: "inline", verticalAlign: "middle" }} />
              </span>
              <span className="serif" style={{ fontSize: 22, color: "var(--ink)" }}>{next.name}</span>
            </Link>
          ) : <span />}
        </nav>

        <div style={{ marginTop: 14, fontSize: 12, color: "var(--muted)" }}>
          <span className="chip" style={{ background: MOVEMENT_SOFT[place.movement], borderColor: "transparent", color: "var(--ink-2)" }}>
            {MOVEMENT_LABEL[place.movement]}
          </span>
        </div>
      </div>
    </article>
  );
}
