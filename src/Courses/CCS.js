import React,{useEffect}from 'react'
import CCSBanner from './CCS/CCSBanner'
import Meta from '../Meta';
import WhatisCCS from './CCS/WhatisCCS';
import CCSObjective from './CCS/CCSObjective';
import AboutCCS from './CCS/AboutCCS';
import CcsSpecialist from './CCS/CcsSpecialist';

const CCS = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
     },[])
    return (
        <>
            <Meta title="CCS Training | Medical Coding Course | Thoughtflows Academy" description="Our CCS training course includes everything you need to know to become a certified medical coder from expert instructors." />
            <CCSBanner />
            <WhatisCCS />
            <CCSObjective />
            <AboutCCS />
            <CcsSpecialist />
        </>
    )
}

export default CCS