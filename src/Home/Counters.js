import React from 'react';
import CountUp from 'react-countup';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import counter1img from '../images/Vector.png';
import counter2img from '../images/counter2.png';
import counter3img from '../images/counter3.png';
import counter4img from '../images/counter4.png';
import './Counters.css';

const STATS = [
    {
        end: 35000,
        label: 'Training',
        icon: counter1img,
        title: 'Students Trained',
        text: 'Learners trained in medical coding across our academy branches and online batches.',
    },
    {
        end: 30000,
        label: 'Placement',
        icon: counter2img,
        title: 'Career Placements',
        text: 'Learners supported into medical coding and healthcare roles through our placement assistance.',
    },
    {
        end: 49,
        label: 'Courses',
        icon: counter3img,
        title: 'Courses Offered',
        text: 'AAPC, AHIMA and specialty coding programs covering CPC, CIC, CRC and more.',
    },
    {
        end: 14,
        label: 'Branches',
        icon: counter4img,
        title: 'Academy Branches',
        text: 'Training centres across Tamil Nadu, Kerala, Telangana, Andhra Pradesh and Maharashtra.',
    },
];

/* ---------- laurel wreath (pure SVG, generated) ---------- */
const CX = 80;
const CY = 74;
const R = 58;

const leafAt = (deg, side, flip) => {
    const t = (deg * Math.PI) / 180;
    const x = CX + R * Math.cos(t);
    const y = CY + R * Math.sin(t);
    // leaves point along the branch (upwards), splayed in/out
    const rot = deg + 90 + (flip ? -38 : 38);
    const lx = side === 'left' ? x : 2 * CX - x;
    const lr = side === 'left' ? rot : 180 - rot;
    return { x: lx, y, r: lr };
};

const LEAF_ANGLES = [112, 128, 144, 160, 176, 192, 208, 224, 238];

const Wreath = ({ id }) => {
    const leaves = [];
    ['left', 'right'].forEach((side) => {
        LEAF_ANGLES.forEach((a, i) => {
            const size = 1 - i * 0.045;
            [false, true].forEach((flip) => {
                const l = leafAt(a, side, flip);
                leaves.push(
                    <ellipse
                        key={`${side}-${a}-${flip}`}
                        cx={l.x}
                        cy={l.y}
                        rx={10 * size}
                        ry={4.2 * size}
                        transform={`rotate(${l.r} ${l.x} ${l.y})`}
                        fill={`url(#${id}-leaf)`}
                    />
                );
            });
        });
    });
    const arc = (side) => {
        const p = (deg) => {
            const t = (deg * Math.PI) / 180;
            const x = CX + R * Math.cos(t);
            return [side === 'left' ? x : 2 * CX - x, CY + R * Math.sin(t)];
        };
        const [x1, y1] = p(100);
        const [x2, y2] = p(244);
        return `M${x1.toFixed(1)} ${y1.toFixed(1)} A${R} ${R} 0 0 ${side === 'left' ? 1 : 0} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
    };
    return (
        <svg className="tfaw-wreath" viewBox="0 0 160 150" aria-hidden="true">
            <defs>
                <linearGradient id={`${id}-leaf`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f3d98b" />
                    <stop offset="55%" stopColor="#c9a24a" />
                    <stop offset="100%" stopColor="#9a7428" />
                </linearGradient>
                <linearGradient id={`${id}-rib`} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0b4f8a" />
                    <stop offset="100%" stopColor="#073766" />
                </linearGradient>
            </defs>
            <path d={arc('left')} stroke="#b8913d" strokeWidth="1.6" fill="none" />
            <path d={arc('right')} stroke="#b8913d" strokeWidth="1.6" fill="none" />
            {leaves}
            {/* ribbon tying the branches */}
            <path d="M66 134 L58 148 L66 145 L70 151 L74 138 Z" fill={`url(#${id}-rib)`} />
            <path d="M94 134 L102 148 L94 145 L90 151 L86 138 Z" fill={`url(#${id}-rib)`} />
            <circle cx="80" cy="133" r="7" fill={`url(#${id}-rib)`} />
        </svg>
    );
};

const EASE = [0.22, 1, 0.36, 1];

const Counters = () => {
    const reduce = useReducedMotion();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

    return (
        <section className="tfaw" aria-labelledby="tfaw-heading" ref={ref}>
            <div className="tfaw-inner">
                <header className="tfaw-head">
                    <span className="tfaw-eyebrow">Thoughtflows Academy</span>
                    <h2 id="tfaw-heading" className="tfaw-heading">
                        Your Path to <em>Success</em> in Medical Coding
                    </h2>
                </header>

                <div className="tfaw-grid">
                    {STATS.map((s, i) => (
                        <motion.article
                            key={s.label}
                            className="tfaw-item"
                            initial={reduce ? false : { opacity: 0, y: 26 }}
                            animate={inView ? { opacity: 1, y: 0 } : undefined}
                            transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
                        >
                            <div className="tfaw-badge">
                                <Wreath id={`tfaw-w${i}`} />
                                <div className="tfaw-badge-text">
                                    <strong className="tfaw-num">
                                        {inView && !reduce ? (
                                            <CountUp start={0} end={s.end} separator="," duration={2.6} />
                                        ) : (
                                            s.end.toLocaleString('en-IN')
                                        )}
                                        +
                                    </strong>
                                    <span className="tfaw-badge-label">{s.label}</span>
                                </div>
                            </div>

                            <div className="tfaw-body">
                                <span className="tfaw-tag">
                                    <img src={s.icon} alt="" aria-hidden="true" />
                                    {s.label}
                                </span>
                                <h3 className="tfaw-title">{s.title}</h3>
                                <p className="tfaw-text">{s.text}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Counters;
