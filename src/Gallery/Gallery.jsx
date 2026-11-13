import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Sparkles,
  GraduationCap,
  Calendar,
  Search,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Award,
  Layers,
} from "lucide-react";
import Meta from "../Meta";
import { mediaUrl } from "../config/media";
import {
  galleryCategories,
  galleryCollections,
  galleryItems,
  galleryStats,
} from "./galleryData";
import "./Gallery.css";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const galleryGridRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleSelectCollection = (categoryId) => {
    setActiveCategory(categoryId);
    setSearchQuery("");
    setLightboxIndex(-1);
    if (galleryGridRef.current) {
      galleryGridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const visibleItems = useMemo(() => {
    let list = galleryItems;
    if (activeCategory === "all") {
      list = galleryItems;
    } else if (["saravanampatti", "gandhipuram", "hopes"].includes(activeCategory)) {
      list = galleryItems.filter((item) => item.category === activeCategory);
    } else {
      list = galleryItems.filter(
        (item) =>
          item.category === activeCategory ||
          (Array.isArray(item.tags) && item.tags.includes(activeCategory))
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          (item.caption && item.caption.toLowerCase().includes(q)) ||
          (item.badge && item.badge.toLowerCase().includes(q)) ||
          (item.location && item.location.toLowerCase().includes(q))
      );
    }

    return list;
  }, [activeCategory, searchQuery]);

  const closeLightbox = useCallback(() => setLightboxIndex(-1), []);

  const showNext = useCallback(
    (step) =>
      setLightboxIndex((current) => {
        if (current < 0 || visibleItems.length === 0) return current;
        return (current + step + visibleItems.length) % visibleItems.length;
      }),
    [visibleItems.length]
  );

  // Keyboard controls + body scroll lock while lightbox is open
  useEffect(() => {
    if (lightboxIndex < 0) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext(1);
      if (e.key === "ArrowLeft") showNext(-1);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxIndex, closeLightbox, showNext]);

  const activeItem = lightboxIndex >= 0 ? visibleItems[lightboxIndex] : null;

  return (
    <div className="tf-gallery-page">
      <Meta
        title="Gallery | ThoughtFlows Medical Coding Academy"
        description="Take a visual tour inside ThoughtFlows Medical Coding Academy — exploring our campuses, live clinical workshops, seminars, and student celebrations."
        canonical="https://www.thoughtflows.in/gallery"
      />

      {/* Hero Section */}
      <section className="tf-gallery-hero">
        <div className="tf-gallery-hero-inner">
          <span className="tf-gallery-eyebrow">
            <Sparkles size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} />
            Visual Archive &amp; Campus Life
          </span>
          <h1 className="tf-gallery-title">Inside ThoughtFlows</h1>
          <p className="tf-gallery-subtitle">
            A photographic journey across our campuses, clinical coding workshops,
            expert-led seminars, student achievements, and campus celebrations.
          </p>

          <div className="tf-gallery-stats">
            {galleryStats.map((stat) => (
              <div className="tf-gallery-stat" key={stat.label}>
                <span className="tf-gallery-stat-value">{stat.value}</span>
                <span className="tf-gallery-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pillars Collection Navigator */}
      <section className="tf-gallery-collections">
        <div className="tf-gallery-container">
          <div className="tf-collections-header">
            <span className="tf-section-badge">Explore Albums</span>
            <h2>Moments That Define Our Academy</h2>
            <p>Select a collection to filter photos by campus, hands-on training, seminars, or student life.</p>
          </div>

          <div className="tf-collections-grid">
            {galleryCollections.map((col) => (
              <div
                key={col.id}
                className="tf-collection-card"
                onClick={() => handleSelectCollection(col.categoryId)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleSelectCollection(col.categoryId);
                  }
                }}
              >
                <div className="tf-collection-top">
                  <span className="tf-collection-badge">{col.badge}</span>
                  <span className="tf-collection-arrow">
                    <ArrowRight size={16} />
                  </span>
                </div>
                <h3 className="tf-collection-title">{col.title}</h3>
                <span className="tf-collection-tagline">{col.tagline}</span>
                <p className="tf-collection-desc">{col.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Gallery Grid & Filters */}
      <section className="tf-gallery-main" ref={galleryGridRef}>
        <div className="tf-gallery-container">
          <div className="tf-gallery-controls">
            {/* Category Filter Tabs */}
            <div className="tf-gallery-filters" role="tablist" aria-label="Gallery categories">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category.id}
                  className={`tf-gallery-filter ${
                    activeCategory === category.id ? "is-active" : ""
                  }`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setLightboxIndex(-1);
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Keyword Search */}
            <div className="tf-gallery-search">
              <Search size={16} className="tf-search-icon" />
              <input
                type="text"
                placeholder="Search classrooms, workshops, labs..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setLightboxIndex(-1);
                }}
                aria-label="Search gallery photos"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="tf-search-clear"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          <div className="tf-gallery-count-bar">
            <span>
              Showing <strong>{visibleItems.length}</strong> photo{visibleItems.length === 1 ? "" : "s"}
              {searchQuery ? ` matching "${searchQuery}"` : ""}
            </span>
          </div>

          {/* Grid */}
          <div className="tf-gallery-grid">
            {visibleItems.map((item, index) => (
              <motion.button
                type="button"
                key={item.id}
                className={`tf-gallery-card ${item.featured ? "is-featured" : ""}`}
                onClick={() => setLightboxIndex(index)}
                aria-label={`View ${item.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: Math.min(index, 8) * 0.04 }}
              >
                <img
                  src={mediaUrl(item.src)}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Top Badge */}
                <div className="tf-gallery-card-top-tags">
                  {item.badge && <span className="tf-card-tag">{item.badge}</span>}
                  {item.location && <span className="tf-card-loc">{item.location}</span>}
                </div>

                <span className="tf-gallery-card-overlay">
                  <span className="tf-gallery-card-title">{item.title}</span>
                  {item.caption && (
                    <span className="tf-gallery-card-caption">{item.caption}</span>
                  )}
                </span>
                
                <span className="tf-gallery-card-zoom" aria-hidden="true">
                  <ZoomIn size={18} />
                </span>
              </motion.button>
            ))}
          </div>

          {visibleItems.length === 0 && (
            <div className="tf-gallery-empty">
              <Layers size={40} className="text-cyan-500 mb-3" />
              <h3>No matching photos found</h3>
              <p>Try clearing your search term or select another category above.</p>
              <button
                type="button"
                className="tf-gallery-btn tf-gallery-btn-primary mt-3"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Visit Campus CTA */}
      <section className="tf-gallery-cta">
        <div className="tf-gallery-cta-inner">
          <span className="tf-cta-eyebrow">Experience In Person</span>
          <h2>Want to Tour Our Campuses?</h2>
          <p>
            Visit Saravanampatti, Gandhipuram, or Hopes branch for a live walk-through,
            interactive class observation, and free career counseling with faculty.
          </p>
          <div className="tf-gallery-cta-actions">
            <Link to="/contact" className="tf-gallery-btn tf-gallery-btn-primary">
              Book a Free Campus Tour
            </Link>
            <Link to="/placements" className="tf-gallery-btn tf-gallery-btn-ghost">
              Explore Placements
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="tf-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="tf-gallery-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            className="tf-gallery-lightbox-nav is-prev"
            onClick={(e) => {
              e.stopPropagation();
              showNext(-1);
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={30} />
          </button>

          <figure
            className="tf-gallery-lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={mediaUrl(activeItem.src)} alt={activeItem.title} />
            <figcaption>
              <div className="tf-lightbox-tags">
                {activeItem.badge && <span className="tf-lightbox-badge">{activeItem.badge}</span>}
                {activeItem.location && <span className="tf-lightbox-loc">{activeItem.location}</span>}
              </div>
              <strong>{activeItem.title}</strong>
              {activeItem.caption && <p>{activeItem.caption}</p>}
              <small>
                {lightboxIndex + 1} of {visibleItems.length}
              </small>
            </figcaption>
          </figure>

          <button
            type="button"
            className="tf-gallery-lightbox-nav is-next"
            onClick={(e) => {
              e.stopPropagation();
              showNext(1);
            }}
            aria-label="Next photo"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
