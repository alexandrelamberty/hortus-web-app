import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from 'src/providers/AuthProvider'
import { LoginPage } from 'src/routes/Login'
import { Dashboard } from 'src/routes/Dashboard'
import { CultureRoute } from 'src/routes/CultureRoute'
import { SpeciesRoute } from 'src/routes/SpeciesRoute'
import { SeedRoute } from 'src/routes/SeedRoute'
import RequireAuth from 'src/components/auth/RequireAuth'
import { AppLayout } from 'src/components/app/AppLayout'
import { SettingsRoute } from 'src/routes/SettingsRoute'
import { ProfileRoute } from 'src/routes/ProfileRoute'
import { SeedProvider } from 'src/providers/SeedProvider'
import { CultureProvider } from 'src/providers/CultureProvider'
import { SpeciesProvider } from 'src/providers/SpeciesProvider'
import { AppContextProvider } from 'src/providers/AppContextProvider'
import { RegisterPage } from 'src/routes/Register'
import { ForgotPasswordPage } from 'src/routes/ForgotPassword'
import { PublicLayout } from './PublicLayout'

export default function App() {
  return (
    <AuthProvider>
      <AppContextProvider>
        <Routes>
          <Route path='/auth' element={<PublicLayout	 />}>
            <Route path='/auth/register' element={<RegisterPage />} />
            <Route path='/auth/login' element={<LoginPage />} />
            <Route path='/auth/forgot-password' element={<ForgotPasswordPage />} />
          </Route>
          <Route path='/' element={<AppLayout />}>
            <Route
              path='/'
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path='/cultures'
              element={
                <RequireAuth>
                  <CultureRoute />
                </RequireAuth>
              }
            />
            <Route
              path='/seeds'
              element={
                <RequireAuth>
                  <SeedRoute />
                </RequireAuth>
              }
            />
            <Route
              path='/plants'
              element={
                <RequireAuth>
                  <SpeciesRoute />
                </RequireAuth>
              }
            />
            <Route
              path='/settings'
              element={
                <RequireAuth>
                  <SettingsRoute />
                </RequireAuth>
              }
            />
            <Route
              path='/profile'
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
  )
}
