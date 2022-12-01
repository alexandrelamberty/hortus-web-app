import * as React from "react";
import { View } from "src/components/menu/ActionControlls";
import { getConfig } from "src/config";

export interface ApplicationContextType {
  loading: boolean;
  status: string;
  apiUri: string;
  viewPlantForm: boolean;
  viewSeedForm: boolean;
  viewCultureForm: boolean;
  setViewPlantForm: any;
  setViewSeedForm: any;
  setViewCultureForm: any;
  plantViewType: View;
  seedViewType: View;
  cultureViewType: View;
  setSeedViewType: any;
  setPlantViewType: any;
  setCultureViewType: any;
}

export const ApplicationContext = React.createContext<ApplicationContextType>(
  null!
);

export function ApplicationContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [apiUri, setApiUri] = React.useState<string>("");
  const [status, setStatus] = React.useState("Loading...");
  const [loading, setLoading] = React.useState(true);
  const [viewPlantForm, setViewPlantForm] = React.useState<boolean>(false);
  const [viewSeedForm, setViewSeedForm] = React.useState<boolean>(false);
  const [viewCultureForm, setViewCultureForm] = React.useState<boolean>(false);
  const [seedViewType, setSeedViewType] = React.useState<View>("grid");
  const [plantViewType, setPlantViewType] = React.useState<View>("table");
  const [cultureViewType, setCultureViewType] = React.useState<View>("grid");

  React.useEffect(() => {
    console.log("ApplicationContextProvider::initialize");
    // Check server is up by loading the settings
    setStatus("Checking environment varibles...");
    setApiUri(getConfig("REACT_APP_API_URL"));
    setStatus("Checking server...");
    // Ok we can start
    if (apiUri !== "") {
      setLoading(false);
    }
  }, [apiUri, setLoading, setApiUri, setStatus]);

  return (
    <ApplicationContext.Provider
      value={{
        loading,
        status,
        apiUri,
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
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}
