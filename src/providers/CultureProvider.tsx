import axios from 'axios'
import * as React from 'react'
import { Culture } from 'src/interfaces/Culture'

export interface CultureContextType {
  cultures: Culture[]
  isLoading: boolean
  fetchCultures: () => void
  createCulture: (postId: number) => void
  removeCulture: (postId: number) => void
}

export const seedContextDefaultValue: CultureContextType = {
  cultures: [],
  isLoading: false,
  fetchCultures: () => null,
  createCulture: () => null,
  removeCulture: () => null,
}

export const CultureContext = React.createContext<CultureContextType>(null!)

const URI = process.env.REACT_APP_API_URL

export function CultureProvider({ children }: { children: React.ReactNode }) {
  let [cultures, setCultures] = React.useState<Culture[]>([])
  let [seed, setSeed] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const fetchCultures = React.useCallback(() => {
    setIsLoading(true)
    axios
      .get(URI + '/seeds')
      .then(function (response) {
        setCultures(response.data)
        setIsLoading(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [setCultures])

  const createCulture = React.useCallback(
    (newCulture: number) => {
	  console.log(newCulture)
      setIsLoading(true)
      axios
        .post(URI + '/cultures', newCulture)
        .then(function (response) {
		  setCultures([...cultures].concat(response.data))
          setIsLoading(false)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    [setCultures, cultures]
  )

  const removeCulture = React.useCallback(
    (postId: number) => {
      setIsLoading(true)
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
      })
        .then(() => {
          const newPosts = [...cultures]
          const removedPostIndex = newPosts.findIndex(
            (post : Culture) => post._id === postId
          )
          if (removedPostIndex > -1) {
            newPosts.splice(removedPostIndex, 1)
          }
          setCultures(newPosts)
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
    [setCultures, cultures]
  )
  return (
    <CultureContext.Provider
      value={{
        isLoading,
        cultures,
        fetchCultures,
        createCulture,
        removeCulture,
      }}
    >
      {children}
    </CultureContext.Provider>
  )
}
