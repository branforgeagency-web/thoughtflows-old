import React, { useEffect } from 'react'
import Meta from '../Meta'

const Career = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
     }, [])
    return (
        <>
            <Meta
                title="Medical Coding Career Opportunities | ThoughtFlows Academy"
                description="Explore medical coding career opportunities with ThoughtFlows. Get trained, certified, and placed in top healthcare companies with our expert-led programs."
                canonical="https://www.thoughtflows.in/career"
            />
            <div>Career</div>
        </>
    )
}

export default Career