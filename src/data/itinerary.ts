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
    title: "Back across, up the mountain",
    plan: "Wake before dawn for the 08:30 sailing Sami→Patras 08:30→12:00, then climb into the Peloponnese to Kalavryta.",
    sleep: "Kalavryta (to be booked)",
    transport: ["ferry", "car"],
    placeSlugs: ["ionian-ferry", "patras", "kalavryta"],
  },
  {
    date: "30", month: "Aug", weekday: "Sunday", movement: "adventure",
    title: "Cave of the lakes & the gorge",
    plan: "The cascading terraces of the Cave of the Lakes (open on a Sunday), the Vouraikos gorge by car and on foot, and the cold plane-shaded springs of Planitero.",
    sleep: "Kalavryta (to be booked)",
    placeSlugs: ["cave-of-the-lakes", "vouraikos", "planitero"],
  },
  {
    date: "31", month: "Aug", weekday: "Monday", movement: "transit", anchor: true,
    title: "The long way home",
    plan: "Drive Kalavryta→Athens, folding in still, fir-ringed Lake Doxa on the way. Drop the car and fly Athens→Haifa 18:00.",
    sleep: "Home in Haifa",
    transport: ["car", "flight"],
    placeSlugs: ["lake-doxa", "athens"],
  },
];
