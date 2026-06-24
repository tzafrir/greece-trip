"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { GEO_STOPS, ROUTE_LEGS, type GeoStop } from "@/data/trip-meta";
import { MOVEMENT_COLOR, MOVEMENT_LABEL } from "./movement";

const DESTINATION_SLUGS = new Set([
  "athens", "aigio", "patras", "sami", "agia-efimia", "myrtos", "assos",
  "fiskardo", "argostoli", "mount-ainos", "ithaca", "kalavryta",
  "cave-of-the-lakes", "vouraikos", "lake-doxa",
]);

function makeIcon(color: string, size: number, ring: boolean) {
  return L.divIcon({
    className: "route-pin",
    html: `<span style="display:block;width:${size}px;height:${size}px;border-radius:50%;background:${color};border:2.5px solid #fff;box-shadow:0 1px 5px rgba(12,58,78,.5)${ring ? `;outline:3px solid ${color};outline-offset:3px` : ""}"></span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2 - 2],
  });
}

function FitBounds({ positions, focus }: { positions: [number, number][]; focus?: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    if (focus) {
      map.setView(focus, 11, { animate: false });
    } else if (positions.length) {
      map.fitBounds(positions, { padding: [42, 42] });
    }
  }, [map, positions, focus]);
  return null;
}

export function RouteMap({
  focusSlug,
  height = 540,
}: {
  focusSlug?: string;
  height?: number;
}) {
  const bySlug = useMemo(() => {
    const m: Record<string, GeoStop> = {};
    GEO_STOPS.forEach((s) => (m[s.slug] = s));
    return m;
  }, []);

  const positions = useMemo(
    () => GEO_STOPS.map((s) => [s.lat, s.lng] as [number, number]),
    [],
  );

  const legs = useMemo(
    () =>
      ROUTE_LEGS.map((leg) => {
        const a = bySlug[leg.from];
        const b = bySlug[leg.to];
        if (!a || !b) return null;
        return {
          mode: leg.mode,
          positions: [
            [a.lat, a.lng],
            [b.lat, b.lng],
          ] as [number, number][],
        };
      }).filter(Boolean) as { mode: string; positions: [number, number][] }[],
    [bySlug],
  );

  const focus = focusSlug && bySlug[focusSlug]
    ? ([bySlug[focusSlug].lat, bySlug[focusSlug].lng] as [number, number])
    : undefined;

  return (
    <div
      style={{
        height,
        width: "100%",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <MapContainer
        center={focus || [38.15, 21.6]}
        zoom={8}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", background: "#C8E3E9" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {legs.map((leg, i) => (
          <Polyline
            key={i}
            positions={leg.positions}
            pathOptions={{
              color: leg.mode === "ferry" ? "#2FA295" : "#134F66",
              weight: leg.mode === "ferry" ? 3.5 : 3,
              opacity: leg.mode === "ferry" ? 0.9 : 0.65,
              dashArray: leg.mode === "ferry" ? "10 8" : "2 9",
              lineCap: "round",
            }}
          />
        ))}

        {GEO_STOPS.map((s) => {
          const color = MOVEMENT_COLOR[s.movement];
          const isStay = s.kind === "stay" || s.kind === "port";
          const isFocus = focusSlug === s.slug;
          const size = isFocus ? 22 : isStay ? 17 : 12;
          const clickable = DESTINATION_SLUGS.has(s.slug);
          return (
            <Marker key={s.slug} position={[s.lat, s.lng]} icon={makeIcon(color, size, isFocus)}>
              <Popup>
                <div style={{ fontFamily: "var(--font-body)", minWidth: 140 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "var(--ink)", lineHeight: 1.1 }}>
                    {s.name}
                  </div>
                  <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color, fontWeight: 700, marginTop: 3 }}>
                    {MOVEMENT_LABEL[s.movement]}
                  </div>
                  {clickable && (
                    <a
                      href={`/places/${s.slug}`}
                      style={{ display: "inline-block", marginTop: 8, color: "var(--link)", fontWeight: 600, fontSize: 13 }}
                    >
                      Open guide →
                    </a>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}

        <FitBounds positions={positions} focus={focus} />
      </MapContainer>
    </div>
  );
}
