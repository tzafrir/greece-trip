import { Eyebrow } from "../core/Eyebrow";
import { Button } from "../core/Button";
import { StayCard } from "../travel/StayCard";
import { SegmentRow } from "../travel/SegmentRow";
import { RefChip } from "../travel/RefChip";
import { STAYS, OUTSTANDING } from "@/data/trip";

export function Bookings() {
  return (
    <div
      className="animate-fade-in"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 340px",
        gap: 28,
        alignItems: "start",
      }}
    >
      <div>
        <Eyebrow>Where we sleep</Eyebrow>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 44,
            lineHeight: 1,
            margin: "8px 0 22px",
          }}
        >
          Four stays, one gap
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
        >
          {STAYS.map((s) => (
            <StayCard key={s.name} {...s} />
          ))}
        </div>
      </div>

      <aside style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            background: "var(--paper)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "18px 20px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 6px",
            }}
          >
            Route legs
          </h3>
          <SegmentRow
            mode="flight"
            from="HFA"
            to="ATH"
            meta="airHaifa · ATR-72"
            duration="07:30→10:25"
          />
          <div style={{ borderTop: "1px solid var(--bone-2)" }} />
          <SegmentRow
            mode="ferry"
            from="Patras"
            to="Sami"
            meta="Levante · Andreas Kalvos"
            duration="13:00→16:30"
            accent="var(--turq)"
          />
          <div style={{ borderTop: "1px solid var(--bone-2)" }} />
          <SegmentRow
            mode="ferry"
            from="Sami"
            to="Patras"
            meta="Return sailing"
            duration="08:30→12:00"
            accent="var(--turq)"
          />
          <div style={{ borderTop: "1px solid var(--bone-2)" }} />
          <SegmentRow
            mode="flight"
            from="ATH"
            to="HFA"
            meta="airHaifa · return"
            duration="18:00 dep"
          />
        </div>

        <div
          style={{
            background: "var(--paper)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "18px 20px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 6px",
            }}
          >
            References
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginTop: 4,
            }}
          >
            <RefChip label="Car · ACR" value="6XD3B6" accent />
            <RefChip label="Ferries" value="2521012486" />
            <RefChip label="Vehicle plate" value="rent123" accent />
          </div>
        </div>

        <div
          style={{
            background: "var(--paper)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "18px 20px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 6px",
            }}
          >
            Outstanding
          </h3>
          <ul
            style={{
              listStyle: "none",
              margin: "4px 0 0",
              padding: 0,
            }}
          >
            {OUTSTANDING.map(([text, tone], i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "8px 0",
                  fontSize: 13.5,
                  lineHeight: 1.4,
                  color: "var(--ink-2)",
                  borderBottom:
                    i < OUTSTANDING.length - 1
                      ? "1px solid var(--bone-2)"
                      : undefined,
                }}
              >
                <span
                  style={{
                    width: 15,
                    height: 15,
                    flex: "none",
                    marginTop: 1,
                    borderRadius: 4,
                    border: `1.5px solid ${tone === "pending" ? "var(--clay)" : "var(--sea-500)"}`,
                  }}
                />
                {text}
              </li>
            ))}
          </ul>
          <Button variant="accent" size="md" full style={{ marginTop: 16 }}>
            Book Kalavryta hotel
          </Button>
        </div>
      </aside>
    </div>
  );
}
