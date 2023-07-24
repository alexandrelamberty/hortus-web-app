import { Menu, Pagination } from "semantic-ui-react";

interface PageMenuItemProps {
  totalPage: number;
  onChange: (page: number) => void;
}
export const PageMenuItem = ({ totalPage, onChange }: PageMenuItemProps) => {
  return (
    <Menu.Item>
      <Pagination
        size="mini"
        defaultActivePage={1}
        firstItem={null}
        lastItem={null}
        totalPages={totalPage}
        onPageChange={(event, data) => {
          //onPageChange(event, data);
        }}
      />
    </Menu.Item>
  );
};
