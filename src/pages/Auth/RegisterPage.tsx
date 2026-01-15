// src/pages/Auth/RegisterPage.tsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import type { FormikHelpers } from "formik";
import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useTitle } from "@hooks/useTitle";
import { useAuth } from "@context/AuthContext";
import { authService } from "@services/AuthService";
import type { SignUpDTO, AuthResponse } from "@interfaces/IAuth";
import "react-toastify/dist/ReactToastify.css";

type RegisterFormValues = SignUpDTO & { confirmPassword: string };

export default function RegisterPage() {
  const { t } = useTranslation();
  useTitle(t("auth.registerPageTitle"));

  const { login } = useAuth();

  const initialValues: RegisterFormValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validate = (values: RegisterFormValues) => {
    const errors: Partial<Record<keyof RegisterFormValues, string>> = {};

    if (!values.email) {
      errors.email = t("auth.required");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = t("auth.invalidEmail");
    } else if (!values.email.toLowerCase().endsWith("@tuwaiq.edu.sa")) {
      errors.email = t("auth.emailMustEnd");
    }

    if (!values.password) {
      errors.password = t("auth.required");
    } else if (/\s/.test(values.password)) {
      errors.password = t("auth.passwordNoSpaces");
    } else if (values.password.length < 8) {
      errors.password = t("auth.passwordMin8");
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = t("auth.required");
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = t("auth.passwordsMustMatch");
    }

    return errors;
  };

  const onSubmit = async (
    values: RegisterFormValues,
    { setSubmitting, resetForm }: FormikHelpers<RegisterFormValues>
  ) => {
    try {
      const { token }: AuthResponse = await authService.signup({
        email: values.email.trim(),
        password: values.password,
      });
      localStorage.setItem("token", token);
      await login({ email: values.email.trim(), password: values.password });
      toast.success(t("toast.registeredAndLoggedIn"));
      resetForm();
    } catch (err: any) {
      toast.error(err.response?.data?.message || t("toast.registrationFailed"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/background.svg')] bg-cover bg-center p-6">
      <ToastContainer position="top-center" />

      <div className="bg-neutral-800 shadow-lg rounded-3xl max-w-md w-full p-8">
        <h2 className="text-2xl font-bold text-[#eb6f4b] text-center mb-6">
          {t("auth.registerTitle")}
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
                  {t("auth.emailMustEnd")}
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

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-neutral-100 font-medium mb-1"
                >
                  {t("auth.confirmPasswordLabel")}
                </label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder={t("auth.confirmPasswordPlaceholder")}
                  className="w-full px-4 py-2 bg-neutral-100 text-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eb6f4b]"
                />
                <ErrorMessage
                  name="confirmPassword"
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
                {isSubmitting ? t("auth.registering") : t("auth.register")}
              </button>

              <Link
                to="/"
                className="w-full block text-center py-2 bg-neutral-100 text-neutral-800 font-semibold rounded-lg hover:bg-neutral-200 transition"
              >
                {t("common.home")}
              </Link>

              <p className="mt-6 text-center text-neutral-100">
                {t("auth.haveAccount")}{" "}
                <Link
                  to="/login"
                  className="text-[#eb6f4b] hover:underline font-medium"
                >
                  {t("auth.goToLogin")}
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
