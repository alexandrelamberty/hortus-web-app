import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import { LoginFormData } from "src/interfaces/LoginFormData";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "src/providers/AuthProvider";

export interface LoginFormProps {
  handleNavigation: VoidFunction;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

export const LoginForm = ({ handleNavigation }: LoginFormProps) => {
  const { user, login } = React.useContext(AuthContext);
  // Yup validation schema the form inputs register to theses schema shapes
  handleNavigation = React.forwardRef(handleNavigation);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onValidSubmit = (data: LoginFormData) => {
    console.log(data);
    login(data, test);
    reset();
  };

  function test() {
    console.log("LoginSuccessfull Callback");
    handleNavigation();
  }

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <Form onSubmit={handleSubmit(onValidSubmit)}>
      <Form.Input
        id="email"
        label="Email"
        placeholder="Your email"
        {...register("email")}
        error={errors.email?.message}
      />

      <Form.Input
        label="Password"
        placeholder="Your password"
        {...register("password")}
        error={errors.password?.message}
      />

      <Button type="submit" disabled={errors != null}>
        Login
      </Button>
    </Form>
  );
};
