import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import the CSS for the timeline

import { FaClipboardList, FaChalkboardTeacher, FaLaptop, FaUserTie } from 'react-icons/fa';

const dreamData = [
    {
        "title": "Enroll in our ED Coding program",
        "description": "Join Thoughtflows to kickstart your career in ED coding with expert-led training.",
        "icon": <FaClipboardList /> // Clipboard icon for "Enroll in our ED Coding program"
    },
    {
        "title": "Comprehensive Training with live sessions and videos",
        "description": "Engage in live sessions and videos that cover all aspects of ED coding.",
        "icon": <FaChalkboardTeacher /> // Teacher icon for "Comprehensive Training"
    },
    {
        "title": "Live Charts training which makes you expertise in ED",
        "description": "Hands-on experience with live charts to enhance your ED coding expertise.",
        "icon": <FaLaptop /> // Laptop icon for "Live Charts training"
    },
    {
        "title": "Interview Prep: Resume building, mock interviews, and job placement support",
        "description": "Prepare for interviews with resume building, mock interviews, and job placement assistance.",
        "icon": <FaUserTie /> // Businessperson icon for "Interview Prep"
    }
];


const EdDream = () => {
    return (
        <div className="timeline-container bg-gray-100 py-24">
            <h2 className="text-center mb-8 text-3xl font-semibold text-secondaryy">Get Your Dream Job with E/M Coding Training</h2>
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

export default EdDream;
