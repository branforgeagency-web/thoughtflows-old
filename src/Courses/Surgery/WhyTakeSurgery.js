import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { mediaUrl } from '../../config/media';
const excellenceimg = mediaUrl('images/Courses/excellence.png');
const careeradv = mediaUrl('images/Courses/career-advancement.png');
const handson = mediaUrl('images/Courses/hands-on-experience.png');

const cardData = [
  {
    id: 1,
    image: careeradv,
    title: 'Growing Demand for Surgical Coders',
    description: 'Hospitals, surgical centers and healthcare organizations require skilled surgical coders to accurately interpret operative reports, assign procedure codes and support appropriate healthcare reimbursement.'
  },
  {
    id: 2,
    image: careeradv,
    title: 'Career Growth Opportunities',
    description: 'CSC certification can strengthen your professional profile and open career opportunities in surgical coding, hospital coding, outpatient coding and healthcare revenue cycle management.'
  },
  {
    id: 3,
    image: excellenceimg,
    title: 'Expert CSC-Certified Trainers',
    description: 'Learn from experienced professionals who provide guidance on surgical coding concepts, operative report interpretation, CPT coding guidelines, modifiers and medical documentation.'
  },
  {
    id: 4,
    image: careeradv,
    title: 'Comprehensive CSC Training Curriculum',
    description: 'Develop essential knowledge of surgical procedure coding, CPT surgical codes, anatomy, medical terminology, coding guidelines, surgical modifiers and documentation requirements.'
  },
  {
    id: 5,
    image: handson,
    title: 'Practical Surgical Coding Knowledge',
    description: 'Build practical skills through operative report reviews, real-world surgical coding scenarios, case studies and hands-on coding exercises.'
  },
  {
    id: 6,
    image: excellenceimg,
    title: 'Official AAPC Licensed Academy – ThoughtFlows',
    description: 'Prepare for the Certified Surgery Coder (CSC) certification through structured training at ThoughtFlows, an officially licensed AAPC academy.'
  },
  {
    id: 7,
    image: excellenceimg,
    title: 'Professional Recognition',
    description: 'Demonstrate your expertise in surgical procedure coding through the AAPC CSC credential, strengthening your professional credibility in the healthcare industry.'
  }
];

const WhyTakeSurgery = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for CSC Training?</h2>
      </div>
      <Row className="why-cpc px-4 flex flex-wrap justify-center" xs={1} md={3}>
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`card col-lg-3 col-sm-12 ${hoveredId === card.id ? 'active' : ''}`}
            onMouseEnter={() => setHoveredId(card.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              transition: 'all 0.3s ease',
              padding: '20px',
              borderRadius: '10px',
              margin: '10px',
              cursor: 'pointer',
              minHeight: '200px'
            }}
          >
            <div className="icon" style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
              {/* <img src={card.image} alt={card.title} width={40} /> */}
              <h3 style={{ color: hoveredId === card.id ? 'white' : 'black' }}>{card.title}</h3>
            </div>
            <p style={{ color: hoveredId === card.id ? 'white' : 'black' }}>{card.description}</p>
          </div>
        ))}
      </Row>
    </>
  );
};

export default WhyTakeSurgery;
