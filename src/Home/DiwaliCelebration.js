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
        </div>
    )
}

export default DiwaliCelebration
