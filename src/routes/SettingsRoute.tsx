import { useState } from "react";
import {
  Container,
  Grid,
  Header,
  Menu,
  MenuItemProps,
} from "semantic-ui-react";
import { SettingsForm } from "src/components/form/SettingsForm";

export function SettingsRoute() {
  return (
    <Container>
      <Header as="h2">
        <Header.Content>
          Settings
          <Header.Subheader>Manage your preferences</Header.Subheader>
        </Header.Content>
      </Header>
      <SettingsMenu />
    </Container>
  );
}

const SettingsMenu = () => {
  const [state, setState] = useState({ activeItem: "applicatio" });

  const handleItemClick = (e: any, data: MenuItemProps) => {
    console.log(data);
    if (data.name) {
      let active = { activeItem: data.name };
      console.log(active);
      setState(active);
    }
  };

  return (
    <Grid>
      <Grid.Column width={4}>
        <Menu vertical inverted secondary>
          <Menu.Item
            name="application"
            active={state.activeItem === "application"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="weather"
            active={state.activeItem === "weather"}
            onClick={handleItemClick}
          />
        </Menu>
      </Grid.Column>

      <Grid.Column stretched width={6}>
        <SettingsForm />
      </Grid.Column>
    </Grid>
  );
};
