import { Grid, Label } from "semantic-ui-react";
import { PhaseStatus } from "src/enums/PhaseStatus";
import { CulturePhase } from "src/interfaces/Culture";
import { PhaseInfo, Seed } from "src/interfaces/Seed";
import PhaseCalendar from "./PhaseCalendar";
import PhaseControlls from "./PhaseControlls";

interface PhaseItemProps {
  seed: PhaseInfo;
  phase: CulturePhase;
  type: string;
}

export function PhaseItem({ seed, phase, type }: PhaseItemProps): JSX.Element {
  const onPhaseChange = (status: string) => {
    console.log("phase change status", status);
  };
  const getColor = () => {
    switch (phase.status) {
      case PhaseStatus.Pending:
        return "purple";
      case PhaseStatus.Skipped:
        return "red";
      case PhaseStatus.Started:
        return "blue";
      case PhaseStatus.Done:
        return "red";
    }
  };

  /**
   * Render details for the specific phase
   */
  const renderDetails = () => {
    switch (type) {
      case "seeding":
        return (
          <>
            <Label color={getColor()}>Indoor</Label>
            <Label color={getColor()}>Loam</Label>
          </>
        );

      case "transplanting":
        return (
          <>
            <Label color={getColor()}>Indoor</Label>
            <Label color={getColor()}>Loam</Label>
          </>
        );

      case "planting":
        return (
          <>
            <Label color={getColor()}>Indoor</Label>
            <Label color={getColor()}>Loam</Label>
          </>
        );

      case "harvesting":
        return (
          <>
            <Label color={getColor()}>Indoor</Label>
            <Label color={getColor()}>Loam</Label>
          </>
        );

      default:
        return <></>;
    }
  };

  return (
    <Grid className="phase-item">
      <Grid.Column width={2}>
        <Label color={getColor()} fluid>
          {phase.status}
        </Label>
      </Grid.Column>
      <Grid.Column width={2}>
        <PhaseControlls
          phase={phase}
          type={type}
          onPhaseChange={onPhaseChange}
        />
      </Grid.Column>
      <Grid.Column width={3}>{renderDetails()}</Grid.Column>
      <Grid.Column width={9}>
        <PhaseCalendar seed={seed} phase={phase} type={type} />
      </Grid.Column>
    </Grid>
  );
}
