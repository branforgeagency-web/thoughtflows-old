import React from "react";
import { Link } from "react-router-dom";
function VizagGetinTouch() {
  return (
    <>
      <div className="get" style={{
        marginBottom: "50px",
        padding: window.innerWidth <= 768 ? "20px 15px" : "40px 20px"
      }}>
        <div className="get-1" style={{
          marginBottom: window.innerWidth <= 768 ? "30px" : "40px",
          textAlign: window.innerWidth <= 768 ? "center" : "left"
        }}>
          <h2 style={{ 
            marginBottom: "20px",
            fontSize: window.innerWidth <= 768 ? "22px" : "28px",
            lineHeight: "1.3"
          }}>
            Competitive Fees with Flexible Payment Plans
          </h2>
          <p style={{
            fontSize: window.innerWidth <= 768 ? "15px" : "16px",
            lineHeight: "1.6",
            marginBottom: "0"
          }}>
            Our Vizag institute offers the most competitive fees in Andhra Pradesh 
            for medical coding training. We provide flexible payment options including 
            monthly installments, EMI options, and scholarship programs for deserving 
            students. Our fee structure is designed to make quality medical coding education 
            accessible to everyone, with no hidden costs and transparent pricing.
          </p>
        </div>
        <div className="get-2" style={{
          textAlign: window.innerWidth <= 768 ? "center" : "left"
        }}>
          <h2 style={{ 
            marginBottom: "20px",
            fontSize: window.innerWidth <= 768 ? "22px" : "28px",
            lineHeight: "1.3"
          }}>Visit Our Vizag Campus</h2>
          <p style={{
            fontSize: window.innerWidth <= 768 ? "15px" : "16px",
            lineHeight: "1.6",
            marginBottom: window.innerWidth <= 768 ? "25px" : "30px"
          }}>
            Located in the heart of Vizag, our institute is easily accessible 
            by public transport. We offer free counseling sessions, campus tours, and 
            demo classes for prospective students. Our experienced counselors are 
            available to guide you through course selection, career planning, and 
            admission procedures. Contact us today to schedule a visit and start your 
            journey towards a successful medical coding career.
          </p>
          <div style={{
            display: "flex",
            justifyContent: window.innerWidth <= 768 ? "center" : "flex-start",
            marginTop: window.innerWidth <= 768 ? "15px" : "15px",
            marginBottom : "10px ",
          }}>
            <Link 
              to="/contact" 
              className="button"
              style={{
                background: "linear-gradient(135deg, #097D8A 0%, #21A7D0 100%)",
                color: "white",
                padding: window.innerWidth <= 768 ? "12px 25px" : "15px 35px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: window.innerWidth <= 768 ? "14px" : "16px",
                display: "inline-block",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(9, 125, 138, 0.3)",
                border: "none",
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: "1px",
                position: "relative",
                overflow: "hidden",
                width: window.innerWidth <= 768 ? "auto" : "auto",
                minWidth: window.innerWidth <= 768 ? "200px" : "auto",
                textAlign: "center"
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
      </div>
    </>
  );
}

export default VizagGetinTouch;
