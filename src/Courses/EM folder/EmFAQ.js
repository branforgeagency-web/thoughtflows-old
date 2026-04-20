import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaCircle } from 'react-icons/fa'; // Import FaCircle for the dot icon

const faqData = [
    {
        "id": 1,
        "question": "What skills will I gain from this course?",
        "answer": "You’ll learn to accurately assign E/M codes, understand medical decision-making levels, and identify proper documentation practices."
    },
    {
        "id": 2,
        "question": "How does E/M coding impact healthcare reimbursement?",
        "answer": "Accurate E/M coding ensures healthcare providers receive appropriate compensation for patient services and reduces claim denials."
    },
    {
        "id": 3,
        "question": "What is the difference between outpatient and inpatient E/M coding?",
        "answer": "Outpatient E/M coding focuses on clinic visits, while inpatient coding involves hospital stays and more complex services."
    },
    {
        "id": 4,
        "question": "Will this course cover E/M guidelines for 2023 and beyond?",
        "answer": "Yes, the course covers the latest E/M guidelines, including any recent updates from CMS and the AMA."
    },
    {
        "id": 5,
        "question": "Are mock tests included in the training?",
        "answer": "Yes, the course features chapter-wise assessments and full-length mock exams to prepare you for the certification exam."
    },
    {
        "id": 6,
        "question": "How can I access course materials?",
        "answer": "All course materials, including coding manuals and study guides, are provided in both digital and physical formats."
    },
    {
        "id": 7,
        "question": "What types of real-world examples are used in the training?",
        "answer": "The course includes case studies from various specialties, such as family practice, cardiology, and orthopedics."
    },
    {
        "id": 8,
        "question": "How do I stay compliant with E/M coding regulations?",
        "answer": "The training covers compliance rules, including HIPAA, documentation standards, and guidelines for avoiding coding errors."
    },
    {
        "id": 9,
        "question": "Can I take this course while working full-time?",
        "answer": "Yes, the flexible schedule with weekday and weekend batches is designed to accommodate working professionals."
    },
    {
        "id": 10,
        "question": "What career paths can I pursue with E/M coding certification?",
        "answer": "Career options include roles as E/M coders, medical auditors, coding consultants, and positions in billing and compliance departments."
    }
];



const EmFAQ = () => {
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
                    
                    <button className="faq-toggle" type="button" aria-label="Toggle frequently asked question answer" title="Expand or collapse this answer">
                        <i className="fa-solid fa-chevron-down"></i>
                        <i className="fa-solid fa-times"></i>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default EmFAQ;
