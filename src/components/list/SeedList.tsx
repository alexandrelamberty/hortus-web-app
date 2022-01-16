import React, { useEffect } from 'react'
import { useContext } from 'react'
import { SeedContext } from 'src/providers/SeedProvider'
import { List } from 'semantic-ui-react'

export default function SeedList() {
  const { seeds, fetchSeeds } = useContext(SeedContext)

  useEffect(() => {
    fetchSeeds()
  }, [fetchSeeds])

  return (
    <List selection divided relaxed>
      {seeds.map((seed) => (
        <List.Item>
          <List.Icon name='github' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>{seed.name}</List.Header>
            <List.Description as='a'>{seed.species}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  )
}
