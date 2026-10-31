import React, { memo } from "react";
import { Link } from "react-router-dom";

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/** One branch: original round photo, location, verified address and phone. */
function BranchCard({ branch, index }) {
  return (
    <article className="tfbd-card" aria-labelledby={`tfbd-name-${branch.id}`}>
      <div className="tfbd-top">
        <span className="tfbd-photo">
          <img
            src={branch.img}
            alt={`Thoughtflows ${branch.name} branch`}
            loading="lazy"
            decoding="async"
            width="104"
            height="104"
          />
        </span>
        <span className="tfbd-num" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <span className="tfbd-state">{branch.state}</span>
      <h3 className="tfbd-name" id={`tfbd-name-${branch.id}`}>
        {branch.name}
      </h3>
      <span className="tfbd-city">{branch.city}</span>

      {branch.address && (
        <p className="tfbd-line">
          <PinIcon />
          <span>{branch.address}</span>
        </p>
      )}
      {branch.phone && (
        <p className="tfbd-line">
          <PhoneIcon />
          {branch.phoneHref ? (
            <a href={branch.phoneHref} className="tfbd-phone">
              {branch.phone}
            </a>
          ) : (
            <span>{branch.phone}</span>
          )}
        </p>
      )}

      <Link to={branch.path} className="tfbd-cta" aria-label={`Explore ${branch.name} branch`}>
        Explore Branch
        <span className="tfbd-cta-icon">
          <ArrowIcon />
        </span>
      </Link>
    </article>
  );
}

export default memo(BranchCard);
