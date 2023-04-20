import { Frost } from "../enums/Frost";
import { Season } from "../enums/Season";
import { Sun } from "../enums/Sun";
import { Type } from "../enums/Type";
import { Water } from "../enums/Water";
import { Plant } from "./Plant";

interface PairRange extends Array<number | number> {
  0: number;
  1: number;
}

/**
 * Seed botanical and culture informations.
 */
export interface Seed {
  _id: string; // The database unique identifier
  plant: Plant; // The species of this seed
  name: string; // The name of this seed
  description: string; // A short description of the seed
  type: Type; //
  harvest: PairRange; // Range estimation time from sowing to harvest in days
  season: Season;
  sun: Sun;
  frost: Frost;
  water: Water;
  companions: Plant[]; // Companion plants
  competitors: Plant[]; // Competitors plants
  sowing: SeedPhaseInfo;
  transplanting: SeedPhaseInfo;
  planting: SeedPhaseInfo;
  harvesting: SeedPhaseInfo;
  spacing: number;
  rows: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Preconized period and estimated duration for a culture phase.
 * FIXME: Have a list of phase info by location, indoor, outdoor, frame,
 * greenhouse...
 */
export interface SeedPhaseInfo {
  start: number;
  end: number;
  duration: number;
}

export interface SeedPhaseRecommendation {}
