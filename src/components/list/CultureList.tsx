import React, { useContext, useEffect } from "react";
import { Button, Grid } from "semantic-ui-react";
import { Culture } from "src/interfaces/Culture";
import { CultureContext } from "src/providers/CultureProvider";
import { PhaseItem } from "../calendar/PhaseItem";

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
