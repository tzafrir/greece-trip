"use client";

import { useState } from "react";

/**
 * Hotlinked photos (Wikimedia Commons) with a graceful gradient fallback —
 * a dead image never breaks the page; it falls back to a branded wash.
 */
export function ImageWithFallback({
  src,
  alt,
  gradient = "var(--grad-sea)",
  className,
  style,
  label,
}: {
  src?: string;
  alt: string;
  gradient?: string;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <span
      className={className}
      style={{
        display: "block",
        position: "absolute",
        inset: 0,
        background: gradient,
        ...style,
      }}
    >
      {showImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}
      {!showImage && label && <span className="img-fallback">{label}</span>}
    </span>
  );
}
