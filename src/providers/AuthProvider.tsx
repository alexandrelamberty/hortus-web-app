import axios from "axios";
import * as React from "react";
import { LoginFormData } from "src/interfaces/LoginFormData";
import { RegistrationFormData } from "src/interfaces/RegistrationFormData";

export type AuthUser = {
  email: string;
};

interface AuthContextType {
  user: AuthUser | null;
  // FIXME: No need to expose this method
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
  registerUser: (user: RegistrationFormData) => void;
  login: (user: LoginFormData, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
}

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext<AuthContextType>(null!);

const URI = process.env.REACT_APP_API_URL;

export function AuthProvider({ children }: AuthContextProviderProps) {
  let [user, setUser] = React.useState<AuthUser | null>({ email: "test" });
  const [isLoading, setIsLoading] = React.useState(false);

  let registerUser = (newUser: RegistrationFormData) => {
    // Login in user and retrieve token.  TODO: See refresh token
    setIsLoading(true);
    axios
      .post(URI + "/auth/register", newUser)
      .then(function (response) {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  let login = (newUser: LoginFormData, callback: VoidFunction) => {
    console.log("login");
    setIsLoading(true);
    axios
      .post(URI + "/auth/login", newUser)
      .then(function (response) {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
      });
    callback();
  };

  let logout = (callback: VoidFunction) => {
    setUser(null);
    callback();
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, registerUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
