import React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import heroPhoto from "./blog-banner-workspace.jpg";

const CSS = `
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");

.novere-stage * {
  box-sizing: border-box;
}

.novere-stage button,
.novere-stage a {
  font: inherit;
}

.novere-stage {
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100svh;
  height: 100dvh;
  max-height: 100dvh;
  overflow: hidden;
  background: #f7fafc;
  background: linear-gradient(135deg, #f0f7fb 0%, #ffffff 45%, #eef7fa 100%);
  font-family: "DM Sans", Arial, Helvetica, sans-serif;
}

.novere-hero {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  isolation: isolate;
  background: transparent;
  transform-style: preserve-3d;
}

.novere-media {
  position: absolute;
  inset: -30px;
  z-index: 0;
  will-change: transform;
}

.novere-image {
  position: absolute;
  inset: -3%;
  background-image: url("${heroPhoto}");
  background-size: cover;
  background-position: center center;
  filter: saturate(1.05) contrast(1.01) brightness(1.01);
  will-change: transform;
  opacity: 0.95;
}

/* Soft medical cyan ambient light */
.novere-light {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(
      circle at 18% 40%,
      rgba(21, 174, 187, 0.12) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 75% 45%,
      rgba(11, 58, 102, 0.05) 0%,
      transparent 55%
    );
}

/* Crisp Light reading fade: medical coder visible on left, dissolves into pure white/ice-blue reading surface on right */
.novere-dark-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background:
    linear-gradient(
      90deg,
      rgba(247, 250, 252, 0.0) 0%,
      rgba(247, 250, 252, 0.15) 35%,
      rgba(247, 250, 252, 0.72) 52%,
      rgba(255, 255, 255, 0.95) 68%,
      #ffffff 100%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.55) 0%,
      transparent 18%,
      transparent 72%,
      rgba(240, 247, 250, 0.78) 100%
    );
}

.novere-tree-shadow {
  position: absolute;
  top: -10%;
  right: -5%;
  z-index: 3;
  width: 50%;
  height: 120%;
  pointer-events: none;
  background: radial-gradient(
    ellipse at 70% 50%,
    rgba(255, 255, 255, 0.85) 0%,
    transparent 70%
  );
}

.novere-vignette {
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
  box-shadow:
    inset 0 0 100px rgba(255, 255, 255, 0.7),
    inset 0 -80px 90px rgba(230, 243, 247, 0.65);
}

.novere-grain {
  position: absolute;
  inset: -80%;
  z-index: 5;
  opacity: 0.025;
  pointer-events: none;
  mix-blend-mode: multiply;
  background-image:
    radial-gradient(
      rgba(11, 58, 102, 0.4) 0.55px,
      transparent 0.75px
    ),
    radial-gradient(
      rgba(21, 174, 187, 0.3) 0.55px,
      transparent 0.8px
    );
  background-position: 0 0, 7px 9px;
  background-size: 8px 8px, 11px 11px;
  animation: novere-grain 0.24s steps(2) infinite;
}

@keyframes novere-grain {
  0% { transform: translate3d(-1%, 1%, 0); }
  25% { transform: translate3d(1%, -2%, 0); }
  50% { transform: translate3d(2%, 1%, 0); }
  75% { transform: translate3d(-2%, -1%, 0); }
  100% { transform: translate3d(1%, 2%, 0); }
}

/* Emblem / Header Accent */
.novere-logo {
  position: absolute;
  top: clamp(24px, 4.5vh, 48px);
  left: 5%;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #0b2545;
  transform: translateZ(42px);
}

.novere-logo svg {
  display: block;
  width: clamp(38px, 3.5vw, 48px);
  height: auto;
  color: #15AEBB;
}

.novere-badge-text {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #0b3a66;
}

/* Main right content wrapper (vertically centered on desktop) */
.novere-content-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 58%;
  right: 4%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: clamp(70px, 9vh, 96px);
  padding-bottom: clamp(50px, 7vh, 80px);
  pointer-events: none;
}

.novere-content {
  position: relative;
  width: min(100%, 620px);
  color: #0b2545;
  pointer-events: auto;
}

.novere-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(21, 174, 187, 0.12);
  border: 1px solid rgba(21, 174, 187, 0.35);
  color: #0d8291;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: clamp(14px, 1.8vh, 20px);
}

.novere-title {
  margin: 0;
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif !important;
  font-size: clamp(38px, 4.4vw, 68px);
  font-weight: 800 !important;
  line-height: 1.04;
  letter-spacing: -0.025em;
  text-wrap: balance;
  color: #0b2545;
}

.novere-title span.highlight {
  color: #15AEBB;
  background: linear-gradient(135deg, #0b6b82 0%, #15AEBB 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.novere-description {
  max-width: 500px;
  margin: clamp(14px, 2vh, 22px) 0 0;
  color: #486581;
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  font-size: clamp(14px, 1.1vw, 17px);
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.01em;
  text-wrap: balance;
}

/* CTA */
.novere-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: clamp(44px, 4.8vh, 52px);
  margin-top: clamp(20px, 3vh, 32px);
  padding: 0 clamp(22px, 2.2vw, 30px);
  overflow: hidden;
  border: 1px solid rgba(11, 58, 102, 0.18);
  border-radius: 999px;
  color: #ffffff;
  background: linear-gradient(135deg, #0b3a66 0%, #0d8291 100%);
  box-shadow:
    0 10px 24px rgba(11, 58, 102, 0.18),
    0 2px 6px rgba(11, 58, 102, 0.08);
  text-decoration: none;
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  font-size: clamp(13px, 0.95vw, 15px);
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 250ms ease,
    box-shadow 350ms ease,
    background 350ms ease;
}

.novere-button::before {
  content: "";
  position: absolute;
  top: -80%;
  bottom: -80%;
  left: -65%;
  width: 38%;
  opacity: 0;
  transform: skewX(-19deg);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition:
    left 700ms cubic-bezier(0.2, 0.75, 0.25, 1),
    opacity 250ms ease;
}

.novere-button span,
.novere-button svg {
  position: relative;
  z-index: 2;
}

.novere-button svg {
  width: 15px;
  height: 15px;
  transition: transform 350ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.novere-button:hover {
  color: #ffffff;
  background: linear-gradient(135deg, #072a4c 0%, #15AEBB 100%);
  box-shadow:
    0 14px 34px rgba(11, 58, 102, 0.28),
    0 4px 10px rgba(11, 58, 102, 0.15);
  transform: translateY(-2px);
}

.novere-button:hover::before {
  left: 135%;
  opacity: 1;
}

.novere-button:hover svg {
  transform: translateX(4px);
}

/* Bottom Left Statement — Strictly constrained */
.novere-bottom-title {
  position: absolute;
  left: 5%;
  bottom: 8.5%;
  max-width: min(420px, 34vw);
  z-index: 10;
  margin: 0;
  color: #0b2545;
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif !important;
  font-size: clamp(22px, 2.3vw, 36px);
  font-weight: 700 !important;
  line-height: 1.15;
  letter-spacing: -0.02em;
  transform: translateZ(44px);
}

.novere-bottom-title span {
  display: block;
  color: #15AEBB;
}

/* Footer Bar */
.novere-footer {
  position: absolute;
  right: 0;
  bottom: clamp(14px, 2.5vh, 24px);
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(20px, 5vw, 56px);
  transform: translateZ(28px);
}

.novere-brand {
  color: #627d98;
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  font-size: clamp(11px, 0.9vw, 13.5px);
  font-weight: 500;
  letter-spacing: -0.01em;
}

.novere-services {
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.2vw, 16px);
  color: #627d98;
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  font-size: clamp(11px, 0.9vw, 13px);
  font-weight: 500;
  letter-spacing: -0.01em;
}

.novere-services b {
  color: #15AEBB;
  font-size: 0.74em;
  font-weight: 600;
  animation: novere-spark 3.5s ease-in-out infinite;
}

.novere-services b:nth-of-type(2) {
  animation-delay: 1.2s;
}

.novere-services b:nth-of-type(3) {
  animation-delay: 2.4s;
}

@keyframes novere-spark {
  0%, 100% {
    opacity: 0.45;
    transform: scale(0.85) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.25) rotate(90deg);
  }
}

/* Ambient floating medical cyan bubbles */
.novere-particles {
  position: absolute;
  inset: 0;
  z-index: 6;
  overflow: hidden;
  pointer-events: none;
}

.novere-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  opacity: 0;
  background: rgba(21, 174, 187, 0.75);
  box-shadow: 0 0 10px rgba(21, 174, 187, 0.45);
  animation: novere-particle-rise linear infinite;
}

.novere-particle:nth-child(1) {
  left: 11%;
  bottom: 17%;
  animation-duration: 8s;
  animation-delay: -2s;
}

.novere-particle:nth-child(2) {
  left: 20%;
  bottom: 10%;
  animation-duration: 10s;
  animation-delay: -7s;
}

.novere-particle:nth-child(3) {
  left: 32%;
  bottom: 15%;
  animation-duration: 9s;
  animation-delay: -4s;
}

.novere-particle:nth-child(4) {
  left: 45%;
  bottom: 8%;
  animation-duration: 11s;
  animation-delay: -5s;
}

.novere-particle:nth-child(5) {
  left: 60%;
  bottom: 18%;
  animation-duration: 8.5s;
  animation-delay: -1s;
}

@keyframes novere-particle-rise {
  0% {
    opacity: 0;
    transform: translate3d(0, 20px, 0) scale(0.5);
  }
  15% { opacity: 0.75; }
  70% { opacity: 0.35; }
  100% {
    opacity: 0;
    transform: translate3d(24px, -170px, 0) scale(1.2);
  }
}

/* Tablet Screens (1024px and down) */
@media (max-width: 1024px) {
  .novere-content-wrapper {
    left: 48%;
    right: 4%;
    padding-top: 80px;
    padding-bottom: 50px;
  }

  .novere-content {
    width: 100%;
    max-width: 520px;
  }

  .novere-title {
    font-size: clamp(34px, 4.6vw, 54px);
  }

  .novere-bottom-title {
    max-width: 280px;
    font-size: clamp(18px, 2.2vw, 24px);
    bottom: 8%;
  }

  .novere-services {
    display: none;
  }
}

/* Mobile Screens (768px and down) */
@media (max-width: 768px) {
  .novere-media {
    inset: -18px;
  }

  .novere-image {
    inset: -5%;
    background-position: center center;
    opacity: 0.32;
  }

  .novere-dark-overlay {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.75) 0%,
        rgba(247, 250, 252, 0.92) 35%,
        rgba(255, 255, 255, 0.98) 100%
      );
  }

  .novere-tree-shadow {
    display: none;
  }

  .novere-vignette {
    box-shadow:
      inset 0 0 60px rgba(255, 255, 255, 0.6),
      inset 0 -60px 80px rgba(230, 243, 247, 0.6);
  }

  .novere-logo {
    top: 24px;
    left: 6%;
  }

  .novere-content-wrapper {
    left: 6%;
    right: 6%;
    justify-content: flex-end;
    padding-top: 70px;
    padding-bottom: 50px;
  }

  .novere-content {
    width: 100%;
    max-width: 460px;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .novere-title {
    max-width: 460px;
    font-size: clamp(32px, 9vw, 46px);
    line-height: 1.04;
  }

  .novere-description {
    max-width: 360px;
    margin-top: 14px;
    font-size: 14px;
    line-height: 1.5;
  }

  .novere-button {
    min-height: 44px;
    margin-top: 20px;
    padding: 0 22px;
    font-size: 13px;
  }

  /* Hide competing absolute bottom text on small mobile to avoid any overlap */
  .novere-bottom-title {
    display: none;
  }

  .novere-footer {
    bottom: 16px;
    padding: 0 6%;
  }

  .novere-brand {
    font-size: 11px;
  }

  .novere-services {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .novere-grain,
  .novere-services b,
  .novere-particle {
    animation: none;
  }
}
`;

const contentContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.45,
      staggerChildren: 0.12,
    },
  },
};

const revealItem = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function BlogBanner() {
  const reducedMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 78,
    damping: 24,
    mass: 0.8,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 78,
    damping: 24,
    mass: 0.8,
  });

  const imageX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  const contentX = useTransform(smoothX, [-0.5, 0.5], [5, -5]);
  const contentY = useTransform(smoothY, [-0.5, 0.5], [4, -4]);

  const handlePointerMove = (event) => {
    if (reducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();

    pointerX.set(
      (event.clientX - bounds.left) / bounds.width - 0.5
    );

    pointerY.set(
      (event.clientY - bounds.top) / bounds.height - 0.5
    );
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const handleScrollToArticles = (e) => {
    e.preventDefault();
    const target = document.getElementById("blog-articles");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="novere-stage" aria-label="ThoughtFlows Blog Banner">
      <style>{CSS}</style>

      <motion.div
        className="novere-hero"
        initial={{
          opacity: 0,
          scale: 1.02,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <motion.div
          className="novere-media"
          style={{
            x: reducedMotion ? 0 : imageX,
            y: reducedMotion ? 0 : imageY,
          }}
        >
          <motion.div
            className="novere-image"
            initial={{ scale: 1.1 }}
            animate={
              reducedMotion
                ? { scale: 1.06 }
                : {
                    scale: [1.06, 1.1, 1.07],
                    x: ["0%", "-0.6%", "0%"],
                    y: ["0%", "-0.3%", "0%"],
                  }
            }
            transition={{
              duration: 20,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </motion.div>

        <div className="novere-light" />
        <div className="novere-dark-overlay" />
        <div className="novere-tree-shadow" />
        <div className="novere-vignette" />
        <div className="novere-grain" />

        <div className="novere-particles">
          <span className="novere-particle" />
          <span className="novere-particle" />
          <span className="novere-particle" />
          <span className="novere-particle" />
          <span className="novere-particle" />
        </div>

        {/* Brand Badge in Top Left */}
        <motion.div
          className="novere-logo"
          initial={{
            opacity: 0,
            scale: 0.8,
            y: -10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <svg
            viewBox="0 0 52 52"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="26"
              cy="26"
              r="22"
              stroke="currentColor"
              strokeWidth="2"
            />
            {/* Open medical coding knowledge book emblem */}
            <path
              d="M17 21C20.5 19.5 24 20 26 21.5V33.5C24 32 20.5 31.5 17 33V21Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M35 21C31.5 19.5 28 20 26 21.5V33.5C28 32 31.5 31.5 35 33V21Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26 15V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="novere-badge-text">Knowledge Hub</span>
        </motion.div>

        {/* Main Content (Right Side, Vertically Centered) */}
        <div className="novere-content-wrapper">
          <motion.div
            className="novere-content"
            variants={contentContainer}
            initial="hidden"
            animate="visible"
            style={{
              x: reducedMotion ? 0 : contentX,
              y: reducedMotion ? 0 : contentY,
            }}
          >
            <motion.div variants={revealItem}>
              <span className="novere-kicker">
                <span>✦</span> Medical Coding &amp; Career Journal
              </span>
            </motion.div>

            <motion.h1
              className="novere-title"
              variants={revealItem}
            >
              Insights that code
              <br />
              <span className="highlight">healthcare's future.</span>
            </motion.h1>

            <motion.p
              className="novere-description"
              variants={revealItem}
            >
              Expert ICD-10 updates, AAPC CPC preparation strategies, AI medical coding guides, and career roadmaps from industry mentors.
            </motion.p>

            <motion.div variants={revealItem}>
              <motion.a
                className="novere-button"
                href="#blog-articles"
                onClick={handleScrollToArticles}
                whileTap={{ scale: 0.97 }}
              >
                <span>Explore latest articles</span>

                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8H13M9.5 4.5L13 8L9.5 11.5"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Left Statement — Bounded to Left Column */}
        <motion.h2
          className="novere-bottom-title"
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.8,
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Learn with precision.
          <span>Code with confidence.</span>
        </motion.h2>

        {/* Footer Bar */}
        <motion.footer
          className="novere-footer"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
        >
          <span className="novere-brand">
            thoughtflows.in · medical coding knowledge hub
          </span>

          <div className="novere-services">
            <span>cpc preparation</span>
            <b>✦</b>
            <span>icd-10 updates</span>
            <b>✦</b>
            <span>ai in healthcare</span>
            <b>✦</b>
            <span>career growth</span>
          </div>
        </motion.footer>
      </motion.div>
    </section>
  );
}
