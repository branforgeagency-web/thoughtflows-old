import React from "react";
import { Link } from "react-router-dom";
import Meta from "./Meta";

const NotFound = () => (
  <>
    <Meta
      title="Page Not Found | ThoughtFlows Medical Coding Academy"
      description="The page you are looking for could not be found."
      noindex
    />
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "140px 20px 60px" }}>
      <h1 style={{ fontSize: "72px", color: "#0a848f", margin: 0 }}>404</h1>
      <h2 style={{ margin: "10px 0" }}>Page not found</h2>
      <p style={{ maxWidth: 480 }}>The page you are looking for may have moved or no longer exists.</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link to="/" style={{ background: "#0a848f", color: "#fff", padding: "10px 24px", borderRadius: 6, textDecoration: "none" }}>Go to Home</Link>
        <Link to="/contact" style={{ border: "1px solid #0a848f", color: "#0a848f", padding: "10px 24px", borderRadius: 6, textDecoration: "none" }}>Contact us</Link>
      </div>
    </div>
  </>
);

export default NotFound;
