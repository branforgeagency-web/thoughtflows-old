import React from 'react';
import { mediaUrl } from '../../config/media';
const cpcbanner = mediaUrl('images/Courses/TEST.png');

const CPCBanner = () => {
    return (
        <section className='hero-banner relative'>
            <div className='absolute inset-0 bg-black/40'></div>
            <img
                src={cpcbanner}
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                alt="cpcbanner"
                className='z-0'
            />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 pt-16'>
                <div
                    className='max-w-6xl mx-auto px-4 text-center'
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                    <h1
                        className='text-center animate-fade-in'
                        style={{
                            fontFamily: "'Outfit', sans-serif",
                            lineHeight: 1.15
                        }}
                    >
                        {/* Line 1: LEARN WITH AI-INTEGRATED */}
                        <span
                            className='block font-extrabold text-white tracking-tight'
                            style={{
                                fontWeight: 800,
                                fontSize: 'clamp(2rem, 5.2vw, 4.5rem)',
                                letterSpacing: '-0.02em'
                            }}
                        >
                            LEARN WITH{' '}
                            <span
                                className='highlight inline-flex items-baseline'
                                style={{
                                    fontWeight: 800
                                }}
                            >
                                <span
                                    style={{
                                        background: 'linear-gradient(90deg, #5ea4ff 0%, #46c6ea 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        display: 'inline-block'
                                    }}
                                >
                                    AI-
                                </span>
                                <span
                                    className='relative inline-block'
                                    style={{
                                        background: 'linear-gradient(90deg, #46c6ea 0%, #3cd89e 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}
                                >
                                    INTEGRATED
                                    <span
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            bottom: '-4px',
                                            height: '4px',
                                            background: '#2fc4b2',
                                            borderRadius: '2px'
                                        }}
                                    />
                                </span>
                            </span>
                        </span>

                        {/* Line 2: Medical Coding Curriculum */}
                        <span
                            className='block font-extrabold text-white tracking-tight mt-2 sm:mt-3'
                            style={{
                                fontWeight: 800,
                                fontSize: 'clamp(2.2rem, 5.6vw, 4.8rem)',
                                letterSpacing: '-0.02em'
                            }}
                        >
                            Medical Coding Curriculum
                        </span>
                    </h1>

                    {/* Pill: Certified Professional Coder (CPC) · Online & Offline */}
                    <div className='mt-8 sm:mt-10 flex justify-center'>
                        <div
                            className='pill'
                            style={{
                                background: 'linear-gradient(90deg, #2b7fff 0%, #10b981 100%)',
                                borderRadius: '14px',
                                padding: '12px 32px',
                                color: '#ffffff',
                                fontWeight: 700,
                                fontSize: 'clamp(1.05rem, 2.2vw, 1.45rem)',
                                fontFamily: "'Outfit', sans-serif",
                                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                letterSpacing: '0.01em',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}
                        >
                            Certified Professional Coder (CPC) · Online &amp; Offline
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CPCBanner;
