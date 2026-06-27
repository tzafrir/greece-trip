import type { Movement } from "./trip-meta";

export interface ItineraryDay {
  date: string; // "21"
  month: string; // "Aug"
  weekday: string;
  movement: Movement;
  title: string;
  plan: string;
  sleep?: string;
  transport?: ("flight" | "ferry" | "car")[];
  placeSlugs?: string[];
  anchor?: boolean; // a hinge day (check-in/out, crossing)
}

export const ITINERARY: ItineraryDay[] = [
  {
    date: "21", month: "Aug", weekday: "Friday", movement: "transit", anchor: true,
    title: "Land, and drive west",
    plan: "Fly Haifa→Athens 07:30→10:25, pick up the ACR car, and drive out along the gulf to Aigio. An overnight before the ferry — so a flight delay can't break the plan.",
    sleep: "Vrachos Suites · Aigio",
    transport: ["flight", "car"],
    placeSlugs: ["athens", "aigio"],
  },
  {
    date: "22", month: "Aug", weekday: "Saturday", movement: "transit", anchor: true,
    title: "Across to the island",
    plan: "Short drive Aigio→Patras, collect the paper ferry tickets, and sail Patras→Sami 13:00→16:30. Check in at Natassa in Agia Efimia as the light goes gold.",
    sleep: "Natassa Apartments · Agia Efimia",
    transport: ["car", "ferry"],
    placeSlugs: ["patras", "ionian-ferry", "agia-efimia"],
  },
  {
    date: "23", month: "Aug", weekday: "Sunday", movement: "explore",
    title: "Caves, then the famous beach",
    plan: "Melissani's noon sunbeam and the big chambers of Drogarati in the morning; the white cliffs of Myrtos in the afternoon.",
    sleep: "Natassa Apartments · Agia Efimia",
    placeSlugs: ["melissani", "drogarati", "myrtos"],
  },
  {
    date: "24", month: "Aug", weekday: "Monday", movement: "explore",
    title: "North to the pretty villages",
    plan: "Assos on its isthmus and refined little Fiskardo up north; a swim at green-backed Antisamos on the way back.",
    sleep: "Natassa Apartments · Agia Efimia",
    placeSlugs: ["assos", "fiskardo", "antisamos"],
  },
  {
    date: "25", month: "Aug", weekday: "Tuesday", movement: "explore",
    title: "The mountain, or the next island",
    plan: "Choose the day: the black-fir slopes of Mt Ainos, or a walk-on ferry to Ithaca. Argostoli's waterfront if we want a town evening.",
    sleep: "Natassa Apartments · Agia Efimia",
    placeSlugs: ["mount-ainos", "ithaca", "argostoli"],
  },
  {
    date: "26", month: "Aug", weekday: "Wednesday", movement: "switch", anchor: true,
    title: "Into the do-nothing zone",
    plan: "Check out of Natassa and make the ~20-minute hop to Karavomylos. Check in to the Ionian Emerald — and stop moving.",
    sleep: "Ionian Emerald Resort · Karavomylos",
    transport: ["car"],
    placeSlugs: ["sami"],
  },
  {
    date: "27", month: "Aug", weekday: "Thursday", movement: "switch",
    title: "Do nothing, beautifully",
    plan: "Private beach, the spa, the hammam, the slow soak. Frictionless rest — the reward in the middle of the trip.",
    sleep: "Ionian Emerald Resort · Karavomylos",
    placeSlugs: ["sami"],
  },
  {
    date: "28", month: "Aug", weekday: "Friday", movement: "switch",
    title: "The sacred zone continues",
    plan: "Zero movement, zero friction, zero fighting over territory. We'll win those lounge chairs.",
    sleep: "Ionian Emerald Resort · Karavomylos",
    placeSlugs: ["sami"],
  },
  {
    date: "29", month: "Aug", weekday: "Saturday", movement: "adventure", anchor: true,
    title: "Ferry, then into the mountains",
    plan: "Wake before dawn for the 08:30 sailing Sami→Patras 08:30→12:00, then climb into the Peloponnese to Kalavryta. Afternoon: the timed Cave of the Lakes first (arrive by ~16:30), then the cold plane-shaded springs of Planitero — or trade the cave for a stretch of the Vouraikos gorge. Dinner up in cool Kalavryta.",
    sleep: "Anerada Hotel · Kalavryta",
    transport: ["ferry", "car"],
    placeSlugs: ["ionian-ferry", "patras", "cave-of-the-lakes", "planitero", "kalavryta"],
  },
  {
    date: "30", month: "Aug", weekday: "Sunday", movement: "adventure", anchor: true,
    title: "Roll east: lake, vines, coast",
    plan: "Leave Kalavryta early for still, fir-ringed Lake Doxa, then drop into the Nemea valley — a family-winery tasting (one of us drives) and the uncrowded ancient stadium. On to Loutraki: a Geraneia sunset drive and dinner on the promenade.",
    sleep: "Avant Blue Boutique Hotel · Loutraki / Corinth",
    transport: ["car"],
    placeSlugs: ["lake-doxa", "nemea", "loutraki"],
  },
  {
    date: "31", month: "Aug", weekday: "Monday", movement: "transit", anchor: true,
    title: "Isthmus gems, then fly",
    plan: "Acrocorinth at opening, cool and empty, for the view rather than the ruins. Then the Corinth Canal bridge and the quirky sinking bridge at Isthmia (optional Ancient Corinth if we're ahead), a light lunch, and the short hop to ATH for the 18:00 flight home.",
    sleep: "Home in Haifa",
    transport: ["car", "flight"],
    placeSlugs: ["acrocorinth", "corinth-canal", "athens"],
  },
];
