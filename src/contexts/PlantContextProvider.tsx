import axios from "axios";
import * as React from "react";
import { getConfig } from "src/config";
import { Plant } from "src/interfaces/Plant";
import { PlantFormData } from "src/interfaces/PlantFormData";
import { ApplicationContext } from "./ApplicationContextProvider";

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
  deletePlant: (id: number, callback?: VoidFunction) => void;
  deletePlants: (ids: number[], callback?: VoidFunction) => void;
}

export const PlantContext = React.createContext<PlantContextType>(null!);

export function PlantContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { apiUri } = React.useContext(ApplicationContext);
  const [count, setCount] = React.useState<number>(0);
  const [plants, setPlants] = React.useState<Plant[]>([]);
  const [selected, setSelected] = React.useState<number[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formOpen, setFormOpen] = React.useState<boolean>(false);
  const [viewOpen, setViewOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    console.log("PlantContextProvider::mount");
  }, []);

  const fetchPlants = React.useCallback(() => {
    console.log(apiUri + "/plants");
    setIsLoading(true);
    axios
      .get(apiUri + "/plants")
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
        .post(apiUri + "plants", plant, {
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
        .post(apiUri, plant, {
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

  const deletePlant = React.useCallback(
    (id: number, callback?: VoidFunction) => {
      setIsLoading(true);
      axios
        .post(apiUri, id)
        .then(function (response) {
          console.log(response);
          setPlants([...plants].concat(response.data));
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    []
  );

  const deletePlants = React.useCallback(
    (ids, callback?: VoidFunction) => {
      setIsLoading(true);
      console.log(ids);
      axios
        .delete(apiUri + `/multiple/${ids.concat()}`)
        .then(function (response) {
          console.log("response", response);
          let ids: [] = response.data;
          let temp = plants;
          ids.forEach((id) => {
            temp = temp.filter((plant) => plant._id !== id);
          });
          setPlants(temp);
          setSelected([]);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [apiUri, plants]
  );

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
