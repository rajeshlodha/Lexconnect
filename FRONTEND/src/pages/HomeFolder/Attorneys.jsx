import React from "react";
import "./Attorneys.css"; // Import the new CSS file

// This page shows ALL attorneys, not just the featured ones.
const attorneysData = [
  {
    name: "Jonathan Mitchell",
    role: "Founding Partner, Corporate Law",
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Sophia Rodriguez",
    role: "Senior Partner, Family Law",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
  },
  {
    name: "David Chen",
    role: "Partner, Litigation",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Aisha Khan",
    role: "Associate, Real Estate Law",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80",
  },
  {
    name: "Marcus Cole",
    role: "Of Counsel, Criminal Defense",
    imageUrl:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Emily White",
    role: "Senior Paralegal",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
  },
];

const Attorneys = () => {
  return (
    <div className="attorneys-container">
      {/* Page Header */}
      <header className="attorneys-header">
        <div className="header-content">
          <h1 className="attorneys-title">Our Legal Experts</h1>
          <p className="attorneys-subtitle">
            Meet the dedicated professionals at Lex Connect, committed to
            achieving excellence and justice for our clients.
          </p>
        </div>
      </header>

      {/* Attorneys Grid */}
      <section className="attorneys-grid-section">
        <h2 className="section-title">Our Team</h2>
        <div className="team-grid">
          {attorneysData.map((member, index) => (
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
      </section>
    </div>
  );
};

export default Attorneys;
