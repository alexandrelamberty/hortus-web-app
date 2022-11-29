import { useCallback, useContext } from "react";
import { SeedContext } from "src/contexts/SeedContextProvider";

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
