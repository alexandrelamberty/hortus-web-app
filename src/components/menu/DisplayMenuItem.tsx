import { Dropdown, Menu } from "semantic-ui-react";

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
interface DisplayMenuItemProps {
  onChange: (number: number) => void;
}
export const DisplayMenuItem = (props: DisplayMenuItemProps) => {
  return (
    <Menu.Item>
      <Dropdown
        button
        className="icon"
        floating
        labeled
        icon="user"
        options={options}
        defaultValue={options[0].value}
        onChange={(event, data) => {
          //onDisplayChange(event, data);
        }}
      />
    </Menu.Item>
  );
};
