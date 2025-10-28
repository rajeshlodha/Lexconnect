import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    // Basic centering and styling - adjust as needed
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 200px)", // Adjust based on header/footer height
        textAlign: "center",
        padding: "40px",
        backgroundColor: "var(--primary-bg)",
        color: "var(--text-color)",
      }}
    >
      <span
        className="material-symbols-outlined"
        style={{ fontSize: "80px", color: "var(--accent-color)" }}
      >
        error
      </span>
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          margin: "20px 0 10px 0",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "600",
          marginBottom: "20px",
          color: "var(--text-muted)",
        }}
      >
        Page Not Found
      </h2>
      <p style={{ marginBottom: "30px", color: "var(--text-muted)" }}>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          padding: "12px 24px",
          backgroundColor: "var(--accent-color)",
          color: "#111",
          textDecoration: "none",
          fontWeight: "600",
          borderRadius: "8px",
          transition: "background-color 0.2s",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--accent-hover)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--accent-color)")
        }
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
