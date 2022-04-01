import { useCallback, useContext } from "react";
import { SeedContext } from "src/providers/SeedProvider";

export function useSeedListt() {
  const { removeSeed, seeds } = useContext(SeedContext);
 
  const handleSeedRemove = useCallback((postId: number) => () => {
    removeSeed(postId);
  }, [removeSeed]);
 
  return {
    handleSeedRemove,
    seeds
  }
}
