import * as React from "react";
import { View } from "../components/menu/ViewMenuItem";
import { useConfig } from "../hooks/useConfig";

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
  // Modals
  viewPlantForm: boolean;
  setViewPlantForm: any;
  viewSeedForm: boolean;
  setViewSeedForm: any;
  viewCultureForm: boolean;
  setViewCultureForm: any;
  // View types
  plantViewType: View;
  setSeedViewType: any;
  seedViewType: View;
  setPlantViewType: any;
  cultureViewType: View;
  setCultureViewType: any;
  // Culture phases modals
  showPhaseForm: boolean;
  setShowPhaseForm: any;
  showHarvestingForm: boolean;
  setShowHarvestingForm: any;
  // FIXME: Implement all modals in an object
  modals: Modals;
  // Global application erros
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
  // Application API and static assets server urls
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
  const [showPhaseForm, setShowPhaseForm] = React.useState<boolean>(false);
  const [showHarvestingForm, setShowHarvestingForm] =
    React.useState<boolean>(false);
  // ViewType
  const [seedViewType, setSeedViewType] = React.useState<View>("grid");
  const [plantViewType, setPlantViewType] = React.useState<View>("table");
  const [cultureViewType, setCultureViewType] = React.useState<View>("grid");
  // TODO: to implement XD
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
        showPhaseForm,
        setShowPhaseForm,
        showHarvestingForm,
        setShowHarvestingForm,
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
