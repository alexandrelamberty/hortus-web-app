import { PhaseInfo } from "./PhaseInfo";
import { Plant } from "./Plant";

export interface SeedFormData {
  species: Plant
  name: string
  description: string
  image: string
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
}
