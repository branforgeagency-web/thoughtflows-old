import React from "react";
import { Link } from "react-router-dom";
function HyderabadGetinTouch() {
  return (
    <>
      <div className="get">
        <div className="get-1">
          <h2 style={{ marginBottom: "20px" }}>
            Affordable Fees and Easy Payment Options
          </h2>
          <p>
            We understand that investing in your education is a significant
            decision. Our training program offers affordable fees and easy
            payment options to make it accessible for aspiring medical coders.
            We strive to provide high-quality training at an affordable price,
            ensuring that finances are not a barrier to your career advancement
            in the medical coding field.
          </p>
        </div>
        <div className="get-2">
          <h2 style={{ marginBottom: "20px" }}>Get in Touch with Us</h2>
          <p>
            If you have any questions or inquiries about our medical coding
            training program in Hyderabad, we encourage you to get in touch with
            us. Our friendly and knowledgeable staff are ready to assist you and
            provide you with all the information you need to make an informed
            decision. Contact us today and take the first step towards a
            rewarding career in medical coding.
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
