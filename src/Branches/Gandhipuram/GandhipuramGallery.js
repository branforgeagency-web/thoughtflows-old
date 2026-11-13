import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { mediaUrl } from '../../config/media';
import Reveal from '../Theni/Reveal';
import "./GandhipuramGallery.css";

const gvmPhotos = [
  {
    id: "gvm-workstation-pods",
    src: mediaUrl("images/Interiors/gvm/gvm-workstation-pods-active.jpg"),
    title: "Collaborative Workstation Pods in Session",
    tag: "Live Operations Hub",
    caption:
      "Medical coding scholars working on real-world clinical records inside curved acoustic pods beneath hanging wisteria.",
    featured: true,
  },
  {
    id: "gvm-workstation-hall",
    src: mediaUrl("images/Interiors/gvm/gvm-workstation-hall-perspective.jpg"),
    title: "Spacious Coding Workstation Gallery",
    tag: "Workstation Hub",
    caption:
      "Bright, airy overview of collaborative pod workstations illuminated by modern drop pendants and floral ceiling canopies.",
    featured: true,
  },
  {
    id: "gvm-pergola-cubicles",
    src: mediaUrl("images/Interiors/gvm/gvm-pergola-study-cubicles.jpg"),
    title: "Independent Pergola Study Cubicles",
    tag: "Practice Pods",
    caption:
      "Timber pergola study bays equipped with lantern illumination and etched glass partitions for focused coding practice.",
  },
  {
    id: "gvm-training-classroom",
    src: mediaUrl("images/Interiors/gvm/gvm-training-classroom.jpg"),
    title: "Smart Coding Training Auditorium",
    tag: "Batch Training",
    caption:
      "Fully lit, air-conditioned lecture auditorium with interactive digital projector and blue individual study desks.",
  },
  {
    id: "gvm-classroom-perspective",
    src: mediaUrl("images/Interiors/gvm/gvm-classroom-perspective.jpg"),
    title: "Classroom & Heritage Art Partition",
    tag: "Classroom Design",
    caption:
      "Modern batch learning space with inspirational typography and Coimbatore landmark line art.",
  },
  {
    id: "gvm-reception-corridor",
    src: mediaUrl("images/Interiors/gvm/gvm-reception-corridor.jpg"),
    title: "Entrance Lobby & Sacred Pooja Niche",
    tag: "Welcome Lobby",
    caption:
      "Bright reception corridor featuring an illuminated pooja niche and vibrant linear slat ceiling lighting.",
  },
  {
    id: "gvm-bunker-cafe",
    src: mediaUrl("images/Interiors/gvm/gvm-bunker-lounge.jpg"),
    title: "The Bunker Room Breakout Cafe",
    tag: "Breakout Lounge",
    caption:
      "Cheerful student breakout lounge with honeycomb geometric mirrors, flower arrangements, and warm timber counter.",
  },
];

const GandhipuramGallery = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  const openLightbox = (index) => setActivePhoto(index);
  const closeLightbox = () => setActivePhoto(null);

  const showNext = useCallback(
    (step) => {
      setActivePhoto((current) => {
        if (current === null) return null;
        return (current + step + gvmPhotos.length) % gvmPhotos.length;
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
    <section className="gvm-section gvm-gallery-section" id="gandhipuram-campus-tour">
      <div className="gandhipuram-wrap">
        <Reveal className="gandhipuram-center">
          <span className="gandhipuram-eyebrow">
            <Sparkles size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />
            Campus Tour &amp; Facilities
          </span>
          <h2>Inside ThoughtFlows Gandhipuram</h2>
          <p>
            Explore our Cross Cut Road campus — featuring state-of-the-art training halls,
            wisteria-shaded workstation pods, breakout cafes, and quiet study alcoves.
          </p>
        </Reveal>

        <div className="gvm-gallery-grid">
          {gvmPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className={`gvm-gallery-item ${photo.featured ? "is-featured" : ""}`}
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="gvm-gallery-image-wrapper">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="gvm-gallery-overlay">
                  <span className="gvm-gallery-tag">{photo.tag}</span>
                  <h3 className="gvm-gallery-title">{photo.title}</h3>
                  <p className="gvm-gallery-caption">{photo.caption}</p>
                </div>
                <button
                  type="button"
                  className="gvm-gallery-zoom-btn"
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
            className="gvm-gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={gvmPhotos[activePhoto].title}
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="gvm-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              className="gvm-lightbox-nav is-prev"
              onClick={(e) => {
                e.stopPropagation();
                showNext(-1);
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={30} />
            </button>

            <figure
              className="gvm-lightbox-figure"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gvmPhotos[activePhoto].src}
                alt={gvmPhotos[activePhoto].title}
              />
              <figcaption>
                <span className="gvm-lightbox-tag">
                  {gvmPhotos[activePhoto].tag}
                </span>
                <strong>{gvmPhotos[activePhoto].title}</strong>
                <p>{gvmPhotos[activePhoto].caption}</p>
                <small>
                  {activePhoto + 1} / {gvmPhotos.length}
                </small>
              </figcaption>
            </figure>

            <button
              type="button"
              className="gvm-lightbox-nav is-next"
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

export default GandhipuramGallery;

