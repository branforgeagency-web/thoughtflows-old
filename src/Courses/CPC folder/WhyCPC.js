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
    description: 'Train with an officially licensed AAPC academy and prepare for the Certified Professional Coder (CPC) certification through structured training and expert guidance.'
  },
  {
    id: 2,
    image: excellenceimg,
    title: 'Expert CPC-Certified Trainers',
    description: 'Learn from experienced CPC-certified trainers who provide personalized mentoring and guidance throughout your medical coding training.'
  },
  {
    id: 3,
    image: careeradv,
    title: 'Comprehensive CPC Training Curriculum',
    description: 'Master essential CPC exam subjects, including medical terminology, anatomy, ICD-10-CM diagnosis coding, CPT procedure coding, HCPCS Level II and medical coding guidelines.'
  },
  {
    id: 4,
    image: handson,
    title: 'Flexible Online and Offline CPC Classes',
    description: 'Choose online or classroom-based CPC training with flexible weekday and weekend batches to suit your learning schedule.'
  },
  {
    id: 5,
    image: handson,
    title: 'Practical Medical Coding Training',
    description: 'Develop hands-on coding skills through real-world medical records, coding scenarios, case studies and practical exercises.'
  },
  {
    id: 6,
    image: careeradv,
    title: 'CPC Exam Preparation and Mock Tests',
    description: 'Prepare for the AAPC CPC examination with chapter-wise assessments, full-length mock exams, timed practice tests and performance feedback.'
  },
  {
    id: 7,
    image: excellenceimg,
    title: 'Medical Coding Placement Assistance',
    description: 'Get career support through resume building, mock interviews and placement assistance to prepare for medical coding opportunities in healthcare organizations.'
  }
];

const WhyCPC = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for CPC Training?</h2>
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

export default WhyCPC;
