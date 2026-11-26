import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Laptop, CheckCircle2, BookOpen, MapPin, Users, Star, Clock } from "lucide-react";
import { mediaUrl } from '../../config/media';
import "../CoimbatoreBanner.css";

const heroImg = mediaUrl("images/Interiors/gvm/gvm-reception-corridor.jpg");

const float = (delay = 0) => ({
  animate: { y: [0, -8, 0] },
  transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay },
});

const GandhipuramBanner = () => {
  return (
    <section className="cbe-lux-hero">
      <div className="cbe-lux-pattern" />
      <div className="cbe-lux-glow cbe-lux-glow-1" />
      <div className="cbe-lux-glow cbe-lux-glow-2" />

      <div className="cbe-lux-inner">
        {/* Left — Content */}
        <motion.div
          className="cbe-lux-copy"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="cbe-lux-accent-rule" />

          <motion.span
            className="cbe-lux-eyebrow"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <MapPin size={13} /> Gandhipuram Branch · Now Enrolling
          </motion.span>

          <h1 className="cbe-lux-title">
            Medical Coding Academy in{" "}
            <span className="cbe-lux-accent">Gandhipuram</span>
            <span className="cbe-lux-sub">Learn Practical Skills &amp; Prepare for Your Career</span>
          </h1>

          <p className="cbe-lux-desc">
            ThoughtFlows Medical Coding Academy in Gandhipuram offers structured medical coding training
            for graduates, freshers, job seekers, and learners from different educational backgrounds.
          </p>
          <p className="cbe-lux-desc">
            The program covers the knowledge and practical skills needed to understand medical records, assign
            codes, follow coding guidelines, and prepare for certification. Training also includes assessments,
            CPC preparation, and placement assistance.
          </p>
          <p className="cbe-lux-desc" style={{ fontWeight: 600 }}>
            Choose classroom learning at the Gandhipuram branch or join live online training based on your schedule and preferred learning style.
          </p>

          {/* Feature pills */}
          <div className="cbe-lux-tags">
            <span><BookOpen size={15} /> Practical Training</span>
            <span><Award size={15} /> CPC Preparation</span>
            <span><Laptop size={15} /> Online &amp; Classroom Classes</span>
            <span><CheckCircle2 size={15} /> Placement Assistance</span>
          </div>

          {/* CTAs */}
          <div className="cbe-lux-actions">
            <Link to="/contact" className="cbe-lux-btn primary">Book a Free Demo →</Link>
            <a href="#gandhipuram-branch" className="cbe-lux-btn ghost"><MapPin size={15} /> Visit Branch</a>
          </div>

          {/* City commute callout */}
          <div className="cbe-lux-callout">
            <span className="cbe-lux-callout-icon">🚌</span>
            <div>
              <strong>Best branch for district commuters</strong>
              <p>
                Walking distance from Central &amp; Town bus stands. Easy access from Tirupur, Pollachi, Mettupalayam and beyond.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right — Signature Architectural Interior Showcase */}
        <motion.div
          className="cbe-lux-showcase"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
        >
          <div className="cbe-lux-frame-wrap">
            <div className="cbe-lux-arch-frame">
              <div className="cbe-lux-photo-box">
                <img
                  src={heroImg}
                  alt="ThoughtFlows Medical Coding Academy Gandhipuram Interior"
                  className="cbe-lux-photo"
                />
                <div className="cbe-lux-photo-sheen" />
                <div className="cbe-lux-loc-pill">
                  <MapPin size={14} /> Cross Cut Road, Gandhipuram
                </div>
              </div>
            </div>

            <motion.div className="cbe-lux-chip cbe-chip-tr" {...float(0)}>
              <span className="cbe-lux-chip-icon"><Award size={16} /></span>
              <div>
                <strong>CPC Preparation</strong>
                <small>AAPC Certified</small>
              </div>
            </motion.div>

            <motion.div className="cbe-lux-chip cbe-chip-ml" {...float(0.8)}>
              <span className="cbe-lux-chip-icon"><Laptop size={16} /></span>
              <div>
                <strong>Classroom + Online</strong>
                <small>Flexible Learning</small>
              </div>
            </motion.div>

            <motion.div className="cbe-lux-chip cbe-chip-bl" {...float(1.4)}>
              <span className="cbe-lux-chip-icon"><CheckCircle2 size={16} /></span>
              <div>
                <strong>Placement Support</strong>
                <small>Career Assistance</small>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Unified Luxury Stats Bar */}
      <motion.div
        className="cbe-lux-stats"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
      >
        <div className="cbe-lux-stat">
          <Users size={20} className="cbe-lux-stat-icon" />
          <div>
            <strong>35,000+</strong>
            <span>Students Trained</span>
          </div>
        </div>
        <div className="cbe-lux-stat-div" />
        <div className="cbe-lux-stat">
          <Award size={20} className="cbe-lux-stat-icon" />
          <div>
            <strong>30,000+</strong>
            <span>Placements</span>
          </div>
        </div>
        <div className="cbe-lux-stat-div" />
        <div className="cbe-lux-stat">
          <Star size={20} className="cbe-lux-stat-icon" />
          <div>
            <strong>49+</strong>
            <span>Courses</span>
          </div>
        </div>
        <div className="cbe-lux-stat-div" />
        <div className="cbe-lux-stat">
          <Clock size={20} className="cbe-lux-stat-icon" />
          <div>
            <strong>14+</strong>
            <span>Branches</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GandhipuramBanner;
