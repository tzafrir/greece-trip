import {
  Plane,
  Ship,
  CarFront,
  Footprints,
  MountainSnow,
  Navigation,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const glyphs: Record<string, LucideIcon> = {
  flight: Plane,
  ferry: Ship,
  car: CarFront,
  walk: Footprints,
  cave: MountainSnow,
};

export function SegmentRow({
  mode = "car",
  from,
  to,
  meta,
  duration,
  accent = "var(--sea-500)",
}: {
  mode?: string;
  from: string;
  to: string;
  meta?: string;
  duration?: string;
  accent?: string;
}) {
  const Icon = glyphs[mode] || Navigation;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 0",
        fontFamily: "var(--font-body)",
      }}
    >
      <span
        style={{
          width: 38,
          height: 38,
          flex: "none",
          borderRadius: "50%",
          background: "var(--bone-2)",
          border: `1.5px solid ${accent}`,
          color: accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={18} strokeWidth={1.75} />
      </span>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontWeight: 600,
              fontSize: 15,
              color: "var(--ink)",
              whiteSpace: "nowrap",
            }}
          >
            {from}
          </span>
          <span
            style={{
              flex: 1,
              height: 0,
              borderTop: "2px dotted var(--border-strong)",
              minWidth: 18,
            }}
          />
          <span
            style={{
              fontWeight: 600,
              fontSize: 15,
              color: "var(--ink)",
              whiteSpace: "nowrap",
            }}
          >
            {to}
          </span>
        </div>
        {meta && (
          <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 3 }}>
            {meta}
          </div>
        )}
      </div>

      {duration && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12.5,
            color: "var(--sea-700)",
            whiteSpace: "nowrap",
            fontWeight: 700,
          }}
        >
          {duration}
        </span>
      )}
    </div>
  );
}
