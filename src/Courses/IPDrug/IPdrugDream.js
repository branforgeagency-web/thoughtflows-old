import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaRegCalendar, FaChalkboardTeacher, FaLaptop, FaRegHandshake } from 'react-icons/fa'; // Import React icons
import 'react-vertical-timeline-component/style.min.css'; // Import the CSS for the timeline

const dreamData = [
    {
        "title": "Comprehensive Training",
        "description": "Learn IPDRG coding through live and recorded sessions.",
        "icon": <FaRegCalendar /> // Calendar icon for "Start Today"
    },
    {
        "title": "Live Charts",
        "description": "Practical training on real inpatient cases.",
        "icon": <FaChalkboardTeacher /> // Teacher icon for "Comprehensive Learning"
    },
    {
        "title": "Placement Support",
        "description": "Resume assistance, mock interviews, and job placement guidance.",
        "icon": <FaLaptop /> // Laptop icon for "Live Charts"
    }
];

const IPdrugDream = () => {
    return (
        <div className="timeline-container bg-gray-100 py-12 px-2">
            <h2 className="text-center mb-8 text-3xl font-semibold text-secondaryy">Get Your Dream Job with IPDRG Training</h2>
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

export default IPdrugDream;
