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
                title="CDI Course Training | ThoughtFlows Medical Coding Academy"
                description="Join the CDI course at ThoughtFlows to master clinical documentation, coding accuracy, and healthcare compliance with expert training, practical learning, and career support."
                canonical="https://thoughtflows.in/cdi"
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
