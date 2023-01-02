import { Frost } from "src/enums/Frost";
import { Season } from "src/enums/Season";
import { Sun } from "src/enums/Sun";
import { Type } from "src/enums/Type";
import { Water } from "src/enums/Water";
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
