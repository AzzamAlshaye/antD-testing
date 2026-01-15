import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "@context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    // still initializing auth state
    return null; // or a spinner component
  }

  if (!isAuthenticated) {
    // after loading, no token: redirect
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
