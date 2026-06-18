import React from 'react';
import passion from '../../images/Branches/motivation.png'
import loyalty from '../../images/Branches/customer-loyalty.png'
import commitment from '../../images/Branches/deal.png'
import responsibility from '../../images/Branches/norms.png'
import consistency from '../../images/Branches/consistency.png'
import creativity from '../../images/Branches/solution.png'

const HyderabadCore = () => {
    return (
        <div className="cbe1-features-container" style={{ paddingTop: "40px" }}>
            <h2 className='m-3'>Our Core Values</h2>
            <div className="features-grid">
                <div style={{ paddingTop: "" }}>
                    <h2>Behind the training is a set of values that guide how we work with every student who joins us.</h2>
                </div>
                <div className="feature-card purple">
                    <img src={passion} alt='passion' />
                    <h3>Passion</h3>
                    <p>
                        We genuinely enjoy what we teach, and students feel it. That energy is a big part of the reputation we've earned as a medical coding institute in Dilsukhnagar.
                    </p>

                </div>
                <div className="feature-card dark">
                    <img src={loyalty} alt='loyalty' />
                    <h3>Loyalty</h3>
                    <p>
                        Loyalty is earned, not claimed. Ask our past trainees — many stay in touch, refer their friends, and speak for us long after their course ends.
                    </p>

                </div>
                <div className="feature-card purple">
                    <img src={commitment} alt='commitment' />
                    <h3>Commitment</h3>
                    <p>
                        We measure ourselves by your progress. Our trainers stay with you until the concepts truly click and you're ready to work.
                    </p>

                </div>
                <div className="feature-card dark">
                    <img src={responsibility} alt='responsibility' />
                    <h3>Responsibility</h3>
                    <p>
                        We take your career seriously. From the quality of our teaching to keeping our methods current, we hold ourselves accountable for where you end up.
                    </p>

                </div>
                <div className="feature-card purple">
                    <img src={consistency} alt='consistency' />
                    <h3>Consistency</h3>
                    <p>
                        The standards we set years ago are the ones we still hold today. That steadiness is what's built lasting trust with our students.
                    </p>

                </div>

            </div>
        </div>
    );
}

export default HyderabadCore;
