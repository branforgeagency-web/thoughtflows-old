import React, { useCallback, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/* A loose, irregular closed loop — hand-drawn rather than a perfect
   ellipse: asymmetric control points, and the path end lands just short
   of (and slightly inside) its start, the way a hand-drawn circle
   overlaps its own beginning. viewBox is proportioned close to a wide
   card so "meet" scaling keeps it legible at most card aspect ratios. */
const HAND_DRAWN_PATH =
    'M158,214 C96,118 208,34 404,30 C614,26 742,92 752,202 ' +
    'C762,314 636,388 408,384 C206,380 78,336 70,240 ' +
    'C66,196 104,166 150,172';

const EASE_CINEMATIC = [0.65, 0, 0.35, 1];
const EASE_SOFT = [0.22, 1, 0.36, 1];

const STYLE = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

.hdtr-stage {
  position: relative;
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 4vw, 48px);
  overflow: hidden;
  background: linear-gradient(160deg, #ffffff 0%, #f3fafb 55%, #e9f6f8 100%);
  box-sizing: border-box;
}

.hdtr-stage * { box-sizing: border-box; }

.hdtr-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(70px);
  z-index: 0;
}

.hdtr-glow--tl {
  top: -12%;
  left: -10%;
  width: 55vw;
  height: 55vw;
  max-width: 680px;
  max-height: 680px;
  background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 70%);
}

.hdtr-glow--br {
  bottom: -16%;
  right: -10%;
  width: 60vw;
  height: 60vw;
  max-width: 760px;
  max-height: 760px;
  background: radial-gradient(circle, rgba(21,174,187,0.30) 0%, rgba(21,174,187,0) 70%);
}

.hdtr-card {
  position: relative;
  z-index: 1;
  width: clamp(300px, 88vw, 1180px);
  min-height: clamp(380px, 56vw, 600px);
  border-radius: clamp(18px, 3vw, 36px);
  background: rgba(248, 252, 253, 0.74);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(7, 55, 102, 0.10);
  box-shadow:
    0 50px 100px -35px rgba(7, 55, 102, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(28px, 6vw, 64px);
  overflow: hidden;
}

.hdtr-grain {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.05;
  mix-blend-mode: multiply;
  background-image: repeating-linear-gradient(
    0deg,
    rgba(7, 55, 102, 0.55) 0px,
    rgba(7, 55, 102, 0.55) 1px,
    transparent 1px,
    transparent 3px
  );
}

.hdtr-outline {
  position: absolute;
  inset: 5%;
  width: 90%;
  height: 90%;
  pointer-events: none;
  z-index: 0;
}

.hdtr-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: clamp(12px, 1.8vw, 20px);
  max-width: 720px;
  padding: 0 12px;
}

.hdtr-label {
  display: inline-flex;
  align-items: center;
  padding: 7px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(7, 55, 102, 0.16);
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #0b3a66;
}

.hdtr-headline {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 600;
  font-size: clamp(2.1rem, 6vw, 4.4rem);
  letter-spacing: -0.02em;
  line-height: 1.06;
  color: #0a2440;
  margin: 0;
}

.hdtr-subtitle {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: clamp(0.95rem, 1.6vw, 1.15rem);
  font-weight: 400;
  line-height: 1.6;
  color: #3c586e;
  opacity: 0.85;
  max-width: 540px;
  margin: 0;
}

.hdtr-replay {
  margin-top: 6px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(7, 55, 102, 0.16);
  box-shadow: 0 8px 20px -10px rgba(7, 55, 102, 0.3);
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #0b3a66;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  min-height: 40px;
}

.hdtr-replay:focus-visible {
  outline: 2px solid #097d8a;
  outline-offset: 2px;
}

@media (max-width: 640px) {
  .hdtr-stage { padding: 16px; }
  .hdtr-card { border-radius: 20px; }
}

@media (prefers-reduced-motion: reduce) {
  .hdtr-replay { transition: none !important; }
}
`;

export default function HandDrawnTitleReveal({
    category,
    title = 'Make ideas visible.',
    subtitle,
    replayLabel = 'Replay animation',
    strokeColor = '#1a1a1a',
    speed = 1,
    background,
    headingLevel = 'h2',
    className = '',
}) {
    const prefersReducedMotion = useReducedMotion();
    const [playKey, setPlayKey] = useState(0);

    const replay = useCallback(() => setPlayKey((k) => k + 1), []);

    const outlineDuration = prefersReducedMotion ? 0.01 : 2.6 / speed;
    const Headline = headingLevel;

    return (
        <div className={`hdtr-stage ${className}`} style={background ? { background } : undefined}>
            <style>{STYLE}</style>

            <div className="hdtr-glow hdtr-glow--tl" aria-hidden="true" />
            <div className="hdtr-glow hdtr-glow--br" aria-hidden="true" />

            <motion.div
                key={playKey}
                className="hdtr-card"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: prefersReducedMotion ? 0.2 : 0.9 / speed, ease: EASE_SOFT }}
            >
                <div className="hdtr-grain" aria-hidden="true" />

                <svg
                    className="hdtr-outline"
                    viewBox="0 0 800 420"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    focusable="false"
                >
                    <motion.path
                        d={HAND_DRAWN_PATH}
                        fill="none"
                        stroke={strokeColor}
                        strokeWidth={9}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            pathLength: { duration: outlineDuration, ease: EASE_CINEMATIC },
                            opacity: { duration: outlineDuration * 0.15 },
                        }}
                    />
                </svg>

                <div className="hdtr-content">
                    <motion.span
                        className="hdtr-label"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.35 / speed, ease: 'easeOut' }}
                    >
                        {category || 'Creative Original'}
                    </motion.span>

                    <motion.div
                        initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.9, delay: prefersReducedMotion ? 0 : 0.6 / speed, ease: EASE_SOFT }}
                    >
                        <Headline className="hdtr-headline">{title}</Headline>
                    </motion.div>

                    {subtitle ? (
                        <motion.p
                            className="hdtr-subtitle"
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : 0.85 / speed, ease: 'easeOut' }}
                        >
                            {subtitle}
                        </motion.p>
                    ) : null}

                    <motion.button
                        type="button"
                        className="hdtr-replay"
                        onClick={replay}
                        aria-label="Replay the title reveal animation"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 1.05 / speed, ease: 'easeOut' }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <polyline points="1 4 1 10 7 10" />
                            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                        </svg>
                        {replayLabel}
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}
