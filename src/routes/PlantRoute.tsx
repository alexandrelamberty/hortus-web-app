import { Button, Checkbox, Modal, Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { listPlants, selectPlant } from "../store/actions/plant.action";
import { AppDispatch, RootState } from "../store/store";

export function PlantRoute() {
  // Redux store
  const dispatch = useDispatch<AppDispatch>();

  const { selectedPlant, plants, status, errors } = useSelector(
    (state: RootState) => state.plants
  );

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // ApplicationContext and data provider PlantContext
  const { viewPlantForm, setViewPlantForm, plantViewType, setPlantViewType } =
    useContext(ApplicationContext);

  // Plant context
  const { selecteds, setSelecteds, deletePlants } =
    React.useContext(PlantContext);

  const ids = useSelectedIds(plants);

  const renderView = (): JSX.Element => {
    switch (plantViewType) {
      case "grid":
        return <PlantGrid plants={plants} />;
      case "list":
        return <PlantList list={plants} />;
      case "table":
        return (
          <>
            <PlantTable plants={plants} onSelect={handleSelect} />
            {/* <ModalRead
              title="Modal title"
              subtitle="Modal subtitle"
              onClose={() => {
                console.log("onClose()");
              }}
            ></ModalRead> */}
          </>
        );
      default:
        return <></>;
    }
  };

  const handleSelect = (plant: Plant) => {
    console.log("onChange", plant);
    if (plant) dispatch(selectPlant(plant));
    setViewPlantForm(!viewPlantForm);
  };

  const handleDelete = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    //
  };

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
                setShowConfirmModal(true);
                // deletePlants(selecteds, handleDelete);
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
              placeholder="Search..."
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
      <Table hoverable={true} striped={true}>
        <Table.Head>
          <Table.HeadCell className="!p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="!p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="!p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="!p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      {/* Confirm delete action modal */}

      <React.Fragment>
        <Modal
          show={showConfirmModal}
          size="md"
          popup={true}
          onClose={() => setShowConfirmModal(false)}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={() => console.log("confirm")}>
                  Yes, I'm sure
                </Button>
                <Button color="gray" onClick={() => setShowConfirmModal(false)}>
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>

      {/* Create action modal */}

      {/* View details action modal */}

      {/* 
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
      /> */}

      {/* <Modal
        size="small"
        open={viewPlantForm}
        onClose={() => {
          console.log("modal-close");
          setViewPlantForm(false);
          setSelected(undefined);
        }}
        onOpen={() => setViewPlantForm(true)}
        style={{ backgroundColor: "#252631" }}
      >
        <ModalRead
          title="Modal title"
          subtitle="Modal subtitle"
          onClose={() => {
            console.log("onClose()");
            setViewPlantForm(false);
            setSelected(undefined);
          }}
        ></ModalRead>
      </Modal> */}
    </>
  );
}
