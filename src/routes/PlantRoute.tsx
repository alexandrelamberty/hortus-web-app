import React from "react";
import { Container, Modal } from "semantic-ui-react";
import ActionControlls from "src/components/ActionControlls";
import { PlantForm } from "src/components/form/PlantForm";
import PaginationControlls from "src/components/PaginationControlls";
import PlantTable from "src/components/table/PlantTable";
import { PlantContext } from "src/providers/PlantContextProvider";

export function PlantRoute() {
  const {
    formOpen,
    setFormOpen,
    viewOpen,
    setViewOpen,
    selected,
    deletePlants,
  } = React.useContext(PlantContext);

  const handleAdd = () => {
    console.log("ActionControlls.handleAdd()");
    setFormOpen(!formOpen);
  };

  const handleDelete = () => {
    console.log("ActionControlls.delete", selected);
    deletePlants(selected);
  };

  return (
    <Container>
      <ActionControlls
        name="Plants"
        selected={selected.length != 0}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
      <PlantTable />
      <PaginationControlls />
      <Modal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onOpen={() => setFormOpen(true)}
      >
        <Modal.Header>New Plant</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <PlantForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
      <Modal
        open={viewOpen}
        onClose={() => setViewOpen(false)}
        onOpen={() => setViewOpen(true)}
      >
        <Modal.Header>View Plant</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <PlantForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Container>
  );
}
