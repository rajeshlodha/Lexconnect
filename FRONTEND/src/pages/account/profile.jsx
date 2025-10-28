import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext"; // <-- Import useAuth
import "./Profile.css";

// --- Mock User Data (Replace with Context/API later) ---
const clientData = {
  name: "Jessica Miller",
  displayName: "JessM",
  email: "test@example.com", // Matches client login
  phone: "+1 (555) 123-4567",
  avatar:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80",
  plan: "Premium Legal Suite", // Specific to client?
};

const lawyerData = {
  name: "John Doe", // Matches lawyer login display name
  displayName: "JDoeLaw",
  email: "lawyer@example.com", // Matches lawyer login
  phone: "+1 (555) 987-6543",
  avatar:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80", // Different avatar
  // Lawyers might have different fields, e.g.:
  specialty: "Corporate Law",
  barNumber: "BAR12345",
};
// --- End Mock Data ---

// --- Sub-component for Personal Info (Now accepts role) ---
const PersonalInfo = ({ user, role }) => {
  const [formData, setFormData] = useState({
    name: user.name || "",
    displayName: user.displayName || "",
    phone: user.phone || "",
    // Add lawyer-specific fields to initial state if needed
    specialty: user.specialty || "",
    barNumber: user.barNumber || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving data for role:", role, formData);
    alert("Changes saved successfully! (Simulation - Check console)");
    // Later: Call context function to update user data
  };

  return (
    <div className="profile-card">
      <h3 className="card-title">Personal Information</h3>
      <form onSubmit={handleSubmit}>
        {/* Common Fields */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            disabled
          />{" "}
          {/* Email usually not editable */}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* --- Lawyer-Specific Fields --- */}
        {role === "lawyer" && (
          <>
            <div className="form-group">
              <label htmlFor="specialty">Legal Specialty</label>
              <input
                type="text"
                id="specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="barNumber">Bar Number</label>
              <input
                type="text"
                id="barNumber"
                name="barNumber"
                value={formData.barNumber}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        {/* --- End Lawyer-Specific Fields --- */}

        <button type="submit" className="profile-button primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

// --- Account Settings (Could also be made role-specific if needed) ---
const AccountSettings = ({ role }) => (
  <div className="profile-card">
    <h3 className="card-title">Account Settings</h3>
    {/* Example: Maybe 2FA is only for lawyers? */}
    {role === "lawyer" && (
      <div className="setting-item">
        <h4>Two-Factor Authentication</h4>
        <p className="text-muted">Keep your account extra secure.</p>
        <button className="profile-button">Enable 2FA</button>
      </div>
    )}
    <div className="setting-item">
      {" "}
      {/* Use setting-item for structure */}
      <label>Change Password</label>
      <div className="form-group" style={{ marginBottom: "12px" }}>
        {" "}
        {/* Add form-group for spacing */}
        <input
          type="password"
          placeholder="Current Password"
          style={{ marginBottom: "12px" }}
        />{" "}
        {/* Inline style for demo, better in CSS */}
        <input type="password" placeholder="New Password" />
      </div>
      <button className="profile-button">Update Password</button>
    </div>
  </div>
);

// --- Preferences (Likely the same for both) ---
const Preferences = () => {
  /* ... (No changes needed here) ... */
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="profile-card">
      <h3 className="card-title">Preferences</h3>
      <div className="preference-item">
        <div>
          <h4>Theme</h4>
          <p className="text-muted">Choose between light and dark mode.</p>
        </div>
        <div className="theme-toggle-switch">
          <label className="switch">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="preference-item">
        <div>
          <h4>Language</h4>
          <p className="text-muted">Set your preferred language.</p>
        </div>
        <select className="profile-select">
          <option>English (United States)</option>
          <option>Español</option>
        </select>
      </div>
    </div>
  );
};

// --- Billing (Maybe different views based on role?) ---
const BillingInfo = ({ user, role }) => (
  <div className="profile-card">
    <h3 className="card-title">Billing & Subscription</h3>
    {role === "client" &&
      user.plan && ( // Show plan only for clients
        <div className="billing-plan">
          <p>Your Current Plan:</p>
          <h4>{user.plan}</h4>
          <button className="profile-button">Manage Plan</button>
        </div>
      )}
    {/* Billing history might be relevant for both */}
    <div className="billing-history">
      <h4>Billing History</h4>
      <p className="text-muted">No invoices found.</p>
      {/* Add button for lawyers? */}
      {role === "lawyer" && (
        <button className="profile-button">View Client Invoices</button>
      )}
    </div>
  </div>
);

// --- Support (Likely the same) ---
const Support = () => {
  /* ... (No changes needed here) ... */
  return (
    <div className="profile-card">
      <h3 className="card-title">Support & Help</h3>
      <p className="text-muted">Have questions? We're here to help.</p>
      <div className="support-links">
        <a href="#">Visit FAQ</a>
        <a href="#">Contact Support</a>
        <a href="#">Submit Feedback</a>
      </div>
    </div>
  );
};

// --- Main ProfilePage Component ---
export const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const navigate = useNavigate();
  const { userRole, logout } = useAuth(); // <-- Get userRole

  // --- Determine which user data to display ---
  const userData = userRole === "lawyer" ? lawyerData : clientData;
  // ---

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // --- Render content based on role ---
  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalInfo user={userData} role={userRole} />;
      case "account":
        return <AccountSettings role={userRole} />; // Pass role if needed
      case "preferences":
        return <Preferences />; // Likely same for both
      case "billing":
        // Don't show Billing tab for lawyers if it's client-specific
        if (userRole === "lawyer")
          return (
            <p className="text-gray-500 p-4">
              Billing management is handled elsewhere.
            </p>
          );
        return <BillingInfo user={userData} role={userRole} />;
      case "support":
        return <Support />; // Likely same for both
      default:
        return <PersonalInfo user={userData} role={userRole} />;
    }
  };
  // --- End Render Content ---

  return (
    <div className="profile-page-container">
      {/* Sidebar */}
      <div className="profile-sidebar">
        <div className="profile-avatar-section">
          <img
            src={userData.avatar}
            alt="User Avatar"
            className="profile-avatar-img"
          />
          <h2 className="profile-avatar-name">{userData.name}</h2>
          <p className="profile-avatar-email">{userData.email}</p>
          {/* Show specialty for lawyer */}
          {userRole === "lawyer" && userData.specialty && (
            <p className="profile-avatar-role text-yellow-500 text-sm mt-1">
              {userData.specialty}
            </p>
          )}
        </div>
        <nav className="profile-nav">
          <button
            onClick={() => setActiveTab("personal")}
            className={activeTab === "personal" ? "active" : ""}
          >
            <span className="material-symbols-outlined">person</span> Personal
            Info
          </button>
          <button
            onClick={() => setActiveTab("account")}
            className={activeTab === "account" ? "active" : ""}
          >
            <span className="material-symbols-outlined">settings</span> Account
            Settings
          </button>
          <button
            onClick={() => setActiveTab("preferences")}
            className={activeTab === "preferences" ? "active" : ""}
          >
            <span className="material-symbols-outlined">tune</span> Preferences
          </button>
          {/* --- Conditionally show Billing tab --- */}
          {userRole === "client" && (
            <button
              onClick={() => setActiveTab("billing")}
              className={activeTab === "billing" ? "active" : ""}
            >
              <span className="material-symbols-outlined">receipt_long</span>{" "}
              Billing & Subscription
            </button>
          )}
          {/* --- End Conditional Billing tab --- */}
          <button
            onClick={() => setActiveTab("support")}
            className={activeTab === "support" ? "active" : ""}
          >
            <span className="material-symbols-outlined">help</span> Support
          </button>
        </nav>
        <div className="profile-logout-section">
          <button onClick={handleLogout} className="logout-button">
            <span className="material-symbols-outlined">logout</span> Logout
          </button>
        </div>
      </div>
      {/* Content Area */}
      <div className="profile-content">{renderContent()}</div>
    </div>
  );
};
