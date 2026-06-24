"use client";

const tones = {
  booked:  { bg: "rgba(63,143,91,.13)",  fg: "var(--green)", dot: "var(--green)" },
  pending: { bg: "rgba(190,103,64,.13)", fg: "var(--clay)",  dot: "var(--clay)" },
  info:    { bg: "rgba(30,122,147,.12)", fg: "var(--sea-700)", dot: "var(--sea-500)" },
  neutral: { bg: "var(--bone-2)",        fg: "var(--ink-2)", dot: "var(--muted)" },
} as const;

type Tone = keyof typeof tones;

export function Badge({
  children,
  tone = "neutral",
  dot = true,
}: {
  children: React.ReactNode;
  tone?: Tone;
  dot?: boolean;
}) {
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "6px 13px",
        borderRadius: "var(--radius-pill)",
        background: t.bg,
        color: t.fg,
        fontFamily: "var(--font-body)",
        fontSize: 12.5,
        fontWeight: 600,
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      {dot && (
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: t.dot,
            flex: "none",
          }}
        />
      )}
      {children}
    </span>
  );
}
