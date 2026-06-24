import Link from "next/link";
import { RefChip } from "@/components/travel/RefChip";

export function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--sea-900)",
        color: "var(--text-onsea)",
        marginTop: 40,
      }}
    >
      <div className="container" style={{ padding: "56px 24px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 36,
            alignItems: "start",
          }}
          className="footer-grid"
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 30,
                fontWeight: 600,
                color: "#fff",
              }}
            >
              Tzafrir{" "}
              <span style={{ color: "var(--gold)", fontStyle: "italic" }}>&amp;</span>{" "}
              Ori
            </div>
            <p
              style={{
                marginTop: 12,
                maxWidth: "40ch",
                fontSize: 14.5,
                lineHeight: 1.65,
                color: "#BFD6D2",
              }}
            >
              Ten nights on the Ionian — explore, switch off, one last adventure.
              A trip for the two of us, kept deliberately small.
            </p>
          </div>

          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--turq-soft)",
                marginBottom: 12,
              }}
            >
              The trip
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 9 }}>
              {[
                ["/itinerary", "Day by day"],
                ["/places", "Every place"],
                ["/map", "The route"],
                ["/stays", "Stays & bookings"],
                ["/guide", "Practical guide"],
                ["/gallery", "Gallery"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{ color: "#DCEDEA", fontSize: 14.5 }}
                    className="ulink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--turq-soft)",
                marginBottom: 12,
              }}
            >
              On hand
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <RefChip label="Car · ACR" value="6XD3B6" accent />
              <RefChip label="Ferries" value="2521012486" />
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
            paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontFamily: "var(--font-mono)",
            fontSize: 11.5,
            color: "#9FBDB9",
          }}
        >
          <span>21–31 Aug 2026 · 10 nights · 2 pax</span>
          <span>Haifa → Athens → Patras → Kefalonia → Kalavryta → Athens → Haifa</span>
        </div>
      </div>
    </footer>
  );
}
