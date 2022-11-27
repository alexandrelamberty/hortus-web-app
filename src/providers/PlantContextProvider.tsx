import axios from "axios";
import * as React from "react";
import { getConfig } from "src/config";
import { Plant } from "src/interfaces/Plant";
import { PlantFormData } from "src/interfaces/PlantFormData";

export interface PlantContextType {
  isLoading: boolean;
  viewOpen: boolean;
  setViewOpen: any;
  formOpen: boolean;
  setFormOpen: any;
  count: number;
  // The Plants
  plants: Plant[];
  // The selected Plant IDs
  selected: number[];
  setSelected: any;
  fetchPlants: () => void;
  createPlant: (plant: FormData, callback: VoidFunction) => void;
  updatePlant: (plant: PlantFormData, callback: VoidFunction) => void;
  deletePlant: (id: number) => void;
  deletePlants: (ids: number[]) => void;
}

export const PlantContext = React.createContext<PlantContextType>(null!);

const URI = getConfig("REACT_APP_API_URL") + "/plants";

console.log(URI);

export function PlantContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let [count, setCount] = React.useState<number>(0);
  let [plants, setPlants] = React.useState<Plant[]>([]);
  let [selected, setSelected] = React.useState<number[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formOpen, setFormOpen] = React.useState<boolean>(false);
  const [viewOpen, setViewOpen] = React.useState<boolean>(false);

  // FIXME: Pagination
  const fetchPlants = React.useCallback(() => {
    setIsLoading(true);
    axios
      .get(URI)
      .then(function (response) {
        setPlants(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [setPlants]);

  const createPlant = React.useCallback(
    (plant: FormData, callback: VoidFunction) => {
      console.log("PlantContext::createPlant", plant);
      setIsLoading(true);
      axios
        .post(URI, plant, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          setPlants([...plants].concat(response.data));
          setIsLoading(false);
          callback();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [setPlants, plants]
  );

  const updatePlant = React.useCallback(
    (plant: PlantFormData, callback: VoidFunction) => {
      console.log(plant);
      setIsLoading(true);
      axios
        .post(URI, plant, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          setPlants([...plants].concat(response.data));
          setIsLoading(false);
          callback();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [setPlants, plants]
  );

  const deletePlant = React.useCallback((id: number) => {
    setIsLoading(true);
    axios
      .post(URI, id)
      .then(function (response) {
        //setPlants([...plants].concat(response.data));
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const deletePlants = React.useCallback((ids) => {
    setIsLoading(true);
    console.log(ids);
    axios
      .delete(URI + `/${ids}`)
      .then(function (response) {
        //setPlants([...plants].concat(response.data));
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <PlantContext.Provider
      value={{
        //dispatch,
        count,
        isLoading,
        formOpen,
        setFormOpen,
        viewOpen,
        setViewOpen,
        plants,
        selected,
        setSelected,
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
