import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";

// Simple email validation function (can be shared or defined locally)
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  // --- VALIDATION LOGIC ADDED ---
  const validateForm = () => {
    if (!email || !password) {
      setError("Both email and password are required.");
      return false;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    // You could add password length validation here if desired
    return true; // Form is valid
  };
  // --- END VALIDATION LOGIC ---

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // --- CALL VALIDATION ---
    if (!validateForm()) {
      return; // Stop if validation fails
    }
    // --- END VALIDATION CALL ---

    setLoading(true);
    try {
      // Simulate API Call - checking credentials
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === "test@example.com" && password === "password") {
        console.log("Login successful");
        login();
        navigate("/"); // Redirect to home on successful login
      } else {
        throw new Error("Invalid email or password.");
      }
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Panel: Branding */}
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

        {/* Right Panel: Login Form */}
        <div className="login-form-wrapper">
          {/* Added noValidate */}
          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <h2 className="login-title">Welcome Back</h2>
            <p className="login-description">
              Please enter your credentials to log in.
            </p>

            {/* Display Error (moved above inputs for better visibility) */}
            {error && <div className="login-error">{error}</div>}

            {/* Email Input */}
            <div className="input-group">
              <span className="input-icon material-symbols-outlined">
                person
              </span>
              <input
                id="email"
                type="email" // Use type="email"
                required // Keep required for accessibility
                value={email}
                // Clear error on change
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
                required // Keep required
                value={password}
                // Clear error on change
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
              {/* Ensure this links correctly */}
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
