import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { mediaUrl } from '../../config/media';
import Reveal from '../Theni/Reveal';
import "./HopesGallery.css";

const hopesPhotos = [
  {
    id: "hopes-reception-wave",
    src: mediaUrl("images/Interiors/hopes/hopes-reception-wave-ceiling.jpg"),
    title: "Signature Reception & Wave Ceiling",
    tag: "Welcome Lobby",
    caption:
      "Iconic entrance reception hall featuring an undulating emerald acoustic wave ceiling, 3D ThoughtFlows insignia, and world time zone clocks.",
    featured: true,
  },
  {
    id: "hopes-corporate-boardroom",
    src: mediaUrl("images/Interiors/hopes/hopes-corporate-boardroom-culture.jpg"),
    title: "Executive Boardroom & Culture Wall",
    tag: "Discussion & Interviews",
    caption:
      "Corporate conference boardroom with oval executive table, display screen, and 'Put Students First' philosophy wall.",
    featured: true,
  },
  {
    id: "hopes-creative-classroom",
    src: mediaUrl("images/Interiors/hopes/hopes-creative-batch-classroom.jpg"),
    title: "Creative Batch Studio & Lattice Ceiling",
    tag: "Interactive Classroom",
    caption:
      "Smart learning studio with wood-carved fretwork ceiling panel, interactive projector, and colorful student wall mural.",
  },
  {
    id: "hopes-smart-classroom",
    src: mediaUrl("images/Interiors/hopes/hopes-smart-classroom.jpg"),
    title: "Dual-Tone Smart Coding Classroom",
    tag: "Batch Training",
    caption:
      "Individual yellow and teal study stations in a bright, modern batch hall equipped for focused chart abstraction.",
  },
  {
    id: "hopes-cafeteria",
    src: mediaUrl("images/Interiors/hopes/hopes-cafeteria-pantry-lounge.jpg"),
    title: "Student Dining & Refreshment Cafe",
    tag: "Dining & Breakout",
    caption:
      "Spacious dining and breakout lounge with marble high-top island, gold hammered teardrop pendant lights, and cafe bar.",
  },
  {
    id: "hopes-director-office",
    src: mediaUrl("images/Interiors/hopes/hopes-director-executive-office.jpg"),
    title: "Branch Director's Chamber",
    tag: "Executive Leadership",
    caption:
      "Bright director's counseling office with slatted timber ceiling, monstera planter divider, and executive desk suite.",
  },
  {
    id: "hopes-cherry-blossom",
    src: mediaUrl("images/Interiors/hopes/hopes-cherry-blossom-workstations.jpg"),
    title: "Cherry Blossom Workstation Hub",
    tag: "Medical Coding Lab",
    caption:
      "Signature open-plan workstation hall beneath a pink cherry blossom floral canopy with bright, pleasant illumination.",
  },
];

const HopesGallery = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  const openLightbox = (index) => setActivePhoto(index);
  const closeLightbox = () => setActivePhoto(null);

  const showNext = useCallback(
    (step) => {
      setActivePhoto((current) => {
        if (current === null) return null;
        return (current + step + hopesPhotos.length) % hopesPhotos.length;
      });
    },
    []
  );

  useEffect(() => {
    if (activePhoto === null) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext(1);
      if (e.key === "ArrowLeft") showNext(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activePhoto, showNext]);

  return (
    <section className="hopes-section hopes-gallery-section" id="hopes-campus-tour">
      <div className="hopes-wrap">
        <Reveal className="hopes-center">
          <span className="hopes-eyebrow">
            <Sparkles size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />
            Campus Tour &amp; Facilities
          </span>
          <h2>Inside ThoughtFlows Hopes Branch</h2>
          <p>
            Take a visual tour of our Peelamedu campus — designed to provide a productive,
            ergonomic, and inspiring atmosphere for future medical coding professionals.
          </p>
        </Reveal>

        <div className="hopes-gallery-grid">
          {hopesPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className={`hopes-gallery-item ${photo.featured ? "is-featured" : ""}`}
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="hopes-gallery-image-wrapper">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="hopes-gallery-overlay">
                  <span className="hopes-gallery-tag">{photo.tag}</span>
                  <h3 className="hopes-gallery-title">{photo.title}</h3>
                  <p className="hopes-gallery-caption">{photo.caption}</p>
                </div>
                <button
                  type="button"
                  className="hopes-gallery-zoom-btn"
                  aria-label={`View larger image of ${photo.title}`}
                >
                  <ZoomIn size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto !== null && (
          <motion.div
            className="hopes-gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={hopesPhotos[activePhoto].title}
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="hopes-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              className="hopes-lightbox-nav is-prev"
              onClick={(e) => {
                e.stopPropagation();
                showNext(-1);
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={30} />
            </button>

            <figure
              className="hopes-lightbox-figure"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={hopesPhotos[activePhoto].src}
                alt={hopesPhotos[activePhoto].title}
              />
              <figcaption>
                <span className="hopes-lightbox-tag">
                  {hopesPhotos[activePhoto].tag}
                </span>
                <strong>{hopesPhotos[activePhoto].title}</strong>
                <p>{hopesPhotos[activePhoto].caption}</p>
                <small>
                  {activePhoto + 1} / {hopesPhotos.length}
                </small>
              </figcaption>
            </figure>

            <button
              type="button"
              className="hopes-lightbox-nav is-next"
              onClick={(e) => {
                e.stopPropagation();
                showNext(1);
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

export default HopesGallery;

