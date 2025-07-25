import React from 'react';
import passion from '../../images/Branches/motivation.png'
import loyalty from '../../images/Branches/customer-loyalty.png'
import commitment from '../../images/Branches/deal.png'
import responsibility from '../../images/Branches/norms.png'
import consistency from '../../images/Branches/consistency.png'
import creativity from '../../images/Branches/solution.png'

const HyderabadCore = () => {
    return (
        <div className="cbe1-features-container" style={{paddingTop:"40px"}}>
            <h2 className='m-3'>Our Core Values</h2>
            <div className="features-grid">
                <div style={{paddingTop:""}}>
                    <h4 style={{color:"#073766"}}>Degree categoris</h4>
                    <h2>Successfully Complete A Course at Thoughtflow Academy</h2>
                </div>
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
               
            </div>
        </div>
    );
}

export default HyderabadCore;
