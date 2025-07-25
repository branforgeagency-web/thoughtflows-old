import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Arrow from '../../images/next.png';
import cpmaabt from '../../images/Courses/CPMAPIC.jpg'

const CPMAAbout = () => {
    return (
        <>
            <Row className='cpma-study-material align-items-center'>
                <Col lg={1}></Col>
                <Col lg={4}>
                    <img src={cpmaabt} style={{ width: '100%', height: "350px", objectFit: "cover" }} alt="cpcbanner " />
                </Col>
                <Col lg={1}></Col>
                <Col lg={5}>
                    <div><h2 className='text-left mt-3'>Features of CPMA Training</h2></div>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            Our training program exclusively prepares students for CPMA (AAPC) certification.
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            Our training methodology and placement process meet ISO 9001:2008 certification standards
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            Our program covers all requirements of the medical coding industry.
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            We provide comprehensive training on ICD-10 CM, CPT-4, and HCPCS.
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            Our RCM training adheres to HIPAA regulations.
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            Our experienced trainers deliver engaging video lessons on anatomy and physiology.
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            During completion, candidates get course certification. standards.
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            CPMA is a promising career path for those planning to work abroad in countries like UAE, Canada, and Australia.
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            We guarantee placement assistance to our trained candidates.
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            Completing our CPMA exam training qualifies candidates to take certification exams like CPC, CCA, and more, offered by AHIMA and AAPC.
                        </li>
                    </ul>
                </Col>
                <Col lg={1}></Col>
            </Row>
        </>
    )
}

export default CPMAAbout