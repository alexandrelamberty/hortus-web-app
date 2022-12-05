import React from "react";
import { Menu, Segment } from "semantic-ui-react";

interface ActionMenuProps {
  left: JSX.Element;
  right: JSX.Element;
}

export const ActionMenu = (props: ActionMenuProps) => {
  return (
    <>
      <Menu size="tiny" fluid>
        {props.left}
        <Menu.Menu position="right">{props.right}</Menu.Menu>
      </Menu>

      {/* TODO:feature <Segment>Filter form</Segment> */}
    </>
  );
};
