import { CultureLocation } from "src/enums/CultureLocation";
import { CultureSoil } from "src/enums/CultureSoil";
import { PhaseStatus } from "src/enums/PhaseStatus";
import { Seed } from "./Seed";

/**
 * Culture represent the culture of a Seed.
 * @see Seed
 */
export interface Culture {
  // The unique mongo id
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
 * Cultivation phase common information
 */
export interface CulturePhase {
  // The phase type
  type: string;

  // The status of the phase, ie: pending, started...
  status: PhaseStatus;

  // Date the phase was started
  startedAt?: Date;

  // Date the phase was ended
  endedAt?: Date;

  // Date the phase was skipped
  skippedAt?: Date;

  // Dureation in days of the phase
  duration?: number;
}

export interface CulturePhaseLocation {
  // Soil used
  soil?: CultureSoil;

  // The growing location
  location?: CultureLocation;
}

/**
 * Sowing phase
 * FIXME: Rename to SowingPhase
 */
export interface SeedingPhase extends CulturePhase, CulturePhaseLocation {
  // The amount of seeds used
  quantity?: number;
}

/**
 * Transplanting phase
 */
export interface TransplantingPhase extends CulturePhase, CulturePhaseLocation {
  // The amount of plants used
  quantity?: number;
}

/**
 * Planting phase
 */
export interface PlantingPhase extends CulturePhase, CulturePhaseLocation {
  // The amount of plants used
  quantity?: number;
}

/**
 * Harvesting phase
 * FIXME: Rename to HarvestingPhase
 */
export interface CultureHarvestingPhase extends CulturePhase {
  // The quantities and weights harvested
  harvest?: Harvest[];
}

interface Harvest {
  // Harvest day date
  date: Date;
  // Harvest quantity in unit / pieces
  quantity: number;
  // Harvest weight in kg
  weight: number;
}
