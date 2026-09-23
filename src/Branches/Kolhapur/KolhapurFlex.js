import React from "react";
import bg from "../../images/Branches/online/home-8-bg.jpg";

function KolhapurFlex() {
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
        <h2 style={{ textAlign: "center" }}>Flexible Batch Schedules in Kolhapur</h2>
        <p
          style={{
            textAlign: "center",
            fontWeight: "800px",
            marginTop: "30px",
            lineHeight: "28px",
          }}
        >
          We understand everyone has different commitments. Whether you are a college final-year student, recent graduate, or working healthcare professional, we offer convenient batch options tailored for your lifestyle:
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
          <li>Morning batches — Ideal for full-time learners and graduates</li>
          <li>Evening batches — Tailored for working professionals</li>
          <li>Weekend batches — Fast-track sessions for busy weekday schedules</li>
        </ul>
        <p
          style={{
            textAlign: "center",
            fontWeight: "800px",
            marginTop: "15px",
            lineHeight: "28px",
          }}
        >
          Enjoy affordable course fees, easy installment options, and comprehensive study material included.
        </p>
      </div>
    </>
  );
}

export default KolhapurFlex;
