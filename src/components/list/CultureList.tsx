import React, { useEffect } from "react";
import { useContext } from "react";
import { CultureContext } from "src/providers/CultureProvider";
import {
  Button,
  Grid,
  GridRow,
  Item,
  Label,
  List,
  Progress,
} from "semantic-ui-react";
import { Culture } from "src/interfaces/Culture";
import { Seed } from "src/interfaces/Seed";
import { PhaseCalendar } from "../calendar/PhaseCalendar";
import { PhaseItem } from "../calendar/PhaseItem";
import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic";

export default function CultureList() {
  const { cultures, fetchCultures } = useContext(CultureContext);

  useEffect(() => {
    fetchCultures();
    console.log(cultures);
  }, [fetchCultures]);

  return (
    <Grid>
      {cultures.map((culture: Culture) => (
        <CultureListItem culture={culture} />
      ))}
    </Grid>
  );
}

type CultureItemProps = {
  culture: Culture;
};

export const CultureListItem = (item: CultureItemProps) => {
  return (
    <Grid.Row key={item.culture._id}>
      <Grid columns={2}>
        <Button>Test</Button>
        <div>
          <PhaseItem phase={item.culture.seeding} />
          <PhaseItem phase={item.culture.planting} />
          <PhaseItem phase={item.culture.harvesting} />
        </div>
      </Grid>
    </Grid.Row>
  );
};
