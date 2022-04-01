import { Container, Header, Icon } from 'semantic-ui-react'

export function SettingsRoute() {
  return (
    <Container>
      <Header as='h2'>
        <Icon name='settings' />
        <Header.Content>
          Account Settings
          <Header.Subheader>Manage your preferences</Header.Subheader>
        </Header.Content>
      </Header>
    </Container>
  )
}
