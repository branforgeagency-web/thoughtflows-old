import React from 'react';
import { Row } from 'react-bootstrap';
import { mediaUrl } from '../../config/media';
const excellenceimg = mediaUrl('images/Courses/excellence.png');
const careeradv = mediaUrl('images/Courses/career-advancement.png');
const handson = mediaUrl('images/Courses/hands-on-experience.png');

const cardData = [
    {
        "id": 1,
        "image": excellenceimg,
        "title": " Expert Instructors",
        "description": "Our certified trainers have extensive industry experience and are skilled at making complex concepts easy to understand.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 2,
        "image": careeradv,
        "title": "Interactive Training",
        "description": "Live sessions, video tutorials, and interactive Q&A ensure an engaging learning experience.",
        "className": "col-lg-3 col-sm-12 active",
        "descriptionClass": "text-light",
        "headingClass": "text-white"
    },
    {
        "id": 3,
        "image": handson,
        "title": "Flexible Learning Options",
        "description": "Choose between online or offline classes with options for weekdays and weekends to fit your schedule.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 5,
        "image": careeradv,
        "title": "Comprehensive Curriculum",
        "description": "Detailed modules covering ICD-10-CM, CPT, and HCPCS Level II, along with real-world case studies and hands-on practice.",
        "className": "col-lg-3 col-sm-12 active",
        "descriptionClass": "text-light",
        "headingClass": "text-white"
    },
    {
        "id": 4,
        "image": handson,
        "title": "Placement Assistance",
        "description": "We offer resume building, mock interviews, and job placement support to help you land your dream job.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
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

