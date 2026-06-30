import React, { useEffect } from 'react'

import Meta from '../Meta';
import IpdrugBanner from './IPDrug/IpdrugBanner';
import WhatisIpDrug from './IPDrug/WhatisIpDrug';
import AboutIpDrug from './IPDrug/AboutIpDrug';
import IpDrugObjective from './IPDrug/IpDrugObjective';
import IpDrugModules from './IPDrug/IpDrugModules';
import IpDrugFAQ from './IPDrug/IpDrugFAQ';
import IpDrugCoders from './IPDrug/IpDrugCoders';
import WhyChooseIpDrug from './IPDrug/WhyChooseIpDrug';
import IPdrugDream from './IPDrug/IPdrugDream';

const IpDrug = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
    return (
        <>
            <Meta title="Certified Inpatient DRG Coder Course | ThoughtFlows" description="Enroll in the Certified Inpatient DRG Coder course at ThoughtFlows with expert training, IP-DRG case practice, and career-focused guidance." canonical="https://www.thoughtflows.in/ip-drg" />
            <IpdrugBanner />
            <WhatisIpDrug />
            <AboutIpDrug />
            <IpDrugCoders />
            <IpDrugObjective />
            <WhyChooseIpDrug />
            <IpDrugModules />
            <IPdrugDream />
            <IpDrugFAQ />
        </>
    )
}

export default IpDrug