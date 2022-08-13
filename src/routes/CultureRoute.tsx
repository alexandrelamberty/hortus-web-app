import React from "react";
import { Container, Modal } from "semantic-ui-react";
import ActionControlls from "src/components/ActionControlls";
import { CultureForm } from "src/components/form/CultureForm";
import CultureTable from "src/components/table/CultureTable";
import { CultureContext } from "src/providers/CultureProvider";

export function CultureRoute() {
  const { formOpen, setFormOpen, selected, deleteCultures } =
    React.useContext(CultureContext);

  const handleAdd = () => {
    setFormOpen(!formOpen);
  };

  const handleDelete = () => {
    console.log("deleteHandler", selected);
    deleteCultures();
  };

  return (
    <Container>
      <ActionControlls
        name="Cultures"
        selected={selected.length != 0}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />

      <CultureTable />

      <Modal
        onClose={() => setFormOpen(false)}
        onOpen={() => setFormOpen(true)}
        open={formOpen}
      >
        <Modal.Header>New Culture</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <CultureForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Container>
  );
}
