import React, { useContext, useState } from "react";
import { Button, Container, Icon, Input, Modal } from "semantic-ui-react";
import { CultureForm } from "src/components/form/CultureForm";
import CultureList from "src/components/list/CultureList";
import { ActionMenu } from "src/components/menu/ActionMenu";
import { AddMenuItem } from "src/components/menu/AddMenuItem";
import { DeleteMenuItem } from "src/components/menu/DeleteMenuItem";
import { SearchMenuItem } from "src/components/menu/SearchMenuItem";
import { SelectMenuItem } from "src/components/menu/SelectMenuItem";

import { View, ViewMenuItem } from "src/components/menu/ViewMenuItem";
import CultureTable from "src/components/table/CultureTable";
import { ApplicationContext } from "src/contexts/ApplicationContextProvider";
import { CultureContext } from "src/contexts/CultureContextProvider";

export function CultureRoute() {
  // Application context
  const {
    viewCultureForm,
    setViewCultureForm,
    cultureViewType,
    setCultureViewType,
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

  // Pagination display
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
    <Container>
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
      <CultureList />

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
    </Container>
  );
}
