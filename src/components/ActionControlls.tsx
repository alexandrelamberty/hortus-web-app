import React from "react";
import {
  Button,
  Dropdown,
  DropdownProps,
  Icon,
  Input,
  Menu,
  Pagination,
  PaginationProps,
} from "semantic-ui-react";
import PaginationControlls from "./PaginationControlls";

// Selection
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

// Items
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

// View
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

// View
export type List = "list";
export type Grid = "grid";
export type Table = "table";
export type View = List | Grid | Table;

type ControllsProps = {
  name: string;
  view: View;
  selected?: boolean;
  handleAdd: VoidFunction;
  handleDelete: VoidFunction;
  onDisplayChange: (number: number) => void;
  onPageChange: (page: number) => void;
  onViewTypeChange: (view: View) => void;
};

export default function ActionControlls(props: ControllsProps) {
  // View
  const onDisplayChange = (
    event: React.SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) => {
    // console.log("View::onViewChange", event, data);
    props.onDisplayChange(data.value as number);
  };

  // Pagination
  const onPageChange = (
    event: React.MouseEvent<HTMLAnchorElement>,
    data: PaginationProps
  ) => {
    // console.log("Pagination::onPageChange", event, data);
    props.onPageChange(data.activePage as number);
  };

  // View
  const onViewChange = (
    event: React.SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) => {
    // console.log("View::onViewChange", event, data);
    props.onViewTypeChange(data.value as View);
  };

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
            icon="user"
            options={options}
            defaultValue={options[0].value}
            onChange={(event, data) => onDisplayChange(event, data)}
          />
        </Menu.Item>
        {/* <Menu.Item>
          <Pagination
            size="mini"
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            totalPages={3}
            onPageChange={(event, data) => onPageChange(event, data)}
          />
        </Menu.Item> */}
        <Menu.Item>
          <Dropdown
            button
            className="icon"
            floating
            labeled
            icon="cog"
            options={views}
            defaultValue={props.view}
            onChange={(event, data) => onViewChange(event, data)}
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
