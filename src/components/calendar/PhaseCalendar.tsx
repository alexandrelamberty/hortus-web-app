import React from "react";
import { Grid } from "semantic-ui-react";
import { Phase } from "src/interfaces/Phase";

interface PhaseCalendarProps {
  phase: Phase;
}

const PhaseCalendar = ({ phase }: PhaseCalendarProps) => {
  return (
    <Grid columns={12} className="phase-item-calendar">
      <Grid.Column color={"red"} key={"red"}></Grid.Column>
      <Grid.Column color={"red"} key={"red"}></Grid.Column>
      <Grid.Column color={"red"} key={"red"}></Grid.Column>
      <Grid.Column color={"blue"} key={"red"}></Grid.Column>
      <Grid.Column color={"blue"} key={"red"}></Grid.Column>
      <Grid.Column color={"blue"} key={"red"}></Grid.Column>
      <Grid.Column color={"red"} key={"red"}></Grid.Column>
      <Grid.Column color={"red"} key={"red"}></Grid.Column>
      <Grid.Column color={"red"} key={"red"}></Grid.Column>
      <Grid.Column color={"red"} key={"red"}></Grid.Column>
      <Grid.Column color={"red"} key={"red"}></Grid.Column>
      <Grid.Column color={"red"} key={"red"}></Grid.Column>
    </Grid>
  );
};

export default PhaseCalendar;
