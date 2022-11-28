import { Route, Routes } from "react-router-dom";
import { AppLayout } from "src/components/app/AppLayout";
import { AppContextProvider } from "src/contexts/AppContextProvider";
import { CultureRoute } from "src/routes/CultureRoute";
import { DashboardRoute } from "src/routes/DashboardRoute";
import { PlantRoute } from "src/routes/PlantRoute";
import { SeedRoute } from "src/routes/SeedRoute";
import { SettingsRoute } from "src/routes/SettingsRoute";

export default function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<DashboardRoute />} />
          <Route path="/plants" element={<PlantRoute />} />
          <Route path="/seeds" element={<SeedRoute />} />
          <Route path="/cultures" element={<CultureRoute />} />
          <Route path="/settings" element={<SettingsRoute />} />
        </Route>
      </Routes>
    </AppContextProvider>
  );
}
