import React, { useContext, useEffect, useMemo, useState } from "react";
import { Checkbox, Table } from "semantic-ui-react";
import { Plant } from "src/interfaces/Plant";
import { PlantContext } from "src/contexts/PlantContextProvider";
import { idText } from "typescript";

interface PlantTableProps {
  plants: Plant[];
  // onSetSelected
}

const exampleReducer = (state: any, action: any) => {
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

export default function PlantTable({ plants }: PlantTableProps) {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: plants,
    direction: null,
  });
  const { column, data, direction } = state;
  // The selected table rows
  const { selected, setSelected } = useContext(PlantContext);

  // Hack event bubbling
  const [activeRowId, setActiveRowId] = useState(0);
  const [mouseDownId, setMouseDownId] = useState(0);

  // Return true if a plant
  const isSelected = (id: number): boolean => {
    return selected.includes(id);
  };

  useEffect(() => {
    console.log("selected", selected);
    // Update the SelectionCheckBox
  }, [selected]);

  function onRowClicked(id: number) {
    console.log("PlantTable::onRowClicked", id, mouseDownId);
    if (id !== mouseDownId) {
      //setActiveRowId(id);
      // FIXME: what this is used for?...
      // setViewOpen(true);
    }
    // Clean on mouse up
    //setMouseDownId(0);
  }

  // function onCheckboxMouseDown(event: any, data: any) {
  //   console.log("onCheckboxMouseDown()", data.id);
  //   setMouseDownId(data.id);
  // }

  // function onCheckboxMouseUp(event: any, data: any) {
  //   console.log("onCheckboxMouseUp()", data.id);
  //   setMouseDownId(0);
  // }

  const onCheckboxChange = (event: any, data: any): void => {
    console.log("PlantTable::onCheckboxChange", data.id);
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
          <Table.HeaderCell>Picture</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {plants.map((plant: Plant) => (
          <Table.Row
            key={plant._id}
            active={activeRowId === plant._id}
            onClick={() => onRowClicked(plant._id)}
          >
            <Table.Cell collapsing>
              <Checkbox
                id={plant._id}
                checked={isSelected(plant._id)}
                onChange={(event, data) => onCheckboxChange(event, data)}
                // onMouseDown={(event, data) => onCheckboxMouseDown(event, data)}
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
            <Table.Cell>{plant.picture}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
