import { PlantForm } from "src/components/form/PlantForm";
import PlantTable from "src/components/table/PlantTable";
import {
  Button,
  Container,
  Icon,
  Grid,
  Header,
  Modal,
  Dropdown,
  Segment,
} from "semantic-ui-react";
import React from "react";
import PlantGrid from "src/components/grid/PlantGrid";
import SpeciesFilters from "src/components/SpeciesFilters";
import PlantList from "src/components/list/PlantList";
import ActionControlls from "src/components/ActionControlls";
import { PlantContext } from "src/providers/PlantContextProvider";
import PaginationControlls from "src/components/PaginationControlls";

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
