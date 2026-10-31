import { useCallback, useEffect, useRef } from "react";




// spring tuning: gentle, critically-damped feel (no overshoot jitter)
const STIFFNESS = 0.14;
const DAMPING = 0.7;
const EPS = 0.08;

const spring = (v, vel, target, dt) => {
  const nv = (vel + (target - v) * STIFFNESS * dt) * Math.pow(DAMPING, dt);
  const next = v + nv * dt;
  return [next, nv];
};

/**
 * Dock-style magnetic magnification.
 * - Influence is measured from each card's ORIGINAL resting centre (never the expanded layout).
 * - Values live in refs and are written straight to the DOM inside requestAnimationFrame,
 *   so pointer movement never triggers React renders.
 */
export function useMagneticDock({ count, dimsRef, activeRef, reducedMotion }) {
  const els = useRef([]);
  const values = useRef([]);
  const pointerX = useRef(null); // cursor x relative to the row centre
  const stageRect = useRef(null);
  const raf = useRef(null);
  const lastTime = useRef(0);

  if (values.current.length !== count) {
    values.current = Array.from({ length: count }, () => ({ w: 0, h: 0, p: 0, vw: 0, vh: 0, vp: 0, ready: false }));
  }

  const targetFor = useCallback(
    (i, d) => {
      const active = activeRef.current;
      if (active !== null) {
        return i === active ? { w: d.feature, h: d.feature, p: 1 } : { w: d.restW, h: d.restH, p: 0 };
      }
      const px = pointerX.current;
      if (px === null || reducedMotion) return { w: d.restW, h: d.restH, p: 0 };
      // resting centre of card i, relative to the row centre
      const pitch = d.restW + d.gap;
      const restCentre = (i - (count - 1) / 2) * pitch;
      const dist = px - restCentre;
      const f = Math.exp(-(dist * dist) / (2 * d.sigma * d.sigma));
      return {
        w: d.restW + (d.maxW - d.restW) * f,
        h: d.restH + (d.maxH - d.restH) * f,
        p: f,
      };
    },
    [activeRef, count, reducedMotion]
  );

  const apply = (el, v, d) => {
    const pill = Math.min(v.w, v.h) / 2;
    const r = pill + (d.radius - pill) * Math.min(1, v.p * 1.15);
    el.style.width = `${v.w.toFixed(2)}px`;
    el.style.height = `${v.h.toFixed(2)}px`;
    el.style.borderRadius = `${r.toFixed(2)}px`;
    el.style.setProperty("--p", v.p.toFixed(4));
  };

  const step = useCallback(
    (now) => {
      const d = dimsRef.current;
      const dt = lastTime.current ? Math.min(now - lastTime.current, 50) / 16.667 : 1;
      lastTime.current = now;
      let moving = false;

      for (let i = 0; i < count; i++) {
        const el = els.current[i];
        const v = values.current[i];
        const t = targetFor(i, d);
        if (!v.ready || reducedMotion) {
          v.w = t.w;
          v.h = t.h;
          v.p = t.p;
          v.vw = v.vh = v.vp = 0;
          v.ready = true;
        } else {
          [v.w, v.vw] = spring(v.w, v.vw, t.w, dt);
          [v.h, v.vh] = spring(v.h, v.vh, t.h, dt);
          [v.p, v.vp] = spring(v.p, v.vp, t.p, dt);
          if (
            Math.abs(t.w - v.w) > EPS ||
            Math.abs(t.h - v.h) > EPS ||
            Math.abs(t.p - v.p) > 0.002 ||
            Math.abs(v.vw) > EPS ||
            Math.abs(v.vh) > EPS
          ) {
            moving = true;
          } else {
            v.w = t.w;
            v.h = t.h;
            v.p = t.p;
          }
        }
        if (el) apply(el, v, d);
      }

      if (moving) {
        raf.current = requestAnimationFrame(step);
      } else {
        raf.current = null;
        lastTime.current = 0;
      }
    },
    [count, dimsRef, reducedMotion, targetFor]
  );

  /** start the loop if it is idle */
  const kick = useCallback(() => {
    if (raf.current === null) {
      lastTime.current = 0;
      raf.current = requestAnimationFrame(step);
    }
  }, [step]);

  const setCardRef = useCallback(
    (i) => (el) => {
      els.current[i] = el;
    },
    []
  );

  const onPointerEnter = useCallback((e) => {
    stageRect.current = e.currentTarget.getBoundingClientRect();
  }, []);

  const onPointerMove = useCallback(
    (e) => {
      if (e.pointerType === "touch") return;
      const rect = stageRect.current || e.currentTarget.getBoundingClientRect();
      stageRect.current = rect;
      pointerX.current = e.clientX - (rect.left + rect.width / 2);
      kick();
    },
    [kick]
  );

  const onPointerLeave = useCallback(() => {
    pointerX.current = null;
    stageRect.current = null;
    kick();
  }, [kick]);

  // the cached rect goes stale on scroll / resize
  useEffect(() => {
    const clear = () => {
      stageRect.current = null;
    };
    window.addEventListener("scroll", clear, { passive: true });
    window.addEventListener("resize", clear);
    return () => {
      window.removeEventListener("scroll", clear);
      window.removeEventListener("resize", clear);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
      raf.current = null;
    };
  }, []);

  return { setCardRef, onPointerEnter, onPointerMove, onPointerLeave, kick };
}
