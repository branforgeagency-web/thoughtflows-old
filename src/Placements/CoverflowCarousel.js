import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import './CoverflowCarousel.css';
import { placementData } from './placementData';

/* ------------------------------------------------------------------ *
 * Default Travel & Landscape Items (Fallback if no project content)
 * ------------------------------------------------------------------ */
export const DEFAULT_TRAVEL_ITEMS = [
    {
        id: 1,
        title: 'Open Horizons',
        company: 'Highlands',
        designation: 'Nature',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=88',
        alt: 'Open Horizons in Highlands'
    },
    {
        id: 2,
        title: 'Still Waters',
        company: 'North Lake',
        designation: 'Travel',
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=88',
        alt: 'Still Waters at North Lake'
    },
    {
        id: 3,
        title: 'Northern Peak',
        company: 'Alpine Ridge',
        designation: 'Adventure',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=88',
        alt: 'Northern Peak on Alpine Ridge'
    },
    {
        id: 4,
        title: 'Golden Valley',
        company: 'West Valley',
        designation: 'Escape',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=88',
        alt: 'Golden Valley in West Valley'
    },
    {
        id: 5,
        title: 'Deep Forest',
        company: 'Evergreen',
        designation: 'Wilderness',
        image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=88',
        alt: 'Deep Forest in Evergreen'
    },
    {
        id: 6,
        title: 'Quiet Morning',
        company: 'Silver Lake',
        designation: 'Morning',
        image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=88',
        alt: 'Quiet Morning at Silver Lake'
    },
    {
        id: 7,
        title: 'Desert Passage',
        company: 'Red Canyon',
        designation: 'Road Trips',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=88',
        alt: 'Desert Passage in Red Canyon'
    },
    {
        id: 8,
        title: 'Night Summit',
        company: 'Frost Ridge',
        designation: 'Nightfall',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=88',
        alt: 'Night Summit at Frost Ridge'
    },
    {
        id: 9,
        title: 'Wild Terrain',
        company: 'Emerald Hills',
        designation: 'Aerial',
        image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=88',
        alt: 'Wild Terrain across Emerald Hills'
    }
];

/* ------------------------------------------------------------------ *
 * ThoughtFlows Placement Students: All 39 Placed Students
 * ------------------------------------------------------------------ */
export function getAllPlacementStudents() {
    const rawStudents = (placementData && placementData.students) ? placementData.students : [];
    if (!rawStudents.length) return DEFAULT_TRAVEL_ITEMS;

    return rawStudents.map((student, idx) => {
        const studentCompany = student.company || 'Healthcare Partner';
        const studentDesignation = student.designation || 'Placed Student 2025';

        return {
            id: student.id || (idx + 1),
            title: student.name,
            company: studentCompany,
            designation: studentDesignation,
            image: student.image,
            alt: `${student.name} placed at ${studentCompany}`
        };
    });
}

/**
 * CoverflowCarousel
 *
 * A premium, full-width 3D coverflow image carousel.
 * - Displays all 39 placed students
 * - Clean edge-to-edge layout on white background
 * - Continuous exponential-smoothed requestAnimationFrame loop
 * - Direct DOM style mutation via element refs for 120fps performance
 * - Infinite seamless looping without visual jumps or gaps
 * - Single-card gesture-locked mouse wheel / trackpad scrolling
 * - 2-second autoplay with permanent cancellation on manual scroll
 * - Dual lightweight shadow layers (broad deck shadow + individual card radial shadows)
 */
const CoverflowCarousel = ({
    items,
    heading = 'Our Placed Students',
    className = '',
    ariaLabel = 'Placed students carousel'
}) => {
    // Determine all student items
    const displayItems = useMemo(() => {
        if (items && Array.isArray(items) && items.length > 0) {
            return items;
        }
        return getAllPlacementStudents();
    }, [items]);

    const numItems = displayItems.length;

    // Active slide index driven by rounded current position
    const [activeIndex, setActiveIndex] = useState(0);

    // Refs for animation loop & state tracking
    const containerRef = useRef(null);
    const cardRefs = useRef([]);
    const shadowRefs = useRef([]);

    const currentPosRef = useRef(0);
    const targetPosRef = useRef(0);
    const activeIndexRef = useRef(0);

    // Cached sizing to avoid DOM reads in animation loop
    const cardWidthRef = useRef(300);
    const isMobileRef = useRef(false);

    // Gesture locking & Autoplay controls
    const isLockedRef = useRef(false);
    const accumulatedDeltaRef = useRef(0);
    const unlockTimerRef = useRef(null);
    const autoplayActiveRef = useRef(true);
    const autoplayIntervalRef = useRef(null);

    // Permanently cancel autoplay for this page session
    const stopAutoplayPermanently = useCallback(() => {
        if (autoplayActiveRef.current) {
            autoplayActiveRef.current = false;
            if (autoplayIntervalRef.current) {
                clearInterval(autoplayIntervalRef.current);
                autoplayIntervalRef.current = null;
            }
        }
    }, []);

    // Wheel and trackpad gesture handler with threshold accumulation & gesture lock
    const handleWheel = useCallback((e) => {
        // Prevent outer page scroll during carousel interaction
        if (e.cancelable) {
            e.preventDefault();
        }

        // Determine dominant delta axis (vertical wheel or horizontal trackpad)
        const dominantDelta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

        // Scrolling down or swiping left moves to next card (+1)
        // Scrolling up or swiping right moves to previous card (-1)
        const dir = dominantDelta > 0 ? 1 : -1;

        // As soon as user manually scrolls, stop autoplay permanently
        if (autoplayActiveRef.current) {
            stopAutoplayPermanently();

            // Find card currently closest to center and advance exactly one card
            const closestCard = Math.round(currentPosRef.current);
            targetPosRef.current = closestCard + dir;

            isLockedRef.current = true;
            accumulatedDeltaRef.current = 0;

            if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
            unlockTimerRef.current = setTimeout(() => {
                isLockedRef.current = false;
                accumulatedDeltaRef.current = 0;
            }, 230);
            return;
        }

        // If currently locked from a gesture in progress, refresh idle timer and ignore
        if (isLockedRef.current) {
            if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
            unlockTimerRef.current = setTimeout(() => {
                isLockedRef.current = false;
                accumulatedDeltaRef.current = 0;
            }, 230);
            return;
        }

        // Accumulate wheel movement until threshold is reached
        accumulatedDeltaRef.current += dominantDelta;

        if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);

        const THRESHOLD = 24;
        if (Math.abs(accumulatedDeltaRef.current) >= THRESHOLD) {
            const detectedDir = accumulatedDeltaRef.current > 0 ? 1 : -1;
            const currentTarget = Math.round(currentPosRef.current);
            targetPosRef.current = currentTarget + detectedDir;

            isLockedRef.current = true;
            accumulatedDeltaRef.current = 0;

            unlockTimerRef.current = setTimeout(() => {
                isLockedRef.current = false;
                accumulatedDeltaRef.current = 0;
            }, 230);
        } else {
            // Idle reset if threshold was not crossed
            unlockTimerRef.current = setTimeout(() => {
                accumulatedDeltaRef.current = 0;
            }, 230);
        }
    }, [stopAutoplayPermanently]);

    // Jump to specific card index smoothly
    const jumpToCard = useCallback((targetIndex) => {
        stopAutoplayPermanently();
        const N = numItems;
        const current = currentPosRef.current;
        const rawDiff = targetIndex - current;
        const halfN = N / 2;
        let d = ((rawDiff % N) + N) % N;
        if (d > halfN) d -= N;

        targetPosRef.current = Math.round(current + d);
    }, [numItems, stopAutoplayPermanently]);

    // Keyboard navigation (Left / Right arrows)
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            stopAutoplayPermanently();
            targetPosRef.current = Math.round(currentPosRef.current) + 1;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            stopAutoplayPermanently();
            targetPosRef.current = Math.round(currentPosRef.current) - 1;
        }
    }, [stopAutoplayPermanently]);

    // Touch swipe support (Mobile)
    const touchStartXRef = useRef(0);
    const touchStartYRef = useRef(0);

    const handleTouchStart = (e) => {
        if (e.touches.length !== 1) return;
        touchStartXRef.current = e.touches[0].clientX;
        touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        if (e.changedTouches.length !== 1) return;
        const deltaX = touchStartXRef.current - e.changedTouches[0].clientX;
        const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;

        if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY)) {
            stopAutoplayPermanently();
            const dir = deltaX > 0 ? 1 : -1;
            targetPosRef.current = Math.round(currentPosRef.current) + dir;
        }
    };

    // Viewport resize tracking: caches card widths to prevent layout thrashing
    const updateDimensions = useCallback(() => {
        const vw = window.innerWidth;
        isMobileRef.current = vw <= 768;

        if (isMobileRef.current) {
            cardWidthRef.current = Math.min(vw * 0.72, 300);
        } else {
            // clamp(230px, 22vw, 360px)
            cardWidthRef.current = Math.min(Math.max(vw * 0.22, 230), 360);
        }
    }, []);

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions, { passive: true });
        return () => window.removeEventListener('resize', updateDimensions);
    }, [updateDimensions]);

    // Autoplay setup: advances exactly 1 card every 2 seconds, pauses when tab is hidden
    useEffect(() => {
        if (!autoplayActiveRef.current) return;

        autoplayIntervalRef.current = setInterval(() => {
            if (document.hidden || !autoplayActiveRef.current) return;
            targetPosRef.current += 1;
        }, 2000);

        return () => {
            if (autoplayIntervalRef.current) {
                clearInterval(autoplayIntervalRef.current);
                autoplayIntervalRef.current = null;
            }
        };
    }, []);

    // Attach wheel listener to container with { passive: false } to allow preventDefault
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheel);
            if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
        };
    }, [handleWheel]);

    // High performance continuous animation loop (requestAnimationFrame)
    useEffect(() => {
        let animId;
        let lastTime = performance.now();
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const tick = (now) => {
            const deltaTime = Math.min((now - lastTime) / 1000, 0.1);
            lastTime = now;

            const target = targetPosRef.current;
            let current = currentPosRef.current;

            if (prefersReducedMotion) {
                current = target;
            } else {
                // Exponential easing: smoothing = 1 - exp(-speed * deltaTime)
                const speed = 8.5;
                const smoothing = 1 - Math.exp(-speed * deltaTime);
                current += (target - current) * smoothing;
                if (Math.abs(target - current) < 0.0004) {
                    current = target;
                }
            }
            currentPosRef.current = current;

            // Direct DOM transforms
            const N = numItems;
            const halfN = N / 2;
            const isMobile = isMobileRef.current;
            const cardWidth = cardWidthRef.current;
            // Desktop horizontal pitch: 68%, Mobile horizontal pitch: 72%
            const pitch = isMobile ? cardWidth * 0.72 : cardWidth * 0.68;
            const zMultiplier = isMobile ? 85 : 115;

            for (let i = 0; i < N; i++) {
                const rawDiff = i - current;
                let d = ((rawDiff % N) + N) % N;
                if (d > halfN) d -= N;

                const absD = Math.abs(d);

                const cardEl = cardRefs.current[i];
                const shadowEl = shadowRefs.current[i];

                // Culling: offscreen cards beyond visible steps are hidden for 120fps performance
                if (absD > 4.8) {
                    if (cardEl && cardEl.style.display !== 'none') {
                        cardEl.style.display = 'none';
                    }
                    if (shadowEl && shadowEl.style.display !== 'none') {
                        shadowEl.style.display = 'none';
                    }
                    continue;
                }

                if (cardEl && cardEl.style.display === 'none') {
                    cardEl.style.display = 'block';
                }
                if (shadowEl && shadowEl.style.display === 'none') {
                    shadowEl.style.display = 'block';
                }

                // 1. Horizontal translation in equal card steps
                const x = d * pitch;

                // 2. Progressive Z-depth
                const z = -absD * zMultiplier;

                // 3. Y-axis rotation (left cards face right, right cards face left, max 70-75°)
                const sign = d === 0 ? 0 : (d > 0 ? -1 : 1);
                const rotY = sign * Math.min(73, Math.pow(Math.min(absD, 1), 0.72) * 58 + Math.max(0, absD - 1) * 5);

                // 4. Scale reduction for distant cards
                const scale = Math.max(0.72, 1 - absD * 0.065);

                // 5. Mild opacity reduction with smooth fade at edge (between 3.8 and 4.8)
                let opacity = Math.max(0, 1 - absD * 0.1);
                if (absD > 3.8) {
                    opacity *= Math.max(0, (4.8 - absD) / 1.0);
                }

                // 6. Stacking order: active card always highest, closer cards above farther cards
                const zIndex = Math.round(100 - absD * 10);

                // Apply to 3D card element
                if (cardEl) {
                    cardEl.style.transform = `translate3d(${x.toFixed(2)}px, 0, ${z.toFixed(2)}px) rotateY(${rotY.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
                    cardEl.style.opacity = opacity.toFixed(4);
                    cardEl.style.zIndex = zIndex;
                }

                // Apply to floor shadow element
                if (shadowEl) {
                    const shadowScaleX = scale * (1 - Math.min(absD * 0.04, 0.2));
                    const shadowScaleY = scale * 0.65;
                    const shadowOpacity = opacity * (1 - Math.min(absD * 0.18, 0.65)) * 0.95;
                    shadowEl.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0) scale(${shadowScaleX.toFixed(3)}, ${shadowScaleY.toFixed(3)})`;
                    shadowEl.style.opacity = shadowOpacity.toFixed(4);
                    shadowEl.style.zIndex = zIndex;
                }
            }

            // Update active index state only when rounded index changes
            const newActive = ((Math.round(current) % N) + N) % N;
            if (newActive !== activeIndexRef.current) {
                activeIndexRef.current = newActive;
                setActiveIndex(newActive);
            }

            animId = requestAnimationFrame(tick);
        };

        animId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animId);
    }, [numItems]);

    return (
        <section
            ref={containerRef}
            className={`coverflow-section ${className}`}
            aria-roledescription="carousel"
            aria-label={ariaLabel}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Header */}
            {heading && (
                <div className="coverflow-header">
                    <h2 className="coverflow-heading">{heading}</h2>
                    <p className="coverflow-header-subtitle">
                        Swipe or scroll to explore our placed medical coding graduates
                    </p>
                </div>
            )}

            {/* Broad deck shadow beneath full carousel */}
            <div className="coverflow-deck-shadow" aria-hidden="true" />

            {/* 3D Coverflow Stage */}
            <div className="coverflow-stage" aria-hidden="false">
                {/* Flat shadow plane for individual card radial shadows */}
                <div className="coverflow-shadow-plane" aria-hidden="true">
                    {displayItems.map((_, index) => (
                        <div
                            key={`shadow-${index}`}
                            ref={(el) => (shadowRefs.current[index] = el)}
                            className="coverflow-card-shadow"
                        />
                    ))}
                </div>

                {/* 3D Cards Track */}
                <div className="coverflow-track">
                    {displayItems.map((item, index) => {
                        const isCenter = index === activeIndex;
                        return (
                            <div
                                key={`card-${index}`}
                                ref={(el) => (cardRefs.current[index] = el)}
                                className={`coverflow-card ${isCenter ? 'is-active' : ''}`}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`${index + 1} of ${numItems}: ${item.title}`}
                                onClick={() => jumpToCard(index)}
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt || item.title}
                                    draggable="false"
                                    loading={index < 5 ? 'eager' : 'lazy'}
                                    decoding="async"
                                    className="coverflow-card-img"
                                />

                                {/* Bottom card overlay with student name, company & designation right on the card */}
                                <div className="coverflow-card-overlay">
                                    <div className="coverflow-card-name">{item.title}</div>
                                    <div className="coverflow-card-company">{item.company}</div>
                                    <div className="coverflow-card-designation">{item.designation}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CoverflowCarousel;
