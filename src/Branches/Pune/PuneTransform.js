import React from 'react';
import { Link } from 'react-router-dom';

const PuneTransform = () => {
  return (
    <div className="join-thoughtflows">
      <div className="join-thoughtflows-container">
        <div className="join-thoughtflows-text">
          <h2>Your Healthcare Career Starts Here</h2>
          <p>Finish your degree but feeling lost about the future? If you want a successful career in healthcare without dealing with patients, then medical coding is for you. No bedpan, no problem! Here at Thoughtflows, our instructors in Pune are real world certified US medical coders. This means our students learn medical coding the right way! Learning medical terminology and various coding regulations is only part of the course; students gain a competitive edge by learning how to properly document case details and get one on one mentorship with our coders. If this sounds good to you, be sure to sign up for our next course!</p>
          <div className='cbe2-btn'>
            <Link className="button-animation" to="/contact">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuneTransform;
