import _ from "lodash";
import React from "react";
import { Button, ButtonGroup, Grid, Icon, Popup } from "semantic-ui-react";
import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic";

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
