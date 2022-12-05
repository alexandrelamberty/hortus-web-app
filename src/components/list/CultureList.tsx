import React, { useContext, useEffect } from "react";
import { Button, Grid, Image } from "semantic-ui-react";
import { Culture } from "src/interfaces/Culture";
import { CultureContext } from "src/contexts/CultureContextProvider";
import { PhaseItem } from "../calendar/PhaseItem";

export default function CultureList() {
  const { cultures, fetchCultures } = useContext(CultureContext);

  useEffect(() => {
    fetchCultures();
    console.log(cultures);
  }, [fetchCultures]);

  return (
    <Grid columns={1}>
      {cultures.map((culture: Culture) => (
        <CultureListItem culture={culture} />
      ))}
    </Grid>
  );
}

type CultureItemProps = {
  culture: Culture;
};

/**
 *
 * @param item
 * @returns
 */
export const CultureListItem = (item: CultureItemProps) => {
  return (
    <Grid.Row key={item.culture._id}>
      <Grid columns={2}>
        <Grid.Column width={2}>
          <img
            style={{ height: "112px" }}
            src={"http://localhost:3333/static/" + item.culture.seed.image}
            alt=""
          />
        </Grid.Column>
        <Grid.Column width={13}>
          <PhaseItem phase={item.culture.seeding} type="seeding" />
          <PhaseItem phase={item.culture.seeding} type="planting" />
          <PhaseItem phase={item.culture.planting} type="transplanting" />
          <PhaseItem phase={item.culture.harvesting} type="harvesting" />
        </Grid.Column>
      </Grid>
    </Grid.Row>
  );
};
