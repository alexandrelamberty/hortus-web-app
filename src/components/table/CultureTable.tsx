import { useContext, useEffect, useState } from "react";
import { Checkbox, Table } from "semantic-ui-react";
import { CultureLocation } from "src/enums/CultureLocation";
import { PhaseStatus } from "src/enums/PhaseStatus";
import { Culture } from "src/interfaces/Culture";
import { CultureContext } from "src/providers/CultureProvider";
import PhaseCell from "./PhaseCell";

// FIXME:
const locations = Object.entries(CultureLocation).map(([key, value]) => ({
  key: value,
  text: key,
  value: value,
}));

type CultureTableProps = {};

export default function CultureTable() {
  const { cultures, fetchCultures, selected, setSelected } =
    useContext(CultureContext);
  const [activeRowId, setActiveRowId] = useState(0);
  const [mouseDownId, setMouseDownId] = useState(0);

  // FIXME:
  // move me
  useEffect(() => {
    fetchCultures();
  }, [fetchCultures]);

  // onPhaseChange
  const onPhaseChange = (phase: string, culture_id: number) => {
    console.log("onPhaseChange", phase, culture_id);
    // ask for soil and number ?
    // save
    // update or refetch
  };

  function onRowClicked(id: number) {
    console.log("onRowClicked()", id, mouseDownId);
    if (id !== mouseDownId) {
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

  // Set the context to the selected rows
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
          {culture.seed?.name}
        </Table.Cell>
        <PhaseCell
          phase={culture.seeding}
          onPhaseChange={(status: PhaseStatus) =>
            onPhaseChange("seeding", culture._id)
          }
        />
        <PhaseCell
          phase={culture.transplanting}
          onPhaseChange={() => onPhaseChange("transplanting", culture._id)}
        />
        <PhaseCell
          phase={culture.planting}
          onPhaseChange={() => onPhaseChange("planting", culture._id)}
        />
        <PhaseCell
          phase={culture.harvesting}
          onPhaseChange={() => onPhaseChange("seeding", culture._id)}
        />
      </Table.Row>
    );
  };

  return (
    <Table
      size="small"
      definition
      sortable
      // selectable
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
