import { Menu } from "semantic-ui-react";

type ActionMenuProps = {
  left: JSX.Element;
  right: JSX.Element;
};

export const ActionMenu = ({ left, right }: ActionMenuProps) => {
  return (
    <>
      <Menu size="tiny" fluid>
        {left}
        <Menu.Menu position="right">{right}</Menu.Menu>
      </Menu>

      {/* TODO:feature <Segment>Filter form</Segment> */}
    </>
  );
};
