// src/services/authService.ts
import apiClient from "./ApiClient";
import type {
  SignUpDTO,
  SignInDTO,
  AuthResponse,
  SignOutResponse,
} from "@interfaces/IAuth";

export const authService = {
  signup,
  signin,
  signout,
};

async function signup(data: SignUpDTO): Promise<AuthResponse> {
  const res = await apiClient.post<AuthResponse>("/auth/signup", data);
  return res.data;
}

async function signin(data: SignInDTO): Promise<AuthResponse> {
  const res = await apiClient.post<AuthResponse>("/auth/signin", data);
  return res.data;
}

async function signout(): Promise<SignOutResponse> {
  const res = await apiClient.post<SignOutResponse>("/auth/signout");
  // clear token locally
  localStorage.removeItem("token");
  return res.data;
}
