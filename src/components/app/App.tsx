import { Route, Routes } from "react-router-dom";
import { AppLayout } from "src/components/app/AppLayout";
import RequireAuth from "src/components/auth/RequireAuth";
import { AppContextProvider } from "src/providers/AppContextProvider";
import { AuthProvider } from "src/providers/AuthProvider";
import { CultureRoute } from "src/routes/CultureRoute";
import { DashboardRoute } from "src/routes/DashboardRoute";
import { ForgotPasswordRoute } from "src/routes/ForgotPasswordRoute";
import { GardenRoute } from "src/routes/GardenRoute";
import { LoginRoute } from "src/routes/LoginRoute";
import { PlantRoute } from "src/routes/PlantRoute";
import { ProfileRoute } from "src/routes/ProfileRoute";
import { RegisterRoute } from "src/routes/RegisterRoute";
import { SeedRoute } from "src/routes/SeedRoute";
import { SettingsRoute } from "src/routes/SettingsRoute";
import { SpeciesCalendarRoute } from "src/routes/SpeciesCalendarRoute";
import { PublicLayout } from "./PublicLayout";

export default function App() {
  return (
    <AuthProvider>
      <AppContextProvider>
        <Routes>
          <Route path="/auth" element={<PublicLayout />}>
            <Route path="/auth/register" element={<RegisterRoute />} />
            <Route path="/auth/login" element={<LoginRoute />} />
            <Route
              path="/auth/forgot-password"
              element={<ForgotPasswordRoute />}
            />
          </Route>
          <Route path="/" element={<AppLayout />}>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <DashboardRoute />
                </RequireAuth>
              }
            />
            <Route
              path="/cultures"
              element={
                <RequireAuth>
                  <CultureRoute />
                </RequireAuth>
              }
            />
            <Route
              path="/seeds"
              element={
                <RequireAuth>
                  <SeedRoute />
                </RequireAuth>
              }
            />
            <Route
              path="/plants"
              element={
                <RequireAuth>
                  <PlantRoute />
                </RequireAuth>
              }
            />
            {/* TODO: Move to seeds */}
            <Route
              path="/plants/calendar"
              element={
                <RequireAuth>
                  <SpeciesCalendarRoute />
                </RequireAuth>
              }
            />
            <Route
              path="/settings"
              element={
                <RequireAuth>
                  <SettingsRoute />
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <ProfileRoute />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AppContextProvider>
    </AuthProvider>
  );
}
