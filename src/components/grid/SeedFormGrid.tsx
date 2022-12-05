import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Seed } from "src/interfaces/Seed";
import { SeedContext } from "src/contexts/SeedContextProvider";
import SeedGridCard from "./SeedGridCard";

const SeedFormGrid = () => {
  const { seeds, fetchSeeds } = useContext(SeedContext);

  const onChange = (seed: Seed) => {};
  useEffect(() => {
    fetchSeeds();
  }, [fetchSeeds]);

  return (
    <Grid>
      {seeds.map((seed: Seed) => (
        <Grid.Column key={seed._id} mobile={16} tablet={8} computer={2}>
          <SeedGridCard seed={seed} onChange={onChange} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default SeedFormGrid;
