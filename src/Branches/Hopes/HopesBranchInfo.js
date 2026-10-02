import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Laptop, Phone } from "lucide-react";
import Reveal from "../Theni/Reveal";

const MAP_SRC =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent("Door No.62 E/F, Lalitha Towers Gandhi Street, Avinashi Rd, Peelamedu, Hopes, Coimbatore, Tamil Nadu 641004") +
  "&z=15&output=embed";

const HopesBranchInfo = () => {
  return (
    <section className="hopes-section" id="hopes-branch">
      <div className="hopes-wrap">
        <Reveal className="hopes-center">
          <span className="hopes-eyebrow">Visit Us</span>
          <h2>ThoughtFlows Medical Coding Academy – Hopes Branch</h2>
          <p>
            ThoughtFlows Medical Coding Academy in Hopes provides a local option for learners who prefer
            classroom training, while online learning is also available.
          </p>
        </Reveal>

        <div className="hopes-branch">
          <div className="hopes-branch-info">
            <Reveal x={-30} y={0}>
              <div className="hopes-card">
                <div className="hopes-icon"><MapPin size={24} /></div>
                <div>
                  <h3>Address</h3>
                  <address style={{ margin: 0, color: "#334155", lineHeight: 1.7, fontStyle: "normal" }}>
                    Door No.62 E/F, 1st Floor South Wing,<br />
                    Lalitha Towers, Gandhi Street,<br />
                    Avinashi Rd, Hopes, Peelamedu,<br />
                    Coimbatore, Tamil Nadu – 641004
                  </address>
                </div>
              </div>
            </Reveal>

            <Reveal x={-30} y={0} delay={0.1}>
              <div className="hopes-card">
                <div className="hopes-icon"><Phone size={24} /></div>
                <div>
                  <h3>Contact &amp; Admissions</h3>
                  <p>Phone: +91 93845 76852</p>
                  <p>Email: thoughtflowsinfo@gmail.com</p>
                </div>
              </div>
            </Reveal>

            <Reveal x={-30} y={0} delay={0.2}>
              <div className="hopes-card">
                <div className="hopes-icon"><Laptop size={24} /></div>
                <div>
                  <h3>Training Modes</h3>
                  <p>Classroom &amp; Live Online Training</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal x={30} y={0} className="hopes-map">
            <iframe
              title="ThoughtFlows Medical Coding Academy Hopes location"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>

        <Reveal className="hopes-cta">
          <h2>Start Your Medical Coding Journey</h2>
          <p>
            If you are looking to learn Medical Coding and need a learning environment to direct you step by step,
            then ThoughtFlows offers a comprehensive course in Medical Fundamentals, various Coding Systems, and other
            related activities and assessments, and prepares you for the CPC exam.
          </p>
          <p>
            According to your convenience and preference, you can choose between learning in a classroom setup or opting for
            the Medical Coding Online Class in Hopes. Other learning aids such as simulated practice, and practice sessions
            and assistance for work placement, enhance the learning process.
          </p>
          <p>
            The Medical Coding Academy in Hopes has trained many people including the unemployed, the newly employed,
            and others who need to develop their Medical Coding skills to be employed in such fields.
          </p>
          <p>
            For more information and to gain knowledge about the various training programs and other offerings, you can request
            for and attend a free demo class.
          </p>
          <p style={{ marginTop: 16, fontWeight: 500, color: "#e2f4f6" }}>
            For those looking for a structured medical coding program in Hopes, ThoughtFlows covers medical fundamentals, coding theory
            and practice, and take and prepare for CPC exams. ThoughtFlows understand that students have different preferences,
            needs and circumstances. Therefore, it offers various formats for the training. The different formats available include
            classroom and online training. The training prepares students for a career in medical coding and provides assistance to secure a job.
          </p>
          <p style={{ fontWeight: 600 }}>
            Students interested in ThoughtFlows training in Hopes are requested to contact us for more information.
          </p>

          <div style={{ marginTop: 24 }}>
            <Link to="/contact" className="hopes-btn light">
              Book a Free Demo →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HopesBranchInfo;
