import React from "react"; // Removed useState/useEffect as title is handled differently now
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom"; // Added useLocation
import "./LawyerDashboard.css";
import { useAuth } from "../../context/AuthContext";

// --- Function to get title based on path ---
// We can simplify this if the layout determines title based on Outlet's content later
const getTitleFromPath = (pathname) => {
  if (pathname.includes("/cases")) return "Manage Cases";
  if (pathname.includes("/appointments")) return "Manage Appointments";
  if (pathname.includes("/documents")) return "Manage Documents";
  if (pathname.includes("/messages")) return "Messages";
  if (pathname.includes("/billing")) return "Billing & Invoices";
  if (pathname.includes("/settings")) return "Settings";
  return "Lawyer Dashboard"; // Default for "/lawyer/dashboard"
};

export const LawyerDashboardLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // <-- Get location object
  const title = getTitleFromPath(location.pathname); // <-- Get title directly

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };

  // Helper function to determine active class
  const getActiveClass = (path) => {
    // Check if the current location starts with the path for nested routes,
    // or is an exact match for the main dashboard link.
    if (path === "/lawyer/dashboard") {
      return location.pathname === path
        ? "bg-yellow-600 font-bold"
        : "hover:bg-yellow-600";
    }
    return location.pathname.startsWith(path)
      ? "bg-yellow-600 font-bold"
      : "hover:bg-yellow-600";
  };

  return (
    <div id="webcrumbs">
      <div className="flex h-screen bg-neutral-900">
        {/* Sidebar */}
        <div className="w-64 bg-yellow-500 p-4 transition-all duration-300 hover:w-72 flex flex-col">
          <div className="flex items-center justify-center mb-8 flex-shrink-0">
            <i className="fa-solid fa-scale-balanced text-3xl text-black"></i>
            <h1 className="ml-2 text-2xl font-bold text-black">Lex Connect</h1>
          </div>

          <nav className="flex-grow overflow-y-auto">
            <ul className="space-y-2">
              {/* --- ADDED CONDITIONAL CLASSES --- */}
              <li>
                <Link
                  to="/lawyer/dashboard"
                  className={`flex items-center p-3 rounded-lg text-black hover:translate-x-2 transition-all duration-300 ${getActiveClass(
                    "/lawyer/dashboard"
                  )}`}
                >
                  <i className="fa-solid fa-home w-6"></i>
                  <span className="ml-2 font-semibold">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/lawyer/cases"
                  className={`flex items-center p-3 rounded-lg text-black hover:translate-x-2 transition-all duration-300 ${getActiveClass(
                    "/lawyer/cases"
                  )}`}
                >
                  <i className="fa-solid fa-briefcase w-6"></i>
                  <span className="ml-2 font-semibold">Cases</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/lawyer/appointments"
                  className={`flex items-center p-3 rounded-lg text-black hover:translate-x-2 transition-all duration-300 ${getActiveClass(
                    "/lawyer/appointments"
                  )}`}
                >
                  <i className="fa-solid fa-calendar-days w-6"></i>
                  <span className="ml-2 font-semibold">Appointments</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/lawyer/documents"
                  className={`flex items-center p-3 rounded-lg text-black hover:translate-x-2 transition-all duration-300 ${getActiveClass(
                    "/lawyer/documents"
                  )}`}
                >
                  <i className="fa-solid fa-file-contract w-6"></i>
                  <span className="ml-2 font-semibold">Documents</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/lawyer/messages"
                  className={`flex items-center p-3 rounded-lg text-black hover:translate-x-2 transition-all duration-300 ${getActiveClass(
                    "/lawyer/messages"
                  )}`}
                >
                  <i className="fa-solid fa-comments w-6"></i>
                  <span className="ml-2 font-semibold">Messages</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/lawyer/billing"
                  className={`flex items-center p-3 rounded-lg text-black hover:translate-x-2 transition-all duration-300 ${getActiveClass(
                    "/lawyer/billing"
                  )}`}
                >
                  <i className="fa-solid fa-money-bill-wave w-6"></i>
                  <span className="ml-2 font-semibold">Billing</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/lawyer/settings"
                  className={`flex items-center p-3 rounded-lg text-black hover:translate-x-2 transition-all duration-300 ${getActiveClass(
                    "/lawyer/settings"
                  )}`}
                >
                  <i className="fa-solid fa-gear w-6"></i>
                  <span className="ml-2 font-semibold">Settings</span>
                </Link>
              </li>
              {/* --- END CONDITIONAL CLASSES --- */}
            </ul>
          </nav>

          <div className="mt-auto flex-shrink-0">
            <Link
              to="/login"
              onClick={handleLogout}
              className="flex items-center p-3 rounded-lg text-black hover:bg-yellow-600 hover:translate-x-2 transition-all duration-300" // Standard hover for logout
            >
              <i className="fa-solid fa-right-from-bracket w-6"></i>
              <span className="ml-2 font-semibold">Logout</span>
            </Link>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-neutral-800 p-4 shadow-md flex justify-between items-center flex-shrink-0">
            <div className="flex items-center">
              <button className="text-gray-300 hover:text-yellow-500 transform hover:scale-110 transition-all duration-300">
                <i className="fa-solid fa-bars text-xl"></i>
              </button>
              {/* --- Dynamic Title --- */}
              <h2 className="ml-4 text-xl font-semibold text-gray-300">
                {title}
              </h2>
            </div>
            {/* ... (Rest of Header - Search, Bell, Profile) ... */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-neutral-700 text-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                />
                <i className="fa-solid fa-search absolute left-3 top-2.5 text-gray-500"></i>
              </div>
              {/* Bell */}
              <button className="relative p-2 text-gray-300 rounded-full hover:bg-neutral-700 hover:text-yellow-500 transform hover:rotate-12 transition-all duration-300">
                <i className="fa-solid fa-bell text-xl"></i>
                <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-500 rounded-full text-xs flex items-center justify-center text-black font-bold">
                  3
                </span>
              </button>
              {/* Profile Dropdown */}
              <details className="relative">
                <summary className="flex items-center space-x-3 cursor-pointer focus:outline-none">
                  <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
                    JD
                  </div>
                  <span className="text-gray-300">John Doe</span>
                  <i className="fa-solid fa-chevron-down text-gray-500 text-sm transition-transform duration-300 group-open:rotate-180"></i>
                </summary>
                <div className="absolute right-0 mt-2 w-48 bg-neutral-800 rounded-lg shadow-lg py-2 z-10 border border-neutral-700">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-300 hover:bg-neutral-700 hover:text-yellow-500 transition-all duration-300"
                  >
                    <i className="fa-solid fa-user mr-2"></i>Profile
                  </Link>
                  <Link
                    to="/lawyer/settings"
                    className="block px-4 py-2 text-gray-300 hover:bg-neutral-700 hover:text-yellow-500 transition-all duration-300"
                  >
                    <i className="fa-solid fa-gear mr-2"></i>Settings
                  </Link>
                  <Link
                    to="/login"
                    onClick={handleLogout}
                    className="block px-4 py-2 text-gray-300 hover:bg-neutral-700 hover:text-yellow-500 transition-all duration-300"
                  >
                    <i className="fa-solid fa-right-from-bracket mr-2"></i>
                    Logout
                  </Link>
                </div>
              </details>
            </div>
          </header>

          {/* Child Page Content */}
          <main className="flex-1 overflow-y-auto p-6 bg-neutral-900">
            <Outlet />
          </main>
        </div>

        {/* FAB */}
        <button className="fixed bottom-6 right-6 w-16 h-16 bg-yellow-500 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-300">
          <i className="fa-solid fa-plus text-2xl text-black"></i>
        </button>
      </div>
    </div>
  );
};

export default LawyerDashboardLayout;
