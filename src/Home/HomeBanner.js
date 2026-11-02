import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { motion, AnimatePresence } from 'framer-motion'
import homevideo from '../images/hero-video.mp4'
import DiwaliCelebration from './DiwaliCelebration'

// Set to false after the festival to remove the Diwali overlay (wishes, sparkles, fireworks) and offer banner
const SHOW_Diwali = true

const ROLES = ['CPC Coder', 'CIC Coder', 'CRC Coder', 'Medical Coder']

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
                        <motion.h1
                            className='tf-hero-title'
                            variants={fadeUp}
                            initial='hidden'
                            animate='show'
                            custom={1}
                        >
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

                        {/* <motion.p className='tf-hero-sub' variants={fadeUp} initial='hidden' animate='show' custom={2}>
                            Industry-focused medical coding training with expert trainers,
                            hands-on chart practice and dedicated placement support.
                        </motion.p> */}
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default HomeBanner
