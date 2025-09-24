import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaCircle } from 'react-icons/fa'; // Import FaCircle for the dot icon

const faqData = [
    {
        "id": 1,
        "question": "Who is eligible to apply for CPC training?",
        "answer": "Anyone interested in a career in medical coding can apply. A background in medical terminology, anatomy, or healthcare is helpful but not mandatory."
    },
    {
        "id": 2,
        "question": "What is the duration of the CPC training program?",
        "answer": "The CPC training at Thoughtflows typically lasts 45 days, with classes running for 2 hours per day. The duration can vary based on your batch selection (weekday or weekend)."
    },
    {
        "id": 3,
        "question": "What study materials are provided during the course?",
        "answer": [
            "AAPC-approved CPC Study Guide",
            "CPT, ICD-10-CM, and HCPCS Level II code books",
            "Chapter-wise self-study materials",
            "Practice exams and mock tests"
        ]
    },
    {
        "id": 4,
        "question": "Are the classes conducted online or offline?",
        "answer": [
            "Online: Interactive live sessions.",
            "Offline: In-person classes at our branches."
        ]
    },
    {
        "id": 5,
        "question": "What is the format of the CPC exam?",
        "answer": [
            "Duration: 4 hours",
            "Questions: 100 multiple-choice questions",
            "Pass Score: 70% or higher",
            "It is an open-book exam, allowing the use of approved code books."
        ]
    },
    {
        "id": 6,
        "question": "Does Thoughtflows provide placement support?",
        "answer": [
            "Resume enhancement",
            "Mock interviews",
            "Job placement support with connections to healthcare employers."
        ]
    },
    {
        "id": 8,
        "question": "Do you offer mock exams and assessments during the course?",
        "answer": [
            "Chapter-wise assessments",
            "Full-length mock CPC exams to help you prepare and track progress."
        ]
    },
    {
        "id": 9,
        "question": "What is the pass rate for CPC exams at Thoughtflows?",
        "answer": "Thoughtflows boasts a high success rate due to rigorous training and preparation."
    },
    {
        "id": 10,
        "question": "How do I register for the CPC exam?",
        "answer": "You can register for the CPC exam through the AAPC website. Thoughtflows will also guide you through the registration process."
    },
    {
        "id": 11,
        "question": "Who Can Apply for the CPC Program?",
        "answer": [
            "Aspiring Medical Coders: Individuals looking to start a career in medical coding.",
            "Healthcare Professionals: Nurses, medical assistants, and other healthcare workers looking to expand their skills.",
            "Recent Graduates: Those with a background in healthcare, biology, or medical terminology who wish to pursue a career in medical coding.",
            "Experienced Coders: Those who have hands-on experience but want to formalize their expertise with certification."
        ]
    },
    {
        "id": 12,
        "question": "Start Your CPC Journey with Thoughtflows Today!",
        "answer": "Enroll today at Thoughtflows Medical Coding Academy and take the first step toward earning your CPC certification. With our expert training, up-to-date materials, and personalized coaching, you'll be fully prepared for a successful career in medical coding."
    }
];

const CPCFaq = () => {
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
            <h2 className='text-center mb-5'>Frequently Asked Questions</h2>
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

export default CPCFaq;
