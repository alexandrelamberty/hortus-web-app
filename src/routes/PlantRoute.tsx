import React, { useEffect, useState } from "react";
import { Container, Modal } from "semantic-ui-react";
import ActionControlls, { View } from "src/components/menu/ActionControlls";
import { PlantForm } from "src/components/form/PlantForm";
import PlantGrid from "src/components/grid/PlantGrid";
import PlantList from "src/components/list/PlantList";
import PlantTable from "src/components/table/PlantTable";
import { PlantContext } from "src/contexts/PlantContextProvider";

export function PlantRoute() {
  // The plant context
  const {
    plants,
    formOpen,
    setFormOpen,
    viewOpen,
    setViewOpen,
    selected,
    deletePlants,
    fetchPlants,
  } = React.useContext(PlantContext);

  // FIXME: move to context

  const [view, setView] = useState<View>("table");

  const renderView = () => {
    switch (view) {
      case "grid":
        return <PlantGrid />;
      case "list":
        return <PlantList list={plants} />;
      case "table":
        return <PlantTable plants={plants} />;
      default:
        return <></>;
    }
  };

  const handleAdd = () => {
    console.log("PlantRoute.handleAdd()");
    setFormOpen(!formOpen);
  };

  const handleDelete = () => {
    console.log("PlantRoute.delete", selected);
    deletePlants(selected, handleDeleted);
  };

  const handleDeleted = () => {
    console.log("handleDeleted");
  };

  // Pagination display
  const onDisplayChange = (display: number) => {
    console.log("PLantRoute.onChangeDisplay", display);
  };

  // Pagination page
  const onPageChange = (page: number) => {
    console.log("PlantRoute.changePage", page);
  };

  // View data as
  const onViewTypeChange = (view: View) => {
    console.log("PlantRoute.changeView", view);
    setView(view);
  };

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  return (
    <Container>
      <ActionControlls
        name="Plants"
        view={view}
        selected={selected.length !== 0}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        onDisplayChange={onDisplayChange}
        onPageChange={onPageChange}
        onViewTypeChange={onViewTypeChange}
      />

      {renderView()}

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
