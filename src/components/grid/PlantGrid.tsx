import { Grid } from "semantic-ui-react";
import { Plant } from "../../interfaces/Plant";
import PlantGridCard from "./PlantGridCard";

type PlantGridProps = {
  plants: Plant[];
};

const PlantGrid = ({ plants }: PlantGridProps) => {
  return (
    <Grid inverted>
      {plants.map((plant: Plant) => (
        <Grid.Column key={plant._id} mobile={16} tablet={8} computer={4}>
          <PlantGridCard plant={plant} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default PlantGrid;
