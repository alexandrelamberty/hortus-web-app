import React, { useContext } from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { Button, Icon, Input, Menu, Modal } from "semantic-ui-react";
import { CultureForm } from "src/components/form/CultureForm";
import { HarvestingForm } from "src/components/form/HarvestingForm";
import { PhaseForm } from "src/components/form/PhaseForm";
import CultureList from "src/components/list/CultureList";
import { ActionMenu } from "src/components/menu/ActionMenu";
import { AddMenuItem } from "src/components/menu/AddMenuItem";
import { DeleteMenuItem } from "src/components/menu/DeleteMenuItem";
import { SearchMenuItem } from "src/components/menu/SearchMenuItem";
import { SelectMenuItem } from "src/components/menu/SelectMenuItem";
import { ViewMenuItem } from "src/components/menu/ViewMenuItem";
import { ApplicationContext } from "src/contexts/ApplicationContextProvider";
import { CultureContext } from "src/contexts/CultureContextProvider";

export function CultureRoute() {
  // Application context
  const {
    viewCultureForm,
    setViewCultureForm,
    cultureViewType,
    setCultureViewType,
    showPhaseForm,
    setShowPhaseForm,
    setShowHarvestingForm,
    showHarvestingForm,
  } = useContext(ApplicationContext);
  // Plant context
  const { selected, selectedSeed, createCulture, deleteCultures } =
    React.useContext(CultureContext);

  const onSubmit = () => {
    console.log("submit");
    if (selectedSeed) {
      let seed = {
        seed: selectedSeed,
      };
      createCulture(seed, onCultureCreated);
    }
  };

  const onCultureCreated = () => {
    setViewCultureForm(false);
  };

  return (
    <>
      <ActionMenu
        left={
          <>
            <AddMenuItem
              label="Seeds"
              onClick={() => {
                console.log("add");
                setViewCultureForm(!viewCultureForm);
              }}
            />
            <SelectMenuItem
              onChange={(content) => {
                console.log("select ", content);
              }}
            />
            <DeleteMenuItem
              disabled={selected.length !== 0}
              onClick={() => {
                console.log("delete");
                //
                deleteCultures(selected);
              }}
            />
          </>
        }
        right={
          <>
            <Menu.Item>
              <SemanticDatepicker size="small" />
            </Menu.Item>
            <SearchMenuItem
              onChange={(terms) => {
                console.log("search", terms);
              }}
            />
            <ViewMenuItem
              type={cultureViewType}
              onChange={(view) => {
                console.log("view", view);
                setCultureViewType(view);
              }}
            />
          </>
        }
      />

      {/* FIXME: loading */}
      {/* <CultureTable /> */}
      <div style={{ height: "70vh", overflowY: "scroll" }}>
        <CultureList />
      </div>

      {/* CultureForm  */}
      <Modal
        size="fullscreen"
        onClose={() => setViewCultureForm(false)}
        onOpen={() => setViewCultureForm(true)}
        open={viewCultureForm}
      >
        <Modal.Header>New Culture</Modal.Header>
        <Modal.Content image>
          <CultureForm />
        </Modal.Content>
        <Modal.Actions>
          <Input placeholder="Search" size="mini" />
          <Button
            color="red"
            size="mini"
            onClick={() => setViewCultureForm(false)}
          >
            <Icon name="remove" /> Cancel
          </Button>
          <Button color="green" size="mini" onClick={onSubmit}>
            <Icon name="checkmark" /> Start
          </Button>
        </Modal.Actions>
      </Modal>

      {/* Seeding, Transplanting and Planting Phases Forms modals */}

      <Modal
        size="small"
        onClose={() => setShowPhaseForm(false)}
        onOpen={() => setShowPhaseForm(true)}
        open={showPhaseForm}
      >
        <Modal.Header>Start phase</Modal.Header>
        <Modal.Content image>
          <PhaseForm />
        </Modal.Content>
      </Modal>

      {/* Harvesting Phase Form Modal */}

      <Modal
        size="large"
        style={{ height: "90vh" }}
        onClose={() => setShowHarvestingForm(false)}
        onOpen={() => setShowHarvestingForm(true)}
        open={showHarvestingForm}
      >
        <Modal.Header>Start harvesting</Modal.Header>
        <Modal.Content image>
          <HarvestingForm />
        </Modal.Content>
      </Modal>

      {/* Harvesting Phase Form Modal */}

      <Modal
        size="large"
        onClose={() => setShowHarvestingForm(false)}
        onOpen={() => setShowHarvestingForm(true)}
        open={false}
      >
        <Modal.Header>Update harvesting</Modal.Header>
        <Modal.Content image></Modal.Content>
      </Modal>
    </>
  );
}
