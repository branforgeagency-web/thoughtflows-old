import React, { useContext } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { PopupContext } from "../../context/PopupContext";
import "./CbeArchHero.css";

/**
 * Shared hero for the Coimbatore hub page and its 3 branch pages
 * (Saravanampatti, Hopes, Gandhipuram).
 * Clean light panel + real campus photo in a framed card – site navy / teal / gold.
 */
const DEFAULT_FEATURES = ["ICD-10-CM", "CPT", "HCPCS Level II", "AAPC CPC"];

const CbeArchHero = ({
  location,
  titleLead = "Medical Coding Classes",
  accent = "Coimbatore",
  subTitle = "CPC & CCS Training",
  tagline = "Learn. Practice. Get Certified.",
  image,
  imageAlt,
  imagePosition = "center",
  badgeTitle,
  badgeText,
  phone = "093845 76852",
  phoneHref = "tel:+919384576852",
  features = DEFAULT_FEATURES,
}) => {
  const { setIsOpen } = useContext(PopupContext);

  return (
    <section className="tfa-hero">
      <div className="tfa-hero-inner">
        <motion.div
          className="tfa-hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="tfa-hero-pill">
            <MapPin size={14} /> {location}
          </span>

          <h1 className="tfa-hero-title">
            {titleLead} in <span className="tfa-hero-accent">{accent}</span>
            {subTitle && <span className="tfa-hero-sub">{subTitle}</span>}
          </h1>
          <span className="tfa-hero-rule" aria-hidden="true" />
          {tagline && <p className="tfa-hero-tagline">{tagline}</p>}

          <div className="tfa-hero-actions">
            <button type="button" className="tfa-btn tfa-btn-primary" onClick={() => setIsOpen(true)}>
              Book a Free Demo Class <ArrowRight size={17} />
            </button>
            <a href={phoneHref} className="tfa-btn tfa-btn-ghost">
              <Phone size={16} /> {phone}
            </a>
          </div>

          <ul className="tfa-hero-features">
            {features.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="tfa-hero-media"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <span className="tfa-hero-frame" aria-hidden="true" />
          <div className="tfa-hero-photo">
            <img src={image} alt={imageAlt} style={{ objectPosition: imagePosition }} fetchpriority="high" />
          </div>
          {badgeTitle && (
            <div className="tfa-hero-badge">
              <span className="tfa-hero-badge-icon"><MapPin size={16} /></span>
              <div>
                <strong>{badgeTitle}</strong>
                {badgeText && <small>{badgeText}</small>}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CbeArchHero;
