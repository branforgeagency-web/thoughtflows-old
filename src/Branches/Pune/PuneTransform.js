import React from 'react';
import { mediaUrl } from '../../config/media';
import { LuxCTA } from '../common/LuxSections';

const PuneTransform = () => (
  <LuxCTA
    image={mediaUrl('images/Interiors/pune/pune-interior-05.jpg')}
    imageAlt="Collaborative breakout lounge at ThoughtFlows Pune"
    to="/contact"
    label="Register Now"
    blocks={[
      {
        title: 'Your Healthcare Career Starts Here',
        text: 'Finish your degree but feeling lost about the future? If you want a successful career in healthcare without dealing with patients, then medical coding is for you. At Thoughtflows, our instructors in Pune are real-world certified US medical coders—students gain a competitive edge by learning how to properly document case details with one-on-one mentorship.',
      },
    ]}
  />
);

export default PuneTransform;
