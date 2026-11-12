import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { mediaUrl } from '../config/media';
const contactVisual = mediaUrl("images/contact/contact-banner-balls.jpg");

/**
 * "Get in Touch" conversion banner for ThoughtFlows Medical Coding Academy.
 * Full-bleed photographic hero (same visual language as the site's own
 * Contact page banner: pill badge + heading over a dark-overlaid photo).
 * Tailwind for styling, Framer Motion for all animation, self-contained.
 */

const PLAIN_WORDS = ["Your", "Future", "in", "Medical", "Coding."];
const HIGHLIGHTED = new Set(["Future", "Medical", "Coding."]);

const headlineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } },
};

const wordVariant = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const ctaContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } },
};

const ctaItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const ContactBanner = ({
  primaryCtaLabel = "Contact Our Team",
  primaryCtaHref = "/contact",
  secondaryCtaLabel = "Explore Our Courses",
  secondaryCtaHref = "/#popular-courses",
}) => {
  const sectionRef = useRef(null);
  const [badgeHovered, setBadgeHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      aria-label="Get in touch with ThoughtFlows Medical Coding Academy"
    >
      <div className="relative min-h-[460px] w-full overflow-hidden md:min-h-[520px]">
        <motion.img
          src={contactVisual}
          alt="A phone, mail, email and messaging icon engraved on wooden balls beside a laptop, representing ways to reach ThoughtFlows"
          style={{ y: imageParallaxY }}
          className="absolute inset-0 h-[112%] w-full object-cover"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#07233f]/88 via-[#07233f]/55 to-[#07233f]/15"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#07233f]/50 via-transparent to-transparent"
        />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1320px] flex-col justify-center px-6 py-16 md:px-10 md:py-20">
          <motion.h2
            variants={headlineContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="m-0 flex flex-wrap items-center gap-x-4 gap-y-3 text-[clamp(30px,4.4vw,54px)] font-bold leading-[1.05] tracking-tight text-white"
          >
            <motion.span
              variants={wordVariant}
              onHoverStart={() => setBadgeHovered(true)}
              onHoverEnd={() => setBadgeHovered(false)}
              animate={{ scale: badgeHovered ? 1.035 : 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center rounded-full bg-white px-6 py-2.5 font-sans text-[clamp(26px,3.6vw,44px)] font-extrabold tracking-tight text-[#0E8E96]"
            >
              Let's&nbsp;Build
            </motion.span>

            {PLAIN_WORDS.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  variants={wordVariant}
                  className={
                    "inline-block font-serif " +
                    (HIGHLIGHTED.has(word) ? "text-[#5FE0E6]" : "text-white")
                  }
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-white/85"
          >
            Have questions about our medical coding courses, training programs
            or career opportunities? Our team is here to guide you every step
            of the way.
          </motion.p>

          <motion.div
            variants={ctaContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.div variants={ctaItem}>
              {primaryCtaHref.startsWith("#") ? (
                <a
                  href={primaryCtaHref}
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#07233f] shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#EAF3FB] active:translate-y-0"
                >
                  {primaryCtaLabel}
                </a>
              ) : (
                <Link
                  to={primaryCtaHref}
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#07233f] shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#EAF3FB] active:translate-y-0"
                >
                  {primaryCtaLabel}
                </Link>
              )}
            </motion.div>
            <motion.div variants={ctaItem}>
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                {secondaryCtaLabel}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
