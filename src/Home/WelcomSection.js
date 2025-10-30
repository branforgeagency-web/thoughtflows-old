import React from 'react'
import leftimg from '../images/thumbnail-/img1.png'
import grp20 from '../images/Group20.png'
import grp21 from '../images/Group21.png'
import grp22 from '../images/Group22.png'
import grp23 from '../images/Group23.png'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WelcomSection = () => {
  return (
    <Row className='welcome-section'>
      <Col lg={6} style={{textAlign:'center'}}>
        <a href='https://youtu.be/Ph1XztrKgms?si=hHUCdVWwRHZKzoqa' target='_blank'><img src={leftimg} alt='leftimg' className='leftimg'/></a>
      </Col>
      <Col lg={6}>
        <h5>No.1 MEDICAL CODING TRAINING</h5>
        <h2>Welcome to ThoughtFlows <br />Academy</h2>
        <p>At ThoughtFlows, we are dedicated to providing the highest quality medical coding <br />
          training to our students. Our programs are designed to give students the skills and <br />
          knowledge they need to succeed in the competitive world of healthcare. <br />
          Our experienced instructors provide expert coaching to help students become proficient in medical coding.</p>
        
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
