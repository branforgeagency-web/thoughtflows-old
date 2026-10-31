import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";



const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

/**
 * One branch card. Size, radius and the --p (0..1 openness) variable are driven
 * externally (by the magnetic dock) so this component never re-renders on pointer move.
 */
const GalleryCard = forwardRef(function GalleryCard(
  { item, index, total, width, height, isActive, isDimmed, staticOpen, onSelect, onClose, className = "", style, eager },
  ref
) {
  const label = isActive
    ? `Close ${item.title}, ${item.category}`
    : `Open ${item.title}, ${item.category} (${index + 1} of ${total})`;

  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect?.();
    }
  };

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      aria-label={label}
      aria-pressed={!!isActive}
      onClick={onSelect}
      onKeyDown={handleKey}
      className={[
        "tfbg-card",
        isActive ? "is-active" : "",
        isDimmed ? "is-dim" : "",
        staticOpen ? "is-static" : "",
        className,
      ].join(" ")}
      style={
        {
          width,
          height,
          borderRadius: Math.min(width, height) / 2,
          "--p": staticOpen ? 1 : 0,
          ...style,
        }
      }
    >
      <img
        className="tfbg-img"
        src={item.image}
        alt={item.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
      />
      <span className="tfbg-shade" aria-hidden="true" />
      <span className="tfbg-shine" aria-hidden="true" />

      <span className="tfbg-text">
        <span className="tfbg-cat">{item.category}</span>
        <span className="tfbg-title">{item.title}</span>
        <AnimatePresence>
          {isActive && item.href && (
            <motion.span
              key="cta"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.35, duration: 0.5 } }}
              exit={{ opacity: 0, y: 6, transition: { duration: 0.2 } }}
              className="tfbg-cta-wrap"
            >
              <Link to={item.href} className="tfbg-cta" onClick={(e) => e.stopPropagation()}>
                Explore campus
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      <AnimatePresence>
        {isActive && onClose && (
          <motion.button
            key="close"
            type="button"
            className="tfbg-close"
            aria-label="Close branch image"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.25, duration: 0.35 } }}
            exit={{ opacity: 0, scale: 0.7, transition: { duration: 0.15 } }}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <CloseIcon />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
});

export default GalleryCard;
