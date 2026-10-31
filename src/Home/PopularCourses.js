import React, { useState } from 'react';
import gradientbg from '../images/yellow_and_purple_pastel_gradient.png';
import cic from '../images/cic.png';
import cpc from '../images/cpc.png';
import surgery from '../images/surgery.png';
import radio from '../images/radio.png';
import anasthesia from '../images/anasthesia.png';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const slidesContent = [
    { image: cpc, text: 'Certified Professional Coder', chip: 'CPC', link: '/cpc',
      desc: "AAPC's outpatient credential — CPT, ICD-10-CM and HCPCS coding for physician services." },
    { image: surgery, text: 'Surgery Department', chip: 'SD', link: '/surgery',
      desc: 'Specialty training in coding surgical procedures across body systems with real chart practice.' },
    { image: cic, text: 'Certified Inpatient Coder', chip: 'CIC', link: '/cic',
      desc: "AAPC's inpatient facility credential — ICD-10-CM/PCS coding and DRG assignment." },
    { image: anasthesia, text: 'Anesthesia Department', chip: 'AD', link: '/Anesthesia',
      desc: 'Code anesthesia services accurately — base units, time, modifiers and physical status.' },
    { image: radio, text: 'Radiology Department', chip: 'RD', link: '/radiology',
      desc: 'Diagnostic and interventional radiology coding with hands-on case practice.' },
];

const PopularCourses = () => {
    const [active, setActive] = useState(0);

    return (
        <div
            className="popular-courses py-5"
            style={{
                backgroundImage: `url(${gradientbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Container>
                <Row className="text-center text-lg-start mb-4">
                    <Col>
                        <h5 className="text-uppercase pt-4">Thoughtflows Academy</h5>
                        <h2>Your Path to Success in Medical Coding</h2>
                    </Col>
                </Row>

                <div className="tf-pc-row">
                    {slidesContent.map((slide, idx) => {
                        const isActive = idx === active;
                        return (
                            <div
                                key={slide.chip}
                                className={`tf-pc-card ${isActive ? 'is-active' : ''}`}
                                onMouseEnter={() => setActive(idx)}
                                onFocus={() => setActive(idx)}
                                onClick={() => setActive(idx)}
                            >
                                <span className="tf-pc-blob" aria-hidden="true" />
                                <div className="tf-pc-text">
                                    <span className="tf-pc-chip">{slide.chip}</span>
                                    <h3 className="tf-pc-title">{slide.text}</h3>
                                    <p className="tf-pc-desc">{slide.desc}</p>
                                    <div className="tf-pc-foot">
                                        <Link to={slide.link} className="tf-pc-more">Read More</Link>
                                        <Link to={slide.link} className="tf-pc-arrow" aria-label={`Open ${slide.text}`}>
                                            <svg className="tf-pc-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M5 12h14M13 6l6 6-6 6" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="tf-pc-media">
                                    <img src={slide.image} alt={slide.text} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>

            <div className="small-column d-flex justify-content-center mx-auto" style={{ maxWidth: '650px' }}>
                <div className="col-lg-8 d-flex align-items-center justify-content-center">
                    <p className="mb-0">20+ more skillful courses you can explore</p>
                </div>
                <div className="col-lg-4 text-center home-btn">
                    <Link className="button-animation" to="/contact">
                        Explore
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopularCourses;
