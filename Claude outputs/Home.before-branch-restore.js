import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import HomeBanner from "./HomeBanner";
import GifSection from "./GifSection";
import WelcomSection from "./WelcomSection";
import PopularCourses from "./PopularCourses";
import BranchShowcase from "./BranchShowcase/BranchShowcase";
// Earlier branch sections kept for reference: ./BranchGallery, ./Branches.js
import Counters from "./Counters";
import Coaching from "./Coaching";
import StudentReviews from "./StudentReviews";
import Meta from "../Meta";
import Companies from "./Companies";
import { PopupContext } from "../context/PopupContext";
import { motion } from "framer-motion";
import RegisterPopupForm from "../Forms/RegisterPopupForm";

const POPUP_SEEN_KEY = "tf_register_popup_seen";

const Home = () => {
  const { setIsOpen } = useContext(PopupContext);
  const location = useLocation();

  useEffect(() => {
    // Arriving with a #popular-courses hash (e.g. the "Explore Courses"
    // button on the About page) — scroll there once it has rendered,
    // instead of resetting to the top.
    if (location.hash === "#popular-courses") {
      const el = document.getElementById("popular-courses");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

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
          id="popular-courses"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <PopularCourses />
        </motion.div>

        {/* Branch showcase animates its own content */}
        <BranchShowcase />

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
          <StudentReviews />
        </motion.div>
      </div>
      <RegisterPopupForm />
    </>
  );
};

export default Home;
