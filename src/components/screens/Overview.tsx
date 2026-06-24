import { Fragment } from "react";
import { Compass, Waves, Mountain } from "lucide-react";
import { Eyebrow } from "../core/Eyebrow";
import { Badge } from "../core/Badge";
import { MOVEMENTS, ROUTE } from "@/data/trip";

const icons = { compass: Compass, waves: Waves, mountain: Mountain } as const;

export function Overview() {
  return (
    <div className="animate-fade-in">
      <div
        style={{
          background: "var(--grad-sea)",
          borderRadius: "var(--radius-xl)",
          padding: "48px 52px",
          color: "var(--text-onsea)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Eyebrow color="soft">
          21–31 August 2026 · 10 nights · 2 travelers
        </Eyebrow>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 64,
            lineHeight: 0.98,
            letterSpacing: "-0.01em",
            margin: "14px 0 0",
            color: "#fff",
          }}
        >
          Ten nights on
          <br />
          the Ionian
        </h1>
        <p
          style={{
            maxWidth: 540,
            fontSize: 17,
            lineHeight: 1.6,
            margin: "18px 0 0",
            color: "#DCEDEA",
          }}
        >
          A serene, low-friction escape for two — authentic nature up front,
          total switch-off in the middle, a wild mountain finale at the end.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 28,
            fontFamily: "var(--font-mono)",
            fontSize: 12.5,
          }}
        >
          {ROUTE.map((stop, i) => (
            <Fragment key={i}>
              <span style={{ color: "#fff", fontWeight: 700 }}>{stop}</span>
              {i < ROUTE.length - 1 && (
                <span style={{ color: "var(--turq-soft)" }}>&rarr;</span>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginTop: 24,
        }}
      >
        {MOVEMENTS.map((m) => {
          const Icon = icons[m.icon];
          return (
            <article
              key={m.key}
              style={{
                display: "flex",
                background: "var(--paper)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ width: 5, flex: "none", background: m.color }} />
              <div style={{ padding: "22px 24px 26px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: m.soft,
                      color: m.color,
                    }}
                  >
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10.5,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "var(--muted)",
                      marginRight: "auto",
                    }}
                  >
                    Movement {m.n}
                  </span>
                  <Badge tone="neutral" dot={false}>
                    {m.nights}
                  </Badge>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 30,
                    lineHeight: 1,
                    margin: "16px 0 0",
                    color: "var(--ink)",
                  }}
                >
                  {m.title}
                </h2>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--muted)",
                    marginTop: 6,
                  }}
                >
                  {m.place}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "var(--ink-2)",
                    margin: "14px 0 0",
                  }}
                >
                  {m.body}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
