import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BRANCHES, STATES } from "./branchDirectoryData";

const EASE = [0.22, 1, 0.36, 1];

// one theme tone per state
const TONE = {
  "Tamil Nadu": "teal",
  Kerala: "navy",
  Telangana: "violet",
  "Andhra Pradesh": "ocean",
  Maharashtra: "gold",
};

/** cards per row for the zig-zag, by viewport width */
function usePerRow() {
  const calc = () => {
    if (typeof window === "undefined") return 5;
    const w = window.innerWidth;
    if (w >= 1200) return 5;
    if (w >= 992) return 4;
    if (w >= 720) return 3;
    if (w >= 520) return 2;
    return 1;
  };
  const [n, setN] = useState(calc);
  useEffect(() => {
    const on = () => setN(calc());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return n;
}

const CurvedArrow = ({ dir }) => (
  <svg className={`tfst-arrow tfst-arrow--${dir}`} viewBox="0 0 64 40" fill="none" aria-hidden="true">
    {dir === "down" ? (
      <>
        <path d="M4 6 C 22 6, 38 18, 54 32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M45 33 L55 33 L53 23" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ) : (
      <>
        <path d="M4 34 C 22 34, 38 22, 54 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M45 7 L55 7 L53 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    )}
  </svg>
);

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

/** Zig-zag numbered step cards for every branch, with a state filter. */
export default function BranchSteps({ id, branches = BRANCHES }) {
  const [filter, setFilter] = useState("All");
  const perRow = usePerRow();
  const reduce = useReducedMotion();

  const counts = useMemo(() => {
    const c = {};
    branches.forEach((b) => {
      c[b.state] = (c[b.state] || 0) + 1;
    });
    return c;
  }, [branches]);

  const visible = useMemo(
    () => (filter === "All" ? branches : branches.filter((b) => b.state === filter)),
    [branches, filter]
  );

  const filters = ["All", ...STATES.filter((s) => counts[s])];
  const zig = perRow > 1;

  return (
    <div id={id} className="tfbd tfst">
      <div className="tfbd-filters" role="group" aria-label="Filter branches by state">
        {filters.map((f) => {
          const n = f === "All" ? branches.length : counts[f];
          const on = filter === f;
          return (
            <button
              key={f}
              type="button"
              className={`tfbd-chip${on ? " is-on" : ""}`}
              aria-pressed={on}
              onClick={() => setFilter(f)}
            >
              {f === "All" ? "All branches" : f}
              <span className="tfbd-chip-count">{n}</span>
            </button>
          );
        })}
      </div>

      <p className="tfbd-status" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "branch" : "branches"}
        {filter !== "All" ? ` in ${filter}` : " across India"}
      </p>

      <ol className="tfst-track" style={{ "--per": perRow }}>
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((b, i) => {
            const pos = i % perRow;
            const low = zig && pos % 2 === 1; // every second card in a row sits lower
            const lastInRow = pos === perRow - 1 || i === visible.length - 1;
            const number = branches.indexOf(b) + 1;
            return (
              <motion.li
                key={b.id}
                layout={!reduce}
                className={`tfst-item${low ? " is-low" : ""}`}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: reduce ? 0 : 0.5, ease: EASE, delay: reduce ? 0 : Math.min(i, 8) * 0.04 }}
              >
                <article className={`tfst-card tfst-card--${TONE[b.state] || "teal"}`} aria-labelledby={`tfst-name-${b.id}`}>
                  <span className="tfst-badge" aria-hidden="true">
                    {String(number).padStart(2, "0")}
                  </span>

                  <span className="tfst-state">{b.state}</span>
                  <h3 className="tfst-name" id={`tfst-name-${b.id}`}>
                    <Link to={b.path} className="tfst-stretch">
                      {b.name}
                    </Link>
                  </h3>
                  <span className="tfst-city">{b.city}</span>

                  {b.address && (
                    <p className="tfst-line tfst-addr">
                      <PinIcon />
                      <span>{b.address}</span>
                    </p>
                  )}
                  {b.phone && (
                    <p className="tfst-line">
                      <PhoneIcon />
                      {b.phoneHref ? (
                        <a href={b.phoneHref} className="tfst-phone">
                          {b.phone}
                        </a>
                      ) : (
                        <span>{b.phone}</span>
                      )}
                    </p>
                  )}

                  <span className="tfst-explore" aria-hidden="true">
                    Explore →
                  </span>

                  {/* notch with the branch's original photo */}
                  <span className="tfst-notch">
                    <img src={b.img} alt={`Thoughtflows ${b.name} branch`} loading="lazy" decoding="async" width="56" height="56" />
                  </span>
                </article>

                {zig && !lastInRow && <CurvedArrow dir={low ? "up" : "down"} />}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ol>
    </div>
  );
}
