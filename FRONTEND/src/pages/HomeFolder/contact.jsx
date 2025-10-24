import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file

// Simple email validation function
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Add state for validation errors and success messages
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear messages when user types
    if (error) setError("");
    if (successMessage) setSuccessMessage("");
  };

  // --- VALIDATION LOGIC ---
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return false;
    }
    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true; // Form is valid
  };
  // --- END VALIDATION ---

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // --- CALL VALIDATION ---
    if (!validateForm()) {
      return; // Stop if invalid
    }
    // --- END VALIDATION CALL ---

    // Simulate form submission
    console.log("Form submitted:", formData);
    setSuccessMessage(
      "Thank you for your message! We will get back to you soon."
    ); // Show success message
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="contact-container">
      {/* Page Header */}
      <header className="contact-header">
        <div className="header-content">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            We're here to help with your legal needs. Reach out to us for a
            consultation.
          </p>
        </div>
      </header>

      {/* Contact Content Section */}
      <section className="contact-content-section">
        <div className="contact-grid">
          {/* Column 1: Contact Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              Fill out the form, and our team will get back to you within 24
              hours.
            </p>

            <div className="contact-info-item">
              <span className="material-symbols-outlined">call</span>
              <div>
                <h4>Phone</h4>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="material-symbols-outlined">mail</span>
              <div>
                <h4>Email</h4>
                <span>consult@lexconnect.com</span>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="material-symbols-outlined">location_on</span>
              <div>
                <h4>Address</h4>
                <span>
                  123 Legal Plaza, Suite 400,
                  <br />
                  New Delhi, India 110001
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="contact-form-container">
            {/* Added noValidate */}
            <form onSubmit={handleSubmit} noValidate>
              {/* Display Error/Success Messages */}
              {error && <div className="contact-message error">{error}</div>}
              {successMessage && (
                <div className="contact-message success">{successMessage}</div>
              )}

              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email" // Use type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="contact-form-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
