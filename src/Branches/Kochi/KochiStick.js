import React from "react";
import { mediaUrl } from "../../config/media";
import { LuxSection, LuxSplit, LuxHead } from "../common/LuxSections";

function KochiStick() {
  return (
    <LuxSection tone="light">
      <LuxSplit
        image={mediaUrl("images/Interiors/kochi/kochi-interior-06.jpg")}
        imageAlt="ThoughtFlows Kochi campus lobby and learning spaces"
        eyebrow="Certification & Careers"
        title="CPC Certification Guidance &"
        accent="Placement Support"
      >
        <div className="lux-stack">
          <div className="lux-stack-item">
            <h3>CPC Certification Guidance</h3>
            <p>
              Professional certification is an important milestone for many aspiring Medical Coders. Our CPC certification guidance is designed to help students prepare effectively through structured learning, coding practice sessions, mock assessments, exam preparation support, and mentor guidance. Certification preparation helps learners strengthen their coding knowledge and improve their confidence as they pursue career opportunities in the Medical Coding field.
            </p>
          </div>
          <div className="lux-stack-item">
            <h3>Placement Support to Help You Start Your Career</h3>
            <p>
              For many students, enrolling in a Medical Coding course is ultimately about building a successful career. Along with training, ThoughtFlows provides placement support designed to help students prepare for employment opportunities within the healthcare industry. Our support includes:
            </p>
            <ul style={{ margin: "12px 0 12px 20px", lineHeight: 1.8, color: "#5b6b7b", fontSize: 15.5 }}>
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
      </LuxSplit>
    </LuxSection>
  );
}

export default KochiStick;
