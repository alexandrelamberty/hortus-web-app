import React from "react";
import {
  Button,
  Dropdown,
  Icon,
  Input,
  Menu,
  Pagination,
} from "semantic-ui-react";

const selects = [
  {
    key: "all",
    text: "all",
    value: "all",
    content: "All",
  },
  {
    key: "none",
    text: "none",
    value: "none",
    content: "None",
  },
];

const options = [
  {
    key: "all",
    text: "all",
    value: "all",
    content: "all",
  },
  {
    key: "25",
    text: "25",
    value: "25",
    content: "25",
  },
  {
    key: "50",
    text: "50",
    value: "50",
    content: "50",
  },
  {
    key: "100",
    text: "100",
    value: "100",
    content: "100",
  },
];

const views = [
  {
    key: "list",
    icon: "list",
    text: "List",
    value: "list",
  },
  { key: "table", icon: "table", text: "Table", value: "table" },
  { key: "grid", icon: "th", text: "Grid", value: "grid" },
];

type ControllsProps = {
  name: string;
  selected?: boolean;
  handleAdd: VoidFunction;
  handleDelete: VoidFunction;
};

export default function ActionControlls(props: ControllsProps) {
  return (
    <Menu secondary size="tiny" fluid>
      <Menu.Item>
        <Button icon positive labelPosition="left" onClick={props.handleAdd}>
          <Icon name="add" />
          {props.name}
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button.Group size="tiny">
          <Button icon="minus square outline"></Button>
          <Dropdown
            className="button icon"
            floating
            options={selects}
            trigger={<></>}
          />
        </Button.Group>
      </Menu.Item>
      <Menu.Item>
        {/* FIXME: Disable if nothing selected*/}
        <Button
          icon="trash"
          onClick={props.handleDelete}
          disabled={!props.selected}
        />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item>
          <Dropdown
            button
            className="icon"
            floating
            labeled
            icon="world"
            options={options}
            defaultValue={options[0].value}
          />
        </Menu.Item>
        <Menu.Item>
          <Pagination
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={3}
          />
        </Menu.Item>
        <Menu.Item>
          <Dropdown
            button
            className="icon"
            floating
            labeled
            icon="world"
            options={views}
            defaultValue={views[0].value}
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
