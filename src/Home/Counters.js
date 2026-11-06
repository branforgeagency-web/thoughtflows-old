import React from 'react';
import CountUp from 'react-countup';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import avatarA1 from '../images/CoreValues/loyalty.jpg';
import avatarA2 from '../images/CoreValues/commitment.jpg';
import avatarA3 from '../images/CoreValues/responsibility.jpg';
import avatarB1 from '../images/CoreValues/consistency.jpg';
import avatarB2 from '../images/CoreValues/creativity.jpg';
import avatarB3 from '../images/CoreValues/passion.jpg';
import placementsCareerCutout from '../images/Home/placements-career-cutout.png';
import placementsTrainingCutout from '../images/Home/placements-training-cutout.png';
import './Counters.css';

const EASE = [0.22, 1, 0.36, 1];

/* diagonal "up and to the right" arrow, used on every stat card */
const ArrowUpRight = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
            d="M7 17L17 7M17 7H8M17 7V16"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const AvatarStack = ({ photos }) => (
    <div className="tfpr-avatars" aria-hidden="true">
        {photos.map((src, i) => (
            <span className="tfpr-avatar" key={i}>
                <img src={src} alt="" loading="lazy" decoding="async" />
            </span>
        ))}
    </div>
);

const Counters = () => {
    const reduce = useReducedMotion();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const fade = (delay) => ({
        initial: reduce ? false : { opacity: 0, y: 30 },
        animate: inView ? { opacity: 1, y: 0 } : undefined,
        transition: { duration: 0.8, ease: EASE, delay },
    });

    const floatIn = (delay) => ({
        initial: reduce ? false : { opacity: 0, y: 40, scale: 0.96 },
        animate: inView ? { opacity: 1, y: 0, scale: 1 } : undefined,
        transition: { duration: 0.9, ease: EASE, delay },
    });

    return (
        <section className="tfpr" aria-labelledby="tfpr-heading" ref={ref}>
            <div className="tfpr-inner">
                <header className="tfpr-head">
                    <h2 id="tfpr-heading" className="tfpr-heading">
                        Placements and
                        <br />
                        Results
                    </h2>
                </header>

                <div className="tfpr-row">
                    {/* Card 1 — Placements */}
                    <motion.div className="tfpr-card tfpr-card--blue" {...fade(0)}>
                        <div className="tfpr-card-content">
                            <div className="tfpr-card-top">
                                <AvatarStack photos={[avatarA1, avatarA2, avatarA3]} />
                                <span className="tfpr-plus-badge" aria-hidden="true">+</span>
                            </div>
                            <strong className="tfpr-card-num">
                                {inView && !reduce ? <CountUp start={0} end={30000} separator="," duration={2.4} /> : '30,000'}+
                            </strong>
                            <span className="tfpr-card-sub">Placements</span>
                            <span className="tfpr-card-foot">
                                <span className="tfpr-arrow"><ArrowUpRight /></span>
                                <span className="tfpr-foot-text">
                                    Thoughtflows Academy
                                    <strong>Placement Success</strong>
                                </span>
                            </span>
                        </div>
                        <motion.span className="tfpr-card-photo" {...floatIn(0.15)}>
                            <img
                                src={placementsCareerCutout}
                                alt="A Thoughtflows medical coding professional placed in her career"
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.span>
                    </motion.div>

                    {/* Card 2 — Results */}
                    <motion.div className="tfpr-card tfpr-card--coral" {...fade(0.12)}>
                        <div className="tfpr-card-content">
                            <div className="tfpr-card-top">
                                <AvatarStack photos={[avatarB1, avatarB2, avatarB3]} />
                                <span className="tfpr-plus-badge tfpr-plus-badge--coral" aria-hidden="true">+</span>
                            </div>
                            <strong className="tfpr-card-num">
                                {inView && !reduce ? <CountUp start={0} end={35000} separator="," duration={2.4} /> : '35,000'}+
                            </strong>
                            <span className="tfpr-card-sub">Students Trained</span>
                            <span className="tfpr-card-foot">
                                <span className="tfpr-arrow"><ArrowUpRight /></span>
                                <span className="tfpr-foot-text">
                                    Thoughtflows Academy
                                    <strong>Training Outcomes</strong>
                                </span>
                            </span>
                        </div>
                        <motion.span className="tfpr-card-photo" {...floatIn(0.26)}>
                            <img
                                src={placementsTrainingCutout}
                                alt="A Thoughtflows graduate ready for her medical coding career"
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Counters;
