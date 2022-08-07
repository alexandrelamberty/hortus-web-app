import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "src/providers/AuthProvider";
import { Container } from "semantic-ui-react";
import { LoginForm } from "src/components/form/LoginForm";

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
