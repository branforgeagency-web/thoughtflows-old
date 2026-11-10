"use client";

import React, { useRef } from "react";

const PRODUCT_IMAGE =
  "https://images.pexels.com/photos/14438270/pexels-photo-14438270.jpeg?auto=compress&cs=tinysrgb&w=1800";
const FACE_IMAGE =
  "https://images.pexels.com/photos/18688854/pexels-photo-18688854.jpeg?auto=compress&cs=tinysrgb&w=1800";
const CARD_IMAGE =
  "https://images.pexels.com/photos/3762754/pexels-photo-3762754.jpeg?auto=compress&cs=tinysrgb&w=900";
const FALLBACK_IMAGE =
  "https://images.pexels.com/photos/8989964/pexels-photo-8989964.jpeg?auto=compress&cs=tinysrgb&w=1600";

export interface VelouraSkincareHeroProps {
  brandName?: string;
  brandSubtitle?: string;
  brandAriaLabel?: string;
  leftLinkText?: string;
  leftLinkHref?: string;
  rightLinkText?: string;
  rightLinkHref?: string;
  leftTitle?: string;
  rightTitle?: string;
  productImage?: string;
  faceImage?: string;
  cardImage?: string;
  leftImageAlt?: string;
  rightImageAlt?: string;
  cardImageAlt?: string;
  exploreText?: string;
  exploreHref?: string;
  onExploreClick?: (event: React.MouseEvent) => void;
  sideControlLabel?: string;
  onSideControlClick?: (event: React.MouseEvent) => void;
  bottomLeftText?: string;
  bottomLeftHref?: string;
  shopText?: string;
  shopHref?: string;
  onShopClick?: (event: React.MouseEvent) => void;
  lang1?: string;
  lang2?: string;
  showTitles?: boolean;
  showNavLinks?: boolean;
  showSideControl?: boolean;
  showBottomRight?: boolean;
  showBottomLeft?: boolean;
}

const VelouraSkincareHero: React.FC<VelouraSkincareHeroProps> = ({
  brandName = "veloura",
  brandSubtitle = "cosmetics",
  brandAriaLabel = "Veloura Cosmetics",
  leftLinkText = "Home",
  leftLinkHref = "#",
  rightLinkText = "Collection",
  rightLinkHref = "#",
  leftTitle = "Siero Aura",
  rightTitle = "Radiance",
  productImage = PRODUCT_IMAGE,
  faceImage = FACE_IMAGE,
  cardImage = CARD_IMAGE,
  leftImageAlt = "Luxury skincare products arranged with flowers",
  rightImageAlt = "Close-up beauty portrait showing natural skin",
  cardImageAlt = "Veloura skincare model",
  exploreText = "Explore",
  exploreHref = "#",
  onExploreClick,
  sideControlLabel = "View next collection",
  onSideControlClick,
  bottomLeftText = "Atelier",
  bottomLeftHref = "#",
  shopText = "Shop",
  shopHref = "#",
  onShopClick,
  lang1 = "IT",
  lang2 = "EN",
  showTitles = true,
  showNavLinks = true,
  showSideControl = true,
  showBottomRight = true,
  showBottomLeft = true,
}) => {
  const rootRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number | null>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!rootRef.current) return;
    const bounds = rootRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      if (rootRef.current) {
        rootRef.current.style.setProperty("--mouse-x", x.toFixed(3));
        rootRef.current.style.setProperty("--mouse-y", y.toFixed(3));
      }
    });
  };

  const resetPointer = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    if (rootRef.current) {
      rootRef.current.style.setProperty("--mouse-x", "0");
      rootRef.current.style.setProperty("--mouse-y", "0");
    }
  };

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = event.currentTarget;
    if (!target.src.includes("8989964")) {
      target.src = FALLBACK_IMAGE;
    }
  };

  return (
    <main
      ref={rootRef}
      className="va-root"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        * {
          box-sizing: border-box;
        }

        html, body, #root {
          width: 100%;
          height: 100%;
          margin: 0;
          overflow: hidden;
          background: #15100d;
        }

        button, a {
          font-family: inherit;
          color: inherit;
        }

        a {
          text-decoration: none;
        }

        .va-root {
          --mouse-x: 0;
          --mouse-y: 0;
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 620px;
          overflow: hidden;
          background: #17100d;
          color: #fffaf3;
          font-family: Manrope, Arial, sans-serif;
          isolation: isolate;
        }

        .va-panels {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: 50% 50%;
        }

        .va-panel {
          position: relative;
          min-width: 0;
          height: 100%;
          overflow: hidden;
          background: #241b16;
        }

        .va-panel-left {
          clip-path: inset(0 100% 0 0);
          animation: vaClipLeft 1.3s cubic-bezier(0.77, 0, 0.18, 1) 80ms forwards;
        }

        .va-panel-right {
          clip-path: inset(0 0 0 100%);
          animation: vaClipRight 1.3s cubic-bezier(0.77, 0, 0.18, 1) 80ms forwards;
        }

        @keyframes vaClipLeft {
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes vaClipRight {
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        .va-panel-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          will-change: transform;
        }

        .va-panel-left .va-panel-image {
          object-position: 54% 50%;
          transform: translate3d(
            calc(var(--mouse-x) * -8px),
            calc(var(--mouse-y) * -6px),
            0
          ) scale(1.065);
          animation: vaLeftImgIn 1.8s cubic-bezier(0.16, 1, 0.3, 1) 120ms both;
        }

        .va-panel-right .va-panel-image {
          object-position: 44% 50%;
          transform: translate3d(
            calc(var(--mouse-x) * 9px),
            calc(var(--mouse-y) * 7px),
            0
          ) scale(1.06);
          animation: vaRightImgIn 1.8s cubic-bezier(0.16, 1, 0.3, 1) 120ms both;
        }

        @keyframes vaLeftImgIn {
          from {
            filter: blur(8px);
            transform: translate3d(
              calc(var(--mouse-x) * -8px),
              calc(var(--mouse-y) * -6px),
              0
            ) scale(1.16);
          }
          to {
            filter: blur(0);
            transform: translate3d(
              calc(var(--mouse-x) * -8px),
              calc(var(--mouse-y) * -6px),
              0
            ) scale(1.065);
          }
        }

        @keyframes vaRightImgIn {
          from {
            filter: blur(8px);
            transform: translate3d(
              calc(var(--mouse-x) * 9px),
              calc(var(--mouse-y) * 7px),
              0
            ) scale(1.15);
          }
          to {
            filter: blur(0);
            transform: translate3d(
              calc(var(--mouse-x) * 9px),
              calc(var(--mouse-y) * 7px),
              0
            ) scale(1.06);
          }
        }

        .va-panel-left::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            linear-gradient(
              90deg,
              rgba(15, 10, 8, 0.34) 0%,
              rgba(15, 10, 8, 0.03) 46%,
              rgba(15, 10, 8, 0.23) 100%
            ),
            linear-gradient(
              180deg,
              rgba(10, 7, 6, 0.3) 0%,
              transparent 26%,
              transparent 65%,
              rgba(10, 7, 6, 0.29) 100%
            );
        }

        .va-panel-right::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            linear-gradient(
              90deg,
              rgba(26, 10, 4, 0.18) 0%,
              transparent 36%,
              rgba(29, 10, 4, 0.14) 100%
            ),
            linear-gradient(
              180deg,
              rgba(15, 7, 3, 0.2) 0%,
              transparent 52%,
              rgba(14, 5, 2, 0.32) 100%
            );
        }

        .va-center-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          z-index: 7;
          width: 1px;
          background: rgba(255, 248, 236, 0.11);
          transform: scaleY(0);
          transform-origin: top;
          animation: vaCenterLineIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 700ms forwards;
        }

        @keyframes vaCenterLineIn {
          to {
            transform: scaleY(1);
          }
        }

        .va-topbar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
          height: clamp(82px, 10vh, 112px);
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: start;
          pointer-events: none;
          padding: clamp(24px, 3.3vh, 38px) clamp(22px, 2.5vw, 42px) 0;
        }

        .va-nav-link {
          width: fit-content;
          position: relative;
          color: rgba(255, 250, 242, 0.95);
          font-size: clamp(10px, 0.86vw, 14px);
          font-weight: 500;
          line-height: 1;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          pointer-events: auto;
          opacity: 0;
          transform: translateY(-12px);
          animation: vaNavFade 800ms cubic-bezier(0.16, 1, 0.3, 1) 770ms forwards;
          cursor: pointer;
        }

        .va-nav-right {
          justify-self: end;
        }

        @keyframes vaNavFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .va-nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -7px;
          width: 100%;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 450ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .va-nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .va-brand {
          position: relative;
          top: -6px;
          justify-self: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #f5e8d2;
          pointer-events: auto;
          opacity: 0;
          transform: translateY(-16px);
          animation: vaBrandFade 900ms cubic-bezier(0.16, 1, 0.3, 1) 550ms forwards;
          cursor: pointer;
        }

        @keyframes vaBrandFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .va-mark {
          position: relative;
          width: 43px;
          height: 50px;
          margin-bottom: 1px;
        }

        .va-mark::before,
        .va-mark::after {
          content: "";
          position: absolute;
          border: 2px solid currentColor;
        }

        .va-mark::before {
          left: 11px;
          top: 1px;
          width: 20px;
          height: 36px;
          border-radius: 100% 0 100% 100%;
          transform: rotate(38deg);
        }

        .va-mark::after {
          left: 8px;
          top: 19px;
          width: 27px;
          height: 21px;
          border-top: 0;
          border-radius: 0 0 18px 18px;
          transform: rotate(13deg);
        }

        .va-brand-name {
          font-family: 'DM Sans', Arial, sans-serif;
          font-size: clamp(22px, 2.1vw, 34px);
          font-weight: 500;
          line-height: 0.9;
          letter-spacing: -0.045em;
        }

        .va-brand-subtitle {
          margin-top: 9px;
          font-size: clamp(6px, 0.52vw, 9px);
          font-weight: 500;
          line-height: 1;
          letter-spacing: 0.55em;
          text-transform: uppercase;
        }

        .va-title {
          position: absolute;
          z-index: 8;
          margin: 0;
          color: rgba(255, 252, 246, 0.96);
          font-family: 'DM Sans', Arial, sans-serif;
          font-size: clamp(42px, 4.2vw, 70px);
          font-weight: 300;
          line-height: 1;
          letter-spacing: -0.055em;
          white-space: nowrap;
          opacity: 0;
          transform: translateY(30px);
          animation: vaTitleFade 1s cubic-bezier(0.16, 1, 0.3, 1) 900ms forwards;
          pointer-events: none;
        }

        @keyframes vaTitleFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .va-title-left {
          top: 17%;
          left: 30.5%;
        }

        .va-title-right {
          left: 30%;
          bottom: 15.7%;
        }

        .va-card-area {
          position: absolute;
          left: 50%;
          top: 50.7%;
          z-index: 15;
          width: clamp(190px, 16.2vw, 270px);
          transform: translate(-50%, -50%);
          cursor: pointer;
        }

        .va-card-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1.05;
          overflow: hidden;
          border-radius: clamp(24px, 2.2vw, 38px);
          background: #b9896c;
          cursor: pointer;
          box-shadow:
            0 26px 70px rgba(19, 7, 2, 0.28),
            0 5px 18px rgba(19, 7, 2, 0.18);
          opacity: 0;
          transform: translateY(55px) scale(0.88);
          animation: vaCardFade 1.15s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards;
        }

        @keyframes vaCardFade {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .va-card-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(
            130deg,
            rgba(255, 255, 255, 0.12),
            transparent 38%,
            rgba(46, 14, 4, 0.08)
          );
        }

        .va-card-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center 35%;
          transform: scale(1.02);
          transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .va-card-area:hover .va-card-image {
          transform: scale(1.095);
        }

        .va-explore {
          width: fit-content;
          margin: 14px auto 0;
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255, 252, 247, 0.96);
          font-size: clamp(12px, 1.22vw, 20px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(16px);
          animation: vaExploreFade 850ms cubic-bezier(0.16, 1, 0.3, 1) 1.45s forwards;
        }

        @keyframes vaExploreFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .va-explore-arrow {
          font-size: 0.72em;
          display: inline-block;
          transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .va-card-area:hover .va-explore-arrow {
          transform: translate(4px, -4px);
        }

        .va-side-control {
          position: absolute;
          right: clamp(18px, 2vw, 35px);
          top: 22%;
          z-index: 16;
          width: 34px;
          height: 34px;
          padding: 0;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 251, 244, 0.9);
          border-radius: 50%;
          background: rgba(30, 10, 3, 0.08);
          color: #fffaf3;
          cursor: pointer;
          backdrop-filter: blur(8px);
          opacity: 0;
          transform: scale(0.65);
          animation: vaSideControlFade 700ms cubic-bezier(0.16, 1, 0.3, 1) 1.25s forwards;
        }

        @keyframes vaSideControlFade {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .va-side-control::before {
          content: "";
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: currentColor;
          box-shadow: 0 0 9px rgba(255, 255, 255, 0.8);
        }

        .va-side-control::after {
          content: "";
          position: absolute;
          inset: -5px;
          border: 1px solid rgba(255, 251, 244, 0.19);
          border-radius: inherit;
          opacity: 0;
          transform: scale(0.65);
          transition: opacity 350ms ease, transform 500ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .va-side-control:hover::after {
          opacity: 1;
          transform: scale(1);
        }

        .va-bottom-left {
          position: absolute;
          bottom: clamp(20px, 2.6vh, 32px);
          left: clamp(22px, 2.5vw, 42px);
          z-index: 16;
          color: rgba(255, 251, 245, 0.96);
          font-size: clamp(9px, 0.78vw, 13px);
          font-weight: 500;
          line-height: 1;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(13px);
          animation: vaBottomFade 800ms cubic-bezier(0.16, 1, 0.3, 1) 1.22s forwards;
          cursor: pointer;
        }

        .va-bottom-right {
          position: absolute;
          right: clamp(22px, 2.5vw, 42px);
          bottom: clamp(20px, 2.6vh, 32px);
          z-index: 16;
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255, 251, 245, 0.96);
          font-size: clamp(9px, 0.78vw, 13px);
          font-weight: 500;
          line-height: 1;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(13px);
          animation: vaBottomFade 800ms cubic-bezier(0.16, 1, 0.3, 1) 1.22s forwards;
        }

        @keyframes vaBottomFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .va-bottom-divider {
          width: 1px;
          height: 14px;
          margin: 0 3px;
          background: rgba(255, 250, 243, 0.36);
        }

        .va-lang {
          color: rgba(255, 250, 243, 0.52);
          transition: color 250ms ease;
          cursor: pointer;
        }

        .va-lang:hover,
        .va-lang-active {
          color: #ffffff;
        }

        /* Tablet Responsive Rules */
        @media (max-width: 900px) {
          .va-title {
            font-size: clamp(35px, 5.3vw, 50px);
          }

          .va-title-left {
            left: 13%;
          }

          .va-title-right {
            left: 16%;
          }

          .va-card-area {
            width: clamp(170px, 23vw, 225px);
          }

          .va-brand-name {
            font-size: 26px;
          }
        }

        /* Mobile Responsive Rules */
        @media (max-width: 650px) {
          .va-root {
            min-height: 620px;
          }

          .va-panels {
            grid-template-columns: 1fr;
            grid-template-rows: 50% 50%;
          }

          .va-panel-left,
          .va-panel-right {
            clip-path: none !important;
            animation: none !important;
          }

          .va-panel-left .va-panel-image {
            object-position: center 61%;
          }

          .va-panel-right .va-panel-image {
            object-position: 48% 43%;
          }

          .va-center-line {
            top: 50%;
            left: 0;
            right: 0;
            bottom: auto;
            width: 100%;
            height: 1px;
            transform: scaleX(0);
            transform-origin: left;
            animation: vaScaleXIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 700ms forwards;
          }

          @keyframes vaScaleXIn {
            to {
              transform: scaleX(1);
            }
          }

          .va-topbar {
            height: 76px;
            align-items: start;
            padding: 22px 16px 0;
          }

          .va-brand {
            top: -8px;
          }

          .va-mark {
            width: 30px;
            height: 35px;
            transform: scale(0.72);
            margin-bottom: -5px;
          }

          .va-brand-name {
            font-size: 19px;
          }

          .va-brand-subtitle {
            margin-top: 6px;
            font-size: 5px;
          }

          .va-nav-link {
            font-size: 8px;
          }

          .va-title {
            font-size: clamp(28px, 9vw, 40px);
          }

          .va-title-left {
            top: 15%;
            left: 11%;
          }

          .va-title-right {
            left: auto;
            right: 8%;
            bottom: 9%;
          }

          .va-card-area {
            top: 50%;
            width: clamp(125px, 34vw, 170px);
          }

          .va-card-wrap {
            border-radius: 22px;
          }

          .va-explore {
            margin-top: 9px;
            font-size: 9px;
          }

          .va-side-control {
            top: 72%;
            right: 15px;
            width: 28px;
            height: 28px;
          }

          .va-bottom-left,
          .va-bottom-right {
            bottom: 16px;
            font-size: 7px;
          }

          .va-bottom-left {
            left: 15px;
          }

          .va-bottom-right {
            right: 15px;
            gap: 7px;
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .va-panel-left,
          .va-panel-right,
          .va-panel-image,
          .va-center-line,
          .va-nav-link,
          .va-brand,
          .va-title,
          .va-card-wrap,
          .va-explore,
          .va-side-control,
          .va-bottom-left,
          .va-bottom-right {
            animation-duration: 1ms !important;
            animation-delay: 0ms !important;
          }

          .va-card-image,
          .va-explore-arrow,
          .va-nav-link::after {
            transition: none !important;
          }
        }
      `}</style>

      <div className="va-panels">
        <section className="va-panel va-panel-left">
          <img
            className="va-panel-image"
            src={productImage}
            alt={leftImageAlt}
            loading="eager"
            onError={handleImageError}
          />
        </section>
        <section className="va-panel va-panel-right">
          <img
            className="va-panel-image"
            src={faceImage}
            alt={rightImageAlt}
            loading="eager"
            onError={handleImageError}
          />
        </section>
      </div>

      <div className="va-center-line" aria-hidden="true" />

      <header className="va-topbar">
        {showNavLinks && leftLinkText ? (
          <a href={leftLinkHref} className="va-nav-link">
            {leftLinkText}
          </a>
        ) : (
          <span />
        )}

        <a href="#" className="va-brand" aria-label={brandAriaLabel}>
          <span className="va-mark" aria-hidden="true" />
          <span className="va-brand-name">{brandName}</span>
          <span className="va-brand-subtitle">{brandSubtitle}</span>
        </a>

        {showNavLinks && rightLinkText ? (
          <a href={rightLinkHref} className="va-nav-link va-nav-right">
            {rightLinkText}
          </a>
        ) : (
          <span />
        )}
      </header>

      {showTitles && leftTitle && (
        <h1 className="va-title va-title-left">{leftTitle}</h1>
      )}
      {showTitles && rightTitle && (
        <h2 className="va-title va-title-right">{rightTitle}</h2>
      )}

      <a
        href={exploreHref && exploreHref !== "#" ? exploreHref : (exploreText === "Free Demo" ? "/contact" : "#")}
        className="va-card-area"
        onClick={(e) => {
          if (exploreText === "Free Demo" || exploreHref === "/contact") {
            e.preventDefault();
            window.location.href = "/contact";
            return;
          }
          if (onExploreClick) {
            e.preventDefault();
            onExploreClick(e);
          }
        }}
      >
        <div className="va-card-wrap">
          <img
            className="va-card-image"
            src={cardImage}
            alt={cardImageAlt}
            loading="eager"
            onError={handleImageError}
          />
        </div>
        <div className="va-explore">
          {exploreText}
          <span className="va-explore-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
      </a>

      {showSideControl && (
        <button
          className="va-side-control"
          type="button"
          aria-label={sideControlLabel}
          onClick={onSideControlClick}
        />
      )}

      {showBottomLeft && bottomLeftText && (
        <a href={bottomLeftHref} className="va-bottom-left">
          {bottomLeftText}
        </a>
      )}

      {showBottomRight && shopText && (
        <div className="va-bottom-right">
          <a
            href={shopHref}
            onClick={(e) => {
              if (onShopClick) {
                e.preventDefault();
                onShopClick(e);
              }
            }}
          >
            {shopText}
          </a>
          <span className="va-bottom-divider" aria-hidden="true" />
          <a className="va-lang va-lang-active" href="#">
            {lang1}
          </a>
          <a className="va-lang" href="#">
            {lang2}
          </a>
        </div>
      )}
    </main>
  );
};

export default VelouraSkincareHero;
