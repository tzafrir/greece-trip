import type { Metadata } from "next";
import Link from "next/link";
import { SectionHead } from "@/components/site/SectionHead";
import { Reveal } from "@/components/site/Reveal";
import { PLACES } from "@/data/places";

export const metadata: Metadata = {
  title: "Gallery",
  description: "The whole trip in pictures — caves, beaches, villages, gorges and a high mountain lake. Tap any photo to open its guide.",
};

type Tile = { url: string; alt: string; name: string; slug: string };

// One flat, de-duplicated stream of every researched photo.
const TILES: Tile[] = (() => {
  const seen = new Set<string>();
  const out: Tile[] = [];
  for (const p of PLACES) {
    for (const img of p.images || []) {
      if (seen.has(img.url)) continue;
      seen.add(img.url);
      out.push({ url: img.url, alt: img.alt || p.name, name: p.name, slug: p.slug });
    }
  }
  return out;
})();

export default function GalleryPage() {
  return (
    <div className="container section">
      <SectionHead
        eyebrow="In pictures"
        title="The whole trip, in light"
        lead={`${TILES.length} photographs of the places we're going — every one a real shot of the real spot. Tap to open its guide.`}
      />

      <Reveal>
        <div className="masonry">
          {TILES.map((t, i) => (
            <Link key={t.url} href={`/places/${t.slug}`} className="gtile lift" style={{ animationDelay: `${i * 20}ms` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.url} alt={t.alt} loading="lazy" decoding="async" />
              <span className="gtile__cap">
                <b>{t.name}</b>
              </span>
            </Link>
          ))}
        </div>
      </Reveal>

      <p className="credit" style={{ marginTop: 22, textAlign: "center" }}>
        Photographs via Wikimedia Commons, under their respective licences.
      </p>
    </div>
  );
}
