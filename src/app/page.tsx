"use client";

import { useState } from "react";
import { Overview } from "@/components/screens/Overview";
import { Itinerary } from "@/components/screens/Itinerary";
import { Bookings } from "@/components/screens/Bookings";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "bookings", label: "Bookings" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function Home() {
  const [tab, setTab] = useState<TabId>("overview");

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 40px",
          borderBottom: "1px solid var(--border)",
          background: "var(--paper)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span
            style={{
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--clay)",
            }}
          >
            Greece · 21–31 Aug 2026
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 24,
              lineHeight: 1,
              color: "var(--ink)",
            }}
          >
            Tzafrir{" "}
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              &amp;
            </span>{" "}
            Ori
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 4,
            background: "var(--bone-2)",
            padding: 4,
            borderRadius: "var(--radius-pill)",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                border: 0,
                background: tab === t.id ? "var(--paper)" : "transparent",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 600,
                color: tab === t.id ? "var(--sea-700)" : "var(--muted)",
                padding: "9px 20px",
                borderRadius: "var(--radius-pill)",
                cursor: "pointer",
                transition: `all var(--dur-fast) var(--ease-soft)`,
                boxShadow: tab === t.id ? "var(--shadow-xs)" : "none",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11.5,
            color: "var(--muted)",
          }}
        >
          10 nights · 2 pax
        </div>
      </nav>

      <main
        style={{
          flex: 1,
          maxWidth: 1180,
          width: "100%",
          margin: "0 auto",
          padding: 40,
        }}
      >
        {tab === "overview" && <Overview />}
        {tab === "itinerary" && <Itinerary />}
        {tab === "bookings" && <Bookings />}
      </main>
    </div>
  );
}
