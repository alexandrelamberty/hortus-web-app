import axios from "axios";
import * as React from "react";
import { getConfig } from "src/config";
import { Culture } from "src/interfaces/Culture";
import { CultureFormData } from "src/interfaces/CultureFormData";
import { ApplicationContext } from "./ApplicationContextProvider";

export interface CultureContextType {
  isLoading: boolean;
  formOpen: boolean;
  setFormOpen: any;
  count: number;
  cultures: Culture[];
  selected: number[];
  setSelected: any;
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
  const { apiUri } = React.useContext(ApplicationContext);
  let [count, setCount] = React.useState<number>(0);
  let [cultures, setCultures] = React.useState<Culture[]>([]);
  let [selected, setSelected] = React.useState<number[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formOpen, setFormOpen] = React.useState<boolean>(false);
  React.useEffect(() => {
    console.log("CultureContextProvider::mount");
  }, []);
  const fetchCultures = React.useCallback(() => {
    setIsLoading(true);
    axios
      .get(apiUri + "/cultures")
      .then(function (response) {
        console.log(response);
        setCultures(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [setCultures]);

  const createCulture = React.useCallback(
    (newCulture: CultureFormData, callback: VoidFunction) => {
      console.log("createCulture", newCulture);
      setIsLoading(true);
      axios
        .post(apiUri + "/cultures", newCulture)
        .then(function (response) {
          console.log("response", response);
          setCultures([...cultures].concat(response.data));
          setIsLoading(false);
          callback();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [setCultures, cultures]
  );

  const updateCulture = React.useCallback(
    (culture: CultureFormData, callback: VoidFunction) => {
      console.log(culture);
      setIsLoading(true);
      axios
        .put(apiUri + "/cultures ", culture, {
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
        .delete(apiUri + "/cultures" + id)
        .then(function (response) {
          setCultures([...cultures].concat(response.data));
          setIsLoading(false);
          //callback();
        })
        .catch(function (error) {
          console.log(error);
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
        .delete(apiUri + `/cultures/multiple/${ids.concat()}`)
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
