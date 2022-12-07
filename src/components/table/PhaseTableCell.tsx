import { Label } from "semantic-ui-react";
import { PhaseActions } from "src/enums/PhaseActions";
import { getColor } from "src/enums/PhaseStatus";
import { CulturePhase } from "src/interfaces/Culture";
import { PhaseControl } from "../button/PhaseControl";
import PhaseCalendar from "../calendar/PhaseCalendar";

type PhaseCellProps = {
  // remove must be in the Phase object
  type: string;
  phase: CulturePhase;
  onPhaseChange: (status: PhaseActions) => void;
};

/**
 * Display a Phase informations and add controls to change is status.
 *
 * @see Phase
 * @param param0
 * @returns JSX.Element
 */
const PhaseTableCell = ({ type, phase, onPhaseChange }: PhaseCellProps) => {
  const statusColor = getColor(phase.status);

  /**
   * Render controlls for the phase status
   * @returns
   */
  const renderControlls = () => {
    switch (phase.status) {
      case "pending":
        return (
          <>
            <PhaseControl
              name="play"
              icon="play"
              tooltip="Start phase"
              onClick={() => {
                onPhaseChange(PhaseActions.START);
              }}
            />{" "}
            <PhaseControl
              name="skip"
              icon="step forward"
              tooltip="Skip phase"
              onClick={() => {
                onPhaseChange(PhaseActions.SKIP);
              }}
            />
          </>
        );
      case "skipped":
        return (
          <>
            <PhaseControl
              name="reset"
              icon="undo"
              tooltip="Reset phase"
              onClick={() => {
                onPhaseChange(PhaseActions.RESET);
              }}
            />
          </>
        );
      case "started":
        return (
          <>
            <PhaseControl
              name="done"
              icon="check"
              tooltip="End phase"
              onClick={() => {
                onPhaseChange(PhaseActions.END);
              }}
            />
            {type === "harvesting" && (
              <PhaseControl
                name="harvest"
                icon="shopping basket"
                tooltip="Harvest update"
                onClick={() => {
                  onPhaseChange(PhaseActions.UPDATE);
                }}
              />
            )}
            {/* details switch phase type */}
            {renderDetails()}
          </>
        );
      case "done":
        return (
          <>
            <PhaseControl
              name="done"
              icon="check"
              tooltip="End phase"
              onClick={() => {
                onPhaseChange(PhaseActions.END);
              }}
            />
          </>
        );
      default:
        return <></>;
    }
  };
  /**
   * Render details for the specific phase
   */
  const renderDetails = () => {
    switch (type) {
      case "seeding":
        return <p>Date / Quantity</p>;

      case "transplanting":
        return <p>transplanting</p>;

      case "planting":
        return <p>planting</p>;

      case "harvesting":
        return <p>harvested quantity / kg</p>;

      default:
        return <></>;
    }
  };

  return (
    <>
      <Label.Group>
        <Label color={statusColor}>{phase.status}</Label>
        {renderControlls()}
        {/* <PhaseCalendar phase={phase} /> */}
      </Label.Group>
    </>
  );
};

export default PhaseTableCell;
