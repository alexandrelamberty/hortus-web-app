import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CultureContext } from "src/providers/CultureProvider";
import { Button, Checkbox, Label, List, Popup, Table } from "semantic-ui-react";
import { Culture } from "src/interfaces/Culture";
import CulturePhaseCell from "./CulturePhaseCell";

export default function CultureTable() {
  const { cultures, fetchCultures, selected, setSelected } =
    useContext(CultureContext);
  const [activeRowId, setActiveRowId] = useState(0);
  const [mouseDownId, setMouseDownId] = useState(0);
  const onPhaseStart = (phase: string, id: number) => {
    console.log("onPhaseStart", phase, id);
  };
  const onPhaseStop = (phase: string, id: number) => {
    console.log("onPhaseStop", phase, id);
  };
  const onPhaseSkip = (phase: string, id: number) => {
    console.log("onPhaseSkip", phase, id);
  };
  useEffect(() => {
    fetchCultures();
  }, [fetchCultures]);

  function onRowClicked(id: number) {
    console.log("onRowClicked()", id, mouseDownId);
    if (id != mouseDownId) {
      setActiveRowId(id);
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

  const tableRow = (culture: Culture) => {
    return (
      <Table.Row key={culture._id} active={activeRowId === culture._id}>
        <Table.Cell collapsing>
          <Checkbox
            id={culture._id}
            onChange={(event, data) => onCheckboxChange(event, data)}
            onMouseDown={(event, data) => onCheckboxMouseDown(event, data)}
          />
        </Table.Cell>
        <Table.Cell onClick={() => onRowClicked(culture._id)}>
          {culture.seed.name}
        </Table.Cell>
        <CulturePhaseCell
          culture={culture}
          onStart={() => onPhaseStart("seeding", culture._id)}
          onStop={() => onPhaseStop("seeding", culture._id)}
          onSkip={() => onPhaseSkip("seeding", culture._id)}
        />
        <CulturePhaseCell
          culture={culture}
          onStart={() => onPhaseStart("transplanting", culture._id)}
          onStop={() => onPhaseStop("transplanting", culture._id)}
          onSkip={() => onPhaseSkip("transplanting", culture._id)}
        />
        <CulturePhaseCell
          culture={culture}
          onStart={() => onPhaseStart("planting", culture._id)}
          onStop={() => onPhaseStop("planting", culture._id)}
          onSkip={() => onPhaseSkip("planting", culture._id)}
        />
        <CulturePhaseCell
          culture={culture}
          onStart={() => onPhaseStart("harvesting", culture._id)}
          onStop={() => onPhaseStop("harvesting", culture._id)}
          onSkip={() => onPhaseSkip("harvesting", culture._id)}
        />
      </Table.Row>
    );
  };

  return (
    <Table
      size="small"
      definition
      sortable
      selectable
      celled
      compact
      structured
    >
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell rowSpan="2" />
          <Table.HeaderCell
            rowSpan="2"
            // onClick={() => dispatch({ type: "CHANGE_SORT", column: "name" })}
          >
            Name
          </Table.HeaderCell>
          <Table.HeaderCell colSpan={4}>Phases</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Seeding</Table.HeaderCell>
          <Table.HeaderCell>Transplanting</Table.HeaderCell>
          <Table.HeaderCell>Planting</Table.HeaderCell>
          <Table.HeaderCell>Harvesting</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {cultures.map((culture: Culture) => tableRow(culture))}
      </Table.Body>
    </Table>
  );
}
