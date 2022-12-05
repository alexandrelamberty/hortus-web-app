import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Seed } from "src/interfaces/Seed";
import { SeedContext } from "src/contexts/SeedContextProvider";
import SeedGridCard from "./SeedGridCard";

const SeedGrid = () => {
  const { seeds, fetchSeeds } = useContext(SeedContext);

  useEffect(() => {
    fetchSeeds();
  }, [fetchSeeds]);

  return (
    <Grid>
      {seeds.map((seed: Seed) => (
        <Grid.Column key={seed._id} mobile={16} tablet={8} computer={4}>
          <SeedGridCard seed={seed} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default SeedGrid;
