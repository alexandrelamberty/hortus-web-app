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

export function CultureProvider({ children }: { children: React.ReactNode }) {
  let [cultures, setCultures] = React.useState<Culture[]>([])
  let [seed, setSeed] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const fetchCultures = React.useCallback(() => {
    setIsLoading(true)
    fetch('http://localhost:3333/cultures')
      .then((response) => response.json())
      .then((fetchedPosts) => {
        setCultures(fetchedPosts)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [setCultures])

  const createCulture = React.useCallback(
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
