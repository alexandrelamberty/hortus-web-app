import * as React from "react";
import { getConfig } from "src/config";

export interface ApplicationContextType {
  loading: boolean;
  status: string;
  apiUri: string;
  formOpen: boolean;
  setFormOpen: any;
  viewOpen: boolean;
  setViewOpen: any;
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
  const [formOpen, setFormOpen] = React.useState<boolean>(false);
  const [viewOpen, setViewOpen] = React.useState<boolean>(false);

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
        formOpen,
        setFormOpen,
        viewOpen,
        setViewOpen,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}
