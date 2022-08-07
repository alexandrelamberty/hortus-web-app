import axios from "axios";
import * as React from "react";
import { Seed } from "src/interfaces/Seed";
import { SeedFormData } from "src/interfaces/SeedFormData";

export interface SeedContextType {
  isLoading: boolean;
  formOpen: boolean;
  setFormOpen: any;
  viewOpen: boolean;
  setViewOpen: any;
  count: number;
  seeds: Seed[];
  selected: number[];
  setSelected: any;
  fetchSeeds: () => void;
  createSeed: (seed: FormData, callback: VoidFunction) => void;
  updateSeed: (seed: SeedFormData, callback: VoidFunction) => void;
  deleteSeed: (id: number) => void;
  deleteSeeds: (ids: number[]) => void;
}

export const SeedContext = React.createContext<SeedContextType>(null!);

export function SeedProvider({ children }: { children: React.ReactNode }) {
  const URI = process.env.REACT_APP_API_URL;
  let [count, setCount] = React.useState<number>(0);
  let [seeds, setSeeds] = React.useState<Seed[]>([]);
  let [selected, setSelected] = React.useState<number[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formOpen, setFormOpen] = React.useState<boolean>(false);
  const [viewOpen, setViewOpen] = React.useState<boolean>(false);
  // FIXME: Pagination
  const fetchSeeds = React.useCallback(() => {
    setIsLoading(true);
    axios
      .get(URI + "/seeds")
      .then(function (response) {
        setSeeds(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [setSeeds]);

  const createSeed = React.useCallback(
    (newSeed: FormData, callback: VoidFunction) => {
      setIsLoading(true);
      axios
        .post(URI + "/seeds", newSeed)
        .then(function (response) {
          setSeeds([...seeds].concat(response.data));
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
    [setSeeds, seeds]
  );

  const updateSeed = React.useCallback(
    (seed: SeedFormData, callback: VoidFunction) => {
      console.log(seed);
      setIsLoading(true);
      axios
        .post(URI + "/seeds ", seed, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          setSeeds([...seeds].concat(response.data));
          setIsLoading(false);
          callback();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [setSeeds, seeds]
  );

  const deleteSeed = React.useCallback(
    (id: number) => {
      setIsLoading(true);
      axios
        .post(URI + "/seeds", id)
        .then(function (response) {
          //setPlants([...plants].concat(response.data));
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [setSeeds, seeds]
  );

  const deleteSeeds = React.useCallback(
    (ids: number[]) => {
      console.log("ids", ids);
      console.log("selected", selected);
      setIsLoading(true);
      /*
      axios
        .post(URI + `/seeds/${ids}`)
        .then(function (response) {
          //setPlants([...plants].concat(`esponse.data));
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
        */
    },
    [setSeeds, seeds]
  );

  return (
    <SeedContext.Provider
      value={{
        count,
        isLoading,
        formOpen,
        setFormOpen,
        viewOpen,
        setViewOpen,
        seeds,
        selected,
        setSelected,
        fetchSeeds,
        createSeed,
        updateSeed,
        deleteSeed,
        deleteSeeds,
      }}
    >
      {children}
    </SeedContext.Provider>
  );
}
