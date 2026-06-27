export const STAYS = [
  {
    name: "Vrachos Suites",
    place: "Aigio (mainland)",
    dates: "21 Aug",
    nights: 1,
    status: "booked" as const,
    banner: "var(--grad-dawn)",
    tags: ["Sea view", "1-bedroom", "Free parking"],
    note: "Overnight before the ferry — a flight delay can’t break the plan.",
  },
  {
    name: "Natassa Apartments",
    place: "Agia Efimia, Kefalonia",
    dates: "22–26 Aug",
    nights: 4,
    status: "booked" as const,
    banner: "var(--grad-sea)",
    tags: ["Studio", "Frontal sea view", "Family-run"],
    note: "Free cancellation until 23 July 2026.",
  },
  {
    name: "Ionian Emerald Resort",
    place: "Karavomylos, Kefalonia",
    dates: "26–29 Aug",
    nights: 3,
    status: "booked" as const,
    banner: "var(--grad-sea)",
    tags: ["5-star", "Spa · hammam", "Private beach"],
    note: "~5 min from Sami port — minimal transfer friction.",
  },
  {
    name: "Hotel Anerada",
    place: "Kalavryta, Achaia",
    dates: "29–30 Aug",
    nights: 1,
    status: "booked" as const,
    banner: "var(--grad-hills)",
    tags: ["Mountain", "~756 m", "Cool air"],
    note: "Booked — base for the cave-and-springs afternoon.",
  },
  {
    name: "Avant Blue Boutique Hotel",
    place: "Loutraki / Corinth",
    dates: "30–31 Aug",
    nights: 1,
    status: "booked" as const,
    banner: "var(--grad-dawn)",
    tags: ["Boutique", "Sea view", "Athens-gateway"],
    note: "Booked — promenade dinner, then a short hop to the airport.",
  },
];

export const DAYS = [
  { d: "21", wd: "Fri", mv: "transit", hl: true, t: "Fly HFA→ATH 07:30→10:25; pick up ACR car; drive Athens→Aigio; overnight Vrachos Suites." },
  { d: "22", wd: "Sat", mv: "transit", hl: true, t: "Drive Aigio→Patras; ferry Patras→Sami 13:00→16:30; check in Natassa, Agia Efimia." },
  { d: "23", wd: "Sun", mv: "explore", hl: false, t: "Kefalonia — Melissani & Drogarati caves; Myrtos beach." },
  { d: "24", wd: "Mon", mv: "explore", hl: false, t: "Kefalonia — Assos & Fiskardo villages; Antisamos." },
  { d: "25", wd: "Tue", mv: "explore", hl: false, t: "Kefalonia — Mt Ainos, or an Ithaca day trip by walk-on ferry." },
  { d: "26", wd: "Wed", mv: "switch", hl: true, t: "Check out Natassa; ~20 min drive to Karavomylos; check in Ionian Emerald." },
  { d: "27", wd: "Thu", mv: "switch", hl: false, t: "Resort — do nothing, beautifully. Private beach, spa, hammam." },
  { d: "28", wd: "Fri", mv: "switch", hl: false, t: "Resort — the sacred do-nothing zone continues." },
  { d: "29", wd: "Sat", mv: "transit", hl: true, t: "Check out; ferry Sami→Patras 08:30→12:00; drive Patras→Kalavryta; overnight." },
  { d: "30", wd: "Sun", mv: "adventure", hl: false, t: "Cave of the Lakes (Kastria); Vouraikos Gorge by car; Planitero springs." },
  { d: "31", wd: "Mon", mv: "transit", hl: true, t: "Drive Kalavryta→ATH via Lake Doxa; drop car; fly ATH→HFA 18:00; home." },
];

export const OUTSTANDING: [string, "pending" | "info"][] = [
  ["Reserve a Nemea winery tasting (book ahead; keep a driver)", "pending"],
  ["Obtain IDP from MEMSI before departure", "pending"],
  ["Update the ferry vehicle plate to the real rental plate", "pending"],
  ["Travel / medical insurance", "pending"],
  ["Collect paper ferry tickets (Patras / Sami)", "info"],
  ["Euros cash — climate tax, tolls, tavernas", "info"],
];

export const ROUTE = ["Haifa", "Athens", "Patras", "Kefalonia", "Kalavryta", "Corinth", "Athens", "Haifa"];

export const MOVEMENTS = [
  {
    n: "01",
    key: "explore",
    color: "var(--olive)",
    soft: "var(--olive-soft)",
    title: "Explore",
    place: "Kefalonia · Agia Efimia base",
    nights: "4 nights",
    body: "Curiosity mode. Caves, beaches, lakes, villages — variety and discovery at your own pace, from a serene harbour.",
    icon: "compass" as const,
  },
  {
    n: "02",
    key: "switch",
    color: "var(--turq)",
    soft: "var(--turq-soft)",
    title: "Switch off",
    place: "Karavomylos · Ionian Emerald",
    nights: "3 nights",
    body: "The sacred do-nothing zone. Zero movement, zero friction, zero fighting over territory. Frictionless rest.",
    icon: "waves" as const,
  },
  {
    n: "03",
    key: "adventure",
    color: "var(--clay)",
    soft: "var(--clay-soft)",
    title: "One last adventure",
    place: "Kalavryta · Peloponnese",
    nights: "2 nights",
    body: "Mountains, a gorge, a high lake on the way out. Wild landscape as a finale, earned after the stillness.",
    icon: "mountain" as const,
  },
];

export const MOVEMENT_KEY = [
  { k: "explore", label: "Explore", c: "var(--olive)" },
  { k: "switch", label: "Switch off", c: "var(--turq)" },
  { k: "adventure", label: "Adventure", c: "var(--clay)" },
  { k: "transit", label: "Transit", c: "var(--sea-500)" },
];
