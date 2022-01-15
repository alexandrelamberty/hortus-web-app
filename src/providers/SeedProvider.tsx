import * as React from 'react'
import { Seed } from 'src/interfaces/Seed'

export interface SeedContextType {
  seeds: Seed[]
  isLoading: boolean
  fetchSeeds: () => void
  createSeed: (postId: number) => void
  removeSeed: (postId: number) => void
}

export const seedContextDefaultValue: SeedContextType = {
  seeds: [],
  isLoading: false,
  fetchSeeds: () => null,
  createSeed: () => null,
  removeSeed: () => null,
}

export const SeedContext = React.createContext<SeedContextType>(null!)

export function SeedProvider({ children }: { children: React.ReactNode }) {
  let [seeds, setSeeds] = React.useState<Seed[]>([])
  let [seed, setSeed] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const fetchSeeds = React.useCallback(() => {
    setIsLoading(true)
    fetch('http://localhost:3333/seeds')
      .then((response) => response.json())
      .then((fetchedPosts) => {
        setSeeds(fetchedPosts)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [setSeeds])

  const createSeed = React.useCallback(
    (postId: number) => {
      setIsLoading(true)
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
      })
        .then(() => {
          const newPosts = [...seeds]
          const removedPostIndex = newPosts.findIndex(
            (post : Seed) => post._id === postId
          )
          if (removedPostIndex > -1) {
            newPosts.splice(removedPostIndex, 1)
          }
          setSeeds(newPosts)
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
    [setSeeds, seeds]
  )

  const removeSeed = React.useCallback(
    (postId: number) => {
      setIsLoading(true)
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
      })
        .then(() => {
          const newPosts = [...seeds]
          const removedPostIndex = newPosts.findIndex(
            (post : Seed) => post._id === postId
          )
          if (removedPostIndex > -1) {
            newPosts.splice(removedPostIndex, 1)
          }
          setSeeds(newPosts)
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
    [setSeeds, seeds]
  )
  return (
    <SeedContext.Provider
      value={{
        isLoading,
        seeds,
        fetchSeeds,
        createSeed,
        removeSeed,
      }}
    >
      {children}
    </SeedContext.Provider>
  )
}
