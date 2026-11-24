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
    title: 'Official AAPC Licensed Academy',
    description: 'Learn through an officially licensed AAPC academy with structured Certified Outpatient Coder (COC) training and professional guidance.'
  },
  {
    id: 2,
    image: excellenceimg,
    title: 'Expert COC-Certified Trainers',
    description: 'Learn from experienced trainers who provide personalized guidance in outpatient medical coding concepts, coding guidelines and practical applications.'
  },
  {
    id: 3,
    image: careeradv,
    title: 'Comprehensive COC Training Curriculum',
    description: 'Master essential COC topics, including ICD-10-CM diagnosis coding, CPT procedure coding, HCPCS Level II, medical terminology and outpatient coding guidelines.'
  },
  {
    id: 4,
    image: handson,
    title: 'Practical Outpatient Coding Experience',
    description: 'Develop practical coding skills through real-world medical records, outpatient coding scenarios, case studies and hands-on exercises.'
  },
  {
    id: 5,
    image: careeradv,
    title: 'COC Exam Preparation and Mock Tests',
    description: 'Prepare for the AAPC COC certification examination through chapter-wise assessments, practice questions, mock exams and performance feedback.'
  },
  {
    id: 6,
    image: careeradv,
    title: 'Career Growth Opportunities',
    description: 'Build your professional profile and explore career opportunities in outpatient medical coding, physician offices, ambulatory surgery centers and healthcare organizations.'
  },
  {
    id: 7,
    image: excellenceimg,
    title: 'Medical Coding Placement Assistance',
    description: 'Get career support through resume building, mock interviews and placement assistance to prepare for outpatient medical coding roles.'
  }
];

const WhyCOC = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for COC Training?</h2>
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

export default WhyCOC;
