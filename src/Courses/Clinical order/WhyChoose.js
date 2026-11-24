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
    title: 'Growing Opportunities in Cardiology Coding',
    description: 'Hospitals, cardiology departments, physician practices, and healthcare organizations require skilled professionals to manage accurate cardiovascular coding and documentation.'
  },
  {
    id: 2,
    image: handson,
    title: 'Specialized Cardiovascular Coding Expertise',
    description: 'Develop knowledge of cardiovascular anatomy, cardiac procedures, diagnostic testing, interventional cardiology, and relevant CPT and ICD-10-CM coding guidelines.'
  },
  {
    id: 3,
    image: excellenceimg,
    title: 'Official AAPC-Licensed Academy – ThoughtFlows',
    description: 'ThoughtFlows is an officially listed AAPC-Licensed Education Provider in India, offering specialized cardiology coding education with structured training and professional guidance.'
  },
  {
    id: 4,
    image: handson,
    title: 'Practical Coding and Documentation Skills',
    description: 'Learn to interpret cardiology medical records, assign appropriate procedure codes, understand modifiers, and apply coding guidelines accurately.'
  },
  {
    id: 5,
    image: careeradv,
    title: 'Career Advancement in Healthcare',
    description: 'Explore professional opportunities in cardiology coding, physician billing, hospital coding departments, and healthcare revenue cycle management.'
  },
  {
    id: 6,
    image: excellenceimg,
    title: 'Professional Recognition',
    description: 'Strengthen your professional profile with specialized cardiology coding knowledge and demonstrate your understanding of cardiovascular coding practices.'
  }
];

const WhyChooseCCC = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for CCC Training?</h2>
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

export default WhyChooseCCC;
