import { Button, Menu } from "semantic-ui-react";

interface DeleteMenuItemProps {
  disabled: boolean;
  onClick: () => void;
}

export const DeleteMenuItem = ({ disabled, onClick }: DeleteMenuItemProps) => {
  // const disabled = props.disabled ? props.disabled : true;
  return (
    <Menu.Item>
      <Button
        color={disabled ? "grey" : "red"}
        icon="trash"
        onClick={onClick}
        disabled={disabled}
      />
    </Menu.Item>
  );
};
