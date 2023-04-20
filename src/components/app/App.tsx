import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { AppLayout } from "../app/AppLayout";
import { ApplicationContext } from "../../contexts/ApplicationContextProvider";
import { ServerContextProvider } from "../../contexts/ServerContextProvider";
import { CultureRoute } from "../../routes/CultureRoute";
import { DashboardRoute } from "../../routes/DashboardRoute";
import { PlantRoute } from "../../routes/PlantRoute";
import { SeedRoute } from "../../routes/SeedRoute";
import { SettingsRoute } from "../../routes/SettingsRoute";

export default function App() {
  const { loading, status } = useContext(ApplicationContext);

  useEffect(() => {
    if (loading === false) {
      console.log("Application initialized ...");
    }
  }, [loading]);

  // Do some shit here
  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <Loader active inline="centered" />
          <br></br>
          <p>{status}</p>
        </div>
      ) : (
        <ServerContextProvider>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/" element={<DashboardRoute />} />
              <Route path="/plants" element={<PlantRoute />} />
              <Route path="/seeds" element={<SeedRoute />} />
              <Route path="/cultures" element={<CultureRoute />} />
              <Route path="/settings" element={<SettingsRoute />} />
            </Route>
          </Routes>
        </ServerContextProvider>
      )}
    </>
  );
}
