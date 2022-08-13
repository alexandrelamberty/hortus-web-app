import { useCallback, useContext } from "react";
import { SeedContext } from "src/providers/SeedProvider";

export function useSeedListt() {
  const { deleteSeed, seeds } = useContext(SeedContext);

  const handleSeedRemove = useCallback((postId: number) => () => {
    deleteSeed(postId);
  }, [deleteSeed]);

  return {
    handleSeedRemove,
    seeds
  }
}
