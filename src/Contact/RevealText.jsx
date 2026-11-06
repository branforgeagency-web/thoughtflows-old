"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * @typedef {Object} RevealTextProps
 * @property {string} [text]
 * @property {string} [textColor]
 * @property {string} [overlayColor]
 * @property {string} [fontSize]
 * @property {number} [letterDelay]
 * @property {number} [overlayDelay]
 * @property {number} [overlayDuration]
 * @property {number} [springDuration]
 * @property {string[]} [letterImages]
 */

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2070&q=80",
];

/**
 * Full-screen black hero: one enormous word, letters spring in, each
 * letter reveals a photograph on hover, then a purple flash sweeps
 * left-to-right once the entrance finishes.
 *
 * @param {RevealTextProps} props
 */
export function RevealText({
  text = "KEXSIO",
  textColor = "text-white",
  overlayColor = "text-purple-500",
  fontSize = "text-[clamp(70px,16vw,250px)]",
  letterDelay = 0.08,
  overlayDelay = 0.05,
  overlayDuration = 0.4,
  springDuration = 600,
  letterImages = DEFAULT_IMAGES,
  // Optional extension (not part of the original spec, which forbids a
  // background image): when provided, this photo sits behind the word
  // with a light tint over it so the letters stay fully readable.
  backgroundImage,
  backgroundOverlayColor = "rgba(247,249,252,0.86)",
} = {}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showOverlayText, setShowOverlayText] = useState(false);

  useEffect(() => {
    setShowOverlayText(false);

    const lastLetterDelay = Math.max(0, text.length - 1) * letterDelay;
    const totalDelay = lastLetterDelay * 1000 + springDuration;

    const timeoutId = window.setTimeout(() => {
      setShowOverlayText(true);
    }, totalDelay);

    return () => window.clearTimeout(timeoutId);
  }, [text, letterDelay, springDuration]);

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F7F9FC]">
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ backgroundColor: backgroundOverlayColor }}
          />
        </>
      )}
      <div className="relative z-10 flex items-center justify-center px-4">
        <div className="flex">
          {text.split("").map((letter, index) => {
            // A literal space as the sole text child of an inline-block
            // span gets whitespace-collapsed by the browser, which
            // visually glues neighboring words together. Render it as a
            // plain fixed-width spacer instead of running it through the
            // animated letter treatment.
            if (letter === " ") {
              return (
                <span
                  key={`space-${index}`}
                  aria-hidden="true"
                  className="inline-block"
                  style={{ width: "0.34em" }}
                />
              );
            }

            return (
            <motion.span
              key={`${letter}-${index}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                delay: index * letterDelay,
                type: "spring",
                damping: 8,
                stiffness: 200,
                mass: 0.8,
              }}
              className={`${fontSize} relative inline-block cursor-pointer overflow-hidden font-black leading-[0.82] tracking-[-0.09em]`}
            >
              {/* Invisible sizing layer -- preserves correct letter box size */}
              <span className="invisible">{letter}</span>

              {/* White base text layer */}
              <motion.span
                className={`absolute inset-0 ${textColor}`}
                animate={{
                  opacity: hoveredIndex === index ? 0 : 1,
                }}
                transition={{
                  duration: 0.12,
                  ease: "easeOut",
                }}
              >
                {letter}
              </motion.span>

              {/* Image-filled hover layer */}
              <motion.span
                className="absolute inset-0 bg-cover bg-no-repeat text-transparent"
                style={{
                  backgroundImage: `url("${
                    letterImages[index % letterImages.length]
                  }")`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  backgroundPosition:
                    hoveredIndex === index ? "80% center" : "10% center",
                }}
                transition={{
                  opacity: {
                    duration: 0.12,
                    ease: "easeOut",
                  },
                  backgroundPosition: {
                    duration: 3,
                    ease: "easeInOut",
                  },
                }}
              >
                {letter}
              </motion.span>

              {/* Purple sequential overlay flash, once entrance finishes */}
              {showOverlayText && (
                <motion.span
                  className={`${overlayColor} pointer-events-none absolute inset-0`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    delay: index * overlayDelay,
                    duration: overlayDuration,
                    times: [0, 0.1, 0.7, 1],
                    ease: "easeInOut",
                  }}
                >
                  {letter}
                </motion.span>
              )}
            </motion.span>
            );
          })}
        </div>
      </div>
    </main>
  );
}
