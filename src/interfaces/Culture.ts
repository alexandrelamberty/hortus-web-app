import { CultureLocation } from "../enums/CultureLocation";
import { CultureSoil } from "../enums/CultureSoil";
import { PhaseStatus } from "../enums/PhaseStatus";
import { Seed } from "./Seed";

/**
 * Culture represent the culture of a Seed.
 * @see Seed
 */
export interface Culture {
  _id: number; // The unique mongo id
  seed: Seed;
  seeding: CulturePhase;
  transplanting: CulturePhase;
  planting: CulturePhase;
  harvesting: HarvestingPhase;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Cultivation phase common information
 */
export interface CulturePhase {
  type: string; // The phase type
  status: PhaseStatus; // The status of the phase, ie: pending, started...
  startedAt?: Date; // Date the phase was started
  endedAt?: Date; // Date the phase was ended
  skippedAt?: Date; // Date the phase was skipped
  duration?: number; // Duration in days of the phase
}

export interface CulturePhaseLocation {
  soil?: CultureSoil; // Soil used
  location?: CultureLocation; // The growing location
}

/**
 * Sowing phase
 * FIXME: Rename to SowingPhase
 */
export interface SeedingPhase extends CulturePhase, CulturePhaseLocation {
  quantity?: number; // The amount of seeds used
}

/**
 * Transplanting phase
 */
export interface TransplantingPhase extends CulturePhase, CulturePhaseLocation {
  quantity?: number; // The amount of plants used
}

/**
 * Planting phase
 */
export interface PlantingPhase extends CulturePhase, CulturePhaseLocation {
  quantity?: number; // The amount of plants used
}

/**
 * Harvesting phase
 * FIXME: Rename to HarvestingPhase
 */
export interface HarvestingPhase extends CulturePhase {
  harvests?: Harvest[]; // The quantities and weights harvested
}

interface Harvest {
  date: Date; // Harvest day date
  quantity: number; // Harvest quantity in unit / pieces
  weight: number; // Harvest weight in kg
}
