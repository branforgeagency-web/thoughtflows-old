import React, { forwardRef, memo } from "react";
import { Link } from "react-router-dom";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

/**
 * One accordion panel. Width/height transitions are pure CSS (flex-basis),
 * so expanding never re-renders siblings beyond the `isActive` flag change.
 */
const BranchPanel = forwardRef(function BranchPanel(
  { branch, index, total, isActive, onActivate, onNext, nextTitle },
  arrowRef
) {
  const contentId = `tfbs-content-${branch.id}`;
  const hidden = !isActive;

  return (
    <article
      className={`tfbs-panel${isActive ? " is-active" : ""}`}
      aria-roledescription="branch panel"
      aria-label={`${branch.title}, ${index + 1} of ${total}`}
    >
      <img
        className="tfbs-img"
        src={branch.image}
        srcSet={`${branch.imageSm} 760w, ${branch.image} 1376w`}
        sizes="(max-width: 719px) 100vw, 70vw"
        alt={branch.alt}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: branch.focus }}
        draggable={false}
      />
      <span className="tfbs-shade" aria-hidden="true" />

      {/* whole-panel trigger: native button gives Enter / Space for free */}
      <button
        type="button"
        className="tfbs-hit"
        aria-expanded={isActive}
        aria-controls={contentId}
        aria-label={isActive ? `${branch.title} is open` : `Open ${branch.title}`}
        onClick={onActivate}
      />

      <span className="tfbs-label" aria-hidden="true">
        <span>{branch.title.replace(" Academy", "")}</span>
      </span>

      <div className="tfbs-content" id={contentId} aria-hidden={hidden}>
        <span className="tfbs-cat">{branch.category}</span>
        <h3 className="tfbs-title">{branch.title}</h3>
        <span className="tfbs-loc">
          <PinIcon />
          {branch.location}
        </span>
        <p className="tfbs-desc">{branch.description}</p>
        {branch.campuses && branch.campuses.length > 0 && (
          <ul className="tfbs-campuses" aria-label={`${branch.title} campuses`}>
            {branch.campuses.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        )}
        <Link to={branch.href} className="tfbs-cta" tabIndex={hidden ? -1 : 0}>
          Explore Branch
          <ArrowIcon />
        </Link>
      </div>

      <button
        ref={arrowRef}
        type="button"
        className="tfbs-arrow"
        aria-label={`Next branch: ${nextTitle}`}
        aria-hidden={hidden}
        tabIndex={hidden ? -1 : 0}
        onClick={onNext}
      >
        <ArrowIcon />
      </button>
    </article>
  );
});

export default memo(BranchPanel);
