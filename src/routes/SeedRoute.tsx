import React, { useState } from "react";
import { Container, Modal } from "semantic-ui-react";
import ActionControlls, { View } from "src/components/ActionControlls";
import { SeedForm } from "src/components/form/SeedForm";
import SeedGrid from "src/components/grid/SeedGrid";
import SeedList from "src/components/list/SeedList";
import SeedTable from "src/components/table/SeedTable";
import { SeedContext } from "src/providers/SeedProvider";

export function SeedRoute() {
  const { seeds, formOpen, setFormOpen } = React.useContext(SeedContext);
  const { viewOpen, setViewOpen, selected, setSelected, deleteSeeds } =
    React.useContext(SeedContext);

  // FIXME: move to context
  const [view, setView] = useState<View>("table");

  const renderView = () => {
    switch (view) {
      case "grid":
        return <SeedGrid />;
      case "list":
        return <SeedList />;
      case "table":
        return <SeedTable />;
      default:
        return <></>;
    }
  };

  const handleAdd = () => {
    console.log("SeedRoute.onAddClicked");
    setFormOpen(!formOpen);
  };

  const handleDelete = () => {
    console.log("SeedRoute.onDeleteClicked");
    deleteSeeds(selected);
    //setSelected([]);
  };

  // Pagination display
  const onDisplayChange = (display: number) => {
    console.log("SeedRoute.onDisplayChange", display);
  };

  // Pagination page
  const onPageChange = (page: number) => {
    console.log("SeedRoute.onPageChange", page);
  };

  // View data as
  const onViewTypeChange = (view: View) => {
    console.log("SeedRoute.changeView", view);
    setView(view);
  };

  return (
    <Container>
      <ActionControlls
        name="Seeds"
        view={view}
        selected={selected.length !== 0}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        onDisplayChange={() => onDisplayChange}
        onPageChange={onPageChange}
        onViewTypeChange={onViewTypeChange}
      />

      {renderView()}

      <Modal
        open={formOpen}
        onOpen={() => setFormOpen(true)}
        onClose={() => setFormOpen(false)}
        size="large"
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
