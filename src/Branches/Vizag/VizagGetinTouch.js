import React from "react";
import { Link } from "react-router-dom";
function VizagGetinTouch() {
  return (
    <>
      <div className="get">
        <div className="get-1">
          <h2 style={{ marginBottom: "20px" }}>
            Competitive Fees with Flexible Payment Plans
          </h2>
          <p>
            Our Vizag institute offers the most competitive fees in Andhra Pradesh 
            for medical coding training. We provide flexible payment options including 
            monthly installments, EMI options, and scholarship programs for deserving 
            students. Our fee structure is designed to make quality medical coding education 
            accessible to everyone, with no hidden costs and transparent pricing.
          </p>
        </div>
        <div className="get-2">
          <h2 style={{ marginBottom: "20px" }}>Visit Our Vizag Campus</h2>
          <p>
            Located in the heart of Vizag, our institute is easily accessible 
            by public transport. We offer free counseling sessions, campus tours, and 
            demo classes for prospective students. Our experienced counselors are 
            available to guide you through course selection, career planning, and 
            admission procedures. Contact us today to schedule a visit and start your 
            journey towards a successful medical coding career.
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

export default VizagGetinTouch;
