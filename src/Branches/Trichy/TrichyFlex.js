import React from "react";
import bg from "../../images/Branches/online/home-8-bg.jpg";

function TrichyFlex() {
  return (
    <>
      <div
        className="hyder-flex"
        style={{
          background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "auto", 
          padding: "60px 20px",
        }}
      >
        <h2 style={{ 
          textAlign: "center",
          fontSize: 'clamp(28px, 4vw, 36px)',
          fontWeight: '700',
          color: '#097D8A',
          marginBottom: '30px'
        }}>
          Flexible Learning Options in Trichy
        </h2>
        <p style={{ 
          textAlign: "center", 
          fontWeight: "500", 
          marginTop: "30px", 
          lineHeight: "28px",
          fontSize: 'clamp(16px, 2.5vw, 18px)',
          maxWidth: '900px',
          margin: '0 auto',
          color: '#333'
        }}>
          Understanding the diverse needs of our students in Trichy, we offer 
          multiple learning formats to fit your schedule. Choose from morning batches 
          (9 AM - 12 PM), afternoon batches (2 PM - 5 PM), evening batches (6 PM - 9 PM), 
          or weekend intensive programs. We also provide online learning options for 
          working professionals. Our flexible approach ensures that quality medical 
          coding education is accessible to everyone, regardless of their current 
          commitments or schedule constraints.
        </p>
      </div>
    </>
  );
}

export default TrichyFlex;
