import React, { useEffect, useState } from "react";
import { useContext } from "react";
import {
  PlantContext,
  PlantContextProvider,
} from "src/providers/PlantContextProvider";
import {
  Checkbox,
  CheckboxProps,
  Icon,
  Label,
  Menu,
  Table,
} from "semantic-ui-react";
import _ from "lodash";

export default function PlantTable() {
  const { plants, fetchPlants, setViewOpen, selected, setSelected } =
    useContext(PlantContext);

  const [activeRowId, setActiveRowId] = useState(0);
  const [mouseDownId, setMouseDownId] = useState(0);

  // TODO: Move to provider
  //const [selectedItem, setSelectedItem] = useState<number[]>([]);

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  function onRowClicked(id: number) {
    console.log("onRowClicked()", id, mouseDownId);
    if (id != mouseDownId) {
      setActiveRowId(id);
      setViewOpen(true);
    }
    // TODO: Clean on mouse up
    setMouseDownId(0);
  }

  // Used to store and to bypass the click on the row and not select the
  // row clicking the checkbox
  function onCheckboxMouseDown(event: any, data: any) {
    console.log("onCheckboxMouseDown()", data.id);
    setMouseDownId(data.id);
  }

  function onCheckboxMouseUp(event: any, data: any) {
    console.log("onCheckboxMouseUp()", data.id);
    setMouseDownId(0);
  }

  function onCheckboxChange(event: any, data: any) {
    console.log("onCheckboxChange()", data.id);
    console.log(data.checked);
    if (data.checked) {
      console.log("Add to selected");
      // TODO: Dispatch or propagate event
      setSelected((selected: any) => [...selected, data.id]);
    } else {
      console.log("Remove selected");
      let elementToRemove = data.id;
      // TODO: Dispatch event
      setSelected((selected: any) =>
        selected.filter((d: any) => d !== elementToRemove)
      );
    }
  }

  return (
    <Table size="small" definition sortable selectable celled compact inverted>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell
          // onClick={() => dispatch({ type: "CHANGE_SORT", column: "name" })}
          >
            Name
          </Table.HeaderCell>
          <Table.HeaderCell>Family</Table.HeaderCell>
          <Table.HeaderCell>Genus</Table.HeaderCell>
          <Table.HeaderCell>Species</Table.HeaderCell>
          <Table.HeaderCell>Subspecies</Table.HeaderCell>
          <Table.HeaderCell>Variant</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {plants.map((plant: any) => (
          <Table.Row
            key={plant._id}
            active={activeRowId === plant._id}
            onClick={() => onRowClicked(plant._id)}
          >
            <Table.Cell collapsing>
              <Checkbox
                id={plant._id}
                onChange={(event, data) => onCheckboxChange(event, data)}
                onMouseDown={(event, data) => onCheckboxMouseDown(event, data)}
              />
            </Table.Cell>
            <Table.Cell>{plant.name}</Table.Cell>
            <Table.Cell>{plant.family}</Table.Cell>
            <Table.Cell>{plant.genus}</Table.Cell>
            <Table.Cell>{plant.species}</Table.Cell>
            <Table.Cell>{plant.subspecies}</Table.Cell>
            <Table.Cell>{plant.variant}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
