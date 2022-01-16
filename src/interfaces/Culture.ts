/**
 * Culture represent the culture of a seed.
 * 
 */
export interface Culture {
  _id: number
  seed: string
  seeding: string
  transpanting: string
  planting: string
  harvesting: string
  createdAt: Date
  updatedAt: Date
}
