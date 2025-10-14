import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    setError("");

    // Simulate API call for registration
    try {
      console.log("Registering user:", formData);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
      // On success:
      navigate("/login"); // Redirect to login after successful signup
    } catch (err) {
      setError("Failed to create account. Please try again.");
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
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 className="signup-title">Create Your Account</h2>
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
              type="email"
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

          {error && <div className="signup-error">{error}</div>}

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
