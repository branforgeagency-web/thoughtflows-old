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
            <Meta title="Certified Coding Specialist (CCS) Course Training | ThoughtFlows" description="Certified Coding Specialist (CCS) training at ThoughtFlows with expert guidance, real coding practice, exam preparation, and career support." canonical="https://thoughtflows.in/ccs" />
            <CCSBanner />
            <WhatisCCS />
            <CCSObjective />
            <AboutCCS />
            <CcsSpecialist />
        </>
    )
}

export default CCS