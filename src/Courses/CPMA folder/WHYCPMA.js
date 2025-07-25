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
        description: 'As healthcare regulations increase and audits become more stringent, the need for qualified auditors has risen significantly. CPMA professionals are essential for ensuring that healthcare facilities stay compliant.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },
    {
        id: 2,
        image: careeradv,
        title: 'Career Advancement:',
        description: 'With a CPMA certification, you unlock opportunities for higher-paying roles and career progression in medical auditing and compliance.',
        className: 'col-lg-3 col-sm-12 active',
        descriptionClass: 'text-light',
        headingClass: 'text-white'
    },
    {
        id: 3,
        image: handson,
        title: 'Job Security',
        description: ' The expanding complexity of healthcare billing and coding systems ensures job stability for certified auditors. Healthcare organizations are continually seeking professionals to manage risk and maximize revenue cycles.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },


    {
        id: 4,
        image: handson,
        title: 'Industry Recognition',
        description: ' A CPMA certification is a recognized credential that signifies expertise in medical auditing, helping you gain trust and credibility in the industry.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },



    // {
    //     id: 5,
    //     image: handson,
    //     title: 'High Success Rate',
    //     description: 'Our proven methods ensure high pass rates.',
    //     className: 'col-lg-3 col-sm-12',
    //     headingClass: 'text-black'
    // },


    // {
    //     id: 6,
    //     image: excellenceimg,
    //     title: 'Placement Support',
    //     description: 'Resume building, mock interviews, and job placement assistance.',
    //     className: 'col-lg-3 col-sm-12',
    //     headingClass: 'text-black'
    // },
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
