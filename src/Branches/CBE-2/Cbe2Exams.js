import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import pathology from '../../images/Branches/Pathology.jpg';
import radiology from '../../images/Branches/Radiology.jpg';


const Cbe2Exams = () => {
    const properties = [
        { label: 'Digestive system', image: `${radiology}` },
        { label: 'Musculoskeletal system', image: `${pathology}` },
        { label: 'Cardiovascular system', image: `${radiology}` },
        { label: 'Respiratory system', image: `${pathology}` },
        { label: 'Nervous system', image: `${pathology}` },
        { label: 'Urinary system', image: `${radiology}` },
        { label: 'Endocrine system', image: `${pathology}` },
        { label: 'Reproductive system', image: `${radiology}` },
        { label: 'EYE', image: `${pathology}` },
        { label: 'ENT', image: `${radiology}` },
        { label: 'Integumentary system', image: `${pathology}` },
        { label: 'Blood & Lymphatic system', image: `${radiology}` },
        { label: '!CD - 10', image: `${pathology}` },
        { label: 'Radiology', image: `${radiology}` },
        { label: 'Pathology', image: `${pathology}` },
    ];

    // Slider settings
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <button className="next-arrow" >&rarr;</button>,
        prevArrow: <button className="prev-arrow" >&larr;</button>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='tirupathi-online-exams' style={{padding:'70px 30px 70px 30px'}}>
            <h2 className="text-center">Online Exams</h2>
            <Slider {...sliderSettings}>
                {properties.map((property, index) => (
                    <div key={index} className="tirupathi-exams-cards">
                        <img
                            src={property.image}
                            alt={property.label}
                            className="tirupathi-exams-card-image"
                        />
                        <div className="tirupathi-exams-card-label">
                            <a href='https://thoughtflows.onlinetestpanel.com/' target='_blank' rel='noopener noreferrer'><p>{property.label}</p></a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Cbe2Exams;
