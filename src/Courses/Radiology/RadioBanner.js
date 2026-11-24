import React from 'react';
import { mediaUrl } from '../../config/media';
const radiobanner = mediaUrl('images/AboutImg/about-workspace.jpg');

const RadioBanner = () => {
    return (
        <section className='hero-banner relative'>
            <div className='absolute inset-0 bg-black/40'></div>
            <img
                src={radiobanner}
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                alt="radiobanner"
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
                            className='block text-white'
                            style={{
                                fontWeight: 800,
                                fontSize: 'clamp(2rem, 5vw, 4.25rem)',
                                letterSpacing: '0.01em'
                            }}
                        >
                            LEARN WITH{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(90deg, #5aa9f5 0%, #3fd0b8 100%)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-block'
                                }}
                            >
                                AI-INTEGRATED
                            </span>
                        </span>

                        {/* Line 2: Medical Coding Curriculum */}
                        <span
                            className='block text-white mt-1 sm:mt-2'
                            style={{
                                fontWeight: 700,
                                fontSize: 'clamp(1.5rem, 3.8vw, 3.2rem)',
                                letterSpacing: '0'
                            }}
                        >
                            Medical Coding Curriculum
                        </span>
                    </h1>

                    {/* Pill: Radiology Coding · Online & Offline */}
                    <div className='mt-6 sm:mt-8 flex justify-center'>
                        <div
                            className='pill'
                            style={{
                                position: 'relative',
                                background: 'linear-gradient(90deg, #3f8cf2 0%, #3dd6a4 100%)',
                                borderRadius: '10px',
                                padding: '10px 28px',
                                color: '#ffffff',
                                fontWeight: 600,
                                fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
                                fontFamily: "'Outfit', sans-serif",
                                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.25)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                letterSpacing: '0.01em'
                            }}
                        >
                            {/* small speech-bubble tail */}
                            <span
                                aria-hidden='true'
                                style={{
                                    position: 'absolute',
                                    left: '18%',
                                    bottom: '-5px',
                                    width: '12px',
                                    height: '12px',
                                    background: '#4196ea',
                                    transform: 'rotate(45deg)',
                                    borderRadius: '2px'
                                }}
                            />
                            <span style={{ position: 'relative' }}>
                                Radiology Coding · Online &amp; Offline
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RadioBanner;
