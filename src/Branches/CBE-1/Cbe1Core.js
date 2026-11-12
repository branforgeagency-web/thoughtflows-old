import React from 'react';
import { mediaUrl } from '../../config/media';
const passion = mediaUrl('images/Branches/motivation.png');
const loyalty = mediaUrl('images/Branches/customer-loyalty.png');
const commitment = mediaUrl('images/Branches/deal.png');
const responsibility = mediaUrl('images/Branches/norms.png');
const consistency = mediaUrl('images/Branches/consistency.png');
const creativity = mediaUrl('images/Branches/solution.png');

const Cbe1Core = () => {
    return (
        <div className="cbe1-features-container">
            <h2>Our Core Values</h2>
            <div className="features-grid">
                <div className="feature-card purple">
                    <img src={passion} alt='passion'/>
                    <h3>Passion</h3>
                    <p>
                        Our passion towards training makes us to provide quality training in Healthcare industry. It make us to prove as an No. 1 Academy in Medical Coding.
                    </p>

                </div>
                <div className="feature-card dark">
                    <img src={loyalty} alt='loyalty'/>
                    <h3>Loyalty</h3>
                    <p>
                        The loyalty of Thought Flows, is the answer you will get from our trainees.
                    </p>

                </div>
                <div className="feature-card purple">
                    <img src={commitment} alt='commitment'/>
                    <h3>Commitment</h3>
                    <p>
                        Our commitment towards training is the result of our success
                    </p>

                </div>
                <div className="feature-card dark">
                    <img src={responsibility} alt='responsibility'/>
                    <h3>Responsibility</h3>
                    <p>
                        We are responsible for our commitment, innovation and technology excellence, We are responsible for our trainees and their Career growth.
                    </p>

                </div>
                <div className="feature-card purple">
                    <img src={consistency} alt='consistency'/>
                    <h3>Consistency</h3>
                    <p>
                        We adhere to the policies, Quality, and innovation from years that makes us to build trust in our customers.
                    </p>

                </div>
                <div className="feature-card dark">
                    <img src={creativity} alt='creativity'/>
                    <h3>Creativity</h3>
                    <p>
                        Our creative modules and ideas make our trainees every time to feel ease in understanding and remembering the concepts. We believe in Creativity to serve always with new things in THOUGHT FLOWS.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Cbe1Core;
