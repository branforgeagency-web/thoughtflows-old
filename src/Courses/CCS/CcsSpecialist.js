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
        title: 'High Demand',
        description: 'CCS-certified coders are sought after in hospitals and healthcare facilities.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },
    {
        id: 2,
        image: careeradv,
        title: 'Career Opportunities',
        description: 'Access roles like Inpatient Coder, Coding Auditor, and Health Information Specialist.',
        className: 'col-lg-3 col-sm-12 active',
        descriptionClass: 'text-light',
        headingClass: 'text-white'
    },
    {
        id: 3,
        image: handson,
        title: 'Higher Salary Potential',
        description: 'Earn higher pay and qualify for promotions with certification.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },
    {
        id: 4,
        image: excellenceimg,
        title: 'Job Security',
        description: 'Inpatient coding expertise ensures stable and reliable career paths.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },
    {
        id: 5,
        image: handson,
        title: 'Professional Credibility',
        description: 'Nationwide recognition of your coding skills and expertise.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },
    {
        id: 6,
        image: excellenceimg,
        title: 'Master Inpatient & Outpatient Coding',
        description: 'Proficiency in coding diagnoses and procedures accurately.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },
    {
        id: 7,
        image: handson,
        title: 'Career Growth',
        description: 'Opportunities to advance to leadership roles like Coding Supervisor or Auditor.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },
    {
        id: 8,
        image: excellenceimg,
        title: 'Contribute to Healthcare Quality',
        description: 'Ensure accurate billing and compliance to support patient care.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
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
