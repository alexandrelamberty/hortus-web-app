import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic";

/**
 * Represent the state of a Phase
 * @see interfaces/Phase
 */
export enum PhaseStatus {
  Pending = "pending",
  Started = "started",
  Skipped = "skipped",
  Stopped = "stopped",
  Done = "done",
}

/**
 * ? needed anymore
 * @param senum
 * @returns
 */
export function getStatus(senum: string): string {
  switch (senum) {
    case PhaseStatus.Pending:
      return "Pending";
    case PhaseStatus.Started:
      return "Started";
    case PhaseStatus.Skipped:
      return "Skipped";
    case PhaseStatus.Stopped:
      return "Stopped";
    case PhaseStatus.Done:
      return "Done";
    default:
      return "Pending";
  }
}

/**
 * Return
 * @param senum The
 * @returns A SemanticCOLORS
 */
export function getColor(senum: string): SemanticCOLORS {
  switch (senum) {
    case PhaseStatus.Pending:
      return "red";
    case PhaseStatus.Started:
      return "teal";
    case PhaseStatus.Skipped:
      return "grey";
    case PhaseStatus.Stopped:
      return "yellow";
    case PhaseStatus.Done:
      return "green";
    default:
      return "red";
  }
}
