import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './InfiniteGallery.css';

/* ------------------------------------------------------------------ *
 * InfiniteGallery
 *
 * A full-screen, GPU-powered, infinitely-panning photo grid rendered
 * on a single WebGL plane (Three.js). One custom fragment shader does
 * the lens/barrel distortion, the infinite tiling, the rounded-card
 * masking, the drop shadow, the vignette and the film grain. Each
 * card's photo + title + year + tag is pre-composited onto an image
 * atlas with the 2D canvas API (the only practical way to get crisp
 * text out of a raw shader), and the shader just samples that atlas.
 *
 * Public API:
 *   <InfiniteGallery items={[{ title, year, tag, image, href, accent }]}
 *                     className="my-class"
 *                     onSelect={(item) => {}} />
 *
 * The component always fills its parent via width:100%/height:100% —
 * size the wrapping element to control how big the gallery appears.
 * ------------------------------------------------------------------ */

const ACCENTS = [
    '#ff2d87', // hot pink
    '#9dff1f', // acid green
    '#b44bff', // electric purple
    '#ff7a1a', // neon orange
    '#33e1ff', // cyan
    '#fff23d', // bright yellow
    '#5ec8ff', // sky blue
    '#5bffb0', // mint green
];

const DEFAULT_TITLES = [
    { title: 'Main Character', year: '2026', tag: 'VOL.01' },
    { title: 'Golden Hour', year: '2025', tag: 'VOL.02' },
    { title: 'No Thoughts', year: '2026', tag: 'VOL.03' },
    { title: 'Soft Launch', year: '2025', tag: 'VOL.04' },
    { title: 'Night Owl', year: '2026', tag: 'VOL.05' },
    { title: 'Big Mood', year: '2025', tag: 'VOL.06' },
    { title: 'Low Key', year: '2026', tag: 'VOL.07' },
    { title: 'Side Quest', year: '2025', tag: 'VOL.08' },
    { title: 'Plot Twist', year: '2026', tag: 'VOL.09' },
    { title: 'Rent Free', year: '2025', tag: 'VOL.10' },
    { title: 'New Era', year: '2026', tag: 'VOL.11' },
    { title: 'Hard Launch', year: '2025', tag: 'VOL.12' },
    { title: 'Core Memory', year: '2026', tag: 'VOL.13' },
    { title: 'Real One', year: '2025', tag: 'VOL.14' },
    { title: 'Era Defining', year: '2026', tag: 'VOL.15' },
    { title: 'Main Quest', year: '2025', tag: 'VOL.16' },
    { title: 'Loud Thinking', year: '2026', tag: 'VOL.17' },
    { title: 'Slow Burn', year: '2025', tag: 'VOL.18' },
    { title: 'Fever Dream', year: '2026', tag: 'VOL.19' },
    { title: 'Golden Child', year: '2025', tag: 'VOL.20' },
    { title: 'Night Shift', year: '2026', tag: 'VOL.21' },
    { title: 'Fresh Start', year: '2025', tag: 'VOL.22' },
    { title: 'Deep Cut', year: '2026', tag: 'VOL.23' },
    { title: 'Prime Time', year: '2025', tag: 'VOL.24' },
    { title: 'Afterglow', year: '2026', tag: 'VOL.25' },
];

const DEFAULT_IMAGES = [
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80',
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
    'https://images.unsplash.com/photo-1523365280197-f1783db9fe62?w=600&q=80',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
    'https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=600&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
    'https://images.unsplash.com/photo-1528892952291-009c663ce843?w=600&q=80',
    'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=600&q=80',
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80',
    'https://images.unsplash.com/photo-1513569771920-c9e1d31714af?w=600&q=80',
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80',
    'https://images.unsplash.com/photo-1542103749-8ef59b94f728?w=600&q=80',
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&q=80',
    'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=600&q=80',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80',
    'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=600&q=80',
    'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&q=80',
    'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=600&q=80',
    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80',
    'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=600&q=80',
    'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&q=80',
];

const DEFAULT_ITEMS = DEFAULT_TITLES.map((t, i) => ({
    title: t.title,
    year: t.year,
    tag: t.tag,
    image: DEFAULT_IMAGES[i],
    href: '',
    accent: ACCENTS[i % ACCENTS.length],
}));

/* ------------------------------------------------------------------ *
 * Shared math — the exact same distortion / grid formulas are used
 * here (in JS, for hover + click hit-testing) and in the fragment
 * shader below (for rendering). Keeping one canonical description in
 * this comment block and mirroring it carefully in both places is
 * what makes "click the thing you're looking at" work.
 * ------------------------------------------------------------------ */

function glslMod(a, b) {
    return a - b * Math.floor(a / b);
}

function computeGridSample(px, py, state) {
    const { width, height, offsetX, offsetY, zoom, cellSize, distortion } = state;
    const cx = px - width / 2;
    const cy = py - height / 2;
    const maxDim = Math.max(width, height) * 0.5 || 1;
    let nx = cx / maxDim;
    let ny = cy / maxDim;
    const r2 = nx * nx + ny * ny;
    const k = 1 - distortion * r2;
    nx *= k;
    ny *= k;
    const dx = (nx * maxDim) / zoom + width / 2;
    const dy = (ny * maxDim) / zoom + height / 2;
    const wx = dx - offsetX;
    const wy = dy - offsetY;
    const gx = wx / cellSize;
    const gy = wy / cellSize;
    const cellX = Math.floor(gx);
    const cellY = Math.floor(gy);
    const localX = gx - cellX;
    const localY = gy - cellY;
    return { cellX, cellY, localX, localY };
}

function cellItemIndex(cellX, cellY, itemCount) {
    if (itemCount <= 0) return 0;
    const h = glslMod(cellX * 7 + cellY * 13 + cellX * cellY * 3, itemCount);
    return Math.floor(h);
}

function getBreakpointConfig(width) {
    if (width < 520) return { cellSize: 222, gap: 10, radius: 18 };
    if (width < 820) return { cellSize: 196, gap: 12, radius: 18 };
    if (width < 1180) return { cellSize: 172, gap: 13, radius: 16 };
    return { cellSize: 150, gap: 14, radius: 14 };
}

/* ------------------------------------------------------------------ *
 * Canvas2D atlas baking — photo + accent wash + gradient + title/
 * year/tag text, all pre-rendered per tile so the shader only ever
 * needs one texture lookup per visible card.
 * ------------------------------------------------------------------ */

function hexToRgba(hex, alpha) {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || '#ffffff');
    if (!m) return `rgba(255,255,255,${alpha})`;
    const r = parseInt(m[1], 16);
    const g = parseInt(m[2], 16);
    const b = parseInt(m[3], 16);
    return `rgba(${r},${g},${b},${alpha})`;
}

function roundRectPath(ctx, x, y, w, h, r) {
    const rr = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
}

function drawCover(ctx, img, dx, dy, dw, dh) {
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    if (!iw || !ih) return;
    const scale = Math.max(dw / iw, dh / ih);
    const sw = dw / scale;
    const sh = dh / scale;
    const sx = (iw - sw) / 2;
    const sy = (ih - sh) / 2;
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
}

function drawPill(ctx, text, rightX, topY, tileSize) {
    const label = String(text || '').toUpperCase();
    if (!label) return;
    ctx.font = `700 ${Math.round(tileSize * 0.05)}px -apple-system, "Segoe UI", Arial, sans-serif`;
    const paddingX = tileSize * 0.035;
    const textW = ctx.measureText(label).width;
    const pillH = tileSize * 0.082;
    const pillW = textW + paddingX * 2;
    const x = rightX - pillW;
    const y = topY;
    roundRectPath(ctx, x, y, pillW, pillH, pillH / 2);
    ctx.fillStyle = 'rgba(0,0,0,0.42)';
    ctx.fill();
    ctx.lineWidth = Math.max(1, tileSize * 0.0035);
    ctx.strokeStyle = 'rgba(255,255,255,0.55)';
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.fillText(label, x + paddingX, y + pillH / 2 + tileSize * 0.002);
}

function drawTitleBlock(ctx, item, tx, ty, tileSize) {
    const title = String(item.title || '').toUpperCase();
    const pad = tileSize * 0.07;
    const baseY = ty + tileSize - pad;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#ffffff';
    ctx.font = `800 ${Math.round(tileSize * 0.088)}px -apple-system, "Segoe UI", Arial, sans-serif`;
    const maxWidth = tileSize - pad * 2;
    let displayTitle = title;
    while (displayTitle.length > 3 && ctx.measureText(displayTitle).width > maxWidth) {
        displayTitle = displayTitle.slice(0, -1);
    }
    if (displayTitle !== title) displayTitle = `${displayTitle.trim()}…`;
    ctx.fillText(displayTitle, tx + pad, baseY);

    if (item.year) {
        ctx.fillStyle = 'rgba(255,255,255,0.72)';
        ctx.font = `600 ${Math.round(tileSize * 0.05)}px -apple-system, "Segoe UI", Arial, sans-serif`;
        ctx.fillText(String(item.year), tx + pad, baseY + tileSize * 0.056);
    }
}

function drawFallbackPoster(ctx, tx, ty, size, item) {
    const accent = item.accent || '#ff2d87';
    const grad = ctx.createLinearGradient(tx, ty, tx + size, ty + size);
    grad.addColorStop(0, accent);
    grad.addColorStop(1, '#0d0d12');
    ctx.fillStyle = grad;
    ctx.fillRect(tx, ty, size, size);

    const cb = size * 0.09;
    ctx.globalAlpha = 0.45;
    for (let yy = 0; yy < 4; yy += 1) {
        for (let xx = 0; xx < 4; xx += 1) {
            if ((xx + yy) % 2 === 0) {
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(tx + xx * cb, ty + yy * cb, cb, cb);
            }
        }
    }
    ctx.globalAlpha = 1;

    const sphereR = size * 0.14;
    const scx = tx + size * 0.78;
    const scy = ty + size * 0.26;
    const sg = ctx.createRadialGradient(scx - sphereR * 0.4, scy - sphereR * 0.4, sphereR * 0.08, scx, scy, sphereR);
    sg.addColorStop(0, '#ffffff');
    sg.addColorStop(0.45, '#cfd8ff');
    sg.addColorStop(1, '#4b4f66');
    ctx.beginPath();
    ctx.arc(scx, scy, sphereR, 0, Math.PI * 2);
    ctx.fillStyle = sg;
    ctx.fill();

    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = Math.max(1, size * 0.01);
    for (let i = 0; i < 5; i += 1) {
        const yy = ty + size * (0.5 + i * 0.06);
        ctx.beginPath();
        ctx.moveTo(tx, yy);
        ctx.bezierCurveTo(tx + size * 0.3, yy - size * 0.05, tx + size * 0.7, yy + size * 0.05, tx + size, yy);
        ctx.stroke();
    }

    ctx.save();
    ctx.translate(tx + size * 0.22, ty + size * 0.6);
    const sr = size * 0.09;
    ctx.beginPath();
    ctx.arc(0, 0, sr, 0, Math.PI * 2);
    ctx.fillStyle = '#ffe14d';
    ctx.fill();
    ctx.fillStyle = '#111111';
    ctx.beginPath();
    ctx.arc(-sr * 0.32, -sr * 0.2, sr * 0.11, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(sr * 0.32, -sr * 0.2, sr * 0.11, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(0, sr * 0.05, sr * 0.55, 0.15 * Math.PI, 0.85 * Math.PI);
    ctx.lineWidth = sr * 0.12;
    ctx.strokeStyle = '#111111';
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    const grainCount = Math.floor((size * size) / 1800);
    for (let i = 0; i < grainCount; i += 1) {
        ctx.fillRect(tx + Math.random() * size, ty + Math.random() * size, 1, 1);
    }

    const bgrad = ctx.createLinearGradient(tx, ty + size * 0.5, tx, ty + size);
    bgrad.addColorStop(0, 'rgba(0,0,0,0)');
    bgrad.addColorStop(1, 'rgba(0,0,0,0.8)');
    ctx.fillStyle = bgrad;
    ctx.fillRect(tx, ty, size, size);

    if (item.tag) drawPill(ctx, item.tag, tx + size - 14, ty + 14, size);
    drawTitleBlock(ctx, item, tx, ty, size);
}

function loadImage(src) {
    return new Promise((resolve) => {
        if (!src) {
            resolve(null);
            return;
        }
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.decoding = 'async';
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = src;
    });
}

async function buildAtlas(items, { tileSize, cols }) {
    const atlasSize = cols * tileSize;
    const canvas = document.createElement('canvas');
    canvas.width = atlasSize;
    canvas.height = atlasSize;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#0a0a0c';
    ctx.fillRect(0, 0, atlasSize, atlasSize);

    const images = await Promise.all(items.map((item) => loadImage(item.image)));

    items.forEach((item, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const tx = col * tileSize;
        const ty = row * tileSize;

        ctx.save();
        ctx.beginPath();
        ctx.rect(tx, ty, tileSize, tileSize);
        ctx.clip();

        const img = images[i];
        if (img) {
            drawCover(ctx, img, tx, ty, tileSize, tileSize);

            ctx.globalCompositeOperation = 'overlay';
            ctx.fillStyle = hexToRgba(item.accent || '#ffffff', 0.22);
            ctx.fillRect(tx, ty, tileSize, tileSize);
            ctx.globalCompositeOperation = 'source-over';

            const grad = ctx.createLinearGradient(tx, ty + tileSize * 0.42, tx, ty + tileSize);
            grad.addColorStop(0, 'rgba(0,0,0,0)');
            grad.addColorStop(1, 'rgba(0,0,0,0.8)');
            ctx.fillStyle = grad;
            ctx.fillRect(tx, ty, tileSize, tileSize);

            if (item.tag) drawPill(ctx, item.tag, tx + tileSize - 14, ty + 14, tileSize);
            drawTitleBlock(ctx, item, tx, ty, tileSize);
        } else {
            drawFallbackPoster(ctx, tx, ty, tileSize, item);
        }

        ctx.restore();
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
}

/* ------------------------------------------------------------------ *
 * Shaders
 * ------------------------------------------------------------------ */

const VERTEX_SHADER = `
void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;

uniform vec2 uResolution;
uniform float uDpr;
uniform vec2 uOffset;
uniform float uZoom;
uniform float uCellSize;
uniform float uGap;
uniform float uRadius;
uniform float uDistortion;
uniform sampler2D uAtlas;
uniform float uAtlasCols;
uniform float uItemCount;
uniform vec2 uHoverCell;
uniform float uHoverAmount;
uniform float uVignette;
uniform float uGrain;
uniform float uTime;

float sdRoundRect(vec2 p, vec2 halfSize, float r) {
    vec2 q = abs(p) - halfSize + r;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

vec3 linearToSRGB(vec3 c) {
    vec3 lower = c * 12.92;
    vec3 higher = 1.055 * pow(clamp(c, 0.0, 1.0), vec3(1.0 / 2.4)) - 0.055;
    return mix(lower, higher, step(vec3(0.0031308), c));
}

void main() {
    vec2 fragPx = gl_FragCoord.xy / uDpr;
    vec2 centered = fragPx - uResolution * 0.5;
    float maxDim = max(uResolution.x, uResolution.y) * 0.5;
    vec2 norm = centered / maxDim;

    float r2 = dot(norm, norm);
    float k = 1.0 - uDistortion * r2;
    vec2 distortedNorm = norm * k;
    vec2 distortedPx = distortedNorm * maxDim / uZoom + uResolution * 0.5;

    vec2 worldPx = distortedPx - uOffset;

    vec2 gridCoord = worldPx / uCellSize;
    vec2 cellIndex = floor(gridCoord);
    vec2 localUV = fract(gridCoord);

    vec2 localPx = localUV * uCellSize;
    vec2 p = localPx - uCellSize * 0.5;
    vec2 cardHalf = vec2(uCellSize * 0.5 - uGap * 0.5);

    bool isHover = (abs(cellIndex.x - uHoverCell.x) < 0.5) && (abs(cellIndex.y - uHoverCell.y) < 0.5);
    float hoverF = isHover ? uHoverAmount : 0.0;

    float hoverZoom = mix(1.0, 1.045, hoverF);
    vec2 pCard = p / hoverZoom;

    float dCard = sdRoundRect(pCard, cardHalf, uRadius);
    float cardMask = 1.0 - smoothstep(-1.5, 1.0, dCard);

    float shadowOffsetPx = 10.0;
    float dShadow = sdRoundRect(p - vec2(0.0, -shadowOffsetPx), cardHalf, uRadius);
    float shadowMask = (1.0 - smoothstep(0.0, 26.0, dShadow)) * 0.38 * (1.0 - cardMask);

    float edgeLine = smoothstep(0.0, 1.0, dCard) - smoothstep(1.0, 3.0, dCard);

    vec3 bg = vec3(0.035, 0.035, 0.04);
    bg = mix(bg, vec3(0.0), shadowMask);
    bg = mix(bg, vec3(0.09, 0.09, 0.1), edgeLine * 0.5);
    float bgBrighten = mix(1.0, 1.12, hoverF * (1.0 - cardMask));
    bg *= bgBrighten;

    vec2 cardUV = (pCard + cardHalf) / (cardHalf * 2.0);
    cardUV = clamp(cardUV, 0.0, 1.0);

    float itemIndexF = mod(cellIndex.x * 7.0 + cellIndex.y * 13.0 + cellIndex.x * cellIndex.y * 3.0, uItemCount);
    itemIndexF = floor(itemIndexF);
    float col = mod(itemIndexF, uAtlasCols);
    float row = floor(itemIndexF / uAtlasCols);

    float inset = 0.012;
    vec2 tileUV = mix(vec2(inset), vec2(1.0 - inset), cardUV);
    vec2 atlasUV = (vec2(col, row) + tileUV) / uAtlasCols;

    vec4 tex = texture2D(uAtlas, atlasUV);
    vec3 texColor = tex.rgb;
    texColor *= mix(1.0, 1.08, hoverF);

    float vignette = smoothstep(1.5, 0.35, length(norm));
    vignette = mix(1.0 - uVignette, 1.0, vignette);

    vec3 color = mix(bg, texColor, cardMask);
    color *= vignette;

    float grain = (hash21(fragPx + uTime * 60.0) - 0.5) * uGrain;
    color += grain;

    gl_FragColor = vec4(linearToSRGB(max(color, 0.0)), 1.0);
}
`;

/* ------------------------------------------------------------------ *
 * Component
 * ------------------------------------------------------------------ */

export default function InfiniteGallery({ items, className = '', onSelect }) {
    const containerRef = useRef(null);
    const stateRef = useRef(null);

    const galleryItems = items && items.length ? items : DEFAULT_ITEMS;

    const itemsRef = useRef(galleryItems);
    itemsRef.current = galleryItems;
    const onSelectRef = useRef(onSelect);
    onSelectRef.current = onSelect;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return undefined;

        let disposed = false;

        let supportsWebGL = true;
        try {
            const testCanvas = document.createElement('canvas');
            supportsWebGL = !!(
                window.WebGLRenderingContext &&
                (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl'))
            );
        } catch (err) {
            supportsWebGL = false;
        }

        if (!supportsWebGL) {
            container.classList.add('infinite-gallery-fallback-active');
            return undefined;
        }

        const canvas = document.createElement('canvas');
        canvas.className = 'infinite-gallery-canvas';
        container.appendChild(canvas);

        const state = {
            renderer: null,
            texture: null,
            width: 0,
            height: 0,
            dpr: 1,
            offset: { x: 0, y: 0 },
            velocity: { x: 0, y: 0 },
            zoomCurrent: 1,
            zoomTarget: 1,
            cellSize: 170,
            gap: 14,
            radius: 16,
            distortion: 0.22,
            hoverCell: { x: 1e9, y: 1e9 },
            hoverAmount: 0,
            isDragging: false,
            pointerId: null,
            lastPointer: { x: 0, y: 0 },
            lastMoveTime: 0,
            pressStart: { x: 0, y: 0, t: 0 },
            moved: 0,
            rafId: null,
            lastTime: 0,
        };
        stateRef.current = state;

        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: false,
            alpha: false,
            depth: false,
            stencil: false,
            powerPreference: 'high-performance',
            preserveDrawingBuffer: false,
        });
        renderer.setClearColor(0x08080a, 1);
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const geometry = new THREE.PlaneGeometry(2, 2);

        const placeholderTexture = new THREE.DataTexture(new Uint8Array([10, 10, 12, 255]), 1, 1, THREE.RGBAFormat);
        placeholderTexture.needsUpdate = true;

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uResolution: { value: new THREE.Vector2(1, 1) },
                uDpr: { value: 1 },
                uOffset: { value: new THREE.Vector2(0, 0) },
                uZoom: { value: 1 },
                uCellSize: { value: state.cellSize },
                uGap: { value: state.gap },
                uRadius: { value: state.radius },
                uDistortion: { value: state.distortion },
                uAtlas: { value: placeholderTexture },
                uAtlasCols: { value: 1 },
                uItemCount: { value: 1 },
                uHoverCell: { value: new THREE.Vector2(1e9, 1e9) },
                uHoverAmount: { value: 0 },
                uVignette: { value: 0.42 },
                uGrain: { value: 0.035 },
                uTime: { value: 0 },
            },
            vertexShader: VERTEX_SHADER,
            fragmentShader: FRAGMENT_SHADER,
            depthTest: false,
            depthWrite: false,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        state.renderer = renderer;

        const currentItems = itemsRef.current;
        const tileSize = currentItems.length > 36 ? 224 : 256;
        const cols = Math.max(1, Math.ceil(Math.sqrt(currentItems.length)));
        material.uniforms.uItemCount.value = currentItems.length;
        material.uniforms.uAtlasCols.value = cols;

        buildAtlas(currentItems, { tileSize, cols }).then((texture) => {
            if (disposed) {
                texture.dispose();
                return;
            }
            material.uniforms.uAtlas.value = texture;
            state.texture = texture;
            placeholderTexture.dispose();
        });

        const applySize = (w, h) => {
            const dpr = Math.min(window.devicePixelRatio || 1, w < 520 ? 1.25 : 1.5);
            state.width = w;
            state.height = h;
            state.dpr = dpr;
            renderer.setPixelRatio(dpr);
            renderer.setSize(w, h, false);
            material.uniforms.uResolution.value.set(w, h);
            material.uniforms.uDpr.value = dpr;
            const bp = getBreakpointConfig(w);
            state.cellSize = bp.cellSize;
            state.gap = bp.gap;
            state.radius = bp.radius;
            material.uniforms.uCellSize.value = bp.cellSize;
            material.uniforms.uGap.value = bp.gap;
            material.uniforms.uRadius.value = bp.radius;
        };

        const initialRect = container.getBoundingClientRect();
        applySize(Math.max(1, initialRect.width), Math.max(1, initialRect.height));

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const cw = entry.contentRect.width;
                const ch = entry.contentRect.height;
                if (cw > 0 && ch > 0) applySize(cw, ch);
            }
        });
        resizeObserver.observe(container);

        const CLICK_MAX_MOVE = 4;
        const CLICK_MAX_TIME = 300;
        const FRICTION_BASE = 0.035;

        const getLocalPoint = (e) => {
            const r = canvas.getBoundingClientRect();
            return { x: e.clientX - r.left, y: e.clientY - r.top };
        };

        const sampleState = () => ({
            width: state.width,
            height: state.height,
            offsetX: state.offset.x,
            offsetY: state.offset.y,
            zoom: state.zoomCurrent,
            cellSize: state.cellSize,
            distortion: state.distortion,
        });

        const updateHover = (x, y) => {
            const glY = state.height - y;
            const { cellX, cellY } = computeGridSample(x, glY, sampleState());
            state.hoverCell.x = cellX;
            state.hoverCell.y = cellY;
        };

        const clearHover = () => {
            state.hoverCell.x = 1e9;
            state.hoverCell.y = 1e9;
        };

        const applyDelta = (dx, dy, dtMs) => {
            state.offset.x += dx;
            state.offset.y += -dy;
            if (dtMs > 0) {
                const vx = (dx / dtMs) * 1000;
                const vy = (-dy / dtMs) * 1000;
                state.velocity.x = state.velocity.x * 0.72 + vx * 0.28;
                state.velocity.y = state.velocity.y * 0.72 + vy * 0.28;
            }
        };

        const processMove = (point, timeMs) => {
            const dx = point.x - state.lastPointer.x;
            const dy = point.y - state.lastPointer.y;
            const dt = Math.max(1, timeMs - (state.lastMoveTime || timeMs));
            applyDelta(dx, dy, dt);
            state.lastPointer = point;
            state.lastMoveTime = timeMs;
            state.moved += Math.hypot(dx, dy);
        };

        const handlePointerDown = (e) => {
            if (e.pointerType === 'mouse' && e.button !== 0) return;
            state.isDragging = true;
            state.pointerId = e.pointerId;
            state.lastPointer = getLocalPoint(e);
            state.lastMoveTime = performance.now();
            state.pressStart = { ...state.lastPointer, t: performance.now() };
            state.moved = 0;
            state.velocity.x = 0;
            state.velocity.y = 0;
            state.zoomTarget = 1.1;
            canvas.classList.add('is-dragging');
            try {
                canvas.setPointerCapture(e.pointerId);
            } catch (err) {
                /* noop */
            }
            e.preventDefault();
        };

        const handlePointerMove = (e) => {
            if (!state.isDragging) {
                const p = getLocalPoint(e);
                updateHover(p.x, p.y);
                return;
            }
            if (e.pointerId !== state.pointerId) return;
            e.preventDefault();
            const now = performance.now();
            if (typeof e.getCoalescedEvents === 'function') {
                const events = e.getCoalescedEvents();
                if (events && events.length) {
                    const rect = canvas.getBoundingClientRect();
                    events.forEach((ce) => {
                        processMove({ x: ce.clientX - rect.left, y: ce.clientY - rect.top }, now);
                    });
                    return;
                }
            }
            processMove(getLocalPoint(e), now);
        };

        const endDrag = (e) => {
            if (!state.isDragging) return;
            state.isDragging = false;
            state.zoomTarget = 1;
            canvas.classList.remove('is-dragging');
            if (state.pointerId !== null) {
                try {
                    canvas.releasePointerCapture(state.pointerId);
                } catch (err) {
                    /* noop */
                }
            }
            state.pointerId = null;

            const pressDuration = performance.now() - state.pressStart.t;
            if (state.moved < CLICK_MAX_MOVE && pressDuration < CLICK_MAX_TIME) {
                const point = e ? getLocalPoint(e) : state.lastPointer;
                const glY = state.height - point.y;
                const { cellX, cellY } = computeGridSample(point.x, glY, sampleState());
                const list = itemsRef.current;
                const idx = cellItemIndex(cellX, cellY, list.length);
                const chosen = list[idx];
                if (chosen) {
                    if (typeof onSelectRef.current === 'function') {
                        onSelectRef.current(chosen);
                    } else if (chosen.href) {
                        window.open(chosen.href, '_blank', 'noopener,noreferrer');
                    }
                }
            }
        };

        const handlePointerUp = (e) => {
            if (state.pointerId !== null && e.pointerId !== state.pointerId) return;
            endDrag(e);
        };

        const handlePointerCancel = (e) => {
            endDrag(e);
        };

        const handlePointerLeave = () => {
            if (!state.isDragging) clearHover();
        };

        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        const handleDragStart = (e) => {
            e.preventDefault();
        };

        canvas.addEventListener('pointerdown', handlePointerDown, { passive: false });
        canvas.addEventListener('pointermove', handlePointerMove, { passive: false });
        window.addEventListener('pointerup', handlePointerUp, { passive: true });
        window.addEventListener('pointercancel', handlePointerCancel, { passive: true });
        canvas.addEventListener('pointerleave', handlePointerLeave, { passive: true });
        canvas.addEventListener('contextmenu', handleContextMenu);
        canvas.addEventListener('dragstart', handleDragStart);

        const MAX_DT = 1 / 15;

        const tick = (now) => {
            state.rafId = requestAnimationFrame(tick);
            if (document.hidden) return;
            if (!state.lastTime) state.lastTime = now;
            let dt = (now - state.lastTime) / 1000;
            state.lastTime = now;
            if (dt > MAX_DT) dt = MAX_DT;

            if (!state.isDragging) {
                const speed = Math.hypot(state.velocity.x, state.velocity.y);
                if (speed > 3) {
                    state.offset.x += state.velocity.x * dt;
                    state.offset.y += state.velocity.y * dt;
                    const frictionFactor = Math.pow(FRICTION_BASE, dt);
                    state.velocity.x *= frictionFactor;
                    state.velocity.y *= frictionFactor;
                } else {
                    state.velocity.x = 0;
                    state.velocity.y = 0;
                }
            }

            const zoomEase = 1 - Math.pow(0.0025, dt);
            state.zoomCurrent += (state.zoomTarget - state.zoomCurrent) * zoomEase;

            const hoverTargetAmount = state.hoverCell.x < 1e8 && !state.isDragging ? 1 : 0;
            const hoverEase = 1 - Math.pow(0.01, dt);
            state.hoverAmount += (hoverTargetAmount - state.hoverAmount) * hoverEase;

            material.uniforms.uOffset.value.set(state.offset.x, state.offset.y);
            material.uniforms.uZoom.value = state.zoomCurrent;
            material.uniforms.uHoverCell.value.set(state.hoverCell.x, state.hoverCell.y);
            material.uniforms.uHoverAmount.value = state.hoverAmount;
            material.uniforms.uTime.value = now / 1000;

            renderer.render(scene, camera);
        };
        state.rafId = requestAnimationFrame(tick);

        const handleVisibility = () => {
            if (!document.hidden) {
                state.lastTime = 0;
            }
        };
        document.addEventListener('visibilitychange', handleVisibility);

        return () => {
            disposed = true;
            cancelAnimationFrame(state.rafId);
            document.removeEventListener('visibilitychange', handleVisibility);
            resizeObserver.disconnect();
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
            window.removeEventListener('pointercancel', handlePointerCancel);
            canvas.removeEventListener('pointerleave', handlePointerLeave);
            canvas.removeEventListener('contextmenu', handleContextMenu);
            canvas.removeEventListener('dragstart', handleDragStart);

            geometry.dispose();
            material.dispose();
            if (state.texture) state.texture.dispose();
            placeholderTexture.dispose();
            renderer.dispose();
            if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
        };
    }, []);

    return (
        <div ref={containerRef} className={`infinite-gallery-root ${className}`}>
            <div className="infinite-gallery-fallback">
                {galleryItems.slice(0, 24).map((it, i) => (
                    <div
                        className="infinite-gallery-fallback-card"
                        key={i}
                        style={it.image ? { backgroundImage: `url(${it.image})` } : undefined}
                    >
                        {it.tag && <span className="infinite-gallery-fallback-tag">{it.tag}</span>}
                        <div className="infinite-gallery-fallback-title">{it.title}</div>
                        {it.year && <div className="infinite-gallery-fallback-year">{it.year}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}
