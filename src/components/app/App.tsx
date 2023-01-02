import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { AppLayout } from "src/components/app/AppLayout";
import { ApplicationContext } from "src/contexts/ApplicationContextProvider";
import { ServerContextProvider } from "src/contexts/ServerContextProvider";
import { CultureRoute } from "src/routes/CultureRoute";
import { DashboardRoute } from "src/routes/DashboardRoute";
import { PlantRoute } from "src/routes/PlantRoute";
import { SeedRoute } from "src/routes/SeedRoute";
import { SettingsRoute } from "src/routes/SettingsRoute";

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
