import React, { useState } from "react";
import { Button, ButtonGroup, Modal } from "semantic-ui-react";
import { SettingsForm } from "../form/SettingsForm";

export const Settings = () => {
  const [open, setOpen] = useState(true);
  return (
    <Modal
      size="mini"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Content>
        <SettingsForm />
      </Modal.Content>
      <Modal.Actions>
        <ButtonGroup size="mini">
          <Button color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Save"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </ButtonGroup>
      </Modal.Actions>
    </Modal>
  );
};
