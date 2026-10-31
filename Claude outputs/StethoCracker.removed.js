import React, { useMemo } from 'react'

// Animated Diwali illustration: stethoscope whose chest-piece is a flower-pot
// cracker throwing sparks, plus a syringe "sparkler" with a sparkling tip.
const StethoCracker = () => {
    // flower-pot fountain sparks (from chest piece, fanning upward)
    const sparks = useMemo(
        () =>
            Array.from({ length: 40 }, (_, i) => ({
                angle: -160 + (i * 140) / 39 + ((i * 7) % 5),
                len: 70 + ((i * 13) % 70),
                delay: ((i * 0.37) % 1.4).toFixed(2),
                color: ['#ffd98a', '#ffffff', '#5fd6df', '#ffb347'][i % 4],
            })),
        []
    )

    // sparkler star at the needle tip
    const star = useMemo(
        () =>
            Array.from({ length: 16 }, (_, i) => ({
                angle: i * 22.5,
                len: 20 + (i % 3) * 12,
                delay: ((i * 0.13) % 0.6).toFixed(2),
                color: i % 2 ? '#c9a6ff' : '#ffffff',
            })),
        []
    )

    return (
        <svg className='tf-sc' viewBox='0 0 380 440' fill='none' aria-hidden='true'>
            <defs>
                <linearGradient id='tfScMetal' x1='0' y1='0' x2='1' y2='0'>
                    <stop offset='0' stopColor='#8e99a6' />
                    <stop offset='0.5' stopColor='#f2f5f8' />
                    <stop offset='1' stopColor='#8e99a6' />
                </linearGradient>
                <radialGradient id='tfScDisc' cx='40%' cy='35%' r='70%'>
                    <stop offset='0' stopColor='#5fd6df' />
                    <stop offset='0.6' stopColor='#15AEBB' />
                    <stop offset='1' stopColor='#0b6f78' />
                </radialGradient>
                <radialGradient id='tfScCore' cx='45%' cy='40%' r='60%'>
                    <stop offset='0' stopColor='#fff6c9' />
                    <stop offset='1' stopColor='#f2c14e' />
                </radialGradient>
                <radialGradient id='tfScGlow' cx='50%' cy='50%' r='50%'>
                    <stop offset='0' stopColor='#ffd98a' stopOpacity='0.85' />
                    <stop offset='1' stopColor='#ffd98a' stopOpacity='0' />
                </radialGradient>
                <filter id='tfScShadow' x='-20%' y='-20%' width='140%' height='140%'>
                    <feDropShadow dx='0' dy='10' stdDeviation='8' floodColor='#03141f' floodOpacity='0.45' />
                </filter>
            </defs>

            {/* ---------- syringe sparkler ---------- */}
            <g className='tf-sc-syringe'>
                <g transform='translate(330 92) rotate(-150)'>
                    {/* plunger */}
                    <rect x='-58' y='-3' width='26' height='6' rx='2' fill='#9aa5b1' />
                    <rect x='-64' y='-11' width='6' height='22' rx='2' fill='#5b6673' />
                    {/* barrel */}
                    <rect x='-34' y='-10' width='64' height='20' rx='4' fill='#ffffff' fillOpacity='0.92' stroke='#cfd8e1' />
                    <rect x='-30' y='-6' width='34' height='12' rx='2' fill='#8b5cf6' />
                    {[...Array(6)].map((_, i) => (
                        <line key={i} x1={-20 + i * 8} y1='-10' x2={-20 + i * 8} y2={i % 2 ? -5 : -2} stroke='#5b6673' strokeWidth='1' />
                    ))}
                    {/* hub + needle */}
                    <rect x='30' y='-5' width='10' height='10' rx='2' fill='#7c3aed' />
                    <line x1='40' y1='0' x2='92' y2='0' stroke='url(#tfScMetal)' strokeWidth='2' />
                    {/* sparkle at tip */}
                    <g transform='translate(94 0)'>
                        <circle r='10' fill='url(#tfScGlow)' className='tf-sc-pulse' />
                        {star.map((s, i) => (
                            <g key={i} transform={`rotate(${s.angle})`}>
                                <line
                                    className='tf-sc-ray'
                                    x1='2'
                                    y1='0'
                                    x2={s.len}
                                    y2='0'
                                    stroke={s.color}
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    style={{ animationDelay: `${s.delay}s` }}
                                />
                            </g>
                        ))}
                    </g>
                </g>
            </g>

            {/* ---------- stethoscope ---------- */}
            <g className='tf-sc-steth' filter='url(#tfScShadow)'>
                {/* metal binaurals */}
                <path d='M46 70 C 52 110, 66 150, 86 186' stroke='url(#tfScMetal)' strokeWidth='6' strokeLinecap='round' />
                <path d='M150 44 C 168 84, 178 130, 172 182' stroke='url(#tfScMetal)' strokeWidth='6' strokeLinecap='round' />
                {/* ear tips */}
                <ellipse cx='44' cy='64' rx='11' ry='9' fill='#2a3642' transform='rotate(-30 44 64)' />
                <ellipse cx='148' cy='38' rx='11' ry='9' fill='#2a3642' transform='rotate(-20 148 38)' />
                {/* rubber tubes to yoke */}
                <path d='M86 186 C 104 226, 126 260, 140 292' stroke='#56697c' strokeWidth='14' strokeLinecap='round' />
                <path d='M172 182 C 170 226, 160 262, 148 292' stroke='#56697c' strokeWidth='14' strokeLinecap='round' />
                {/* yoke */}
                <rect x='130' y='288' width='26' height='16' rx='4' fill='#111820' />
                {/* main tube looping to chest piece */}
                <path
                    d='M143 304 C 140 380, 200 420, 262 400 C 330 378, 336 310, 306 262'
                    stroke='#56697c'
                    strokeWidth='14'
                    strokeLinecap='round'
                />
            </g>

            {/* ---------- chest-piece = flower-pot cracker ---------- */}
            <g transform='translate(300 214)'>
                {/* fountain sparks */}
                <g transform='translate(-18 -40)'>
                    <circle r='26' fill='url(#tfScGlow)' className='tf-sc-pulse' />
                    {sparks.map((s, i) => (
                        <g key={i} transform={`rotate(${s.angle})`}>
                            <circle
                                className='tf-sc-spark'
                                cx='0'
                                cy='0'
                                r='3.2'
                                fill={s.color}
                                style={{ '--len': `${s.len}px`, animationDelay: `${s.delay}s` }}
                            />
                        </g>
                    ))}
                </g>

                <g className='tf-sc-chest' filter='url(#tfScShadow)'>
                    {/* candy-stripe rim */}
                    <circle r='50' fill='#ffffff' />
                    <circle r='46' stroke='#e5484d' strokeWidth='8' strokeDasharray='6 6' />
                    <circle r='46' stroke='#15AEBB' strokeWidth='8' strokeDasharray='6 6' strokeDashoffset='6' opacity='0.0' />
                    {/* disc */}
                    <circle r='40' fill='url(#tfScDisc)' />
                    <g className='tf-sc-spin'>
                        {[...Array(18)].map((_, i) => (
                            <circle key={i} cx={Math.cos((i * Math.PI) / 9) * 30} cy={Math.sin((i * Math.PI) / 9) * 30} r='1.8' fill='#ffd98a' />
                        ))}
                        {[...Array(12)].map((_, i) => (
                            <circle key={`b${i}`} cx={Math.cos((i * Math.PI) / 6) * 21} cy={Math.sin((i * Math.PI) / 6) * 21} r='1.3' fill='#e6fbfd' />
                        ))}
                    </g>
                    <circle r='13' fill='url(#tfScCore)' />
                </g>
            </g>
        </svg>
    )
}

export default StethoCracker
