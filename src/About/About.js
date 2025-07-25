// About.js
import React,{useEffect}from 'react'
import AboutBanner from './AboutBanner';
import WeAre from './WeAre';
import WeEmpower from './WeEmpower';
import Motto from './Motto';
import CountDown from './CountDown';
import Vision from './Vision';
import OurCore from './OurCore';
import { Routes, Route } from 'react-router-dom';
import Meta from '../Meta';
import { motion } from 'framer-motion';
const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
 },[])
  return (
    <>
      <Meta title="About Us - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />
      
      <div style={{ overflow: 'hidden' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AboutBanner />
        </motion.div>

        <motion.section 
          id="we-are"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.7,
            ease: "easeOut"
          }}
        >
          <WeAre />
        </motion.section>

        <motion.section
          id="we-empower"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <WeEmpower />
        </motion.section>

        <motion.section
          id="our-motto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Motto />
        </motion.section>

        <motion.section
          id="countdown"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <CountDown />
        </motion.section>

        <motion.section
          id="vision-mission"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Vision />
        </motion.section>

        <motion.section
          id="our-core-values"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <OurCore />
        </motion.section>
      </div>
    </>
  );
};

export default About;
