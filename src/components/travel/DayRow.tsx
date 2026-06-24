const movements: Record<string, string> = {
  explore: "var(--olive)",
  switch: "var(--turq)",
  adventure: "var(--clay)",
  transit: "var(--sea-500)",
  none: "var(--border-strong)",
};

export function DayRow({
  date,
  weekday,
  movement = "none",
  highlight = false,
  children,
}: {
  date: string;
  weekday?: string;
  movement?: string;
  highlight?: boolean;
  children: React.ReactNode;
}) {
  const stripe = movements[movement] || movements.none;
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        padding: "14px 16px",
        background: highlight ? "var(--bone-2)" : "transparent",
        borderRadius: "var(--radius-md)",
        fontFamily: "var(--font-body)",
      }}
    >
      <div style={{ width: 58, flex: "none", textAlign: "right" }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 22,
            lineHeight: 1,
            color: "var(--ink)",
          }}
        >
          {date}
        </div>
        {weekday && (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10.5,
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginTop: 3,
            }}
          >
            {weekday}
          </div>
        )}
      </div>
      <div
        style={{
          width: 3,
          flex: "none",
          borderRadius: 2,
          background: stripe,
        }}
      />
      <div
        style={{
          flex: 1,
          fontSize: 14.5,
          lineHeight: 1.5,
          color: "var(--ink-2)",
          alignSelf: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
