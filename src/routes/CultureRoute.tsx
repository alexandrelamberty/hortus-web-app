import React, { useState } from "react";
import { Button, Container, Icon, Input, Modal } from "semantic-ui-react";
import ActionControlls, { View } from "src/components/menu/ActionControlls";
import { CultureForm } from "src/components/form/CultureForm";
import CultureTable from "src/components/table/CultureTable";
import { CultureContext } from "src/contexts/CultureContextProvider";
import { PhaseForm } from "src/components/form/PhaseForm";

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
    deleteCultures(selected);
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
        size="large"
        onClose={() => setFormOpen(false)}
        onOpen={() => setFormOpen(true)}
        open={formOpen}
      >
        <Modal.Header>New Culture</Modal.Header>
        <Modal.Content image>
          <CultureForm />
        </Modal.Content>
        <Modal.Actions>
          <Input placeholder="Search" size="mini" />
          <Button color="red" size="mini">
            <Icon name="remove" /> Cancel
          </Button>
          <Button color="green" size="mini">
            <Icon name="checkmark" /> Start
          </Button>
        </Modal.Actions>
      </Modal>
    </Container>
  );
}
