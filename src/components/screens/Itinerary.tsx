import { Eyebrow } from "../core/Eyebrow";
import { DayRow } from "../travel/DayRow";
import { DAYS, MOVEMENT_KEY } from "@/data/trip";

export function Itinerary() {
  return (
    <div className="animate-fade-in">
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 18,
        }}
      >
        <div>
          <Eyebrow>Day by day</Eyebrow>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 44,
              lineHeight: 1,
              margin: "8px 0 0",
            }}
          >
            Eleven days, three gears
          </h1>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {MOVEMENT_KEY.map((k) => (
            <span
              key={k.k}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                fontSize: 12.5,
                color: "var(--ink-2)",
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: k.c,
                }}
              />
              {k.label}
            </span>
          ))}
        </div>
      </div>
      <div
        style={{
          background: "var(--paper)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          padding: "10px 14px",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        {DAYS.map((day, i) => (
          <div
            key={day.d}
            style={{
              borderTop: i > 0 ? "1px solid var(--bone-2)" : undefined,
            }}
          >
            <DayRow
              date={day.d}
              weekday={day.wd}
              movement={day.mv}
              highlight={day.hl}
            >
              {day.t}
            </DayRow>
          </div>
        ))}
      </div>
    </div>
  );
}
