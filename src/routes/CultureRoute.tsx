import React, { useContext } from "react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { Button, Container, Icon, Input, Menu, Modal } from "semantic-ui-react";
import { CultureForm } from "src/components/form/CultureForm";
import { PhaseForm } from "src/components/form/PhaseForm";
import CultureList from "src/components/list/CultureList";
import { ActionMenu } from "src/components/menu/ActionMenu";
import { AddMenuItem } from "src/components/menu/AddMenuItem";
import { DeleteMenuItem } from "src/components/menu/DeleteMenuItem";
import { SearchMenuItem } from "src/components/menu/SearchMenuItem";
import { SelectMenuItem } from "src/components/menu/SelectMenuItem";
import { View, ViewMenuItem } from "src/components/menu/ViewMenuItem";
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
    modals,
  } = useContext(ApplicationContext);
  // Plant context
  const { selected, selectedSeed, createCulture, deleteCultures } =
    React.useContext(CultureContext);

  const onAddClicked = () => {
    console.log("CultureRoute.onAddClicked");
    setViewCultureForm(!viewCultureForm);
  };

  const onDeleteClicked = () => {
    console.log("CultureRoute.onDeleteClicked", selected);
    deleteCultures(selected);
  };

  // Pagination displayZ
  const onDisplayChange = (number: number) => {
    console.log("CultureRoute.changePage", number);
  };

  // Pagination page
  const onPageChange = (page: number) => {
    console.log("CultureRoute.changePage", page);
  };

  // View data as
  const onViewTypeChange = (view: View) => {
    console.log("CultureRoute.changeView", view);
    setCultureViewType(cultureViewType);
  };

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

      {/* Seeding, Transplanting and Planting Phases Form modal */}

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
        size="small"
        onClose={() => setShowHarvestingForm(false)}
        onOpen={() => setShowHarvestingForm(true)}
        open={showHarvestingForm}
      >
        <Modal.Header>Start harvesting</Modal.Header>
        <Modal.Content image></Modal.Content>
      </Modal>
    </>
  );
}
