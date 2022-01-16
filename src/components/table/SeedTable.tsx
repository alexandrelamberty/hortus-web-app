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
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Notes</Table.HeaderCell>
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
