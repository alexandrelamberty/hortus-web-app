import { SeedForm } from "src/components/form/SeedForm";
import {
  Button,
  Container,
  Icon,
  Grid,
  Header,
  Modal,
} from "semantic-ui-react";
import React from "react";
import SeedGrid from "src/components/grid/SeedGrid";
import Heading from "src/components/Heading";
import ActionControlls from "src/components/ActionControlls";
import SeedTable from "src/components/table/SeedTable";
import SeedList from "src/components/list/SeedList";
import { CultureContext } from "src/providers/CultureProvider";
import { SeedContext } from "src/providers/SeedProvider";

export function SeedRoute() {
  const { formOpen, setFormOpen } = React.useContext(SeedContext);
  const { viewOpen, setViewOpen, selected, setSelected, deleteSeeds } =
    React.useContext(SeedContext);

  const handleAdd = () => {
    setFormOpen(!formOpen);
  };

  const handleDelete = () => {
    console.log("handleDelete", selected);
    deleteSeeds(selected);
    //setSelected([]);
  };

  return (
    <Container>
      <ActionControlls
        name="Seeds"
        selected={selected.length != 0}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />

      <SeedTable />

      <Modal
        open={formOpen}
        onOpen={() => setFormOpen(true)}
        onClose={() => setFormOpen(false)}
      >
        <Modal.Header>New Seed</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <SeedForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>

      <Modal
        open={viewOpen}
        onOpen={() => setViewOpen(true)}
        onClose={() => setViewOpen(false)}
      >
        <Modal.Header>View Seed</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <SeedForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Container>
  );
}
