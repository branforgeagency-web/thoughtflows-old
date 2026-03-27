import React, { useEffect } from 'react'

import Meta from '../Meta';
import RhiaBanner from './RHIA folder/RhiaBanner';
import RhiaOutline from './RHIA folder/RhiaOutline';
import WhatisIpDrug from './IPDrug/WhatisIpDrug';
import WhatisRHIA from './RHIA folder/WhatisRHIA';
import AboutRhia from './RHIA folder/AboutRhia';
import RHIAWork from './RHIA folder/RHIAWork';
import RHIABenefits from './RHIA folder/RHIABenefits';
import RhiaFAQ from './RHIA folder/RhiaFAQ';
import RhiaSkills from './RHIA folder/RhiaSkills';
import RhiaPursue from './RHIA folder/RhiaPursue';
import RhiaObjectives from './RHIA folder/RhiaObjectives';
import RhiaPrepareExam from './RHIA folder/RhiaPrepareExam';

const RHIA = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
    return (
        <>

            <Meta title="RHIA Certification Classes for Health Information Careers" description="Enroll in RHIA certification classes at ThoughtFlows with expert instruction, health information management practice, and career support." canonical="https://thoughtflows.in/rhia" />
            <RhiaBanner />
            <WhatisRHIA />
            <AboutRhia />
            <RHIAWork />
            <RHIABenefits />
            <RhiaSkills />
            <RhiaPursue />
            <RhiaObjectives />
            <RhiaOutline />
            <RhiaPrepareExam />
            <RhiaFAQ />
        </>
    )
}

export default RHIA