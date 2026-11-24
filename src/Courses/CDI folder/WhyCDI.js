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
    description: 'Learn through ThoughtFlows, an officially listed AAPC-Licensed Education Provider in India, with structured CDI training and professional guidance.'
  },
  {
    id: 2,
    image: careeradv,
    title: 'Growing Demand for CDI Professionals',
    description: 'Hospitals and healthcare organizations increasingly require skilled CDI professionals to improve clinical documentation accuracy, support medical coding, and ensure appropriate reimbursement.'
  },
  {
    id: 3,
    image: careeradv,
    title: 'Career Growth Opportunities',
    description: 'CDI knowledge can strengthen your professional qualifications and help you explore opportunities in clinical documentation, medical coding, and healthcare revenue cycle management.'
  },
  {
    id: 4,
    image: handson,
    title: 'Specialized Clinical Documentation Knowledge',
    description: 'Develop expertise in clinical record reviews, identifying documentation gaps, physician queries, medical necessity, and accurate clinical representation.'
  },
  {
    id: 5,
    image: handson,
    title: 'Improved Coding Accuracy and Compliance',
    description: 'Learn how complete and accurate clinical documentation supports appropriate code assignment, reduces documentation discrepancies, and promotes regulatory compliance.'
  },
  {
    id: 6,
    image: excellenceimg,
    title: 'Professional Recognition',
    description: 'Develop specialized CDI skills that strengthen your professional profile and demonstrate your understanding of clinical documentation standards and healthcare coding practices.'
  }
];

const WhyCDI = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for CDI (Clinical Documentation Improvement) Training?</h2>
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

export default WhyCDI;
