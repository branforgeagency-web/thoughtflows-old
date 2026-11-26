import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { mediaUrl } from '../config/media';
import './WelcomeCollage.css';
// Real campus interiors (swap paths here to change the collage photos)
const collageMain = mediaUrl('images/Interiors/hopes/hopes-smart-classroom.jpg');
const collageSide = mediaUrl('images/Interiors/hopes/hopes-reception-wave-ceiling.jpg');
const videoUrl = 'https://youtu.be/Ph1XztrKgms?si=hHUCdVWwRHZKzoqa';
const videoThumb = 'https://i.ytimg.com/vi/Ph1XztrKgms/hqdefault.jpg';
const grp20 = mediaUrl('images/Group20.png');
const grp21 = mediaUrl('images/Group21.png');
const grp22 = mediaUrl('images/Group22.png');
const grp23 = mediaUrl('images/Group23.png');

const WelcomSection = () => {
  return (
    <Row className='welcome-section'>
      <Col lg={6} style={{ textAlign: 'center' }}>
        <div className='tfw-collage'>
          <svg className='tfw-dash' viewBox='0 0 220 160' fill='none' aria-hidden='true'>
            <path d='M10 10 C 0 90, 60 150, 210 140' stroke='#1b4d7a' strokeWidth='2' strokeDasharray='6 7' strokeLinecap='round' />
          </svg>
          <div className='tfw-main'>
            <img src={collageMain} alt='Smart classroom at ThoughtFlows Hopes' loading='lazy' />
          </div>
          <div className='tfw-side'>
            <img src={collageSide} alt='ThoughtFlows Medical Coding Academy reception' loading='lazy' />
          </div>
          <a className='tfw-video' href={videoUrl} target='_blank' rel='noopener noreferrer' aria-label='Watch: What is Medical Coding'>
            <span className='tfw-video-thumb'>
              <img src={videoThumb} alt='What is Medical Coding video' loading='lazy' />
              <span className='tfw-play' aria-hidden='true'>
                <svg viewBox='0 0 24 24'><path d='M8 5v14l11-7z' /></svg>
              </span>
            </span>
            <span className='tfw-bar' />
            <span className='tfw-bar short' />
          </a>
        </div>
      </Col>
      <Col lg={6}>
        <h5>No.1 MEDICAL CODING TRAINING</h5>
        <h1>Welcome to ThoughtFlows Academy</h1>
        <p>At ThoughtFlows, we are dedicated to providing the highest quality medical coding training to our students. Our programs are designed to give students the skills and knowledge they need to succeed in the competitive world of healthcare. Our experienced instructors provide expert coaching to help students become proficient in medical coding.</p>

        <Row className='content-bxs'>
          <Col md={6} className='individual-bxs d-flex align-items-center'>
            <img src={grp20} alt="Expert Trainers" />
            <p>Expert Trainers</p>
          </Col>
          <Col md={6} className='individual-bxs d-flex align-items-center'>
            <img src={grp21} alt="Great Results" />
            <p>Great Results</p>
          </Col>
          <Col md={6} className='individual-bxs d-flex align-items-center'>
            <img src={grp22} alt="Flexible Scheduling" />
            <p>Flexible Scheduling</p>
          </Col>
          <Col md={6} className='individual-bxs d-flex align-items-center'>
            <img src={grp23} alt="Online Learning Modules" />
            <p>Online Learning Modules</p>
          </Col>
        </Row>

        <div className='home-btn' style={{ marginTop: '35px' }}>
          <Link className="button-animation" to="/contact">
            Discover Now
          </Link>
        </div>
      </Col>
    </Row>
  )
}

export default WelcomSection
