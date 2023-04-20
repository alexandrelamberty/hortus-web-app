import React, { useContext, useEffect } from "react";
import { Header, Icon, Modal, Segment } from "semantic-ui-react";
import { SeedForm } from "../components/form/SeedForm";
import SeedGrid from "../components/grid/SeedGrid";
import SeedList from "../components/list/SeedList";
import { ActionMenu } from "../components/menu/ActionMenu";
import { AddMenuItem } from "../components/menu/AddMenuItem";
import { DeleteMenuItem } from "../components/menu/DeleteMenuItem";
import { SearchMenuItem } from "../components/menu/SearchMenuItem";
import { SelectMenuItem } from "../components/menu/SelectMenuItem";
import { ViewMenuItem } from "../components/menu/ViewMenuItem";
import SeedTable from "../components/table/SeedTable";
import { ApplicationContext } from "../contexts/ApplicationContextProvider";
import { SeedContext } from "../contexts/SeedContextProvider";
import { useSelectedIds } from "../hooks/useSelectedIds";
import { Seed } from "../interfaces/Seed";

export function SeedRoute() {
  // ApplicationContext and data provider PlantContext
  const { viewSeedForm, setViewSeedForm, seedViewType, setSeedViewType } =
    useContext(ApplicationContext);

  const {
    seeds,
    fetchSeeds,
    selecteds,
    setSelecteds,
    selected,
    setSelected,
    deleteSeeds,
  } = React.useContext(SeedContext);

  // FIXME:
  const ids = useSelectedIds(seeds);

  const renderView = () => {
    switch (seedViewType) {
      case "grid":
        return <SeedGrid onChange={onDataViewChange} />;
      case "table":
        return <SeedTable seeds={seeds} onChange={onDataViewChange} />;
      default:
        return <SeedList />;
    }
  };

  const onDeleted = () => {
    console.log("SeedRoute.onDeleteClicked");
  };

  const onDataViewChange = (seed: Seed) => {
    console.log("data change", seed);
    if (seed) setSelected(seed);
    setViewSeedForm(!viewSeedForm);
  };

  useEffect(() => {
    // fetchSeeds();
  }, [fetchSeeds]);

  return (
    <>
      <ActionMenu
        left={
          <>
            <AddMenuItem
              label="Seed"
              onClick={() => {
                console.log("add");
                setViewSeedForm(!viewSeedForm);
              }}
            />
            <SelectMenuItem
              onChange={(content) => {
                console.log("select ", content);
                console.log("select ", content);
                if (content === "none") setSelecteds([]);
                else if (content === "all") {
                  console.log("selectall");
                  setSelecteds(ids);
                }
              }}
            />
            <DeleteMenuItem
              disabled={selecteds.length === 0 ? true : false}
              onClick={() => {
                console.log("delete");
                //
                deleteSeeds(selecteds);
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
              type={seedViewType}
              onChange={(view) => {
                console.log("view", view);
                setSeedViewType(view);
              }}
            />
          </>
        }
      />
      {seeds.length > 0 ? renderView() : <PlaceHolder />}
      <Modal
        open={viewSeedForm}
        onOpen={() => setViewSeedForm(true)}
        onClose={() => setViewSeedForm(false)}
        size="large"
      >
        <Modal.Header>New Seed</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <SeedForm seed={selected} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
}

const PlaceHolder = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="lemon" />
        No Seed in the collection
      </Header>
    </Segment>
  );
};
