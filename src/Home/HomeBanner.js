import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import homevideo from '../images/hero-video.mp4'
import DiwaliCelebration from './DiwaliCelebration'

// Set to false after the festival to remove the Diwali overlay
const SHOW_Diwali = true

const ROLES = ['CPC Coder', 'CIC Coder', 'CRC Coder', 'Medical Coder']

const STATS = [
    { value: '9+', label: 'Years of Training' },
    { value: '14', label: 'Branches Across India' },
    { value: 'AAPC', label: '& AHIMA Certifications' },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.25 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    }),
}

const HomeBanner = () => {
    const [roleIndex, setRoleIndex] = useState(0)

    useEffect(() => {
        const t = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2400)
        return () => clearInterval(t)
    }, [])

    return (
        <Row>
            <Col xs={12} className='p-0'>
                <div className='tf-hero'>
                    <video autoPlay muted loop playsInline className='tf-hero-video'>
                        <source src={homevideo} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <div className='tf-hero-shade' aria-hidden='true' />
                    {SHOW_Diwali && <DiwaliCelebration />}

                    <div className='tf-hero-content'>
                        <motion.span className='tf-hero-badge' variants={fadeUp} initial='hidden' animate='show' custom={0}>
                            <span className='tf-hero-dot' />
                            {SHOW_Diwali ? 'Diwali Offer — 10% OFF at all our branches' : 'Admissions Open — New Batches Starting'}
                        </motion.span>

                        <motion.h1 className='tf-hero-title' variants={fadeUp} initial='hidden' animate='show' custom={1}>
                            Launch your career as a certified
                            <span className='tf-hero-rotator'>
                                <AnimatePresence mode='wait'>
                                    <motion.span
                                        key={ROLES[roleIndex]}
                                        className='tf-hero-role'
                                        initial={{ y: '100%', opacity: 0 }}
                                        animate={{ y: '0%', opacity: 1 }}
                                        exit={{ y: '-100%', opacity: 0 }}
                                        transition={{ duration: 0.45, ease: 'easeOut' }}
                                    >
                                        {ROLES[roleIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </motion.h1>

                        <motion.p className='tf-hero-sub' variants={fadeUp} initial='hidden' animate='show' custom={2}>
                            Industry-focused medical coding training with expert trainers,
                            hands-on chart practice and dedicated placement support.
                        </motion.p>

                        {SHOW_Diwali && (
                            <motion.div className='tf-hero-offer' variants={fadeUp} initial='hidden' animate='show' custom={2.5} role='note' aria-label='Diwali offer: 10% off at all Thoughtflows branches'>
                                <span className='tf-hero-offer-pct'>
                                    <strong>10%</strong>
                                    <span>OFF</span>
                                </span>
                                <span className='tf-hero-offer-text'>
                                    <span className='tf-hero-offer-title'>Diwali Special Offer</span>
                                    <span className='tf-hero-offer-sub'>Valid at all our branches across India</span>
                                </span>
                            </motion.div>
                        )}

                        <motion.div className='tf-hero-ctas' variants={fadeUp} initial='hidden' animate='show' custom={3}>
                            <Link to='/contact' className='tf-hero-btn tf-hero-btn--primary'>{SHOW_Diwali ? 'Claim 10% Offer' : 'Enroll Now'}</Link>
                            <Link to='/cpc' className='tf-hero-btn tf-hero-btn--ghost'>Explore CPC Course →</Link>
                        </motion.div>

                        <div className='tf-hero-stats'>
                            {STATS.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    className='tf-hero-stat'
                                    variants={fadeUp}
                                    initial='hidden'
                                    animate='show'
                                    custom={4 + i}
                                    whileHover={{ y: -4 }}
                                >
                                    <strong>{s.value}</strong>
                                    <span>{s.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default HomeBanner
