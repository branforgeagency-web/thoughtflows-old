import React, { useEffect, useRef, useState } from "react";
import { mediaUrl } from '../config/media';
const localWaterImg = mediaUrl("images/water-texture.jpg");

/**
 * Full-Screen Interactive Liquid-Water Hero Banner
 *
 * Direct top-down view of clean, bright blue water with the project title/brand
 * ("THOUGHTFLOWS" / "AQUORA") baked directly into the water texture via an
 * off-screen canvas. The combined texture is processed by a custom WebGL
 * liquid refraction and displacement shader, allowing both the water caustics
 * and the fashion-editorial lettering to ripple, bend, and refract in unison
 * as the user's cursor or touch moves across the surface.
 *
 * @param {Object} props
 * @param {string} [props.text="THOUGHTFLOWS"] - The bold word baked into the water
 * @param {string} [props.imageUrl] - Top-down aerial water texture
 * @param {string} [props.fallbackColor="#1689fe"] - Bright blue water fallback
 * @param {number} [props.metalness=0.68] - Specular metallic sheen factor
 * @param {number} [props.roughness=0.25] - Surface microfacet roughness
 * @param {number} [props.displacementStrength=4.25] - Liquid refraction depth
 * @param {string} [props.className] - Optional extra class names
 */
export function LiquidWaterHero({
  text = "THOUGHTFLOWS",
  imageUrl = null,
  fallbackColor = "#1689fe",
  metalness = 0.68,
  roughness = 0.25,
  displacementStrength = 4.25,
  className = "",
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [webglFailed, setWebglFailed] = useState(false);

  // Automatically determine display text: fallback to AQUORA if empty
  const displayText = (text && text.trim().length > 0 ? text : "AQUORA").toUpperCase();
  const activeImageSrc = imageUrl || localWaterImg;

  useEffect(() => {
    ensureFashionFontLoaded();

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return undefined;

    let disposed = false;
    let rafId = null;
    let gl = null;
    let program = null;
    let positionBuffer = null;
    let texture = null;
    let resizeObserver = null;
    let resizeTimeout = null;

    // Smoothed pointer & wake state
    const pointerTarget = { x: 0.5, y: 0.5 };
    const pointerSmoothed = { x: 0.5, y: 0.5 };
    let lastClientPos = { x: null, y: null };
    let pointerActivity = 0.0;
    const startTime = performance.now();

    // 8 distinct physical ripple waves (fully unrolled for WebGL1 compatibility)
    const NUM_RIPPLES = 8;
    const ripplesData = new Float32Array(NUM_RIPPLES * 4); // [x, y, birthTime, strength]
    let rippleHead = 0;
    let lastRippleSpawnTime = 0;
    let lastSpawnPos = { x: 0.5, y: 0.5 };

    const workCanvas = document.createElement("canvas");
    const workCtx = workCanvas.getContext("2d");

    const sourceImage = new window.Image();
    let imageLoaded = false;

    // Only set crossOrigin if loading from external domain
    if (
      typeof activeImageSrc === "string" &&
      activeImageSrc.startsWith("http") &&
      !activeImageSrc.startsWith(window.location.origin)
    ) {
      sourceImage.crossOrigin = "anonymous";
    }

    // Cap DPR at 1 for maximum smoothness and stable 60fps
    function getDisplaySize() {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1);
      return {
        cssWidth: Math.max(1, Math.round(rect.width)),
        cssHeight: Math.max(1, Math.round(rect.height)),
        pxWidth: Math.max(1, Math.round(rect.width * dpr)),
        pxHeight: Math.max(1, Math.round(rect.height * dpr)),
      };
    }

    /**
     * Procedural clean bright blue water base with realistic sun caustics.
     */
    function drawProceduralWater(ctx, w, h, baseHex) {
      const { r, g, b } = hexToRgb(baseHex);
      const clampRgb = (amt) => {
        const factor = 1 + amt;
        const nr = Math.min(255, Math.max(0, Math.round(r * factor + (amt > 0 ? amt * 70 : 0))));
        const ng = Math.min(255, Math.max(0, Math.round(g * factor + (amt > 0 ? amt * 80 : 0))));
        const nb = Math.min(255, Math.max(0, Math.round(b * factor + (amt > 0 ? amt * 90 : 0))));
        return `rgb(${nr}, ${ng}, ${nb})`;
      };

      const grad = ctx.createLinearGradient(0, 0, w * 0.4, h);
      grad.addColorStop(0, clampRgb(0.18));
      grad.addColorStop(0.5, `rgb(${r}, ${g}, ${b})`);
      grad.addColorStop(1, clampRgb(-0.22));
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < 22; i++) {
        const seed = i * 61.27;
        const cx = (Math.sin(seed * 1.3) * 0.5 + 0.5) * w;
        const cy = (Math.cos(seed * 0.9) * 0.5 + 0.5) * h;
        const radX = w * (0.07 + (Math.sin(seed * 2.1) * 0.5 + 0.5) * 0.14);
        const radY = radX * (0.65 + (Math.cos(seed * 1.5) * 0.5 + 0.5) * 0.35);

        const caustic = ctx.createRadialGradient(cx, cy, 0, cx, cy, radX);
        caustic.addColorStop(0, "rgba(255, 255, 255, 0.28)");
        caustic.addColorStop(0.45, "rgba(180, 240, 255, 0.12)");
        caustic.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = caustic;
        ctx.beginPath();
        ctx.ellipse(cx, cy, radX, radY, seed * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.lineCap = "round";
      for (let j = 0; j < 14; j++) {
        const seed = j * 43.19;
        const y = h * (0.05 + 0.9 * (Math.sin(seed) * 0.5 + 0.5));
        ctx.strokeStyle = `rgba(255, 255, 255, ${(0.05 + 0.08 * (Math.cos(seed * 1.7) * 0.5 + 0.5)).toFixed(3)})`;
        ctx.lineWidth = Math.max(1.5, h * 0.003);
        ctx.beginPath();
        ctx.moveTo(0, y);
        const step = Math.max(10, w / 24);
        for (let x = 0; x <= w; x += step) {
          const yy = y + Math.sin(x * 0.01 + seed) * (h * 0.015);
          ctx.lineTo(x, yy);
        }
        ctx.stroke();
      }
    }

    /**
     * Draw water photo with strict 'cover' geometry (no distortion, no borders).
     */
    function drawCoverImage(ctx, img, w, h) {
      const iw = img.naturalWidth || img.width;
      const ih = img.naturalHeight || img.height;
      if (!iw || !ih) return;

      const imgRatio = iw / ih;
      const boxRatio = w / h;
      let dw, dh, ox, oy;
      if (imgRatio > boxRatio) {
        dh = h;
        dw = h * imgRatio;
        ox = (w - dw) / 2;
        oy = 0;
      } else {
        dw = w;
        dh = w / imgRatio;
        ox = 0;
        oy = (h - dh) / 2;
      }
      ctx.drawImage(img, ox, oy, dw, dh);
    }

    /**
     * Draw pure white Gen Z fashion-editorial centered word directly into the canvas.
     */
    function drawCenteredWord(ctx, word, w, h) {
      if (!word) return;

      const maxAllowedW = w * 0.86;
      const maxAllowedH = h * 0.32;
      let fontSize = Math.min(w * 0.17, maxAllowedH);

      const fontStack = '"Anton", Impact, "Arial Black", "Druk Wide", "Montserrat", sans-serif';

      for (let iter = 0; iter < 8; iter++) {
        ctx.font = `900 ${fontSize}px ${fontStack}`;
        const tracking = fontSize * 0.07;
        let total = 0;
        for (const ch of word) {
          total += ctx.measureText(ch).width + tracking;
        }
        total -= tracking;
        if (total <= maxAllowedW && fontSize <= maxAllowedH) break;
        const scale = Math.min(maxAllowedW / Math.max(1, total), maxAllowedH / Math.max(1, fontSize));
        fontSize = Math.floor(fontSize * scale * 0.97);
      }

      ctx.font = `900 ${fontSize}px ${fontStack}`;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";

      const tracking = fontSize * 0.07;
      const charWidths = [];
      let totalWidth = 0;
      for (const ch of word) {
        const cw = ctx.measureText(charWidths.length ? ch : ch).width;
        charWidths.push(cw);
        totalWidth += cw + tracking;
      }
      totalWidth -= tracking;

      let startX = (w - totalWidth) / 2;
      const centerY = h / 2;

      // Soft water shadow for subtle submerged depth
      ctx.save();
      ctx.shadowColor = "rgba(0, 35, 75, 0.4)";
      ctx.shadowBlur = Math.max(6, fontSize * 0.16);
      ctx.shadowOffsetY = fontSize * 0.035;

      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < word.length; i++) {
        ctx.fillText(word[i], startX, centerY);
        startX += charWidths[i] + tracking;
      }
      ctx.restore();
    }

    /**
     * Build the composite texture: water surface + embedded white title.
     * Capped to max 1440px on longest side for buttery 60fps performance.
     */
    function buildTexture(glContext) {
      if (!glContext) return false;
      const { cssWidth, cssHeight } = getDisplaySize();
      const maxSide = 1440;
      let texW = cssWidth;
      let texH = cssHeight;
      const longest = Math.max(texW, texH);
      if (longest > maxSide) {
        const scale = maxSide / longest;
        texW = Math.round(texW * scale);
        texH = Math.round(texH * scale);
      }

      workCanvas.width = texW;
      workCanvas.height = texH;

      const hasLoadedImg = imageLoaded || (sourceImage.complete && sourceImage.naturalWidth > 0);

      if (hasLoadedImg) {
        try {
          drawCoverImage(workCtx, sourceImage, texW, texH);
        } catch (e) {
          console.warn("Cover image draw error:", e);
          drawProceduralWater(workCtx, texW, texH, fallbackColor);
        }
      } else {
        drawProceduralWater(workCtx, texW, texH, fallbackColor);
      }

      // Fashion-editorial centered title baked into texture
      drawCenteredWord(workCtx, displayText, texW, texH);

      // Upload to GPU
      if (!texture) texture = glContext.createTexture();
      glContext.bindTexture(glContext.TEXTURE_2D, texture);
      glContext.pixelStorei(glContext.UNPACK_FLIP_Y_WEBGL, true);
      try {
        glContext.texImage2D(
          glContext.TEXTURE_2D,
          0,
          glContext.RGBA,
          glContext.RGBA,
          glContext.UNSIGNED_BYTE,
          workCanvas
        );
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_S, glContext.CLAMP_TO_EDGE);
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_WRAP_T, glContext.CLAMP_TO_EDGE);
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, glContext.LINEAR);
        glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.LINEAR);
      } catch (err) {
        console.warn("Texture upload error:", err);
        return false;
      }
      return true;
    }

    function spawnRipple(x, y, strength, currentTimeSec) {
      const offset = rippleHead * 4;
      ripplesData[offset + 0] = x;
      ripplesData[offset + 1] = y;
      ripplesData[offset + 2] = currentTimeSec;
      ripplesData[offset + 3] = Math.min(1.0, Math.max(0.4, strength));
      rippleHead = (rippleHead + 1) % NUM_RIPPLES;
      lastRippleSpawnTime = currentTimeSec;
      lastSpawnPos.x = x;
      lastSpawnPos.y = y;
    }

    function setPointerFromClient(clientX, clientY) {
      const rect = container.getBoundingClientRect();
      const currentX = (clientX - rect.left) / rect.width;
      const currentY = 1.0 - (clientY - rect.top) / rect.height;

      const now = performance.now();
      const currentTimeSec = (now - startTime) / 1000;

      if (lastClientPos.x !== null) {
        const dx = currentX - lastClientPos.x;
        const dy = currentY - lastClientPos.y;
        const speed = Math.hypot(dx, dy);

        const distFromLastSpawn = Math.hypot(currentX - lastSpawnPos.x, currentY - lastSpawnPos.y);
        if (distFromLastSpawn > 0.018 || (speed > 0.003 && currentTimeSec - lastRippleSpawnTime > 0.035)) {
          spawnRipple(currentX, currentY, Math.min(1.0, speed * 25.0 + 0.45), currentTimeSec);
        }
      } else {
        spawnRipple(currentX, currentY, 0.75, currentTimeSec);
      }

      pointerTarget.x = currentX;
      pointerTarget.y = currentY;
      lastClientPos.x = currentX;
      lastClientPos.y = currentY;
      pointerActivity = 1.0;
    }

    function handlePointerMove(e) {
      const rect = container.getBoundingClientRect();
      if (
        e.clientX >= rect.left - 40 &&
        e.clientX <= rect.right + 40 &&
        e.clientY >= rect.top - 40 &&
        e.clientY <= rect.bottom + 40
      ) {
        setPointerFromClient(e.clientX, e.clientY);
      }
    }

    function handlePointerDown(e) {
      const rect = container.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        setPointerFromClient(e.clientX, e.clientY);
        const currentTimeSec = (performance.now() - startTime) / 1000;
        const cx = (e.clientX - rect.left) / rect.width;
        const cy = 1.0 - (e.clientY - rect.top) / rect.height;
        spawnRipple(cx, cy, 1.0, currentTimeSec);
      }
    }

    function resize() {
      const { pxWidth, pxHeight, cssWidth, cssHeight } = getDisplaySize();
      canvas.width = pxWidth;
      canvas.height = pxHeight;
      canvas.style.width = cssWidth + "px";
      canvas.style.height = cssHeight + "px";
      if (gl) {
        gl.viewport(0, 0, pxWidth, pxHeight);
        buildTexture(gl);
      }
    }

    function scheduleResize() {
      if (resizeTimeout) window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(resize, 100);
    }

    // Try WebGL2 first, then WebGL1, then experimental-webgl
    gl =
      canvas.getContext("webgl2", { alpha: false, depth: false }) ||
      canvas.getContext("webgl", { alpha: false, depth: false }) ||
      canvas.getContext("experimental-webgl", { alpha: false, depth: false });

    if (!gl) {
      console.warn("WebGL not available, activating fallback view.");
      setWebglFailed(true);
      return undefined;
    }

    const vertexSrc = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // 100% compliant GLSL ES 1.00 shader: dynamic ripples + ambient shimmer
    const fragmentSrc = `
      #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
      #else
      precision mediump float;
      #endif

      varying vec2 v_uv;

      uniform sampler2D u_texture;
      uniform vec2 u_pointer;
      uniform float u_activity;
      uniform float u_time;
      uniform float u_displacement;
      uniform float u_metalness;
      uniform float u_roughness;
      uniform float u_aspect;

      uniform vec4 u_rip0;
      uniform vec4 u_rip1;
      uniform vec4 u_rip2;
      uniform vec4 u_rip3;
      uniform vec4 u_rip4;
      uniform vec4 u_rip5;
      uniform vec4 u_rip6;
      uniform vec4 u_rip7;

      void addRipple(vec4 rip, vec2 uv, float t, float asp, inout vec2 disp, inout vec2 norm) {
        float age = t - rip.z;
        if (age > 0.0 && age < 2.2) {
          vec2 toRip = (uv - rip.xy);
          toRip.x *= asp;
          float dist = length(toRip);

          float speed = 0.38;
          float radius = speed * age;
          float delta = dist - radius;

          float waveWidth = 0.045 + age * 0.03;
          float envelope = exp(-(delta * delta) / (waveWidth * waveWidth));
          float wave = sin(delta * 45.0) * envelope;
          float decay = exp(-age * 1.8) * (1.0 - smoothstep(1.5, 2.2, age));

          vec2 dir = vec2(0.0);
          if (dist > 0.0001) {
            dir = toRip / dist;
            dir.x /= asp;
          }

          float amp = wave * decay * rip.w * 0.065;
          disp += dir * amp;
          norm += dir * (cos(delta * 45.0) * envelope * decay * rip.w);
        }
      }

      void main() {
        vec2 uv = v_uv;
        vec2 disp = vec2(0.0);
        vec2 norm = vec2(0.0);

        // 1. Natural ambient water shimmer (subtle living liquid surface)
        float t = u_time * 1.1;
        float amb1 = sin(uv.x * 9.0 + uv.y * 7.0 + t) * 0.0035;
        float amb2 = cos(uv.x * 14.0 - uv.y * 11.0 + t * 1.3) * 0.003;
        float amb3 = sin((uv.x + uv.y) * 16.0 + t * 0.8) * 0.002;
        vec2 ambientDisp = vec2(amb1 + amb3, amb2 + amb1);
        disp += ambientDisp;
        norm += vec2(amb1, amb2) * 15.0;

        // 2. Direct cursor / touch displacement
        vec2 toPointer = uv - u_pointer;
        toPointer.x *= u_aspect;
        float curDist = length(toPointer);

        float touchRadius = 0.22;
        if (curDist < touchRadius) {
          float falloff = smoothstep(touchRadius, 0.0, curDist);
          float pulse = sin(curDist * 28.0 - u_time * 4.0) * 0.3 + 0.7;
          float touchAmp = sin(falloff * 3.14159) * falloff * pulse;

          vec2 curDir = vec2(0.0);
          if (curDist > 0.0001) {
            curDir = toPointer / curDist;
            curDir.x /= u_aspect;
          }

          disp += curDir * (touchAmp * 0.055 * u_activity);
          norm += curDir * (falloff * u_activity * 2.5);
        }

        // 3. Expanding ripple waves
        addRipple(u_rip0, uv, u_time, u_aspect, disp, norm);
        addRipple(u_rip1, uv, u_time, u_aspect, disp, norm);
        addRipple(u_rip2, uv, u_time, u_aspect, disp, norm);
        addRipple(u_rip3, uv, u_time, u_aspect, disp, norm);
        addRipple(u_rip4, uv, u_time, u_aspect, disp, norm);
        addRipple(u_rip5, uv, u_time, u_aspect, disp, norm);
        addRipple(u_rip6, uv, u_time, u_aspect, disp, norm);
        addRipple(u_rip7, uv, u_time, u_aspect, disp, norm);

        vec2 totalDisplacement = disp * (u_displacement * 0.9);

        // Chromatic dispersion
        vec2 uvR = uv + totalDisplacement * 1.018;
        vec2 uvG = uv + totalDisplacement;
        vec2 uvB = uv + totalDisplacement * 0.982;

        float r = texture2D(u_texture, clamp(uvR, 0.001, 0.999)).r;
        float g = texture2D(u_texture, clamp(uvG, 0.001, 0.999)).g;
        float b = texture2D(u_texture, clamp(uvB, 0.001, 0.999)).b;
        vec3 color = vec3(r, g, b);

        // Surface normal & specular sheen
        vec3 N = normalize(vec3(-norm.x * 0.75, -norm.y * 0.75, 1.0));
        vec3 lightDir = normalize(vec3(0.28, 0.48, 0.82));
        vec3 halfVec = normalize(lightDir + vec3(0.0, 0.0, 1.0));

        float NdotH = max(0.0001, dot(N, halfVec));
        float shininess = mix(12.0, 96.0, 1.0 - u_roughness);
        float spec = pow(NdotH, shininess) * u_metalness;
        color += vec3(spec * 0.38);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compileShader(glContext, type, source) {
      const shader = glContext.createShader(type);
      glContext.shaderSource(shader, source);
      glContext.compileShader(shader);
      if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
        console.error("Shader compile error:", glContext.getShaderInfoLog(shader));
        glContext.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexSrc);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);
    if (!vertexShader || !fragmentShader) {
      console.error("Failed to compile WebGL shaders for liquid water hero.");
      setWebglFailed(true);
      return undefined;
    }

    program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      setWebglFailed(true);
      return undefined;
    }
    gl.useProgram(program);

    positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTexture = gl.getUniformLocation(program, "u_texture");
    const uPointer = gl.getUniformLocation(program, "u_pointer");
    const uActivity = gl.getUniformLocation(program, "u_activity");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uDisplacement = gl.getUniformLocation(program, "u_displacement");
    const uMetalness = gl.getUniformLocation(program, "u_metalness");
    const uRoughness = gl.getUniformLocation(program, "u_roughness");
    const uAspect = gl.getUniformLocation(program, "u_aspect");

    const uRipLocs = [];
    for (let i = 0; i < NUM_RIPPLES; i++) {
      uRipLocs.push(gl.getUniformLocation(program, `u_rip${i}`));
    }

    gl.clearColor(0.086, 0.537, 0.996, 1.0);

    function render() {
      if (disposed) return;
      const now = performance.now();
      const currentTimeSec = (now - startTime) / 1000;

      pointerSmoothed.x += (pointerTarget.x - pointerSmoothed.x) * 0.25;
      pointerSmoothed.y += (pointerTarget.y - pointerSmoothed.y) * 0.25;

      // Activity smoothly decays when pointer stops
      pointerActivity *= 0.96;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(uTexture, 0);

      gl.uniform2f(uPointer, pointerSmoothed.x, pointerSmoothed.y);
      gl.uniform1f(uActivity, Math.max(0.0, pointerActivity));
      gl.uniform1f(uTime, currentTimeSec);
      gl.uniform1f(uDisplacement, displacementStrength);
      gl.uniform1f(uMetalness, metalness);
      gl.uniform1f(uRoughness, roughness);
      gl.uniform1f(uAspect, canvas.width / canvas.height);

      for (let i = 0; i < NUM_RIPPLES; i++) {
        const off = i * 4;
        if (uRipLocs[i]) {
          gl.uniform4f(
            uRipLocs[i],
            ripplesData[off + 0],
            ripplesData[off + 1],
            ripplesData[off + 2],
            ripplesData[off + 3]
          );
        }
      }

      gl.drawArrays(gl.TRIANGLES, 0, 3);
      rafId = window.requestAnimationFrame(render);
    }

    function init() {
      resize();
      rafId = window.requestAnimationFrame(render);
    }

    sourceImage.onload = () => {
      imageLoaded = true;
      if (!disposed && gl) buildTexture(gl);
    };
    sourceImage.onerror = () => {
      imageLoaded = false;
      if (!disposed && gl) buildTexture(gl);
    };
    sourceImage.src = activeImageSrc;

    // If image is already cached
    if (sourceImage.complete && sourceImage.naturalWidth > 0) {
      imageLoaded = true;
    }

    if (document.fonts && document.fonts.load) {
      document.fonts
        .load('400 64px "Anton"')
        .catch(() => {})
        .finally(() => {
          if (!disposed && gl) buildTexture(gl);
        });
    }

    init();

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(scheduleResize);
      resizeObserver.observe(container);
    } else {
      window.addEventListener("resize", scheduleResize);
    }

    return () => {
      disposed = true;
      if (rafId != null) window.cancelAnimationFrame(rafId);
      if (resizeTimeout) window.clearTimeout(resizeTimeout);

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);

      if (resizeObserver) resizeObserver.disconnect();
      else window.removeEventListener("resize", scheduleResize);

      if (gl) {
        if (texture) gl.deleteTexture(texture);
        if (positionBuffer) gl.deleteBuffer(positionBuffer);
        if (program) gl.deleteProgram(program);
        if (vertexShader) gl.deleteShader(vertexShader);
        if (fragmentShader) gl.deleteShader(fragmentShader);
        const loseCtx = gl.getExtension("WEBGL_lose_context");
        if (loseCtx) loseCtx.loseContext();
      }
    };
  }, [displayText, activeImageSrc, fallbackColor, metalness, roughness, displacementStrength]);

  return (
    <section
      ref={containerRef}
      className={`lw-hero${className ? ` ${className}` : ""}`}
      style={{ backgroundColor: fallbackColor }}
      aria-label={displayText}
    >
      <style>{LIQUID_WATER_CSS}</style>
      {!webglFailed ? (
        <canvas ref={canvasRef} className="lw-canvas" />
      ) : (
        <div
          className="lw-fallback-container"
          style={{
            backgroundImage: `url(${activeImageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="lw-fallback-word">{displayText}</div>
        </div>
      )}
    </section>
  );
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const n = parseInt(full, 16) || 0;
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function ensureFashionFontLoaded() {
  if (document.getElementById("lw-anton-font")) return;
  const link = document.createElement("link");
  link.id = "lw-anton-font";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Anton&display=swap";
  document.head.appendChild(link);
}

const LIQUID_WATER_CSS = `
.lw-hero {
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 520px;
  overflow: hidden;
  user-select: none;
  cursor: grab;
}

.lw-hero:active {
  cursor: grabbing;
}

.lw-canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  touch-action: none;
}

.lw-fallback-container {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lw-fallback-word {
  padding: 0 6%;
  text-align: center;
  color: #ffffff;
  font-family: "Anton", Impact, "Arial Black", sans-serif;
  font-weight: 900;
  letter-spacing: 0.08em;
  font-size: clamp(3rem, 12vw, 8rem);
  text-transform: uppercase;
  text-shadow: 0 4px 20px rgba(0, 30, 70, 0.5);
}

@media (max-width: 640px) {
  .lw-hero {
    min-height: 480px;
  }
}
`;
