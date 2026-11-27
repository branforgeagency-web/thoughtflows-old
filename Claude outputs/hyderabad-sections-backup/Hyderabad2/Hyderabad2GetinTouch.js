import React from "react";
import { Link } from "react-router-dom";
function HyderabadGetinTouch() {
  return (
    <>
      <div className="get">
        <div className="get-1">
          <h2 style={{ marginBottom: "20px" }}>Training You Can Actually Afford</h2>
          <p>
            Money is often the first worry when someone considers a course — and we'd rather be upfront about it than vague. Our fees are kept reasonable, with no hidden charges, and our EMI options let you pay in comfortable instalments instead of all at once. The goal is simple: a tight budget should never be the reason you put a promising coding career on hold.
          </p>
        </div>
        <div className="get-2">
          <h2 style={{ marginBottom: "20px" }}>Let's Find the Right Path for You</h2>
          <p>
            Not sure if medical coding suits you, or which batch makes sense? That's exactly what we're here for. Reach out and we'll give you honest guidance based on your background and goals — not a sales pitch. Sometimes one good conversation is all it takes to know your next move.
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
