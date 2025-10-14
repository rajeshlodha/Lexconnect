import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // We will be replacing the content of this file next

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // Simulate API Call - Replace with your actual authentication
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Example success condition
      if (email === "test@example.com" && password === "password") {
        console.log("Login successful");
        // localStorage.setItem("token", "dummy_token");
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
          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <h2 className="login-title">Welcome Back</h2>
            <p className="login-description">
              Please enter your credentials to log in.
            </p>

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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>

            <div className="login-options">
              <Link to="/forgot-password" className="forgot-password-link">
                Forgot Password?
              </Link>
            </div>

            {error && <div className="login-error">{error}</div>}

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? <div className="loader"></div> : "Sign In"}
            </button>

            <div className="signup-link-container">
              <span>Don't have an account?</span>
              <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
