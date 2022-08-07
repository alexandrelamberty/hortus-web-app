import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "src/providers/AuthProvider";
import { LoginRoute } from "src/routes/LoginRoute";
import { DashboardRoute } from "src/routes/DashboardRoute";
import { CultureRoute } from "src/routes/CultureRoute";
import { PlantRoute } from "src/routes/PlantRoute";
import { SeedRoute } from "src/routes/SeedRoute";
import RequireAuth from "src/components/auth/RequireAuth";
import { AppLayout } from "src/components/app/AppLayout";
import { SettingsRoute } from "src/routes/SettingsRoute";
import { ProfileRoute } from "src/routes/ProfileRoute";
import { AppContextProvider } from "src/providers/AppContextProvider";
import { RegisterRoute } from "src/routes/RegisterRoute";
import { ForgotPasswordRoute } from "src/routes/ForgotPasswordRoute";
import { PublicLayout } from "./PublicLayout";
import { SpeciesCalendarRoute } from "src/routes/SpeciesCalendarRoute";
import { SensorRoute } from "src/routes/SensorRoute";

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
            <Route
              path="/plants/calendar"
              element={
                <RequireAuth>
                  <SpeciesCalendarRoute />
                </RequireAuth>
              }
            />
            <Route
              path="/sensors"
              element={
                <RequireAuth>
                  <SensorRoute />
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
