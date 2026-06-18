import React from "react";
import labi from "../../images/Branches/online/hydera1.jpg";

function HyderabadAbout() {
  return (
    <>
      <div className="trivandrum-abt">
        <h4 style={{ color: "#21A7D0", textAlign: "center" }}>Why Choose</h4>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Our Institute in Dilsukhnagar?
        </h2>
        <div className="trivandrum-abt-1">
          <div>
            <p style={{ fontSize: "18px", textAlign: "justify" }}>
              When it comes to medical coding training in Dilsukhnagar, we focus on what gets you hired — not just what sounds good. Our curriculum spans ICD-10-CM, CPT, and HCPCS Level II, taught by working coders. With small batches, fair fees, EMI options, flexible timings, and a dedicated placement team, everything we do is built around one goal: your success.
            </p>
          </div>
          <img src={labi} style={{ width: "250px" }} alt="hyderabadAbout" />
        </div>
      </div>

      <div className="flexitem hyderabad-flex">
        <div className="f-item-2">
          <img src={labi} alt='cbe1About' className='cbe1About' />
        </div>
        <div className="f-item-1">
          <h2>Explore a Curriculum That Covers It All</h2>
          <p style={{ textAlign: "justify" }}>
            Our medical coding training in Dilsukhnagar is built to give you the complete skill set, not scattered bits. You'll work through the core code sets — ICD-10-CM, CPT, and HCPCS Level II — alongside coding guidelines, clinical documentation, and the reimbursement cycle. Step by step, you move from understanding how codes work to assigning them accurately in real scenarios, so you finish genuinely ready for the job.
          </p >
          <h2 style={{ marginTop: "45px" }}>Learn From People Who've Actually Coded</h2>
          <p style={{ textAlign: "justify" }}>
            Anyone can read out a syllabus — far fewer can tell you how coding really works under deadline pressure. Our trainers are experienced medical coding professionals who've spent years in live coding roles. They teach from real cases, point out the mistakes worth avoiding, and guide you through the judgement calls textbooks skip — so you graduate with practical instinct, not just theory.
          </p>
          <h2 style={{ marginTop: "45px" }}>A Practical Setup That Helps You Learn Faster</h2>
          <p style={{ textAlign: "justify" }}>
            Coding is a skill you build by doing, not just watching — so our medical coding institute in Dilsukhnagar is set up for exactly that. You'll work in digital classrooms with real coding software and the latest ICD-10, CPT, and HCPCS manuals close at hand, in small batches where your questions actually get answered. It's a calm, focused space designed to help you practise more and learn faster.
          </p>
        </div>
      </div>
    </>
  );
}

export default HyderabadAbout;
