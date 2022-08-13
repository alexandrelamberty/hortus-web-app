import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RegistrationForm } from "src/components/form/RegistrationForm";
import { AuthContext } from "src/providers/AuthProvider";

export function RegisterRoute() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = React.useContext(AuthContext);
  let from = "/";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /*
    auth.registerUser(, () => {
      navigate(from, { replace: true })
    })*/
  };

  return <RegistrationForm />;
}
