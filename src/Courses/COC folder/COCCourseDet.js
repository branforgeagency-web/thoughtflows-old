import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Arrow from '../../images/next.png';
import coursebg from '../../images/coursebg.png'

const COCCourseDet = () => {
    return (
        <>
            <Row className='coc-study-material align-items-center'>
                <Col lg={1}></Col>
                <Col lg={5}>
                    <div><h2 className='text-left mt-3'>COC Study Materials</h2></div>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            Anatomy, Physiology & Pathology Training Manual - Included
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            Advanced Certification in Medical Coding Training Manual- Included
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            COC Sample Exam Preparations Question Papers - Included
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            COC previous years Question paper with rationale and Answers - Included
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            E&M Sample charts and coding scenarios for OP/IP/ER-ED - Included
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            Tips to Clear COC Exam in Single attempt by expert advice.
                        </li>
                    </ul>
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
                                <Col className="text-start"><p>60 Days</p></Col>
                            </Row>
                            <Row className="mb-2">
                                <Col><p><strong>Class Type</strong></p></Col>
                                <Col className="text-start"><p>ONLINE/OFFLINE</p></Col>
                            </Row>
                            <Row className="">
                                <Col><p><strong>Batches</strong></p></Col>
                                <Col className="text-start"><p>Weekdays, Weekends</p></Col>
                            </Row>
                        </div>
                    </div>
                    <Col className='home-btn mt-4' style={{ width: '170px' }}>
                        <a class="button-animation" href="/contact">
                            Enroll Now
                        </a>
                    </Col>
                </Col>

                <Col lg={1}></Col>
            </Row>
        </>
    )
}

export default COCCourseDet