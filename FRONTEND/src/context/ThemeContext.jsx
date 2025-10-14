import React, { createContext, useState, useContext, useEffect } from "react";

// 1. Create the context
const ThemeContext = createContext();

// 2. Create a custom hook for easy access to the context
export const useTheme = () => useContext(ThemeContext);

// 3. Create the Provider component
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme. 'dark' is the default.
  // It also checks localStorage to remember the user's last choice.
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Save the choice
      return newTheme;
    });
  };

  // Effect to apply the theme to the body of the document
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
