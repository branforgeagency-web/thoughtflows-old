import React from 'react';
import passion from '../../images/Branches/motivation.png';
import loyalty from '../../images/Branches/customer-loyalty.png';
import commitment from '../../images/Branches/deal.png';
import responsibility from '../../images/Branches/norms.png';
import consistency from '../../images/Branches/consistency.png';

const PuneCore = () => {
    return (
        <div className="cbe1-features-container" style={{ paddingTop: "40px" }}>
            <h2 className='m-3'>Our Core Values</h2>
            <div className="features-grid">
                <div>
                    <h4 style={{ color: "#073766" }}>What We Stand For</h4>
                    <h2>The founding principles that power ThoughtFlows’ reputation as India’s highest-rated healthcare coding education network.</h2>
                </div>
                <div className="feature-card purple">
                    <img src={passion} alt='passion' />
                    <h3>Passion</h3>
                    <p>
                        We are passionate about healthcare informatics and mentorship. That energy fuels our classrooms and inspires every trainee to excel.
                    </p>
                </div>
                <div className="feature-card dark">
                    <img src={loyalty} alt='loyalty' />
                    <h3>Dedication</h3>
                    <p>
                        We stand by our students throughout their certification preparation, interview rounds, and initial career transitions.
                    </p>
                </div>
                <div className="feature-card purple">
                    <img src={commitment} alt='commitment' />
                    <h3>Excellence</h3>
                    <p>
                        From our curated question banks to real EHR clinical scenarios, we maintain unmatched pedagogical standards.
                    </p>
                </div>
                <div className="feature-card dark">
                    <img src={responsibility} alt='responsibility' />
                    <h3>Career Ownership</h3>
                    <p>
                        We measure our success by your job offer letter. Our active placement team drives opportunities until placement is achieved.
                    </p>
                </div>
                <div className="feature-card purple">
                    <img src={consistency} alt='consistency' />
                    <h3>Reliability</h3>
                    <p>
                        Consistent high pass rates, transparent counseling, and trusted training methodologies across all national branches.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PuneCore;
