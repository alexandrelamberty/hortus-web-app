import { Seed } from "./Seed";

/**
 * Culture represent the culture of a seed.
 * 
 */
export interface Culture {
  _id: number
  seed: Seed
  seeding: string
  transpanting: string
  planting: string
  harvesting: string
  createdAt: Date
  updatedAt: Date
}
