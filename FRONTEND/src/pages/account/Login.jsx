import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const validateForm = () => {
    // ... (validation logic remains the same) ...
    if (!email || !password) {
      setError("Both email and password are required.");
      return false;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Simulate API Call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      let role = null;
      let redirectPath = "/"; // Default redirect

      // --- SIMULATED ROLE ASSIGNMENT ---
      if (email === "test@example.com" && password === "password") {
        role = "client";
        redirectPath = "/profile"; // Clients go to profile
      } else if (email === "lawyer@example.com" && password === "password") {
        role = "lawyer";
        redirectPath = "/lawyer/dashboard"; // Lawyers go to dashboard
      } else {
        throw new Error("Invalid email or password.");
      }
      // --- END ROLE ASSIGNMENT ---

      if (role) {
        login(role); // Pass the role to the login function
        console.log(`Login successful as ${role}`);
        navigate(redirectPath); // Redirect based on role
      } else {
        // This case should ideally not be reached if validation is correct
        throw new Error("Login failed internally.");
      }
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    // ... (Rest of the JSX remains the same, including form inputs, branding, etc.) ...
    <div className="login-page">
      <div className="login-container">
        {/* Branding */}
        <div className="login-branding">
          <div className="branding-content">
            <span className="branding-icon material-symbols-outlined">
              balance
            </span>
            <h1 className="branding-title">Lex Connect</h1>
            <p className="branding-subtitle">
              Your trusted partner in legal consultancy.
            </p>
          </div>
        </div>
        {/* Form */}
        <div className="login-form-wrapper">
          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <h2 className="login-title">Welcome Back</h2>
            <p className="login-description">
              Please enter your credentials to log in.
            </p>
            {error && <div className="login-error">{error}</div>}
            {/* Email Input */}
            <div className="input-group">
              <span className="input-icon material-symbols-outlined">
                person
              </span>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
              />
              <label htmlFor="email">Email Address</label>
            </div>
            {/* Password Input */}
            <div className="input-group">
              <span className="input-icon material-symbols-outlined">lock</span>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="login-options">
              <Link to="/forgot-password" className="forgot-password-link">
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? <div className="loader"></div> : "Sign In"}
            </button>
            <div className="signup-link-container">
              <span>Don't have an account?</span>
              <Link to="/signup" className="signup-link">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
