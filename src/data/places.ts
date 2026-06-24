import type { Movement } from "./trip-meta";

export interface PlaceImage {
  url: string;
  credit?: string;
  source?: string;
  alt?: string;
}

export interface Place {
  slug: string;
  name: string;
  kind: string;
  region?: string;
  tagline: string;
  lat?: number;
  lng?: number;
  summary: string;
  highlights: { title: string; text: string }[];
  practical: { label: string; value: string }[];
  tips?: string[];
  bestFor?: string[];
  relatedDays?: string[];
  images: PlaceImage[];
  movement: Movement;
}

// Which movement each place belongs to (drives its accent colour).
export const MOVEMENT_BY_SLUG: Record<string, Movement> = {
  kefalonia: "explore",
  "agia-efimia": "explore",
  melissani: "explore",
  drogarati: "explore",
  myrtos: "explore",
  antisamos: "explore",
  assos: "explore",
  fiskardo: "explore",
  argostoli: "explore",
  "mount-ainos": "explore",
  ithaca: "explore",
  sami: "switch",
  kalavryta: "adventure",
  "cave-of-the-lakes": "adventure",
  vouraikos: "adventure",
  planitero: "adventure",
  "lake-doxa": "adventure",
  aigio: "transit",
  patras: "transit",
  athens: "transit",
  "ionian-ferry": "transit",
  "weather-august": "theme",
  "ionian-food": "theme",
};

// Populated from the research workflow (src/data/places.data.ts).
import { PLACES_RAW } from "./places.data";

export const PLACES: Place[] = PLACES_RAW.map((p) => ({
  ...p,
  movement: MOVEMENT_BY_SLUG[p.slug] ?? "theme",
})) as Place[];

export const placeBySlug = (slug: string): Place | undefined =>
  PLACES.find((p) => p.slug === slug);

// Destination pages (geographic places only — themes render elsewhere).
export const DESTINATIONS: Place[] = PLACES.filter(
  (p) => p.kind !== "theme" && p.kind !== "ferry",
);

export const themeBySlug = (slug: string): Place | undefined =>
  PLACES.find((p) => p.slug === slug && p.kind === "theme");
