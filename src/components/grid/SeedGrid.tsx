import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Seed } from "src/interfaces/Seed";
import { SeedContext } from "src/providers/SeedProvider";
import SeedGridCard from "./SeedGridCard";

const SeedGrid = () => {
  const { seeds, fetchSeeds } = useContext(SeedContext);

  useEffect(() => {
    fetchSeeds();
  }, [fetchSeeds]);

  return (
    <Grid>
      {seeds.map((seed: Seed) => (
        <Grid.Column>
          <SeedGridCard key={seed._id} seed={seed} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default SeedGrid;
