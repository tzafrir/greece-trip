"use client";

import { useState } from "react";

const palette = {
  primary: { bg: "var(--sea-500)", fg: "#fff", bd: "var(--sea-500)", hover: "var(--sea-700)" },
  accent:  { bg: "var(--clay)",    fg: "#fff", bd: "var(--clay)",    hover: "#A5552F" },
  quiet:   { bg: "var(--bone-2)",  fg: "var(--ink)", bd: "var(--border)", hover: "var(--sand)" },
  ghost:   { bg: "transparent",    fg: "var(--sea-700)", bd: "transparent", hover: "var(--sea-100)" },
  outline: { bg: "transparent",    fg: "var(--ink)", bd: "var(--border-strong)", hover: "var(--bone-2)" },
} as const;

const sizes = {
  sm: { padding: "8px 14px",  font: "13px" },
  md: { padding: "11px 20px", font: "14px" },
  lg: { padding: "15px 28px", font: "16px" },
} as const;

type Variant = keyof typeof palette;
type Size = keyof typeof sizes;

export function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  disabled = false,
  onClick,
  style,
  iconLeft,
  iconRight,
}: {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  full?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}) {
  const p = palette[variant] || palette.primary;
  const s = sizes[size] || sizes.md;
  const [hover, setHover] = useState(false);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: full ? "flex" : "inline-flex",
        width: full ? "100%" : undefined,
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: s.padding,
        fontSize: s.font,
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        letterSpacing: "0.01em",
        lineHeight: 1,
        color: p.fg,
        background: disabled ? "var(--sand)" : hover ? p.hover : p.bg,
        border: `1.5px solid ${disabled ? "var(--sand)" : hover ? p.hover : p.bd}`,
        borderRadius: "var(--radius-pill)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.65 : 1,
        transition:
          "background var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)",
        transform: hover && !disabled ? "translateY(-1px)" : "none",
        ...style,
      }}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
