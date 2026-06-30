import React from "react";
import bg from "../../images/Branches/online/home-8-bg.jpg";

function HyderabadFlex() {
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
        <h2 style={{ textAlign: "center"}}>Batch Timings That Fit Your Life</h2>
        <p style={{ textAlign:"center", fontWeight:"800px", marginTop:"30px", lineHeight:"28px"}}>
          Not everyone can study at the same time, and that shouldn't hold you back from a career in medical coding. Whether you're a fresh graduate, a working professional, or managing other commitments, we have a batch that fits:
        </p>
        <ul style={{ listStyleType: "none", padding: 0, textAlign: "center", fontWeight: "bold", marginTop: "15px", lineHeight: "28px" }}>
          <li>Morning batches — for full-time learners</li>
          <li>Evening batches — for working professionals</li>
          <li>Weekend batches — for busy weekday schedules</li>
        </ul>
        <p style={{ textAlign:"center", fontWeight:"800px", marginTop:"15px", lineHeight:"28px"}}>
          With affordable fees and EMI options, quality training stays within your reach. Just tell us your availability, and we'll help you pick the right batch.
        </p>
      </div>
    </>
  );
}

export default HyderabadFlex;
