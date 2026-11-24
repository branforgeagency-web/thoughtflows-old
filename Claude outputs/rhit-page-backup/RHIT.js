import React, { useEffect } from 'react'

import Meta from '../Meta';
import RhitBanner from './RHIT folder/RhitBanner';
import RhitOutline from './RHIT folder/RhitOutline';
// import WhatisIpDrug from './IPDrug/WhatisIpDrug';
import WhatisRHIT from './RHIT folder/WhatisRHIT';
import AboutRhit from './RHIT folder/AboutRhit';
import RHITWork from './RHIT folder/RHITWork';
import RHITBenefits from './RHIT folder/RHITBenefits';
import RhitFAQ from './RHIT folder/RhitFAQ';
import RhitSkills from './RHIT folder/RhitSkills';
import RhitPursue from './RHIT folder/RhitPursue';
import RhitObjectives from './RHIT folder/RhitObjectives';
import RhitPrepareExam from './RHIT folder/RhitPrepareExam';

const RHIT = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
    return (
        <>
            <Meta title="RHIT Course Training for Health Information Careers" description="Join RHIT course training at ThoughtFlows with expert instruction, health information technology practice, and career support." canonical="https://www.thoughtflows.in/rhit" />
            < RhitBanner />
            <WhatisRHIT />
            <AboutRhit />
            <RHITWork />
            <RHITBenefits />
            <RhitSkills />
            <RhitPursue />
            <RhitOutline />
            <RhitObjectives />
            <RhitPrepareExam />
            <RhitFAQ />
        </>
    )
}

export default RHIT