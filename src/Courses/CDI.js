import React, { useEffect } from 'react';
import CDIBanner from './CDI folder/CDIBanner';
import WhatisCDI from './CDI folder/WhatisCDI';
import WhyCDI from './CDI folder/WhyCDI';
import CDITraining from './CDI folder/CDITraining';
import CDIModules from './CDI folder/CDIModules';
import CDIFaq from './CDI folder/CDIFaq';
import Meta from '../Meta';

const CDI = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    return (
        <>
            <Meta
                title="Clinical Documentation Improvement Course | ThoughtFlows"
                description="Clinical Documentation Improvement (CDI) training with an AI-integrated medical coding curriculum. Online & offline at ThoughtFlows. Enroll today."
                canonical="https://www.thoughtflows.in/cdi"
            />

            <CDIBanner />
            <WhatisCDI />
            <WhyCDI />
            <CDITraining />
            <CDIModules />
            <CDIFaq />
        </>
    );
};

export default CDI;
