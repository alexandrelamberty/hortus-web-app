import axios from "axios";
import * as React from "react";
import { Seed } from "src/interfaces/Seed";
import { SeedDTO } from "src/interfaces/SeedDTO";
import { SeedFormData } from "src/interfaces/SeedFormData";
import { ApplicationContext } from "./ApplicationContextProvider";

export interface SeedContextType {
  isLoading: boolean;
  count: number;
  search?: string;
  seeds: Seed[];
  selected: Seed | undefined;
  setSelected: any;
  selecteds: string[];
  setSelecteds: any;

  fetchSeeds: () => void;
  createSeed: (seed: SeedFormData, callback: VoidFunction) => void;
  updateSeed: (seed: SeedFormData, callback: VoidFunction) => void;
  deleteSeed: (id: number) => void;
  deleteSeeds: (ids: string[]) => void;
}

export const SeedContext = React.createContext<SeedContextType>(null!);

export function SeedContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { apiUrl, setErrors } = React.useContext(ApplicationContext);
  let [seeds, setSeeds] = React.useState<Seed[]>([]);
  let [count, setCount] = React.useState<number>(0);
  let [selected, setSelected] = React.useState<Seed | undefined>();
  let [selecteds, setSelecteds] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formOpen, setFormOpen] = React.useState<boolean>(false);
  const [viewOpen, setViewOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    console.log("SeedContextProvider::mount");
  }, []);

  type SeedAction = { type: "LOAD"; payload: Seed[] };

  // TODO: NEW BRANCH
  // const [{ seed }, dispatch] = React.useReducer(
  //   (state: SeedContextType, action: SeedAction) => {
  //     switch (action.type) {
  //       case "":
  //         return "";
  //     }
  //   }
  // );

  const uploadPicure = React.useCallback(
    (id: number, fd: FormData) => {
      setIsLoading(true);
      axios
        .post(apiUrl + `/seeds/${id}/upload`, fd)
        .then(function (response) {
          console.log("upload_response", response);
          // dispatch
          setSeeds([...seeds, response.data]);
          setIsLoading(false);
          setFormOpen(false);
        })
        .catch(function (error) {
          console.log(error);
          setErrors(error);
        });
    },
    [apiUrl, setSeeds]
  );

  const fetchSeeds = React.useCallback(() => {
    setIsLoading(true);
    axios
      .get(apiUrl + "/seeds")
      .then(function (response) {
        setSeeds(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setErrors(error);
      });
  }, [apiUrl, setSeeds]);

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
      console.log("post_image", seedImageFormData.get("image"));
      axios
        .post(apiUrl + "/seeds", seedDTO, {
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
          setErrors(error);
        });
    },
    [setSeeds, seeds]
  );

  const updateSeed = React.useCallback(
    (seed: SeedFormData, callback: VoidFunction) => {
      console.log(seed);
      setIsLoading(true);
      axios
        .post(apiUrl + "/seeds ", seed, {
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
          setErrors(error);
        });
    },
    [apiUrl, setSeeds, seeds]
  );

  const deleteSeed = React.useCallback(
    (id: number) => {
      setIsLoading(true);
      axios
        .post(apiUrl + "/seeds", id)
        .then(function (response) {
          //setPlants([...plants].concat(response.data));
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setErrors(error);
        });
    },
    [apiUrl]
  );

  const deleteSeeds = React.useCallback(
    (ids: string[]) => {
      console.log("ids", ids);
      console.log("selected", selected);
      setIsLoading(true);
      axios
        .delete(apiUrl + `/seeds/multiple/${ids.concat()}`)
        .then(function (response) {
          console.log("response", response);
          // FIXME: ?
          let ids: [] = response.data;
          let temp = seeds;
          ids.forEach((id) => {
            temp = temp.filter((plant) => plant._id !== id);
          });
          setSeeds(temp);
          setSelecteds([]);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setErrors(error);
        });
    },
    [apiUrl, seeds, selected]
  );

  // const sort = React.useCallback(() => {
  //   disptach({
  //     type: "FILTER",
  //     paylad: "sort",
  //   });
  // }, []);

  return (
    <SeedContext.Provider
      value={{
        count,
        isLoading,
        seeds,
        selected,
        setSelected,
        selecteds,
        setSelecteds,
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
