import { Container, Header, Icon } from 'semantic-ui-react'

export function ProfileRoute() {
  return (
    <Container>
      <Header as='h2'>
        <Icon name='user' />
        <Header.Content>
          You Profile
          <Header.Subheader>Manage your preferences</Header.Subheader>
        </Header.Content>
      </Header>
    </Container>
  )
}
