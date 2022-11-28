import axios from "axios";
import * as React from "react";
import { getConfig } from "src/config";
import { Seed } from "src/interfaces/Seed";
import { SeedDTO } from "src/interfaces/SeedDTO";
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
  createSeed: (seed: SeedFormData, callback: VoidFunction) => void;
  updateSeed: (seed: SeedFormData, callback: VoidFunction) => void;
  deleteSeed: (id: number) => void;
  deleteSeeds: (ids: number[]) => void;
}

export const SeedContext = React.createContext<SeedContextType>(null!);

export function SeedProvider({ children }: { children: React.ReactNode }) {
  const URI = getConfig("REACT_APP_API_URL");
  let [seeds, setSeeds] = React.useState<Seed[]>([]);
  let [count, setCount] = React.useState<number>(0);
  let [selected, setSelected] = React.useState<number[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formOpen, setFormOpen] = React.useState<boolean>(false);
  const [viewOpen, setViewOpen] = React.useState<boolean>(false);

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
  }, [URI, setSeeds]);

  const createSeed = React.useCallback(
    (seed: SeedFormData, callback: VoidFunction) => {
      console.log("createSeed", seed);
      setIsLoading(true);
      // enctype application/json
      let seedDTO: SeedDTO = {
        plant: seed.species,
        name: seed.name,
        description: seed.description,
        type: seed.type,
        // seed: data.harvest,
        season: seed.season,
        sun: seed.sun,
        frost: seed.frost,
        water: seed.water,
        companions: seed.companions,
        competitors: seed.competitors,
        seeding: seed.seeding,
        transplanting: seed.transplanting,
        planting: seed.planting,
        harvesting: seed.harvesting,
        spacing: seed.spacing,
        rows: seed.rows,
      };

      // enctype multipart/form-data
      let seedImageFormData = new FormData();
      seedImageFormData.append("image", seed.image[0]);

      axios
        .post(URI + "/seeds", seedDTO, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(function (response) {
          //setSeeds([...seeds].concat(response.data));
          const id: number = response.data._id;
          setIsLoading(false);
          uploadPicure(id, seedImageFormData);
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
    [setSeeds, seeds]
  );

  const uploadPicure = React.useCallback(
    (id: number, fd: FormData) => {
      setIsLoading(true);
      axios
        .post(URI + `/seeds/${id}/upload`, fd)
        .then(function (response) {
          console.log("upload_response", response);
          setSeeds([...seeds, response.data]);
          setIsLoading(false);
          setFormOpen(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [URI, setSeeds]
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

  const deleteSeed = React.useCallback((id: number) => {
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
  }, []);

  const deleteSeeds = React.useCallback(
    (ids: number[]) => {
      console.log("ids", ids);
      console.log("selected", selected);
      setIsLoading(true);
      axios
        .delete(URI + `/seeds/multiple/${ids.concat()}`)
        .then(function (response) {
          console.log("response", response);
          let ids: [] = response.data;
          let temp = seeds;
          ids.forEach((id) => {
            temp = temp.filter((plant) => plant._id !== id);
          });
          setSeeds(temp);
          setSelected([]);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [selected]
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
