import React from 'react'
import bannerImage from '../../images/homebannerbg.png'
import saravanampatti from '../../images/Branches/4.png'
import { Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import { Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './Cbe1Banner.css'

const Cbe1Banner = () => {
    return (
        <>
            <Row className='cbe1-banner'
                style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                    backgroundRepeat: 'no-repeat',
                    height: '95vh',
                    alignItems: 'center'    
                }}
            >
                <Col lg={1} xs={0}></Col>
                <Col lg={5} xs={12} className='cbe1-banner-lft'>
                    <Col className='cbe1-banner-heading'>
                        <h2>Medical Coding Training </h2>
                        <h2>Institute in <span style={{ color: '#097D8A' }}>Saravanampatti</span></h2>
                    </Col>
                    <Col>
                        <p className="banner-description">Chart your path to success in the world of medical coding with Coimbatore's leading training institute. Transform your future now!</p>
                    </Col>
                    <Col className='cbe1-btn  m-20 '>
                        <Link to="/contact" className=" button-animation">
                            Register Now
                        </Link>
                    </Col>
                </Col>

                <Col lg={5} xs={12} className='cbe1-banner-rht'>
                    <img src={saravanampatti} alt='bannergif' className='bannergif' />
                </Col>
                <Col lg={1} xs={0}></Col>
            </Row>
            <Container fluid className='px-3'>
                <div className='cbe1-counter'
                    style={{
                        background: '#fff',
                        borderRadius: '80px',
                        boxShadow: '0 3px 15px 0 rgba(0, 0, 0, 0.13)',
                        marginTop: '-80px',
                        padding: '20px 20px 10px 20px',
                        zIndex: 2,
                        position: 'relative',
                    }}>
                    <Row className="align-items-center">
                        <Col lg={12}>
                            <Row className="gy-4">
                                <Col xs={6} md={3} className="text-center counter-item">
                                    <p className="counter-number" style={{ color: '#FFC100' }}>
                                        <CountUp start={0} end={30000} separator="," />+
                                    </p>
                                    <p className="counter-label">Training</p>
                                </Col>
                                <Col xs={6} md={3} className="text-center counter-item">
                                    <p className="counter-number" style={{ color: '#F15BB5' }}>
                                        <CountUp start={0} end={18000} separator="," />+
                                    </p>
                                    <p className="counter-label">Placement</p>
                                </Col>
                                <Col xs={6} md={3} className="text-center counter-item">
                                    <p className="counter-number" style={{ color: '#00BBFA' }}>
                                        <CountUp start={0} end={20} separator="," />+
                                    </p>
                                    <p className="counter-label">Courses</p>
                                </Col>
                                <Col xs={6} md={3} className="text-center counter-item">
                                    <p className="counter-number" style={{ color: '#01F6D5' }}>
                                        <CountUp start={0} end={11} separator="," />+
                                    </p>
                                    <p className="counter-label">Branches</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Cbe1Banner