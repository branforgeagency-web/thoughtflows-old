import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Laptop, CheckCircle2, BookOpen, MapPin, ShieldCheck, Building2, ArrowRight } from "lucide-react";
import { mediaUrl } from '../../config/media';
import "../CoimbatoreBanner.css";

const heroImg = mediaUrl("images/Interiors/gvm/gvm-reception-corridor.jpg");
const card1Img = mediaUrl("images/Interiors/gvm/gvm-training-classroom.jpg");
const card2Img = mediaUrl("images/Interiors/gvm/gvm-workstation-pods-active.jpg");
const card3Img = mediaUrl("images/Interiors/gvm/gvm-pergola-study-cubicles.jpg");
const card4Img = mediaUrl("images/Interiors/gvm/gvm-bunker-lounge.jpg");

const GandhipuramBanner = () => {
  return (
    <>
      <section className="cbe-lux-hero">
        <div className="cbe-lux-bg-media">
          <img src={heroImg} alt="ThoughtFlows Medical Coding Academy Gandhipuram Interior" />
        </div>
        <div className="cbe-lux-curve-accent" aria-hidden="true" />

        <div className="cbe-lux-container">
          <motion.div
            className="cbe-lux-copy"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="cbe-lux-eyebrow">
              <MapPin size={13} /> Coimbatore – Gandhipuram Branch
            </span>

            <h1 className="cbe-lux-title">
              Medical Coding Academy in{" "}
              <span className="cbe-lux-accent">Gandhipuram</span>
              <span className="cbe-lux-sub">Learn Practical Skills &amp; Prepare for Your Career</span>
            </h1>

            <div className="cbe-lux-actions">
              <Link to="/contact" className="cbe-lux-btn primary">Book a Free Demo →</Link>
              <a href="#gandhipuram-branch" className="cbe-lux-btn ghost"><MapPin size={15} /> Visit Branch</a>
            </div>

            <div className="cbe-lux-tags">
              <span><BookOpen size={15} /> Practical Training</span>
              <span><Award size={15} /> CPC Preparation</span>
              <span><Laptop size={15} /> Online &amp; Classroom Classes</span>
              <span><CheckCircle2 size={15} /> Placement Assistance</span>
            </div>

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
        </div>
      </section>

      <section className="cbe-lux-after-banner">
        <div className="cbe-lux-container">
          <div className="cbe-lux-strip-heading" style={{ marginTop: 0 }}>
            <span className="cbe-lux-strip-line" />
            <span>Our Campus</span>
            <span className="cbe-lux-strip-line" />
          </div>

          <motion.div
            className="cbe-lux-strip"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="cbe-lux-strip-card">
              <img src={card1Img} alt="Gandhipuram Modern Classrooms" />
              <span className="cbe-lux-strip-label"><MapPin size={13} /> Modern Classrooms</span>
            </div>
            <div className="cbe-lux-strip-card">
              <img src={card2Img} alt="Gandhipuram Workstation Pods" />
              <span className="cbe-lux-strip-label"><MapPin size={13} /> Workstation Pods</span>
            </div>
            <div className="cbe-lux-strip-card">
              <img src={card3Img} alt="Gandhipuram Dedicated Learning Space" />
              <span className="cbe-lux-strip-label"><BookOpen size={13} /> Dedicated Learning Space</span>
            </div>
            <div className="cbe-lux-strip-card">
              <img src={card4Img} alt="Gandhipuram Student Lounge" />
              <span className="cbe-lux-strip-label"><Building2 size={13} /> 3+ Branches</span>
            </div>
          </motion.div>

          <div className="cbe-lux-footer-bar">
            <div className="cbe-lux-trust-items">
              <span className="cbe-lux-trust-item"><MapPin size={17} /> Gandhipuram, Coimbatore</span>
              <span className="cbe-lux-trust-item"><Building2 size={17} /> 35,000+ Students Trained</span>
              <span className="cbe-lux-trust-item"><ShieldCheck size={17} /> 30,000+ Placements · 49+ Courses</span>
            </div>
            <Link to="/medical-coding-training-coimbatore" className="cbe-lux-explore-btn">
              Explore All Branches <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default GandhipuramBanner;
