import { Input, Menu } from "semantic-ui-react";

interface SearchMenuItemProps {
  placeholder: string;
  onChange: (terms: string) => void;
}
export const SearchMenuItem = ({
  placeholder,
  onChange,
}: SearchMenuItemProps) => {
  return (
    <Menu.Item>
      <Input
        icon="search"
        placeholder={placeholder}
        onChange={(event, data) => onChange(data.value as string)}
      />
    </Menu.Item>
  );
};
