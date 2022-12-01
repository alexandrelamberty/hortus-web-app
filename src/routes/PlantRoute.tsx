import React, { useContext, useEffect, useState } from "react";
import { Container, Modal } from "semantic-ui-react";
import ActionControlls, { View } from "src/components/menu/ActionControlls";
import { PlantForm } from "src/components/form/PlantForm";
import PlantGrid from "src/components/grid/PlantGrid";
import PlantList from "src/components/list/PlantList";
import PlantTable from "src/components/table/PlantTable";
import { PlantContext } from "src/contexts/PlantContextProvider";
import { Plant } from "src/interfaces/Plant";
import { ApplicationContext } from "src/contexts/ApplicationContextProvider";

/**
 * @returns
 */
export function PlantRoute() {
  // ApplicationContext and data provider PlantContext
  const { viewPlantForm, setViewPlantForm, plantViewType, setPlantViewType } =
    useContext(ApplicationContext);
  const {
    plants,
    selected,
    setSelected,
    selecteds,
    setSelecteds,
    deletePlants,
    fetchPlants,
  } = React.useContext(PlantContext);

  const renderView = () => {
    switch (plantViewType) {
      case "grid":
        return <PlantGrid />;
      case "list":
        return <PlantList list={plants} />;
      case "table":
        return <PlantTable plants={plants} onChange={onTableChange} />;
      default:
        return <></>;
    }
  };

  const handleAdd = () => {
    console.log("PlantRoute.handleAdd()");
    setViewPlantForm(!viewPlantForm);
  };

  const handleDelete = () => {
    console.log("PlantRoute.delete", selected);
    deletePlants(selecteds, handleDeleted);
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
    setPlantViewType(view);
  };

  const onTableChange = (plant: Plant) => {
    console.log("table change", plant);
    if (plant) setSelected(plant);
    setViewPlantForm(!viewPlantForm);
  };

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  return (
    <Container>
      <ActionControlls
        name="Plants"
        view={plantViewType}
        selected={selecteds.length !== 0}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        onDisplayChange={onDisplayChange}
        onPageChange={onPageChange}
        onViewTypeChange={onViewTypeChange}
      />

      {renderView()}

      <Modal
        open={viewPlantForm}
        onClose={() => {
          console.log("modal-close");
          setViewPlantForm(false);
          setSelected(undefined);
        }}
        onOpen={() => setViewPlantForm(true)}
      >
        <Modal.Header>New Plant</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <PlantForm plant={selected} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Container>
  );
}
