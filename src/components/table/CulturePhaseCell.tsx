import { Button, Label, Table } from "semantic-ui-react";
import { CultureLocation } from "src/enums/CultureLocation";
import { PhaseStatus, getColor } from "src/enums/PhaseStatus";
import { Culture } from "src/interfaces/Culture";

const locations = Object.entries(CultureLocation).map(([key, value]) => ({
  key: value,
  text: key,
  value: value,
}));

type CulturePhaseCellProps = {
  culture: Culture;
  onStart: VoidFunction;
  onStop: VoidFunction;
  onSkip: VoidFunction;
  children?: JSX.Element | JSX.Element[];
};

export default function CulturePhaseCell({
  culture,
  children,
  onStart,
  onStop,
  onSkip,
}: CulturePhaseCellProps) {
  const statusColor = getColor(culture.seeding.status);

  const handleStart = () => {
    console.log("Start");
    onStart();
  };
  const handleStop = () => {
    console.log("Stop");
    onStop();
  };
  const handleSkip = () => {
    console.log("Skip");
    onSkip();
  };

  return (
    <>
      <Table.Cell>
        <Label color={statusColor} key={"color"}>
          {culture.seeding.status}
        </Label>
        {culture.seeding.status == "pending" ? (
          <Button size="mini" icon="play" onClick={() => handleStart()} />
        ) : (
          <Button size="mini" icon="stop" onClick={() => handleStop()} />
        )}
        <Button size="mini" icon="step forward" onClick={() => handleSkip()} />
        {children}
      </Table.Cell>
    </>
  );
}
