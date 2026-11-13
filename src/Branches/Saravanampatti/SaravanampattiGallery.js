import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { mediaUrl } from '../../config/media';
import Reveal from '../Theni/Reveal';
import "./SaravanampattiGallery.css";

const svmPhotos = [
  {
    id: "svm-clinical-anatomy",
    src: mediaUrl("images/Interiors/svm/svm-clinical-anatomy-session.jpg"),
    title: "Clinical Chart Abstraction Seminar",
    tag: "Live Training",
    caption:
      "Faculty-led seminar analyzing human organ systems and clinical abstraction with live ICD-10 and CPT coding.",
    featured: true,
  },
  {
    id: "svm-batch-classroom",
    src: mediaUrl("images/Interiors/svm/svm-batch-classroom-students.jpg"),
    title: "CPC Batch Classroom in Session",
    tag: "Batch Learning",
    caption:
      "Active medical coding batch working through real-world ICD-10-CM and CPT case studies with certified faculty.",
    featured: true,
  },
  {
    id: "svm-founders-floor",
    src: mediaUrl("images/Interiors/svm/svm-founders-floor-workstations.jpg"),
    title: "Open Academic Floor & Study Hub",
    tag: "Mentorship Hub",
    caption:
      "Bright study workstation counters under lush green vines, with Adiyogi wall mural and direct access to Founder's Desk.",
    featured: true,
  },
  {
    id: "svm-adiyogi-conference",
    src: mediaUrl("images/Interiors/svm/svm-adiyogi-conference-room.jpg"),
    title: "Adiyogi Glass-Suite Conference Room",
    tag: "Executive Suite",
    caption:
      "Vibrant yellow conference hall with square geometric overhead LED lighting and Coimbatore Adiyogi glass etching.",
  },
  {
    id: "svm-welcome-lounge",
    src: mediaUrl("images/Interiors/svm/svm-reception-welcome-lobby.jpg"),
    title: "Admissions Reception Lounge",
    tag: "Welcome Lobby",
    caption:
      "Sunlit welcome lobby with fluted turquoise reception counter, cheerful yellow walls, and student counseling area.",
  },
  {
    id: "svm-executive-office",
    src: mediaUrl("images/Interiors/svm/svm-executive-directors-office.jpg"),
    title: "Director's Chamber & Executive Office",
    tag: "Leadership",
    caption:
      "Bright executive counseling suite with rich timber paneling, executive workstation, and lucky bamboo plant.",
  },
  {
    id: "svm-reception-shrine",
    src: mediaUrl("images/Interiors/svm/svm-reception-shrine.jpg"),
    title: "Front Desk & Traditional Mandir Niche",
    tag: "Front Office",
    caption:
      "Warm timber louver partition with an illuminated Ganesha shrine welcoming student arrivals.",
  },
];

const SaravanampattiGallery = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  const openLightbox = (index) => setActivePhoto(index);
  const closeLightbox = () => setActivePhoto(null);

  const showNext = useCallback(
    (step) => {
      setActivePhoto((current) => {
        if (current === null) return null;
        return (current + step + svmPhotos.length) % svmPhotos.length;
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
    <section className="svm-section svm-gallery-section" id="svm-campus-tour">
      <div className="svm-wrap">
        <Reveal className="svm-center">
          <span className="svm-eyebrow">
            <Sparkles size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />
            Flagship Campus Tour
          </span>
          <h2>Inside ThoughtFlows Saravanampatti</h2>
          <p>
            Experience the state-of-the-art infrastructure of our flagship campus —
            spacious batch halls, ergonomic study pods, conference suites, and dedicated mentorship areas.
          </p>
        </Reveal>

        <div className="svm-gallery-grid">
          {svmPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className={`svm-gallery-item ${photo.featured ? "is-featured" : ""}`}
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="svm-gallery-image-wrapper">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="svm-gallery-overlay">
                  <span className="svm-gallery-tag">{photo.tag}</span>
                  <h3 className="svm-gallery-title">{photo.title}</h3>
                  <p className="svm-gallery-caption">{photo.caption}</p>
                </div>
                <button
                  type="button"
                  className="svm-gallery-zoom-btn"
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
            className="svm-gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={svmPhotos[activePhoto].title}
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="svm-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              className="svm-lightbox-nav is-prev"
              onClick={(e) => {
                e.stopPropagation();
                showNext(-1);
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={30} />
            </button>

            <figure
              className="svm-lightbox-figure"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={svmPhotos[activePhoto].src}
                alt={svmPhotos[activePhoto].title}
              />
              <figcaption>
                <span className="svm-lightbox-tag">
                  {svmPhotos[activePhoto].tag}
                </span>
                <strong>{svmPhotos[activePhoto].title}</strong>
                <p>{svmPhotos[activePhoto].caption}</p>
                <small>
                  {activePhoto + 1} / {svmPhotos.length}
                </small>
              </figcaption>
            </figure>

            <button
              type="button"
              className="svm-lightbox-nav is-next"
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

export default SaravanampattiGallery;

