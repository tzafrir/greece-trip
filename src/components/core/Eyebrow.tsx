const colors: Record<string, string> = {
  clay: "var(--clay)",
  sea: "var(--sea-500)",
  muted: "var(--muted)",
  soft: "var(--turq-soft)",
};

export function Eyebrow({
  children,
  color = "clay",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-body)",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.26em",
        textTransform: "uppercase",
        color: colors[color] || colors.clay,
      }}
    >
      {children}
    </span>
  );
}
