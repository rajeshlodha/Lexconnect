import React, { createContext, useState, useContext } from "react";

// 1. Create the context
const AuthContext = createContext();

// 2. Create a custom hook for easy access
export const useAuth = () => useContext(AuthContext);

// 3. Create the Provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true"
  );

  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  // --- ADD THIS SIGNUP FUNCTION ---
  const signup = () => {
    // In a real app, call your API to create the user here.
    // For now, we'll just log them in immediately.
    console.log("Simulating user creation and logging in.");
    login(); // Call the existing login function
  };
  // --- END OF NEW FUNCTION ---

  // Add signup to the value passed down
  const value = { isLoggedIn, login, logout, signup }; // <-- ADD signup HERE

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
