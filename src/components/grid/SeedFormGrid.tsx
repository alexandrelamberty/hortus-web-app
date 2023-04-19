import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Seed } from "src/interfaces/Seed";
import { SeedContext } from "src/contexts/SeedContextProvider";
import SeedGridCard from "./SeedGridCard";
import { CultureContext } from "src/contexts/CultureContextProvider";

type SeedFormGridProps = {
  onChange?: (seed: Seed) => void;
};

const SeedFormGrid = ({ onChange }: SeedFormGridProps) => {
  const { seeds, fetchSeeds } = useContext(SeedContext);
  const { setSelectedSeed } = useContext(CultureContext);

  const handleChange = (seed: Seed) => {
    console.log("handleChange", seed);
    setSelectedSeed(seed);
  };

  useEffect(() => {
    fetchSeeds();
  }, [fetchSeeds]);

  return (
    <Grid>
      {seeds.map((seed: Seed) => (
        <Grid.Column key={seed._id} mobile={16} tablet={8} computer={2}>
          <SeedGridCard seed={seed} onChange={handleChange} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default SeedFormGrid;
