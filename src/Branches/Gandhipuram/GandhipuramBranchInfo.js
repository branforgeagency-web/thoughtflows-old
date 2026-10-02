import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Laptop, Clock, Phone, Mail } from "lucide-react";
import Reveal from "../Theni/Reveal";

const MAP_SRC =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent("Jay Enclave, 1084, 3rd St, Cross Cut Road, Gandhipuram, Coimbatore, Tamil Nadu 641012") +
  "&z=15&output=embed";

const GandhipuramBranchInfo = () => {
  return (
    <section className="gandhipuram-section" id="gandhipuram-branch">
      <div className="gandhipuram-wrap">
        <Reveal className="gandhipuram-center">
          <span className="gandhipuram-eyebrow">Visit Us</span>
          <h2>ThoughtFlows Medical Coding Academy – Gandhipuram Branch</h2>
          <p>
            ThoughtFlows Medical Coding Academy in Gandhipuram provides a local option for learners who
            prefer classroom training, while online learning is also available.
          </p>
        </Reveal>

        <div className="gandhipuram-branch">
          <div className="gandhipuram-branch-info">
            <Reveal x={-30} y={0}>
              <div className="gandhipuram-card">
                <div className="gandhipuram-icon"><MapPin size={24} /></div>
                <div>
                  <h3>Address</h3>
                  <address style={{ margin: 0, color: "#334155", lineHeight: 1.7, fontStyle: "normal" }}>
                    Jay Enclave, No.1084, 3rd Street,<br />
                    Cross Cut Road, Gandhipuram,<br />
                    Coimbatore, Tamil Nadu – 641012
                  </address>
                </div>
              </div>
            </Reveal>

            <Reveal x={-30} y={0} delay={0.1}>
              <div className="gandhipuram-card">
                <div className="gandhipuram-icon"><Phone size={24} /></div>
                <div>
                  <h3>Contact &amp; Admissions</h3>
                  <p>Phone: +91 93845 76852</p>
                  <p>Email: thoughtflowsinfo@gmail.com</p>
                </div>
              </div>
            </Reveal>

            <Reveal x={-30} y={0} delay={0.2}>
              <div className="gandhipuram-card">
                <div className="gandhipuram-icon"><Laptop size={24} /></div>
                <div>
                  <h3>Training Modes</h3>
                  <p>Classroom &amp; Live Online Training</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal x={30} y={0} className="gandhipuram-map">
            <iframe
              title="ThoughtFlows Medical Coding Academy Gandhipuram location"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>

        <Reveal className="gandhipuram-cta">
          <h2>Start Your Medical Coding Career With ThoughtFlows</h2>
          <p>
            Looking for a structured Medical Coding Academy in Gandhipuram? ThoughtFlows’s medical fundamentals,
            coding and CPC exam prep training is right for you!
          </p>
          <p>
            ThoughtFlows knows different students learn in different ways. It offers different learning formats to
            accommodate students needs. Formats include learning in a classroom and online. The Medical Coding
            Training in Gandhipuram provides students the required skills to pursue a career as a medical coder
            and aids students in the job search.
          </p>
          <p style={{ fontWeight: 600 }}>
            If you are interested in ThoughtFlows training in Gandhipuram and have more questions, feel free to reach out to us!
          </p>

          <div style={{ marginTop: 24 }}>
            <Link to="/contact" className="gandhipuram-btn light">
              Book a Free Demo →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default GandhipuramBranchInfo;
