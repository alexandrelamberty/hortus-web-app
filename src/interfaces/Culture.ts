import { Phase } from "./Phase";
import { Seed } from "./Seed";

/**
 * Culture represent the culture of a seed.
 * 
 */
export interface Culture {
  _id: number
  seed: Seed
  seeding: Phase
  transplanting: Phase
  planting: Phase
  harvesting: Phase
  picture: string
  createdAt: Date
  updatedAt: Date
}
