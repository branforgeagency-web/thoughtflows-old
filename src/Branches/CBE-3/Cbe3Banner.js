import React from 'react'
import bannerImage from '../../images/homebannerbg.png'
import cbe1banner from '../../images/Branches/6.png'
import { Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import { Col } from 'react-bootstrap'

const Cbe2Banner = () => {
    return (
        <>
            <Row className='cbe1-banner'
                style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '95vh',
                    alignItems: 'center',
                    padding: '2rem 0'
                }}
            >
                <Col lg={1} xs={0}></Col>
                <Col lg={5} md={6} sm={12} className='cbe1-banner-lft px-4 py-3'>
                    <Col className='cbe1-banner-heading'>
                        <h2 className='responsive-heading' style={{ 
                            fontSize: 'clamp(28px, 5vw, 40px)',
                            lineHeight: '1.2',
                            marginBottom: '0.5rem'
                        }}>Medical Coding </h2>
                        <h2 className='responsive-heading' style={{ 
                            fontSize: 'clamp(28px, 5vw, 40px)',
                            lineHeight: '1.2'
                        }}>Academy in <span style={{ color: '#097D8A' }}>Gandhipuram</span></h2>
                    </Col>
                    <Col>
                        <p style={{ 
                            fontSize: 'clamp(14px, 2vw, 16px)', 
                            marginTop: '20px',
                            lineHeight: '1.6'
                        }}>Unlock your medical coding career in Coimbatore at our premier academy. Learn, excel, and seize endless opportunities.</p>
                    </Col>
                    <Col className='cbe1-btn m-20 '>
                        <Link to="/contact" className="button-animation ">
                            Register Now
                        </Link>
                    </Col>
                </Col>

                <Col lg={5} md={6} sm={12} className='cbe1-banner-rht pt-md-28 pt-4 px-4'>
                    <img 
                        src={cbe1banner} 
                        alt='Medical Coding Academy Banner' 
                        className='bannergif'
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            display: 'block',
                            margin: '0 auto'
                        }}
                    />
                </Col>
                <Col lg={1} xs={0}></Col>
            </Row>
            <Container fluid className='px-3'>
                <div className='cbe1-counter mx-auto'
                    style={{
                        background: '#fff',
                        borderRadius: 'clamp(20px, 5vw, 80px)',
                        boxShadow: '0 3px 15px 0 rgba(0, 0, 0, 0.13)',
                        marginTop: '-40px',
                        padding: 'clamp(15px, 3vw, 20px)',
                        zIndex: 2,
                        position: 'relative',
                        maxWidth: '1200px'
                    }}>
                    <Row className="align-items-center">
                        <Col lg={12}>
                            <Row className="gy-4">
                                <Col xs={6} md={3} className="text-center">
                                    <p style={{ 
                                        color: '#FFC100', 
                                        fontWeight: '700', 
                                        fontSize: 'clamp(20px, 4vw, 30px)', 
                                        margin: 0 
                                    }}>
                                        <CountUp start={0} end={30000} separator="," />+
                                    </p>
                                    <p style={{ 
                                        fontWeight: '500', 
                                        fontSize: 'clamp(16px, 3vw, 20px)', 
                                        marginTop: 0 
                                    }}>Training</p>
                                </Col>
                                <Col xs={6} md={3} className="text-center">
                                    <p style={{ 
                                        color: '#F15BB5', 
                                        fontWeight: '700', 
                                        fontSize: 'clamp(20px, 4vw, 30px)', 
                                        margin: 0 
                                    }}>
                                        <CountUp start={0} end={18000} separator="," />+
                                    </p>
                                    <p style={{ 
                                        fontWeight: '500', 
                                        fontSize: 'clamp(16px, 3vw, 20px)', 
                                        marginTop: 0 
                                    }}>Placement</p>
                                </Col>
                                <Col xs={6} md={3} className="text-center">
                                    <p style={{ 
                                        color: '#00BBFA', 
                                        fontWeight: '700', 
                                        fontSize: 'clamp(20px, 4vw, 30px)', 
                                        margin: 0 
                                    }}>
                                        <CountUp start={0} end={20} separator="," />+
                                    </p>
                                    <p style={{ 
                                        fontWeight: '500', 
                                        fontSize: 'clamp(16px, 3vw, 20px)', 
                                        marginTop: 0 
                                    }}>Courses</p>
                                </Col>
                                <Col xs={6} md={3} className="text-center">
                                    <p style={{ 
                                        color: '#01F6D5', 
                                        fontWeight: '700', 
                                        fontSize: 'clamp(20px, 4vw, 30px)', 
                                        margin: 0 
                                    }}>
                                        <CountUp start={0} end={11} separator="," />+
                                    </p>
                                    <p style={{ 
                                        fontWeight: '500', 
                                        fontSize: 'clamp(16px, 3vw, 20px)', 
                                        marginTop: 0 
                                    }}>Branches</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Cbe2Banner