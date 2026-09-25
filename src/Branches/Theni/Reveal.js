import React from "react";
import { motion } from "framer-motion";

// Fade + slide in when the element scrolls into view
const Reveal = ({ children, delay = 0, y = 30, x = 0, className, style, as = "div" }) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
