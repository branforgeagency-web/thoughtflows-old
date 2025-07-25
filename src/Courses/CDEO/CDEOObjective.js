import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Arrow from '../../images/next.png';

const CRCObjective = () => {
  return (
    <>
    <Row className='crc-objective align-items-center'>
    <Col lg={1}></Col>
                <Col lg={10}>
                    <div><h2 className='text-left mt-3'>Course Objective</h2></div>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            Review and assign accurate medical codes for diagnoses performed by physicians and other qualified healthcare providers in the office or facility setting.
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            Thoroughly comprehend medical coding guidelines and regulations including compliance and reimbursement and the impact of diagnosis coding on risk adjustment payment models.
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            Understand the audit process for risk adjustment models.
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            Identify and communicate documentation deficiencies to providers to improve documentation for accurate risk adjustment coding.
                        </li>
                        <li>
                            <img src={Arrow} alt="arrow" style={{ width: '15px', marginRight: '10px' }} />
                            Understand the anatomy, pathophysiology, and medical terminology necessary to correctly code diagnoses.
                        </li>
                    </ul>
                </Col>
                <Col lg={1}></Col>
    </Row>
    </>
  )
}

export default CRCObjective