import React from 'react'
import { Row, Col } from 'react-bootstrap'
import coursebg from '../../images/coursebg.png'
import { Link } from "react-router-dom";
const AboutCRC = () => {
    return (
        <Row className='' style={{ padding: '80px 20px', alignItems: 'center' }}>
            <Col lg={1}></Col>

            <Col lg={5}>
                <h2>About CRC</h2>
                <p style={{ color: '#505050',lineHeight:'25px' }}> A Certified Risk Adjustment Coder (CRC) has proven by rigorous examination and experience that they know how to read a medical chart and assign the correct diagnosis (ICD-10-CM) codes for a wide variety of clinical cases and services for risk adjustment models (e.g., hierarchical condition categories (HCCs), Chronic Illness & Disability Payment System (CDPS), and U.S. Department of Health and Human Services (HHS) risk adjustment).</p>
            </Col>
            <Col lg={1}></Col>
            <Col lg={4} className='course-details'>
                    <div
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            backgroundImage: `url(${coursebg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right top',
                            backgroundSize: '27% 45%',
                            padding: '40px',
                            backgroundColor: '#e7f7f7'
                        }}
                    >
                        <h3 className="mb-3" style={{ fontWeight: 'bold', color: '#2d3e50' }}>Course Details</h3>
                        <div>
                            <Row className="mb-2">
                                <Col><p><strong>Duration</strong></p></Col>
                                <Col className="text-start"><p>45 Days</p></Col>
                            </Row>
                            <Row className="mb-2">
                                <Col><p><strong>Languages</strong></p></Col>
                                <Col className="text-start"><p>English, Tamil</p></Col>
                            </Row>
                            <Row className="">
                                <Col><p><strong>Batches</strong></p></Col>
                                <Col className="text-start"><p>Weekdays, Weekends -ONLINE/OFFLINE</p></Col>
                            </Row>
                        </div>
                    </div>
                    <Col className='home-btn mt-4' style={{width:'170px'}}>
                        <Link to="/contact" className="button-animation">
                            Enroll Now
                        </Link>
                    </Col>
                </Col>
            <Col lg={1}></Col>
        </Row>   
    )
}

export default AboutCRC 