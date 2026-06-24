import {
  Compass,
  Waves,
  Mountain,
  Route,
  Sparkles,
  Ship,
  MountainSnow,
  Castle,
  Trees,
  Droplets,
  Waypoints,
  Building2,
  Sailboat,
  Umbrella,
  type LucideIcon,
} from "lucide-react";
import type { Movement } from "@/data/trip-meta";

export const MOVEMENT_ICON: Record<Movement, LucideIcon> = {
  explore: Compass,
  switch: Waves,
  adventure: Mountain,
  transit: Route,
  theme: Sparkles,
};

export const MOVEMENT_COLOR: Record<Movement, string> = {
  explore: "var(--olive)",
  switch: "var(--turq)",
  adventure: "var(--clay)",
  transit: "var(--sea-500)",
  theme: "var(--gold)",
};

export const MOVEMENT_SOFT: Record<Movement, string> = {
  explore: "var(--olive-soft)",
  switch: "var(--turq-soft)",
  adventure: "var(--clay-soft)",
  transit: "var(--sea-100)",
  theme: "rgba(214,162,62,0.18)",
};

export const MOVEMENT_LABEL: Record<Movement, string> = {
  explore: "Explore",
  switch: "Switch off",
  adventure: "Adventure",
  transit: "Transit",
  theme: "Good to know",
};

// Icon per place kind, for cards & headers.
export const KIND_ICON: Record<string, LucideIcon> = {
  island: Sailboat,
  village: Castle,
  town: Building2,
  city: Building2,
  port: Ship,
  beach: Umbrella,
  cave: MountainSnow,
  mountain: Mountain,
  gorge: Mountain,
  lake: Droplets,
  spring: Droplets,
  ferry: Ship,
  theme: Sparkles,
  forest: Trees,
  default: Waypoints,
};

export const kindIcon = (kind: string): LucideIcon =>
  KIND_ICON[kind] ?? KIND_ICON.default;
