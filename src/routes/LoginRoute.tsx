import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginForm } from "src/components/form/LoginForm";
import { AuthContext } from "src/providers/AuthProvider";

export function LoginRoute() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = React.useContext(AuthContext);
  let from = "/";

  function handleSubmit() {
    //event.preventDefault();
    navigate(from, { replace: true });
  }

  return <LoginForm handleNavigation={handleSubmit} />;
}
