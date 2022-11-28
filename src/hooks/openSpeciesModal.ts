import { useCallback, useContext } from "react";
import { SeedContext } from "src/contexts/SeedProvider";

export function useSeedListt() {
  const { deleteSeed, seeds } = useContext(SeedContext);

  const handleSeedRemove = useCallback(
    (postId: number) => () => {
      deleteSeed(postId);
    },
    [deleteSeed]
  );

  return {
    handleSeedRemove,
    seeds,
  };
}
