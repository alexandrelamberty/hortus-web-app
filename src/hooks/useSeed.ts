import { useCallback, useContext } from "react";
import { SeedContext } from "src/contexts/SeedContextProvider";

/**
 * FIXME: Move methods that synchronize state between the app and the server here.
 *
 * @returns
 */
export function useSeed() {
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
