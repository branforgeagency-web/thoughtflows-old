import React from "react";
import micro from "../../images/Branches/online/testtube.png";
import microbg from "../../images/Branches/online/microbg.png";

function KochiStick() {
  return (
    <>
      <div className="stick-k">
        <div className="sticky-kochi">
          <img
            src={micro} alt='micro'
            style={{ marginLeft: "", objectPosition: "right",borderRadius:"10px" }}
          />
        </div>
        <div className="static-trichy" style={{ marginLeft: "100px" }}>
          <div id="static-1" style={{paddingTop:"40px"}}>
            <h2 className="highh">
              CPC Certification Guidance
            </h2>
            <p>
              Professional certification is an important milestone for many aspiring Medical Coders.
            </p>
            <p>
              Our CPC certification guidance is designed to help students prepare effectively through structured learning, coding practice sessions, mock assessments, exam preparation support, and mentor guidance.
            </p>
            <p>
              Certification preparation helps learners strengthen their coding knowledge and improve their confidence as they pursue career opportunities in the Medical Coding field.
            </p>
          </div>
          <div id="static-1">
            <h2 className="highh">
              Placement Support to Help You Start Your Career
            </h2>
            <p>
              For many students, enrolling in a Medical Coding course is ultimately about building a successful career. Along with training, ThoughtFlows provides placement support designed to help students prepare for employment opportunities within the healthcare industry.
            </p>
            <p>Our support includes:</p>
            <ul style={{fontSize: "16px", lineHeight: "26px", marginLeft: "20px"}}>
              <li>Resume Preparation Guidance</li>
              <li>Interview Readiness Sessions</li>
              <li>Industry Awareness Training</li>
              <li>Communication Skill Development</li>
              <li>Career Guidance Support</li>
              <li>Recruitment Opportunity Updates</li>
            </ul>
            <p>
              Our goal is to help students become professionally prepared and confident when pursuing career opportunities.
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default KochiStick;
