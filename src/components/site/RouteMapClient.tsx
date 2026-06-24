"use client";

import dynamic from "next/dynamic";

const RouteMap = dynamic(() => import("./RouteMap").then((m) => m.RouteMap), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: 540,
        width: "100%",
        borderRadius: "var(--radius-xl)",
        border: "1px solid var(--border)",
        background:
          "radial-gradient(120% 140% at 30% 0%, #DCEEF0 0%, #C8E3E9 55%, #BFE2DB 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--sea-700)",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        letterSpacing: "0.08em",
      }}
    >
      loading the route…
    </div>
  ),
});

export function RouteMapClient(props: { focusSlug?: string; height?: number }) {
  return <RouteMap {...props} />;
}
