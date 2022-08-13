import { useContext, useEffect } from 'react'
import { SeedContext } from 'src/providers/SeedProvider'

export function usePostsLoading() {
  const { fetchSeeds } = useContext(SeedContext)

  useEffect(() => {
    fetchSeeds()
  }, [fetchSeeds])
}
