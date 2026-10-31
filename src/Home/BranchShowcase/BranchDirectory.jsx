import React, { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import BranchCard from "./BranchCard";
import { BRANCHES, STATES } from "./branchDirectoryData";

const EASE = [0.22, 1, 0.36, 1];

/** All branches with a state filter. Data-driven: add a branch in branchDirectoryData.js. */
export default function BranchDirectory({ id, branches = BRANCHES }) {
  const [filter, setFilter] = useState("All");
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

  return (
    <div id={id} className="tfbd">
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

      <motion.div className="tfbd-grid" layout={!reduce}>
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((b) => (
            <motion.div
              key={b.id}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
              className="tfbd-cell"
            >
              <BranchCard branch={b} index={branches.indexOf(b)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
