/**
 * Plant represent a plant species with some additional informations
 * 
 */
export interface Plant {
  _id: number
  name: string
  family: string
  genus: string
  species: string
  subspecies: string
  variant: string
  picture: string
  createdAt: Date
  updatedAt: Date
}
