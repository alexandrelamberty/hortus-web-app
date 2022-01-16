import React, { useEffect } from 'react'
import { useContext } from 'react'
import { SpeciesContext } from 'src/providers/SpeciesProvider'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default function SpeciesTable() {
  const { species, fetchSpecies } = useContext(SpeciesContext)

  // TODO: make custom hook
  useEffect(() => {
    fetchSpecies()
  }, [fetchSpecies])

  return (
    <Table selectable celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Family</Table.HeaderCell>
          <Table.HeaderCell>Genus</Table.HeaderCell>
          <Table.HeaderCell>Species</Table.HeaderCell>
          <Table.HeaderCell>Subspecies</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {species.map((obj) => (
          <Table.Row>
            <Table.Cell>{obj.name}</Table.Cell>
            <Table.Cell>{obj.family}</Table.Cell>
            <Table.Cell>{obj.genus}</Table.Cell>
            <Table.Cell>{obj.species}</Table.Cell>
            <Table.Cell>{obj.subspecies}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='chevron left' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='chevron right' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}
