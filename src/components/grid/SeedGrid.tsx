import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Seed } from "../../interfaces/Seed";
import { SeedContext } from "../../contexts/SeedContextProvider";
import SeedGridCard from "./SeedGridCard";

type GridProps = {
  onChange: (seed: Seed) => void;
};

const SeedGrid = ({ onChange }: GridProps) => {
  const { seeds, fetchSeeds } = useContext(SeedContext);

  useEffect(() => {
    fetchSeeds();
  }, [fetchSeeds]);

  return (
    <Grid>
      {seeds.map((seed: Seed) => (
        <Grid.Column key={seed._id} mobile={16} tablet={8} computer={4}>
          <SeedGridCard seed={seed} onChange={onChange} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default SeedGrid;
