import { PhaseInfo } from "./PhaseInfo";
import { Species } from "./Species";

/**
 * Seed represent a plant seeding.
 * 
 */
export interface Seed {
  _id: number
  species: Species
  name: string
  description: string
  image: string
  type: string
  harvest: number[]
  season: string
  sun: string
  frost: string
  water: string
  companions: Species[]
  competitors: Species[]
  seeding: PhaseInfo
  transplanting: PhaseInfo
  planting: PhaseInfo
  harvesting: PhaseInfo 
  spacing: number
  rows: number
  createdAt: Date
  updatedAt: Date
}
