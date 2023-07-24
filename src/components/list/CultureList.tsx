import { Grid, List } from "semantic-ui-react";
import { Culture } from "../../interfaces/Culture";
import { PhaseItem } from "../calendar/PhaseItem";

type CultureListProps = {
  cultures: Culture[];
};

/**
 * Display a list of culture
 */
export default function CultureList({ cultures }: CultureListProps) {
  return (
    <List>
      {cultures.map((culture) => (
        <CultureListItem key={culture._id} culture={culture} />
      ))}
    </List>
  );
}

type CultureItemProps = {
  culture: Culture;
};

/**
 *  Display a culture
 */
export const CultureListItem = ({ culture }: CultureItemProps) => {
  return (
    <List.Item>
      <Grid className="culture-list-grid">
        <Grid.Column width={2}>
          <img
            style={{ width: "120px", height: "auto", borderRadius: "5px" }}
            src={"http://localhost:3333/static/" + culture.seed?.image}
            alt=""
          />{" "}
        </Grid.Column>
        <Grid.Column width={14}>
          <PhaseItem
            culture={culture}
            seed={culture.seed?.sowing}
            phase={culture.seeding}
            type="seeding"
          />
          <PhaseItem
            culture={culture}
            seed={culture.seed?.transplanting}
            phase={culture.seeding}
            type="planting"
          />
          <PhaseItem
            culture={culture}
            seed={culture.seed?.planting}
            phase={culture.planting}
            type="transplanting"
          />
          <PhaseItem
            culture={culture}
            seed={culture.seed?.harvesting}
            phase={culture.harvesting}
            type="harvesting"
          />
        </Grid.Column>
      </Grid>
    </List.Item>
  );
};
