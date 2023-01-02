import React, { useContext, useEffect } from "react";
import { Confirm, Modal } from "semantic-ui-react";
import { PlantForm } from "src/components/form/PlantForm";
import PlantGrid from "src/components/grid/PlantGrid";
import PlantList from "src/components/list/PlantList";
import { ActionMenu } from "src/components/menu/ActionMenu";
import { AddMenuItem } from "src/components/menu/AddMenuItem";
import { DeleteMenuItem } from "src/components/menu/DeleteMenuItem";
import { SearchMenuItem } from "src/components/menu/SearchMenuItem";
import { SelectMenuItem } from "src/components/menu/SelectMenuItem";
import { ViewMenuItem } from "src/components/menu/ViewMenuItem";
import PlantTable from "src/components/table/PlantTable";
import { ApplicationContext } from "src/contexts/ApplicationContextProvider";
import { PlantContext } from "src/contexts/PlantContextProvider";
import { useSelectedIds } from "src/hooks/useSelectedIds";
import { Plant } from "src/interfaces/Plant";

/**
 * @returns
 */
export function PlantRoute() {
  // ApplicationContext and data provider PlantContext
  const { viewPlantForm, setViewPlantForm, plantViewType, setPlantViewType } =
    useContext(ApplicationContext);

  // Plant context
  const {
    plants,
    selected,
    setSelected,
    selecteds,
    setSelecteds,
    deletePlants,
    fetchPlants,
  } = React.useContext(PlantContext);

  const ids = useSelectedIds(plants);

  const renderView = (): JSX.Element => {
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

  const onTableChange = (plant: Plant) => {
    console.log("table change", plant);
    if (plant) setSelected(plant);
    setViewPlantForm(!viewPlantForm);
  };

  const onDeleted = () => {};
  const onConfirmDeleted = () => {};

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  return (
    <>
      <ActionMenu
        left={
          <>
            <AddMenuItem
              label="Plant"
              onClick={() => {
                console.log("add");
                // dispatch({type:"ADD_SEED"})
                setViewPlantForm(!viewPlantForm);
              }}
            />
            <SelectMenuItem
              onChange={(content) => {
                console.log("select ", content);
                if (content === "none") setSelecteds([]);
                else if (content === "all") {
                  // dispatch({type:"SELECT_ALL_SEED"})
                  setSelecteds(ids);
                }
              }}
            />
            <DeleteMenuItem
              disabled={selecteds.length === 0 ? true : false}
              onClick={() => {
                console.log("delete");
                //FIXME: Show confirmation modal
                //  set a STATE to the type we want to delete, ie:
                // SEED, CULTURE, PLANT
                // show confirmation
                // use the state in the Confirm handlers
                deletePlants(selecteds, onDeleted);
              }}
            />
          </>
        }
        right={
          <>
            {/* {plantViewType === "grid" && (
              <>
                <MenuItem>
                  <Button>Sort</Button>
                </MenuItem>
              </>
            )} */}
            {/* <MenuItem>
              <Button size="mini">Filter</Button>
            </MenuItem> */}
            <SearchMenuItem
              onChange={(terms) => {
                console.log("search", terms);
              }}
            />
            <ViewMenuItem
              type={plantViewType}
              onChange={(view) => {
                console.log("view", view);
                setPlantViewType(view);
              }}
            />
          </>
        }
      />

      {renderView()}

      <Confirm
        open={false}
        onCancel={() => {
          console.log("cancel");
        }}
        onConfirm={() => {
          // Retrieve a state
          // dispatch event ? FIXME: Store ?
          console.log("confirm");
        }}
      />

      <Modal
        open={viewPlantForm}
        onClose={() => {
          console.log("modal-close");
          setViewPlantForm(false);
          setSelected(undefined);
        }}
        onOpen={() => setViewPlantForm(true)}
        style={{ backgroundColor: "#252631" }}
      >
        <Modal.Header>New Plant</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <PlantForm plant={selected} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
}
