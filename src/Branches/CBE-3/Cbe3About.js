import React from 'react'
// import cbe1About from ''
import { Row, Col, Container } from 'react-bootstrap'
import CountUp from 'react-countup';
import { mediaUrl } from '../../config/media';
const cbe1aboutbg = mediaUrl('images/Branches/cbe1Abt.png');
const cbe1About = mediaUrl('images/Branches/cbe1bannerRight.png');

const Cbe2About = () => {
    return (
        <>
            <div style={{
                backgroundImage: `url(${cbe1aboutbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
                backgroundRepeat: 'no-repeat',
            }}>
              

                <Row className='cbe1-about'>
                    <Col lg={1}></Col>
                    <Col lg={5}>
                        <h2>Coimbatore's Trusted Medical Coding Institute</h2>
                        <p>Thoughtflows Medical Coding Academy is the leading institute in Coimbatore for medical coding education. We are committed to equipping healthcare professionals with the knowledge, skills, and confidence necessary to thrive in the medical coding field. With expert faculty, strong industry connections, and advanced resources, we provide the highest quality education and support every step of the way. Trust us to guide you on your path to success.</p>
                    </Col>
                    <Col lg={5} style={{ textAlign: 'center' }}>
                        <img src={cbe1About} alt='cbe1About' className='cbe1About h-1/2' />
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </div >
        </>
    )
}

export default Cbe2About
