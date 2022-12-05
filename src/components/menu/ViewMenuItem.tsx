import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
// View

const LIST_VIEW = {
  key: "list",
  icon: "list",
  text: "List",
  value: "list",
};

const TABLE_VIEW = {
  key: "table",
  icon: "table",
  text: "Table",
  value: "table",
};

const GRID_VIEW = { key: "grid", icon: "th", text: "Grid", value: "grid" };

export const views = [GRID_VIEW, TABLE_VIEW];

// View
export type List = "list";
export type Grid = "grid";
export type Table = "table";
export type View = List | Grid | Table;

interface ViewMenuItemProps {
  type: string;
  onChange: (view: View) => void;
}
export const ViewMenuItem = (props: ViewMenuItemProps) => {
  return (
    <Menu.Item>
      <Dropdown
        button
        className="icon"
        floating
        labeled
        icon="cog"
        options={views}
        defaultValue={props.type}
        onChange={(event, data) => {
          props.onChange(data.value as View);
        }}
      />
    </Menu.Item>
  );
};
