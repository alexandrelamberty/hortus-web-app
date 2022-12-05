import React from "react";
import { Menu, Pagination } from "semantic-ui-react";

interface PageMenuItemProps {
  onChange: (page: number) => void;
}
export const PageMenuItem = (props: PageMenuItemProps) => {
  return (
    <Menu.Item>
      <Pagination
        size="mini"
        defaultActivePage={1}
        firstItem={null}
        lastItem={null}
        totalPages={3}
        onPageChange={(event, data) => {
          //onPageChange(event, data);
        }}
      />
    </Menu.Item>
  );
};
