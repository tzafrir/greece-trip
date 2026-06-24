/**
 * A soft wave dividing a sea-coloured band from the bone page — the recurring
 * Ionian motif. `flip` points the trough upward; `fill` overrides the colour.
 */
export function WaveDivider({
  flip = false,
  fill = "var(--surface-page)",
  height = 60,
}: {
  flip?: boolean;
  fill?: string;
  height?: number;
}) {
  return (
    <svg
      className="wave"
      style={{ height, transform: flip ? "rotate(180deg)" : undefined }}
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill={fill}
        d="M0,32 C180,64 360,4 540,16 C720,28 900,72 1080,64 C1260,56 1380,20 1440,12 L1440,60 L0,60 Z"
      />
    </svg>
  );
}
