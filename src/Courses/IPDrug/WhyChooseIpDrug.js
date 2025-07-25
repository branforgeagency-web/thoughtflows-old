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
        title: 'Expert Trainers',
        description: 'Learn from industry-certified instructors with extensive real-world experience in inpatient coding and reimbursement systems.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },
    {
        id: 2,
        image: careeradv,
        title: 'Interactive Learning',
        description: 'Engage in live classes featuring case-based discussions, real-world scenarios, and interactive Q&A sessions.',
        className: 'col-lg-3 col-sm-12 active',
        descriptionClass: 'text-light',
        headingClass: 'text-white'
    },
    {
        id: 3,
        image: handson,
        title: 'Exclusive Content',
        description: 'Access comprehensive study materials designed specifically for mastering IPDRG, including coding manuals and practice guides.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },
    {
        id: 4,
        image: handson,
        title: 'Mock Exams',
        description: 'Prepare thoroughly with chapter-wise assessments and full-length mock exams that mirror the actual certification test.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },
    {
        id: 5,
        image: handson,
        title: 'Placement Support',
        description: 'Boost your career with resume-building workshops, mock interviews, and dedicated job placement assistance with top healthcare organizations.',
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
