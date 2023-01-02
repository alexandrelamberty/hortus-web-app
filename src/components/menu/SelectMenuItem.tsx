import React, { useState } from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";

// select choices
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

interface SelectMenuItemProps {
  onChange: (content: string) => void;
}

export const SelectMenuItem = (props: SelectMenuItemProps) => {
  const [icon, setIcon] = useState("minus square outline");
  // always fire change
  return (
    <Menu.Item>
      <Button.Group size="tiny">
        <Button icon={icon}></Button>
        <Dropdown
          className="button icon"
          floating
          options={selects}
          trigger={<></>}
          onChange={(event, data) => {
            event.preventDefault();
            props.onChange(String(data.value));
            // reset value to always fire change
            let value = String(data.value);

            setIcon(
              value === "all" ? "check square outline" : "minus square outline"
            );
          }}
        />
      </Button.Group>
    </Menu.Item>
  );
};
