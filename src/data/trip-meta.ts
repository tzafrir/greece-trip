// Trip-wide metadata: fixed facts, the three movements, geo coordinates for the
// route map, and the headline numbers. Logistics here mirror the fact sheet.

export type Movement = "explore" | "switch" | "adventure" | "transit" | "theme";

export const MOVEMENT_META: Record<
  Exclude<Movement, "theme">,
  { label: string; color: string; soft: string; tagline: string }
> = {
  explore: { label: "Explore", color: "var(--olive)", soft: "var(--olive-soft)", tagline: "Kefalonia, at our own pace" },
  switch: { label: "Switch off", color: "var(--turq)", soft: "var(--turq-soft)", tagline: "The sacred do-nothing zone" },
  adventure: { label: "One last adventure", color: "var(--clay)", soft: "var(--clay-soft)", tagline: "The mountain roll to the Corinth gateway" },
  transit: { label: "Transit", color: "var(--sea-500)", soft: "var(--sea-100)", tagline: "Engineered to glide" },
};

// Outbound flight: 21 Aug 2026, 07:30 Haifa time (UTC+3).
export const DEPARTURE_ISO = "2026-08-21T07:30:00+03:00";
export const RETURN_ISO = "2026-08-31T18:00:00+03:00";

export const TRIP = {
  title: "Ten nights on the Ionian",
  dates: "21–31 August 2026",
  nights: 10,
  travelers: 2,
  travelerNames: ["Tzafrir", "Ori"],
  oneLiner:
    "A serene, low-friction escape for two — authentic nature up front, total switch-off in the middle, a wild mountain finale at the end.",
};

export const STATS: { num: string; label: string }[] = [
  { num: "10", label: "nights away" },
  { num: "3", label: "emotional gears" },
  { num: "5", label: "stays, all booked" },
  { num: "2", label: "ferry crossings" },
  { num: "7", label: "nights on Kefalonia" },
  { num: "~700", label: "km of driving" },
];

export const MOVEMENTS = [
  {
    n: "01",
    key: "explore" as const,
    title: "Explore",
    place: "Kefalonia · Agia Efimia base",
    nights: "4 nights",
    body: "Curiosity mode. Caves, beaches, lakes, villages — variety and discovery at your own pace, from a serene harbour.",
    icon: "compass" as const,
  },
  {
    n: "02",
    key: "switch" as const,
    title: "Switch off",
    place: "Karavomylos · Ionian Emerald",
    nights: "3 nights",
    body: "The sacred do-nothing zone. Zero movement, zero friction, zero fighting over territory. Frictionless rest.",
    icon: "waves" as const,
  },
  {
    n: "03",
    key: "adventure" as const,
    title: "One last adventure",
    place: "Kalavryta → the Corinth gateway",
    nights: "2 nights",
    body: "A west-to-east roll out of the mountains — caves, springs, a high postcard lake — easing into a vineyard valley, a clifftop fortress and a seaside town a short hop from the airport. Nature leads; the culture is seasoning.",
    icon: "mountain" as const,
  },
];

// Geo coordinates [lat, lng] for the route map. Real, approximate positions.
export type GeoStop = {
  slug: string;
  name: string;
  lat: number;
  lng: number;
  movement: Movement;
  kind: "stay" | "stop" | "sight" | "port";
  label?: boolean;
};

export const GEO_STOPS: GeoStop[] = [
  { slug: "athens", name: "Athens (ATH)", lat: 37.936, lng: 23.947, movement: "transit", kind: "port", label: true },
  { slug: "aigio", name: "Aigio", lat: 38.251, lng: 22.081, movement: "transit", kind: "stay", label: true },
  { slug: "patras", name: "Patras", lat: 38.246, lng: 21.735, movement: "transit", kind: "port", label: true },
  { slug: "sami", name: "Sami / Karavomylos", lat: 38.252, lng: 20.643, movement: "switch", kind: "stay", label: true },
  { slug: "agia-efimia", name: "Agia Efimia", lat: 38.301, lng: 20.601, movement: "explore", kind: "stay", label: true },
  { slug: "myrtos", name: "Myrtos", lat: 38.342, lng: 20.534, movement: "explore", kind: "sight" },
  { slug: "assos", name: "Assos", lat: 38.382, lng: 20.539, movement: "explore", kind: "sight" },
  { slug: "fiskardo", name: "Fiskardo", lat: 38.455, lng: 20.578, movement: "explore", kind: "sight" },
  { slug: "argostoli", name: "Argostoli", lat: 38.174, lng: 20.489, movement: "explore", kind: "sight", label: true },
  { slug: "mount-ainos", name: "Mt Ainos", lat: 38.147, lng: 20.657, movement: "explore", kind: "sight" },
  { slug: "ithaca", name: "Ithaca", lat: 38.366, lng: 20.718, movement: "explore", kind: "sight" },
  { slug: "kalavryta", name: "Kalavryta", lat: 38.031, lng: 22.111, movement: "adventure", kind: "stay", label: true },
  { slug: "cave-of-the-lakes", name: "Cave of the Lakes", lat: 37.934, lng: 22.072, movement: "adventure", kind: "sight" },
  { slug: "vouraikos", name: "Vouraikos Gorge", lat: 38.096, lng: 22.193, movement: "adventure", kind: "sight" },
  { slug: "lake-doxa", name: "Lake Doxa", lat: 37.907, lng: 22.300, movement: "adventure", kind: "sight" },
  { slug: "nemea", name: "Nemea", lat: 37.821, lng: 22.711, movement: "adventure", kind: "sight", label: true },
  { slug: "loutraki", name: "Loutraki / Corinth", lat: 37.978, lng: 22.965, movement: "adventure", kind: "stay", label: true },
  { slug: "acrocorinth", name: "Acrocorinth", lat: 37.891, lng: 22.870, movement: "adventure", kind: "sight" },
  { slug: "corinth-canal", name: "Corinth Isthmus", lat: 37.930, lng: 22.987, movement: "adventure", kind: "sight" },
  { slug: "ancient-corinth", name: "Ancient Corinth", lat: 37.906, lng: 22.879, movement: "adventure", kind: "sight" },
];

// Ordered legs of the journey for the animated route line.
export type RouteLeg = { from: string; to: string; mode: "flight" | "drive" | "ferry" };
export const ROUTE_LEGS: RouteLeg[] = [
  { from: "athens", to: "aigio", mode: "drive" },
  { from: "aigio", to: "patras", mode: "drive" },
  { from: "patras", to: "sami", mode: "ferry" },
  { from: "sami", to: "agia-efimia", mode: "drive" },
  { from: "agia-efimia", to: "sami", mode: "ferry" },
  { from: "sami", to: "patras", mode: "ferry" },
  { from: "patras", to: "kalavryta", mode: "drive" },
  { from: "kalavryta", to: "lake-doxa", mode: "drive" },
  { from: "lake-doxa", to: "nemea", mode: "drive" },
  { from: "nemea", to: "loutraki", mode: "drive" },
  { from: "loutraki", to: "athens", mode: "drive" },
];

export const DRIVES: { segment: string; distance: string; time: string }[] = [
  { segment: "Athens (ATH) → Aigio", distance: "~150 km", time: "~2h" },
  { segment: "Aigio → Patras port", distance: "~40 km", time: "~40 min" },
  { segment: "Patras → Sami", distance: "ferry", time: "3h30" },
  { segment: "Agia Efimia → Karavomylos", distance: "—", time: "~20 min" },
  { segment: "Sami → Patras", distance: "ferry", time: "3h30" },
  { segment: "Patras → Kalavryta", distance: "~90 km", time: "~1.5–2h" },
  { segment: "Kalavryta → Cave / Planitero", distance: "~17–25 km", time: "~30–40 min" },
  { segment: "Kalavryta → Lake Doxa", distance: "~60–70 km", time: "~1h15–1h30" },
  { segment: "Lake Doxa → Nemea", distance: "~50–60 km", time: "~1h–1h15" },
  { segment: "Nemea → Loutraki", distance: "~50 km", time: "~45 min" },
  { segment: "Loutraki → Acrocorinth", distance: "~20 km", time: "~20–25 min" },
  { segment: "Loutraki / Isthmus → Athens (ATH)", distance: "~110 km", time: "~1h15–1h30" },
];
