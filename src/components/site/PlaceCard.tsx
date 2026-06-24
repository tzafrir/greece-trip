import { createElement } from "react";
import Link from "next/link";
import type { Place } from "@/data/places";
import { ImageWithFallback } from "./ImageWithFallback";
import { MOVEMENT_COLOR, MOVEMENT_SOFT, kindIcon } from "./movement";

export function PlaceCard({ place }: { place: Place }) {
  const color = MOVEMENT_COLOR[place.movement];
  const hero = place.images?.[0];

  return (
    <Link href={`/places/${place.slug}`} className="card place-card lift">
      <div className="place-card__media">
        <ImageWithFallback
          src={hero?.url}
          alt={hero?.alt || place.name}
          gradient={`linear-gradient(160deg, ${color}, var(--sea-700))`}
          label={place.name}
        />
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            zIndex: 2,
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.92)",
            color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          {createElement(kindIcon(place.kind), { size: 17, strokeWidth: 1.9 })}
        </span>
      </div>
      <div className="place-card__stripe" style={{ background: color }} />
      <div className="place-card__body">
        <span className="place-card__kicker" style={{ color }}>
          {place.region || place.kind}
        </span>
        <h3 className="place-card__title">{place.name}</h3>
        <p className="place-card__tagline">{place.tagline}</p>
        {place.bestFor && place.bestFor.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto", paddingTop: 8 }}>
            {place.bestFor.slice(0, 3).map((t) => (
              <span
                key={t}
                className="chip"
                style={{
                  background: MOVEMENT_SOFT[place.movement],
                  borderColor: "transparent",
                  color: "var(--ink-2)",
                  fontSize: 11.5,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
