import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Laptop, CheckCircle2, BookOpen, MapPin } from "lucide-react";
import heroImg from "../../images/Branches/cbe_hopes_campus.jpg";

const float = (delay = 0) => ({
  animate: { y: [0, -12, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
});

const HopesBanner = () => {
  return (
    <section className="hopes-hero">
      <span className="hopes-wrap hopes-hero-grid">
        <motion.div
          className="hopes-hero-copy"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="hopes-eyebrow">Hopes Branch · Now Enrolling</span>
          <h1>
            Medical Coding Academy in <span className="hopes-accent">Hopes</span>
            <span className="sub">Get Practical Training &amp; Placement Assistance</span>
          </h1>
          <p style={{ maxWidth: 620, marginBottom: 12 }}>
            Choosing the right medical coding training can make a difference when you are starting a new career
            or developing skills for better opportunities. ThoughtFlows Medical Coding Academy provides structured
            learning for graduates, freshers, job seekers, working professionals and candidates looking for a career change.
          </p>
          <p style={{ maxWidth: 620, marginBottom: 12 }}>
            The Medical Coding Academy in Hopes offers a learning approach that combines medical coding concepts,
            practical exercises, assessments and CPC preparation. Learners can choose between classroom and online
            formats based on their schedule and preferred way of learning.
          </p>
          <p style={{ maxWidth: 620, marginBottom: 20, fontWeight: 500, color: "#0f172a" }}>
            The Medical Coding Course in Hopes covers the essential areas of medical coding, including medical terminology,
            anatomy and physiology, ICD-10-CM, CPT, HCPCS, modifiers and coding guidelines. Practical learning and regular
            assessments help learners move from basic concepts towards applying coding knowledge to different cases.
          </p>

          <div className="hopes-hero-tags">
            <span><BookOpen size={16} /> Practical Training</span>
            <span><Award size={16} /> CPC Preparation</span>
            <span><Laptop size={16} /> Classroom &amp; Online Classes</span>
            <span><CheckCircle2 size={16} /> Placement Support</span>
          </div>

          <div className="hopes-hero-actions">
            <Link to="/contact" className="hopes-btn">Book a Free Demo →</Link>
            <a href="#hopes-branch" className="hopes-btn ghost"><MapPin size={16} /> Visit Branch</a>
          </div>
        </motion.div>

        <motion.div
          className="hopes-hero-img"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="ring" />
          <img src={heroImg} alt="ThoughtFlows Medical Coding Academy Hopes Campus" />
          <motion.div className="hopes-chip c1" {...float(0)}><Award size={18} /> CPC Preparation</motion.div>
          <motion.div className="hopes-chip c2" {...float(1.2)}><CheckCircle2 size={18} /> Placement Support</motion.div>
          <motion.div className="hopes-chip c3" {...float(0.6)}><Laptop size={18} /> Classroom + Online</motion.div>
        </motion.div>
      </span>
    </section>
  );
};

export default HopesBanner;
