import React, { useEffect, useRef, useState } from 'react';
import './CinematicHero.css';
import { mediaUrl } from '../config/media';
const homevideo = mediaUrl('images/hero-video.mp4');

const CinematicHero = () => {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

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
    // If the video was already cached and playing before React attached handlers
    const video = videoRef.current;
    if (video && !video.paused && video.readyState >= 3) setVideoReady(true);
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

  return (
    <div className="cinematic-hero-wrapper" role="region" aria-label="Hero Section">
      {/* =========================================================================
          HERO UNDERLAYER (Video, Navigation & Footer)
          ========================================================================= */}
      <div className="hero-underlayer">
        {/* Background Video */}
        <video
          ref={videoRef}
          className={`hero-media-video ${videoReady ? 'is-ready' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={startVideoPlayback}
          onCanPlay={startVideoPlayback}
          onPlaying={() => setVideoReady(true)}
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
    </div>
  );
};

export default CinematicHero;
