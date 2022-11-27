/**
 * Plant represent a plant species with some additional informations
 *
 */
export interface Plant {
  readonly _id: number;
  // Binomial name
  name: string;
  binomial: string;
  family: string;
  genus: string;
  species: string;
  subspecies: string;
  variety: string;
  cultivar: string;
  hybrid: string;
  forma: string;
  //
  picture: string;
  createdAt: Date;
  updatedAt: Date;
}
