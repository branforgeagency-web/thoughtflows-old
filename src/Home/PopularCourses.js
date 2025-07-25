import React, { useRef } from 'react';
import gradientbg from '../images/yellow_and_purple_pastel_gradient.png';
import cic from '../images/cic.png';
import cpc from '../images/cpc.png';
import surgery from '../images/surgery.png';
import radio from '../images/radio.png';
import anasthesia from '../images/anasthesia.png';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const slidesContent = [
    { image: cpc, text: 'Certified Professional Coder', week: 3, rating: 5, chip: 'CPC', link: '/cpc' },
    { image: surgery, text: 'Surgery Department', week: 12, rating: 5, chip: 'SD', link: '/surgery' },
    { image: cic, text: 'Certified Inpatient Coder', week: 3, rating: 5, chip: 'CIC', link: '/cic' },
    { image: anasthesia, text: 'Anaesthesia Department', week: 10, rating: 5.0, chip: 'AD', link: '/Anesesthesia' },
    { image: radio, text: 'Radiology Department', week: 3, rating: 5, chip: 'RD', link: '/radiology' }
];


const PopularCourses = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -360, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' });
        }
    };

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

                <div className="position-relative">
                    {/* Left Arrow */}
                    <button
                        className="arrow-btn left-arrow"
                        onClick={scrollLeft}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '-15px',
                            transform: 'translateY(-50%)',
                            background: '#15aeb8',
                            border: 'none',
                            borderRadius: '50%',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            zIndex: 1,
                            cursor: 'pointer'
                        }}
                    >
                        &larr;
                    </button>

                    {/* Carousel */}
                    <div
                        ref={carouselRef}
                        className="slideshow mb-5"
                        style={{
                            display: 'flex',
                            overflowX: 'hidden',
                            scrollBehavior: 'smooth',
                            gap: '12px',
                            paddingBottom: '10px',
                            scrollbarWidth: 'none', 
                            msOverflowStyle: 'none' 
                        }}
                    >
                        {slidesContent.map((slide, idx) => (
                            <div
                                className="slide d-flex flex-column align-items-center mx-2"
                                key={idx}
                                style={{
                                    minWidth: '350px',
                                    maxWidth: '400px',
                                    background: '#e1f5f9',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '8px',
                                    padding: '20px',
                                    position: 'relative',
                                    scrollSnapAlign: 'start'
                                }}
                            >
                                <img src={slide.image} alt={slide.text} style={{ width: '100%', borderRadius: '8px' }} />

                                <Link to={slide.link} className="small-chip text-start text-decoration-none" style={{ width: '20%', marginTop: '-25px' }}>
    <p style={{ margin: '0px', color: '#fff', fontWeight: 'bold' }}>{slide.chip}</p>
</Link>


                                <div className="d-flex justify-content-between w-100">
                                    <h2 style={{ fontSize: '20px' }}>{slide.text}</h2>
                                </div>

                                <div className="d-flex justify-content-between w-100">
                                    <div className="text-start mb-3 star-rating col-lg-7">
                                        {[...Array(Math.floor(slide.rating))].map((star, i) => (
                                            <span 
                                                key={i} 
                                                className="text-warning"
                                                style={{
                                                    animation: `starGlow ${2 + i * 0.3}s infinite`,
                                                    animationDelay: `${i * 0.15}s`,
                                                    display: 'inline-block',
                                                    fontSize: '20px',
                                                    marginRight: '4px',
                                                    filter: 'drop-shadow(0 0 2px rgba(255, 193, 7, 0.7))',
                                                    color: '#ffc107',
                                                    textShadow: '0 0 5px rgba(255, 193, 7, 0.5)'
                                                }}
                                            >
                                                &#9733;
                                            </span>
                                        ))}
{slide.rating % 1 > 0 && (
  <span 
    className="text-warning"
    style={{
      animation: `starGlow 3s infinite alternate cubic-bezier(0.455, 0.03, 0.515, 0.955)`,
      display: 'inline-block',
      fontSize: '22px',
      marginRight: '4px',
      color: '#ffcc00',
      textShadow: `
        0 0 4px rgba(255, 204, 0, 0.8),
        0 0 8px rgba(255, 204, 0, 0.6),
        0 0 12px rgba(255, 204, 0, 0.4),
        0 0 16px rgba(255, 170, 0, 0.3)
      `,
      position: 'relative',
      filter: `
        brightness(1.2)
        drop-shadow(0 0 3px rgba(255, 255, 0, 0.7))
      `,
      transform: 'translateZ(0)',
      willChange: 'filter, text-shadow, transform',
    }}
  >
    &#9734;
  </span>
)}
                                        <style>
                                            {`
                                                @keyframes starGlow {
                                                    0% { 
                                                        opacity: 1;
                                                        filter: drop-shadow(0 0 2px rgba(255, 193, 7, 0.7));
                                                    }
                                                    50% { 
                                                        opacity: 0.9;
                                                        filter: drop-shadow(0 0 8px rgba(255, 193, 7, 0.9));
                                                    }
                                                    100% { 
                                                        opacity: 1;
                                                        filter: drop-shadow(0 0 2px rgba(255, 193, 7, 0.7));
                                                    }
                                                }
                                            `}
                                        </style>
                                    </div>
                                    <div className="mb-3 col-lg-5">
                                        <Link className="courses-btn no-underline" to="/contact"> Apply Now &rarr;</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        className="arrow-btn right-arrow"
                        onClick={scrollRight}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '-15px',
                            transform: 'translateY(-50%)',
                            background: '#15aeb8',
                            border: 'none',
                            borderRadius: '50%',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            zIndex: 1,
                            cursor: 'pointer'
                        }}
                    >
                        &rarr;
                    </button>
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
