import React from 'react';
import training from '../../images/Courses/training.png';
import learning from '../../images/Courses/learning.png';
import classroom from '../../images/Courses/classroom.png';
import studyMaterial from '../../images/Courses/3d-model.png';
import certificate from '../../images/Courses/certificate.png';

const features = [
    { icon: classroom, title: 'Classroom Learning', description: 'Instructor led classroom Training' },
    { icon: studyMaterial, title: 'E-mail Marketing', description: 'Copy of study materials' },
    { icon: learning, title: 'Learn Anything', description: ' Mock up test will be provided to understand and get the hint to pass the CIC Exam.' },
    { icon: training, title: 'Learn with Experts', description: 'Free Re-Training for those who have doubts or missed any sessions.' },
    { icon: certificate, title: 'Get Online Certificate', description: ' Course Completion Certificate' }
];

const AnaestheiaFeatures= () => {
    return (
        <div className='crc-features'>
            <h2>Start Your Learning Journey Today!</h2>
            <p>Key Features</p>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <img src={feature.icon} alt={feature.title} className="feature-icon" />
                        {/* <h3>{feature.title}</h3> */}
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AnaestheiaFeatures;
