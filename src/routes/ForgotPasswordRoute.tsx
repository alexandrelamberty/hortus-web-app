import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ForgotPasswordForm } from "src/components/form/ForgotPasswordForm";
import { User } from "src/interfaces/User";
import { AuthContext } from "src/providers/AuthProvider";

export function ForgotPasswordRoute() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = React.useContext(AuthContext);
  let from = "/";
  const [registerData, setRegisterData] = React.useState<User | null>();
  const [email, setEmail] = React.useState("");

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(registerData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(registerData);
    /*
    auth.registerUser(email, () => {
      navigate(from, { replace: true });
    });
    */
  };

  return <ForgotPasswordForm />;
}
