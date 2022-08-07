import React, { Component } from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { Dropdown, Header, Icon, Image, Input, Menu } from "semantic-ui-react";

export default function TopMenu() {
  const navigation = [
    { name: "Dashboard", href: "/", current: true },
    { name: "Plants", href: "/plants", current: false },
    { name: "Seeds", href: "/seeds", current: false },
    { name: "Cultures", href: "/cultures", current: false },
    //{ name: 'Sensors', href: '/sensors', current: false },
  ];

  const options = [
    { key: 1, value: 1, content: "Settings" },
    { key: 2, value: 2 },
    { key: 3, value: 3 },
  ];

  const Match = (to: string) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return match;
  };

  return (
    <Menu>
      <Menu.Item header>Hortus</Menu.Item>
      {navigation.map((item) => (
        <Menu.Item
          name={item.name}
          as={NavLink}
          to={item.href}
          key={item.name}
          active={Match(item.href) ? true : false}
        >
          {item.name}
        </Menu.Item>
      ))}
      <Menu.Menu position="right">
        <Menu.Item>
          <Header as="h4">
            <Icon name="trophy" />
            <Header.Content>
              <Dropdown inline header="Adjust time span" options={options} />
            </Header.Content>
          </Header>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
