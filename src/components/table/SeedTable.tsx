import { useContext, useEffect, useMemo, useState } from "react";
import { Checkbox, Label, Table } from "semantic-ui-react";
import { SeedContext } from "../../contexts/SeedContextProvider";
import { Seed } from "../../interfaces/Seed";

interface SeedTableProps {
  seeds: Seed[];
  onChange: (seed: Seed) => void;
}

export default function SeedTable({ seeds, onChange }: SeedTableProps) {
  // Context
  const { selecteds, setSelecteds } = useContext(SeedContext);

  // Internal state
  const [activeRowId, setActiveRowId] = useState("");
  const [mouseDownId, setMouseDownId] = useState("");

  // useEffect(() => {
  //   fetchSeeds();
  // }, [fetchSeeds]);

  function onRowClicked(seed: Seed) {
    console.log("onRowClicked()", mouseDownId);
    onChange(seed);
  }

  // Used to store and to bypass the click on the row and not select the
  // row clicking the checkbox
  function onCheckboxMouseDown(event: any, data: any) {
    console.log("onCheckboxMouseDown()", data.id);
    setMouseDownId(data.id);
  }

  function onCheckboxMouseUp(event: any, data: any) {
    console.log("onCheckboxMouseUp()", data.id);
    setMouseDownId("0");
  }

  function onCheckboxChange(event: any, data: any) {
    console.log("onCheckboxChange()", data.id);
    console.log("isChecked", data.checked);
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
  }

  const isSeedSelected = useMemo(
    () => (id: any) => selecteds.includes(id),
    [selecteds]
  );

  return (
    <Table size="small" definition sortable selectable celled compact>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Plant</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Harvest</Table.HeaderCell>
          <Table.HeaderCell>Season</Table.HeaderCell>
          <Table.HeaderCell>Sun</Table.HeaderCell>
          <Table.HeaderCell>Frost</Table.HeaderCell>
          <Table.HeaderCell>Water</Table.HeaderCell>
          <Table.HeaderCell>Companions</Table.HeaderCell>
          <Table.HeaderCell>Competitors</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {seeds.map((seed) => (
          <Table.Row
            key={seed._id}
            active={activeRowId === seed._id}
            onClick={() => onRowClicked(seed)}
          >
            <Table.Cell collapsing>
              <Checkbox
                id={seed._id}
                checked={isSeedSelected(seed._id)}
                onChange={(event, data) => onCheckboxChange(event, data)}
                onMouseDown={(event, data) => onCheckboxMouseDown(event, data)}
              />
            </Table.Cell>
            <Table.Cell>{seed.name}</Table.Cell>
            <Table.Cell>{seed.plant?.name}</Table.Cell>
            <Table.Cell>{seed.type}</Table.Cell>
            <Table.Cell>{seed.harvest}</Table.Cell>
            <Table.Cell>{seed.season}</Table.Cell>
            <Table.Cell>{seed.sun}</Table.Cell>
            <Table.Cell>{seed.frost}</Table.Cell>
            <Table.Cell>{seed.water}</Table.Cell>
            <Table.Cell>
              {seed.companions.map((plant) => (
                <Label id={plant._id} key={plant._id} color="green" size="tiny">
                  {plant.name}
                </Label>
              ))}
            </Table.Cell>
            <Table.Cell>
              {seed.competitors.map((plant) => (
                <Label
                  color="red"
                  id={plant._id}
                  key={plant._id}
                  as="a"
                  size="tiny"
                >
                  {plant.name}
                </Label>
              ))}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
