import React from "react";
import { School, MonitorSmartphone, MapPin, CheckCircle2 } from "lucide-react";
import Reveal from "../Theni/Reveal";
import classroomImg from "../../images/AboutImg/course-02.jpg";
import onlineImg from "../../images/Branches/online/on8.png";

const GandhipuramModes = () => {
  return (
    <section className="gandhipuram-section alt">
      <div className="gandhipuram-wrap">
        <Reveal className="gandhipuram-center">
          <span className="gandhipuram-eyebrow">Flexible Options</span>
          <h2>Classroom or Online Medical Coding Training?</h2>
          <p>
            We understand that students learn and schedule classes in different ways. That's why we offer options.
          </p>
        </Reveal>

        <div className="gandhipuram-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <Reveal x={-30} y={0}>
            <div className="gandhipuram-mode">
              <div className="thumb"><img src={classroomImg} alt="In-person classroom training in Gandhipuram" loading="lazy" /></div>
              <div className="body">
                <div className="gandhipuram-icon"><School size={26} /></div>
                <h3>Medical Coding Classes in Coimbatore</h3>
                <p>
                  Classes at this center are conducted in person. You have the opportunity to learn in a
                  traditional classroom environment and gain firsthand experience in structured learning.
                </p>
                <div className="gandhipuram-address-badge">
                  <MapPin size={18} style={{ display: "inline", marginRight: 6, color: "#097D8A" }} />
                  <strong>Location:</strong> Jay Enclave, No.1084, 3rd Street, Cross Cut Road, Gandhipuram, Coimbatore.
                </div>
                <p>
                  This type of learning and classroom environment, along with the in-person interaction with
                  the facilitator and other learners, may help you achieve your goals.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal x={30} y={0}>
            <div className="gandhipuram-mode">
              <div className="thumb"><img src={onlineImg} alt="Online medical coding training from Gandhipuram" loading="lazy" /></div>
              <div className="body">
                <div className="gandhipuram-icon"><MonitorSmartphone size={26} /></div>
                <h3>Online Medical Coding Training</h3>
                <p>
                  If you find our online courses convenient, it may be because you have other time commitments
                  like school or work and/ or you travel a lot.
                </p>
                <p style={{ marginTop: 12 }}>
                  Many of our online courses are taught in a traditional classroom setting. This means learners
                  can interact with the teacher and other learners, and do classroom activities.
                </p>
                <p style={{ marginTop: 12 }}>
                  Also, you can look into our online medical coding courses, which we offer on a regular basis.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default GandhipuramModes;
