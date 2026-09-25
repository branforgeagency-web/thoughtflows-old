import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, ClipboardCheck, FileText, Award, UserCheck, Briefcase, MapPin, Laptop, Clock } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  { icon: BookOpen, text: "Learn Medical Coding" },
  { icon: ClipboardCheck, text: "Practice Coding" },
  { icon: FileText, text: "Prepare for the Certification Test" },
  { icon: Award, text: "Take the Certification Test" },
  { icon: UserCheck, text: "Prepare your Resume and Interview Skills" },
  { icon: Briefcase, text: "Find a job!" },
];

const MAP_SRC =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent("5A/22, Forest Road, Shivaji Nagar, NRT Nagar, Theni, Tamil Nadu 625531") +
  "&z=15&output=embed";

const TheniBranchInfo = () => {
  return (
    <>
      <section className="theni-section">
        <div className="theni-wrap">
          <Reveal className="theni-center">
            <span className="theni-eyebrow">Your Roadmap</span>
            <h2>What Happens After Medical Coding Training?</h2>
            <p>In the career preparation process, training is just the beginning. A typical process looks like:</p>
          </Reveal>
          <ol className="theni-steps">
            {steps.map(({ icon: Icon, text }, i) => (
              <Reveal as="li" key={text} delay={i * 0.12}>
                <div className="num"><Icon size={24} /></div>
                {text}
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <p style={{ textAlign: "center" }}>
              It is a good idea to practice the skills and allow the fundamentals to strengthen before
              looking for a job.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="theni-section alt" id="theni-branch">
        <div className="theni-wrap">
          <Reveal className="theni-center">
            <span className="theni-eyebrow">Visit Us</span>
            <h2>ThoughtFlows Medical Coding Academy – Theni Branch</h2>
            <p>
              ThoughtFlows Medical Coding Academy in Theni provides a local option for learners who
              prefer classroom training, while online learning is also available.
            </p>
          </Reveal>
          <div className="theni-branch">
            <div className="theni-branch-info">
              <Reveal x={-30} y={0}>
                <div className="theni-card">
                  <div className="theni-icon"><MapPin size={24} /></div>
                  <div>
                    <h3>Address</h3>
                    <address style={{ margin: 0, color: "#334155", lineHeight: 1.7 }}>
                      5A/22, Forest Road, Shivaji Nagar,<br />
                      NRT Nagar, Theni, Tamil Nadu – 625531
                    </address>
                  </div>
                </div>
              </Reveal>
              <Reveal x={-30} y={0} delay={0.1}>
                <div className="theni-card">
                  <div className="theni-icon"><Laptop size={24} /></div>
                  <div>
                    <h3>Training Modes</h3>
                    <p>Online &amp; Offline</p>
                  </div>
                </div>
              </Reveal>
              <Reveal x={-30} y={0} delay={0.2}>
                <div className="theni-card">
                  <div className="theni-icon"><Clock size={24} /></div>
                  <div>
                    <h3>Batch Timings</h3>
                    <p>10:00 AM – 12:30 PM</p>
                    <p>4:00 PM – 6:00 PM</p>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal x={30} y={0} className="theni-map">
              <iframe
                title="ThoughtFlows Medical Coding Academy Theni location"
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
          </div>

          <Reveal className="theni-cta">
            <h2>Start Your Medical Coding Journey with ThoughtFlows</h2>
            <p>
              Ready to start a medical coding course in Theni? Contact ThoughtFlows Medical Coding
              Academy to check the current batch availability, training mode and admission details.
            </p>
            <Link to="/contact" className="theni-btn light" style={{ position: "relative", marginTop: 14 }}>
              Enquire Now →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default TheniBranchInfo;
