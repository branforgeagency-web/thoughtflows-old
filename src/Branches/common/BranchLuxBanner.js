import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Users, Award, BookOpen, ArrowRight } from "lucide-react";
import CbeArchHero from "./CbeArchHero";
import "../CoimbatoreBanner.css";

/**
 * Full branch banner = CbeArchHero + "Our Campus" 4-photo strip + trust bar.
 * Same look as the Coimbatore pages. Pass real interior photos via `heroImage`
 * and `campus` when they are ready – nothing else needs to change.
 *
 * campus: [{ img, label, alt, to? }]   (to = internal route or #anchor, optional)
 */
const DEFAULT_TRUST = [
  { icon: Users, text: "35,000+ Students Trained" },
  { icon: Award, text: "30,000+ Placements" },
  { icon: BookOpen, text: "49+ Courses" },
];

const SmartLink = ({ to, className, children }) => {
  if (!to) return <div className={className}>{children}</div>;
  if (to.startsWith("#")) return <a href={to} className={className}>{children}</a>;
  return <Link to={to} className={className}>{children}</Link>;
};

const BranchLuxBanner = ({
  heroImage,
  heroAlt,
  campus = [],
  stripHeading = "Our Campus",
  locationLabel,
  trust = DEFAULT_TRUST,
  exploreTo,
  exploreLabel = "Explore All Branches",
  ...heroProps
}) => (
  <>
    <CbeArchHero image={heroImage} imageAlt={heroAlt} {...heroProps} />

    {campus.length > 0 && (
      <section className="cbe-lux-after-banner">
        <div className="cbe-lux-container">
          <div className="cbe-lux-strip-heading" style={{ marginTop: 0 }}>
            <span className="cbe-lux-strip-line" />
            <span>{stripHeading}</span>
            <span className="cbe-lux-strip-line" />
          </div>

          <motion.div
            className="cbe-lux-strip"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {campus.map((c, i) => (
              <SmartLink key={i} to={c.to} className="cbe-lux-strip-card">
                <img src={c.img} alt={c.alt || c.label} loading="lazy" />
                <span className="cbe-lux-strip-label"><MapPin size={13} /> {c.label}</span>
              </SmartLink>
            ))}
          </motion.div>

          <div className="cbe-lux-footer-bar">
            <div className="cbe-lux-trust-items">
              {locationLabel && (
                <span className="cbe-lux-trust-item"><MapPin size={17} /> {locationLabel}</span>
              )}
              {trust.map(({ icon: Ico, text }) => (
                <span className="cbe-lux-trust-item" key={text}><Ico size={17} /> {text}</span>
              ))}
            </div>
            {exploreTo && (
              <SmartLink to={exploreTo} className="cbe-lux-explore-btn">
                {exploreLabel} <ArrowRight size={15} />
              </SmartLink>
            )}
          </div>
        </div>
      </section>
    )}
  </>
);

export default BranchLuxBanner;
