import React from "react";
import bg from "../../images/Branches/online/home-8-bg.jpg";

function VizagFlex() {
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
          height: "", 
        }}
      >
        <h2 style={{ textAlign: "center"}}>Flexible Learning Options in Vizag</h2>
        <p style={{ textAlign:"center", fontWeight:"800px", marginTop:"30px", lineHeight:"28px"}}>
          Understanding the diverse needs of our students in Vizag, we offer 
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

export default VizagFlex;
