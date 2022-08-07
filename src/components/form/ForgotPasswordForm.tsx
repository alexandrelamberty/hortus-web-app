import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form } from "semantic-ui-react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotPasswordFormData } from "src/interfaces/ForgotPasswordFormData";

export const ForgotPasswordForm = () => {
  // Schema validation
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });

  // Deconstruct useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  // Deconstruct stateForm

  // Submit the form
  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log(data);
    reset();
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <h1 className="mb-2">Find Your Account</h1>
        <p>Please enter your email address to search for your account.</p>
        </div>
        <div className="mb-4">
        <input
          className="login-input"
          id="username"
          type="text"
          placeholder="Email address"
          {...register("email")}
        />
        <p className="login-error">{errors.email?.message}</p>
      </div>

      <div className="form-control">
      <button className="form-submit" type="submit">
          Cancel
        </button>
        <button className="form-submit" type="submit">
          Reset
        </button>
      </div>
    </form>
  );
};
