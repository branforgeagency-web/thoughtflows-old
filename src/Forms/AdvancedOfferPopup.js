import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PopupContext } from '../context/PopupContext';
import './AdvancedOfferPopup.css';
import AdvanBanner from '../images/forms/advanpop.jpeg';

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
        <div className="advanced-offer-card" onClick={handleNavigate}>
            <button className="advanced-offer-close-btn" onClick={handleClose} aria-label="Close offer">
                &times;
            </button>
            <img src={AdvanBanner} alt="Advanced Offer Banner" className="advanced-offer-image" />
        </div>
    );
};

export default AdvancedOfferPopup;
