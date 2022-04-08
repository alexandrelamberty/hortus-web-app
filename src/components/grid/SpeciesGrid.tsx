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
	<Grid >
	  <Grid.Row columns={5}>
		
        {species.map((specie:Species) => (
		<Grid.Column key={specie._id}>
		  <SpeciesGridCard  species={specie}/>

		</Grid.Column>
        ))}

	  </Grid.Row>
	</Grid>
  )
}
