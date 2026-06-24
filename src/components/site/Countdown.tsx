"use client";

import { useEffect, useState } from "react";
import { DEPARTURE_ISO } from "@/data/trip-meta";

function diff(target: number) {
  const now = Date.now();
  const ms = Math.max(0, target - now);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

/**
 * Live countdown to the outbound flight. Renders nothing until mounted to
 * avoid a server/client hydration mismatch on the clock.
 */
export function Countdown() {
  const target = new Date(DEPARTURE_ISO).getTime();
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    // Immediate first tick off the render path (avoids sync setState in effect).
    const raf = requestAnimationFrame(() => setT(diff(target)));
    return () => {
      clearInterval(id);
      cancelAnimationFrame(raf);
    };
  }, [target]);

  const units = [
    { v: t?.days, label: "days" },
    { v: t?.hours, label: "hrs" },
    { v: t?.minutes, label: "min" },
    { v: t?.seconds, label: "sec" },
  ];

  return (
    <div className="countdown" aria-label="Time until departure">
      {units.map((u) => (
        <div className="cd-unit" key={u.label}>
          <b>{t ? String(u.v).padStart(2, "0") : "--"}</b>
          <span>{u.label}</span>
        </div>
      ))}
    </div>
  );
}
