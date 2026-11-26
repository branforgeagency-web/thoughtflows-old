import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, MapPin, ShieldCheck, Building2, ArrowRight } from "lucide-react";
import { mediaUrl } from '../../config/media';
import "../CoimbatoreBanner.css";
import CbeArchHero from '../common/CbeArchHero';

const heroImg = mediaUrl("images/Interiors/gvm/gvm-reception-corridor.jpg");
const card1Img = mediaUrl("images/Interiors/gvm/gvm-training-classroom.jpg");
const card2Img = mediaUrl("images/Interiors/gvm/gvm-workstation-pods-active.jpg");
const card3Img = mediaUrl("images/Interiors/gvm/gvm-pergola-study-cubicles.jpg");
const card4Img = mediaUrl("images/Interiors/gvm/gvm-bunker-lounge.jpg");

const GandhipuramBanner = () => {
  return (
    <>
      <CbeArchHero
        location="Coimbatore – Gandhipuram Branch"
        titleLead="Medical Coding Course"
        accent="Gandhipuram"
        subTitle="CPC & CCS Training, Coimbatore"
        badgeTitle="Gandhipuram Branch"
        badgeText="ThoughtFlows · Coimbatore"
        image={heroImg}
        imageAlt="ThoughtFlows Gandhipuram branch reception"
      />

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
