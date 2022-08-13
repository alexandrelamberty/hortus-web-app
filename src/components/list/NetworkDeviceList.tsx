import React, { useContext, useEffect } from "react";
import { List } from "semantic-ui-react";
import { NetworkDevice } from "src/interfaces/NetworkDevice";
import { NetworkDeviceContext } from "src/providers/NetworkDeviceProvider";

export default function NetworkDeviceList() {
  const { devices, fetchDevices } = useContext(NetworkDeviceContext);

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  return (
    <List selection divided relaxed>
      {devices.map((device: NetworkDevice) => (
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">{device.name}</List.Header>
            <List.Description as="a">{device.ip}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
}
