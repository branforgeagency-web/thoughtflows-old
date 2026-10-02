import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Laptop, CheckCircle2, BookOpen, MapPin } from "lucide-react";
import heroImg from "../../images/Branches/cbe_saravanampatti_campus.jpg";

const float = (delay = 0) => ({
  animate: { y: [0, -12, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
});

const SaravanampattiBanner = () => {
  return (
    <section className="saravanampatti-hero">
      <span className="saravanampatti-wrap saravanampatti-hero-grid">
        <motion.div
          className="saravanampatti-hero-copy"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="saravanampatti-eyebrow">Saravanampatti Branch · Now Enrolling</span>
          <h1>
            Medical Coding Course in <span className="saravanampatti-accent">Saravanampatti</span>
            <span className="sub">Start Your Medical Coding Career with Practical Training</span>
          </h1>
          <p style={{ maxWidth: 620, marginBottom: 12 }}>
            Looking for a Medical Coding Course in Saravanampatti that combines structured learning with practical
            training and career support? ThoughtFlows Medical Coding Academy provides medical coding training for graduates,
            freshers, job seekers, working professionals and candidates exploring a career change.
          </p>
          <p style={{ maxWidth: 620, marginBottom: 20 }}>
            The course covers medical terminology, anatomy and physiology, ICD-10-CM, CPT, HCPCS, modifiers and coding
            guidelines, along with practical exercises, assessments and CPC preparation. Learners can choose classroom
            or online training based on their schedule and learning preferences.
          </p>

          <div className="saravanampatti-hero-tags">
            <span><BookOpen size={16} /> Practical Training</span>
            <span><Award size={16} /> CPC Preparation</span>
            <span><Laptop size={16} /> Classroom &amp; Online Learning</span>
            <span><CheckCircle2 size={16} /> Placement Assistance</span>
          </div>

          <div className="saravanampatti-hero-actions">
            <Link to="/contact" className="saravanampatti-btn">Book a Free Demo →</Link>
            <a href="#saravanampatti-branch" className="saravanampatti-btn ghost"><MapPin size={16} /> Visit Branch</a>
          </div>
        </motion.div>

        <motion.div
          className="saravanampatti-hero-img"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="ring" />
          <img src={heroImg} alt="ThoughtFlows Medical Coding Academy Saravanampatti Campus" />
          <motion.div className="saravanampatti-chip c1" {...float(0)}><Award size={18} /> CPC Preparation</motion.div>
          <motion.div className="saravanampatti-chip c2" {...float(1.2)}><CheckCircle2 size={18} /> Placement Support</motion.div>
          <motion.div className="saravanampatti-chip c3" {...float(0.6)}><Laptop size={18} /> Classroom + Online</motion.div>
        </motion.div>
      </span>
    </section>
  );
};

export default SaravanampattiBanner;
