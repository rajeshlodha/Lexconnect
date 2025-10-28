import React from "react"; // Removed useState
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext"; // <-- 1. IMPORT useTheme

export const Layout = () => {
  const { isLoggedIn, userRole, logout } = useAuth();
  const { theme, toggleTheme } = useTheme(); // <-- 2. GET THEME AND TOGGLE FUNCTION
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    // Use theme variables for background/text (You are already doing this via index.css)
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundColor: "var(--primary-bg)",
        color: "var(--text-color)",
      }}
    >
      {/* Header/Navbar */}
      <header
        className="sticky top-0 z-50 border-b shadow-md"
        style={{
          backgroundColor: "var(--secondary-bg)",
          borderColor: "var(--border-color)",
        }}
      >
        {" "}
        {/* Use theme variables */}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span
              className="material-symbols-outlined text-3xl"
              style={{ color: "var(--accent-color)" }}
            >
              balance
            </span>{" "}
            {/* Use accent color */}
            <h1 className="text-2xl font-bold tracking-tight">
              <span style={{ color: "var(--accent-color)" }}>Lex</span>Connect
            </h1>
          </Link>

          {/* Main Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="font-medium hover:text-yellow-500 transition-colors duration-200"
              style={{ "--hover-color": "var(--accent-color)" }}
            >
              Home
            </Link>{" "}
            {/* Adjust hover if needed */}
            <Link
              to="/services"
              className="font-medium hover:text-yellow-500 transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              to="/attorneys"
              className="font-medium hover:text-yellow-500 transition-colors duration-200"
            >
              Attorneys
            </Link>
            <Link
              to="/about"
              className="font-medium hover:text-yellow-500 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-medium hover:text-yellow-500 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* --- 3. THEME TOGGLE BUTTON --- */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors duration-200" // Basic styling, adjust as needed
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              style={{
                backgroundColor: "var(--primary-bg)",
                color: "var(--text-muted)",
              }} // Use theme vars
            >
              {theme === "dark" ? (
                <span className="material-symbols-outlined">light_mode</span> // Sun icon
              ) : (
                <span className="material-symbols-outlined">dark_mode</span> // Moon icon
              )}
            </button>
            {/* --- END THEME TOGGLE --- */}

            {/* Conditional Auth Links */}
            {isLoggedIn ? (
              <>
                {userRole === "lawyer" && (
                  <Link
                    to="/lawyer/dashboard"
                    className="hidden md:flex items-center gap-2 px-4 py-2 rounded font-semibold transition-colors duration-200"
                    style={{
                      backgroundColor: "var(--secondary-bg)",
                      color: "var(--text-color)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    {" "}
                    <span className="material-symbols-outlined">
                      dashboard
                    </span>{" "}
                    Dashboard{" "}
                  </Link>
                )}
                {userRole === "client" && (
                  <Link
                    to="/profile"
                    className="hidden md:flex items-center gap-2 px-4 py-2 rounded font-semibold transition-colors duration-200"
                    style={{
                      backgroundColor: "var(--accent-color)",
                      color: "#111",
                    }}
                  >
                    {" "}
                    <span className="material-symbols-outlined">
                      account_circle
                    </span>{" "}
                    Profile{" "}
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="hidden md:flex items-center gap-2 px-4 py-2 rounded font-semibold text-white transition-colors duration-200"
                  style={{ backgroundColor: "var(--danger-color, #d32f2f)" }}
                >
                  {" "}
                  <span className="material-symbols-outlined">logout</span>{" "}
                  Logout{" "}
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="hidden md:block px-5 py-2 rounded font-semibold transition-colors duration-200"
                style={{
                  backgroundColor: "var(--accent-color)",
                  color: "#111",
                }}
              >
                {" "}
                Login / Consult{" "}
              </Link>
            )}

            {/* Mobile Menu Toggle (Needs similar updates inside) */}
            <details className="relative md:hidden">
              {/* ... mobile menu content ... */}
            </details>
          </div>
        </div>
      </header>

      {/* Main Content Outlet */}
      <main>
        <Outlet />
      </main>

      {/* Footer (Should ideally use theme variables too) */}
      <footer
        className="pt-16 pb-6 border-t"
        style={{
          backgroundColor: "var(--secondary-bg)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="container mx-auto px-4">
          {" "}
          {/* Added container for alignment */}
          {/* Simple Footer Example */}
          <p
            className="text-center text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            © {new Date().getFullYear()} Lex Connect. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Ensure default export if needed
// export default Layout;
