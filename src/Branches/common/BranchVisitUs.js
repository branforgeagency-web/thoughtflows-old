import React from "react";
import { MapPin, Laptop, Phone } from "lucide-react";
import Reveal from "../Theni/Reveal";
import { branchDetails } from "../../data/branchDetails";
import "./BranchVisitUs.css";

/**
 * Shared "Visit Us" section for every branch landing page.
 * Usage: <BranchVisitUs branchKey="trichy" />
 * Address and phone come from src/data/branchDetails.js, so update details there only.
 */
const BranchVisitUs = ({
  branchKey,
  title,
  intro,
  modes = "Classroom & Live Online Training",
}) => {
  const b = branchDetails[branchKey];
  if (!b) return null;

  const heading = title || b.heading || `ThoughtFlows Medical Coding Academy – ${b.displayName}`;
  const description =
    intro ||
    `ThoughtFlows Medical Coding Academy in ${b.name} provides a local option for learners who prefer classroom training, while online learning is also available.`;
  const mapSrc =
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(b.address) +
    "&z=15&output=embed";

  // "072195 57734 / 083904 52121" or "... & ..." -> separate tappable numbers
  const phones = String(b.phone)
    .split(/\s*(?:\/|&)\s*/)
    .filter(Boolean);

  return (
    <section className="tfv-section" id={`${b.key}-visit-us`}>
      <div className="tfv-wrap">
        <Reveal className="tfv-center">
          <span className="tfv-eyebrow">Visit Us</span>
          <h2>{heading}</h2>
          <p>{description}</p>
        </Reveal>

        <div className="tfv-grid">
          <div className="tfv-info">
            <Reveal x={-30} y={0}>
              <div className="tfv-card">
                <div className="tfv-icon"><MapPin size={24} /></div>
                <h3>Address</h3>
                <address>{b.address}</address>
              </div>
            </Reveal>

            <Reveal x={-30} y={0} delay={0.1}>
              <div className="tfv-card">
                <div className="tfv-icon"><Phone size={24} /></div>
                <h3>Contact &amp; Admissions</h3>
                <p>
                  Phone:{" "}
                  {phones.map((p, i) => (
                    <React.Fragment key={p}>
                      {i > 0 && " / "}
                      <a href={`tel:${p.replace(/\s+/g, "").replace(/^0/, "+91")}`}>{p}</a>
                    </React.Fragment>
                  ))}
                </p>
                <p>
                  Email: <a href={`mailto:${b.email}`}>{b.email}</a>
                </p>
              </div>
            </Reveal>

            <Reveal x={-30} y={0} delay={0.2}>
              <div className="tfv-card">
                <div className="tfv-icon"><Laptop size={24} /></div>
                <h3>Training Modes</h3>
                <p>{modes}</p>
              </div>
            </Reveal>
          </div>

          <Reveal x={30} y={0} className="tfv-map">
            <iframe
              title={`ThoughtFlows Medical Coding Academy ${b.name} location`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BranchVisitUs;
