import React from "react";
import { Award, Briefcase, FileText, Users, Search, ClipboardCheck } from "lucide-react";
import Reveal from "../Theni/Reveal";
import trainerImg from "../../images/Course Images/CEMC1.jpg";

const GandhipuramCPCPlacement = () => {
  return (
    <>
      <section className="gandhipuram-section">
        <div className="gandhipuram-wrap">
          <Reveal className="gandhipuram-center">
            <span className="gandhipuram-eyebrow">CPC Certification</span>
            <h2>CPC Preparation for Your Certification Goal</h2>
            <p>
              A CPC (Certified Professional Coder) certification is an important step for many individuals
              pursuing a career in medical coding.
            </p>
          </Reveal>

          <div className="gandhipuram-grid">
            <Reveal delay={0}>
              <div className="gandhipuram-card">
                <div className="gandhipuram-icon"><Award size={26} /></div>
                <h3>Structured CPC Training</h3>
                <p>
                  ThoughtFlows offers training for CPC certification. The training includes lessons and coding
                  practices, tests andprep work for the exam.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="gandhipuram-card">
                <div className="gandhipuram-icon"><ClipboardCheck size={26} /></div>
                <h3>Format &amp; Question Types</h3>
                <p>
                  The training provides users with the understanding of the format of the exam and the types of
                  questions that will be asked.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="gandhipuram-card">
                <div className="gandhipuram-icon"><Search size={26} /></div>
                <h3>Review Process &amp; Resources</h3>
                <p>
                  Prior to making a purchase, you have the opportunity to review the schedule of the CPC training,
                  access the study resources and assessments, and become informed about the certification process.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="gandhipuram-section alt">
        <div className="gandhipuram-wrap theni-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <Reveal x={-40} y={0}>
            <span className="gandhipuram-eyebrow">Career Guidance</span>
            <h2>Placement Assistance After Training</h2>
            <p>
              Once you finish your training, you will need the skills to identify and apply for the medical
              coding jobs for which you are training. Luckily, ThoughtFlows has you covered.
            </p>
            <p>
              As a Learner, you may receive placement assistance to prepare your resume, perform mock interviews
              and/or be informed of potential job openings.
            </p>

            <div className="gandhipuram-note">
              <strong>Please Note:</strong> Job placement is not job guarantee. Ultimately, your skills and the
              outcomes of your interviews will affect your employment. Also, your employment is impacted by the
              requirements of the potential employer.
            </div>
          </Reveal>

          <Reveal x={40} y={0} className="gandhipuram-photo">
            <img src={trainerImg} alt="Placement assistance at ThoughtFlows Gandhipuram" loading="lazy" />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default GandhipuramCPCPlacement;
