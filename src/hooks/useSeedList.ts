import { useCallback, useContext } from "react";
import { SeedContext } from "src/contexts/SeedProvider";

export function useSeedListt() {
  const { seeds, fetchSeeds } = useContext(SeedContext);

  const handleSeedRemove = useCallback(
    () => () => {
      fetchSeeds;
    },
    [fetchSeeds]
  );

  return {
    handleSeedRemove,
    seeds,
  };
}
