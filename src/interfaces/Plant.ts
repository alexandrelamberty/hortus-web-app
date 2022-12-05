/**
 * FIXME: Move links and relevant info to notes
 * Plant represent a plant species with some additional informations
 * @see https://en.wikipedia.org/wiki/Botanical_nomenclature
 */
export interface Plant {
  // name: {
  //   en: string;
  //   fr: string;
  // };
  name: string;
  /**
   * @see https://en.wikipedia.org/wiki/Binomial_nomenclature
   */
  binomial: string;
  /**
   * @see https://en.wikipedia.org/wiki/Trinomial_nomenclature
   */
  trinomial: string;

  family: string;
  genus: string;
  species: string;
  /**
   * In botany, subspecies is one of many ranks below that of species, such as
   * variety, subvariety, form, and subform.
   * @see https://en.wikipedia.org/wiki/Subspecies#:~:text=In%20botany%2C%20subspecies%20is%20one,tatora.
   */
  subspecies?: string;
  /**
   * @see https://en.wikipedia.org/wiki/Variety_(botany)
   * @see https://en.wikipedia.org/wiki/Infraspecific_name
   */
  variety?: string;
  /**
   * @see https://en.wikipedia.org/wiki/Subvariety
   */
  subvariety?: string;
  /**
   * @see https://en.wikipedia.org/wiki/Form_(botany)
   */
  forma?: string;
  subforma?: string;
  /**
   * @see https://en.wikipedia.org/wiki/Cultivar
   */
  cultivar?: string;
  /**
   * @see https://en.wikipedia.org/wiki/Hybrid_(biology)#Hybrid_plants
   */
  hybrid?: string;
  // common_names: {
  //   en: string[];
  //   fr: string[];
  // };
  readonly _id: string;
  readonly image: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
