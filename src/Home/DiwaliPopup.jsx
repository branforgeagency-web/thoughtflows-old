import React, { useState } from 'react'

// Small floating "Happy Diwali + 10% Offer" popup, pinned below the navbar.
// Toggle off with SHOW_Diwali in HomeBanner.js (kept in sync manually here).
const SHOW_Diwali = false

const DiwaliPopup = () => {
    const [closed, setClosed] = useState(false)

    if (!SHOW_Diwali || closed) return null

    return (
        <div className='tf-dv-popup' role='note' aria-label='Diwali greeting and 10% offer'>
            <button
                type='button'
                className='tf-dv-popup-close'
                aria-label='Close'
                onClick={() => setClosed(true)}
            >
                &times;
            </button>

            <svg className='tf-dv-popup-emblem' viewBox='0 0 64 64' fill='none'>
                <defs>
                    <linearGradient id='tfDvPopupGold' x1='0' y1='0' x2='1' y2='1'>
                        <stop offset='0%' stopColor='#e6fbfd' />
                        <stop offset='45%' stopColor='#5fd6df' />
                        <stop offset='100%' stopColor='#15AEBB' />
                    </linearGradient>
                    <radialGradient id='tfDvPopupFlame' cx='50%' cy='70%' r='60%'>
                        <stop offset='0%' stopColor='#ffffff' />
                        <stop offset='55%' stopColor='#ffd98a' />
                        <stop offset='100%' stopColor='#15AEBB' stopOpacity='0' />
                    </radialGradient>
                </defs>
                <circle cx='32' cy='32' r='30' stroke='url(#tfDvPopupGold)' strokeWidth='1' />
                <path d='M32 14c4 6 5 9 5 12a5 5 0 0 1-10 0c0-3 1-6 5-12z' fill='url(#tfDvPopupFlame)' />
                <path d='M16 38h32c-2 7-8 11-16 11s-14-4-16-11z' stroke='url(#tfDvPopupGold)' strokeWidth='1.4' />
            </svg>

            <div className='tf-dv-popup-text'>
                <span className='tf-dv-popup-small'>ThoughtFlows wishes you</span>
                <span className='tf-dv-popup-big'>Happy Diwali</span>
                <span className='tf-dv-popup-offer'>10% OFF at all our branches</span>
            </div>
        </div>
    )
}

export default DiwaliPopup
