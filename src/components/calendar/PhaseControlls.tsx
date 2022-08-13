import React from "react";
import { Button, ButtonGroup, Icon, Popup } from "semantic-ui-react";

export const PhaseControlls = () => (
  <>
    <ButtonGroup>
      <Button active>Active</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Popup
        content="Add users to your feed"
        trigger={
          <Button icon size="mini">
            <Icon name="angle right" />
          </Button>
        }
      />
      <Popup
        content="Start this phase"
        trigger={
          <Button icon>
            <Icon name="angle right" />
          </Button>
        }
      />
      <Popup
        content="Skip this phase"
        trigger={
          <Button icon>
            <Icon name="angle double right" />
          </Button>
        }
      />
    </ButtonGroup>
  </>
);
