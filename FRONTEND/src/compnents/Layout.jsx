import React, { useState } from "react"; // <-- Import useState
import { Link, Outlet } from "react-router-dom";

// This component provides the consistent Header and Footer for all pages.
export const Layout = () => {
  // --- FAKE LOGIN STATE ---
  // In a real app, this would come from your authentication context.
  // Change `false` to `true` to see the "Profile" button appear!
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-black border-b border-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-yellow-500 text-3xl">
              balance
            </span>
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-yellow-500">Lex</span>Connect
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="font-medium hover:text-yellow-500 transition-colors duration-200"
            >
              Home
            </Link>
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

          <div className="flex items-center space-x-4">
            {/* --- THIS IS THE NEW LOGIC --- */}
            {isLoggedIn ? (
              // If the user IS logged in, show the Profile button
              <Link
                to="/profile"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition-colors duration-200"
              >
                <span className="material-symbols-outlined">
                  account_circle
                </span>
                Profile
              </Link>
            ) : (
              // If the user is NOT logged in, show the Login button
              <Link
                to="/login"
                className="hidden md:block px-5 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition-colors duration-200"
              >
                Login / Consult
              </Link>
            )}
            {/* The mobile menu would also need similar logic */}
            <details className="relative md:hidden">
              {/* ... mobile menu content ... */}
            </details>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black pt-16 pb-6 border-t border-gray-800">
        {/* ... footer content ... */}
      </footer>
    </div>
  );
};
