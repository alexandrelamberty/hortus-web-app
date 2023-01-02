import React from "react";
import { Input, Menu } from "semantic-ui-react";

interface SearchMenuItemProps {
  onChange: (terms: string) => void;
}
export const SearchMenuItem = (props: SearchMenuItemProps) => {
  return (
    <Menu.Item>
      <Input
        icon="search"
        placeholder="Search..."
        onChange={(event, data) => {
          console.log("SearchMenuItem::onChange()");
          props.onChange(data.value as string);
        }}
      />
    </Menu.Item>
  );
};
