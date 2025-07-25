import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaRegCalendar, FaChalkboardTeacher, FaLaptop, FaRegHandshake } from 'react-icons/fa'; // Import React icons
import 'react-vertical-timeline-component/style.min.css'; // Import the CSS for the timeline

const dreamData = [
    {
        "title": "Start Today",
        "description": "Join Thoughtflows for expert-led E/M coding training.",
        "icon": <FaRegCalendar /> // Calendar icon for "Start Today"
    },
    {
        "title": "Comprehensive Learning",
        "description": "Live sessions and video tutorials for in-depth knowledge.",
        "icon": <FaChalkboardTeacher /> // Teacher icon for "Comprehensive Learning"
    },
    {
        "title": "Live Charts",
        "description": "Enhance your skills with hands-on live chart training.",
        "icon": <FaLaptop /> // Laptop icon for "Live Charts"
    },
    {
        "title": "Job Assistance",
        "description": "Resume building, mock interviews, and job placement support to land your ideal job.",
        "icon": <FaRegHandshake /> // Handshake icon for "Job Assistance"
    }
];

const EmDream = () => {
    return (
        <div className="timeline-container bg-gray-100 px-2 py-24">
            <h2 className="text-center mb-8 px-2 text-3xl font-semibold text-secondaryy">Get Your Dream Job with E/M Coding Training</h2>
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

export default EmDream;
