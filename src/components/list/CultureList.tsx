import React, { useContext, useEffect } from "react";
import { Button, Grid, Image, List } from "semantic-ui-react";
import { Culture } from "src/interfaces/Culture";
import { CultureContext } from "src/contexts/CultureContextProvider";
import { PhaseItem } from "../calendar/PhaseItem";

export default function CultureList() {
  const { cultures, fetchCultures } = useContext(CultureContext);

  useEffect(() => {
    fetchCultures();
    console.log(cultures);
  }, []);

  return (
    <List>
      {cultures.map((culture: Culture) => (
        <CultureListItem culture={culture} />
      ))}
    </List>
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
export const CultureListItem = ({ culture }: CultureItemProps) => {
  return (
    <List.Item key={culture._id}>
      <Grid className="culture-list-grid">
        <Grid.Column width={2}>
          <img
            style={{ width: "120px", height: "auto", borderRadius: "5px" }}
            src={"http://localhost:3333/static/" + culture.seed.image}
            alt=""
          />{" "}
        </Grid.Column>
        <Grid.Column width={14}>
          <PhaseItem
            seed={culture.seed.seeding}
            phase={culture.seeding}
            type="seeding"
          />
          <PhaseItem
            seed={culture.seed.transplanting}
            phase={culture.seeding}
            type="planting"
          />
          <PhaseItem
            seed={culture.seed.planting}
            phase={culture.planting}
            type="transplanting"
          />
          <PhaseItem
            seed={culture.seed.harvesting}
            phase={culture.harvesting}
            type="harvesting"
          />
        </Grid.Column>
      </Grid>
    </List.Item>
  );
};
