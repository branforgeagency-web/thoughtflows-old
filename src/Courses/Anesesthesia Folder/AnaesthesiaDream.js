import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import the CSS for the timeline

import { FaFileSignature, FaChalkboardTeacher, FaLaptop, FaUserTie } from 'react-icons/fa';

const dreamData = [
    {
        "title": "Enroll in Anesesthesia Coding Training",
        "description": "Join Thoughtflows to kickstart your career in Anesesthesia coding with expert-led training.",
        "icon": <FaFileSignature /> // File signature icon for "Enroll in Anesesthesia Coding Training"
    },
    {
        "title": "Comprehensive Learning: Live classes, videos, and real-world case studies",
        "description": "Engage in live sessions, videos, and case studies that cover all aspects of Anesesthesia coding.",
        "icon": <FaChalkboardTeacher /> // Teacher icon for "Comprehensive Learning"
    },
    {
        "title": "Expert Guidance: Specialized training to master Anesesthesia coding",
        "description": "Receive expert guidance and specialized training to master Anesesthesia coding techniques.",
        "icon": <FaLaptop /> // Laptop icon for "Expert Guidance"
    },
    {
        "title": "Career Support: Resume building, mock interviews, and placement assistance",
        "description": "Prepare for interviews with resume building, mock interviews, and placement support.",
        "icon": <FaUserTie /> // Businessperson icon for "Career Support"
    }
];


const AnaesthesiaDream = () => {
    return (
        <div className="timeline-container bg-gray-100  px-3 py-12 lg:py-24">
            <h2 className="text-center mb-8 text-3xl font-semibold text-secondaryy">Get Your Dream Job</h2>
            <VerticalTimeline>
                {dreamData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#4da9b3', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid #4da9b3' }}
                        iconStyle={{ background: '#4da9b3', color: '#fff' }}
                        icon={item.icon} // Assigning the icon from data
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <p className='font-light'>{item.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default AnaesthesiaDream;
