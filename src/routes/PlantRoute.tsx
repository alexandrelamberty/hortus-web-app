import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Confirm, Modal } from "semantic-ui-react";
import { PlantForm } from "../components/form/PlantForm";
import PlantGrid from "../components/grid/PlantGrid";
import PlantList from "../components/list/PlantList";
import { ActionMenu } from "../components/menu/ActionMenu";
import { AddMenuItem } from "../components/menu/AddMenuItem";
import { DeleteMenuItem } from "../components/menu/DeleteMenuItem";
import { SearchMenuItem } from "../components/menu/SearchMenuItem";
import { SelectMenuItem } from "../components/menu/SelectMenuItem";
import { ViewMenuItem } from "../components/menu/ViewMenuItem";
import PlantTable from "../components/table/PlantTable";
import { ApplicationContext } from "../contexts/ApplicationContextProvider";
import { PlantContext } from "../contexts/PlantContextProvider";
import { useSelectedIds } from "../hooks/useSelectedIds";
import { Plant } from "../interfaces/Plant";
import { listPlants } from "../store/actions/plant.action";
import { AppDispatch, RootState } from "../store/store";

export function PlantRoute() {
  const dispatch = useDispatch<AppDispatch>();
  const { plants, status, errors } = useSelector(
    (state: RootState) => state.plants
  );
  // ApplicationContext and data provider PlantContext
  const { viewPlantForm, setViewPlantForm, plantViewType, setPlantViewType } =
    useContext(ApplicationContext);

  // Plant context
  const {
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
    dispatch(listPlants({}));
  }, []);

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
