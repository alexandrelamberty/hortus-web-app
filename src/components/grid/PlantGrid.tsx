import { useContext } from "react";
import { Grid } from "semantic-ui-react";
import { Plant } from "src/interfaces/Plant";
import { PlantContext } from "src/providers/PlantContextProvider";
import PlantGridCard from "./PlantGridCard";

const PlantGrid = () => {
  const { plants } = useContext(PlantContext);

  return (
    <Grid>
      {plants.map((plant: Plant) => (
        <Grid.Column key={plant._id} mobile={16} tablet={8} computer={4}>
          <PlantGridCard plant={plant} />
        </Grid.Column>
      ))}
    </Grid>
  );
};
export default PlantGrid;
