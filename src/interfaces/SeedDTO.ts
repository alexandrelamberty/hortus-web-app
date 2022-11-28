import { Frost } from "src/enums/Frost";
import { Season } from "src/enums/Season";
import { Sun } from "src/enums/Sun";
import { Type } from "src/enums/Type";
import { Water } from "src/enums/Water";
import { PhaseInfo } from "./PhaseInfo";
import { Plant } from "./Plant";

/**
 * Seed
 */
export interface SeedDTO {
  plant: string;
  name: string;
  description: string;
  type: Type;
  // harvest: number[];
  season: Season;
  sun: Sun;
  frost: Frost;
  water: Water;
  companions: string[];
  competitors: string[];
  seeding: PhaseInfo;
  transplanting: PhaseInfo;
  planting: PhaseInfo;
  harvesting: PhaseInfo;
  spacing: number;
  rows: number;
}
