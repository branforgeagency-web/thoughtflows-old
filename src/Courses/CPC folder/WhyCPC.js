import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import excellenceimg from '../../images/Courses/excellence.png';
import careeradv from '../../images/Courses/career-advancement.png';
import handson from '../../images/Courses/hands-on-experience.png';
import { color } from 'framer-motion';

const cardData = [
  {
    id: 1,
    image: excellenceimg,
    title: 'Expert Instructors',
    description: 'Experienced trainers who are CPC-certified provide personalized mentoring.'
  },
  {
    id: 2,
    image: careeradv,
    title: 'Comprehensive Curriculum',
    description: 'Covers all aspects of the CPC exam — from medical terminology to compliance and ethics.'
  },
  {
    id: 3,
    image: handson,
    title: 'Flexible Learning Modes',
    description: 'Online and offline options tailored to your schedule.'
  },
  {
    id: 4,
    image: handson,
    title: 'Practical Learning',
    description: 'Hands-on practice with real-world coding scenarios and case studies.'
  },
  {
    id: 5,
    image: handson,
    title: 'High Success Rate',
    description: 'Our proven methods ensure high pass rates.'
  },
  {
    id: 6,
    image: excellenceimg,
    title: 'Placement Support',
    description: 'Resume building, mock interviews, and job placement assistance.'
  }
];

const WhyCPC = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Take CPC Training from Thoughtflows?</h2>
      </div>
      <Row className="why-cpc px-4" xs={1} md={3}>
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

export default WhyCPC;
