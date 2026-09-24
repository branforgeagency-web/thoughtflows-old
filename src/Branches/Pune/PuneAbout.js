import React from 'react';
import { Row, Col } from 'react-bootstrap';
import cbe1aboutbg from '../../images/Branches/cbe1Abt.png';
import studentsImg from '../../images/Branches/online/Students.jpg';

const PuneAbout = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${cbe1aboutbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Row className='cbe1-about'>
        <Col lg={1}></Col>
        <Col lg={5}>
          <h2>Pune's Trusted Medical Coding Institute</h2>
          <p>Are you interested in studying medical coding in Pune? Thoughtflows Medical Coding Academy has industry-centric medical coding courses in Pune. The courses are geared towards graduates, nursing and life sciences students and allied health professionals. Through this training you will learn HCPCS, CPT and ICD-10-CM coding and also prepare for the CPC exam. The trainers are practitioners with industry experience. Thoughtflows Medical Coding Academy has working relationships with hospitals and other facilities in the healthcare industry. Additionally, it provides students with learning resources and professionally related services. The medical coding courses will equip you to begin a career in medical coding.</p>
        </Col>
        <Col lg={5} style={{ textAlign: 'center' }}>
          <img
            src={studentsImg}
            alt='Medical coding students at Thoughtflows Pune'
            className='cbe1About'
            style={{ width: '320px', maxWidth: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px' }}
          />
        </Col>
        <Col lg={1}></Col>
      </Row>
    </div>
  );
};

export default PuneAbout;
