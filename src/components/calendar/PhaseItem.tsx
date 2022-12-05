import React from "react";
import { Grid, Label, LabelGroup } from "semantic-ui-react";
import { PhaseStatus } from "src/enums/PhaseStatus";
import { Phase } from "src/interfaces/Phase";
import PhaseCalendar from "./PhaseCalendar";
import PhaseControlls from "./PhaseControlls";

interface PhaseItemProps {
  phase: Phase;
  type: string;
}
export function PhaseItem({ phase, type }: PhaseItemProps): JSX.Element {
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
    <Grid className="phase-item-grid" columns={4}>
      <Grid.Column width={2}>
        <Label color={getColor()}>{phase.status}</Label>
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
        <PhaseCalendar phase={phase} />
      </Grid.Column>
    </Grid>
  );
}
