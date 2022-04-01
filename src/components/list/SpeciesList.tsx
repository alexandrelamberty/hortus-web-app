import React, { useEffect } from 'react'
import { useContext } from 'react'
import { SpeciesContext } from 'src/providers/SpeciesProvider'
import { List } from 'semantic-ui-react'
import { Species } from 'src/interfaces/Species'

export default function SpeciesList() {
  const { species, fetchSpecies } = useContext(SpeciesContext)

  // TODO: make custom hook
  useEffect(() => {
    fetchSpecies()
  }, [fetchSpecies])

  return (
    <List selection divided relaxed>
      {species.map((speciesObj: Species) => (
        <List.Item>
          <List.Icon name='github' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>{speciesObj.name}</List.Header>
            <List.Description as='a'>{speciesObj.species}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  )
}
