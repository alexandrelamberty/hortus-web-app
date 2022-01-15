import * as React from 'react'
import { Species } from 'src/interfaces/Species'

export interface SpeciesContextType {
  species: Species[]
  isLoading: boolean
  fetchSpecies: () => void
  createSpecies: (postId: number) => void
  removeSpecies: (postId: number) => void
}

export const speciesContextDefaultValue: SpeciesContextType = {
  species: [],
  isLoading: false,
  fetchSpecies: () => null,
  createSpecies: () => null,
  removeSpecies: () => null,
}

export const SpeciesContext = React.createContext<SpeciesContextType>(null!)

export function SpeciesProvider({ children }: { children: React.ReactNode }) {
  let [species, setSpecies] = React.useState<Species[]>([])
  let [selectedSpecies, setSelectedSpecies] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const fetchSpecies = React.useCallback(() => {
    setIsLoading(true)
    fetch('http://localhost:3333/species')
      .then((response) => response.json())
      .then((fetchedPosts) => {
	  console.log(fetchedPosts)
        setSpecies(fetchedPosts)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [setSpecies])

  const createSpecies = React.useCallback(
    (postId: number) => {
      setIsLoading(true)
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
      })
        .then(() => {
          const newPosts = [...species]
          const removedPostIndex = newPosts.findIndex(
            (post : Species) => post._id === postId
          )
          if (removedPostIndex > -1) {
            newPosts.splice(removedPostIndex, 1)
          }
          setSpecies(newPosts)
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
    [setSpecies, species]
  )

  const removeSpecies = React.useCallback(
    (postId: number) => {
      setIsLoading(true)
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
      })
        .then(() => {
          const newPosts = [...species]
          const removedPostIndex = newPosts.findIndex(
            (post : Species) => post._id === postId
          )
          if (removedPostIndex > -1) {
            newPosts.splice(removedPostIndex, 1)
          }
          setSpecies(newPosts)
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
    [setSpecies, species]
  )
  return (
    <SpeciesContext.Provider
      value={{
        isLoading,
        species,
        fetchSpecies,
        createSpecies,
        removeSpecies,
      }}
    >
      {children}
    </SpeciesContext.Provider>
  )
}
