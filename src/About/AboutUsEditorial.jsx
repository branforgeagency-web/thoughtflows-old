import React, { useEffect, useRef, useState } from "react";
import mainPhoto from "../images/AboutImg/about-workspace.jpg";
import mentorPhoto from "../images/AboutImg/about-office-interior.jpg";
import fallbackPhoto from "../images/AboutImg/about-image.jpg";

/**
 * ThoughtFlows Medical Coding Academy — "Beyond the Code" About Us section.
 * Premium editorial layout, cinematic entrance animations, cursor parallax.
 * Pure CSS animations + React hooks only (no Tailwind, no Framer Motion).
 */

const AboutUsEditorial = () => {
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mainImgSrc, setMainImgSrc] = useState(mainPhoto);
  const [mentorImgSrc, setMentorImgSrc] = useState(mentorPhoto);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handleChange = (e) => setReducedMotion(e.matches);
    if (mq.addEventListener) {
      mq.addEventListener("change", handleChange);
    } else {
      mq.addListener(handleChange);
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", handleChange);
      } else {
        mq.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return undefined;

    const applyVars = () => {
      section.style.setProperty("--mouse-x", pointerRef.current.x.toFixed(4));
      section.style.setProperty("--mouse-y", pointerRef.current.y.toFixed(4));
      rafRef.current = null;
    };

    const scheduleUpdate = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(applyVars);
      }
    };

    const handlePointerMove = (e) => {
      const rect = section.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      pointerRef.current = {
        x: Math.max(-1, Math.min(1, nx)),
        y: Math.max(-1, Math.min(1, ny)),
      };
      scheduleUpdate();
    };

    const handlePointerLeave = () => {
      pointerRef.current = { x: 0, y: 0 };
      scheduleUpdate();
    };

    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={`tf-about-section${reducedMotion ? " tf-reduced-motion" : ""}`}
      style={{ "--mouse-x": 0, "--mouse-y": 0 }}
      aria-label="About ThoughtFlows Medical Coding Academy"
    >
      <style>{CSS}</style>

      <h1 className="tf-about-title">
        <span className="tf-mask">
          <span className="tf-line tf-line-1">ABOUT</span>
        </span>
        <span className="tf-mask">
          <span className="tf-line tf-line-2">US</span>
        </span>
      </h1>

      <div className="tf-about-left">
        <p className="tf-left-label">
          Empowering the next generation of medical coding professionals.
        </p>
        <p className="tf-left-copy">
          <strong>Learn. Certify. Succeed.</strong> Build industry-relevant
          skills through practical medical coding education, expert
          guidance, and career-focused training.
        </p>
      </div>

      <figure className="tf-main-figure">
        <div className="tf-main-image-wrap">
          <img
            src={mainImgSrc}
            alt="ThoughtFlows Medical Coding Academy workspace with team members working at desks"
            className="tf-main-image"
            loading="lazy"
            onError={() => setMainImgSrc(fallbackPhoto)}
          />
          <span className="tf-image-overlay" aria-hidden="true" />
        </div>
      </figure>

      <aside className="tf-right-panel">
        <figure className="tf-small-figure">
          <div className="tf-small-image-wrap">
            <img
              src={mentorImgSrc}
              alt="Modern ThoughtFlows Medical Coding Academy office and counseling cabin interior"
              className="tf-small-image"
              loading="lazy"
              onError={() => setMentorImgSrc(fallbackPhoto)}
            />
            <span className="tf-image-overlay" aria-hidden="true" />
          </div>
        </figure>

        <div className="tf-right-text">
          <span className="tf-mask tf-heading-mask">
            <h2 className="tf-right-heading">
              Building Careers
              <br />
              in Medical Coding
            </h2>
          </span>

          <p className="tf-right-copy">
            At ThoughtFlows Medical Coding Academy, we bridge the gap
            between healthcare knowledge and professional coding
            expertise. Our learning approach combines structured
            training, practical exposure, and dedicated mentorship to
            help students develop the skills and confidence needed to
            pursue opportunities in the healthcare industry.
          </p>
        </div>
      </aside>

      <div className="tf-index">
        <span className="tf-index-line" aria-hidden="true" />
        <span>ThoughtFlows Academy / 01</span>
      </div>
    </section>
  );
};

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap');

.tf-about-section, .tf-about-section * {
  box-sizing: border-box;
}

.tf-about-section {
  position: relative;
  isolation: isolate;
  width: 100%;
  height: 100svh;
  min-height: 480px;
  overflow: hidden;
  background: #F7F9FC;
  color: #101820;
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  border: none;
}

.tf-about-section h1,
.tf-about-section h2,
.tf-about-section p,
.tf-about-section figure {
  margin: 0;
  padding: 0;
}



/* ---------- Title ---------- */
.tf-about-title {
  position: absolute;
  top: 5.2%;
  left: 3.65%;
  z-index: 5;
  margin: 0;
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-size: clamp(76px, 10.4vw, 166px);
  font-weight: 700;
  line-height: 0.78;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #102A43;
  background: linear-gradient(132deg, #0B3A66 0%, #15AEBB 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 14px 30px rgba(11, 58, 102, 0.22));
}

/* The site's header ("glass-header tf-header-overlay") is transparent and
   floats absolutely over the page at >=1024px, so only the title needs a
   little extra clearance there to clear the nav pill -- the section's own
   background still runs full-bleed to the very top, behind the header,
   with no visible gap. Below 1024px the header is sticky/in-flow already. */
@media (min-width: 1024px) {
  .tf-about-title {
    top: calc(5.2% + 92px);
  }
}

.tf-mask {
  display: block;
  overflow: hidden;
}

.tf-line {
  display: block;
  transform: translateY(115%);
  animation: tfMaskUp 1.05s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.tf-line-1 { animation-delay: 0ms; }
.tf-line-2 { animation-delay: 100ms; }

@keyframes tfMaskUp {
  to { transform: translateY(0); }
}

/* ---------- Left text block ---------- */
.tf-about-left {
  position: absolute;
  left: 3.7%;
  /* Sits just below the title regardless of viewport width: the title's
     own top offset (5.2%) plus its rendered two-line height (font-size
     clamp(76px,10.4vw,166px) * line-height 0.78 * 2 lines) plus a fixed
     gap -- so this can never collide with "US" the way a flat top:%
     did at wider/shorter aspect ratios. */
  top: calc(5.2% + clamp(118.56px, 16.224vw, 258.96px) + 28px);
  width: min(230px, 19.5vw);
  z-index: 4;
  font-size: clamp(10px, 0.83vw, 13px);
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.025em;
  color: #526477;
}

.tf-left-label {
  margin-bottom: clamp(28px, 8.5vh, 68px);
  opacity: 0;
  transform: translateY(18px);
  animation: tfFadeUp 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 720ms;
}

.tf-left-copy {
  opacity: 0;
  transform: translateY(18px);
  animation: tfFadeUp 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 830ms;
}

.tf-left-copy strong {
  font-weight: 700;
}

@keyframes tfFadeUp {
  to { opacity: 1; transform: translateY(0); }
}

/* Must come AFTER the base .tf-about-left rule above: at equal
   specificity, CSS resolves same-selector conflicts by source order, not
   by which media query "sounds" more specific. Placing this override
   earlier in the file (e.g. inside the .tf-about-title media query near
   the top) would be silently beaten by the base rule below it. This
   keeps the left text block's top offset in lockstep with the title's
   own +92px header-clearance nudge at >=1024px, so it can never overlap
   the title's two-line height even at very wide/short aspect ratios. */
@media (min-width: 1024px) {
  .tf-about-left {
    top: calc(5.2% + 92px + clamp(118.56px, 16.224vw, 258.96px) + 28px);
  }
}

/* ---------- Main image ---------- */
.tf-main-figure {
  position: absolute;
  top: 30.1%;
  left: 26.45%;
  width: 43.25%;
  height: 51.4%;
  min-height: 205px;
  z-index: 2;
}

.tf-main-image-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #E5EDF5;
  border-radius: clamp(24px, 3.15vw, 46px);
  clip-path: inset(0 100% 0 0 round clamp(24px, 3.15vw, 46px));
  animation: tfRevealLTR 1.25s cubic-bezier(0.77, 0, 0.18, 1) forwards;
  animation-delay: 280ms;
}

.tf-main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  scale: 1.055;
  translate: calc(var(--mouse-x) * -8px) calc(var(--mouse-y) * -6px);
  transition: translate 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              scale 1.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.tf-main-image-wrap:hover .tf-main-image {
  scale: 1.095;
}

@keyframes tfRevealLTR {
  to { clip-path: inset(0 0 0 0 round clamp(24px, 3.15vw, 46px)); }
}

/* ---------- Shared image overlay ---------- */
.tf-image-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(115deg, rgba(255,255,255,0.13), transparent 38%, rgba(16,42,67,0.05));
  mix-blend-mode: soft-light;
}

/* ---------- Right panel ---------- */
.tf-right-panel {
  position: absolute;
  top: 30.8%;
  left: 72.35%;
  width: 25%;
  max-width: 390px;
  z-index: 3;
}

.tf-small-figure {
  width: 100%;
}

.tf-small-image-wrap {
  position: relative;
  width: 100%;
  height: clamp(104px, 23.4vh, 205px);
  overflow: hidden;
  background: #EAF3FB;
  border-radius: clamp(25px, 3.2vw, 46px);
  clip-path: inset(0 0 0 100% round clamp(25px, 3.2vw, 46px));
  animation: tfRevealRTL 1.15s cubic-bezier(0.77, 0, 0.18, 1) forwards;
  animation-delay: 440ms;
}

.tf-small-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 57%;
  scale: 1.075;
  translate: calc(var(--mouse-x) * 7px) calc(var(--mouse-y) * 5px);
  transition: translate 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              scale 1.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.tf-small-image-wrap:hover .tf-small-image {
  scale: 1.13;
}

@keyframes tfRevealRTL {
  to { clip-path: inset(0 0 0 0 round clamp(25px, 3.2vw, 46px)); }
}

.tf-right-text {
  padding-top: clamp(18px, 4.2vh, 35px);
}

.tf-heading-mask {
  padding-bottom: 0.08em;
}

.tf-right-heading {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-size: clamp(25px, 2.7vw, 45px);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.012em;
  color: #102A43;
  background: linear-gradient(132deg, #0B3A66 0%, #15AEBB 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 8px 18px rgba(11, 58, 102, 0.16));
  margin: 0;
  transform: translateY(115%);
  animation: tfMaskUp 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 810ms;
}

.tf-right-copy {
  max-width: 355px;
  margin-top: clamp(21px, 5.3vh, 43px);
  font-size: clamp(10px, 0.83vw, 13px);
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.025em;
  color: #526477;
  opacity: 0;
  transform: translateY(14px);
  animation: tfFadeUp 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 960ms;
}

/* ---------- Bottom-right index ---------- */
.tf-index {
  position: absolute;
  right: 2.3%;
  bottom: 3%;
  display: flex;
  align-items: center;
  gap: 9px;
  color: rgba(16,42,67,0.43);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(18px);
  animation: tfFadeUp 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 1.15s;
}

.tf-index-line {
  width: 28px;
  height: 1px;
  background: currentColor;
  display: inline-block;
}

/* ---------- Reduced motion ---------- */
.tf-reduced-motion .tf-line,
.tf-reduced-motion .tf-left-label,
.tf-reduced-motion .tf-left-copy,
.tf-reduced-motion .tf-main-image-wrap,
.tf-reduced-motion .tf-small-image-wrap,
.tf-reduced-motion .tf-right-heading,
.tf-reduced-motion .tf-right-copy,
.tf-reduced-motion .tf-index {
  animation-duration: 1ms !important;
  animation-delay: 0s !important;
}

.tf-reduced-motion .tf-main-image,
.tf-reduced-motion .tf-small-image {
  translate: 0 0;
  transition: none !important;
}

.tf-reduced-motion .tf-main-image-wrap:hover .tf-main-image,
.tf-reduced-motion .tf-small-image-wrap:hover .tf-small-image {
  scale: 1.055;
}

/* ---------- Tablet (<=900px) ---------- */
@media (max-width: 900px) {
  .tf-about-section {
    height: auto;
    min-height: 100svh;
    padding: 28px 24px 52px;
    overflow: visible;
  }

  .tf-about-title {
    position: relative;
    top: auto;
    left: auto;
    font-size: clamp(72px, 15vw, 124px);
    line-height: 0.78;
  }

  .tf-main-figure {
    position: relative;
    top: auto;
    left: auto;
    width: 68%;
    height: 390px;
    margin-top: 22px;
    margin-left: auto;
    min-height: 0;
  }

  .tf-about-left {
    position: relative;
    top: auto;
    left: auto;
    width: 31%;
    margin-top: -250px;
    padding-right: 20px;
  }

  .tf-left-label {
    margin-bottom: 52px;
  }

  .tf-right-panel {
    position: relative;
    top: auto;
    left: auto;
    width: 56%;
    max-width: none;
    margin-top: 160px;
    margin-left: auto;
  }

  .tf-small-image-wrap {
    height: 210px;
  }

  .tf-index {
    display: none;
  }
}

/* ---------- Mobile (<=620px) ---------- */
@media (max-width: 620px) {
  .tf-about-section {
    padding: 22px 16px 44px;
  }

  .tf-about-title {
    font-size: clamp(62px, 21vw, 96px);
    letter-spacing: -0.085em;
  }

  .tf-main-figure {
    width: 100%;
    height: min(70vw, 330px);
    margin-top: 24px;
  }

  .tf-main-image-wrap {
    border-radius: 27px;
  }

  .tf-about-left {
    width: 100%;
    margin-top: 29px;
    padding-right: 0;
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    gap: 28px;
  }

  .tf-left-label {
    margin-bottom: 0;
  }

  .tf-right-panel {
    width: 100%;
    margin-top: 58px;
  }

  .tf-small-image-wrap {
    height: min(51vw, 245px);
    border-radius: 27px;
  }

  .tf-right-text {
    padding-top: 25px;
  }

  .tf-right-heading {
    font-size: clamp(34px, 10vw, 53px);
  }

  .tf-right-copy {
    max-width: 88%;
    margin-top: 25px;
  }

  .tf-about-left,
  .tf-right-copy {
    font-size: 11px;
    line-height: 1.48;
  }
}
`;

export default AboutUsEditorial;
