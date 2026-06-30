import React from "react";
import { Link } from "react-router-dom";
function HyderabadGetinTouch() {
  return (
    <>
      <div className="get">
        <div className="get-1" style={{ width: "100%", textAlign: "center" }}>
          <h2 style={{ marginBottom: "20px" }}>Have Questions? Let's Talk</h2>
          <p style={{ maxWidth: "800px", margin: "0 auto 30px", fontSize: "16px", lineHeight: "26px" }}>
            Choosing the right course is a big decision, and you shouldn't have to make it alone. As a trusted medical coding institute in Ameerpet, we're happy to answer your questions honestly — about the course, fees, batches, certifications, or placements. Our team will give you straight answers and the guidance you need to decide what's right for you. Reach out today and take the first step toward a rewarding career in medical coding.
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

export default HyderabadGetinTouch;
