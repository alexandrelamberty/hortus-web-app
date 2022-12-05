import * as React from "react";
import { View } from "src/components/menu/ViewMenuItem";
import { useConfig } from "src/hooks/useConfig";

interface Modals {
  cultureForm: boolean;
  seedForm: boolean;
}

interface Error {
  message: string;
}

export interface ApplicationContextType {
  loading: boolean;
  status: string;
  apiUrl: string;
  staticUrl: string;
  //
  viewPlantForm: boolean;
  viewSeedForm: boolean;
  viewCultureForm: boolean;
  //
  setViewPlantForm: any;
  setViewSeedForm: any;
  setViewCultureForm: any;
  //
  plantViewType: View;
  seedViewType: View;
  cultureViewType: View;
  //
  setSeedViewType: any;
  setPlantViewType: any;
  setCultureViewType: any;
  modals: Modals;
  errors: Error | undefined;
  setErrors: any;
}

export const API_URL = "REACT_APP_API_URL";
export const STATIC_URL = "REACT_APP_STATIC_URL";

export const ApplicationContext = React.createContext<ApplicationContextType>(
  null!
);

export function ApplicationContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiUrl = useConfig(API_URL);
  const staticUrl = useConfig(STATIC_URL);

  // Application
  const [status, setStatus] = React.useState("Loading...");
  const [errors, setErrors] = React.useState(undefined);
  const [loading, setLoading] = React.useState(true);
  // Modals
  const [viewPlantForm, setViewPlantForm] = React.useState<boolean>(false);
  const [viewSeedForm, setViewSeedForm] = React.useState<boolean>(false);
  const [viewCultureForm, setViewCultureForm] = React.useState<boolean>(false);
  // ViewType
  const [seedViewType, setSeedViewType] = React.useState<View>("grid");
  const [plantViewType, setPlantViewType] = React.useState<View>("table");
  const [cultureViewType, setCultureViewType] = React.useState<View>("grid");

  const [modals, setModals] = React.useState(null!);

  React.useEffect(() => {
    console.log("ApplicationContextProvider::initialize");
    // Ok we can start
    if (apiUrl !== "") {
      setLoading(false);
    }
  }, [apiUrl, setLoading, setStatus]);

  return (
    <ApplicationContext.Provider
      value={{
        loading,
        status,
        viewPlantForm,
        setViewPlantForm,
        viewSeedForm,
        setViewSeedForm,
        viewCultureForm,
        setViewCultureForm,
        plantViewType,
        seedViewType,
        cultureViewType,
        setSeedViewType,
        setPlantViewType,
        setCultureViewType,
        apiUrl,
        staticUrl,
        modals,
        errors,
        setErrors,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}
