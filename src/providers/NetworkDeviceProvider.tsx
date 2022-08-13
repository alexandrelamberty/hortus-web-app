import axios from "axios";
import * as React from "react";
import { NetworkDevice } from "src/interfaces/NetworkDevice";

export interface NetworkContextType {
  count: number;
  devices: NetworkDevice[];
  selectedNetworkDevices: NetworkDevice[];
  isLoading: boolean;
  fetchDevices: () => void;
}

export const networkContextDefaultValue: NetworkContextType = {
  count: 0,
  devices: [],
  selectedNetworkDevices: [],
  isLoading: false,
  fetchDevices: () => null,
};

export const NetworkDeviceContext = React.createContext<NetworkContextType>(
  null!
);

const URI = process.env.REACT_APP_API_URL;

export function NetworkDeviceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let [count, setCount] = React.useState<number>(0);
  let [devices, setNetworkDevices] = React.useState<NetworkDevice[]>([]);
  let [selectedNetworkDevices, setSelectedNetworkDevices] = React.useState<
    NetworkDevice[]
  >([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchDevices = React.useCallback(() => {
    setIsLoading(true);
    axios
      .get(URI + "/NetworkDevices")
      .then(function (response) {
        setNetworkDevices(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [setNetworkDevices]);

  return (
    <NetworkDeviceContext.Provider
      value={{
        count,
        isLoading,
        devices,
        fetchDevices,
        selectedNetworkDevices,
      }}
    >
      {children}
    </NetworkDeviceContext.Provider>
  );
}
