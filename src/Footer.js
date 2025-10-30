import React, { useState } from 'react';
import footerbg from '../src/images/footerbg.png';
import footerlogo from '../src/images/image7.png';
import { Col, Container, Row } from 'react-bootstrap';
import footerSmall from '../src/images/Bgsmallfooter.png';
import { Link, useLocation } from 'react-router-dom';
import ZoomSignupForm from './Zoom';

const Footer = () => {
    const [showZoomPopup, setShowZoomPopup] = useState(false);
    const location = useLocation();

    const excludedPaths = ['/about','/ourteam', '/contact', "/blog", "/blog1", "/blog2", "/blog3","/blog4","/blog5","/blog6","/blog7", "/cpc", "/cic", "/coc", "/cpma", "/crc", "/surgery", "/cbe-1", "/trichy", "/tirupathi", "/trivandrum", "/cbe-2", "/hyderabad", "/kochi", "/ed", "/em", "/radiology", "/anaesthesia","/ip-drug", "/ccs", "/ccsp", "/rhia", "/rhit", "/clinical-coder", "/him" ];

    const showSmallFooter = !excludedPaths.includes(location.pathname);

    const handleRegisterClick = (e) => {
        e.preventDefault();
        setShowZoomPopup(true);
    };

    return (
        <>
            {/* Zoom Popup */}
            {showZoomPopup && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-[99999] flex items-center justify-center"
                    onClick={() => setShowZoomPopup(false)}
                >
                    <div onClick={e => e.stopPropagation()}>
                        <ZoomSignupForm onClose={() => setShowZoomPopup(false)} />
                    </div>
                </div>
            )}

            <div
                className="footer-section"
                style={{
                    backgroundImage: `url(${footerbg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    zIndex: 1,
                    position: 'relative',
                }}
            >
                {showSmallFooter && (
                    <Container
                        className="small-footer"
                        style={{
                            backgroundImage: `url(${footerSmall})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            marginTop: '-190px',
                            zIndex: 2,
                            position: 'relative',
                            padding: '50px 20px',
                            borderRadius: '10px'
                        }}
                    >
                        <Row className="d-flex align-items-center text-center">
                            <Col lg={8}>
                                <h2 className="fw-light text-center">Sign Up For a</h2>
                                <h2 className="fw-bold">Free Trial Lesson by Zoom</h2>
                            </Col>
                            <Col className="home-btn p-1" lg={2}>
                                <a 
                                    className=" button-animation" 
                                    onClick={handleRegisterClick}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Register Now
                                </a>
                            </Col>
                        </Row>
                    </Container>
                )}

                <Container className="justify-content-between mt-5 main-footer">
                    <Col lg={4} className="text-left mb-4 mb-lg-0">
                        <img src={footerlogo} alt="footer logo" className="footerlogo mb-3" />
                        <p className="fw-light text-start">
                            Enroll at Thoughtflows Medical Coding Academy for top-notch medical coding training.
                            Our courses are designed to provide comprehensive education and practical experience,
                            ensuring students become proficient and certified medical coders.
                        </p>
                    </Col>
                    <Col lg={1}className="text-start mb-4 mb-lg-0">
                        <p className="fs-5 fw-bold">LINKS</p>
                        <hr className="text-left" style={{ width: '60px', borderColor: '#FFFFFF' }} />
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <a href="/home" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">Home</a>
                            </li>
                            <li className="mb-3">
                                <a href="/about" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">About us</a>
                            </li>
                            <li className="mb-3">
                                <a href="/blog" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">Blog</a>
                            </li>
                            <li className="mb-3">
                                <a href="/ourteam" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">Our team</a>
                            </li>
                        
                            <li className="mb-3">
                                <a href="/contact" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">Contact</a>
                            </li>
                           
                        </ul>
                    </Col>
                    {/* <Col lg={0.5}></Col> */}
                    {/* <Col lg={2} md={6} className="text-left mb-4 mb-lg-0">
                        <p className="fs-5 fw-bold">Quick Links</p>
                        <hr className="text-left" style={{ width: '60px', borderColor: '#FFFFFF' }} />
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <a href="/home" className="text-decoration-none text-light">Home</a>
                            </li>
                            <li className="mb-3">
                                <a href="/about" className="text-decoration-none text-light">About</a>
                            </li>
                            <li className="mb-3">
                                <a href="/blog" className="text-decoration-none text-light">Blog</a>
                            </li>
                            <li className="mb-3">
                                <a href="/contact" className="text-decoration-none text-light">Contact</a>
                            </li>
                        </ul>
                    </Col> 

                    <Col lg={1} className="text-start mb-4 mb-lg-0">
                        {/* <p className="fs-5 fw-bold">Address</p>
                        <hr className="" style={{ width: '60px', borderColor: '#FFFFFF' }} />
                        <p className="text-start fw-light mt-3">
                            9/2, 2nd floor, Doctors colony,<br />
                            Dr.Radhakrishnan road,<br />
                            Gandhipuram,<br />
                            Coimbatore - 641012.
                        </p> */}
                        <Col lg={1} className="text-start mb-4 mb-lg-0">
                        <p className="fs-5 fw-bold">AAPC</p>
                        <hr className="text-left" style={{ width: '60px', borderColor: '#FFFFFF' }} />
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <a href="/cpc" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CPC</a>
                            </li>
                            <li className="mb-3">
                                <a href="/cic" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CIC</a>
                            </li>
                            <li className="mb-3">
                                <a href="/cpma" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CPMA</a>
                            </li>
                            <li className="mb-3">
                                <a href="/coc" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">COC</a>
                            </li>
                            <li className="mb-3">
                                <a href="/crc" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CRC</a>
                            </li>
                            <li className="mb-3">
                                <a href="/cpb" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CPB</a>
                            </li>
                            <li className="mb-3">
                                <a href="/cedc" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CEDC</a>
                            </li>
                            <li className="mb-3">
                                <a href="/cemc" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CEMC</a>
                            </li>
                            <li className="mb-3">
                                <a href="/cdeo" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CDEO</a>
                            </li>
                            <li className="mb-3">
                                <a href="/cdei" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CDEI</a>
                            </li>
                            <li className="mb-3">
                                <a href="/cppm" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CPPM</a>
                            </li>
                            
                        </ul>
                    </Col>

                    <Col lg={1} className="text-start mb-4 mb-lg-0">
                        <p className="fs-5 fw-bold">Speciality</p>
                        <hr className="text-left" style={{ width: '60px', borderColor: '#FFFFFF' }} />
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <a href="/surgery" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">Surgery</a>
                            </li>
                            <li className="mb-3">
                                <a href="/ed" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">ED</a>
                            </li>
                            <li className="mb-3">
                                <a href="/em" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">EM</a>
                            </li>
                            <li className="mb-3">
                                <a href="/radiology" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">Radiology</a>
                            </li>
                            <li className="mb-3">
                                <a href="/anesthesia" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">Anesthesia</a>
                            </li>
                            <li className="mb-3">
                                <a href="/ip-drg" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">IP DRG</a>
                            </li>
                            <li className="mb-3">
                                <a href="/hcc" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">HCC</a>
                            </li>
                            <li className="mb-3">
                                <a href="/ivr" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">IVR</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={1}className="text-start mb-4 mb-lg-0">
                        <p className="fs-5 fw-bold">AHIMA</p>
                        <hr className="text-left" style={{ width: '60px', borderColor: '#FFFFFF' }} />
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <a href="/ccs" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CCS</a>
                            </li>
                            <li className="mb-3">
                                <a href="/ccs-p" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CCS-P</a>    
                            </li>
                            <li className="mb-3">
                                <a href="/rhia" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">RHIA</a>
                            </li>
                            <li className="mb-3">
                                <a href="/rhit" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">RHIT</a>
                            </li>
                           
                        </ul>
                    </Col>
                    <Col lg={1}className="text-start mb-4 mb-lg-0">
                        <p className="fs-5 fw-bold">HIMAA</p>
                        <hr className="text-left" style={{ width: '60px', borderColor: '#FFFFFF' }} />
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <a href="/ccc" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CCC</a>
                            </li>
                            <li className="mb-3">
                                <a href="/him" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">HIM</a>
                            </li>
                    
                        
                           
                        </ul>
                    </Col>
                   
                    {/* <Col lg={0.5}></Col> */}
                    <Col lg={2}className="text-start mb-4 mb-lg-0">
                        <p className="fs-5 fw-bold">Contact</p>
                        <hr className="" style={{ width: '60px', borderColor: '#FFFFFF' }} />
                        <div className="d-flex align-items-center mb-2">
                            <i className="fas fa-phone text-white me-2"></i>
                            <a
                                href="tel:+919384576852"
                                style={{ textDecoration:'none', color: 'white' }}
                            >
                                +91-9384576852
                            </a>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fas fa-envelope text-white me-2"></i>
                            <a
                                href="mailto:info@thoughtflows.in"
                                style={{ textDecoration:'none', color: 'white' }}
                            >
                                info@thoughtflows.in
                            </a>
                        </div>
                        <div className="d-flex gap-3 mt-4">
                            <a href=" https://www.instagram.com/thought_flows/" target="_blank" rel="noopener noreferrer" className="text-light">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="https://www.facebook.com/Thoughtflowsacademy/" target="_blank" rel="noopener noreferrer" className="text-light">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="https://x.com/thouhtflows" target="_blank" rel="noopener noreferrer" className="text-light">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="https://linkedin.com/company/thoughtflows-medical-coding-academy" target="_blank" rel="noopener noreferrer" className="text-light">
                                <i className="fab fa-linkedin fa-lg"></i>
                            </a>
                            <a href=" https://youtube.com/@thoughtflowsmedicalcodinga6330?si=9LqFshNCyUW0jAUR" target="_blank" rel="noopener noreferrer" className="text-light">
                                <i className="fab fa-youtube fa-lg"></i>
                            </a>
                        </div>
                    </Col>
                </Container>
            </div>

            <div className="bg-light text-center py-2">
                <p className="mb-0" style={{ fontSize: '14px' }}>
                    &copy; 2024 Thoughtflows. All rights reserved.
                </p>
            </div>
        </>
    );
};

export default Footer;
