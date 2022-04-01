import React, { useEffect } from 'react'
import { useContext } from 'react'
import { SeedContext } from 'src/providers/SeedProvider'
import { Table } from 'semantic-ui-react'

export default function SeedTable() {
  const { seeds, fetchSeeds } = useContext(SeedContext)

  useEffect(() => {
    fetchSeeds()
  }, [fetchSeeds])

  return (
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Species</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Harvest</Table.HeaderCell>
          <Table.HeaderCell>Season</Table.HeaderCell>
          <Table.HeaderCell>Sun</Table.HeaderCell>
          <Table.HeaderCell>Frost</Table.HeaderCell>
          <Table.HeaderCell>Water</Table.HeaderCell>
          <Table.HeaderCell>Companions</Table.HeaderCell>
          <Table.HeaderCell>Competitors</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {seeds.map((seed) => (
          <Table.Row>
            <Table.Cell>{seed.species.name}</Table.Cell>
            <Table.Cell>{seed.name}</Table.Cell>
            <Table.Cell>{seed.type}</Table.Cell>
            <Table.Cell>{seed.harvest}</Table.Cell>
            <Table.Cell>{seed.season}</Table.Cell>
            <Table.Cell>{seed.sun}</Table.Cell>
            <Table.Cell>{seed.frost}</Table.Cell>
            <Table.Cell>{seed.water}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
