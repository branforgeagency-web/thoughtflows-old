import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Meta from '../Meta';

import CPCBanner from "./CPC folder/CPCBanner";
import WhatisCPC from "./CPC folder/WhatisCPC";
import WhyCPC from "./CPC folder/WhyCPC";
import CPCModule from "./CPC folder/CPCModule";
import CPCFaq from "./CPC folder/CPCFaq";
import CPCFeatures from "./CPC folder/CPCFeatures";

const CPC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -30 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.7 } },
  };

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Meta title="CPC Course Training | ThoughtFlows Medical Coding Academy" description="Enroll in CPC course at ThoughtFlows with expert trainers, practical coding sessions, exam guidance, and placement support to start your medical coding career." canonical="https://thoughtflows.in/cpc" />

      <CPCBanner />

      <WhatisCPC />

      <WhyCPC />

      <CPCFeatures />

      <CPCModule />

      <CPCFaq />
    </div>
  );
};

export default CPC;
