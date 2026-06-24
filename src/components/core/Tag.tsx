export function Tag({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 11px",
        borderRadius: "var(--radius-sm)",
        border: `1px solid ${active ? "var(--turq)" : "var(--border)"}`,
        background: active ? "var(--turq-soft)" : "var(--paper)",
        color: active ? "var(--sea-900)" : "var(--ink-2)",
        fontFamily: "var(--font-body)",
        fontSize: 12.5,
        fontWeight: 500,
        lineHeight: 1.2,
      }}
    >
      {children}
    </span>
  );
}
