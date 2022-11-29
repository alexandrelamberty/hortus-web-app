import { Phase } from "./Phase";
import { Seed } from "./Seed";

/**
 * Culture represent a culture of a Seed.
 * @see interfaces/Seed
 */
export interface Culture {
  _id: number;
  seed: Seed;
  seeding: Phase;
  transplanting: Phase;
  planting: Phase;
  harvesting: Phase;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
}
