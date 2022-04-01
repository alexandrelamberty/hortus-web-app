import { PhaseInfo } from "./PhaseInfo";
import { Species } from "./Species";

export interface SeedFormData {
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
}
