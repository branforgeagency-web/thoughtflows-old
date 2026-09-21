import React, { useEffect, useContext } from "react";
import HomeBanner from "./HomeBanner";
import GifSection from "./GifSection";
import WelcomSection from "./WelcomSection";
import PopularCourses from "./PopularCourses";
import Branches from "./Branches";
import Counters from "./Counters";
import Coaching from "./Coaching";
import GoogleRev from "./GoogleRev";
import Meta from "../Meta";
import Companies from "./Companies";
import { PopupContext } from "../context/PopupContext";
import { motion } from "framer-motion";
import RegisterPopupForm from "../Forms/RegisterPopupForm";
import AdvancedOfferPopup from "../Forms/AdvancedOfferPopup";

const POPUP_SEEN_KEY = "tf_register_popup_seen";

const Home = () => {
  const { setIsOpen } = useContext(PopupContext);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Show the registration popup once per browser session, after 4 seconds
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(POPUP_SEEN_KEY) === "1";
    } catch (e) {
      /* storage unavailable - fall through and show popup */
    }
    if (alreadySeen) return undefined;

    const timer = setTimeout(() => {
      setIsOpen(true);
      try {
        sessionStorage.setItem(POPUP_SEEN_KEY, "1");
      } catch (e) {
        /* ignore */
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [setIsOpen]);

  return (
    <>
      <Meta
        title="Medical Coding Course & Training | ThoughtFlows Academy"
        description="ThoughtFlows Medical Coding Academy offers a medical coding course with CPC training, expert faculty, and placement support for a successful career."
        canonical="https://www.thoughtflows.in/"
      />
      <div style={{ overflow: "hidden" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HomeBanner />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <GifSection />
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <WelcomSection />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <PopularCourses />
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Branches />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Counters />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Coaching />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Companies />
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <GoogleRev />
        </motion.div>
      </div>
      <RegisterPopupForm />
      <AdvancedOfferPopup />
    </>
  );
};

export default Home;
