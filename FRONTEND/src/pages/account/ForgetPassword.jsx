import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgetPassword.css"; // We will create this file next

const ForgetPassword = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Simulate API calls
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    if (mobile.length === 10 && /^\d+$/.test(mobile)) {
      setMessage(`OTP sent to ******${mobile.slice(6)}.`);
      setStep(2);
    } else {
      setMessage("Please enter a valid 10-digit mobile number.");
    }
    setLoading(false);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (otp === "123456") {
      // Simulated OTP
      setMessage("OTP verified. Please set your new password.");
      setStep(3);
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
    setLoading(false);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (newPassword.length >= 6) {
      setMessage("Password changed successfully!");
      setStep(4);
    } else {
      setMessage("Password must be at least 6 characters long.");
    }
    setLoading(false);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleSendOtp} className="fp-form" noValidate>
            <span className="fp-icon material-symbols-outlined">
              phone_android
            </span>
            <h2 className="fp-title">Forgot Password?</h2>
            <p className="fp-description">
              Enter your registered mobile number to receive an OTP.
            </p>
            <div className="input-group">
              <span className="input-icon material-symbols-outlined">
                phone
              </span>
              <input
                id="mobile"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                maxLength={10}
              />
              <label htmlFor="mobile">Mobile Number</label>
            </div>
            <button type="submit" className="fp-btn" disabled={loading}>
              {loading ? <div className="loader"></div> : "Send OTP"}
            </button>
          </form>
        );
      case 2:
        return (
          <form onSubmit={handleVerifyOtp} className="fp-form" noValidate>
            <span className="fp-icon material-symbols-outlined">password</span>
            <h2 className="fp-title">Enter OTP</h2>
            <p className="fp-description">
              Check your mobile for the 6-digit verification code.
            </p>
            <div className="input-group">
              <span className="input-icon material-symbols-outlined">pin</span>
              <input
                id="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                maxLength={6}
              />
              <label htmlFor="otp">Verification Code (OTP)</label>
            </div>
            <button type="submit" className="fp-btn" disabled={loading}>
              {loading ? <div className="loader"></div> : "Verify OTP"}
            </button>
          </form>
        );
      case 3:
        return (
          <form onSubmit={handleChangePassword} className="fp-form" noValidate>
            <span className="fp-icon material-symbols-outlined">
              lock_reset
            </span>
            <h2 className="fp-title">Set New Password</h2>
            <p className="fp-description">
              Create a strong and secure new password for your account.
            </p>
            <div className="input-group">
              <span className="input-icon material-symbols-outlined">lock</span>
              <input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <label htmlFor="newPassword">New Password</label>
            </div>
            <button type="submit" className="fp-btn" disabled={loading}>
              {loading ? <div className="loader"></div> : "Change Password"}
            </button>
          </form>
        );
      case 4:
        return (
          <div className="fp-form fp-success">
            <span className="fp-icon material-symbols-outlined success-icon">
              check_circle
            </span>
            <h2 className="fp-title">Success!</h2>
            <p className="fp-description">{message}</p>
            <Link to="/login" className="fp-btn">
              Back to Login
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fp-page">
      <div className="fp-container">
        {message && (
          <div className={`fp-message ${step === 4 ? "success" : ""}`}>
            {message}
          </div>
        )}
        {renderStep()}
        {step < 4 && (
          <div className="back-link-container">
            <Link to="/login" className="back-link">
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
