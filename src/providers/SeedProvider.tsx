import axios from 'axios'
import * as React from 'react'
import { Seed } from 'src/interfaces/Seed'

export interface SeedContextType {
  seeds: Seed[]
  isLoading: boolean
  fetchSeeds: () => void
  createSeed: (seed: Seed) => void
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

const URI = process.env.REACT_APP_API_URL

export function SeedProvider({ children }: { children: React.ReactNode }) {
  let [seeds, setSeeds] = React.useState<Seed[]>([])
  let [seed, setSeed] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const fetchSeeds = React.useCallback(() => {
    setIsLoading(true)
    axios
      .get(URI + '/seeds')
      .then(function (response) {
        setSeeds(response.data)
        setIsLoading(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [setSeeds])

  const createSeed = React.useCallback(
    (newSeed: Seed) => {
	  console.log(newSeed)
      setIsLoading(true)
      axios
        .post(URI + '/seeds', newSeed)
        .then(function (response) {
		  setSeeds([...seeds].concat(response.data))
          setIsLoading(false)
        })
        .catch(function (error) {
          console.log(error)
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