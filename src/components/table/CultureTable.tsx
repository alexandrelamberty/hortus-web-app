import { useContext, useEffect, useState } from "react";
import { Checkbox, Image, Modal, Table } from "semantic-ui-react";
import { CultureContext } from "../contexts/CultureContextProvider";
import { CultureLocation } from "../enums/CultureLocation";
import { PhaseActions } from "../enums/PhaseActions";
import { Culture } from "../interfaces/Culture";
import PhaseCalendar from "../calendar/PhaseCalendar";
import { HarvestingForm } from "../form/HarvestingForm";
import { PhaseForm } from "../form/PhaseForm";
import PhaseTableCell from "./PhaseTableCell";

// FIXME:
const locations = Object.entries(CultureLocation).map(([key, value]) => ({
  key: value,
  text: key,
  value: value,
}));

type CultureTableProps = {};

export default function CultureTable() {
  // Culture context
  const { cultures, fetchCultures, selected, setSelected } =
    useContext(CultureContext);

  // Internal state
  const [activeRowId, setActiveRowId] = useState(0);
  const [mouseDownId, setMouseDownId] = useState(0);
  const [seedingPhaseModal, setSeedingPhaseModal] = useState(false);
  const [transplantingPhaseModal, setTransplantingPhaseModal] = useState(false);
  const [plantingPhaseModal, setPlantingPhaseModal] = useState(false);
  const [harvestingPhaseModal, setHarvestingPhaseModal] = useState(false);

  // FIXME:
  // move me
  useEffect(() => {
    fetchCultures();
  }, [fetchCultures]);

  // onPhaseAction
  const onPhaseAction = (phase: string, culture_id: number, action: string) => {
    switch (action) {
      case PhaseActions.START:
        console.log("START", phase, culture_id);
        if (phase === "harvesting") {
          // call api
          showStartPhaseModal(phase);
        }
        // show phase corresponding modal
        showStartPhaseModal(phase);
        break;
      case PhaseActions.SKIP:
        console.log("SKIP", phase, culture_id);
        // call api
        break;
      case PhaseActions.END:
        console.log("END", phase, culture_id);
        // call api
        break;
      case PhaseActions.RESET:
        console.log("RESET", phase, culture_id);
        break;
      case PhaseActions.UPDATE:
        console.log("UPDATE3", phase, culture_id);
        // call api
        break;
    }
  };

  const showStartPhaseModal = (phase: string) => {
    switch (phase) {
      case "seeding":
        setSeedingPhaseModal(true);
        break;
      case "transplanting":
        setTransplantingPhaseModal(true);
        break;
      case "planting":
        setPlantingPhaseModal(true);
        break;
      case "harvesting":
        setHarvestingPhaseModal(true);
        break;
    }
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
        {/* Selection */}
        <Table.Cell collapsing>
          <Checkbox
            id={culture._id}
            onChange={(event, data) => onCheckboxChange(event, data)}
            onMouseDown={(event, data) => onCheckboxMouseDown(event, data)}
          />
        </Table.Cell>
        {/* The seed associated to the culture */}
        <Table.Cell onClick={() => onRowClicked(culture._id)}>
          {culture.seed?.name}
          <Image
            src={"http://localhost:3333/static/" + culture.seed.image}
            size="small"
          />
        </Table.Cell>

        {/* The culture phases */}
        <Table.Cell>
          <Table>
            <Table.Row>
              <PhaseTableCell
                type="seeding"
                phase={culture.seeding}
                onPhaseChange={(action) =>
                  onPhaseAction("seeding", culture._id, action)
                }
              />
              x
            </Table.Row>
            <Table.Row>
              <PhaseTableCell
                type="transplanting"
                phase={culture.transplanting}
                onPhaseChange={(action) =>
                  onPhaseAction("transplanting", culture._id, action)
                }
              />
            </Table.Row>
            <Table.Row>
              <PhaseTableCell
                type="planting"
                phase={culture.planting}
                onPhaseChange={(action) =>
                  onPhaseAction("planting", culture._id, action)
                }
              />
            </Table.Row>
            <Table.Row>
              <PhaseTableCell
                type="harvesting"
                phase={culture.harvesting}
                onPhaseChange={(action) =>
                  onPhaseAction("harvesting", culture._id, action)
                }
              />
            </Table.Row>
          </Table>
        </Table.Cell>
      </Table.Row>
    );
  };

  return (
    <>
      <Table
        size="small"
        definition
        sortable
        // selectable
        celled
        compact
        structured
      >
        <Table.Body>
          {cultures.map((culture: Culture) => tableRow(culture))}
        </Table.Body>
      </Table>

      {/**
       * Seeding Phase Details modals with forms to update the phasesù
       *
       * - Seeding
       * - Transplanting
       * - Planting
       * - Harvesting
       */}
      <Modal
        size="mini"
        open={seedingPhaseModal}
        onClose={() => setSeedingPhaseModal(false)}
        onOpen={() => setSeedingPhaseModal(true)}
      >
        <Modal.Header>Start Seeding Phase</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <PhaseForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
      {/* Transplanting Phase Details */}
      <Modal
        size="mini"
        open={transplantingPhaseModal}
        onClose={() => setTransplantingPhaseModal(false)}
        onOpen={() => setTransplantingPhaseModal(true)}
      >
        <Modal.Header>Start Transplanting Phase</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <PhaseForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
      {/* Planting Phase Details */}
      <Modal
        size="mini"
        open={plantingPhaseModal}
        onClose={() => setPlantingPhaseModal(false)}
        onOpen={() => setPlantingPhaseModal(true)}
      >
        <Modal.Header>Start Planting Phase</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <PhaseForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
      {/* Harvesting */}
      <Modal
        size="mini"
        open={harvestingPhaseModal}
        onClose={() => setHarvestingPhaseModal(false)}
        onOpen={() => setHarvestingPhaseModal(true)}
      >
        <Modal.Header>Start Harvesting Phase</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <HarvestingForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
}
