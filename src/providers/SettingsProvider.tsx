import axios from "axios";
import * as React from "react";
import { Sensor } from "src/interfaces/Sensor";

export interface SensorContextType {
  count: number;
  sensors: Sensor[];
  selectedSensors: Sensor[];
  isLoading: boolean;
  fetchSensors: () => void;
  createSensor: (Sensor: Sensor) => void;
  removeSensor: (postId: number) => void;
}

export const SensorContextDefaultValue: SensorContextType = {
  count: 0,
  sensors: [],
  selectedSensors: [],
  isLoading: false,
  fetchSensors: () => null,
  createSensor: () => null,
  removeSensor: () => null,
};

export const SensorContext = React.createContext<SensorContextType>(null!);

const URI = process.env.REACT_APP_API_URL;

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  let [count, setCount] = React.useState<number>(0);
  let [sensors, setSensors] = React.useState<Sensor[]>([]);
  let [selectedSensors, setSelectedSensors] = React.useState<Sensor[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchNetworkDevices = React.useCallback(() => {
    setIsLoading(true);
    axios
      .get(URI + "/sensors")
      .then(function (response) {
        setSensors(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [setSensors]);

  const fetchSensors = React.useCallback(() => {
    setIsLoading(true);
    axios
      .get(URI + "/sensors")
      .then(function (response) {
        setSensors(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [setSensors]);

  const createSensor = React.useCallback(
    (sensor: Sensor) => {
      setIsLoading(true);
      axios
        .post(URI + "/sensors", sensor)
        .then(function (response) {
          setSensors([...sensors].concat(response.data));
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
    [setSensors, sensors]
  );

  const removeSensor = React.useCallback(
    (postId: number) => {
      setIsLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE",
      })
        .then(() => {
          const newPosts = [...sensors];
          const removedPostIndex = newPosts.findIndex(
            (post: Sensor) => post._id === postId
          );
          if (removedPostIndex > -1) {
            newPosts.splice(removedPostIndex, 1);
          }
          setSensors(newPosts);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [setSensors, sensors]
  );

  return (
    <SensorContext.Provider
      value={{
        count,
        isLoading,
        sensors,
        selectedSensors,
        fetchSensors,
        createSensor,
        removeSensor,
      }}
    >
      {children}
    </SensorContext.Provider>
  );
}
