import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaCircle } from 'react-icons/fa'; // Import FaCircle for the dot icon

const faqData = [
    {
        "id": 1,
        "question": "What is Surgery Coding?",
        "answer": "Surgery coding involves assigning CPT®, ICD-10-CM, and HCPCS codes for surgical procedures performed in hospitals, surgery centers, and physician offices."
    },
    {
        "id": 2,
        "question": "What are the prerequisites for enrolling in Surgery Coding Training?",
        "answer": "While there are no strict prerequisites, a basic understanding of medical terminology and anatomy is recommended."
    },
    {
        "id": 3,
        "question": "How does surgery coding differ from general medical coding?",
        "answer": "Surgery coding focuses on assigning codes for specific surgical procedures, while general coding covers a broader range of medical services."
    },
    {
        "id": 4,
        "question": "What types of surgical procedures will I learn to code?",
        "answer": "The course covers multiple specialties, including orthopedics, general surgery, cardiovascular, plastic surgery, and neurosurgery."
    },
    {
        "id": 5,
        "question": "Will this course help with auditing skills?",
        "answer": "Yes, surgical coding involves accuracy and compliance, which are key skills needed for auditing and compliance roles."
    },
    {
        "id": 6,
        "question": "Do you provide job placement support?",
        "answer": "Yes, Thoughtflows offers resume enhancement, mock interviews, and job placement assistance."
    },
    {
        "id": 7,
        "question": "Who can benefit from this course?",
        "answer": "Aspiring coders, current coders, healthcare professionals, and career changers looking to specialize in surgical coding."
    },
    {
        "id": 8,
        "question": "How do I know if surgery coding is the right path for me?",
        "answer": "If you have an interest in detailed procedural coding, surgical documentation, and want a specialized coding career, surgery coding is ideal."
    },
    {
        "id": 9,
        "question": "How can I prepare for the course?",
        "answer": "Brush up on medical terminology, anatomy, and basic CPT® coding principles to get a head start."
    },
    {
        "id": 10,
        "question": "What career opportunities are available after completing this course?",
        "answer": "Graduates can work as surgical coders, coding auditors, compliance officers, or billing specialists in hospitals, surgery centers, and physician practices."
    }
];


const SurgeryFAQ = () => {
    useEffect(() => {
        const toggles = document.querySelectorAll(".faq-toggle");

        const toggleFaq = (event) => {
            const faqElement = event.currentTarget.closest('.faq');
            faqElement.classList.toggle("active");
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

export default SurgeryFAQ;
