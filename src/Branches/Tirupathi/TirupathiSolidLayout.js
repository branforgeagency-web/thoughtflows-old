import React from 'react';
import wavebg from '../../images/Branches/wave-blue.png';

const TirupathiSolidLayout = () => {
    return (
        <>
            <div className="tirupathi-solid"
                style={{
                    backgroundImage: 'linear-gradient(90deg, #06737f, #14aebb)',
                    backgroundSize: 'auto, cover',
                    backgroundPosition: 'right top, center',
                    backgroundRepeat: 'no-repeat',
                    // height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingLeft: '30px',
                    paddingRight: '30px'
                }}>
                <div className="tirupathi-solid-container py-4">
                    <div className="tirupathi-solid-text">
                        <h2>Building Strong Coding Foundations</h2>
                        <p>At Thoughtflows, we believe that a strong foundation is key to success. Our comprehensive curriculum is carefully crafted to provide students with a thorough understanding of medical coding principles and practices. From medical terminology and anatomy to coding guidelines and compliance, our courses cover all essential aspects of medical coding, ensuring that our graduates are well-prepared to excel in their careers. Our modules are designed to be practical and industry-focused, allowing students to gain hands-on experience and apply their knowledge in real-world scenarios. Throughout the program, students are encouraged to engage in interactive learning, group discussions, and practical exercises that reinforce their understanding of medical coding concepts.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TirupathiSolidLayout;
