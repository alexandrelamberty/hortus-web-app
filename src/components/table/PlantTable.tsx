import React, { useContext, useEffect, useMemo, useState } from "react";
import { Checkbox, Table } from "semantic-ui-react";
import { Plant } from "src/interfaces/Plant";
import { PlantContext } from "src/contexts/PlantContextProvider";
import { idText } from "typescript";

interface PlantTableProps {
  plants: Plant[];
  onChange: (plant: Plant) => void;
}

const sortReducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_SORT":
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === "ascending" ? "descending" : "ascending",
        };
      }

      return {
        column: action.column,
        data: state.data,
        direction: "ascending",
      };
    default:
      throw new Error();
  }
};

export default function PlantTable({ plants, onChange }: PlantTableProps) {
  // The selected table rows
  const { selecteds, setSelecteds } = useContext(PlantContext);

  // Sort reducer
  const [state, dispatch] = React.useReducer(sortReducer, {
    column: null,
    data: plants,
    direction: null,
  });
  const { column, data, direction } = state;

  // Hack event bubbling
  const [activeRowId, setActiveRowId] = useState("");
  const [mouseDownId, setMouseDownId] = useState("");

  // Return true if a plant
  const isSelected = (id: string): boolean => {
    return selecteds.includes(id);
  };

  useEffect(() => {
    console.log("selected", selecteds);
    // Update the SelectionCheckBox
  }, [selecteds]);

  //
  function onRowClicked(e: any, plant: Plant) {
    //e.preventDefault();
    console.log("PlantTable::onRowClicked", plant, mouseDownId);
    if (plant._id === mouseDownId) {
      console.log("do nothing");
      setActiveRowId(plant._id);
      // FIXME: what this is used for?...
      // setViewOpen(true);
    } else {
      onChange(plant);
      setMouseDownId("");
    }
  }

  const onCheckboxMouseDown = (event: any, data: any) => {
    console.log("onCheckboxMouseDown()", data.id);
    setMouseDownId(data.id);
  };

  const onCheckboxMouseUp = (event: any, data: any) => {
    console.log("onCheckboxMouseUp()", data.id);
    setMouseDownId("");
  };

  const onCheckboxChange = (event: any, data: any): void => {
    console.log("PlantTable::onCheckboxChange", data.id);
    console.log(data.checked);
    if (data.checked) {
      console.log("Add to selected");
      // TODO: Dispatch or propagate event
      setSelecteds((selected: any) => [...selected, data.id]);
    } else {
      console.log("Remove selected");
      let elementToRemove = data.id;
      // TODO: Dispatch event
      setSelecteds((selected: any) =>
        selected.filter((d: any) => d !== elementToRemove)
      );
    }
  };

  return (
    <Table size="small" definition sortable selectable celled compact>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell
            sorted={column === "name" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "name" })}
          >
            Name
          </Table.HeaderCell>
          <Table.HeaderCell
          // onClick={() => dispatch({ type: "CHANGE_SORT", column: "name" })}
          >
            Binomial
          </Table.HeaderCell>
          <Table.HeaderCell>Family</Table.HeaderCell>
          <Table.HeaderCell>Genus</Table.HeaderCell>
          <Table.HeaderCell>Species</Table.HeaderCell>
          <Table.HeaderCell>Subspecies</Table.HeaderCell>
          <Table.HeaderCell>Variety</Table.HeaderCell>
          <Table.HeaderCell>Forma</Table.HeaderCell>
          <Table.HeaderCell>Cultivar</Table.HeaderCell>
          <Table.HeaderCell>Hybrid</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {plants.map((plant: Plant) => (
          <Table.Row
            key={plant._id}
            active={activeRowId === plant._id}
            onClick={(e: any) => onRowClicked(e, plant)}
          >
            <Table.Cell collapsing>
              <Checkbox
                id={plant._id}
                checked={isSelected(plant._id)}
                onChange={(event, data) => onCheckboxChange(event, data)}
                onMouseDown={(event, data) => onCheckboxMouseDown(event, data)}
              />
            </Table.Cell>
            <Table.Cell>{plant.name}</Table.Cell>
            <Table.Cell>{plant.binomial}</Table.Cell>
            <Table.Cell>{plant.family}</Table.Cell>
            <Table.Cell>{plant.genus}</Table.Cell>
            <Table.Cell>{plant.species}</Table.Cell>
            <Table.Cell>{plant.subspecies}</Table.Cell>
            <Table.Cell>{plant.variety}</Table.Cell>
            <Table.Cell>{plant.forma}</Table.Cell>
            <Table.Cell>{plant.cultivar}</Table.Cell>
            <Table.Cell>{plant.hybrid}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
