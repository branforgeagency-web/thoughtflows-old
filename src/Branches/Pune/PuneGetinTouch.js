import React from "react";
import { Link } from "react-router-dom";

function PuneGetinTouch() {
  return (
    <>
      <div className="get">
        <div className="get-1" style={{ width: "100%", textAlign: "center" }}>
          <h2 style={{ marginBottom: "20px" }}>Ready to Take the Next Step in Pune?</h2>
          <p style={{ maxWidth: "800px", margin: "0 auto 30px", fontSize: "16px", lineHeight: "26px" }}>
            Invest in a stable, high-growth global healthcare career. Speak with our Pune admission counselors to understand course options, batch timings, certification fee concessions, and immediate corporate placement openings.
          </p>
          <Link 
            to="/contact" 
            className="button"
            style={{
              background: "linear-gradient(135deg, #097D8A 0%, #21A7D0 100%)",
              color: "white",
              padding: "15px 35px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "16px",
              display: "inline-block",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(9, 125, 138, 0.3)",
              border: "none",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "1px",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(9, 125, 138, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(9, 125, 138, 0.3)";
            }}
          >
            📞 Contact Us Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default PuneGetinTouch;
