import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/* ------------------------------------------------------------------ */
/*  Small inline bits                                                  */
/* ------------------------------------------------------------------ */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const QuoteMark: React.FC<{ color?: string; size?: number }> = ({
  color = "#ffffff",
  size = 13,
}) => (
  <span
    className="kcr-quote-mark"
    style={{ color, fontSize: size }}
    aria-hidden="true"
  >
    &rdquo;
  </span>
);

const STAR_COLORS = ["#f6b43d", "#f6b43d", "#f6b43d", "#f6b43d", "#211f26"];

const StarRow: React.FC = () => (
  <div className="kcr-stars" aria-hidden="true">
    {STAR_COLORS.map((c, i) => (
      <svg key={i} width="9" height="9" viewBox="0 0 24 24" fill={c}>
        <path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 16.5L5.5 21L7.5 13.5L2 9H9L12 2Z" />
      </svg>
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const KexsioCustomerReviews: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if ((mq as any).addListener) (mq as any).addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else if ((mq as any).removeListener)
        (mq as any).removeListener(onChange);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const d = (full: number) => (prefersReduced ? 0.01 : full);

  return (
    <>
      <style>{CSS}</style>
      <div className="kcr-root">
        {/* ---------- background decorations ---------- */}
        <motion.div
          className="kcr-shape kcr-shape-yellow"
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
          className="kcr-shape kcr-shape-purple"
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
          className="kcr-glow"
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
        <div className="kcr-panel-wrapper">
          <motion.div
            className="kcr-panel"
            initial={{ opacity: 0, y: 32, scale: 0.975 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: d(0.9), ease: EASE }}
          >
            <div className="kcr-sheen" aria-hidden="true" />

            {/* header */}
            <div className="kcr-header">
              <motion.span
                className="kcr-header-line"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: d(0.45), duration: d(0.55) }}
              />
              <motion.h2
                className="kcr-title"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: d(0.52), duration: d(0.6), ease: EASE }}
              >
                Customer stories
              </motion.h2>
              <motion.p
                className="kcr-subtitle"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: d(0.6), duration: d(0.6), ease: EASE }}
              >
                Thoughtful words from teams building with Viora.
              </motion.p>
            </div>

            {/* testimonial grid */}
            <div className="kcr-grid">
              {/* ---------------- card 1 : cream profile card ---------------- */}
              <motion.div
                className="kcr-card-outer"
                initial={{ opacity: 0, y: 34, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: d(0.42), duration: d(0.6), ease: EASE }}
              >
                <motion.div
                  className="kcr-card kcr-card-1"
                  animate={{
                    y: activeCard === 0 ? -7 : 0,
                    scale: activeCard === 0 ? 1.025 : 1,
                  }}
                  transition={{ duration: d(0.55), ease: EASE }}
                  onHoverStart={() => setActiveCard(0)}
                >
                  <div className="kcr-top-profile">
                    <div className="kcr-avatar-wrap">
                      <img
                        className="kcr-avatar"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&q=90"
                        alt="Portrait of Maya Chen"
                        draggable={false}
                      />
                      <span className="kcr-quote-badge kcr-quote-badge-pink">
                        <QuoteMark color="#ffffff" size={10} />
                      </span>
                    </div>
                    <div className="kcr-name-block">
                      <p className="kcr-name">Maya Chen</p>
                      <p className="kcr-company">Northlane</p>
                      <StarRow />
                    </div>
                  </div>
                  <p className="kcr-card-title">Beautifully constructed</p>
                  <p className="kcr-card-review">
                    Everything feels carefully designed. We launched our new
                    product page in a single afternoon.
                  </p>

                  <AnimatePresence>
                    {activeCard === 0 && (
                      <motion.span
                        className="kcr-shine"
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
                className="kcr-card-outer"
                initial={{ opacity: 0, y: 34, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: d(0.53), duration: d(0.6), ease: EASE }}
              >
                <motion.div
                  className="kcr-card kcr-card-2"
                  animate={{
                    y: activeCard === 1 ? -7 : 0,
                    scale: activeCard === 1 ? 1.025 : 1,
                  }}
                  transition={{ duration: d(0.55), ease: EASE }}
                  onHoverStart={() => setActiveCard(1)}
                >
                  <span className="kcr-quote-badge kcr-quote-badge-pink kcr-quote-badge-standalone">
                    <QuoteMark color="#ffffff" size={12} />
                  </span>
                  <p className="kcr-card-title">A delight to customize</p>
                  <p className="kcr-card-review">
                    The structure is clean, flexible and surprisingly simple
                    to adapt to our own visual identity.
                  </p>

                  <div className="kcr-profile-row kcr-profile-row-bottom">
                    <img
                      className="kcr-avatar kcr-avatar-sm"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=90"
                      alt="Portrait of Eli Brooks"
                      draggable={false}
                    />
                    <div>
                      <p className="kcr-name">Eli Brooks</p>
                      <p className="kcr-company">Arc Studio</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeCard === 1 && (
                      <motion.span
                        className="kcr-shine"
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
                className="kcr-card-outer"
                initial={{ opacity: 0, y: 34, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: d(0.64), duration: d(0.6), ease: EASE }}
              >
                <motion.div
                  className="kcr-card kcr-card-3"
                  animate={{
                    y: activeCard === 2 ? -7 : 0,
                    scale: activeCard === 2 ? 1.025 : 1,
                  }}
                  transition={{ duration: d(0.55), ease: EASE }}
                  onHoverStart={() => setActiveCard(2)}
                >
                  <div className="kcr-photo-wrap">
                    <motion.img
                      className="kcr-photo"
                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=90"
                      alt=""
                      draggable={false}
                      animate={{
                        scale: activeCard === 2 ? 1.09 : 1.04,
                        x: activeCard === 2 ? -3 : 0,
                      }}
                      transition={{ duration: d(1.2), ease: "easeInOut" }}
                    />
                    <div className="kcr-photo-overlay" />
                    <span className="kcr-rating-pill">4.9 &#9733;</span>
                    <div className="kcr-photo-content">
                      <p className="kcr-card-title kcr-card-title-light">
                        Our workflow feels faster
                      </p>
                      <p className="kcr-card-review kcr-card-review-light">
                        The polished details made the final result feel
                        completely custom without slowing us down.
                      </p>
                      <div className="kcr-profile-row">
                        <p className="kcr-name kcr-name-light">Nia Patel</p>
                        <p className="kcr-company kcr-company-light">
                          Onda Labs
                        </p>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeCard === 2 && (
                      <motion.span
                        className="kcr-shine"
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
                className="kcr-card-outer"
                initial={{ opacity: 0, y: 34, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: d(0.75), duration: d(0.6), ease: EASE }}
              >
                <motion.div
                  className="kcr-card kcr-card-4"
                  animate={{
                    y: activeCard === 3 ? -7 : 0,
                    scale: activeCard === 3 ? 1.025 : 1,
                  }}
                  transition={{ duration: d(0.55), ease: EASE }}
                  onHoverStart={() => setActiveCard(3)}
                >
                  <div className="kcr-top-split">
                    <span className="kcr-quote-badge kcr-quote-badge-white">
                      <QuoteMark color="#ed176e" size={12} />
                    </span>
                    <span className="kcr-rating-pill kcr-rating-pill-lg">
                      4.7 &#9733;
                    </span>
                  </div>
                  <p className="kcr-card-title kcr-card-title-light">
                    Worth every minute
                  </p>
                  <p className="kcr-card-review kcr-card-review-light-pink">
                    We created a premium experience without filling the page
                    with unnecessary sections.
                  </p>

                  <div className="kcr-profile-row kcr-profile-row-bottom">
                    <img
                      className="kcr-avatar kcr-avatar-sm kcr-avatar-border"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=180&q=90"
                      alt="Portrait of Jordan Lee"
                      draggable={false}
                    />
                    <div>
                      <p className="kcr-name kcr-name-light">Jordan Lee</p>
                      <p className="kcr-company kcr-company-light">
                        Kindred
                      </p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeCard === 3 && (
                      <motion.span
                        className="kcr-shine"
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

            {/* partner logos */}
            <motion.div
              className="kcr-logos"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: d(1), duration: d(0.6), ease: EASE }}
            >
              <span className="kcr-logo kcr-logo-morrow">morrow.</span>
              <span className="kcr-logo kcr-logo-nova kcr-logo-hide-mobile">
                NOVA
              </span>
              <span className="kcr-logo kcr-logo-arqix">ARQIX</span>
              <span className="kcr-logo kcr-logo-upwave">Upwave</span>
              <span className="kcr-logo kcr-logo-halcyon kcr-logo-hide-mobile">
                Halcyon
              </span>
              <span className="kcr-logo kcr-logo-lumera">&#9638; Lumera</span>
            </motion.div>
          </motion.div>
        </div>

        {/* ---------- bottom-left brand mark ---------- */}
        <motion.div
          className="kcr-brand"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: d(1), duration: d(0.7) }}
        >
          <span className="kcr-brand-icon" aria-hidden="true">
            <span className="kcr-brand-sq kcr-brand-sq-1" />
            <span className="kcr-brand-sq kcr-brand-sq-2" />
            <span className="kcr-brand-sq kcr-brand-sq-3" />
          </span>
          <span className="kcr-brand-text">Viora</span>
        </motion.div>
      </div>
    </>
  );
};

export default KexsioCustomerReviews;

/* ------------------------------------------------------------------ */
/*  Styles                                                              */
/* ------------------------------------------------------------------ */

const CSS = `
html, body, #root {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  overscroll-behavior: none;
}

::-webkit-scrollbar { width: 0; height: 0; display: none; }

* { box-sizing: border-box; }

img {
  -webkit-user-drag: none;
  user-select: none;
  -webkit-user-select: none;
}

.kcr-root {
  position: relative;
  width: 100%;
  height: 100svh;
  overflow: hidden;
  overscroll-behavior: none;
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 45%, #f7f7fa 70%, #f4f4f7 100%);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #29282d;
}

/* ---------- background shapes ---------- */

.kcr-shape {
  position: absolute;
  pointer-events: none;
  z-index: 1;
}

.kcr-shape-yellow {
  width: clamp(260px, 35vw, 510px);
  height: clamp(380px, 70vh, 720px);
  left: -110px;
  bottom: -140px;
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  background: linear-gradient(150deg, #ffe986 0%, #ffdf68 50%, #f7cc56 100%);
  box-shadow: 0 40px 90px rgba(247, 204, 86, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.15);
}

.kcr-shape-yellow::before {
  content: "";
  position: absolute;
  top: 8%;
  left: 10%;
  width: 45%;
  height: 35%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.45), transparent 70%);
  border-radius: 50%;
}

.kcr-shape-purple {
  width: clamp(270px, 34vw, 520px);
  height: clamp(420px, 72vh, 750px);
  right: -120px;
  top: -150px;
  border-radius: 46% 54% 38% 62% / 54% 42% 58% 46%;
  background: linear-gradient(160deg, #bd8be4 0%, #9d6ad8 50%, #8052c4 100%);
  box-shadow: 0 40px 90px rgba(128, 82, 196, 0.38), inset 0 0 0 1px rgba(255, 255, 255, 0.12);
}

.kcr-shape-purple::before {
  content: "";
  position: absolute;
  top: 10%;
  right: 12%;
  width: 40%;
  height: 30%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4), transparent 70%);
  border-radius: 50%;
}

.kcr-glow {
  position: absolute;
  top: 8%;
  left: 16%;
  width: 35vw;
  height: 17vw;
  min-width: 320px;
  min-height: 160px;
  background: rgba(225, 218, 255, 0.45);
  filter: blur(40px);
  border-radius: 50%;
  z-index: 2;
  pointer-events: none;
}

/* ---------- panel wrapper + panel ---------- */

.kcr-panel-wrapper {
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

.kcr-panel {
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

.kcr-sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.18) 100%);
  pointer-events: none;
}

/* ---------- header ---------- */

.kcr-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
}

.kcr-header-line {
  width: 2px;
  height: 24px;
  background: #ed176e;
  border-radius: 2px;
  display: block;
  margin: 0 auto 10px;
  transform-origin: bottom center;
  box-shadow: 0 0 10px rgba(237, 23, 110, 0.55), 0 0 4px rgba(237, 23, 110, 0.4);
}

.kcr-title {
  font-size: clamp(18px, 2vw, 26px);
  font-weight: 750;
  line-height: 1.1;
  letter-spacing: -0.035em;
  color: #29282d;
  margin: 0;
}

.kcr-subtitle {
  margin: 10px auto 0;
  font-size: clamp(10px, 1.05vw, 14px);
  color: #99979d;
  letter-spacing: -0.01em;
  text-align: center;
}

/* ---------- grid ---------- */

.kcr-grid {
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

.kcr-card-outer {
  height: clamp(205px, 28svh, 280px);
}

.kcr-card {
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

.kcr-card-1 { background: linear-gradient(160deg, #fff4d1 0%, #ffebba 100%); }
.kcr-card-1::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 60%; height: 50%;
  background: radial-gradient(circle at 20% 15%, rgba(255, 255, 255, 0.65), transparent 70%);
  pointer-events: none;
}

.kcr-card-2 { background: #ffffff; border: 1px solid rgba(0, 0, 0, 0.06); }

.kcr-card-3 { padding: 0; }

.kcr-card-4 { background: linear-gradient(145deg, #ed2073 0%, #e71065 100%); }
.kcr-card-4::before {
  content: "";
  position: absolute;
  top: -20%; right: -20%;
  width: 70%; height: 70%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.22), transparent 70%);
  pointer-events: none;
}

.kcr-shine {
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

.kcr-top-profile {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}

.kcr-top-split {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}

.kcr-avatar-wrap { position: relative; flex-shrink: 0; }

.kcr-avatar {
  width: clamp(49px, 6vw, 68px);
  height: clamp(49px, 6vw, 68px);
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.kcr-avatar-sm {
  width: clamp(30px, 3.6vw, 38px);
  height: clamp(30px, 3.6vw, 38px);
}

.kcr-avatar-border { border: 2px solid rgba(255, 255, 255, 0.85); }

.kcr-quote-badge {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.kcr-quote-badge-pink {
  background: #ed176e;
  width: 22px;
  height: 22px;
  bottom: -4px;
  right: -4px;
  box-shadow: 0 3px 8px rgba(237, 23, 110, 0.4);
}

.kcr-quote-badge-standalone {
  position: relative;
  bottom: auto;
  right: auto;
  width: 30px;
  height: 30px;
  margin-bottom: 12px;
  z-index: 1;
}

.kcr-quote-badge-white {
  position: relative;
  background: #ffffff;
  width: 28px;
  height: 28px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
}

.kcr-quote-mark {
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 700;
  line-height: 1;
  display: block;
  transform: translateY(-1px);
}

.kcr-name-block {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 2px;
}

.kcr-name { font-size: clamp(10px, 1vw, 13px); font-weight: 650; margin: 0; color: #29282d; }
.kcr-company { font-size: clamp(8px, 0.8vw, 10px); margin: 0; opacity: 0.62; color: #55525a; }
.kcr-name-light { color: #ffffff; }
.kcr-company-light { color: rgba(255, 255, 255, 0.72); }

.kcr-stars { display: flex; gap: 2px; margin-top: 3px; }

.kcr-card-title {
  font-size: clamp(12px, 1.25vw, 17px);
  font-weight: 560;
  line-height: 1.25;
  letter-spacing: -0.025em;
  margin: 0 0 6px;
  color: #29282d;
  position: relative;
  z-index: 1;
}

.kcr-card-review {
  font-size: clamp(9px, 0.92vw, 12px);
  line-height: 1.52;
  margin: 0;
  color: #77747a;
  position: relative;
  z-index: 1;
}

.kcr-card-title-light { color: #ffffff; }
.kcr-card-review-light { color: rgba(255, 255, 255, 0.86); }
.kcr-card-review-light-pink { color: rgba(255, 255, 255, 0.88); }

.kcr-profile-row {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
}

.kcr-profile-row-bottom { margin-top: auto; }

/* ---------- card 3 : photo ---------- */

.kcr-photo-wrap { position: relative; width: 100%; height: 100%; overflow: hidden; }

.kcr-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 33%;
}

.kcr-photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.18) 45%, rgba(0, 0, 0, 0.72) 100%);
  z-index: 1;
}

.kcr-rating-pill {
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

.kcr-rating-pill-lg {
  position: relative;
  top: auto;
  right: auto;
  font-size: clamp(11px, 1vw, 14px);
  padding: 5px 11px;
}

.kcr-photo-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: clamp(12px, 1.6vw, 18px);
  z-index: 2;
}

/* ---------- partner logos ---------- */

.kcr-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(25px, 4vw, 58px);
  flex-wrap: nowrap;
  position: relative;
  z-index: 1;
}

.kcr-logo {
  color: #9c9ca0;
  opacity: 0.82;
  font-size: 14px;
  white-space: nowrap;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.kcr-logo:hover { transform: translateY(-2px) scale(1.04); opacity: 1; }

.kcr-logo-morrow { font-family: Georgia, "Times New Roman", serif; font-weight: 700; font-size: 15px; }
.kcr-logo-nova { font-family: Impact, "Arial Narrow", sans-serif; letter-spacing: 0.5px; font-size: 15px; }
.kcr-logo-arqix { letter-spacing: 0.22em; font-size: 12px; font-weight: 600; }
.kcr-logo-upwave { font-weight: 500; font-size: 14px; }
.kcr-logo-halcyon { font-weight: 800; font-size: 15px; }
.kcr-logo-lumera { font-size: 11px; font-weight: 300; letter-spacing: 0.03em; }

.kcr-logo-hide-mobile { }

/* ---------- brand mark ---------- */

.kcr-brand {
  position: absolute;
  left: clamp(20px, 4vw, 56px);
  bottom: clamp(20px, 4vh, 46px);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 3;
  pointer-events: none;
}

.kcr-brand-icon {
  position: relative;
  width: 26px;
  height: 26px;
  display: inline-block;
  transform: rotate(30deg);
}

.kcr-brand-sq {
  position: absolute;
  inset: 0;
  border: 1.6px solid rgba(255, 255, 255, 0.82);
  border-radius: 5px;
}

.kcr-brand-sq-2 { inset: 4px; }
.kcr-brand-sq-3 { inset: 8px; }

.kcr-brand-text {
  color: rgba(255, 255, 255, 0.82);
  font-weight: 700;
  font-size: clamp(18px, 2.4vw, 30px);
  letter-spacing: -0.01em;
}

/* ---------- responsive: tablet ---------- */

@media (max-width: 900px) and (min-width: 721px) {
  .kcr-panel { width: min(92vw, 820px); padding-left: 32px; padding-right: 32px; }
  .kcr-logos { gap: clamp(16px, 2.6vw, 32px); }
}

/* ---------- responsive: mobile ---------- */

@media (max-width: 720px) {
  .kcr-panel {
    width: 95vw;
    height: 94svh;
    max-height: 94svh;
    min-height: 0;
    padding: 20px;
    gap: 13px;
  }

  .kcr-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .kcr-card-outer { height: 100%; }
  .kcr-card { padding: 10px; }

  .kcr-avatar { width: 34px; height: 34px; }
  .kcr-avatar-sm { width: 24px; height: 24px; }

  .kcr-card-title { font-size: 10.5px; margin-bottom: 4px; }
  .kcr-card-review {
    font-size: 8px;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .kcr-name { font-size: 9px; }
  .kcr-company { font-size: 7px; }

  .kcr-quote-badge-standalone { width: 22px; height: 22px; margin-bottom: 6px; }
  .kcr-quote-badge-white, .kcr-quote-badge-pink { width: 18px; height: 18px; }

  .kcr-rating-pill { font-size: 8px; padding: 3px 6px; }

  .kcr-header-line { height: 18px; margin-bottom: 6px; }
  .kcr-title { font-size: 16px; }
  .kcr-subtitle { font-size: 9px; margin-top: 6px; }

  .kcr-brand { display: none; }

  .kcr-logos { gap: 14px; }
  .kcr-logo { font-size: 10px; }
  .kcr-logo-hide-mobile { display: none; }
}

/* ---------- responsive: short-height desktop ---------- */

@media (max-height: 650px) and (min-width: 721px) {
  .kcr-panel {
    height: calc(100svh - 24px);
    max-height: calc(100svh - 24px);
    min-height: 0;
    padding-top: 18px;
    padding-bottom: 16px;
    gap: 16px;
  }

  .kcr-header-line { height: 18px; }
  .kcr-title { font-size: 18px; line-height: 1.05; }
  .kcr-subtitle { margin-top: 6px; }

  .kcr-card-outer { height: clamp(140px, 24svh, 200px); }
}

/* ---------- reduced motion ---------- */

@media (prefers-reduced-motion: reduce) {
  .kcr-logo, .kcr-card { transition-duration: 0.01s; }
}
`;
