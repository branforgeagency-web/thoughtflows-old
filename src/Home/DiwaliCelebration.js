import React, { useMemo } from 'react'
import FireworksCanvas from './FireworksCanvas'

// Festive overlay for the home hero. Toggle off with SHOW_Diwali in HomeBanner.js.

const DiwaliCelebration = () => {
    const sparkles = useMemo(
        () =>
            Array.from({ length: 28 }, (_, i) => ({
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                delay: `${(i % 7) * 0.6}s`,
                size: 2 + (i % 3),
            })),
        []
    )

    return (
        <div className='tf-dv' aria-hidden='true'>
            {/* twinkling sparkles */}
            {sparkles.map((s, i) => (
                <span
                    key={`s${i}`}
                    className='tf-dv-sparkle'
                    style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay }}
                />
            ))}

            {/* realistic fireworks */}
            <FireworksCanvas />

            {/* greeting – ThoughtFlows navy & teal */}
            <div className='tf-dv-greeting'>
                <span className='tf-dv-corner tf-dv-corner--tl' />
                <span className='tf-dv-corner tf-dv-corner--br' />

                <svg className='tf-dv-emblem' viewBox='0 0 64 64' fill='none'>
                    <defs>
                        <linearGradient id='tfDvGold' x1='0' y1='0' x2='1' y2='1'>
                            <stop offset='0%' stopColor='#e6fbfd' />
                            <stop offset='45%' stopColor='#5fd6df' />
                            <stop offset='100%' stopColor='#15AEBB' />
                        </linearGradient>
                        <radialGradient id='tfDvFlame' cx='50%' cy='70%' r='60%'>
                            <stop offset='0%' stopColor='#ffffff' />
                            <stop offset='55%' stopColor='#ffd98a' />
                            <stop offset='100%' stopColor='#15AEBB' stopOpacity='0' />
                        </radialGradient>
                    </defs>
                    <circle cx='32' cy='32' r='30' stroke='url(#tfDvGold)' strokeWidth='1' />
                    <circle cx='32' cy='32' r='26' stroke='url(#tfDvGold)' strokeWidth='0.6' strokeDasharray='1.5 3' />
                    <path className='tf-dv-emblem-flame' d='M32 14c4 6 5 9 5 12a5 5 0 0 1-10 0c0-3 1-6 5-12z' fill='url(#tfDvFlame)' />
                    <path d='M16 38h32c-2 7-8 11-16 11s-14-4-16-11z' stroke='url(#tfDvGold)' strokeWidth='1.4' />
                    <path d='M20 38c3 2 7 3 12 3s9-1 12-3' stroke='url(#tfDvGold)' strokeWidth='0.8' />
                </svg>

                <div className='tf-dv-greeting-text'>
                    <span className='tf-dv-greeting-small'>ThoughtFlows wishes you</span>
                    <span className='tf-dv-greeting-big'>Happy Diwali</span>
                    <span className='tf-dv-divider'><i /></span>
                    <span className='tf-dv-tagline'>May the light of knowledge guide your path</span>
                </div>
            </div>
        </div>
    )
}

export default DiwaliCelebration
