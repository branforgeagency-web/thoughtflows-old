import React, { useEffect } from 'react'
import Meta from '../Meta'
import { Link } from 'react-router-dom'

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
            <section className="container py-5" style={{ marginTop: '100px' }}>
                <h1 className="h2 mb-3">Medical Coding Careers at ThoughtFlows</h1>
                <p>
                    Explore medical coding career opportunities with ThoughtFlows Academy. Get trained, certified
                    and placed in leading healthcare companies through our expert-led programs.
                </p>
                <h2 className="h4 mt-4 mb-2">Start Your Medical Coding Career</h2>
                <p>
                    Our CPC, CCS and specialty coding courses prepare you for roles such as medical coder,
                    coding auditor and quality analyst. Our placement team supports you with resume preparation,
                    mock interviews and introductions to hiring companies.
                </p>
                <p>
                    <Link to="/contact">Contact us</Link> to talk to a counsellor about the right course for you.
                </p>
            </section>
        </>
    )
}

export default Career