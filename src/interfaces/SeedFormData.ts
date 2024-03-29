import { Frost } from "src/enums/Frost";
import { Season } from "src/enums/Season";
import { Sun } from "src/enums/Sun";
import { Type } from "src/enums/Type";
import { Water } from "src/enums/Water";
import { SeedPhaseInfo } from "./Seed";

/**
 * Shape of the SeedForm properties
 */
export interface SeedFormData {
  id?: string;
  // The species id
  species: string;
  name: string;
  description: string;
  type: Type;
  season: Season;
  sun: Sun;
  frost: Frost;
  water: Water;
  // plants ids
  companions: string[];
  // plants ids
  competitors: string[];
  seeding: SeedPhaseInfo;
  transplanting: SeedPhaseInfo;
  planting: SeedPhaseInfo;
  harvesting: SeedPhaseInfo;
  spacing: number;
  rows: number;
  harvest: number[];
  image: File;
}
