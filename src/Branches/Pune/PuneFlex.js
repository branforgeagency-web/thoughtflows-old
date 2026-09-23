import React from "react";
import bg from "../../images/Branches/online/home-8-bg.jpg";

function PuneFlex() {
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
        }}
      >
        <h2 style={{ textAlign: "center" }}>Customized Batch Timings for Pune Learners</h2>
        <p
          style={{
            textAlign: "center",
            fontWeight: "800px",
            marginTop: "30px",
            lineHeight: "28px",
          }}
        >
          Balancing education, current work, or university classes? We offer highly flexible learning schedules across our Pune campus:
        </p>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            textAlign: "center",
            fontWeight: "bold",
            marginTop: "15px",
            lineHeight: "28px",
          }}
        >
          <li>Weekday Morning Batches — Intensive full-time preparation for graduates</li>
          <li>Weekday Evening Batches — Convenient timing for employed professionals</li>
          <li>Weekend Special Batches — Comprehensive Saturday & Sunday workshops</li>
        </ul>
        <p
          style={{
            textAlign: "center",
            fontWeight: "800px",
            marginTop: "15px",
            lineHeight: "28px",
          }}
        >
          Avail flexible zero-interest EMI options, full lifetime access to placement portal, and free revision sessions until certification.
        </p>
      </div>
    </>
  );
}

export default PuneFlex;
