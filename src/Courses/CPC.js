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
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Meta title="CPC Certification Course | Online & Offline | ThoughtFlows" description="Become a Certified Professional Coder (CPC) with an AI-integrated medical coding curriculum. Online & offline at ThoughtFlows. Enroll today." canonical="https://www.thoughtflows.in/cpc" />

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
