import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext"; // <-- Import the provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      {" "}
      {/* <-- Wrap your App */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
