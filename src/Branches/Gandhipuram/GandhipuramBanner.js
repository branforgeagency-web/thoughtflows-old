import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Laptop, CheckCircle2, Stethoscope, FileText, BookOpen, MapPin } from "lucide-react";
import Reveal from "../Theni/Reveal";
import heroImg from "../../images/Branches/cbe_gandhipuram_campus.jpg";

const float = (delay = 0) => ({
  animate: { y: [0, -12, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
});

const GandhipuramBanner = () => {
  return (
    <section className="gandhipuram-hero">
      <span className="gandhipuram-wrap gandhipuram-hero-grid">
        <motion.div
          className="gandhipuram-hero-copy"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="gandhipuram-eyebrow">Gandhipuram Branch · Now Enrolling</span>
          <h1>
            Medical Coding Academy in <span className="gandhipuram-accent">Gandhipuram</span>
            <span className="sub">Learn Practical Skills &amp; Prepare for Your Career</span>
          </h1>
          <p style={{ maxWidth: 620, marginBottom: 12 }}>
            ThoughtFlows Medical Coding Academy in Gandhipuram offers structured medical coding training
            for graduates, freshers, job seekers, and learners from different educational backgrounds.
          </p>
          <p style={{ maxWidth: 620, marginBottom: 12 }}>
            The program covers the knowledge and practical skills needed to understand medical records, assign
            codes, follow coding guidelines, and prepare for certification. Training also includes assessments,
            CPC preparation, and placement assistance.
          </p>
          <p style={{ maxWidth: 620, marginBottom: 20, fontWeight: 500, color: "#0f172a" }}>
            Choose classroom learning at the Gandhipuram branch or join live online training based on your schedule and preferred learning style.
          </p>

          <div className="gandhipuram-hero-tags">
            <span><BookOpen size={16} /> Practical Training</span>
            <span><Award size={16} /> CPC Preparation</span>
            <span><Laptop size={16} /> Online &amp; Classroom Classes</span>
            <span><CheckCircle2 size={16} /> Placement Assistance</span>
          </div>

          <div className="gandhipuram-hero-actions">
            <Link to="/contact" className="gandhipuram-btn">Book a Free Demo →</Link>
            <a href="#gandhipuram-branch" className="gandhipuram-btn ghost"><MapPin size={16} /> Visit Branch</a>
          </div>
        </motion.div>

        <motion.div
          className="gandhipuram-hero-img"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="ring" />
          <img src={heroImg} alt="ThoughtFlows Medical Coding Academy in Gandhipuram Campus" />
          <motion.div className="gandhipuram-chip c1" {...float(0)}><Award size={18} /> CPC Preparation</motion.div>
          <motion.div className="gandhipuram-chip c2" {...float(1.2)}><CheckCircle2 size={18} /> Placement Support</motion.div>
          <motion.div className="gandhipuram-chip c3" {...float(0.6)}><Laptop size={18} /> Classroom + Online</motion.div>
        </motion.div>
      </span>
    </section>
  );
};

export default GandhipuramBanner;
