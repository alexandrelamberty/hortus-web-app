import * as React from 'react'
import { Species } from 'src/interfaces/Species'
import axios, { AxiosResponse } from 'axios'

export interface SpeciesContextType {
  species: Species[]
  isLoading: boolean
  fetchSpecies: () => void
  createSpecies: (newSpecies: Species) => void
  removeSpecies: (speciesId: number) => void
}

export const speciesContextDefaultValue: SpeciesContextType = {
  species: [],
  isLoading: false,
  fetchSpecies: () => null,
  createSpecies: () => null,
  removeSpecies: () => null,
}

export const SpeciesContext = React.createContext<SpeciesContextType>(null!)

const URI = process.env.REACT_APP_API_URL

export function SpeciesProvider({ children }: { children: React.ReactNode }) {
  let [species, setSpecies] = React.useState<Species[]>([])
  let [selectedSpecies, setSelectedSpecies] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const fetchSpecies = React.useCallback(() => {
    setIsLoading(true)
    axios
      .get(URI + '/species')
      .then(function (response) {
        setSpecies(response.data)
        setIsLoading(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [setSpecies])

  const createSpecies = React.useCallback(
    (newSpecies: Species) => {
	  console.log(newSpecies)
      setIsLoading(true)
      axios
        .post(URI + '/species', newSpecies)
        .then(function (response) {
		  setSpecies([...species].concat(response.data))
          setIsLoading(false)
        })
        .catch(function (error) {
          console.log(error)
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
            (post: Species) => post._id === postId
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
