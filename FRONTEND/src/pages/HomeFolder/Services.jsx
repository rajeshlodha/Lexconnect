import React from "react";
import "./Services.css"; // Import the new CSS file

// We are re-using the same data from the homepage for consistency
// This data is copied from src/compnents/Nav.jsx
const servicesData = [
  {
    icon: "gavel",
    title: "Corporate Law",
    description:
      "Advising businesses on legal obligations, compliance, and governance.",
  },
  {
    icon: "family_restroom",
    title: "Family Law",
    description:
      "Handling sensitive matters like divorce, custody, and settlements with care.",
  },
  {
    icon: "real_estate_agent",
    title: "Real Estate Law",
    description:
      "Guiding clients through property transactions, zoning, and disputes.",
  },
  {
    icon: "shield",
    title: "Criminal Defense",
    description:
      "Defending your rights with expert legal representation in criminal cases.",
  },
  {
    icon: "medical_services",
    title: "Personal Injury",
    description:
      "Fighting for compensation you deserve from accidents and injuries.",
  },
  {
    icon: "account_balance",
    title: "Litigation & Dispute",
    description:
      "Representing you in court and resolving complex legal disputes effectively.",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      {/* Page Header */}
      <header className="services-header">
        <div className="header-content">
          <h1 className="services-title">Our Practice Areas</h1>
          <p className="services-subtitle">
            Comprehensive legal solutions tailored to your specific needs,
            delivered with expertise and integrity.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="services-grid-section">
        <h2 className="section-title">What We Offer</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="mission-card">
              <span className="material-symbols-outlined card-icon">
                {service.icon}
              </span>
              <h2 className="card-title">{service.title}</h2>
              <p className="card-text">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
