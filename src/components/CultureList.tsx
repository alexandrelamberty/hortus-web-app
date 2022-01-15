import React, { useEffect } from 'react'
import { useContext } from 'react'
import { CultureContext } from 'src/providers/CultureProvider'

export default function CultureList() {
  const { cultures, fetchCultures } = useContext(CultureContext)

  useEffect(() => {
    fetchCultures()
  }, [fetchCultures])

	console.log("CultureList: ", cultures)

  return (
    <div>
      {cultures.map((culture) => (
        <div key={culture._id}>
          <h2>{culture.seed}</h2>
          <p>{culture.createdAt}</p>
        </div>
      ))}
    </div>
  )
}
