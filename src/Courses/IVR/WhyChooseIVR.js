import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { mediaUrl } from '../../config/media';
const excellenceimg = mediaUrl('images/Courses/excellence.png');
const careeradv = mediaUrl('images/Courses/career-advancement.png');
const handson = mediaUrl('images/Courses/hands-on-experience.png');

const cardData = [
  {
    id: 1,
    image: excellenceimg,
    title: 'Official AAPC-Licensed Education Provider',
    description: 'Learn through ThoughtFlows, an officially listed AAPC-Licensed Education Provider in India, with structured medical coding training and professional guidance.'
  },
  {
    id: 2,
    image: careeradv,
    title: 'Growing Demand for IVR Coding Professionals',
    description: 'Hospitals, diagnostic centres, and specialized healthcare facilities require skilled coders to accurately code image-guided diagnostic and therapeutic procedures.'
  },
  {
    id: 3,
    image: careeradv,
    title: 'Career Growth Opportunities',
    description: 'IVR coding knowledge can strengthen your professional skills and help you explore career opportunities in radiology and specialized medical coding.'
  },
  {
    id: 4,
    image: handson,
    title: 'Specialized Knowledge in Radiology Procedures',
    description: 'Develop an understanding of angiography, angioplasty, embolization, catheterization, biopsies, and other image-guided procedures.'
  },
  {
    id: 5,
    image: excellenceimg,
    title: 'Professional Recognition',
    description: 'Specialized IVR coding expertise demonstrates your understanding of complex radiology procedures and strengthens your professional profile.'
  },
  {
    id: 6,
    image: careeradv,
    title: 'Comprehensive CPT Coding Knowledge',
    description: 'Gain knowledge of relevant CPT coding guidelines, procedure documentation, code selection, and appropriate modifier usage for interventional radiology services.'
  }
];

const WhyChooseIVR = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for Interventional Radiology (IVR) Training?</h2>
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

export default WhyChooseIVR;
