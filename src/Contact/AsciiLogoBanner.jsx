import React, { useEffect, useRef, useState, useCallback } from 'react';

/**
 * AsciiLogoBanner - Interactive ASCII Wordmark (Clean Light Theme)
 *
 * Self-contained React client component:
 * - Pure interactive ASCII canvas with zero chrome/HUD overlays
 * - Light theme background (#ffffff -> #f1f5f9 radial gradient)
 * - Dark theme typography (#0f172a) with electric-blue disturbance glow (#2563eb)
 * - Uniform resting dot grid (#cbd5e1)
 * - No animation libraries (No GSAP / Lenis / Framer Motion)
 * - All styles in one injected <style> block
 * - No image files (wordmark rasterised on an offscreen canvas and sampled)
 * - Whole scene composited on a SINGLE <canvas>
 * - Dot grid: 8px / 2px gap (desktop, step=10), 3px / 1px gap (mobile, step=4)
 * - Rasterises 'CONTACT US' (or custom text) in heavy Arial Black
 * - Marks cells with luma > 0.48 as LIT with brand-seeded glyph ramp
 * - 50ms interval shimmer re-randomising lit glyphs
 * - Presence-based cursor force field with outward shove (1-dist/R)^2 * 42 + continuous turbulence (±5.5*weight)
 * - Hand-rolled spring return (SPRING 0.025, DAMPING 0.5)
 * - Lissajous virtual cursor roaming for ?card or initial ambient state
 * - Strict prefers-reduced-motion compliance
 */
const AsciiLogoBanner = ({
    text = 'CONTACT US',
    className = ''
}) => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    // Physics & State references (no per-frame React re-render)
    const litCellsRef = useRef([]);
    const gridRef = useRef(new Uint8Array(0));
    const glyphRampRef = useRef('.:-+*=#%@CONTACTUS');

    const stepRef = useRef(10);
    const cellSizeRef = useRef(8);
    const gridOffsetRef = useRef({ x: 0, y: 0 });
    const dimensionsRef = useRef({ width: 0, height: 0, cols: 0, rows: 0, isMobile: false });

    // Pointer state
    const pointerActiveRef = useRef(false);
    const pointerCellRef = useRef({ x: -999, y: -999 });
    const userHoveredRef = useRef(false);

    // Reduced motion flag
    const [reducedMotion, setReducedMotion] = useState(false);

    // Rasterise wordmark to offscreen canvas and downsample to grid cells
    const initGrid = useCallback(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;

        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || 460;
        const isMobile = width <= 768;

        // Grid cell sizing: 8px/2px desktop (step=10), 3px/1px mobile (step=4)
        const cellSize = isMobile ? 3 : 8;
        const cellGap = isMobile ? 1 : 2;
        const step = cellSize + cellGap;

        stepRef.current = step;
        cellSizeRef.current = cellSize;

        const cols = Math.floor(width / step);
        const rows = Math.floor(height / step);

        const gridOffsetX = Math.floor((width - cols * step) / 2);
        const gridOffsetY = Math.floor((height - rows * step) / 2);

        gridOffsetRef.current = { x: gridOffsetX, y: gridOffsetY };
        dimensionsRef.current = { width, height, cols, rows, isMobile };

        // Handle Retina / HiDPI screens
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        // --- Offscreen Wordmark Rasterisation ---
        // Sized to a centered banner box (~82% width, ~0.24 aspect, auto-shrunk font)
        const bannerW = Math.max(Math.floor(width * (isMobile ? 0.90 : 0.82)), 180);
        const maxBannerH = Math.floor(height * (isMobile ? 0.62 : 0.52));
        const bannerH = Math.min(Math.max(Math.floor(bannerW * (isMobile ? 0.28 : 0.24)), 50), maxBannerH);

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = bannerW;
        tempCanvas.height = bannerH;
        const tCtx = tempCanvas.getContext('2d', { willReadFrequently: true });
        if (!tCtx) return;

        // Draw white on black for luminance sampling
        tCtx.fillStyle = '#000000';
        tCtx.fillRect(0, 0, bannerW, bannerH);

        // Auto-shrink font in heavy Arial Black to fit banner box
        let fontSize = Math.floor(bannerH * 0.85);
        tCtx.font = `900 ${fontSize}px "Arial Black", "Impact", "Arial", sans-serif`;
        let textWidth = tCtx.measureText(text).width;
        while (textWidth > bannerW * 0.92 && fontSize > 8) {
            fontSize -= 2;
            tCtx.font = `900 ${fontSize}px "Arial Black", "Impact", "Arial", sans-serif`;
            textWidth = tCtx.measureText(text).width;
        }

        tCtx.fillStyle = '#ffffff';
        tCtx.textAlign = 'center';
        tCtx.textBaseline = 'middle';
        tCtx.fillText(text, bannerW / 2, bannerH / 2);

        const imgData = tCtx.getImageData(0, 0, bannerW, bannerH);
        const data = imgData.data;

        // Centered banner box bounds in stage coords
        const boxLeft = Math.floor((width - bannerW) / 2);
        const boxTop = Math.floor((height - bannerH) / 2);

        const minCol = Math.max(0, Math.floor(boxLeft / step));
        const maxCol = Math.min(cols, Math.ceil((boxLeft + bannerW) / step));
        const minRow = Math.max(0, Math.floor(boxTop / step));
        const maxRow = Math.min(rows, Math.ceil((boxTop + bannerH) / step));

        // Glyph set folding brand letters in: '.:-+*=#%@' + letters from text
        const letters = Array.from(new Set(text.toUpperCase().replace(/[^A-Z0-9]/g, ''))).join('');
        const glyphRamp = '.:-+*=#%@' + (letters || 'KEXSIO');
        glyphRampRef.current = glyphRamp;

        const litCells = [];
        const grid = new Uint8Array(cols * rows);

        // Sample pixels into grid cells
        for (let r = minRow; r < maxRow; r++) {
            for (let c = minCol; c < maxCol; c++) {
                const px = gridOffsetX + c * step + cellSize / 2;
                const py = gridOffsetY + r * step + cellSize / 2;

                const tx = Math.floor(px - boxLeft);
                const ty = Math.floor(py - boxTop);

                if (tx >= 0 && tx < bannerW && ty >= 0 && ty < bannerH) {
                    const idx = (ty * bannerW + tx) * 4;
                    const red = data[idx];
                    const green = data[idx + 1];
                    const blue = data[idx + 2];
                    const luma = (red * 0.299 + green * 0.587 + blue * 0.114) / 255;

                    if (luma > 0.48) {
                        const glyphIdx = Math.min(Math.floor(luma * glyphRamp.length), glyphRamp.length - 1);
                        litCells.push({
                            cellX: c,
                            cellY: r,
                            homeX: px,
                            homeY: py,
                            offsetX: 0,
                            offsetY: 0,
                            vx: 0,
                            vy: 0,
                            glyph: glyphRamp[glyphIdx],
                            luma: luma
                        });
                        grid[r * cols + c] = 1;
                    }
                }
            }
        }

        litCellsRef.current = litCells;
        gridRef.current = grid;
    }, [text]);

    // Check prefers-reduced-motion
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReducedMotion(mediaQuery.matches);

        const handleChange = (e) => setReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Setup grid and resize listener
    useEffect(() => {
        initGrid();

        const handleResize = () => {
            initGrid();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [initGrid]);

    // 50ms Shimmer Interval: re-randomises every lit glyph so the logo shimmers like a live terminal
    useEffect(() => {
        if (reducedMotion) return;

        const interval = setInterval(() => {
            const ramp = glyphRampRef.current;
            if (!ramp || !ramp.length) return;

            const cells = litCellsRef.current;
            for (let i = 0; i < cells.length; i++) {
                cells[i].glyph = ramp[Math.floor(Math.random() * ramp.length)];
            }
        }, 50);

        return () => clearInterval(interval);
    }, [reducedMotion]);

    // Pointer Event Handlers: presence-based live field
    const handlePointerMove = useCallback((e) => {
        userHoveredRef.current = true;
        pointerActiveRef.current = true;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        pointerCellRef.current = {
            x: (x - gridOffsetRef.current.x) / stepRef.current,
            y: (y - gridOffsetRef.current.y) / stepRef.current
        };
    }, []);

    const handlePointerEnter = useCallback((e) => {
        userHoveredRef.current = true;
        pointerActiveRef.current = true;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        pointerCellRef.current = {
            x: (x - gridOffsetRef.current.x) / stepRef.current,
            y: (y - gridOffsetRef.current.y) / stepRef.current
        };
    }, []);

    const handlePointerLeave = useCallback(() => {
        pointerActiveRef.current = false;
        pointerCellRef.current = { x: -999, y: -999 };
    }, []);

    // Main rAF Physics and Render Loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // If reduced motion is preferred, render one calm static frame and stop
        if (reducedMotion) {
            const { width, height, cols, rows } = dimensionsRef.current;
            const step = stepRef.current;
            const cellSize = cellSizeRef.current;
            const { x: gridOffsetX, y: gridOffsetY } = gridOffsetRef.current;
            const grid = gridRef.current;
            const litCells = litCellsRef.current;

            // Clean light background
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, width, height);

            // Resting dots in soft slate
            ctx.fillStyle = '#cbd5e1';
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (!grid[r * cols + c]) {
                        const px = gridOffsetX + c * step + cellSize / 2;
                        const py = gridOffsetY + r * step + cellSize / 2;
                        ctx.fillRect(px - 0.75, py - 0.75, 1.5, 1.5);
                    }
                }
            }

            // Lit glyphs in dark theme font
            ctx.fillStyle = '#0f172a';
            ctx.font = `bold ${cellSize + 2}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            for (let i = 0; i < litCells.length; i++) {
                const cell = litCells[i];
                ctx.fillText(cell.glyph, cell.homeX, cell.homeY);
            }
            return;
        }

        let animId;
        const startTime = performance.now();
        const isCardMode = typeof window !== 'undefined' && window.location.search.includes('card');

        // Physics constants
        const PUSH_RADIUS = 10; // in cell units
        const SPRING = 0.025;
        const DAMPING = 0.5;

        const loop = (now) => {
            const { width, height, cols, rows, isMobile } = dimensionsRef.current;
            const step = stepRef.current;
            const cellSize = cellSizeRef.current;
            const { x: gridOffsetX, y: gridOffsetY } = gridOffsetRef.current;
            const grid = gridRef.current;
            const litCells = litCellsRef.current;

            // 1. Draw Light theme radial background (#ffffff -> #f1f5f9)
            const radGrad = ctx.createRadialGradient(
                width / 2, height / 2, 0,
                width / 2, height / 2, Math.max(width, height) * 0.75
            );
            radGrad.addColorStop(0, '#ffffff');
            radGrad.addColorStop(1, '#f1f5f9');
            ctx.fillStyle = radGrad;
            ctx.fillRect(0, 0, width, height);

            // 2. Draw Uniform resting dot grid (#cbd5e1) for unlit cells
            ctx.fillStyle = '#cbd5e1';
            const dotSize = isMobile ? 1 : 1.5;
            const dotHalf = dotSize / 2;
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (!grid[r * cols + c]) {
                        const px = gridOffsetX + c * step + cellSize / 2;
                        const py = gridOffsetY + r * step + cellSize / 2;
                        ctx.fillRect(px - dotHalf, py - dotHalf, dotSize, dotSize);
                    }
                }
            }

            // 3. Determine Cursor Position (Real or Lissajous Virtual Cursor)
            let pCellX = pointerCellRef.current.x;
            let pCellY = pointerCellRef.current.y;
            let isFieldLive = pointerActiveRef.current;

            // Virtual cursor on Lissajous path when ?card is present or user hasn't hovered yet
            if (isCardMode || (!userHoveredRef.current && !isFieldLive)) {
                const t = (now - startTime) / 1000;
                const v = 0.95;
                const cx = width * (0.5 + 0.34 * Math.sin(v * t));
                const cy = height * (0.5 + 0.16 * Math.sin(1.7 * v * t));
                pCellX = (cx - gridOffsetX) / step;
                pCellY = (cy - gridOffsetY) / step;
                isFieldLive = true;
            }

            // 4. Update Physics and Render Lit Glyphs
            ctx.font = `bold ${cellSize + (isMobile ? 1 : 2)}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            for (let i = 0; i < litCells.length; i++) {
                const cell = litCells[i];

                if (isFieldLive) {
                    const currentCellX = cell.cellX + cell.offsetX / step;
                    const currentCellY = cell.cellY + cell.offsetY / step;
                    const dx = currentCellX - pCellX;
                    const dy = currentCellY - pCellY;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < PUSH_RADIUS) {
                        const safeDist = Math.max(dist, 0.001);
                        const weight = 1 - dist / PUSH_RADIUS;
                        // Radial shove force = (1 - dist/R)^2 * 42
                        const force = weight * weight * 42;

                        const uX = dx / safeDist;
                        const uY = dy / safeDist;

                        // Continuous turbulence (±5.5 * weight per axis)
                        const turbX = (Math.random() * 2 - 1) * 5.5 * weight;
                        const turbY = (Math.random() * 2 - 1) * 5.5 * weight;

                        cell.vx += uX * force + turbX;
                        cell.vy += uY * force + turbY;
                    }
                }

                // Spring integration: vel += -offset * SPRING; vel *= DAMPING; offset += vel
                cell.vx += -cell.offsetX * SPRING;
                cell.vy += -cell.offsetY * SPRING;
                cell.vx *= DAMPING;
                cell.vy *= DAMPING;
                cell.offsetX += cell.vx;
                cell.offsetY += cell.vy;

                // Snap to rest below tiny epsilon
                if (
                    Math.abs(cell.offsetX) < 0.005 &&
                    Math.abs(cell.offsetY) < 0.005 &&
                    Math.abs(cell.vx) < 0.005 &&
                    Math.abs(cell.vy) < 0.005
                ) {
                    cell.offsetX = 0;
                    cell.offsetY = 0;
                    cell.vx = 0;
                    cell.vy = 0;
                }

                // 5. Dark Theme Font with Electric-Blue Disturbance Tint:
                // Calm dark font (#0f172a) -> vibrant electric-blue (#2563eb) proportional to disp/3
                const dispCell = Math.sqrt(cell.offsetX * cell.offsetX + cell.offsetY * cell.offsetY) / step;
                const ratio = Math.min(Math.max(dispCell / 3, 0), 1);

                // Calm: [15, 23, 42] (#0f172a) -> Disturbed: [37, 99, 235] (#2563eb)
                const r = Math.round(15 + (37 - 15) * ratio);
                const g = Math.round(23 + (99 - 23) * ratio);
                const b = Math.round(42 + (235 - 42) * ratio);

                ctx.fillStyle = `rgb(${r},${g},${b})`;
                ctx.fillText(cell.glyph, cell.homeX + cell.offsetX, cell.homeY + cell.offsetY);
            }

            animId = requestAnimationFrame(loop);
        };

        animId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animId);
    }, [reducedMotion]);

    return (
        <div ref={containerRef} className={`ascii-logo-stage ${className}`}>
            <style>{`
                .ascii-logo-stage {
                    position: relative;
                    width: 100%;
                    min-height: 420px;
                    height: 50vh;
                    max-height: 560px;
                    background: #ffffff;
                    border-bottom: 1px solid #e2e8f0;
                    overflow: hidden;
                    cursor: crosshair;
                    user-select: none;
                    -webkit-user-select: none;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
                }
                .ascii-logo-canvas {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    display: block;
                    cursor: crosshair;
                }
                @media (max-width: 768px) {
                    .ascii-logo-stage {
                        min-height: 300px;
                        height: 40vh;
                    }
                }
            `}</style>

            <canvas
                ref={canvasRef}
                className="ascii-logo-canvas"
                onPointerMove={handlePointerMove}
                onPointerEnter={handlePointerEnter}
                onPointerLeave={handlePointerLeave}
            />
        </div>
    );
};

export default AsciiLogoBanner;
