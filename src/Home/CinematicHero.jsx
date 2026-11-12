import React, { useState, useEffect, useRef } from 'react';
import homevideo from '../images/hero-video.mp4';
import './CinematicHero.css';

const BRAND_PART_1 = 'T';
const REMAINING_PART_1 = ['H', 'O', 'U', 'G', 'H', 'T'];
const BRAND_PART_2 = 'F';
const REMAINING_PART_2 = ['L', 'O', 'W', 'S'];
const NUMBER_DIGITS = ['0', '1'];

const TAG_TOP_LEFT = ['MEDICAL', 'CODING'];
const TAG_BOTTOM_LEFT = ['CLINICAL', 'CHART', 'PRACTICE'];
const TAG_BOTTOM_RIGHT = ['100%', 'PLACEMENT', 'SUPPORT'];

const FALLBACK_POSTER =
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=90';

const CinematicHero = () => {
  const [stage, setStage] = useState('init');
  const videoRef = useRef(null);

  const startVideoPlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    if (video.paused) {
      video.play().catch(() => {});
    }
  };

  useEffect(() => {
    startVideoPlayback();

    // Check reduced motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setStage('complete');
      startVideoPlayback();
      return;
    }

    const timers = [];

    // 1. Floating tags & Studio letters reveal (~0.5s)
    timers.push(setTimeout(() => setStage('letters-in'), 500));

    // 2. Letters except first leave (~2.0s)
    timers.push(setTimeout(() => setStage('letters-out'), 2000));

    // 3. Number reveals beside first letter (~2.5s)
    timers.push(setTimeout(() => setStage('number-in'), 2500));

    // 4. First letter & number reposition and enlarge (~3.5s)
    timers.push(setTimeout(() => setStage('enlarge'), 3500));

    // 5. Center seam begins forming (~5.0s)
    timers.push(setTimeout(() => setStage('seam'), 5000));

    // 6. Floating tags disappear (~5.2s)
    timers.push(setTimeout(() => setStage('tags-out'), 5200));

    // 7. Curtains separate & video starts playing (~5.9s)
    timers.push(
      setTimeout(() => {
        setStage('curtain-split');
        startVideoPlayback();
      }, 5900)
    );

    // 8. Complete preloader (~7.3s)
    timers.push(setTimeout(() => setStage('complete'), 7300));

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const handleScrollDown = () => {
    const nextSection =
      document.getElementById('popular-courses') ||
      document.querySelector('.popular-courses');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  const stageClass = `stage-${stage}`;
  const isSplit = stage === 'curtain-split' || stage === 'complete';
  const hasSeamGap = stage === 'seam' || stage === 'tags-out';
  const isPreloaderDone = stage === 'complete';

  // Render the preloader content (shared identically across both curtain halves)
  const renderPreloaderContent = () => (
    <div className="preloader-content-wrap">
      {/* Floating Tag: Upper Left */}
      <div
        className={`float-tag tag-tl ${
          stage !== 'init' ? 'show-tag' : ''
        } ${
          stage === 'tags-out' ||
          stage === 'curtain-split' ||
          stage === 'complete'
            ? 'hide-tag'
            : ''
        }`}
      >
        {TAG_TOP_LEFT.map((w, idx) => (
          <span key={idx} className="tag-word-mask">
            <span
              className="tag-word-inner"
              style={{ '--tag-delay': `${0.5 + idx * 0.12}s` }}
            >
              {w}
            </span>
          </span>
        ))}
      </div>

      {/* Floating Tag: Lower Left */}
      <div
        className={`float-tag tag-bl ${
          stage !== 'init' ? 'show-tag' : ''
        } ${
          stage === 'tags-out' ||
          stage === 'curtain-split' ||
          stage === 'complete'
            ? 'hide-tag'
            : ''
        }`}
      >
        {TAG_BOTTOM_LEFT.map((w, idx) => (
          <span key={idx} className="tag-word-mask">
            <span
              className="tag-word-inner"
              style={{ '--tag-delay': `${0.65 + idx * 0.12}s` }}
            >
              {w}
            </span>
          </span>
        ))}
      </div>

      {/* Floating Tag: Lower Right */}
      <div
        className={`float-tag tag-br ${
          stage !== 'init' ? 'show-tag' : ''
        } ${
          stage === 'tags-out' ||
          stage === 'curtain-split' ||
          stage === 'complete'
            ? 'hide-tag'
            : ''
        }`}
      >
        {TAG_BOTTOM_RIGHT.map((w, idx) => (
          <span key={idx} className="tag-word-mask">
            <span
              className="tag-word-inner"
              style={{ '--tag-delay': `${0.8 + idx * 0.12}s` }}
            >
              {w}
            </span>
          </span>
        ))}
      </div>

      {/* Center Typography Stage */}
      <div className={`preloader-center-stage ${stageClass}`}>
        {/* Logo Letter 'T' */}
        <div className="char-tf-container">
          <span className="char-tf-mask">
            <span className="char-tf-inner">{BRAND_PART_1}</span>
          </span>
        </div>

        {/* Remaining letters 'HOUGHT' */}
        <div className="rem-part-container rem-part-1">
          {REMAINING_PART_1.map((char, idx) => (
            <span key={idx} className="rem-char-mask">
              <span
                className="rem-char-inner"
                style={{
                  '--in-delay': `${(idx + 1) * 0.038}s`,
                  '--out-delay': `${idx * 0.024}s`,
                }}
              >
                {char}
              </span>
            </span>
          ))}
        </div>

        {/* Logo Letter 'F' */}
        <div className="char-tf-container">
          <span className="char-tf-mask">
            <span className="char-tf-inner">{BRAND_PART_2}</span>
          </span>
        </div>

        {/* Remaining letters 'LOWS' */}
        <div className="rem-part-container rem-part-2">
          {REMAINING_PART_2.map((char, idx) => (
            <span key={idx} className="rem-char-mask">
              <span
                className="rem-char-inner"
                style={{
                  '--in-delay': `${(idx + 8) * 0.038}s`,
                  '--out-delay': `${(idx + 6) * 0.024}s`,
                }}
              >
                {char}
              </span>
            </span>
          ))}
        </div>

        {/* Two-digit number '01' */}
        <div className="number-container">
          {NUMBER_DIGITS.map((digit, idx) => (
            <span key={idx} className="num-digit-mask">
              <span
                className="num-digit-inner"
                style={{ '--num-delay': `${idx * 0.09}s` }}
              >
                {digit}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="cinematic-hero-wrapper" role="region" aria-label="Hero Section">
      {/* =========================================================================
          HERO UNDERLAYER (Video, Navigation & Footer)
          ========================================================================= */}
      <div className="hero-underlayer">
        {/* Background Video (plays when curtain opens or as soon as buffered) */}
        <video
          ref={videoRef}
          className="hero-media-video"
          poster={FALLBACK_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={startVideoPlayback}
          onCanPlay={startVideoPlayback}
        >
          <source src={homevideo} type="video/mp4" />
        </video>

        {/* Dark Gradient Overlay */}
        <div className="hero-gradient-overlay" aria-hidden="true" />

        {/* Bottom Minimal Footer Row */}
        <div className="hero-footer-row">
          <button
            type="button"
            className="hero-scroll-btn"
            onClick={handleScrollDown}
            aria-label="Scroll to explore"
          >
            SCROLL DOWN
          </button>
          <div className="hero-footer-tagline">
            NO.1 MEDICAL CODING TRAINING
          </div>
        </div>
      </div>

      {/* =========================================================================
          CINEMATIC CURTAIN SPLIT OVERLAY
          Two synchronized halves (Upper & Lower) that physically pull apart
          ========================================================================= */}
      <div
        className={`cinematic-curtain-overlay ${isSplit ? 'is-split' : ''} ${
          hasSeamGap ? 'has-seam-gap' : ''
        } ${isPreloaderDone ? 'is-done' : ''}`}
        aria-hidden="true"
      >
        {/* Upper Curtain Half (0% to 50vh) */}
        <div className="curtain-half curtain-top">
          <div className="curtain-sync-top">{renderPreloaderContent()}</div>
        </div>

        {/* Lower Curtain Half (50vh to 100vh) */}
        <div className="curtain-half curtain-bottom">
          <div className="curtain-sync-bottom">{renderPreloaderContent()}</div>
        </div>

        {/* Center Seam Hairline & Horizontal Slit (Cuts through midpoint of T & 01) */}
        <div
          className={`center-seam-slit ${
            stage === 'seam' ||
            stage === 'tags-out' ||
            stage === 'curtain-split'
              ? 'is-active'
              : ''
          }`}
        />
      </div>
    </div>
  );
};

export default CinematicHero;
