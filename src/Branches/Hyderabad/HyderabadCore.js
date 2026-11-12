import React from 'react';
import { mediaUrl } from '../../config/media';
const passion = mediaUrl('images/Branches/motivation.png');
const loyalty = mediaUrl('images/Branches/customer-loyalty.png');
const commitment = mediaUrl('images/Branches/deal.png');
const responsibility = mediaUrl('images/Branches/norms.png');
const consistency = mediaUrl('images/Branches/consistency.png');
const creativity = mediaUrl('images/Branches/solution.png');

const HyderabadCore = () => {
    return (
        <div className="cbe1-features-container" style={{paddingTop:"40px"}}>
            <h2 className='m-3'>Our Core Values</h2>
            <div className="features-grid">
                <div style={{paddingTop:""}}>
                    <h4 style={{color:"#073766"}}>What We Stand For</h4>
                    <h2>Behind every great result is a set of values we live by — the principles that shape how we train, support, and stand by every student who walks through our doors.</h2>
                </div>
                <div className="feature-card purple">
                    <img src={passion} alt='passion'/>
                    <h3>Passion</h3>
                    <p>
                        We love what we do, and it shows in our training. That same passion is what's helped us become one of the most trusted medical coding institutes in Ameerpet.
                    </p>

                </div>
                <div className="feature-card dark">
                    <img src={loyalty} alt='loyalty'/>
                    <h3>Loyalty</h3>
                    <p>
                        Our students stay with us — and speak for us. The best proof of our loyalty is the trust our trainees place in us, long after their course ends.
                    </p>

                </div>
                <div className="feature-card purple">
                    <img src={commitment} alt='commitment'/>
                    <h3>Commitment</h3>
                    <p>
                        We don't stop until you're ready. Our commitment to every learner is the real reason behind our success.
                    </p>

                </div>
                <div className="feature-card dark">
                    <img src={responsibility} alt='responsibility'/>
                    <h3>Responsibility</h3>
                    <p>
                        Your career growth is our responsibility. We take ownership of our teaching, our innovation, and the future of every student we train.
                    </p>

                </div>
                <div className="feature-card purple">
                    <img src={consistency} alt='consistency'/>
                    <h3>Consistency</h3>
                    <p>
                        Quality isn't a one-time effort. We've held to the same high standards, year after year — and that consistency is what earns our students' trust.
                    </p>

                </div>
               
            </div>
        </div>
    );
}

export default HyderabadCore;
