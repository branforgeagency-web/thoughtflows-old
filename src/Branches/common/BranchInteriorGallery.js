import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { mediaUrl } from "../../config/media";
import { BRANCH_INTERIOR_PHOTOS, BRANCH_INTERIOR_NAMES } from "./branchInteriorPhotos";
import "./BranchInteriorGallery.css";

/**
 * "Campus Tour" photo grid + lightbox for a branch landing page.
 * Usage:
 *   <BranchInteriorGallery branchKey="ameerpet" description="..." />
 *   Region pages can combine branches (limit = photos per branch):
 *   <BranchInteriorGallery branchKey={["ameerpet", "dilsukhnagar"]} limit={6} heading="..." />
 */
const BranchInteriorGallery = ({ branchKey, heading, description, limit }) => {
  const keys = Array.isArray(branchKey) ? branchKey : [branchKey];
  const isMulti = keys.length > 1;
  const photos = keys.flatMap((key) =>
    (BRANCH_INTERIOR_PHOTOS[key] || []).slice(0, limit || undefined).map((p) => ({
      ...p,
      branchName: BRANCH_INTERIOR_NAMES[key] || "",
      url: mediaUrl(p.src),
    }))
  );
  const name = keys.map((k) => BRANCH_INTERIOR_NAMES[k]).filter(Boolean).join(" & ");
  const [active, setActive] = useState(null);

  const close = () => setActive(null);
  const step = useCallback(
    (dir) =>
      setActive((cur) => (cur === null ? null : (cur + dir + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, step]);

  if (photos.length === 0) return null;
  const current = active !== null ? photos[active] : null;

  return (
    <section className="big-section" id={`${keys.join("-")}-campus-tour`}>
      <div className="big-wrap">
        <motion.div
          className="big-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="big-eyebrow">
            <Sparkles size={13} /> Campus Tour &amp; Facilities
          </span>
          <h2>{heading || `Inside ThoughtFlows ${name}`}</h2>
          {description && <p>{description}</p>}
        </motion.div>

        <div className="big-grid">
          {photos.map((photo, index) => (
            <motion.button
              type="button"
              key={photo.id}
              className="big-item"
              onClick={() => setActive(index)}
              aria-label={`View larger image: ${photo.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.07 }}
            >
              <img
                src={photo.url}
                alt={`${photo.title} – ThoughtFlows ${photo.branchName}`}
                loading="lazy"
                decoding="async"
              />
              <span className="big-overlay">
                <span className="big-tag">{isMulti ? `${photo.branchName} · ${photo.tag}` : photo.tag}</span>
                <span className="big-title">{photo.title}</span>
                <span className="big-caption">{photo.caption}</span>
              </span>
              <span className="big-zoom" aria-hidden="true">
                <ZoomIn size={18} />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            className="big-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button type="button" className="big-lb-close" onClick={close} aria-label="Close">
              <X size={24} />
            </button>
            <button
              type="button"
              className="big-lb-nav is-prev"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={30} />
            </button>
            <figure className="big-lb-figure" onClick={(e) => e.stopPropagation()}>
              <img src={current.url} alt={`${current.title} – ThoughtFlows ${current.branchName}`} />
              <figcaption>
                <span className="big-lb-tag">{isMulti ? `${current.branchName} · ${current.tag}` : current.tag}</span>
                <strong>{current.title}</strong>
                <p>{current.caption}</p>
                <small>
                  {active + 1} / {photos.length}
                </small>
              </figcaption>
            </figure>
            <button
              type="button"
              className="big-lb-nav is-next"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
            >
              <ChevronRight size={30} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BranchInteriorGallery;
