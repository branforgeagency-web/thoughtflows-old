import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PopupContext } from '../context/PopupContext';
import './AdvancedOfferPopup.css';

const AdvancedOfferPopup = () => {
    const { isOpen } = useContext(PopupContext);
    const [hasOpened, setHasOpened] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            setHasOpened(true);
            setIsVisible(false); // Hide if register popup is open
        } else if (hasOpened && !dismissed) {
            // Register popup was opened and is now closed, show floating popup
            setIsVisible(true);
        }
    }, [isOpen, hasOpened, dismissed]);

    const handleClose = (e) => {
        if (e) e.stopPropagation();
        setIsVisible(false);
        setDismissed(true);
    };

    const handleNavigate = () => {
        setIsVisible(false);
        setDismissed(true);
        navigate('/vetri-108');
    };

    if (!isVisible) return null;

    return (
        <div className="advanced-offer-card">
            <button className="advanced-offer-close-btn" onClick={handleClose} aria-label="Close offer">
                &times;
            </button>
            
            <div className="advanced-offer-grid">
                {/* Right Column: Premium Text & Form Features */}
                <div className="advanced-offer-content-col">
                    <div className="advanced-offer-header-group">
                        {/* Graduation & Medical Shield Badge */}
                        <div className="advanced-offer-badge-wrapper">
                            <svg viewBox="0 0 100 100" className="advanced-offer-badge-svg" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="badgeGold" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#fff275" />
                                        <stop offset="50%" stopColor="#ffa600" />
                                        <stop offset="100%" stopColor="#ea580c" />
                                    </linearGradient>
                                </defs>
                                {/* Outer Gold Glow Circle */}
                                <circle cx="50" cy="50" r="46" fill="none" stroke="url(#badgeGold)" strokeWidth="3" />
                                <circle cx="50" cy="50" r="41" fill="#b91c1c" stroke="url(#badgeGold)" strokeWidth="2" />
                                
                                {/* Shield with Medical Cross */}
                                <g transform="translate(25, 42) scale(0.5)">
                                    {/* White Shield */}
                                    <path d="M 25 0 C 40 0 50 10 50 25 C 50 45 25 55 25 58 C 25 55 0 45 0 25 C 0 10 10 0 25 0 Z" fill="#ffffff" />
                                    {/* Red Cross inside */}
                                    <rect x="22" y="13" width="6" height="24" fill="#dc2626" rx="1.5" />
                                    <rect x="13" y="22" width="24" height="6" fill="#dc2626" rx="1.5" />
                                </g>

                                {/* Graduation Cap */}
                                <g transform="translate(18, 12) scale(0.65)">
                                    {/* Diamond top */}
                                    <polygon points="50,10 90,30 50,50 10,30" fill="#ffffff" stroke="#990000" strokeWidth="1" />
                                    {/* Cap base */}
                                    <path d="M 28,39 L 28,52 C 28,60 72,60 72,52 L 72,39 C 64,44 36,44 28,39 Z" fill="#ffffff" />
                                    {/* Tassel */}
                                    <path d="M 50,30 L 85,38 L 87,55" fill="none" stroke="#fff275" strokeWidth="2.5" strokeLinecap="round" />
                                    <circle cx="87" cy="57" r="3" fill="#fff275" />
                                </g>
                            </svg>
                        </div>

                        <div className="advanced-offer-title-container">
                            <h2 className="advanced-offer-main-title">
                                Advance Your <span className="gold-text-gradient"><br/>Medical Coding Career</span>
                            </h2>
                        </div>
                    </div>

                    <p className="advanced-offer-subtitle">
                        Gain industry-ready skills with our Advanced Medical Coding &amp; Billing programs designed for your career growth.
                    </p>

                    {/* Three Features Grid */}
                    <div className="advanced-offer-features-grid">
                        <div className="advanced-offer-feature-item">
                            <div className="feature-icon-wrapper">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="feature-svg-icon">
                                    {/* Whiteboard */}
                                    <rect x="3" y="3" width="18" height="12" rx="2" />
                                    <line x1="9" y1="21" x2="15" y2="21" />
                                    <line x1="12" y1="15" x2="12" y2="21" />
                                    {/* Teacher */}
                                    <circle cx="9" cy="9" r="2" />
                                    <path d="M5 13a4 4 0 0 1 8 0" />
                                    {/* Pointer */}
                                    <line x1="16" y1="6" x2="18" y2="9" />
                                </svg>
                            </div>
                            <span className="feature-label">Expert<br/>Faculty</span>
                        </div>

                        <div className="advanced-offer-feature-item">
                            <div className="feature-icon-wrapper">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="feature-svg-icon">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                            </div>
                            <span className="feature-label">Career-Focused<br/>Training</span>
                        </div>

                        <div className="advanced-offer-feature-item">
                            <div className="feature-icon-wrapper">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="feature-svg-icon">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                            </div>
                            <span className="feature-label">Placement<br/>Assistance</span>
                        </div>
                    </div>

                    {/* CTA button and Footer */}
                    <div className="advanced-offer-cta-container">
                        <button className="advanced-offer-btn-explore" onClick={handleNavigate}>
                            Explore Advanced Programs <span className="arrow-span">&rarr;</span>
                        </button>
                        <div className="advanced-offer-seats-banner">
                            <span className="star-icon">&#9733;</span> Limited Seats Available <span className="star-icon">&#9733;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvancedOfferPopup;
