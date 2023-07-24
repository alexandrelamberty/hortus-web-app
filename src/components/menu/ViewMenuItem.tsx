import { Dropdown, Menu } from "semantic-ui-react";

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

const GRID_VIEW = {
  key: "grid",
  icon: "th",
  text: "Grid",
  value: "grid",
};

export const views = [GRID_VIEW, TABLE_VIEW];

export type List = "list";
export type Grid = "grid";
export type Table = "table";
export type View = List | Grid | Table;

interface ViewMenuItemProps {
  type: string;
  onChange: (view: View) => void;
}
export const ViewMenuItem = ({ type, onChange }: ViewMenuItemProps) => {
  return (
    <Menu.Item>
      <Dropdown
        button
        className="icon"
        floating
        labeled
        icon="cog"
        options={views}
        defaultValue={type}
        onChange={(event, data) => onChange(data.value as View)}
      />
    </Menu.Item>
  );
};
