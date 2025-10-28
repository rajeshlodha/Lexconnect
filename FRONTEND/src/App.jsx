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
import NotFoundPage from "./pages/NotFoundPage";

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
        {/* --- Public Routes --- */}
        {/* ... (no changes here) ... */}
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/attorneys" element={<Attorneys />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* --- Auth Routes --- */}
        {/* ... (no changes here) ... */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="signUp" element={<SignUp />} />

        {/* --- Protected Routes --- */}

        {/* Routes accessible by BOTH Client and Lawyer */}
        <Route element={<ProtectedRoute allowedRoles={["client", "lawyer"]} />}>
          {" "}
          {/* <-- ALLOW BOTH */}
          <Route element={<PageLayout />}>
            {" "}
            {/* Use main layout */}
            <Route path="/profile" element={<ProfilePage />} />{" "}
            {/* <-- Profile is here */}
            {/* Add any other routes accessible by both roles */}
          </Route>
        </Route>

        {/* Lawyer-ONLY Routes */}
        <Route element={<ProtectedRoute allowedRoles={["lawyer"]} />}>
          <Route element={<LawyerDashboardLayout />}>
            {" "}
            {/* Use dashboard layout */}
            <Route path="/lawyer/dashboard" element={<DashboardContent />} />
            <Route path="/lawyer/cases" element={<CasesPage />} />
            <Route path="/lawyer/appointments" element={<AppointmentsPage />} />
            <Route path="/lawyer/documents" element={<DocumentsPage />} />
            <Route path="/lawyer/messages" element={<MessagesPage />} />
            <Route path="/lawyer/billing" element={<BillingPage />} />
            <Route path="/lawyer/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>

        {/* --- Catch-All 404 Route --- */}
        {/* ... */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
