import { Button, Icon, Menu, Popup } from "semantic-ui-react";

interface AddMenuItemProps {
  label: string;
  onClick: () => void;
}

export const AddMenuItem = (props: AddMenuItemProps) => {
  return (
    <Menu.Item>
      <Button icon positive labelPosition="left" onClick={props.onClick}>
        <Icon name="add" />
        {props.label}
      </Button>
    </Menu.Item>
  );
};
