import React from "react";
import { Link } from "react-router-dom";
import "./About.css"; // The corresponding CSS file

const About = () => {
  // Define team members here to keep JSX clean
  const teamMembers = [
    {
      name: "Jonathan Mitchell",
      role: "Corporate Law Specialist",
      imageUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      name: "Sophia Rodriguez",
      role: "Family Law Attorney",
      imageUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    },
    {
      name: "David Chen",
      role: "Litigation Expert",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
  ];

  return (
    <div className="about-us-container">
      {/* Page Header */}
      <header className="about-header">
        <div className="header-content">
          <h1 className="about-title">About Lex Connect</h1>
          <p className="about-subtitle">
            Forging paths to justice with integrity, expertise, and unwavering
            dedication since 2005.
          </p>
        </div>
      </header>

      {/* Mission and Vision Section */}
      <section className="mission-section">
        <div className="mission-card">
          <span className="material-symbols-outlined card-icon">target</span>
          <h2 className="card-title">Our Mission</h2>
          <p className="card-text">
            To deliver reliable, accessible, and high-quality legal consultancy
            services that empower our clients to make informed decisions and
            achieve the best possible outcomes.
          </p>
        </div>
        <div className="mission-card">
          <span className="material-symbols-outlined card-icon">
            visibility
          </span>
          <h2 className="card-title">Our Vision</h2>
          <p className="card-text">
            To be India's most trusted legal partner, recognized for our ethical
            standards, innovative solutions, and profound commitment to client
            success in an ever-evolving legal landscape.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <span className="material-symbols-outlined value-icon">
              verified_user
            </span>
            <h3>Integrity</h3>
            <p>Upholding the highest ethical standards in every action.</p>
          </div>
          <div className="value-item">
            <span className="material-symbols-outlined value-icon">groups</span>
            <h3>Client-Centric</h3>
            <p>Placing our clients' needs and success at the forefront.</p>
          </div>
          <div className="value-item">
            <span className="material-symbols-outlined value-icon">
              emoji_objects
            </span>
            <h3>Excellence</h3>
            <p>A relentless pursuit of quality and outstanding results.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="team-section">
        <h2 className="section-title">Meet Our Experts</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="team-member-photo"
              />
              <div className="team-member-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/attorneys" className="cta-button">
          View All Attorneys
        </Link>
      </section>
    </div>
  );
};

export default About;
