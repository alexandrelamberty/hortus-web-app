import * as React from "react";

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>("eevos");

  let signin = (newUser: string, callback: VoidFunction) => {
	setUser(newUser);
	callback()
  };

  let signout = (callback: VoidFunction) => {
	setUser(null)
	callback()
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

