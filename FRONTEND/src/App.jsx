import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Import your page components
import { Home } from "./pages/HomeFolder/Home";
import About from "./pages/HomeFolder/about";
import Login from "./pages/account/Login";
import ForgetPassword from "./pages/account/ForgetPassword";
import { Layout } from "./compnents/Layout";
import SignUp from "./pages/account/SignUp.jsx";
import { ProfilePage } from "./pages/account/profile";
// --- UPDATED IMPORTS ---
import { LawyerDashboardLayout } from "./pages/Lawyer/LawyerDashboard"; // Layout
import DashboardContent from "./pages/Lawyer/DashboardContent"; // Dashboard page content
import CasesPage from "./pages/Lawyer/CasesPage"; // Cases page content
import AppointmentsPage from "./pages/Lawyer/AppointmentsPage";
import DocumentsPage from "./pages/Lawyer/DocumentsPage.jsx";
import MessagesPage from "./pages/Lawyer/MessagesPage.jsx";
import BillingPage from "./pages/Lawyer/BillingPage.jsx";
import SettingsPage from "./pages/Lawyer/SettingsPage.jsx";

// --- END UPDATED IMPORTS ---
import Attorneys from "./pages/HomeFolder/Attorneys";
import Services from "./pages/HomeFolder/Services";
import Contact from "./pages/HomeFolder/contact";
import ProtectedRoute from "./compnents/ProtectedRoute";

// Public Page Layout
const PageLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* --- Public Routes (WITH Layout) --- */}
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/attorneys" element={<Attorneys />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* --- Auth Routes (NO Layout) --- */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="signUp" element={<SignUp />} />

        {/* --- Protected Routes (Logged-in users only) --- */}
        <Route element={<ProtectedRoute />}>
          {/* User Profile (uses public layout) */}
          <Route element={<PageLayout />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          {/* Lawyer Dashboard Section (uses LawyerDashboardLayout) */}
          <Route element={<LawyerDashboardLayout />}>
            {" "}
            <Route
              path="/Lawyer/dashboard"
              element={<DashboardContent />}
            />{" "}
            {/* <-- NEW: Main dashboard content */}
            <Route path="/Lawyer/cases" element={<CasesPage />} />
            <Route path="/Lawyer/appointments" element={<AppointmentsPage />} />
            <Route path="/Lawyer/documents" element={<DocumentsPage />} />
            <Route path="/Lawyer/messages" element={<MessagesPage />} />
            <Route path="/Lawyer/Billing" element={<BillingPage />} />
            <Route path="/lawyer/settings" element={<SettingsPage />} />
            {/* Add routes for Appointments, Documents etc. here later */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
