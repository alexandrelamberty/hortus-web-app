import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { Seed } from "src/interfaces/Seed";
import { SeedContext } from "src/providers/SeedProvider";
import SeedGridCard from "./SeedGridCard";

export default function SeedGrid() {
  const { seeds, fetchSeeds } = useContext(SeedContext);

  useEffect(() => {
    fetchSeeds();
  }, [fetchSeeds]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
      {seeds.map((seed: Seed) => (
        <Grid.Column>
          <SeedGridCard key={seed._id} seed={seed} />
        </Grid.Column>
      ))}
    </div>
  );
}
