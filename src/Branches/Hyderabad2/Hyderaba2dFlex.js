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
          We don't think a job, a commute, or responsibilities at home should cost someone a career. So at our Dilsukhnagar center, you pick the timing that works — daytime if you can study full-time, evenings if you're working a job, or weekends if your weekdays are already full. Add fair fees and EMI options, and serious medical coding training stays genuinely within reach, whatever your situation looks like.
        </p>
      </div>
    </>
  );
}

export default HyderabadFlex;
