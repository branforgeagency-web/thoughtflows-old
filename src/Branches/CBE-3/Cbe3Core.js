import React from 'react';
import passion from '../../images/Branches/motivation.png'
import loyalty from '../../images/Branches/customer-loyalty.png'
import commitment from '../../images/Branches/deal.png'
import responsibility from '../../images/Branches/norms.png'
import consistency from '../../images/Branches/consistency.png'
import creativity from '../../images/Branches/solution.png'

const Cbe2Core = () => {
    return (
        <div className="cbe1-features-container">
            <h2>What Sets Thoughtflows Apart?</h2>
            <div className="features-grid">
                <div className="feature-card purple">
                    <img src={passion} alt='passion' /> 
                    <h3>Elevate Your Skills</h3>
                    <p>
                        When it comes to elevating your skills in medical coding, Thoughtflows Medical Coding Academy in Coimbatore is the leading choice. Our academy offers advanced training programs and specialized workshops to help you stay ahead of the curve in this ever-evolving field. Whether you're a beginner or an experienced professional looking to enhance your skills, our academy provides the platform for continuous growth and development. Choose us and elevate your career to new heights.
                    </p>

                </div>
                <div className="feature-card dark">
                    <img src={loyalty} alt='loyalty' />
                    <h3>Dedicated Faculty at Our Academy</h3>
                    <p>
                        Our Coimbatore Medical Coding Academy takes pride in our team of dedicated and experienced faculty members. They bring a wealth of industry knowledge and expertise to the classroom, ensuring that you receive top-notch instruction and guidance. Our faculty members are passionate about your success and are committed to providing a supportive learning environment where you can thrive and develop the skills necessary for a successful career in medical coding.
                    </p>

                </div>
                <div className="feature-card purple">
                    <img src={commitment} alt='commitment' />
                    <h3>Explore the Curriculum</h3>
                    <p>
                        At our Coimbatore Medical Coding Academy, our curriculum is meticulously designed to cover all essential aspects of medical coding. From ICD-10-CM, CPT, and HCPCS coding systems to medical terminology, anatomy, and reimbursement methodologies, we leave no stone unturned in providing a comprehensive education. Our curriculum is regularly updated to align with the latest industry standards and guidelines, ensuring that you receive the most relevant and up-to-date training.
                    </p>

                </div>
                <div className="feature-card dark">
                    <img src={responsibility} alt='responsibility' />
                    <h3>Affordable Medical Coding Courses</h3>
                    <p>
                        Thoughtflows Medical Coding Academy in Coimbatore believes in providing accessible education to aspiring medical coders. Our courses are designed to be affordable without compromising on the quality of education. We offer flexible payment options and competitive tuition fees, making it easier for you to pursue your career goals. Don't let financial constraints hold you back. Get started with our affordable medical coding courses and take the first step towards a bright future.
                    </p>

                </div>
                <div className="feature-card purple">
                    <img src={consistency} alt='consistency' />
                    <h3>Job-Oriented Medical Coding Training</h3>
                    <p>
                    At Thoughtflows Medical Coding Academy in Coimbatore, we prioritize job-oriented training that prepares you for the realities of the healthcare industry. Our curriculum focuses on practical skills and hands-on training, enabling you to develop the expertise needed to succeed in medical coding roles. We emphasize real-world scenarios, coding audits, and industry simulations to ensure that you are job-ready upon completion of our training programs.
                    </p>

                </div>
                <div className="feature-card dark">
                    <img src={creativity} alt='creativity' />
                    <h3>Convenient and Flexible Class Schedules</h3>
                    <p>
                    Thoughtflows Medical Coding Academy in Coimbatore understands the importance of flexibility in balancing your education with other commitments. That's why we offer convenient and flexible class schedules to accommodate your needs. We provide morning, evening, and weekend classes, allowing you to choose a schedule that works best for you. Whether you are a working professional or a student, you can pursue your medical coding education without disrupting your existing obligations.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Cbe2Core;
