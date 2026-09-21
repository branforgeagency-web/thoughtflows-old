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


    const showSmallFooter = location.pathname === '/' || location.pathname === '/home';

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
                                    href="/#register"
                                    role="button"
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
                    <Col lg={1} className="text-start mb-4 mb-lg-0">
                        <p className="fs-5 fw-bold">LINKS</p>
                        <hr className="text-left" style={{ width: '60px', borderColor: '#FFFFFF' }} />
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <Link to="/" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">Home</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/about" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">About us</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/blog" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">Blog</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/ourteam" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">Our team</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/placements" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">Placements</Link>
                            </li>

                            <li className="mb-3">
                                <Link to="/contact" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">Contact</Link>
                            </li>

                        </ul>
                    </Col>
                    {/* <Col lg={0.5}></Col> */}
                    {/* <Col lg={2} md={6} className="text-left mb-4 mb-lg-0">
                        <p className="fs-5 fw-bold">Quick Links</p>
                        <hr className="text-left" style={{ width: '60px', borderColor: '#FFFFFF' }} />
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <Link to="/" className="text-decoration-none text-light">Home</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/about" className="text-decoration-none text-light">About</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/blog" className="text-decoration-none text-light">Blog</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/contact" className="text-decoration-none text-light">Contact</Link>
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
                                <Link to="/cpc" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CPC</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/cic" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CIC</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/cpma" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CPMA</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/coc" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">COC</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/crc" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CRC</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/cpb" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CPB</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/cedc" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CEDC</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/cemc" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CEMC</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/cdeo" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CDEO</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/cdei" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CDEI</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/cppm" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CPPM</Link>
                            </li>

                        </ul>
                    </Col>

                    <Col lg={1} className="text-start mb-4 mb-lg-0">
                        <p className="fs-5 fw-bold">Speciality</p>
                        <hr className="text-left" style={{ width: '60px', borderColor: '#FFFFFF' }} />
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <Link to="/surgery" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">Surgery</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/ed" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">ED</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/em" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">EM</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/radiology" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">Radiology</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/anesesthesia" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">Anesthesia</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/ip-drg" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">IP DRG</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/hcc" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">HCC</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/ivr" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">IVR</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/cdi" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CDI</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={1} className="text-start mb-4 mb-lg-0">
                        <p className="fs-5 fw-bold">AHIMA</p>
                        <hr className="text-left" style={{ width: '60px', borderColor: '#FFFFFF' }} />
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <Link to="/ccs" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CCS</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/ccs-p" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CCS-P</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/rhia" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">RHIA</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/rhit" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">RHIT</Link>
                            </li>

                        </ul>
                    </Col>
                    <Col lg={1} className="text-start mb-4 mb-lg-0">
                        <p className="fs-5 fw-bold">HIMAA</p>
                        <hr className="text-left" style={{ width: '60px', borderColor: '#FFFFFF' }} />
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <Link to="/ccc" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">CCC</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/him" className="text-decoration-none text-light relative transition-all duration-300 hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:transition-all hover:after:duration-300">HIM</Link>
                            </li>



                        </ul>
                    </Col>

                    {/* <Col lg={0.5}></Col> */}
                    <Col lg={2} className="text-start mb-4 mb-lg-0">
                        <p className="fs-5 fw-bold">Contact</p>
                        <hr className="" style={{ width: '60px', borderColor: '#FFFFFF' }} />
                        <div className="d-flex align-items-center mb-2">
                            <i className="fas fa-phone text-white me-2"></i>
                            <a
                                href="tel:+919384576852"
                                style={{ textDecoration: 'none', color: 'white' }}
                            >
                                +91-9384576852
                            </a>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fas fa-envelope text-white me-2"></i>
                            <a
                                href="mailto:info@thoughtflows.in"
                                style={{ textDecoration: 'none', color: 'white' }}
                            >
                                info@thoughtflows.in
                            </a>
                        </div>
                        <div className="d-flex gap-3 mt-4">
                            <a href="https://www.instagram.com/thought_flows/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-light">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="https://www.facebook.com/Thoughtflowsacademy/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-light">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="https://linkedin.com/company/thoughtflows-medical-coding-academy" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-light">
                                <i className="fab fa-linkedin fa-lg"></i>
                            </a>
                            <a href="https://youtube.com/@thoughtflowsmedicalcodinga6330" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="text-light">
                                <i className="fab fa-youtube fa-lg"></i>
                            </a>
                        </div>
                    </Col>
                </Container>
            </div>

            <div className="bg-light text-center py-2">
                <p className="mb-0" style={{ fontSize: '14px' }}>
                    &copy; 2026 Thoughtflows. All rights reserved.
                </p>
            </div>
        </>
    );
};

export default Footer;
