import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import BranchDirectory from "./BranchDirectory";
import "./BranchShowcase.css";

const EASE = [0.22, 1, 0.36, 1];
const ACCORDION_ID = "tfbs-branches";

export default function BranchShowcase() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: 0.8, ease: EASE, delay },
  });

  const scrollToBranches = (e) => {
    e.preventDefault();
    const el = document.getElementById(ACCORDION_ID);
    if (!el) return;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    const firstChip = el.querySelector(".tfbd-chip");
    if (firstChip) firstChip.focus({ preventScroll: true });
  };

  return (
    <section className="tfbs" aria-labelledby="tfbs-heading">
      <span className="tfbs-glow tfbs-glow--a" aria-hidden="true" />
      <span className="tfbs-glow tfbs-glow--b" aria-hidden="true" />

      <div className="tfbs-inner">
        <header className="tfbs-intro">
          <div className="tfbs-intro-main">
            <motion.span className="tfbs-eyebrow" {...reveal(0)}>
              Thoughtflows Medical Coding Academy
            </motion.span>
            <motion.h2 id="tfbs-heading" className="tfbs-heading" {...reveal(0.08)}>
              Your Career in Medical Coding <span>Starts Here.</span>
            </motion.h2>
          </div>
          <motion.div className="tfbs-intro-side" {...reveal(0.18)}>
            <p className="tfbs-lead">
              Explore our 14 academy branches across five states and experience professional medical coding
              education, industry-focused training and career development opportunities near you.
            </p>
            <a href={`#${ACCORDION_ID}`} className="tfbs-intro-cta" onClick={scrollToBranches}>
              Explore Our Branches
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </header>

        <motion.div {...reveal(0.12)}>
          <BranchDirectory id={ACCORDION_ID} />
        </motion.div>
      </div>
    </section>
  );
}
