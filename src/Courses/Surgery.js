import React, { useEffect } from 'react'

import SurgeryBanner from "../Courses/Surgery/SurgeryBanner"
import AboutSurgery from './Surgery/AboutSurgery'
import SurgeryFeatures from './Surgery/SurgeryFeatures'
import SurgeObjectives from './Surgery/SurgeObjectives'
import SurgeryEligible from './Surgery/SurgeryEligible'
import WhatIsSurgery from './Surgery/WhatIsSurgery'
import SurgeryFAQ from './Surgery/SurgeryFAQ'
import WhyTakeSurgery from './Surgery/WhyTakeSurgery'
import SurgeryModules from './Surgery/SurgeryModules'
import Meta from '../Meta';

const Surgery = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
    return (
        <>
            <Meta title="Certified Surgery Coder Course | ThoughtFlows Academy" description="Join the Certified Surgery Coder course at ThoughtFlows with expert-led training, surgical coding practice, and career-focused guidance." canonical="https://www.thoughtflows.in/surgery" />
            <SurgeryBanner />
            <WhatIsSurgery />
            <AboutSurgery />
            <SurgeryFeatures />
            <WhyTakeSurgery />
            <SurgeObjectives />
            <SurgeryEligible />
            <SurgeryModules />
            <SurgeryFAQ />
        </>
    )
}

export default Surgery