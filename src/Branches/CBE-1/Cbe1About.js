import React from 'react'
// import cbe1About from ''
import cbe1aboutbg from '../../images/Branches/cbe1Abt.png'
import cbe1About from '../../images/Branches/cbe1bannerRight.png'
import { Row, Col, Container } from 'react-bootstrap'
import CountUp from 'react-countup';
import saravanampatti from '../../images/Branches/Frame 17.png'
const Cbe1About = () => {
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
                        <h2>Embrace Your Potential with<br /> Thoughtflows</h2>
                        <p>Discover your true potential with Thoughtflows, the leading medical coding training academy in Coimbatore. Our industry-leading programs unlock the knowledge and skills you need to excel in the ever-evolving field of medical coding. Benefit from expert instructors, hands-on training, and a comprehensive curriculum tailored to your success. Start unlocking your future today.</p>
                    </Col>
                    <Col lg={5} style={{ textAlign: 'center' }}>
                        <img src={saravanampatti} alt='cbe1About' className='cbe1About' height={300} width={300} /> 
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </div >
        </>
    )
}

export default Cbe1About
