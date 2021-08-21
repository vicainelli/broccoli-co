import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../atoms/button";
import axios from "axios";
const API_URL =
  "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";

// TODO: E2E testing

type FormInputs = {
  name: string;
  email: string;
  confirm_email: string;
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email"),
  confirm_email: yup
    .string()
    .required("Confirm Email is required")
    .email("Confirm Email must be a valid email")
    .oneOf([yup.ref("email"), null], "Email and Confirm Email do not match"),
});

const FormSignUp = () => {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isSuccessfullySignedUp, setIsSuccessfullySignedUp] = useState(false);
  const [hasRequestBeenProcessed, setHasRequestBeenProcessed] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormInputs) => {
    setIsFormLoading(true);
    axios
      .post(API_URL, {
        name: data.name,
        email: data.email,
      })
      .then((res) => {
        console.log(res);
        setIsSuccessfullySignedUp(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setHasRequestBeenProcessed(true);
        setIsFormLoading(false);
      });
  };

  return (
    <div className="relative">
      {isFormLoading && (
        <div className="absolute w-full h-full flex items-center justify-center bg-opacity-80 bg-white">
          <div className="">
            <div
              style={{ borderTopColor: "transparent" }}
              className="w-12 h-12 border-4 border-gray-600 rounded-full animate-spinner"
            ></div>
          </div>
        </div>
      )}
      {!hasRequestBeenProcessed && (
        <form data-testid="signup_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="text-gray-400 text-sm" htmlFor="name">
              Name
            </label>
            <input
              data-testid="name_input"
              className={`w-full border border-gray-300 appearance-none p-2 text-gray-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded`}
              type="text"
              disabled={isFormLoading}
              {...register("name")}
            />
            {errors.name && (
              <div
                data-testid="name_error_message"
                className="text-sm text-red-400 mt-1"
              >
                {errors.name?.message}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="text-gray-400 text-sm" htmlFor="email">
              Email
            </label>
            <input
              data-testid="email_input"
              className={`w-full border border-gray-300 appearance-none p-2 text-gray-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded`}
              type="email"
              disabled={isFormLoading}
              {...register("email")}
            />
            {errors.email && (
              <div
                data-testid="email_error_message"
                className="text-sm text-red-400 mt-1"
              >
                {errors.email?.message}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="text-gray-400 text-sm" htmlFor="confirm_email">
              Confirm email
            </label>
            <input
              data-testid="confirm_email_input"
              className={`w-full border border-gray-300 appearance-none p-2 text-gray-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded`}
              type="email"
              disabled={isFormLoading}
              {...register("confirm_email")}
            />
            {errors.confirm_email && (
              <div
                data-testid="confirm_email_error_message"
                className="text-sm text-red-400 mt-1"
              >
                {errors.confirm_email?.message}
              </div>
            )}
          </div>
          <div>
            <Button
              isDisabled={isFormLoading}
              isBlock={true}
              testId="button_send_signup"
              type="submit"
              variant="primary-outline"
            >
              Send
            </Button>
          </div>
        </form>
      )}

      {hasRequestBeenProcessed && (
        <div className="mt-4">
          {/* Success Message */}
          {isSuccessfullySignedUp && (
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p
                data-testid="signup_success_message"
                className="mt-4 text-gray-700 text-center"
              >
                You have successfully registered.
              </p>
            </div>
          )}
          {/* Error message */}
          {!isSuccessfullySignedUp && (
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-yellow-400 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <p
                data-testid="signup_warning_message"
                className="mt-4 text-gray-700 text-center"
              >
                Unfortunatelly was not possible to proccess your request. Please
                try again later.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FormSignUp;
