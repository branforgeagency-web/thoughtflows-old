import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import imgTraining from '../images/why/training.png';
import imgFlexible from '../images/why/flexible.png';
import imgPlacement from '../images/why/placement.png';
import imgHandsOn from '../images/why/hands-on.png';
import imgCurriculum from '../images/why/curriculum.png';
import './Coaching.css';

// Thoughtflows palette: teal, navy, violet accent, gold accent, ocean blue
const cardData = [
    {
        img: imgTraining,
        title: 'Industry-Leading Medical Coding Training',
        text: 'Thoughtflows Medical Coding Academy offers expert-led training across all coding specialties, ensuring you gain the latest skills and knowledge for a successful healthcare career.',
        link: '/contact',
        tone: 'teal',
    },
    {
        img: imgFlexible,
        title: 'Flexible Learning Options',
        text: "We provide both online and offline classes with various batch timings, allowing you to pursue certification at your convenience, whether you're a student or a working professional.",
        link: '/contact',
        tone: 'navy',
    },
    {
        img: imgPlacement,
        title: 'Guaranteed Job Placement & Career Support',
        text: 'With 100% job placement assistance, personalized career coaching, and interview prep, Thoughtflows helps you secure a job quickly after certification.',
        link: '/contact',
        tone: 'gold',
    },
    {
        img: imgHandsOn,
        title: 'Hands-On Real-World Coding Experience',
        text: 'Gain practical experience through case studies, coding exercises, and mock exams to bridge the gap between theory and real-world application.',
        link: '/contact',
        tone: 'violet',
    },
    {
        img: imgCurriculum,
        title: 'Updated, Industry-Approved Curriculum',
        text: "Our curriculum is regularly updated to align with the latest coding standards and guidelines, ensuring you're well-prepared for certification exams and your career in healthcare.",
        link: '/contact',
        tone: 'ocean',
    },
];

// scattered "fan" pose for each card on desktop
const POSE = [
    { rotate: -8, y: 34 },
    { rotate: 6, y: 78 },
    { rotate: -3, y: 0 },
    { rotate: 7, y: 66 },
    { rotate: -6, y: 22 },
];

function useIsDesktop() {
    const query = '(min-width: 992px)';
    const [match, setMatch] = useState(() => (typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(query).matches : true));
    useEffect(() => {
        if (!window.matchMedia) return undefined;
        const mq = window.matchMedia(query);
        const on = () => setMatch(mq.matches);
        if (mq.addEventListener) mq.addEventListener('change', on);
        else mq.addListener(on);
        return () => {
            if (mq.removeEventListener) mq.removeEventListener('change', on);
            else mq.removeListener(on);
        };
    }, []);
    return match;
}

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

const Coaching = () => {
    const desktop = useIsDesktop();
    const reduce = useReducedMotion();

    return (
        <section className="coaching-section tfwc" aria-labelledby="tfwc-heading">
            <div className="col-lg-12 text-center mb-4 tfwc-head">
                <h5>BEST COACHING</h5>
                <h2 id="tfwc-heading">Why Choose Thoughtflows Medical Coding Academy?</h2>
            </div>

            <div className="tfwc-stage">
                <div className="tfwc-fan">
                    {cardData.map((card, i) => {
                        const pose = desktop ? POSE[i] : { rotate: 0, y: 0 };
                        return (
                            <motion.article
                                key={card.title}
                                className={`tfwc-card tfwc-card--${card.tone}`}
                                tabIndex={0}
                                aria-labelledby={`tfwc-title-${i}`}
                                initial={reduce || !desktop ? false : { opacity: 0, y: pose.y + 90, rotate: 0, scale: 0.92 }}
                                whileInView={{ opacity: 1, y: pose.y, rotate: pose.rotate, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ type: 'spring', stiffness: 90, damping: 16, delay: reduce ? 0 : i * 0.09 }}
                                whileHover={desktop && !reduce ? { rotate: 0, y: pose.y - 18, scale: 1.05, zIndex: 20 } : undefined}
                                whileFocus={desktop && !reduce ? { rotate: 0, y: pose.y - 18, scale: 1.05, zIndex: 20 } : undefined}
                                style={{ zIndex: i + 1 }}
                            >
                                <span className="tfwc-num">{String(i + 1).padStart(2, '0')}</span>
                                <h3 className="tfwc-title" id={`tfwc-title-${i}`}>{card.title}</h3>

                                <div className="tfwc-media">
                                    <img src={card.img} alt="" loading="lazy" decoding="async" draggable="false" />
                                </div>

                                {/* description panel: slides up on hover / focus (always shown on touch layouts) */}
                                <div className="tfwc-reveal">
                                    <p>{card.text}</p>
                                    <Link to={card.link} className="tfwc-link">
                                        Learn More <ArrowIcon />
                                    </Link>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>

            {desktop && <p className="tfwc-hint">Hover a card to learn more</p>}
        </section>
    );
};

export default Coaching;
