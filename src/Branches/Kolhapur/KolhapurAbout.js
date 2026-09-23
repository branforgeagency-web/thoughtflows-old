import React from "react";
import labi from "../../images/Branches/online/hydera1.jpg";
import studentsImg from "../../images/Branches/online/Students.jpg";

function KolhapurAbout() {
  return (
    <>
      <div className="trivandrum-abt">
        <h4 style={{ color: "#21A7D0", textAlign: "center" }}>Why Choose</h4>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Our Institute in Kolhapur?
        </h2>
        <div className="trivandrum-abt-1">
          <div>
            <p style={{ fontSize: "18px", textAlign: "justify" }}>
              Choosing the right training partner defines your trajectory in healthcare. At ThoughtFlows Medical Coding Academy Kolhapur, we are committed to shaping life science graduates, pharma students, and healthcare professionals into highly certified, confident medical coders. With certified AAPC trainers, comprehensive curriculum, live project practice, and dedicated placement support, we help you launch your global healthcare career right from Kolhapur.
            </p>
          </div>
          <img
            src={studentsImg}
            style={{ width: "320px", maxHeight: "250px", objectFit: "cover", borderRadius: "12px" }}
            alt="Kolhapur Campus Facility"
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
              Industry-Standard Training in the Heart of Kolhapur
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
              Our Kolhapur campus is equipped with smart classrooms, advanced medical coding software, and complete reference sets including ICD-10-CM, CPT, and HCPCS manuals. With focused batch sizes and personalized mentoring, you work through real-world patient records, operative reports, and coding audits to build genuine confidence before stepping into interviews.
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
            {/* Left Column: Campus Facility Photo */}
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
                alt="Kolhapur Medical Coding Training & Classrooms"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>

            {/* Right Column: Curriculum & Placement Highlights */}
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
                  Complete Curriculum Covering All Specialities
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
                  Our medical coding syllabus is meticulously designed to provide 360-degree knowledge. From anatomy, physiology, and medical terminology to complex surgical, inpatient, and outpatient coding guidelines, our courses ensure you have both theoretical depth and job-ready practical proficiency.
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
                  AAPC Certified Senior Trainers
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
                  Learn directly from seasoned industry veterans with over 10+ years of active healthcare coding experience. Our mentors provide step-by-step guidance, doubt resolution, and tailored mock exams to make sure you clear certifications like CPC and CCS on your very first try.
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
                  Comprehensive Placement Ecosystem
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
                  We collaborate with over 150+ healthcare IT companies, hospitals, and RCM firms across Maharashtra and India. We provide resume preparation, technical interview drills, and guaranteed interview opportunities until you are successfully placed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KolhapurAbout;
