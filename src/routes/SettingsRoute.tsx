import { Container, Header, Icon } from "semantic-ui-react";
import { SettingsForm } from "src/components/form/SettingsForm";

export function SettingsRoute() {
  return (
    <Container>
      <Header as="h2">
        <Icon name="settings" />
        <Header.Content>
          Account Settings
          <Header.Subheader>Manage your preferences</Header.Subheader>
          <SettingsForm />
        </Header.Content>
      </Header>
    </Container>
  );
}
