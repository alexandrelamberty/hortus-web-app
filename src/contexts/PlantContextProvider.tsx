import axios from "axios";
import * as React from "react";
import { Plant } from "src/interfaces/Plant";
import { Seed } from "src/interfaces/Seed";
import { ApplicationContext } from "./ApplicationContextProvider";

export enum ActionType {
  LOAD = "load",
  SELECT = "select",
  UNSELECT = "unselect",
  SELECT_ALL = "select_all",
  SELECT_NONE = "select_none",
  FILTER = "filter",
  SEARCH = "search",
  ADD = "add",
  DELETE = "delete",
  UPDATE = "update",
}

interface Action {
  type: ActionType;
  payload: any;
}

export interface PlantContextType {
  isLoading: boolean;
  count: number;
  plants: Plant[];
  // Selected plant ids
  selecteds: string[];
  setSelecteds: any;
  // Selected plant
  selected: Plant | undefined;
  setSelected: any;
  fetchPlants: () => void;
  createPlant: (plant: FormData, callback: VoidFunction) => void;
  updatePlant: (id: string, plant: FormData, callback: VoidFunction) => void;
  deletePlant: (id: string, callback?: VoidFunction) => void;
  deletePlants: (ids: string[], callback?: VoidFunction) => void;
}

export const PlantContext = React.createContext<PlantContextType>(null!);

/**
 *
 * @param param0
 * @returns
 */
export function PlantContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // The api url to call
  const { apiUrl, setErrors } = React.useContext(ApplicationContext);
  // The number of plant in the collection
  const [count, setCount] = React.useState<number>(0);
  // The plant collection
  const [plants, setPlants] = React.useState<Plant[]>([]);
  // The selected plants via data viewers, ex, table, list ...
  const [selecteds, setSelecteds] = React.useState<string[]>([]);
  // The selected plant via a data viewers, ex, table, list
  const [selected, setSelected] = React.useState<Plant | undefined>();
  // The Axios request state
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    console.log("PlantContextProvider::mount");
  }, []);

  const fetchPlants = React.useCallback(() => {
    console.log(apiUrl + "/plants");
    setIsLoading(true);
    axios
      .get(apiUrl + "/plants")
      .then(function (response) {
        setPlants(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      })
      .catch(function (error) {
        setErrors(error);
      });
  }, [apiUrl, setPlants]);

  const createPlant = React.useCallback(
    (plant: any, callback: VoidFunction) => {
      console.log(
        "PlantContext::createPlant FormData",
        Object.fromEntries(plant)
      );
      setIsLoading(true);
      axios
        .post(apiUrl + "/plants", plant, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setPlants([...plants].concat(response.data));
          setIsLoading(false);
          callback();
        })
        .catch((error) => {
          console.log(error);
          setErrors(error);
        });
    },
    [setPlants, plants]
  );

  const updatePlant = React.useCallback(
    (id: string, plant: FormData, callback: VoidFunction) => {
      console.log(plant);
      setIsLoading(true);
      axios
        .put(apiUrl + "/plants/" + id, plant, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          console.log("updated plant", response.data);
          const newplants = plants.map((obj) => {
            // 👇️ if id equals 2, update country property
            if (obj._id === id) {
              return response.data;
            }

            // 👇️ otherwise return object as is
            return obj;
          });
          setPlants(newplants);
          setIsLoading(false);
          callback();
        })
        .catch(function (error) {
          console.log(error);
          setErrors(error);
        });
    },
    [setPlants, plants]
  );

  const deletePlant = React.useCallback(
    (id: string, callback?: VoidFunction) => {
      setIsLoading(true);
      axios
        .post(apiUrl, id)
        .then(function (response) {
          console.log(response);
          setPlants(plants.filter((plant) => plant._id !== id));
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setErrors(error);
        });
    },
    []
  );

  const deletePlants = React.useCallback(
    (ids, callback?: VoidFunction) => {
      setIsLoading(true);
      console.log(ids);
      axios
        .delete(apiUrl + `/plants/multiple/${ids.concat()}`)
        .then(function (response) {
          console.log("response", response);
          let ids: [] = response.data;
          let temp = plants;
          ids.forEach((id) => {
            temp = temp.filter((plant) => plant._id !== id);
          });
          setPlants(temp);
          setSelecteds([]);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setErrors(error);
        });
    },
    [apiUrl, plants]
  );

  return (
    <PlantContext.Provider
      value={{
        //dispatch,
        count,
        isLoading,
        plants,
        selected,
        setSelected,
        selecteds,
        setSelecteds,
        fetchPlants,
        createPlant,
        updatePlant,
        deletePlant,
        deletePlants,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
}
