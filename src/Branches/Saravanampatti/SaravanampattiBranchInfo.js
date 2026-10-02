import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Laptop, Phone } from "lucide-react";
import Reveal from "../Theni/Reveal";

const MAP_SRC =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent("Door No-171/2A, 1st Floor, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035") +
  "&z=15&output=embed";

const SaravanampattiBranchInfo = () => {
  return (
    <section className="saravanampatti-section" id="saravanampatti-branch">
      <div className="saravanampatti-wrap">
        <Reveal className="saravanampatti-center">
          <span className="saravanampatti-eyebrow">Visit Us</span>
          <h2>ThoughtFlows Medical Coding Academy – Saravanampatti Branch</h2>
          <p>
            ThoughtFlows Medical Coding Academy in Saravanampatti provides a local option for learners who prefer
            classroom training, while online learning is also available.
          </p>
        </Reveal>

        <div className="saravanampatti-branch">
          <div className="saravanampatti-branch-info">
            <Reveal x={-30} y={0}>
              <div className="saravanampatti-card">
                <div className="saravanampatti-icon"><MapPin size={24} /></div>
                <div>
                  <h3>Address</h3>
                  <address style={{ margin: 0, color: "#334155", lineHeight: 1.7, fontStyle: "normal" }}>
                    Door No-171/2A, 1st Floor,<br />
                    Sathy Rd, Saravanampatti,<br />
                    Coimbatore, Tamil Nadu – 641035
                  </address>
                </div>
              </div>
            </Reveal>

            <Reveal x={-30} y={0} delay={0.1}>
              <div className="saravanampatti-card">
                <div className="saravanampatti-icon"><Phone size={24} /></div>
                <div>
                  <h3>Contact &amp; Admissions</h3>
                  <p>Phone: +91 93845 76852</p>
                  <p>Email: thoughtflowsinfo@gmail.com</p>
                </div>
              </div>
            </Reveal>

            <Reveal x={-30} y={0} delay={0.2}>
              <div className="saravanampatti-card">
                <div className="saravanampatti-icon"><Laptop size={24} /></div>
                <div>
                  <h3>Training Modes</h3>
                  <p>Classroom &amp; Live Online Training</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal x={30} y={0} className="saravanampatti-map">
            <iframe
              title="ThoughtFlows Medical Coding Academy Saravanampatti location"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>

        <Reveal className="saravanampatti-cta">
          <h2>Start Your Medical Coding Journey</h2>
          <p>
            ThoughtFlows helps prospective medical coders in Saravanampatti build the skills and preparation they
            need to take the CPC exam through our courses.
          </p>
          <p>
            We know that you are a busy person. Therefore, we've made our course available both online and in the classroom.
            You will also find workshops and assessments to help you prepare for the CPC exam, along with placement
            assistance after completion of your training.
          </p>
          <p style={{ fontWeight: 600 }}>
            Contact ThoughtFlows for more information.
          </p>

          <div style={{ marginTop: 24 }}>
            <Link to="/contact" className="saravanampatti-btn light">
              Book a Free Demo →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SaravanampattiBranchInfo;
