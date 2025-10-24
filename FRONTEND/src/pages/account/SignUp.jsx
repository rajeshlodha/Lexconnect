import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useAuth } from "../../context/AuthContext";

// Simple email validation function
const isValidEmail = (email) => {
  // Basic regex for email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (error) {
      setError("");
    }
  };

  // --- VALIDATION LOGIC ADDED HERE ---
  const validateForm = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields are required.");
      return false;
    }
    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    return true; // Form is valid
  };
  // --- END OF VALIDATION LOGIC ---

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // --- CALL VALIDATION FUNCTION ---
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }
    // --- END VALIDATION CALL ---

    setLoading(true);

    // Simulate API call for registration
    try {
      console.log("Registering user:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      signup(); // Log the user in
      navigate("/"); // Redirect to home page
    } catch (err) {
      setError("Failed to create account. Please try again.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="signup-container">
      <div className="signup-panel-left">
        <div className="panel-content">
          <h1>Join LexConnect Today</h1>
          <p>
            Sign-up to get access to expert legal advice, resources, and a
            network of professionals.
          </p>
        </div>
      </div>
      <div className="signup-panel-right">
        {/* Added noValidate to disable default browser validation bubbles */}
        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          <h2 className="signup-title">Create Your Account</h2>

          {/* Display Error Message */}
          {error && <div className="signup-error">{error}</div>}

          {/* Form Fields (no changes needed here as 'required' is already present) */}
          <div
            className="form-group-signup animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
            <span className="material-symbols-outlined input-icon">person</span>
          </div>
          <div
            className="form-group-signup animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email" // Use type="email" for basic browser checks
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <span className="material-symbols-outlined input-icon">email</span>
          </div>
          <div
            className="form-group-signup animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <span className="material-symbols-outlined input-icon">lock</span>
          </div>
          <div
            className="form-group-signup animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <span className="material-symbols-outlined input-icon">
              lock_reset
            </span>
          </div>

          <button
            type="submit"
            className="signup-btn animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
            disabled={loading}
          >
            {loading ? (
              <span className="loader-signup"></span>
            ) : (
              "Create Account"
            )}
          </button>

          <div
            className="signup-footer animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <span>Already have an account?</span>
            <Link to="/login" className="login-link">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
