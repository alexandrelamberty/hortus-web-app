import * as React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import { AuthProvider } from 'src/providers/AuthProvider'
import { LoginPage } from 'src/routes/Login'
import { Dashboard } from 'src/routes/Dashboard'
import { CultureRoute } from 'src/routes/CultureRoute'
import { SpeciesRoute } from 'src/routes/SpeciesRoute'
import { SeedRoute } from 'src/routes/SeedRoute'
import RequireAuth from './RequireAuth'
import { AppLayout } from './AppLayout'
import { SettingsRoute } from 'src/routes/SettingsRoute'
import { ProfileRoute } from 'src/routes/ProfileRoute'
import { SeedProvider } from 'src/providers/SeedProvider'
import { CultureProvider } from 'src/providers/CultureProvider'
import { SpeciesProvider } from 'src/providers/SpeciesProvider'

export default function App() {
  return (
    <AuthProvider>
	  <SpeciesProvider>
			<SeedProvider>
			<CultureProvider>
				<Routes>
					<Route path='/login' element={<LoginPage/>}/>
					<Route path="/" element={<AppLayout />} >
						<Route path='/' element={<RequireAuth><Dashboard/></RequireAuth>}/>
						<Route path='/cultures' element={<RequireAuth><CultureRoute/></RequireAuth>}/>
						<Route path='/seeds' element={<RequireAuth><SeedRoute/></RequireAuth>}/>
						<Route path='/plants' element={<RequireAuth><SpeciesRoute/></RequireAuth>}/>
						<Route path='/settings' element={<RequireAuth><SettingsRoute/></RequireAuth>}/>
						<Route path='/profile' element={<RequireAuth><ProfileRoute/></RequireAuth>}/>
					</Route>
				</Routes>
			</CultureProvider>
			</SeedProvider>
			</SpeciesProvider>
    </AuthProvider>
  )
}

