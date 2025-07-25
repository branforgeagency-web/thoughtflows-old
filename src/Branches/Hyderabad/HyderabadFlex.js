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
        <h2 style={{ textAlign: "center"}}>Flexible Batch Timings</h2>
        <p style={{ textAlign:"center", fontWeight:"800px", marginTop:"30px", lineHeight:"28px"}}>
          We believe that quality education should be accessible to all. Our
          medical coding training program in Hyderabad offers affordable fees
          and flexible batch timings to accommodate the needs of our students.
          We understand that many individuals have work or personal commitments,
          and we strive to provide convenient options that allow them to pursue
          their education without disruptions..
        </p>
      </div>
    </>
  );
}

export default HyderabadFlex;
