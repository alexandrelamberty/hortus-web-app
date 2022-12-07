import { Frost } from "src/enums/Frost";
import { Season } from "src/enums/Season";
import { Sun } from "src/enums/Sun";
import { Type } from "src/enums/Type";
import { Water } from "src/enums/Water";
import { Plant } from "./Plant";

/**
 * Seed botanical and culture informations.
 */
export interface Seed {
  _id: string;
  plant: Plant;
  name: string;
  description: string;
  type: Type;
  harvest: number[];
  season: Season;
  sun: Sun;
  frost: Frost;
  water: Water;
  companions: Plant[];
  competitors: Plant[];
  seeding: PhaseInfo;
  transplanting: PhaseInfo;
  planting: PhaseInfo;
  harvesting: PhaseInfo;
  spacing: number;
  rows: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Preconized period and estimated duration for a culture phase.
 */
export interface PhaseInfo {
  start: number;
  end: number;
  duration: number;
}
