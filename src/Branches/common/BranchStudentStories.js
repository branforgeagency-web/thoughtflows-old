import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { STUDENT_REVIEWS_CSS } from "../../Home/StudentReviews";

/**
 * Branch testimonials in the same design as the home page "Student stories"
 * (Home/StudentReviews.jsx) – 4 card styles: profile, quote, full photo, teal.
 *
 * testimonials: [{ name, title, rating, review, avatar }]  (existing branch data)
 * Reviews keep their full text: cards show a short preview + "Read more".
 */

const EASE = [0.22, 1, 0.36, 1];
const isPlaceholder = (src = "") => /\/(man|woman)\.png$/i.test(decodeURIComponent(src));

const QuoteMark = ({ color = "#ffffff", size = 13 }) => (
  <span className="sr-quote-mark" style={{ color, fontSize: size }} aria-hidden="true">
    &rdquo;
  </span>
);

const StarRow = ({ rating = 5 }) => (
  <div className="sr-stars" aria-label={`${rating} out of 5 stars`}>
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} width="9" height="9" viewBox="0 0 24 24" fill={i < rating ? "#f6b43d" : "#d9d6dd"}>
        <path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 16.5L5.5 21L7.5 13.5L2 9H9L12 2Z" />
      </svg>
    ))}
  </div>
);

const ReadMore = ({ onClick, light }) => (
  <button type="button" className={`srb-more ${light ? "is-light" : ""}`} onClick={onClick}>
    Read more
  </button>
);

/** Put a testimonial with a real photo into slot 3 (the full-photo card). */
const arrange = (group) => {
  const g = [...group];
  if (g.length >= 3 && isPlaceholder(g[2].avatar)) {
    const swap = g.findIndex((t, i) => i !== 2 && !isPlaceholder(t.avatar));
    if (swap !== -1) [g[2], g[swap]] = [g[swap], g[2]];
  }
  return g;
};

const BranchStudentStories = ({
  testimonials = [],
  eyebrow = "OUR TESTIMONIALS",
  heading = "Hear from Our Successful Candidates",
  subtitle = "Don't just take our word for it. Hear from our successful candidates who have gone on to have successful careers in medical coding.",
}) => {
  const total = testimonials.length;
  const perPage = Math.min(4, total);
  const [start, setStart] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [open, setOpen] = useState(null);

  const group = useMemo(() => {
    const g = [];
    for (let i = 0; i < perPage; i++) g.push(testimonials[(start + i) % total]);
    return arrange(g);
  }, [start, perPage, total, testimonials]);

  useEffect(() => {
    const id = setInterval(() => setActiveCard((p) => (p + 1) % Math.max(perPage, 1)), 2600);
    return () => clearInterval(id);
  }, [perPage]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!total) return null;
  const page = (dir) => setStart((s) => (s + dir * perPage + total * 4) % total);

  const shine = (i) => (
    <AnimatePresence>
      {activeCard === i && (
        <motion.span
          className="sr-shine"
          initial={{ x: "-120%" }}
          animate={{ x: "220%" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.15, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );

  const renderCard = (t, i) => {
    const style = i === 2 && isPlaceholder(t.avatar) ? 1 : i; // no photo → quote card
    const common = {
      animate: { y: activeCard === i ? -7 : 0, scale: activeCard === i ? 1.025 : 1 },
      transition: { duration: 0.55, ease: EASE },
      onHoverStart: () => setActiveCard(i),
    };
    const more = (light) => <ReadMore light={light} onClick={() => setOpen(t)} />;

    if (style === 0)
      return (
        <motion.div className="sr-card sr-card-1" {...common}>
          <div className="sr-top-profile">
            <div className="sr-avatar-wrap">
              <img className="sr-avatar" src={t.avatar} alt={`Portrait of ${t.name}`} draggable={false} />
              <span className="sr-quote-badge sr-quote-badge-pink">
                <QuoteMark size={10} />
              </span>
            </div>
            <div className="sr-name-block">
              <p className="sr-name">{t.name}</p>
              <p className="sr-company">{t.title}</p>
              <StarRow rating={t.rating} />
            </div>
          </div>
          <p className="sr-card-review srb-clamp srb-clamp-7">&ldquo;{t.review}&rdquo;</p>
          {more(false)}
          {shine(i)}
        </motion.div>
      );

    if (style === 1)
      return (
        <motion.div className="sr-card sr-card-2" {...common}>
          <span className="sr-quote-badge sr-quote-badge-pink sr-quote-badge-standalone">
            <QuoteMark size={12} />
          </span>
          <p className="sr-card-review srb-clamp srb-clamp-8">&ldquo;{t.review}&rdquo;</p>
          {more(false)}
          <div className="sr-profile-row sr-profile-row-bottom">
            <img className="sr-avatar sr-avatar-sm" src={t.avatar} alt={`Portrait of ${t.name}`} draggable={false} />
            <div>
              <p className="sr-name">{t.name}</p>
              <p className="sr-company">{t.title}</p>
            </div>
          </div>
          {shine(i)}
        </motion.div>
      );

    if (style === 2)
      return (
        <motion.div className="sr-card sr-card-3" {...common}>
          <div className="sr-photo-wrap">
            <motion.img
              className="sr-photo"
              src={t.avatar}
              alt={`Portrait of ${t.name}`}
              draggable={false}
              animate={{ scale: activeCard === i ? 1.09 : 1.04, x: activeCard === i ? -3 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <div className="sr-photo-overlay" />
            <span className="sr-rating-pill">{(t.rating || 5).toFixed(1)} &#9733;</span>
            <div className="sr-photo-content">
              <p className="sr-card-review sr-card-review-light srb-clamp srb-clamp-4">&ldquo;{t.review}&rdquo;</p>
              {more(true)}
              <div className="sr-profile-row">
                <p className="sr-name sr-name-light">{t.name}</p>
                <p className="sr-company sr-company-light">{t.title}</p>
              </div>
            </div>
          </div>
          {shine(i)}
        </motion.div>
      );

    return (
      <motion.div className="sr-card sr-card-4" {...common}>
        <div className="sr-top-split">
          <span className="sr-quote-badge sr-quote-badge-white">
            <QuoteMark color="#097D8A" size={12} />
          </span>
          <span className="sr-rating-pill sr-rating-pill-lg">{(t.rating || 5).toFixed(1)} &#9733;</span>
        </div>
        <p className="sr-card-review sr-card-review-light-pink srb-clamp srb-clamp-7">&ldquo;{t.review}&rdquo;</p>
        {more(true)}
        <div className="sr-profile-row sr-profile-row-bottom">
          <img className="sr-avatar sr-avatar-sm sr-avatar-border" src={t.avatar} alt={`Portrait of ${t.name}`} draggable={false} />
          <div>
            <p className="sr-name sr-name-light">{t.name}</p>
            <p className="sr-company sr-company-light">{t.title}</p>
          </div>
        </div>
        {shine(i)}
      </motion.div>
    );
  };

  return (
    <>
      <style>{STUDENT_REVIEWS_CSS}</style>
      <style>{BRANCH_CSS}</style>
      <section className="sr-root srb-root">
        <motion.div
          className="sr-shape sr-shape-yellow"
          initial={{ y: 0, rotate: -5 }}
          animate={{ y: [0, -10, 0], rotate: [-5, -2, -5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="sr-shape sr-shape-purple"
          initial={{ y: 0, rotate: 14 }}
          animate={{ y: [0, -12, 0], rotate: [14, 11, 14] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="sr-glow"
          animate={{ x: [0, 25, 0], y: [0, -14, 0], opacity: [0.32, 0.48, 0.32] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="sr-panel-wrapper">
          <motion.div
            className="sr-panel"
            initial={{ opacity: 0, y: 32, scale: 0.975 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div className="sr-sheen" aria-hidden="true" />

            <div className="sr-header">
              <motion.span
                className="sr-header-line"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.55 }}
              />
              <p className="srb-eyebrow">{eyebrow}</p>
              <h2 className="sr-title">{heading}</h2>
              <p className="sr-subtitle">{subtitle}</p>
            </div>

            <div className="srb-stage">
              {total > perPage && (
                <button type="button" className="srb-nav is-prev" onClick={() => page(-1)} aria-label="Previous reviews">
                  <ChevronLeft size={20} />
                </button>
              )}
              <AnimatePresence mode="wait">
                <motion.div
                  key={start}
                  className="sr-grid"
                  style={{ gridTemplateColumns: perPage < 4 ? `repeat(${perPage}, minmax(0, 1fr))` : undefined }}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  {group.map((t, i) => (
                    <div className="sr-card-outer" key={`${t.name}-${i}`}>
                      {renderCard(t, i)}
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
              {total > perPage && (
                <button type="button" className="srb-nav is-next" onClick={() => page(1)} aria-label="More reviews">
                  <ChevronRight size={20} />
                </button>
              )}
            </div>

            <div className="sr-logos">
              <span className="sr-logo sr-logo-aapc">AAPC</span>
              <span className="sr-logo sr-logo-cpc">CPC&reg;</span>
              <span className="sr-logo sr-logo-cemc">CEMC</span>
              <span className="sr-logo sr-logo-rcms sr-logo-hide-mobile">RCMS</span>
            </div>
          </motion.div>
        </div>

        <div className="sr-brand">
          <span className="sr-brand-icon" aria-hidden="true">
            <span className="sr-brand-sq sr-brand-sq-1" />
            <span className="sr-brand-sq sr-brand-sq-2" />
            <span className="sr-brand-sq sr-brand-sq-3" />
          </span>
          <span className="sr-brand-text">ThoughtFlows</span>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            className="srb-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Review by ${open.name}`}
            onClick={() => setOpen(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="srb-modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 24, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <button type="button" className="srb-modal-close" onClick={() => setOpen(null)} aria-label="Close">
                <X size={18} />
              </button>
              <div className="sr-top-profile">
                <img className="sr-avatar" src={open.avatar} alt={`Portrait of ${open.name}`} />
                <div className="sr-name-block">
                  <p className="sr-name">{open.name}</p>
                  <p className="sr-company">{open.title}</p>
                  <StarRow rating={open.rating} />
                </div>
              </div>
              <p className="srb-modal-text">&ldquo;{open.review}&rdquo;</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BranchStudentStories;

const BRANCH_CSS = `
.srb-root { margin-bottom: 0; }
.srb-eyebrow {
  margin: 0 0 6px;
  font-size: clamp(9px, 0.85vw, 11px);
  font-weight: 700;
  letter-spacing: 0.16em;
  color: #097D8A;
}
.srb-root .sr-subtitle { max-width: 620px; }
.srb-stage { position: relative; min-height: 0; height: 100%; display: flex; align-items: center; }
.srb-stage > .sr-grid { flex: 1; }
.srb-clamp { display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; }
.srb-clamp-4 { -webkit-line-clamp: 4; }
.srb-clamp-7 { -webkit-line-clamp: 7; }
.srb-clamp-8 { -webkit-line-clamp: 8; }
.srb-more {
  position: relative;
  z-index: 2;
  align-self: flex-start;
  margin: 6px 0 8px;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  font-size: clamp(9px, 0.85vw, 11.5px);
  font-weight: 700;
  color: #097D8A;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.srb-more.is-light { color: #ffdb68; }
.srb-nav {
  position: absolute;
  top: 50%;
  z-index: 6;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #ffffff;
  color: #29282d;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(25, 24, 32, 0.12);
  cursor: pointer;
  transform: translateY(-50%);
  transition: background 0.2s ease, color 0.2s ease;
}
.srb-nav:hover { background: #097D8A; color: #ffffff; }
.srb-nav.is-prev { left: clamp(-30px, -2.6vw, -16px); }
.srb-nav.is-next { right: clamp(-30px, -2.6vw, -16px); }
.srb-modal {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.srb-modal-card {
  position: relative;
  width: min(560px, 100%);
  max-height: 80vh;
  overflow-y: auto;
  background: linear-gradient(160deg, #eafbfc 0%, #ffffff 60%);
  border-radius: 12px;
  padding: 30px 28px 28px;
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  color: #29282d;
}
.srb-modal-card .sr-name { font-size: 15px; }
.srb-modal-card .sr-company { font-size: 12px; }
.srb-modal-text { margin: 14px 0 0; font-size: 15px; line-height: 1.7; color: #55525a; }
.srb-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;
  background: rgba(0, 0, 0, 0.06);
  color: #29282d;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
@media (max-width: 720px) {
  .srb-clamp-7, .srb-clamp-8 { -webkit-line-clamp: 4; }
  .srb-clamp-4 { -webkit-line-clamp: 3; }
  .srb-more { font-size: 9px; margin: 3px 0 4px; }
  .srb-nav { width: 30px; height: 30px; }
  .srb-nav.is-prev { left: -14px; }
  .srb-nav.is-next { right: -14px; }
}
`;
