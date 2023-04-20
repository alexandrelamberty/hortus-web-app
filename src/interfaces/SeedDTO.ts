import { Frost } from "../enums/Frost";
import { Season } from "../enums/Season";
import { Sun } from "../enums/Sun";
import { Type } from "../enums/Type";
import { Water } from "../enums/Water";
import { SeedPhaseInfo } from "./Seed";

/**
 * Seed
 */
export interface SeedDTO {
  plant: string;
  name: string;
  description: string;
  type: Type;
  // FIXME: harvest: number[];
  season: Season;
  sun: Sun;
  frost: Frost;
  water: Water;
  companions: string[];
  competitors: string[];
  seeding: SeedPhaseInfo;
  transplanting: SeedPhaseInfo;
  planting: SeedPhaseInfo;
  harvesting: SeedPhaseInfo;
  spacing: number;
  rows: number;
}
