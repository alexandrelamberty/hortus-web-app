import React, { useEffect } from 'react'
import { useContext } from 'react'
import { CultureContext } from 'src/providers/CultureProvider'
import { List } from 'semantic-ui-react'

export default function CultureList() {
  const { cultures, fetchCultures } = useContext(CultureContext)

  useEffect(() => {
    fetchCultures()
  }, [fetchCultures])

	console.log("CultureList: ", cultures)

  return (
    <List selection divided relaxed>
      {cultures.map((culture) => (
        <List.Item>
          <List.Icon name='github' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>{culture.seed}</List.Header>
            <List.Description as='a'>{culture.createdAt}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  )
}
