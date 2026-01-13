// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import i18n from "../config/i18n";
import axios from "axios";
import { authService } from "../services/AuthService";
import type { SignInDTO } from "../interfaces/IAuth";

interface AuthContextType {
  login: (data: SignInDTO) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
  userRole?: string;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setAuthenticated(true);
    setLoading(false);

    const interceptorId = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Token invalid/expired: clear and redirect
          localStorage.removeItem("token");
          setAuthenticated(false);
          toast.info(i18n.t("toast.sessionExpired"));
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    return () => axios.interceptors.response.eject(interceptorId);
  }, [navigate]);

  const login = async ({ email, password }: SignInDTO) => {
    try {
      const { token } = await authService.signin({ email, password });
      localStorage.setItem("token", token);
      setAuthenticated(true);
      toast.success(i18n.t("toast.loggedInSuccess"));
      navigate("/");
    } catch (err: any) {
      toast.error(err.response?.data?.message || i18n.t("toast.loginFailed"));
    }
  };

  const logout = async () => {
    try {
      await authService.signout();
    } catch (err: any) {
      // If token expired, backend returns 401—treat as successful logout
      if (err.response?.status !== 401) {
        toast.error(err.response?.data?.message || i18n.t("toast.logoutFailed"));
        return;
      }
    } finally {
      localStorage.removeItem("token");
      setAuthenticated(false);
      setUserRole(undefined);
      toast.info(i18n.t("toast.signedOut"));
      navigate("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, isAuthenticated, isLoading, userRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
