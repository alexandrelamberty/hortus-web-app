import React, { useEffect } from 'react'
import { useContext } from 'react'
import { SpeciesContext } from 'src/providers/SpeciesProvider'
import { Checkbox, Icon, Label, Menu, Table } from 'semantic-ui-react'

export default function SpeciesTable() {
  const { count, species, fetchSpecies } = useContext(SpeciesContext)

  // TODO: make custom hook
  useEffect(() => {
    fetchSpecies()
  }, [fetchSpecies])

  return (
    <Table size='small' selectable celled compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Family</Table.HeaderCell>
          <Table.HeaderCell>Genus</Table.HeaderCell>
          <Table.HeaderCell>Species</Table.HeaderCell>
          <Table.HeaderCell>Subspecies</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {species.map((obj) => (
          <Table.Row key={obj._id}>
            <Table.Cell>
              <Checkbox />
            </Table.Cell>
            <Table.Cell>{obj.name}</Table.Cell>
            <Table.Cell>{obj.family}</Table.Cell>
            <Table.Cell>{obj.genus}</Table.Cell>
            <Table.Cell>{obj.species}</Table.Cell>
            <Table.Cell>{obj.subspecies}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>{count}</Table.Footer>
    </Table>
  )
}
