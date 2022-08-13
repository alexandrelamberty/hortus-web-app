import React, { useEffect } from "react";
import { useContext } from "react";
import { Container, Grid } from "semantic-ui-react";
import PlantGridCard from "./PlantGridCard";
import { PlantContext } from "src/providers/PlantContextProvider";
import { Plant } from "src/interfaces/Plant";

export default function PlantGrid() {
  const { plants } = useContext(PlantContext);

  useEffect(() => {
    // dispatch("FETCH_PLANT", null);
  }, [plants]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {plants.map((plant: Plant) => (
        <Grid.Column>
          <PlantGridCard plant={plant} />
        </Grid.Column>
      ))}
    </div>
  );
}
