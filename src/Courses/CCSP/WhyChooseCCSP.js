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
    description: 'Learn through ThoughtFlows, an officially listed AAPC-Licensed Education Provider in India, with structured physician coding training and professional guidance.'
  },
  {
    id: 2,
    image: careeradv,
    title: 'Growing Demand for Physician Coding Specialists',
    description: 'Healthcare organizations, physician practices, and medical billing companies seek skilled professionals to ensure accurate physician service coding and documentation.'
  },
  {
    id: 3,
    image: careeradv,
    title: 'Career Growth Opportunities',
    description: 'CCSP certification can strengthen your professional qualifications and help you explore opportunities in physician coding, medical billing, and healthcare revenue cycle management.'
  },
  {
    id: 4,
    image: handson,
    title: 'Specialized Physician Coding Knowledge',
    description: 'Develop expertise in physician documentation, evaluation and management (E/M) services, CPT coding, ICD-10-CM diagnosis coding, and coding guidelines.'
  },
  {
    id: 5,
    image: excellenceimg,
    title: 'Professional Recognition',
    description: 'The CCSP credential demonstrates specialized knowledge in physician coding and strengthens your professional credibility within the healthcare industry.'
  },
  {
    id: 6,
    image: handson,
    title: 'Practical Coding and Compliance Skills',
    description: 'Build expertise in medical record interpretation, accurate code assignment, documentation requirements, and coding compliance to prepare for professional physician coding roles.'
  }
];

const WhyChooseCCSP = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for CCSP Training?</h2>
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

export default WhyChooseCCSP;
