import axios from "axios";
import * as React from "react";
import { Culture } from "src/interfaces/Culture";
import { CultureFormData } from "src/interfaces/CultureFormData";
import { Seed } from "src/interfaces/Seed";
import { ApplicationContext } from "./ApplicationContextProvider";

export interface CultureContextType {
  isLoading: boolean;
  formOpen: boolean;
  setFormOpen: any;
  count: number;
  cultures: Culture[];
  selected: number[];
  setSelected: any;
  selectedSeed: Seed | undefined;
  setSelectedSeed: any;

  fetchCultures: () => void;
  createCulture: (data: any, callback: VoidFunction) => void;
  updateCulture: (culture: CultureFormData, callback: VoidFunction) => void;
  deleteCulture: (id: number, callback: VoidFunction) => void;
  deleteCultures: (ids: number[]) => void;
}

export const CultureContext = React.createContext<CultureContextType>(null!);

export function CultureContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { apiUrl, setErrors } = React.useContext(ApplicationContext);
  let [count, setCount] = React.useState<number>(0);
  let [cultures, setCultures] = React.useState<Culture[]>([]);
  let [selected, setSelected] = React.useState<number[]>([]);
  const [selectedSeed, setSelectedSeed] = React.useState<Seed | undefined>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formOpen, setFormOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    console.log("CultureContextProvider::mount");
  }, []);

  const fetchCultures = React.useCallback(() => {
    setIsLoading(true);
    axios
      .get(apiUrl + "/cultures")
      .then(function (response) {
        console.log(response);
        setCultures(response.data);
        setCount(response.data.count);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setErrors(error);
      });
  }, [setCultures]);

  const createCulture = React.useCallback(
    (newCulture: CultureFormData, callback: VoidFunction) => {
      console.log("createCulture", newCulture);
      setIsLoading(true);
      axios
        .post(apiUrl + "/cultures", newCulture)
        .then(function (response) {
          console.log("response", response);
          setCultures([...cultures].concat(response.data));
          setIsLoading(false);
          callback();
        })
        .catch(function (error) {
          console.log(error);
          setErrors(error);
        });
    },
    [setCultures, cultures]
  );

  const updateCulture = React.useCallback(
    (culture: CultureFormData, callback: VoidFunction) => {
      console.log(culture);
      setIsLoading(true);
      axios
        .put(apiUrl + "/cultures ", culture, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          setCultures([...cultures].concat(response.data));
          setIsLoading(false);
          callback();
        })
        .catch(function (error) {
          console.log(error);
          setErrors(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [setCultures, cultures]
  );

  const deleteCulture = React.useCallback(
    (id: number) => {
      setIsLoading(true);
      axios
        .delete(apiUrl + "/cultures" + id)
        .then(function (response) {
          setCultures([...cultures].concat(response.data));
          setIsLoading(false);
          //callback();
        })
        .catch(function (error) {
          console.log(error);
          setErrors(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [setCultures, cultures]
  );

  const deleteCultures = React.useCallback(
    (ids: number[]) => {
      console.log("ids", ids);
      console.log("selected", selected);
      setIsLoading(true);
      axios
        .delete(apiUrl + `/cultures/multiple/${ids.concat()}`)
        .then(function (response) {
          console.log("response", response);
          let ids: [] = response.data;
          let temp = cultures;
          ids.forEach((id) => {
            temp = temp.filter((culture) => culture._id !== id);
          });
          setCultures(temp);
          setSelected([]);
          setFormOpen(false);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setErrors(error);
        });
    },
    [selected]
  );
  return (
    <CultureContext.Provider
      value={{
        count,
        isLoading,
        formOpen,
        setFormOpen,
        cultures,
        selected,
        setSelected,
        selectedSeed,
        setSelectedSeed,
        fetchCultures,
        createCulture,
        updateCulture,
        deleteCulture,
        deleteCultures,
      }}
    >
      {children}
    </CultureContext.Provider>
  );
}
