import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaCircle } from 'react-icons/fa'; // Import FaCircle for the dot icon

const faqData = [
    {
        "id": 1,
        "question": "What is Radiology Coding?",
        "answer": "Radiology coding involves assigning CPT, ICD-10-CM, and HCPCS Level II codes for diagnostic imaging procedures like X-rays, CT scans, MRIs, ultrasounds, and interventional radiology."
    },
    {
        "id": 2,
        "question": "Who can enroll in the Radiology Coding Training Program?",
        "answer": "Anyone interested in medical coding, particularly those with a background in healthcare, anatomy, or medical terminology, can apply. No specific prerequisites are required."
    },
    {
        "id": 3,
        "question": "Does Thoughtflows provide post-course support?",
        "answer": "Yes, we offer post-course support, including job assistance, interview prep, and continuous learning resources."
    },
    {
        "id": 4,
        "question": "How often do coding guidelines for radiology change?",
        "answer": "Coding guidelines and updates are released annually by organizations like the AAPC and AMA to ensure compliance with the latest standards."
    },
    {
        "id": 5,
        "question": "What materials are provided during the course?",
        "answer": "You’ll receive the AAPC’s Radiology Coding Study Guide, CPT Professional Manual, ICD-10-CM Manual, and HCPCS Level II Manual."
    },
    {
        "id": 6,
        "question": "Will there be mock tests or practice exams?",
        "answer": "Yes, we provide chapter-wise assessments and full-length mock exams to ensure you’re exam-ready."
    },
    {
        "id": 7,
        "question": "What types of procedures are covered in radiology coding?",
        "answer": "Radiology coding covers diagnostic imaging (X-rays, CT scans, MRIs, ultrasounds) and interventional radiology procedures like biopsies, angiography, and catheter placements."
    },
    {
        "id": 8,
        "question": "What kind of job roles can I pursue after this training?",
        "answer": "You can work as a Radiology Coder in hospitals, outpatient radiology centers, diagnostic imaging clinics, or physician offices."
    },
    {
        "id": 9,
        "question": "How does Thoughtflows support job placement?",
        "answer": "Thoughtflows offers resume building, mock interviews, and placement assistance to help you land a job in healthcare."
    },
    {
        "id": 10,
        "question": "Why should I choose Thoughtflows for Radiology Coding Training?",
        "answer": "Thoughtflows offers expert trainers, interactive live classes, exclusive content, and comprehensive placement support for a successful coding career."
    }
]

const RadiologyFAQ = () => {
    useEffect(() => {
        const toggles = document.querySelectorAll(".faq-toggle");

        const toggleFaq = (event) => {
            const faqElement = event.currentTarget.closest('.faq');
            const isActive = faqElement.classList.contains('active');
            
            // Close all other FAQs first
            const allFaqs = document.querySelectorAll('.faq');
            allFaqs.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // If the clicked FAQ was not active, open it
            if (!isActive) {
                faqElement.classList.add('active');
            }
        };

        toggles.forEach((toggle) => {
            toggle.addEventListener("click", toggleFaq);
        });

        return () => {
            toggles.forEach((toggle) => {
                toggle.removeEventListener("click", toggleFaq);
            });
        };
    }, []);

    return (
        <div className="faq-container">
            <h2 className='text-center my-5'>Frequently Asked Questions</h2>
            {faqData.map((faq) => (
                <div key={faq.id} className="faq">
                    <h5 className="faq-title">{faq.question}</h5>
                    <div className="faq-text">
                        {typeof faq.answer === 'string' ? (
                            faq.answer
                        ) : (
                            <ul>
                                {faq.answer.map((item, index) => (
                                    <li key={index} className=' flex flex-row space-x-2 items-center '>
                                        <FaCircle className="fa-circle" style={{ color: 'black', fontSize: '8px', marginRight: '10px' }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <button className="faq-toggle">
                        <i className="fa-solid fa-chevron-down"></i>
                        <i className="fa-solid fa-times"></i>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default RadiologyFAQ;
