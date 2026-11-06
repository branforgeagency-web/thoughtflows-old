import React, { useEffect, useMemo, useRef, useState } from 'react';
import { placementData } from './placementData';

/* Real placed-student photos (webpack-resolved URLs). The "Ananthi S"
   record has no real photo on file and falls back to a placeholder swatch,
   so it's excluded from the strip. */
const REAL_STUDENTS = (placementData.students || []).filter(
    (s) => s && typeof s.image === 'string' && s.image.length > 0 && !s.image.includes('via.placeholder.com')
);

const FALLBACK_IMAGES = [
    'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519494026892-80bbd3d53106?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80',
].map((image, i) => ({ id: `fallback-${i}`, image }));

const ITEMS = REAL_STUDENTS.length >= 6 ? REAL_STUDENTS : FALLBACK_IMAGES;

/* ------------------------------------------------------------------------
   Color trick: the content column sits in mix-blend-mode:difference over
   a WHITE stage (per request — the original reference used a near-black
   stage). difference(c, 255) = 255-c per channel, so to have the resting
   text (no image behind it) read as brand navy (#073766 = 7,55,102) we
   paint the DOM text in the channel-inverse of navy: 255-7,255-55,255-102
   = 248,200,153 (#F8C899). Wherever a bright student photo slides behind
   a line, the per-pixel difference against that photo (instead of flat
   white) produces the "inverted spotlight" — a colour-flipped highlight
   riding over the words.
   ------------------------------------------------------------------------ */
const SPOTLIGHT_STYLE = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

.tf-spotlight {
  position: relative;
  width: 100%;
  height: clamp(520px, 64vw, 760px);
  overflow: hidden;
  background: #ffffff;
  border-radius: 20px;
  isolation: isolate;
}

.tf-spotlight-strip {
  position: absolute;
  left: 0;
  right: 0;
  height: 340px;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  z-index: 0;
}

.tf-spotlight-track {
  display: flex;
  align-items: center;
  gap: 36px;
  padding: 0 18px;
  will-change: transform;
}

.tf-spotlight-item {
  flex: 0 0 auto;
  width: 360px;
  height: 260px;
  border-radius: 8px;
  overflow: hidden;
  background: #e8e8e8;
}

.tf-spotlight-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(15%) contrast(1.05) brightness(1.02);
}

.tf-spotlight-content {
  position: absolute;
  inset: 0;
  z-index: 1;
  mix-blend-mode: difference;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 36px 24px;
  pointer-events: none;
  color: #F8C899;
}

.tf-spotlight-nav {
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #F8C899;
}

.tf-spotlight-nav .dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.6;
}

.tf-spotlight-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 0.95;
}

.tf-spotlight-headline {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-style: italic;
  font-weight: 400;
  font-size: clamp(42px, 8vw, 84px);
  margin: 0;
  color: #F8C899;
  will-change: transform;
}

.tf-spotlight-note {
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-align: center;
  max-width: 420px;
  margin: 0;
  color: #F8C899;
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  .tf-spotlight-track { transform: none !important; }
  .tf-spotlight-strip { top: 50%; transform: translateY(-50%) !important; }
  .tf-spotlight-headline, .tf-spotlight-note { transform: none !important; }
}
`;

const REACH = 190; // px — how far the wake's gaussian falloff reaches from the strip's centre
const WAKE_STRENGTH = 2.4; // multiplies strip velocity into a px displacement
const RISE_SCALE = 0.55; // how much of the strip's past-rest descent becomes lift
const MAX_RISE = 64; // px cap so a line never gets shoved off-frame
const EASE = 0.055; // strip's approach-to-target easing factor
const SCROLL_SPEED = 46; // px/sec horizontal marquee speed
const TOP_INSET = 52;
const BOTTOM_INSET = 52;

export default function Spotlight() {
    const stageRef = useRef(null);
    const stripRef = useRef(null);
    const trackRef = useRef(null);
    const singleSetRef = useRef(null);
    const lineRefs = useRef([]);
    const [repeatCount, setRepeatCount] = useState(2);
    const reducedMotionRef = useRef(false);

    useEffect(() => {
        reducedMotionRef.current =
            typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }, []);

    // Clone the item set until the track comfortably overfills the stage
    // width twice over, so the modulo wrap never reveals a gap.
    useEffect(() => {
        const stage = stageRef.current;
        const singleSet = singleSetRef.current;
        if (!stage || !singleSet) return;

        const computeRepeat = () => {
            const setWidth = singleSet.scrollWidth || 1;
            const needed = Math.ceil((stage.clientWidth * 2.2) / setWidth) + 1;
            setRepeatCount((prev) => (prev === needed ? prev : Math.max(2, needed)));
        };

        computeRepeat();
        const ro = new ResizeObserver(computeRepeat);
        ro.observe(stage);
        return () => ro.disconnect();
    }, []);

    // Measure each content line's rest centre (relative to the stage),
    // walking the offsetParent chain rather than trusting a single
    // getBoundingClientRect, so it stays correct under CSS transforms.
    const measureLines = () => {
        const stage = stageRef.current;
        if (!stage) return;
        lineRefs.current.forEach((el) => {
            if (!el) return;
            let y = 0;
            let node = el;
            while (node && node !== stage) {
                y += node.offsetTop;
                node = node.offsetParent;
            }
            el.dataset.restY = String(y + el.offsetHeight / 2);
        });
    };

    useEffect(() => {
        measureLines();
        window.addEventListener('resize', measureLines);
        return () => window.removeEventListener('resize', measureLines);
    }, [repeatCount]);

    useEffect(() => {
        if (reducedMotionRef.current) return; // static, centred frame — no rAF loop at all

        const stage = stageRef.current;
        const strip = stripRef.current;
        const track = trackRef.current;
        const singleSet = singleSetRef.current;
        if (!stage || !strip || !track || !singleSet) return;

        let raf = null;
        let x = 0;
        let stripCenterY = stage.clientHeight / 2;
        let prevStripCenterY = stripCenterY;
        let pointerY = null; // null => no pointer inside the stage, sweep on its own
        let last = performance.now();

        const handleMove = (e) => {
            const rect = stage.getBoundingClientRect();
            pointerY = e.clientY - rect.top;
        };
        const handleLeave = () => {
            pointerY = null;
        };
        stage.addEventListener('mousemove', handleMove);
        stage.addEventListener('mouseleave', handleLeave);
        stage.addEventListener('mouseenter', handleMove);

        const tick = (now) => {
            const dt = Math.min(now - last, 48); // guard against long tab-hidden gaps
            last = now;

            // 1. Horizontal infinite marquee — wrap by modulo of one set's width.
            const setWidth = singleSet.scrollWidth || 1;
            x += (SCROLL_SPEED * dt) / 1000;
            if (x >= setWidth) x -= setWidth;
            track.style.transform = `translateX(${-x}px)`;

            // 2. Vertical target — the pointer when present, else a slow
            //    sine sweep over the same clamp range (continuous, no reload).
            const stripHeight = strip.offsetHeight;
            const minCenter = TOP_INSET + stripHeight / 2;
            const maxCenter = stage.clientHeight - BOTTOM_INSET - stripHeight / 2;
            let targetY;
            if (pointerY != null) {
                targetY = Math.min(Math.max(pointerY, minCenter), maxCenter);
            } else {
                const mid = (minCenter + maxCenter) / 2;
                const amp = Math.max((maxCenter - minCenter) / 2, 0);
                targetY = mid + Math.sin(now / 1800) * amp;
            }

            // 3. Ease the strip toward it, and keep its per-frame velocity.
            stripCenterY += (targetY - stripCenterY) * EASE;
            const velocity = stripCenterY - prevStripCenterY;
            prevStripCenterY = stripCenterY;
            strip.style.top = `${stripCenterY - stripHeight / 2}px`;
            strip.style.transform = 'none';

            // 4. Every content line: a gaussian wake off the strip's velocity,
            //    plus a capped rise once the strip has descended past it.
            lineRefs.current.forEach((el) => {
                if (!el) return;
                const restY = parseFloat(el.dataset.restY || '0');
                const gap = restY - stripCenterY;
                const wake = Math.exp(-(gap * gap) / (2 * REACH * REACH)) * velocity * WAKE_STRENGTH;
                const descentPastRest = stripCenterY - restY;
                const rise = descentPastRest > 0 ? -Math.min(descentPastRest * RISE_SCALE, MAX_RISE) : 0;
                el.style.transform = `translateY(${(wake + rise).toFixed(2)}px)`;
            });

            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);

        return () => {
            if (raf) cancelAnimationFrame(raf);
            stage.removeEventListener('mousemove', handleMove);
            stage.removeEventListener('mouseleave', handleLeave);
            stage.removeEventListener('mouseenter', handleMove);
        };
    }, [repeatCount]);

    const sets = useMemo(() => Array.from({ length: repeatCount }, (_, i) => i), [repeatCount]);

    return (
        <div className="tf-spotlight" ref={stageRef}>
            <style>{SPOTLIGHT_STYLE}</style>

            <div className="tf-spotlight-strip" ref={stripRef}>
                <div className="tf-spotlight-track" ref={trackRef}>
                    {sets.map((setIndex) => (
                        <div
                            className="tf-spotlight-set"
                            style={{ display: 'flex', gap: 36 }}
                            key={setIndex}
                            ref={setIndex === 0 ? singleSetRef : undefined}
                        >
                            {ITEMS.map((item, i) => (
                                <div className="tf-spotlight-item" key={`${setIndex}-${item.id ?? i}`}>
                                    <img src={item.image} alt={item.name ? `${item.name} — placed student` : 'Placed student'} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="tf-spotlight-content">
                <nav className="tf-spotlight-nav" aria-hidden="true">
                    <span>THOUGHTFLOWS</span>
                    <span className="dot" />
                    <span>PLACEMENTS</span>
                    <span className="dot" />
                    <span>2025</span>
                </nav>

                <div className="tf-spotlight-center">
                    <h2 className="tf-spotlight-headline" ref={(el) => (lineRefs.current[0] = el)}>
                        ThoughtFlows
                    </h2>
                    <h2 className="tf-spotlight-headline" ref={(el) => (lineRefs.current[1] = el)}>
                        Placements
                    </h2>
                </div>

                <p className="tf-spotlight-note" ref={(el) => (lineRefs.current[2] = el)}>
                    25,000+ students placed in top healthcare companies across India.
                </p>
            </div>
        </div>
    );
}
