import React, { useEffect } from 'react'
import CCSBanner from './CCS/CCSBanner'
import Meta from '../Meta';
import WhatisCCS from './CCS/WhatisCCS';
import CCSObjective from './CCS/CCSObjective';
import AboutCCS from './CCS/AboutCCS';
import CcsSpecialist from './CCS/CcsSpecialist';

const CCS = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
    return (
        <>
            <Meta title="CCS Certification Course | Online & Offline | ThoughtFlows" description="Become a Certified Coding Specialist (CCS) with an AI-integrated medical coding curriculum. Online & offline at ThoughtFlows. Enroll today." canonical="https://www.thoughtflows.in/ccs" />
            <CCSBanner />
            <WhatisCCS />
            <CCSObjective />
            <AboutCCS />
            <CcsSpecialist />
        </>
    )
}

export default CCS