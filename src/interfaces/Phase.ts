import { PhaseStatus } from "src/enums/PhaseStatus"



/**
 * A Phase represent a phase of Culture.
 * @see interfaces/Culture
 */
export interface Phase {
  type: string
  // The status of the phase, ie: pending, started...
  status: PhaseStatus
  // Set if a Phase is started
  started?: string
  // Set if a Phase is stopped
  ended?: string;
  // the quantity
  quantity?: number
  // the soil type, only for seeding, transplanting and planting 
  soil?: string
  // count day from start
  duration?: number
  // Notes / Events
  // notes / events : X[]
}
