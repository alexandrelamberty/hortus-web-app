import * as React from 'react'

interface AuthContextType {
  user: any
  register: (user: string, callback: VoidFunction) => void
  signin: (user: string, callback: VoidFunction) => void
  signout: (callback: VoidFunction) => void
}

export const AuthContext = React.createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>('eevos')

  let register = (newUser: string, callback: VoidFunction) => {
    // Login in user and retrieve token.  TODO: See refresh token
    setUser(newUser)
    callback()
  }

  let signin = (newUser: string, callback: VoidFunction) => {
    // Login in user and retrieve token.  TODO: See refresh token
    setUser(newUser)
    callback()
  }

  let signout = (callback: VoidFunction) => {
    // Remove token ? TODO: See refresh token
    setUser(null)
    callback()
  }

  let value = { user, register, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
