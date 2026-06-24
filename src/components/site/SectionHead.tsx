import { Reveal } from "./Reveal";

export function SectionHead({
  eyebrow,
  eyebrowColor = "clay",
  title,
  lead,
  align = "left",
}: {
  eyebrow?: string;
  eyebrowColor?: "clay" | "sea" | "soft" | "muted";
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className="sec-head"
      style={{
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
        maxWidth: align === "center" ? "44ch" : undefined,
        marginLeft: align === "center" ? "auto" : undefined,
        marginRight: align === "center" ? "auto" : undefined,
      }}
    >
      {eyebrow && <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span>}
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}
