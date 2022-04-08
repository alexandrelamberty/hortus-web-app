import * as React from 'react'
import { Species } from 'src/interfaces/Species'
import axios, { AxiosResponse } from 'axios'
import { SpeciesPagination } from 'src/interfaces/SpeciesPagination'
import { SpeciesFormData } from 'src/interfaces/SpeciesFormData'

export interface SpeciesContextType {
  count: number
  species: Species[]
  isLoading: boolean
  isFormOpen: boolean
  fetchSpecies: () => void
  createSpecies: (newSpecies: FormData, callback: VoidFunction) => void
  removeSpecies: (speciesId: number) => void
}

export const speciesContextDefaultValue: SpeciesContextType = {
  count: 0,
  species: [],
  isLoading: false,
  isFormOpen: false,
  fetchSpecies: () => null,
  createSpecies: () => null,
  removeSpecies: () => null,
}

export const SpeciesContext = React.createContext<SpeciesContextType>(null!)

const URI = process.env.REACT_APP_API_URL + '/species'

export function SpeciesProvider({ children }: { children: React.ReactNode }) {
  let [count, setCount] = React.useState<number>(0)
  let [species, setSpecies] = React.useState<Species[]>([])
  let [selectedSpecies, setSelectedSpecies] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [isFormOpen, setIsFormOpen] = React.useState(false)

  const fetchSpecies = React.useCallback(() => {
    setIsLoading(true)
    axios
      .get(URI)
      .then(function (response) {
        setSpecies(response.data.results)
        setCount(response.data.count)
        setIsLoading(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [setSpecies])

  const createSpecies = React.useCallback(
    (newSpecies: FormData, callback: VoidFunction) => {
      console.log(newSpecies)
      setIsLoading(true)
      axios
        .post(URI, newSpecies, {headers: {
      "Content-Type": "multipart/form-data",
    }})
        .then(function (response) {
          setSpecies([...species].concat(response.data))
          setIsLoading(false)
          callback()
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
        count,
        isLoading,
        isFormOpen,
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
