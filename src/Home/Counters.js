import React from 'react';
import CountUp from 'react-countup';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import trainingPhoto from '../images/Home/counters-training.jpg';
import placementPhoto from '../images/Home/counters-placements.jpg';
import branchPhoto from '../images/Home/counters-branch.jpg';
import startPhoto from '../images/Home/counters-start.jpg';
import './Counters.css';

const EASE = [0.22, 1, 0.36, 1];

/* small decorative flourish for the branches card, echoing the brand aqua */
const Swirl = () => (
    <svg className="tfaw-swirl" viewBox="0 0 160 140" fill="none" aria-hidden="true">
        <path
            d="M6 18 C 70 2, 118 28, 100 62 C 86 88, 40 86, 44 58 C 47 36, 86 30, 104 52 C 126 80, 110 118, 72 128 C 44 136, 18 124, 16 104"
            stroke="url(#tfaw-swirl-grad)"
            strokeWidth="5"
            strokeLinecap="round"
        />
        <defs>
            <linearGradient id="tfaw-swirl-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#5fe3ee" />
                <stop offset="100%" stopColor="#40e6aa" />
            </linearGradient>
        </defs>
    </svg>
);

const Counters = () => {
    const reduce = useReducedMotion();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const fade = (delay) => ({
        initial: reduce ? false : { opacity: 0, y: 26 },
        animate: inView ? { opacity: 1, y: 0 } : undefined,
        transition: { duration: 0.8, ease: EASE, delay },
    });

    const scrollToCourses = (e) => {
        e.preventDefault();
        const el = document.getElementById('popular-courses');
        if (!el) return;
        el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    };

    return (
        <section className="tfaw" aria-labelledby="tfaw-heading" ref={ref}>
            <div className="tfaw-inner">
                <header className="tfaw-head">
                    <span className="tfaw-eyebrow">Thoughtflows Academy</span>
                    <h2 id="tfaw-heading" className="tfaw-heading">
                        Your Path to <em>Success</em> in Medical Coding
                    </h2>
                </header>

                <div className="tfaw-bento">
                    {/* Column 1: training photo + students-trained stat */}
                    <div className="tfaw-col">
                        <motion.div className="tfaw-tile tfaw-tile--photo" {...fade(0)}>
                            <img src={trainingPhoto} alt="Trainers guiding students through live medical coding practice" loading="lazy" decoding="async" />
                            <span className="tfaw-tile-shade" aria-hidden="true" />
                            <span className="tfaw-tile-caption">Hands-on practice,<br />real coding charts</span>
                        </motion.div>
                        <motion.div className="tfaw-tile tfaw-tile--stat tfaw-tile--teal" {...fade(0.08)}>
                            <strong className="tfaw-stat-num">
                                {inView && !reduce ? <CountUp start={0} end={35000} separator="," duration={2.4} /> : '35,000'}+
                            </strong>
                            <span className="tfaw-stat-label">Students Trained</span>
                        </motion.div>
                    </div>

                    {/* Column 2: career placements, photo with big overlay number */}
                    <motion.div className="tfaw-col tfaw-col--push" {...fade(0.14)}>
                        <div className="tfaw-tile tfaw-tile--photo tfaw-tile--tall">
                            <img
                                src={placementPhoto}
                                alt="Thoughtflows graduates celebrating their medical coding placements"
                                loading="lazy"
                                decoding="async"
                                style={{ objectPosition: '50% 35%' }}
                            />
                            <span className="tfaw-tile-shade tfaw-tile-shade--strong" aria-hidden="true" />
                            <span className="tfaw-tile-info">
                                <span className="tfaw-tile-num">
                                    {inView && !reduce ? <CountUp start={0} end={30000} separator="," duration={2.4} /> : '30,000'}+
                                </span>
                                <span className="tfaw-tile-caption">Career Placements</span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Column 3: courses, CTA card */}
                    <motion.div className="tfaw-col tfaw-col--center" {...fade(0.2)}>
                        <div className="tfaw-tile tfaw-tile--cta">
                            <span className="tfaw-cta-num">49+</span>
                            <p className="tfaw-cta-text">Courses across AAPC, AHIMA and specialty programs &mdash; CPC, CIC, CRC and more.</p>
                            <a href="#popular-courses" className="tfaw-cta-btn" onClick={scrollToCourses}>
                                Explore Courses
                            </a>
                        </div>
                    </motion.div>

                    {/* Column 4: academy branches, campus photo */}
                    <motion.div className="tfaw-col" {...fade(0.26)}>
                        <div className="tfaw-tile tfaw-tile--photo tfaw-tile--tall">
                            <img src={branchPhoto} alt="Students training inside a Thoughtflows Academy branch" loading="lazy" decoding="async" />
                            <span className="tfaw-tile-shade" aria-hidden="true" />
                            <span className="tfaw-tile-caption">Train close to home,<br />wherever you are</span>
                        </div>
                    </motion.div>

                    {/* Column 5: branches stat + a second campus photo */}
                    <div className="tfaw-col">
                        <motion.div className="tfaw-tile tfaw-tile--stat tfaw-tile--navy" {...fade(0.32)}>
                            <Swirl />
                            <strong className="tfaw-stat-num tfaw-stat-num--light">
                                {inView && !reduce ? <CountUp start={0} end={14} duration={1.8} /> : '14'}+
                            </strong>
                            <span className="tfaw-stat-label tfaw-stat-label--light">Academy Branches</span>
                        </motion.div>
                        <motion.div className="tfaw-tile tfaw-tile--photo" {...fade(0.38)}>
                            <img src={startPhoto} alt="A Thoughtflows Academy training room in session" loading="lazy" decoding="async" />
                            <span className="tfaw-tile-shade" aria-hidden="true" />
                            <span className="tfaw-tile-caption">Start your journey<br />today</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counters;
