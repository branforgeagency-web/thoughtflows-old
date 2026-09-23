import React from "react";
import labi from "../../images/Branches/online/lab.jpg";
import studentsImg from "../../images/Branches/online/Students.jpg";

function PuneAbout() {
  return (
    <>
      <div className="trivandrum-abt">
        <h4 style={{ color: "#21A7D0", textAlign: "center" }}>Why Choose</h4>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          ThoughtFlows Medical Coding Academy in Pune?
        </h2>
        <div className="trivandrum-abt-1">
          <div>
            <p style={{ fontSize: "18px", textAlign: "justify" }}>
              As a major hub for healthcare technology, life sciences, and clinical research, Pune offers immense opportunities for certified medical coders. ThoughtFlows Medical Coding Academy brings its nationally recognized, outcome-driven training program to Pune. Designed for science, pharmacy, and nursing graduates, our curriculum combines in-depth clinical terminology with real-time billing audits and international AAPC certification mastery.
            </p>
          </div>
          <img
            src={studentsImg}
            style={{ width: "320px", maxHeight: "250px", objectFit: "cover", borderRadius: "12px" }}
            alt="Pune Medical Coding Academy Students"
          />
        </div>
      </div>

      <div style={{ padding: "60px 20px 70px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h4
              style={{
                color: "#21A7D0",
                fontWeight: 600,
                fontSize: "16px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "8px"
              }}
            >
              Campus Facilities & Infrastructure
            </h4>
            <h2
              style={{
                fontSize: "clamp(24px, 3.2vw, 34px)",
                fontWeight: 700,
                color: "#1e293b",
                marginBottom: "16px",
                lineHeight: "1.3"
              }}
            >
              Modern Learning Infrastructure in the Oxford of the East
            </h2>
            <p
              style={{
                maxWidth: "880px",
                margin: "0 auto",
                fontSize: "16px",
                lineHeight: "1.7",
                color: "#4b5563",
                textAlign: "center"
              }}
            >
              Our Pune center is engineered for hands-on, interactive learning. Equipped with dedicated computer labs, authentic electronic health records (EHR) practice platforms, and comprehensive ICD-10-CM, CPT, and HCPCS coding resources, students gain the exact experience needed to hit the ground running from their first day on the job.
            </p>
          </div>

          {/* Infrastructure Card (Side-by-Side on desktop, stacked on mobile) */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
              border: "1px solid #e2e8f0",
              alignItems: "stretch"
            }}
          >
            {/* Left Column: Classroom/Lab Photo */}
            <div
              style={{
                flex: "1 1 440px",
                minHeight: "360px",
                maxHeight: "600px",
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#f1f5f9"
              }}
            >
              <img
                src={labi}
                alt="Pune Practical Classroom & Lab Infrastructure"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>

            {/* Right Column: Curriculum & Trainer Highlights */}
            <div
              style={{
                flex: "1 1 480px",
                backgroundColor: "#9B5DE6",
                color: "#ffffff",
                padding: "clamp(30px, 4vw, 45px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <div style={{ marginBottom: "26px" }}>
                <h3
                  style={{
                    fontSize: "21px",
                    fontWeight: 700,
                    marginBottom: "8px",
                    color: "#ffffff"
                  }}
                >
                  Industry-Vetted Comprehensive Syllabus
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.65",
                    color: "rgba(255, 255, 255, 0.92)",
                    margin: 0,
                    textAlign: "justify"
                  }}
                >
                  From medical terminology, anatomy, and pathophysiology to surgical modifiers, evaluation & management (E/M) guidelines, anesthesia, pathology, and inpatient DRG coding, our syllabus leaves no knowledge gap unfilled.
                </p>
              </div>

              <div style={{ marginBottom: "26px" }}>
                <h3
                  style={{
                    fontSize: "21px",
                    fontWeight: 700,
                    marginBottom: "8px",
                    color: "#ffffff"
                  }}
                >
                  Master Trainers with 12+ Years Experience
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.65",
                    color: "rgba(255, 255, 255, 0.92)",
                    margin: 0,
                    textAlign: "justify"
                  }}
                >
                  Gain insights directly from AAPC & AHIMA certified corporate trainers. With individual doubt clearance, weekly evaluations, and timed examination simulations, we make complex coding concepts intuitive and straightforward.
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "21px",
                    fontWeight: 700,
                    marginBottom: "8px",
                    color: "#ffffff"
                  }}
                >
                  Direct Ties with Healthcare IT & RCM Giants in Pune
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.65",
                    color: "rgba(255, 255, 255, 0.92)",
                    margin: 0,
                    textAlign: "justify"
                  }}
                >
                  Pune hosts leading healthcare IT and revenue cycle management firms. Our corporate tie-ups give our trainees direct placement access to top companies including Omega Healthcare, Episource, Access Healthcare, Optum, Cognizant, and AGS Health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PuneAbout;
