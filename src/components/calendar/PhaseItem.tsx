import React from "react";
import { Grid, Item } from "semantic-ui-react";
import { PhaseCalendar } from "./PhaseCalendar";
import { PhaseControlls } from "./PhaseControlls";

export function PhaseItem({ phase }: any): JSX.Element {
  return (
    <Grid columns={2}>
      <PhaseControlls />
      <PhaseCalendar />
    </Grid>
  );
}
