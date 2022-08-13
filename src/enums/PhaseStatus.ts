import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic"

export enum PhaseStatus {
  Pending = 'pending',
  Started = 'started',
  Skipped = 'skipped',
  Stopped = 'stopped',
}

export function getStatus(senum: string): string {
  switch (senum) {
    case PhaseStatus.Pending:
      return "Pending"
    case PhaseStatus.Started:
      return "Started"
    case PhaseStatus.Skipped:
      return "Skipped"
    case PhaseStatus.Stopped:
      return "Stopped"
    default:
      return "Pending"
  }
}

export function getColor(senum: string): SemanticCOLORS {
  switch (senum) {
    case PhaseStatus.Pending:
      return "red"
    case PhaseStatus.Started:
      return "green"
    case PhaseStatus.Skipped:
      return "grey"
    case PhaseStatus.Stopped:
      return "orange"
    default:
      return "red"
  }
}