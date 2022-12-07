import { PhaseStatus } from "src/enums/PhaseStatus";
import { Seed } from "./Seed";

/**
 * Culture represent the culture of a Seed.
 * @see Seed
 */
export interface Culture {
  // database id
  _id: number;
  seed: Seed;
  seeding: CulturePhase;
  transplanting: CulturePhase;
  planting: CulturePhase;
  harvesting: CultureHarvestingPhase;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Culture represent a phase of Culture.
 */
export interface CulturePhase {
  type: string;
  // The status of the phase, ie: pending, started...
  status: PhaseStatus;
  // FIXME: enum
  location?: string;
  // the quantity
  quantity?: number;

  soil?: string;
  // count day from start
  duration?: number;
  // Set if a Phase is started
  startedAt?: Date;
  // Set if a Phase is stopped
  endedAt?: Date;
  // Set if a Phase is stopped
  skippedAt?: Date;
}

/**
 * A Phase represent a phase of Culture.
 */
export interface CultureHarvestingPhase {
  type: string;
  // The status of the phase, ie: pending, started...
  status: PhaseStatus;
  // the quantity
  harvest?: Harvest[];
  // Set if a Phase is started
  startedAt?: Date;
  // Set if a Phase is stopped
  endedAt?: Date;
  // Set if a Phase is stopped
  skippedAt?: Date;
}

interface Harvest {
  date: Date;
  quantity: number;
  weight: number;
}
