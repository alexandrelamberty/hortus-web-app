import React, { useEffect } from 'react'
import { useContext } from 'react'
import { SpeciesContext } from 'src/providers/SpeciesProvider'

export default function SpeciesList() {
  const { species, fetchSpecies } = useContext(SpeciesContext)

  useEffect(() => {
    fetchSpecies()
  }, [fetchSpecies])

  return (
    <div>
      {species.map((speciesObj) => (
        <div key={speciesObj._id}>
          <h2>{speciesObj.name}</h2>
        </div>
      ))}
    </div>
  )
}
