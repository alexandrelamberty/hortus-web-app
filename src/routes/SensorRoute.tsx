import React, { useContext, useEffect } from "react";
import { Button, Container, Modal } from "semantic-ui-react";
import ActionControlls from "src/components/ActionControlls";
import { SeedForm } from "src/components/form/SeedForm";
import SensorsTable from "src/components/table/SensorTable";
import { Sensor } from "src/interfaces/Sensor";
import { SensorContext } from "src/providers/SensorProvider";

export function SensorRoute() {
  const { sensors, fetchSensors } = useContext(SensorContext);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleAdd = () => {
    setOpen(!open);
  };

  const onSubmit = () => {
    console.log("onSubmit");
  };

  const onCancel = () => {
    console.log("onCancel");
  };

  const handleDelete = () => {};
  useEffect(() => {
    fetchSensors();
  }, [fetchSensors]);

  return (
    <Container>
      <ActionControlls
        name="Sensors"
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />

      <SensorsTable />

      {/* Sensors scan list */}

      <Modal
        size="small"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Seed</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <SeedForm />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
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
        </Modal.Actions>
      </Modal>
    </Container>
  );
}
