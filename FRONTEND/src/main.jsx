import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext"; // <-- 1. IMPORT IT

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        {" "}
        {/* <-- 2. WRAP YOUR APP */}
        <App />
      </AuthProvider>{" "}
      {/* <-- 3. CLOSE THE WRAPPER */}
    </ThemeProvider>
  </StrictMode>
);
