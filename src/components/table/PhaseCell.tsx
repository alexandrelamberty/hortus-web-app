import { Button, Label, Table } from "semantic-ui-react";
import { getColor, PhaseStatus } from "src/enums/PhaseStatus";
import { Phase } from "src/interfaces/Phase";

type PhaseCellProps = {
  phase: Phase;
  onPhaseChange: (status: PhaseStatus) => void;
};

/**
 * Display a Phase informations and add controls to change is status.
 *
 * @see Phase
 * @param param0
 * @returns
 */
const PhaseCell = ({ phase, onPhaseChange }: PhaseCellProps) => {
  const statusColor = getColor(phase.status);

  return (
    <Table.Cell>
      <Label color={statusColor} key={"color"}>
        {phase.status}
      </Label>
      {phase.status === PhaseStatus.Pending ||
        (phase.status === PhaseStatus.Started && (
          <>
            <Button
              name="skip"
              size="mini"
              icon="step forward"
              onClick={() => onPhaseChange(PhaseStatus.Skipped)}
            />
          </>
        ))}
      {phase.status === PhaseStatus.Skipped ||
        phase.status === PhaseStatus.Stopped ||
        (phase.status === PhaseStatus.Pending && (
          <Button
            name="start"
            size="mini"
            icon="play"
            onClick={() => onPhaseChange(PhaseStatus.Started)}
          />
        ))}
      {phase.status === PhaseStatus.Started && (
        <>
          <Button
            name="stop"
            size="mini"
            icon="stop"
            onClick={() => onPhaseChange(PhaseStatus.Stopped)}
          />
        </>
      )}
    </Table.Cell>
  );
};

export default PhaseCell;
