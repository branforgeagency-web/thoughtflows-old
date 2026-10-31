import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import GalleryCard from "./GalleryCard";
import { BRANCHES } from "./branchData";
import { useMagneticDock } from "./useMagneticDock";
import "./BranchGallery.css";

/* ---------- design tokens (desktop, scale = 1) ---------- */
const BASE = {
  restW: 78,
  restH: 350,
  maxW: 190,
  maxH: 420,
  gap: 14,
  feature: 560,
  sigma: 118,
  radius: 27,
};
// widest state: one 560 feature card + 7 narrow cards + gaps + breathing room
const DESIGN_WIDTH = BASE.feature + (BRANCHES.length - 1) * (BASE.restW + BASE.gap) + 40;

const scaled = (s) => ({
  restW: BASE.restW * s,
  restH: BASE.restH * s,
  maxW: BASE.maxW * s,
  maxH: BASE.maxH * s,
  gap: Math.max(8, BASE.gap * s),
  feature: BASE.feature * s,
  sigma: BASE.sigma * s,
  radius: BASE.radius * Math.max(0.8, s),
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ---------- small hooks ---------- */
function useMediaQuery(query) {
  const get = () => (typeof window !== "undefined" && window.matchMedia ? window.matchMedia(query).matches : false);
  const [matches, setMatches] = useState(get);
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia(query);
    const on = () => setMatches(mq.matches);
    on();
    if (mq.addEventListener) mq.addEventListener("change", on);
    else mq.addListener(on);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", on);
      else mq.removeListener(on);
    };
  }, [query]);
  return matches;
}

const MouseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <rect x="6.5" y="3" width="11" height="18" rx="5.5" />
    <path className="tfbg-wheel" d="M12 7v3" />
  </svg>
);

const Arrow = ({ dir }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {dir === "left" ? <path d="M19 12H5M11 6l-6 6 6 6" /> : <path d="M5 12h14M13 6l6 6-6 6" />}
  </svg>
);

/* ======================================================================
   Desktop / tablet: magnetic dock row with in-place feature card
   ====================================================================== */
function DockGallery({ items, reducedMotion }) {
  const stageRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [active, setActive] = useState(null);

  const dims = useMemo(() => scaled(scale), [scale]);
  const dimsRef = useRef(dims);
  const activeRef = useRef(active);

  const dock = useMagneticDock({ count: items.length, dimsRef, activeRef, reducedMotion });

  // keep refs in sync, then let the spring loop animate to the new targets
  useEffect(() => {
    dimsRef.current = dims;
    dock.kick();
  }, [dims, dock]);

  useEffect(() => {
    activeRef.current = active;
    dock.kick();
  }, [active, dock]);

  // proportional scaling for tablets / small laptops
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return undefined;
    const fit = () => setScale(Math.max(0.5, Math.min(1, el.clientWidth / DESIGN_WIDTH)));
    fit();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(fit) : null;
    if (ro) ro.observe(el);
    else window.addEventListener("resize", fit);
    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", fit);
    };
  }, []);

  const close = useCallback(() => setActive(null), []);
  const n = items.length;

  // keyboard: Esc closes, arrows switch branch while open
  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setActive(null);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setActive((a) => (a === null ? 0 : (a + 1) % n));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActive((a) => (a === null ? 0 : (a - 1 + n) % n));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, n]);

  const stageHeight = Math.max(dims.feature, dims.maxH) + 40 * scale;

  return (
    <>
      <div
        ref={stageRef}
        className="tfbg-stage"
        style={{ height: stageHeight, "--s": scale }}
        onPointerEnter={dock.onPointerEnter}
        onPointerMove={dock.onPointerMove}
        onPointerLeave={dock.onPointerLeave}
      >
        <div className="tfbg-row" style={{ gap: dims.gap }} role="group" aria-label="Thoughtflows academy branches">
          {items.map((item, i) => (
            <GalleryCard
              key={item.id}
              ref={dock.setCardRef(i)}
              item={item}
              index={i}
              total={n}
              width={dims.restW}
              height={dims.restH}
              isActive={active === i}
              isDimmed={active !== null && active !== i}
              onSelect={() => setActive((a) => (a === i ? null : i))}
              onClose={close}
            />
          ))}
        </div>

        <AnimatePresence>
          {active !== null && (
            <motion.div
              key="backdrop"
              className="tfbg-backdrop"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.5 }}
              onClick={close}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="tfbg-live" aria-live="polite">
        {active !== null ? `Showing ${items[active].title}, ${active + 1} of ${n}` : ""}
      </div>

      <div className="tfbg-pill-slot">
        <AnimatePresence>
          {active === null && (
            <motion.div
              key="pill"
              className="tfbg-pill"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
            >
              <MouseIcon />
              Move your cursor across the gallery
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

/* ======================================================================
   Mobile / touch: swipe strip + tap-to-open feature modal
   ====================================================================== */
function TouchGallery({ items, reducedMotion }) {
  const [active, setActive] = useState(null);
  const [dir, setDir] = useState(1);
  const n = items.length;

  const go = useCallback(
    (d) => {
      setDir(d);
      setActive((a) => (a === null ? 0 : (a + d + n) % n));
    },
    [n]
  );

  useEffect(() => {
    if (active === null) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, go]);

  const slide = {
    enter: (d) => ({ x: reducedMotion ? 0 : d * 60, opacity: 0, scale: reducedMotion ? 1 : 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d) => ({ x: reducedMotion ? 0 : d * -60, opacity: 0, scale: reducedMotion ? 1 : 0.96 }),
  };

  return (
    <>
      <div className="tfbg-strip" role="group" aria-label="Thoughtflows academy branches">
        {items.map((item, i) => (
          <GalleryCard
            key={item.id}
            item={item}
            index={i}
            total={n}
            width={0}
            height={0}
            staticOpen
            className="tfbg-strip-card"
            style={{ width: undefined, height: undefined, borderRadius: undefined }}
            onSelect={() => {
              setDir(1);
              setActive(i);
            }}
          />
        ))}
      </div>

      <div className="tfbg-pill-slot">
        <div className="tfbg-pill">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 11V6a2 2 0 0 1 4 0v5m0-1a2 2 0 0 1 4 0v4a6 6 0 0 1-6 6h-1a5 5 0 0 1-4.5-2.8L4 14a1.8 1.8 0 0 1 3-2l2 2" />
          </svg>
          Swipe to explore · tap a branch
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="modal"
            className="tfbg-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${items[active].title}, ${items[active].category}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.35 }}
            onClick={() => setActive(null)}
          >
            <div className="tfbg-modal-frame" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence initial={false} custom={dir} mode="popLayout">
                <motion.div
                  key={items[active].id}
                  custom={dir}
                  variants={slide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: reducedMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                  drag={reducedMotion ? false : "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.5}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) go(1);
                    else if (info.offset.x > 60) go(-1);
                  }}
                  className="tfbg-modal-card"
                >
                  <GalleryCard
                    item={items[active]}
                    index={active}
                    total={n}
                    width={0}
                    height={0}
                    staticOpen
                    isActive
                    eager
                    className="tfbg-modal-inner"
                    style={{ width: "100%", height: "100%", borderRadius: undefined }}
                    onClose={() => setActive(null)}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="tfbg-modal-nav">
                <button type="button" className="tfbg-nav-btn" aria-label="Previous branch" onClick={() => go(-1)}>
                  <Arrow dir="left" />
                </button>
                <span className="tfbg-count">
                  {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                </span>
                <button type="button" className="tfbg-nav-btn" aria-label="Next branch" onClick={() => go(1)}>
                  <Arrow dir="right" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ======================================================================
   Section
   ====================================================================== */
export default function BranchGallery({ items = BRANCHES }) {
  const reducedMotion = !!useReducedMotion();
  // touch-first or narrow screens get the swipe layout; fine pointers get the magnetic dock
  const touchLayout = useMediaQuery("(max-width: 767px), (hover: none) and (pointer: coarse)");

  return (
    <section className="tfbg" aria-labelledby="tfbg-heading">
      <div className="tfbg-bg" aria-hidden="true">
        <span className="tfbg-bg-grid" />
        <span className="tfbg-bg-glow tfbg-bg-glow--center" />
        <span className="tfbg-bg-glow tfbg-bg-glow--purple" />
        <span className="tfbg-bg-glow tfbg-bg-glow--blue" />
        <span className="tfbg-bg-vignette" />
      </div>

      <div className="tfbg-inner">
        <header className="tfbg-head">
          <motion.span className="tfbg-eyebrow" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} custom={0}>
            <span className="tfbg-eyebrow-line" />
            Thoughtflows Medical Coding Academy
            <span className="tfbg-eyebrow-line" />
          </motion.span>
          <motion.h2 id="tfbg-heading" className="tfbg-heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} custom={1}>
            Learn Anywhere.
            <span>Build Your Healthcare Career.</span>
          </motion.h2>
          <motion.p className="tfbg-sub" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} custom={2}>
            Explore our academy branches and discover professional medical coding training environments designed to
            prepare the next generation of healthcare coding professionals.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {touchLayout ? (
            <TouchGallery items={items} reducedMotion={reducedMotion} />
          ) : (
            <DockGallery items={items} reducedMotion={reducedMotion} />
          )}
        </motion.div>
      </div>
    </section>
  );
}
