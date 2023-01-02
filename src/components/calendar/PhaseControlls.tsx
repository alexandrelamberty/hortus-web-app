import { PhaseActions } from "src/enums/PhaseActions";
import { PhaseStatus } from "src/enums/PhaseStatus";
import { CultureHarvestingPhase, CulturePhase } from "src/interfaces/Culture";
import { SeedPhaseInfo } from "src/interfaces/Seed";
import { PhaseControl } from "../button/PhaseControl";

type PhaseCellProps = {
  // FIXME: bad design !
  type: string;
  phase: CulturePhase | CultureHarvestingPhase;
  onPhaseAction: (action: PhaseActions) => void;
};

/**
 * Display the culture phase controls to execute action on that phase.
 * @see Phase
 * @see PhaseActions
 */
const PhaseControlls = ({ type, phase, onPhaseAction }: PhaseCellProps) => {
  /**
   * Render controls according to the phase status
   * @returns
   */
  const renderControlls = () => {
    switch (phase.status) {
      case PhaseStatus.Pending:
        return (
          <>
            <PhaseControl
              name="play"
              icon="play"
              tooltip="Start phase"
              onClick={() => {
                onPhaseAction(PhaseActions.START);
              }}
            />{" "}
            <PhaseControl
              name="skip"
              icon="step forward"
              tooltip="Skip phase"
              onClick={() => {
                onPhaseAction(PhaseActions.SKIP);
              }}
            />
          </>
        );
      case PhaseStatus.Skipped:
        return (
          <>
            <PhaseControl
              name="reset"
              icon="undo"
              tooltip="Reset phase"
              onClick={() => {
                onPhaseAction(PhaseActions.RESET);
              }}
            />
          </>
        );
      case PhaseStatus.Started:
        return (
          <>
            <PhaseControl
              name="done"
              icon="check"
              tooltip="End phase"
              onClick={() => {
                onPhaseAction(PhaseActions.END);
              }}
            />{" "}
            {type === "harvesting" && (
              <PhaseControl
                name="harvest"
                icon="shopping basket"
                tooltip="Harvest update"
                onClick={() => {
                  onPhaseAction(PhaseActions.UPDATE);
                }}
              />
            )}
          </>
        );
      case PhaseStatus.Done:
        return (
          <>
            <PhaseControl
              name="done"
              icon="check"
              tooltip="End phase"
              onClick={() => {
                onPhaseAction(PhaseActions.END);
              }}
            />
          </>
        );
      default:
        return <></>;
    }
  };

  return renderControlls();
};

export default PhaseControlls;
