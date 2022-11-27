import React, { useState } from "react";
import { Container, Modal } from "semantic-ui-react";
import ActionControlls, { View } from "src/components/ActionControlls";
import { CultureForm } from "src/components/form/CultureForm";
import CultureTable from "src/components/table/CultureTable";
import { CultureContext } from "src/providers/CultureProvider";

export function CultureRoute() {
  const { formOpen, setFormOpen, selected, deleteCultures } =
    React.useContext(CultureContext);

  // FIXME: move to context
  const [view, setView] = useState<View>("table");

  const onAddClicked = () => {
    console.log("CultureRoute.onAddClicked");
    setFormOpen(!formOpen);
  };

  const onDeleteClicked = () => {
    console.log("CultureRoute.onDeleteClicked", selected);
    deleteCultures();
  };

  // Pagination display
  const onDisplayChange = (number: number) => {
    console.log("CultureRoute.changePage", number);
  };

  // Pagination page
  const onPageChange = (page: number) => {
    console.log("CultureRoute.changePage", page);
  };

  // View data as
  const onViewTypeChange = (view: View) => {
    console.log("CultureRoute.changeView", view);
    setView(view);
  };

  return (
    <Container>
      <ActionControlls
        name="Cultures"
        view={view}
        selected={selected.length !== 0}
        handleAdd={onAddClicked}
        handleDelete={onDeleteClicked}
        onViewTypeChange={onViewTypeChange}
        onDisplayChange={() => onDisplayChange}
        onPageChange={() => onPageChange}
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
