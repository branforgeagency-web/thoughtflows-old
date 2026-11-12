import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mediaUrl } from '../config/media';
const Kamale = mediaUrl("images/Kamale.G.png");
const SUGANYA = mediaUrl("images/SUGANYA.G.png");
const Ramya = mediaUrl("images/Ramya senthilkumar.png");
const Vidhya = mediaUrl("images/Vidhya .K.png");

/* ------------------------------------------------------------------ */
/*  Small inline bits                                                  */
/* ------------------------------------------------------------------ */

const EASE = [0.22, 1, 0.36, 1];

const QuoteMark = ({ color = "#ffffff", size = 13 }) => (
  <span
    className="sr-quote-mark"
    style={{ color, fontSize: size }}
    aria-hidden="true"
  >
    &rdquo;
  </span>
);

const StarRow = () => (
  <div className="sr-stars" aria-hidden="true">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} width="9" height="9" viewBox="0 0 24 24" fill="#f6b43d">
        <path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 16.5L5.5 21L7.5 13.5L2 9H9L12 2Z" />
      </svg>
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const StudentReviews = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const onChange = (e) => setPrefersReduced(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else if (mq.removeListener) mq.removeListener(onChange);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const d = (full) => (prefersReduced ? 0.01 : full);

  return (
    <>
      <style>{CSS}</style>
      <div className="sr-root">
        {/* ---------- background decorations ---------- */}
        <motion.div
          className="sr-shape sr-shape-yellow"
          initial={{ y: 0, rotate: -5 }}
          animate={
            prefersReduced
              ? { y: 0, rotate: -5 }
              : { y: [0, -10, 0], rotate: [-5, -2, -5] }
          }
          transition={{
            duration: d(7),
            repeat: prefersReduced ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="sr-shape sr-shape-purple"
          initial={{ y: 0, rotate: 14 }}
          animate={
            prefersReduced
              ? { y: 0, rotate: 14 }
              : { y: [0, -12, 0], rotate: [14, 11, 14] }
          }
          transition={{
            duration: d(8),
            repeat: prefersReduced ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="sr-glow"
          animate={
            prefersReduced
              ? { x: 0, y: 0, opacity: 0.4 }
              : { x: [0, 25, 0], y: [0, -14, 0], opacity: [0.32, 0.48, 0.32] }
          }
          transition={{
            duration: d(8),
            repeat: prefersReduced ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ---------- centered white panel ---------- */}
        <div className="sr-panel-wrapper">
          <motion.div
            className="sr-panel"
            initial={{ opacity: 0, y: 32, scale: 0.975 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: d(0.9), ease: EASE }}
          >
            <div className="sr-sheen" aria-hidden="true" />

            {/* header */}
            <div className="sr-header">
              <motion.span
                className="sr-header-line"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: d(0.45), duration: d(0.55) }}
              />
              <motion.h2
                className="sr-title"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: d(0.52), duration: d(0.6), ease: EASE }}
              >
                Student stories
              </motion.h2>
              <motion.p
                className="sr-subtitle"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: d(0.6), duration: d(0.6), ease: EASE }}
              >
                Real voices from learners building their careers with ThoughtFlows.
              </motion.p>
            </div>

            {/* testimonial grid */}
            <div className="sr-grid">
              {/* ---------------- card 1 : cream profile card ---------------- */}
              <motion.div
                className="sr-card-outer"
                initial={{ opacity: 0, y: 34, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: d(0.42), duration: d(0.6), ease: EASE }}
              >
                <motion.div
                  className="sr-card sr-card-1"
                  animate={{
                    y: activeCard === 0 ? -7 : 0,
                    scale: activeCard === 0 ? 1.025 : 1,
                  }}
                  transition={{ duration: d(0.55), ease: EASE }}
                  onHoverStart={() => setActiveCard(0)}
                >
                  <div className="sr-top-profile">
                    <div className="sr-avatar-wrap">
                      <img
                        className="sr-avatar"
                        src={Kamale}
                        alt="Portrait of Kamale G"
                        draggable={false}
                      />
                      <span className="sr-quote-badge sr-quote-badge-pink">
                        <QuoteMark color="#ffffff" size={10} />
                      </span>
                    </div>
                    <div className="sr-name-block">
                      <p className="sr-name">Kamale G</p>
                      <p className="sr-company">CPC Certified</p>
                      <StarRow />
                    </div>
                  </div>
                  <p className="sr-card-title">Best academy to kick start your career</p>
                  <p className="sr-card-review">
                    &ldquo;Thoughtflows is one of the best places to grab
                    huge knowledge about medical coding. Great guidance
                    from my HR Reshma mam, and special thanks to Radika
                    mam and Keerthi mam. Thankful to all the staff for
                    helping me get into a reputed company.&rdquo;
                  </p>

                  <AnimatePresence>
                    {activeCard === 0 && (
                      <motion.span
                        className="sr-shine"
                        initial={{ x: "-120%" }}
                        animate={{ x: "220%" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: d(1.15), ease: "easeInOut" }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {/* ---------------- card 2 : white quote card ---------------- */}
              <motion.div
                className="sr-card-outer"
                initial={{ opacity: 0, y: 34, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: d(0.53), duration: d(0.6), ease: EASE }}
              >
                <motion.div
                  className="sr-card sr-card-2"
                  animate={{
                    y: activeCard === 1 ? -7 : 0,
                    scale: activeCard === 1 ? 1.025 : 1,
                  }}
                  transition={{ duration: d(0.55), ease: EASE }}
                  onHoverStart={() => setActiveCard(1)}
                >
                  <span className="sr-quote-badge sr-quote-badge-pink sr-quote-badge-standalone">
                    <QuoteMark color="#ffffff" size={12} />
                  </span>
                  <p className="sr-card-title">Best platform to learn medical coding</p>
                  <p className="sr-card-review">
                    &ldquo;The trainer teaching the class is very good, and
                    all the trainers are very friendly. Thoughtflow
                    provides daily practice questions in their own app,
                    which is very useful to us.&rdquo;
                  </p>

                  <div className="sr-profile-row sr-profile-row-bottom">
                    <img
                      className="sr-avatar sr-avatar-sm"
                      src={SUGANYA}
                      alt="Portrait of Suganya G"
                      draggable={false}
                    />
                    <div>
                      <p className="sr-name">Suganya G</p>
                      <p className="sr-company">CPC Certified</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeCard === 1 && (
                      <motion.span
                        className="sr-shine"
                        initial={{ x: "-120%" }}
                        animate={{ x: "220%" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: d(1.15), ease: "easeInOut" }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {/* ---------------- card 3 : full photo card ---------------- */}
              <motion.div
                className="sr-card-outer"
                initial={{ opacity: 0, y: 34, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: d(0.64), duration: d(0.6), ease: EASE }}
              >
                <motion.div
                  className="sr-card sr-card-3"
                  animate={{
                    y: activeCard === 2 ? -7 : 0,
                    scale: activeCard === 2 ? 1.025 : 1,
                  }}
                  transition={{ duration: d(0.55), ease: EASE }}
                  onHoverStart={() => setActiveCard(2)}
                >
                  <div className="sr-photo-wrap">
                    <motion.img
                      className="sr-photo"
                      src={Ramya}
                      alt=""
                      draggable={false}
                      animate={{
                        scale: activeCard === 2 ? 1.09 : 1.04,
                        x: activeCard === 2 ? -3 : 0,
                      }}
                      transition={{ duration: d(1.2), ease: "easeInOut" }}
                    />
                    <div className="sr-photo-overlay" />
                    <span className="sr-rating-pill">5.0 &#9733;</span>
                    <div className="sr-photo-content">
                      <p className="sr-card-title sr-card-title-light">
                        Completed my CPC certificate with 95%
                      </p>
                      <p className="sr-card-review sr-card-review-light">
                        &ldquo;They provide detailed study materials,
                        conduct regular mock tests, and offer thorough
                        exam preparation, which greatly helped me feel
                        confident about the CPC exam.&rdquo;
                      </p>
                      <div className="sr-profile-row">
                        <p className="sr-name sr-name-light">
                          Ramya Senthilkumar
                        </p>
                        <p className="sr-company sr-company-light">
                          CPC Certified
                        </p>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeCard === 2 && (
                      <motion.span
                        className="sr-shine"
                        initial={{ x: "-120%" }}
                        animate={{ x: "220%" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: d(1.15), ease: "easeInOut" }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {/* ---------------- card 4 : hot pink card ---------------- */}
              <motion.div
                className="sr-card-outer"
                initial={{ opacity: 0, y: 34, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: d(0.75), duration: d(0.6), ease: EASE }}
              >
                <motion.div
                  className="sr-card sr-card-4"
                  animate={{
                    y: activeCard === 3 ? -7 : 0,
                    scale: activeCard === 3 ? 1.025 : 1,
                  }}
                  transition={{ duration: d(0.55), ease: EASE }}
                  onHoverStart={() => setActiveCard(3)}
                >
                  <div className="sr-top-split">
                    <span className="sr-quote-badge sr-quote-badge-white">
                      <QuoteMark color="#097D8A" size={12} />
                    </span>
                    <span className="sr-rating-pill sr-rating-pill-lg">
                      5.0 &#9733;
                    </span>
                  </div>
                  <p className="sr-card-title sr-card-title-light">
                    Cleared CPC with 92%
                  </p>
                  <p className="sr-card-review sr-card-review-light-pink">
                    &ldquo;The course content is very well explained, so
                    even a beginner like me could understand it easily. A
                    special mention to HR Reshma mam and trainers Pooja
                    and Ezhil mam for clearing my doubts.&rdquo;
                  </p>

                  <div className="sr-profile-row sr-profile-row-bottom">
                    <img
                      className="sr-avatar sr-avatar-sm sr-avatar-border"
                      src={Vidhya}
                      alt="Portrait of Vidhya K"
                      draggable={false}
                    />
                    <div>
                      <p className="sr-name sr-name-light">Vidhya K</p>
                      <p className="sr-company sr-company-light">
                        CPC Certified
                      </p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeCard === 3 && (
                      <motion.span
                        className="sr-shine"
                        initial={{ x: "-120%" }}
                        animate={{ x: "220%" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: d(1.15), ease: "easeInOut" }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </div>

            {/* credential row */}
            <motion.div
              className="sr-logos"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: d(1), duration: d(0.6), ease: EASE }}
            >
              <span className="sr-logo sr-logo-aapc">AAPC</span>
              <span className="sr-logo sr-logo-cpc">CPC&reg;</span>
              <span className="sr-logo sr-logo-cemc">CEMC</span>
              <span className="sr-logo sr-logo-rcms sr-logo-hide-mobile">
                RCMS
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* ---------- bottom-left brand mark ---------- */}
        <motion.div
          className="sr-brand"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: d(1), duration: d(0.7) }}
        >
          <span className="sr-brand-icon" aria-hidden="true">
            <span className="sr-brand-sq sr-brand-sq-1" />
            <span className="sr-brand-sq sr-brand-sq-2" />
            <span className="sr-brand-sq sr-brand-sq-3" />
          </span>
          <span className="sr-brand-text">ThoughtFlows</span>
        </motion.div>
      </div>
    </>
  );
};

export default StudentReviews;

/* ------------------------------------------------------------------ */
/*  Styles                                                              */
/* ------------------------------------------------------------------ */

const CSS = `
.sr-root {
  position: relative;
  width: 100%;
  height: 100svh;
  margin-bottom: 210px;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 45%, #f7f7fa 70%, #f4f4f7 100%);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #29282d;
}

@media (max-width: 767px) {
  .sr-root { margin-bottom: 100px; }
}

.sr-root * { box-sizing: border-box; }

.sr-root img {
  -webkit-user-drag: none;
  user-select: none;
  -webkit-user-select: none;
}

/* ---------- background shapes ---------- */

.sr-shape {
  position: absolute;
  pointer-events: none;
  z-index: 1;
}

.sr-shape-yellow {
  width: clamp(260px, 35vw, 510px);
  height: clamp(380px, 70vh, 720px);
  left: -110px;
  bottom: -140px;
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  background: linear-gradient(150deg, #d9f7fa 0%, #b3ecf1 50%, #7dd9e2 100%);
  box-shadow: 0 40px 90px rgba(21, 174, 187, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.15);
}

.sr-shape-yellow::before {
  content: "";
  position: absolute;
  top: 8%;
  left: 10%;
  width: 45%;
  height: 35%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.45), transparent 70%);
  border-radius: 50%;
}

.sr-shape-purple {
  width: clamp(270px, 34vw, 520px);
  height: clamp(420px, 72vh, 750px);
  right: -120px;
  top: -150px;
  border-radius: 46% 54% 38% 62% / 54% 42% 58% 46%;
  background: linear-gradient(160deg, #1f6f87 0%, #0f5571 50%, #073766 100%);
  box-shadow: 0 40px 90px rgba(7, 55, 102, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.12);
}

.sr-shape-purple::before {
  content: "";
  position: absolute;
  top: 10%;
  right: 12%;
  width: 40%;
  height: 30%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4), transparent 70%);
  border-radius: 50%;
}

.sr-glow {
  position: absolute;
  top: 8%;
  left: 16%;
  width: 35vw;
  height: 17vw;
  min-width: 320px;
  min-height: 160px;
  background: rgba(21, 174, 187, 0.35);
  filter: blur(40px);
  border-radius: 50%;
  z-index: 2;
  pointer-events: none;
}

/* ---------- panel wrapper + panel ---------- */

.sr-panel-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(14px, 2.5vh, 32px) clamp(14px, 3vw, 54px);
  z-index: 5;
}

.sr-panel {
  position: relative;
  width: min(86vw, 1180px);
  height: min(78svh, 680px);
  max-height: calc(100svh - 36px);
  min-height: min(530px, calc(100svh - 36px));
  margin: 0;
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  overflow: hidden;
  box-shadow:
    0 32px 65px rgba(41, 35, 60, 0.11),
    0 5px 18px rgba(41, 35, 60, 0.045),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: clamp(20px, 3vh, 35px);
  padding: clamp(28px, 4.5vh, 52px) clamp(38px, 6vw, 86px) clamp(24px, 4vh, 46px);
}

.sr-sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.18) 100%);
  pointer-events: none;
}

/* ---------- header ---------- */

.sr-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
}

.sr-header-line {
  width: 2px;
  height: 24px;
  background: #097D8A;
  border-radius: 2px;
  display: block;
  margin: 0 auto 10px;
  transform-origin: bottom center;
  box-shadow: 0 0 10px rgba(21, 174, 187, 0.55), 0 0 4px rgba(21, 174, 187, 0.4);
}

.sr-title {
  font-size: clamp(18px, 2vw, 26px);
  font-weight: 750;
  line-height: 1.1;
  letter-spacing: -0.035em;
  color: #29282d;
  margin: 0;
}

.sr-subtitle {
  margin: 10px auto 0;
  font-size: clamp(10px, 1.05vw, 14px);
  color: #99979d;
  letter-spacing: -0.01em;
  text-align: center;
}

/* ---------- grid ---------- */

.sr-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(13px, 1.6vw, 24px);
  align-items: center;
  align-content: center;
  height: 100%;
  min-height: 0;
  position: relative;
  z-index: 1;
}

.sr-card-outer {
  height: clamp(220px, 32svh, 320px);
}

.sr-card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 14px 26px rgba(25, 24, 32, 0.08), 0 2px 8px rgba(25, 24, 32, 0.045);
  cursor: default;
  display: flex;
  flex-direction: column;
  padding: clamp(12px, 1.6vw, 18px);
}

.sr-card-1 { background: linear-gradient(160deg, #eafbfc 0%, #d7f1f3 100%); }
.sr-card-1::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 60%; height: 50%;
  background: radial-gradient(circle at 20% 15%, rgba(255, 255, 255, 0.65), transparent 70%);
  pointer-events: none;
}

.sr-card-2 { background: #ffffff; border: 1px solid rgba(0, 0, 0, 0.06); }

.sr-card-3 { padding: 0; }

.sr-card-4 { background: linear-gradient(135deg, #073766 0%, #0b4f6c 55%, #097D8A 100%); }
.sr-card-4::before {
  content: "";
  position: absolute;
  top: -20%; right: -20%;
  width: 70%; height: 70%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.22), transparent 70%);
  pointer-events: none;
}

.sr-shine {
  position: absolute;
  top: -40%;
  left: 0;
  width: 40%;
  height: 180%;
  background: linear-gradient(105deg, transparent 0%, rgba(255, 255, 255, 0.55) 50%, transparent 100%);
  transform: rotate(18deg);
  pointer-events: none;
  z-index: 3;
}

/* ---------- card content ---------- */

.sr-top-profile {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}

.sr-top-split {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}

.sr-avatar-wrap { position: relative; flex-shrink: 0; }

.sr-avatar {
  width: clamp(49px, 6vw, 68px);
  height: clamp(49px, 6vw, 68px);
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.sr-avatar-sm {
  width: clamp(30px, 3.6vw, 38px);
  height: clamp(30px, 3.6vw, 38px);
}

.sr-avatar-border { border: 2px solid rgba(255, 255, 255, 0.85); }

.sr-quote-badge {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.sr-quote-badge-pink {
  background: #097D8A;
  width: 22px;
  height: 22px;
  bottom: -4px;
  right: -4px;
  box-shadow: 0 3px 8px rgba(21, 174, 187, 0.4);
}

.sr-quote-badge-standalone {
  position: relative;
  bottom: auto;
  right: auto;
  width: 30px;
  height: 30px;
  margin-bottom: 12px;
  z-index: 1;
}

.sr-quote-badge-white {
  position: relative;
  background: #ffffff;
  width: 28px;
  height: 28px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
}

.sr-quote-mark {
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 700;
  line-height: 1;
  display: block;
  transform: translateY(-1px);
}

.sr-name-block {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 2px;
}

.sr-name { font-size: clamp(10px, 1vw, 13px); font-weight: 650; margin: 0; color: #29282d; }
.sr-company { font-size: clamp(8px, 0.8vw, 10px); margin: 0; opacity: 0.62; color: #55525a; }
.sr-name-light { color: #ffffff; }
.sr-company-light { color: rgba(255, 255, 255, 0.72); }

.sr-stars { display: flex; gap: 2px; margin-top: 3px; }

.sr-card-title {
  font-size: clamp(12px, 1.25vw, 17px);
  font-weight: 560;
  line-height: 1.25;
  letter-spacing: -0.025em;
  margin: 0 0 6px;
  color: #29282d;
  position: relative;
  z-index: 1;
}

.sr-card-review {
  font-size: clamp(9px, 0.92vw, 12px);
  line-height: 1.52;
  margin: 0;
  color: #77747a;
  position: relative;
  z-index: 1;
}

.sr-card-title-light { color: #ffffff; }
.sr-card-review-light { color: rgba(255, 255, 255, 0.86); }
.sr-card-review-light-pink { color: rgba(255, 255, 255, 0.88); }

.sr-profile-row {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
}

.sr-profile-row-bottom { margin-top: auto; }

/* ---------- card 3 : photo ---------- */

.sr-photo-wrap { position: relative; width: 100%; height: 100%; overflow: hidden; }

.sr-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
}

.sr-photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.18) 45%, rgba(0, 0, 0, 0.72) 100%);
  z-index: 1;
}

.sr-rating-pill {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ffdb68;
  color: #4a3414;
  font-size: clamp(9px, 0.85vw, 11px);
  font-weight: 700;
  padding: 4px 9px;
  border-radius: 999px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  z-index: 2;
}

.sr-rating-pill-lg {
  position: relative;
  top: auto;
  right: auto;
  font-size: clamp(11px, 1vw, 14px);
  padding: 5px 11px;
}

.sr-photo-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: clamp(12px, 1.6vw, 18px);
  z-index: 2;
}

/* ---------- credential row ---------- */

.sr-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(28px, 4.5vw, 64px);
  flex-wrap: nowrap;
  position: relative;
  z-index: 1;
}

.sr-logo {
  color: #9c9ca0;
  opacity: 0.82;
  font-size: 15px;
  white-space: nowrap;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.sr-logo:hover { transform: translateY(-2px) scale(1.04); opacity: 1; }

.sr-logo-aapc { font-weight: 800; letter-spacing: 0.04em; font-size: 15px; }
.sr-logo-cpc { font-family: Georgia, "Times New Roman", serif; font-weight: 700; font-size: 15px; }
.sr-logo-cemc { letter-spacing: 0.2em; font-size: 12px; font-weight: 600; }
.sr-logo-rcms { font-weight: 500; font-size: 14px; }

/* ---------- brand mark ---------- */

.sr-brand {
  position: absolute;
  left: clamp(20px, 4vw, 56px);
  bottom: clamp(20px, 4vh, 46px);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 3;
  pointer-events: none;
}

.sr-brand-icon {
  position: relative;
  width: 26px;
  height: 26px;
  display: inline-block;
  transform: rotate(30deg);
}

.sr-brand-sq {
  position: absolute;
  inset: 0;
  border: 1.6px solid rgba(255, 255, 255, 0.82);
  border-radius: 5px;
}

.sr-brand-sq-2 { inset: 4px; }
.sr-brand-sq-3 { inset: 8px; }

.sr-brand-text {
  color: rgba(255, 255, 255, 0.82);
  font-weight: 700;
  font-size: clamp(16px, 2vw, 24px);
  letter-spacing: -0.01em;
}

/* ---------- responsive: tablet ---------- */

@media (max-width: 900px) and (min-width: 721px) {
  .sr-panel { width: min(92vw, 820px); padding-left: 32px; padding-right: 32px; }
  .sr-logos { gap: clamp(18px, 3vw, 36px); }
}

/* ---------- responsive: mobile ---------- */

@media (max-width: 720px) {
  .sr-panel {
    width: 95vw;
    height: 94svh;
    max-height: 94svh;
    min-height: 0;
    padding: 20px;
    gap: 13px;
  }

  .sr-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .sr-card-outer { height: 100%; }
  .sr-card { padding: 10px; }

  .sr-avatar { width: 34px; height: 34px; }
  .sr-avatar-sm { width: 24px; height: 24px; }

  .sr-card-title { font-size: 10.5px; margin-bottom: 4px; }
  .sr-card-review {
    font-size: 8px;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .sr-name { font-size: 9px; }
  .sr-company { font-size: 7px; }

  .sr-quote-badge-standalone { width: 22px; height: 22px; margin-bottom: 6px; }
  .sr-quote-badge-white, .sr-quote-badge-pink { width: 18px; height: 18px; }

  .sr-rating-pill { font-size: 8px; padding: 3px 6px; }

  .sr-header-line { height: 18px; margin-bottom: 6px; }
  .sr-title { font-size: 16px; }
  .sr-subtitle { font-size: 9px; margin-top: 6px; }

  .sr-brand { display: none; }

  .sr-logos { gap: 14px; }
  .sr-logo { font-size: 11px; }
  .sr-logo-hide-mobile { display: none; }
}

/* ---------- responsive: short-height desktop ---------- */

@media (max-height: 650px) and (min-width: 721px) {
  .sr-panel {
    height: calc(100svh - 24px);
    max-height: calc(100svh - 24px);
    min-height: 0;
    padding-top: 18px;
    padding-bottom: 16px;
    gap: 16px;
  }

  .sr-header-line { height: 18px; }
  .sr-title { font-size: 18px; line-height: 1.05; }
  .sr-subtitle { margin-top: 6px; }

  .sr-card-outer { height: clamp(140px, 24svh, 200px); }
}

/* ---------- reduced motion ---------- */

@media (prefers-reduced-motion: reduce) {
  .sr-logo, .sr-card { transition-duration: 0.01s; }
}
`;
