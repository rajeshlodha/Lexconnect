import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Now accepts an 'allowedRoles' prop (an array of strings)
const ProtectedRoute = ({ allowedRoles }) => {
  const { isLoggedIn, userRole } = useAuth();

  if (!isLoggedIn) {
    // If not logged in, always redirect to login
    return <Navigate to="/login" replace />;
  }

  // If logged in, check if the user's role is allowed for this route
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // If role is not allowed, redirect to a fallback page (e.g., home or an 'unauthorized' page)
    console.warn(`User role '${userRole}' not allowed for this route.`);
    // Redirecting to home might be safest for now
    return <Navigate to="/" replace />;
  }

  // If logged in AND role is allowed (or no specific roles required), show the content
  return <Outlet />;
};

export default ProtectedRoute;
