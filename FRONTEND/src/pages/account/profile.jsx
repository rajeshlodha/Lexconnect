import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext"; // Import the useTheme hook
import "./Profile.css";

// --- Sub-component for Personal Info ---
const PersonalInfo = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user.name || "",
    displayName: user.displayName || "",
    phone: user.phone || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving data:", formData);
    alert("Changes saved successfully! (Check the console)");
  };

  return (
    <div className="profile-card">
      <h3 className="card-title">Personal Information</h3>
      <form onSubmit={handleSubmit}>
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
          />
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
        <button type="submit" className="profile-button primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

// --- Sub-component for Account Settings ---
const AccountSettings = () => (
  <div className="profile-card">
    <h3 className="card-title">Account Settings</h3>
    <div className="form-group">
      <label>Change Password</label>
      <input type="password" placeholder="Current Password" />
      <input type="password" placeholder="New Password" />
    </div>
    <button className="profile-button">Update Password</button>
    <div className="setting-item">
      <h4>Two-Factor Authentication</h4>
      <p className="text-muted">Keep your account extra secure.</p>
      <button className="profile-button">Enable 2FA</button>
    </div>
  </div>
);

// --- Sub-component for Preferences with functional theme toggle ---
const Preferences = () => {
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

// --- Sub-component for Billing ---
const BillingInfo = ({ plan }) => (
  <div className="profile-card">
    <h3 className="card-title">Billing & Subscription</h3>
    <div className="billing-plan">
      <p>Your Current Plan:</p>
      <h4>{plan}</h4>
      <button className="profile-button">Manage Plan</button>
    </div>
    <div className="billing-history">
      <h4>Billing History</h4>
      <p className="text-muted">No invoices found.</p>
    </div>
  </div>
);

// --- Sub-component for Support ---
const Support = () => (
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

// --- Main ProfilePage Component ---
export const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const navigate = useNavigate();

  const userData = {
    name: "Jessica Miller",
    displayName: "JessM",
    email: "j.miller@example.com",
    phone: "+1 (555) 123-4567",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    plan: "Premium Legal Suite",
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalInfo user={userData} />;
      case "account":
        return <AccountSettings />;
      case "preferences":
        return <Preferences />;
      case "billing":
        return <BillingInfo plan={userData.plan} />;
      case "support":
        return <Support />;
      default:
        return <PersonalInfo user={userData} />;
    }
  };

  return (
    <div className="profile-page-container">
      <div className="profile-sidebar">
        <div className="profile-avatar-section">
          <img
            src={userData.avatar}
            alt="User Avatar"
            className="profile-avatar-img"
          />
          <h2 className="profile-avatar-name">{userData.name}</h2>
          <p className="profile-avatar-email">{userData.email}</p>
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
          <button
            onClick={() => setActiveTab("billing")}
            className={activeTab === "billing" ? "active" : ""}
          >
            <span className="material-symbols-outlined">receipt_long</span>{" "}
            Billing & Subscription
          </button>
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
      <div className="profile-content">{renderContent()}</div>
    </div>
  );
};
