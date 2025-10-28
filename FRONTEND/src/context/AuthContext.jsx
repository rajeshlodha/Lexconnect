import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Initialize state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true"
  );
  const [userRole, setUserRole] = useState(
    () => localStorage.getItem("userRole") || null
  );

  // Update localStorage when state changes
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", userRole);
    } else {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userRole");
    }
  }, [isLoggedIn, userRole]);

  // Login now accepts a role
  const login = (role) => {
    if (role) {
      setUserRole(role);
      setIsLoggedIn(true);
    } else {
      // Handle login error - role is required
      console.error("Login failed: Role not provided.");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
  };

  // Signup can also set a default role (e.g., 'client')
  const signup = (role = "client") => {
    // Default role to client
    console.log(`Simulating user creation with role: ${role}`);
    login(role); // Call login with the specified role
  };

  // Include userRole in the context value
  const value = { isLoggedIn, userRole, login, logout, signup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
