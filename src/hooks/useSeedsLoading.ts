import { useContext, useEffect } from "react";
import { SeedContext } from "src/contexts/SeedContextProvider";

export function usePostsLoading() {
  const { fetchSeeds } = useContext(SeedContext);

  useEffect(() => {
    fetchSeeds();
  }, [fetchSeeds]);
}
