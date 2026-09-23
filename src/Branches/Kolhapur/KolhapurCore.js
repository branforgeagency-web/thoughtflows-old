import React from 'react';
import passion from '../../images/Branches/motivation.png';
import loyalty from '../../images/Branches/customer-loyalty.png';
import commitment from '../../images/Branches/deal.png';
import responsibility from '../../images/Branches/norms.png';
import consistency from '../../images/Branches/consistency.png';

const KolhapurCore = () => {
    return (
        <div className="cbe1-features-container" style={{ paddingTop: "40px" }}>
            <h2 className='m-3'>Our Core Values</h2>
            <div className="features-grid">
                <div>
                    <h4 style={{ color: "#073766" }}>What We Stand For</h4>
                    <h2>The core principles that guide our training methodology, student support, and commitment to building leading medical coders in Kolhapur.</h2>
                </div>
                <div className="feature-card purple">
                    <img src={passion} alt='passion' />
                    <h3>Passion</h3>
                    <p>
                        We love what we do. Our passionate faculty brings healthcare education to life with energy, patience, and unwavering enthusiasm.
                    </p>
                </div>
                <div className="feature-card dark">
                    <img src={loyalty} alt='loyalty' />
                    <h3>Student-First</h3>
                    <p>
                        Our alumni network and student testimonials reflect our enduring commitment to each trainee long after their course is complete.
                    </p>
                </div>
                <div className="feature-card purple">
                    <img src={commitment} alt='commitment' />
                    <h3>Excellence</h3>
                    <p>
                        We never compromise on educational rigor. From course materials to mock assessments, every detail is engineered for high CPC exam pass rates.
                    </p>
                </div>
                <div className="feature-card dark">
                    <img src={responsibility} alt='responsibility' />
                    <h3>Responsibility</h3>
                    <p>
                        Your professional career is our priority. We take end-to-end accountability for training quality, interview preparation, and job placement.
                    </p>
                </div>
                <div className="feature-card purple">
                    <img src={consistency} alt='consistency' />
                    <h3>Integrity</h3>
                    <p>
                        Transparent counseling, genuine career guidance, and consistent classroom quality across all campuses make ThoughtFlows trusted across India.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KolhapurCore;
