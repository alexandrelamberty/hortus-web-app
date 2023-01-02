import React from "react";
import { Button, Menu } from "semantic-ui-react";

interface DeleteMenuItemProps {
  disabled: boolean | undefined;
  onClick: () => void;
}

export const DeleteMenuItem = (props: DeleteMenuItemProps) => {
  // const disabled = props.disabled ? props.disabled : true;
  return (
    <Menu.Item>
      <Button
        color={props.disabled ? "grey" : "red"}
        icon="trash"
        onClick={props.onClick}
        disabled={props.disabled}
      />
    </Menu.Item>
  );
};
