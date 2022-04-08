import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import SpeciesGridCard from './SpeciesGridCard'
import { SpeciesContext } from 'src/providers/SpeciesProvider'
import { Species } from 'src/interfaces/Species'

export default function SpeciesGrid() {
  const { species, fetchSpecies } = useContext(SpeciesContext)

  useEffect(() => {
    fetchSpecies()
  }, [fetchSpecies])

  return (
    <div className='grid grid-cols-2 md:grid-cols-6 gap-4'>
      {species.map((specie: Species) => (
        <Grid.Column>
          <SpeciesGridCard species={specie} />
        </Grid.Column>
      ))}
    </div>
  )
}
