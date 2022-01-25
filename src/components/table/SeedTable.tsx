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
     <Table celled  selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Species</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Harvest</Table.HeaderCell>
        <Table.HeaderCell>Season</Table.HeaderCell>
        <Table.HeaderCell>Sun</Table.HeaderCell>
        <Table.HeaderCell>Frost</Table.HeaderCell>
        <Table.HeaderCell>Water</Table.HeaderCell>
        <Table.HeaderCell>Companions</Table.HeaderCell>
        <Table.HeaderCell>Competitors</Table.HeaderCell>
        <Table.HeaderCell>Seeding</Table.HeaderCell>
        <Table.HeaderCell>Transplanting</Table.HeaderCell>
        <Table.HeaderCell>Planting</Table.HeaderCell>
        <Table.HeaderCell>Harvesting</Table.HeaderCell>
        <Table.HeaderCell>Spacing</Table.HeaderCell>
        <Table.HeaderCell>Rows</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body> 
      {seeds.map((seed) => (
     <Table.Row>
        <Table.Cell>{seed.name}</Table.Cell>
        <Table.Cell>{seed.species}</Table.Cell>
        <Table.Cell>{seed.description}</Table.Cell>
      </Table.Row> 
      ))}
 </Table.Body>
  </Table>
  )
}
