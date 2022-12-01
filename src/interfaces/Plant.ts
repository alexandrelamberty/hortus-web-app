/**
 * Plant represent a plant species with some additional informations
 * @see https://en.wikipedia.org/wiki/Botanical_nomenclature
 */
export interface Plant {
  name: string;
  binomial: string;
  family: string;
  genus: string;
  species: string;
  subspecies?: string;
  variety?: string;
  cultivar?: string;
  hybrid?: string;
  forma?: string;
  readonly _id: string;
  readonly picture: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
