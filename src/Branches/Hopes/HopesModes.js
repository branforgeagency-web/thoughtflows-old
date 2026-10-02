import React from "react";
import { School, MonitorSmartphone, MapPin } from "lucide-react";
import Reveal from "../Theni/Reveal";
import classroomImg from "../../images/AboutImg/course-02.jpg";
import onlineImg from "../../images/Branches/online/on8.png";

const HopesModes = () => {
  return (
    <section className="hopes-section alt">
      <div className="hopes-wrap">
        <Reveal className="hopes-center">
          <span className="hopes-eyebrow">Flexible Delivery</span>
          <h2>Classroom and Online Learning</h2>
          <p>
            Some learners prefer learning in a classroom environment and interacting with their facilitator,
            while others enjoy the independence that online learning offers them. ThoughtFlows is adaptable to both.
          </p>
        </Reveal>

        <div className="hopes-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <Reveal x={-30} y={0}>
            <div className="hopes-mode">
              <div className="thumb"><img src={classroomImg} alt="Classroom learning at Hopes" loading="lazy" /></div>
              <div className="body">
                <div className="hopes-icon"><School size={26} /></div>
                <h3>Classroom Learning</h3>
                <p>
                  ThoughtFlows works with Hopes, a partner institution, to offer their Medical Coding Workshops in a
                  classroom environment. Participants in these workshops have the opportunity to undertake practical
                  sessions, involving the coding of various medical procedures, under the guidance of the Trainers.
                </p>
                <p style={{ marginTop: 12 }}>
                  Additionally, Hopes has a practice room, which further extends the opportunity for participants to
                  work through Coding Concepts and practices, in an instructed environment.
                </p>
                <div className="hopes-address-badge">
                  <MapPin size={18} style={{ display: "inline", marginRight: 6, color: "#097D8A" }} />
                  <strong>Address:</strong> Door No.62 E/F, 1st Floor South Wing, Lalitha Towers Gandhi Street, Avinashi Rd, Hopes, Peelamedu, Coimbatore, Tamil Nadu 641004
                </div>
                <p>
                  For learners searching for a Medical Coding Class in Hopes, these classroom sessions provide an
                  opportunity to learn directly with trainers and clarify doubts during the training.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal x={30} y={0}>
            <div className="hopes-mode">
              <div className="thumb"><img src={onlineImg} alt="Online medical coding workshop by Hopes" loading="lazy" /></div>
              <div className="body">
                <div className="hopes-icon"><MonitorSmartphone size={26} /></div>
                <h3>Online Learning</h3>
                <p>
                  A Medical Coding Workshop offered online, by Hopes, is an opportunity for participants to engage in a
                  workshop, without the need to travel to a learning centre. Additionally, it offers an opportunity for
                  participants working in the medical field, to undertake the workshop, in an convenient format.
                </p>
                <p style={{ marginTop: 14 }}>
                  The workshop, offers participants an opportunity to learn Medical Coding Online, if they are unable to
                  attend the Centre on a regular basis. This Medical Coding Online Class in Hopes option provides
                  flexibility for learners who prefer online learning.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HopesModes;
