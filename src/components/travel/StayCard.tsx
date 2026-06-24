import { Badge } from "../core/Badge";
import { Tag } from "../core/Tag";

export function StayCard({
  name,
  place,
  dates,
  nights,
  status = "booked",
  statusLabel,
  tags = [],
  banner = "var(--grad-sea)",
  note,
}: {
  name: string;
  place?: string;
  dates?: string;
  nights?: number;
  status?: "booked" | "pending" | "info" | "neutral";
  statusLabel?: string;
  tags?: string[];
  banner?: string;
  bannerImage?: string;
  note?: string;
}) {
  const label =
    statusLabel ||
    (status === "booked"
      ? "Booked"
      : status === "pending"
        ? "Not booked"
        : "Info");
  return (
    <div
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        fontFamily: "var(--font-body)",
        color: "var(--ink-2)",
      }}
    >
      <div
        style={{
          height: 96,
          background: banner,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: 12,
        }}
      >
        <Badge tone={status}>{label}</Badge>
      </div>
      <div style={{ padding: "16px 18px 18px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 12,
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 24,
              lineHeight: 1.1,
              margin: 0,
              color: "var(--ink)",
            }}
          >
            {name}
          </h3>
          {nights != null && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--muted)",
                whiteSpace: "nowrap",
              }}
            >
              {nights} {nights === 1 ? "night" : "nights"}
            </span>
          )}
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 6,
            fontSize: 13.5,
            color: "var(--muted)",
          }}
        >
          {place && <span>{place}</span>}
          {place && dates && <span aria-hidden="true">&middot;</span>}
          {dates && (
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>
              {dates}
            </span>
          )}
        </div>
        {tags.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 7,
              marginTop: 14,
            }}
          >
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
        {note && (
          <p
            style={{
              margin: "14px 0 0",
              fontSize: 13,
              lineHeight: 1.5,
              color: "var(--ink-2)",
              fontStyle: "italic",
            }}
          >
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
