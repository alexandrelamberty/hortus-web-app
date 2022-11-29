import { Input, Label, Table } from "semantic-ui-react";
import { PhaseActions } from "src/enums/PhaseActions";
import { getColor } from "src/enums/PhaseStatus";
import { Phase } from "src/interfaces/Phase";
import { PhaseControl } from "../button/PhaseControl";
import { HarvestingForm } from "../form/HarvestingForm";

type PhaseCellProps = {
  // remove must be in the Phase object
  type: string;
  phase: Phase;
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
            {/*  */}
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
  return (
    <Table.Cell>
      <Label.Group>
        <Label color={statusColor}>{phase.status}</Label>
        {renderControlls()}
      </Label.Group>
      {/* <HarvestingForm /> */}
    </Table.Cell>
  );
};

export default PhaseTableCell;
