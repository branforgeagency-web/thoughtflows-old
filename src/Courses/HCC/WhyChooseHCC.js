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
    title: 'Growing Demand for HCC Coding Professionals',
    description: 'Healthcare organizations, insurance companies and risk adjustment teams require skilled HCC coders to identify, review and accurately code patient conditions to support complete clinical documentation and appropriate risk adjustment.'
  },
  {
    id: 2,
    image: careeradv,
    title: 'Career Growth Opportunities',
    description: 'HCC coding training can strengthen your professional skills and help you explore career opportunities in risk adjustment coding, medical coding, healthcare analytics and insurance organizations.'
  },
  {
    id: 3,
    image: excellenceimg,
    title: 'Expert Medical Coding Trainers',
    description: 'Learn from experienced medical coding professionals who provide guidance on HCC coding concepts, ICD-10-CM guidelines, medical documentation and risk adjustment practices.'
  },
  {
    id: 4,
    image: careeradv,
    title: 'Comprehensive HCC Training Curriculum',
    description: 'Develop essential knowledge of Hierarchical Condition Categories, ICD-10-CM diagnosis coding, risk adjustment models, chronic condition coding, disease specificity, documentation requirements and coding guidelines.'
  },
  {
    id: 5,
    image: handson,
    title: 'Practical HCC Coding Knowledge',
    description: 'Build practical coding skills through medical record reviews, patient condition analysis, risk adjustment scenarios, real-world case studies and hands-on coding exercises.'
  },
  {
    id: 6,
    image: excellenceimg,
    title: 'Official AAPC Licensed Academy – ThoughtFlows',
    description: 'Learn HCC coding through structured training at ThoughtFlows, an officially licensed AAPC academy.'
  },
  {
    id: 7,
    image: excellenceimg,
    title: 'Professional Recognition',
    description: 'Develop specialized HCC and risk adjustment coding knowledge to strengthen your professional profile for opportunities in healthcare organizations, insurance companies and risk adjustment teams.'
  }
];

const WhyChooseHCC = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for HCC Training?</h2>
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

export default WhyChooseHCC;
