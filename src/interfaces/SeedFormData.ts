import { Frost } from "../enums/Frost";
import { Season } from "../enums/Season";
import { Sun } from "../enums/Sun";
import { Type } from "../enums/Type";
import { Water } from "../enums/Water";
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
