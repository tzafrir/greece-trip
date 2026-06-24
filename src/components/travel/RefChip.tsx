export function RefChip({
  label,
  value,
  accent = false,
}: {
  label?: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: 3,
        padding: "9px 14px",
        background: "var(--bone-2)",
        border: `1px dashed ${accent ? "var(--clay)" : "var(--border-strong)"}`,
        borderRadius: "var(--radius-sm)",
        fontFamily: "var(--font-mono)",
      }}
    >
      {label && (
        <span
          style={{
            fontSize: 9.5,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          {label}
        </span>
      )}
      <span
        style={{
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: "0.03em",
          color: accent ? "var(--clay)" : "var(--ink)",
        }}
      >
        {value}
      </span>
    </div>
  );
}
