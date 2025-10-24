import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    // If not logged in, redirect them to the /login page
    return <Navigate to="/login" replace />;
  }

  // If logged in, show the child route (e.g., Profile or Dashboard)
  return <Outlet />;
};

export default ProtectedRoute;
