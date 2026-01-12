// src/pages/Auth/LoginPage.tsx

import { Formik, Form, Field, ErrorMessage } from "formik";
import type { FormikHelpers } from "formik";
import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useTitle } from "../hooks/useTitle";
import { useAuth } from "../contexts/AuthContext";
import type { SignInDTO } from "../models/Auth.model";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const { t } = useTranslation();
  useTitle(t("auth.loginPageTitle"));

  const { login } = useAuth();
  const initialValues: SignInDTO = { email: "", password: "" };

  const validate = (values: SignInDTO) => {
    const errors: Partial<Record<keyof SignInDTO, string>> = {};
    if (!values.email) {
      errors.email = t("auth.required");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = t("auth.invalidEmail");
    }
    if (!values.password) {
      errors.password = t("auth.required");
    }
    return errors;
  };

  const onSubmit = async (
    values: SignInDTO,
    { setSubmitting }: FormikHelpers<SignInDTO>
  ) => {
    try {
      await login(values);
      toast.success(t("toast.loggedInRedirecting"));
    } catch {
      // error toast shown in context
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/background.svg')] bg-cover bg-center p-6">
      <ToastContainer position="top-center" />
      <div className="bg-neutral-800 shadow-lg rounded-3xl max-w-md w-full p-8">
        <div className="p-0.5 rounded flex items-center justify-center mb-6">
          <img
            src="/openWeather.png"
            alt="Logo"
            className="w-35 object-cover"
          />
        </div>

        <h2 className="text-3xl font-bold text-[#eb6f4b] mb-6 text-center">
          {t("auth.loginTitle")}
        </h2>

        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-neutral-100 font-medium mb-1"
                >
                  {t("auth.emailLabel")}
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("auth.emailPlaceholder")}
                  className="w-full px-4 py-2 bg-neutral-100 text-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eb6f4b]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-neutral-100 font-medium mb-1"
                >
                  {t("auth.passwordLabel")}
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder={t("auth.passwordPlaceholder")}
                  className="w-full px-4 py-2 bg-neutral-100 text-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eb6f4b]"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 rounded-lg font-semibold transition ${
                  isSubmitting
                    ? "opacity-50 bg-[#eb6f4b] text-neutral-100"
                    : "bg-[#eb6f4b] text-neutral-100 hover:bg-opacity-90"
                }`}
              >
                {isSubmitting ? t("auth.loggingIn") : t("auth.loginButton")}
              </button>

              <Link
                to="/"
                className="w-full block text-center mt-4 py-2 bg-neutral-100 text-neutral-800 font-semibold rounded-lg hover:bg-neutral-200 transition"
              >
                {t("common.home")}
              </Link>

              <p className="text-neutral-100 text-center mt-4">
                {t("auth.noAccount")}{" "}
                <Link
                  to="/register"
                  className="text-[#eb6f4b] hover:underline font-medium"
                >
                  {t("auth.register")}
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
