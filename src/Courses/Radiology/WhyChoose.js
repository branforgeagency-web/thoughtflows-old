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
    title: 'Growing Demand for Radiology Coders',
    description: 'Hospitals, diagnostic centers and healthcare organizations require skilled radiology coders to accurately interpret radiology documentation, assign appropriate procedure codes and support accurate healthcare billing.'
  },
  {
    id: 2,
    image: careeradv,
    title: 'Career Growth Opportunities',
    description: 'Radiology coding training can strengthen your professional skills and help you explore career opportunities in diagnostic imaging centers, hospitals, radiology departments and healthcare revenue cycle management.'
  },
  {
    id: 3,
    image: excellenceimg,
    title: 'Expert Medical Coding Trainers',
    description: 'Learn from experienced medical coding professionals who provide guidance on radiology coding concepts, CPT coding guidelines, medical documentation and imaging procedures.'
  },
  {
    id: 4,
    image: careeradv,
    title: 'Comprehensive Radiology Coding Curriculum',
    description: 'Develop essential knowledge of diagnostic imaging procedures, CPT radiology codes, X-ray, CT scans, MRI, ultrasound, nuclear medicine, coding modifiers and radiology coding guidelines.'
  },
  {
    id: 5,
    image: handson,
    title: 'Practical Radiology Coding Knowledge',
    description: 'Build practical coding skills through radiology reports, imaging procedure documentation, real-world coding scenarios, case studies and hands-on exercises.'
  },
  {
    id: 6,
    image: excellenceimg,
    title: 'Official AAPC Licensed Academy – ThoughtFlows',
    description: 'Learn radiology coding through structured medical coding training at ThoughtFlows, an officially licensed AAPC academy.'
  },
  {
    id: 7,
    image: excellenceimg,
    title: 'Professional Recognition',
    description: 'Develop specialized radiology coding knowledge and strengthen your professional profile for medical coding opportunities in hospitals, diagnostic centers and healthcare organizations.'
  }
];

const WhyChooseRadiology = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for Radiology Coding Training?</h2>
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

export default WhyChooseRadiology;
