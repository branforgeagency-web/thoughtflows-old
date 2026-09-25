import React from "react";
import { CheckCircle2, School, MonitorSmartphone } from "lucide-react";
import Reveal from "./Reveal";
import classroomImg from "../../images/AboutImg/course-02.jpg";
import onlineImg from "../../images/Branches/online/on8.png";

const TheniModes = () => {
  return (
    <section className="theni-section alt">
      <div className="theni-wrap">
        <Reveal className="theni-center">
          <span className="theni-eyebrow">Learning Modes</span>
          <h2>Classroom &amp; Online Medical Coding Classes in Theni</h2>
          <p>
            ThoughtFlows training takes place either virtually or in person, meaning training can
            happen on your schedule.
          </p>
        </Reveal>
        <div className="theni-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <Reveal x={-30} y={0}>
            <div className="theni-mode">
              <div className="thumb"><img src={classroomImg} alt="In-person medical coding classroom training in Theni" loading="lazy" /></div>
              <div className="body">
                <div className="theni-icon"><School size={26} /></div>
                <h3>In-Person Training</h3>
                <p>This type of training works best for students who prefer training that includes:</p>
                <ul className="theni-list">
                  {["In-person engagement with the trainer", "In-person clarification of doubts", "A fixed schedule for learning", "On-site training for coding exercises"].map((t) => (
                    <li key={t}><CheckCircle2 size={18} /> {t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal x={30} y={0}>
            <div className="theni-mode">
              <div className="thumb"><img src={onlineImg} alt="Online medical coding classes from Theni" loading="lazy" /></div>
              <div className="body">
                <div className="theni-icon"><MonitorSmartphone size={26} /></div>
                <h3>Online Medical Coding Training</h3>
                <p>
                  The online program provides a convenient way to study for students who work. This
                  program gives students structured sessions and the opportunity to work closely with
                  the teacher to learn the materials, perform lab activities, and get answers to their
                  questions.
                </p>
                <p style={{ marginTop: 12 }}>
                  ThoughtFlows has online medical coding classes. Contact us to find out when the next
                  session is and how it is taught.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default TheniModes;
