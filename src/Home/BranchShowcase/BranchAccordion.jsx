import React, { useCallback, useEffect, useRef, useState } from "react";
import BranchPanel from "./BranchPanel";

/**
 * Horizontal image accordion (vertical below 720px).
 * Only one panel is open; the arrow on the open panel cycles to the next.
 */
export default function BranchAccordion({ branches, id }) {
  const [active, setActive] = useState(0);
  const arrowRefs = useRef([]);
  const focusArrowNext = useRef(false);
  const n = branches.length;

  const next = useCallback(() => {
    focusArrowNext.current = true;
    setActive((a) => (a + 1) % n);
  }, [n]);

  // keep keyboard focus on the arrow when it moves to the newly opened panel
  useEffect(() => {
    if (!focusArrowNext.current) return;
    focusArrowNext.current = false;
    const el = arrowRefs.current[active];
    if (el) el.focus({ preventScroll: true });
  }, [active]);

  return (
    <div
      id={id}
      className="tfbs-acc"
      role="region"
      aria-label="Thoughtflows academy branches"
      style={{ "--n": n }}
    >
      {branches.map((b, i) => (
        <BranchPanel
          key={b.id}
          ref={(el) => {
            arrowRefs.current[i] = el;
          }}
          branch={b}
          index={i}
          total={n}
          isActive={i === active}
          onActivate={() => setActive(i)}
          onNext={next}
          nextTitle={branches[(i + 1) % n].title}
        />
      ))}
    </div>
  );
}
