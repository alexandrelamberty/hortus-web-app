export interface Seed {
  _id: number
  species: string
  name: string
  description: string
  image: string
  type: string
  harvest: number[]
  season: string
  sun: string
  frost: string
  water: string
  companions: []
  competitors: []
  seeding: {}
  transplanting: {}
  planting: {}
  harvesting: {}
  spacing: number
  rows: number
  createdAt: Date
  updatedAt: Date
}
