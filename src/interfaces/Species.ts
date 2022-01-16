/**
 * Species represent a plant species with some additional informations
 * 
 */
export interface Species {
  _id: number
  name: string
  family: string
  genus: string
  species: string
  subspecies: string
  createdAt: Date
  updatedAt: Date
}
