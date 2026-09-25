import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Laptop, CheckCircle2, Stethoscope, FileText, BookOpen, Phone } from "lucide-react";
import heroImg from "../../images/homebanner img.png";

const float = (delay = 0) => ({
  animate: { y: [0, -12, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
});

const TheniBanner = () => {
  return (
    <section className="theni-hero">
      <motion.span className="theni-blob b1" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 9, repeat: Infinity }} />
      <motion.span className="theni-blob b2" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 11, repeat: Infinity }} />
      <motion.span className="theni-blob b3" animate={{ y: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity }} />

      <div className="theni-wrap theni-hero-grid">
        <motion.div
          className="theni-hero-copy"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="theni-eyebrow">Theni Branch · Now Enrolling</span>
          <h1>
            Medical Coding Course in <span className="theni-accent">Theni</span>
            <span className="sub">Learn, Get Certified &amp; Build Your Career</span>
          </h1>
          <p style={{ maxWidth: 560 }}>
            Interested in medical coding courses in Theni? ThoughtFlows Medical Coding Academy offers
            healthcare professionals the opportunity to learn medical coding, gain hands-on experience
            and obtain skills for employment in the medical coding industry.
          </p>
          <div className="theni-hero-tags">
            <span><BookOpen size={16} /> ICD-10-CM</span>
            <span><Stethoscope size={16} /> CPT</span>
            <span><FileText size={16} /> HCPCS</span>
            <span><Laptop size={16} /> Online &amp; Offline</span>
          </div>
          <div className="theni-hero-actions">
            <Link to="/contact" className="theni-btn">Enquire Now →</Link>
            <a href="#theni-branch" className="theni-btn ghost"><Phone size={16} /> Visit Branch</a>
          </div>
        </motion.div>

        <motion.div
          className="theni-hero-img"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="ring" />
          <img src={heroImg} alt="Student learning medical coding at ThoughtFlows Theni" />
          <motion.div className="theni-chip c1" {...float(0)}><Award size={18} /> Certification Prep</motion.div>
          <motion.div className="theni-chip c2" {...float(1.2)}><CheckCircle2 size={18} /> Placement Assistance</motion.div>
          <motion.div className="theni-chip c3" {...float(0.6)}><Laptop size={18} /> Classroom + Online</motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TheniBanner;
