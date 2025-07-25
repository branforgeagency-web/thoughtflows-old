import React from 'react';
import { Row } from 'react-bootstrap';
import excellenceimg from '../../images/Courses/excellence.png';
import careeradv from '../../images/Courses/career-advancement.png';
import handson from '../../images/Courses/hands-on-experience.png';

const cardData = [
    {
        "id": 1,
        "image": excellenceimg,
        "title": "Expert Trainers",
        "description": "Learn from experienced, AAPC-certified instructors with real-world experience.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 2,
        "image": careeradv,
        "title": "Interactive Learning",
        "description": "Engage with live sessions, case studies, and video tutorials.",
        "className": "col-lg-3 col-sm-12 active",
        "descriptionClass": "text-light",
        "headingClass": "text-white"
    },
    {
        "id": 3,
        "image": handson,
        "title": "Flexible Scheduling",
        "description": "Weekday and weekend batches to suit your availability.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 4,
        "image": handson,
        "title": "Placement Support",
        "description": "Get assistance with resume building, mock interviews, and job placement in top healthcare organizations.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    }
];




const WhyChoose = () => {
    return (
        <>
            <div className='pt-10'>

                <div><h2 className="text-center mt-3 text-3xl font-semibold text-secondaryy">Why Thoughtflows is the Best Choice?</h2></div>
                <Row className="why-cpc" xs={1} md={3} lg={4}>
                    {cardData.map((card) => (
                        <div key={card.id} className={`card ${card.className}`}>
                            <div className="icon" style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                                <img src={card.image} alt={card.title} />
                                <h3 className={card.headingClass}>{card.title}</h3>
                            </div>

                            <p className={card.descriptionClass}>{card.description}</p>
                        </div>
                    ))}
                </Row>
            </div>
        </>
    );
};

export default WhyChoose;

