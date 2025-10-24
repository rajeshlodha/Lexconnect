import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Import your page components
import { Home } from "./pages/HomeFolder/Home";
import About from "./pages/HomeFolder/about";
import Login from "./pages/account/Login";
import ForgetPassword from "./pages/account/ForgetPassword";
import { Layout } from "./compnents/Layout";
import SignUp from "./pages/account/SignUp.jsx";
import { ProfilePage } from "./pages/account/profile"; // <-- STEP 1: IMPORT THE NEW PAGE
import { LawyerDashboard } from "./pages/Lawyer/LawyerDashboard";

// This component wraps our main pages with the Layout
const PageLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes WITH the main header and footer */}
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<ProfilePage />} />{" "}
          {/* <-- STEP 2: ADD THE ROUTE */}
        </Route>

        {/* Routes WITHOUT the main header and footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="/lawyer/dashboard" element={<LawyerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
