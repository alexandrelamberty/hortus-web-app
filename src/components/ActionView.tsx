import React from "react";
import { Button, Dropdown, Icon, Input, Menu } from "semantic-ui-react";

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
  selected?: [];
  handleAdd: VoidFunction;
  handleDelete: VoidFunction;
};

export default function ActionControlls(props: ControllsProps) {
  return (
    <Menu.Item>
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
    </Menu.Item>
  );
}
