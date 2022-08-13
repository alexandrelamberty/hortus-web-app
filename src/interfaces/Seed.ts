import { PhaseInfo } from "./PhaseInfo";
import { Plant } from "./Plant";

/**
 * Seed represent a plant seeding.
 * 
 */
export interface Seed {
  _id: number
  plant: Plant
  name: string
  description: string
  picture: string
  type: string
  harvest: number[]
  season: string
  sun: string
  frost: string
  water: string
  companions: Plant[]
  competitors: Plant[]
  seeding: PhaseInfo
  transplanting: PhaseInfo
  planting: PhaseInfo
  harvesting: PhaseInfo
  spacing: number
  rows: number
  createdAt: Date
  updatedAt: Date
}
