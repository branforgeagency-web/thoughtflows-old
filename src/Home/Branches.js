import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Branches.css";
import { mediaUrl } from '../config/media';
const ameerpetImg = mediaUrl("images/Branches/clean/Ameerpet.png");
const dilsukhnagarImg = mediaUrl("images/Branches/clean/Dilsukhnagar.png");
const gandhipuramImg = mediaUrl("images/Branches/clean/Gandhipuram.png");
const hopesImg = mediaUrl("images/Branches/clean/Hopes.png");
const kochiImg = mediaUrl("images/Branches/clean/Kochi.png");
const salemImg = mediaUrl("images/Branches/clean/Salem.png");
const saravanampattiImg = mediaUrl("images/Branches/clean/Saravanampatti.png");
const tirupatiImg = mediaUrl("images/Branches/clean/Tirupati.png");
const trichyImg = mediaUrl("images/Branches/clean/Trichy.png");
const trivandrumImg = mediaUrl("images/Branches/clean/Trivandrum.png");
const vizagImg = mediaUrl("images/Branches/clean/Vizag.png");
const puneImg = mediaUrl("images/Branches/clean/Pune.png");
const kolhapurImg = mediaUrl("images/Branches/clean/Kolhapur.png");
const theniImg = mediaUrl("images/Branches/theni-teaching.jpg");
const gandhipuramPhoto = mediaUrl("images/Branches/cards/gandhipuram.jpg");
const hopesPhoto = mediaUrl("images/Branches/cards/hopes.jpg");
const saravanampattiPhoto = mediaUrl("images/Branches/cards/saravanampatti.jpg");
const kochiPhoto = mediaUrl("images/Branches/cards/kochi.jpg");
const trivandrumPhoto = mediaUrl("images/Branches/cards/trivandrum.jpg");
const kolhapurPhoto = mediaUrl("images/Branches/cards/kolhapur.jpg");
const punePhoto = mediaUrl("images/Branches/cards/pune.jpg");
const ameerpetPhoto = mediaUrl("images/Branches/cards/ameerpet.jpg");
const dilsukhnagarPhoto = mediaUrl("images/Branches/cards/dilsukhnagar.jpg");
const theniPhoto = mediaUrl("images/Branches/cards/theni.jpg");


// card-sized campus photos (portrait crops)

const branchList = [
  { name: "Ameerpet", photo: ameerpetPhoto, region: "Telangana", img: ameerpetImg, path: "/Trusted-Medical-Coding-Ameerpet" },
  { name: "Dilsukhnagar", photo: dilsukhnagarPhoto, region: "Telangana", img: dilsukhnagarImg, path: "/Professional-Medical-Coding-Dilsukhnagar" },
  { name: "Saravanampatti", photo: saravanampattiPhoto, region: "Tamil Nadu", img: saravanampattiImg, path: "/Top-Medical-Coding-Training-Saravanampatti" },
  { name: "Gandhipuram", photo: gandhipuramPhoto, region: "Tamil Nadu", img: gandhipuramImg, path: "/Premier-Medical-Coding-Institute-Gandhipuram" },
  { name: "Hopes", photo: hopesPhoto, region: "Tamil Nadu", img: hopesImg, path: "/Medical-Coding-Excellence-at-Hopes" },
  { name: "Kochi", photo: kochiPhoto, region: "Kerala", img: kochiImg, path: "/Medical-Coding-Academy-Kochi" },
  { name: "Trivandrum", photo: trivandrumPhoto, region: "Kerala", img: trivandrumImg, path: "/Advanced-Medical-Coding-Tiruvandrum" },
  { name: "Salem", region: "Tamil Nadu", img: salemImg, path: "/Future-Ready-Medical-Coding-Salem" },
  { name: "Trichy", region: "Tamil Nadu", img: trichyImg, path: "/Career-Focused-Medical-Coding-Trichy" },
  { name: "Theni", photo: theniPhoto, region: "Tamil Nadu", img: theniImg, path: "/medical-coding-course-theni" },
  { name: "Tirupati", region: "Andhra Pradesh", img: tirupatiImg, path: "/Expert-Medical-Coding-Tirupathi" },
  { name: "Vizag", region: "Andhra Pradesh", img: vizagImg, path: "/Innovative-Medical-Coding-Vizag" },
  { name: "Pune", photo: punePhoto, region: "Maharashtra", img: puneImg, path: "/medical-coding-course-pune/" },
  { name: "Kolhapur", photo: kolhapurPhoto, region: "Maharashtra", img: kolhapurImg, path: "/Medical-Coding-Training-Kolhapur" },
];

const STEP = 15; // degrees between cards on the curved wall
const SPEED = 5; // auto-rotate, degrees per second
const MAX_ANGLE = 52; // hide cards beyond this angle

const wrapAngle = (a, span) => {
  let x = ((a + span / 2) % span + span) % span - span / 2;
  return x;
};

const Branches = () => {
  const stageRef = useRef(null);
  const [rot, setRot] = useState(0);
  const [dims, setDims] = useState({ r: 1150, p: 620, w: 230, h: 300, k: 1.08 });
  const paused = useRef(false);
  const target = useRef(null);

  // size the cylinder to the stage width
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return undefined;
    const fit = () => {
      const W = el.clientWidth;
      // card width ~ arc length between neighbours so the cards sit close together
      const r = W < 640 ? W * 2.2 : Math.min(W, 1500) * 0.93;
      const p = W < 640 ? W * 1.0 : Math.min(W, 1500) * 0.5;
      const w = r * 0.235;
      setDims({ r, p, w, h: w * 1.32, k: W < 640 ? 0.72 : 1.08 });
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  // continuous slow rotation; eases to a target when arrows are used
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf;
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      setRot((r) => {
        if (target.current !== null) {
          const d = target.current - r;
          if (Math.abs(d) < 0.05) {
            const t = target.current;
            target.current = null;
            return t;
          }
          return r + d * Math.min(1, dt * 4);
        }
        if (paused.current || reduce) return r;
        return r + SPEED * dt;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const nudge = (dir) => {
    const base = target.current !== null ? target.current : Math.round(rot / STEP) * STEP;
    target.current = base + dir * STEP;
  };

  const span = branchList.length * STEP;

  return (
    <section className="branches-lux">
      <div className="branches-lux-inner">
        <div className="branches-lux-header">
          <span className="branches-eyebrow">Our Presence</span>
          <h2 className="branches-lux-heading">
            Fourteen campuses, <em>one standard</em> of excellence
          </h2>
          <p className="branches-lux-subheading">
            From Pune and Kolhapur to Hyderabad and Kochi, Thoughtflows brings the
            same premium medical coding training experience to every campus across India.
          </p>
        </div>
      </div>

      <div
        className="bc-stage"
        ref={stageRef}
        style={{ perspective: `${dims.p}px`, height: `${dims.h * dims.k}px` }}
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; }}
      >
        <div className="bc-ring" style={{ transform: `translateZ(${dims.p}px)` }}>
          {branchList.map((branch, i) => {
            const a = wrapAngle(i * STEP - rot, span);
            const hidden = Math.abs(a) > MAX_ANGLE;
            const fade = Math.max(0, Math.min(1, (MAX_ANGLE - Math.abs(a)) / 8));
            return (
              <Link
                to={branch.path}
                key={branch.name}
                className="bc-card"
                tabIndex={hidden ? -1 : 0}
                aria-hidden={hidden}
                style={{
                  width: `${dims.w}px`,
                  height: `${dims.h}px`,
                  marginLeft: `${-dims.w / 2}px`,
                  marginTop: `${-dims.h / 2}px`,
                  transform: `rotateY(${a}deg) translateZ(${-dims.r}px)`,
                  opacity: hidden ? 0 : fade,
                  visibility: hidden ? "hidden" : "visible",
                }}
              >
                {branch.photo ? (
                  <img src={branch.photo} alt={`Thoughtflows ${branch.name} campus`} draggable="false" />
                ) : (
                  <span className="bc-framed">
                    <span className="bc-framed-bg" style={{ backgroundImage: `url(${branch.img})` }} />
                    <span className="bc-framed-ring">
                      <img src={branch.img} alt={`Thoughtflows ${branch.name} branch`} draggable="false" />
                    </span>
                  </span>
                )}
                <span className="bc-shade" />
                <span className="bc-info">
                  <span className="bc-num">#{String(i + 1).padStart(2, "0")}</span>
                  <span className="bc-name">{branch.name}</span>
                  <span className="bc-region">{branch.region}</span>
                </span>
                <span className="bc-go" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="bc-controls">
        <button type="button" className="bc-btn" onClick={() => nudge(-1)} aria-label="Previous branches">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
        </button>
        <span className="bc-hint">Hover to pause · click a campus to explore</span>
        <button type="button" className="bc-btn" onClick={() => nudge(1)} aria-label="Next branches">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </button>
      </div>
    </section>
  );
};

export default Branches;
