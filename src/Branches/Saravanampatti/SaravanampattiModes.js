import React from "react";
import { School, MonitorSmartphone, MapPin } from "lucide-react";
import Reveal from "../Theni/Reveal";
import classroomImg from "../../images/AboutImg/course-02.jpg";
import onlineImg from "../../images/Branches/online/on8.png";

const SaravanampattiModes = () => {
  return (
    <section className="saravanampatti-section alt">
      <div className="saravanampatti-wrap">
        <Reveal className="saravanampatti-center">
          <span className="saravanampatti-eyebrow">Flexible Options</span>
          <h2>Classroom and Online Learning Options</h2>
          <p>
            The way individuals learn varies. Some individuals prefer to learn in a traditional classroom setting,
            while others prefer to learn remotely. At ThoughtFlows, we allow our students the opportunity to learn via
            the medium of their preference.
          </p>
        </Reveal>

        <div className="saravanampatti-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <Reveal x={-30} y={0}>
            <div className="saravanampatti-mode">
              <div className="thumb"><img src={classroomImg} alt="Classroom training at Saravanampatti" loading="lazy" /></div>
              <div className="body">
                <div className="saravanampatti-icon"><School size={26} /></div>
                <h3>Medical Coding Classes</h3>
                <p>
                  We offer Medical Coding classes at Saravanampatti where students are allowed to learn in a traditional
                  classroom setting. Learning to code in a traditional classroom allows students the opportunity to gain a
                  deeper understanding of coding, and provide and receive immediate feedback about their coding from an instructor,
                  as well as from their classmates.
                </p>
                <p style={{ marginTop: 12 }}>
                  Additionally, students at our Saravanampatti campus have the opportunity to gain additional coding practice
                  in a supervised setting.
                </p>
                <div className="saravanampatti-address-badge">
                  <MapPin size={18} style={{ display: "inline", marginRight: 6, color: "#097D8A" }} />
                  <strong>Address:</strong> Door No-171/2A, 1st Floor, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu – 641035
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal x={30} y={0}>
            <div className="saravanampatti-mode">
              <div className="thumb"><img src={onlineImg} alt="Online medical coding training at Saravanampatti" loading="lazy" /></div>
              <div className="body">
                <div className="saravanampatti-icon"><MonitorSmartphone size={26} /></div>
                <h3>Online &amp; Remote Learning</h3>
                <p>
                  Medical Coding can be a practical, remote, and self-paced, classroom learning opportunity for individuals
                  who prefer to learn from the comfort of their own home, or for individuals who are located outside of the
                  Saravanampatti area.
                </p>
                <p style={{ marginTop: 14 }}>
                  Finally, for individuals who are located outside of the Saravanampatti area, or for individuals who are
                  unable to learn in a structured and supervised classroom environment, we offer Medical Coding classes where
                  they can learn the practical aspects of coding in a structured and remote environment.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SaravanampattiModes;
