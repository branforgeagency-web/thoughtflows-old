import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaCircle } from 'react-icons/fa'; // Import FaCircle for the dot icon

const faqData = [
    {
        "id": 1,
        "question": "How long is the RHIA certification valid?",
        "answer": "The RHIA certification is valid for two years. To maintain the credential, certified professionals must meet AHIMA’s continuing education (CEU) requirements during each renewal period."
    },
    {
        "id": 2,
        "question": "What happens if I fail the RHIA exam?",
        "answer": "If you fail the RHIA exam, you can retake it. There is a 90-day waiting period before you can schedule a retake, and you’ll need to pay the exam fee again."
    },
    {
        "id": 3,
        "question": "Are there any prerequisites to sit for the RHIA exam?",
        "answer": "Yes. You must have a bachelor’s degree from a CAHIIM-accredited Health Information Management (HIM) program or a foreign equivalent approved by AHIMA."
    },
    {
        "id": 4,
        "question": "What is the cost of the RHIA exam?",
        "answer": "The RHIA exam costs: $299 for AHIMA members $399 for non-members Prices may vary, so check AHIMA’s website for the most up-to-date fees."
    },
    {
        "id": 5,
        "question": "How do I register for the RHIA exam?",
        "answer": "You can register for the RHIA exam through the AHIMA website. Complete the application, pay the fee, and schedule your exam through Pearson VUE."
    },
    {
        "id": 6,
        "question": "Can I take the RHIA exam online?",
        "answer": "Yes, the RHIA exam can be taken via remote proctoring or at an in-person testing center through Pearson VUE."
    },
    {
        "id": 7,
        "question": "What score do I need to pass the RHIA exam?",
        "answer": "To pass the RHIA exam, you need a minimum scaled score of 300 out of 400."
    },
    {
        "id": 8,
        "question": "What is the format of the RHIA exam?",
        "answer": "The RHIA exam consists of 170 multiple-choice questions: 150 scored questions 20 pretest questions (do not count toward your score) You have 4 hours to complete the exam."
    },
    {
        "id": 9,
        "question": "How can I prepare for the RHIA exam?",
        "answer": "Preparation tips include:Studying AHIMA’s RHIA Exam Prep Books Taking practice tests Reviewing ICD-10-CM/PCS guidelines and HIPAA regulations"
    },
    {
        "id": 10,
        "question": "What career advancement opportunities are available with an RHIA certification?",
        "answer": "RHIA certification opens doors to leadership roles, including: Health Information Director Compliance Officer Clinical Data Manager Information Governance Specialist"
    }
];


const RhiaFAQ = () => {
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
        <div className="faq-container mt-5">
            <h2 className='text-center mb-4'>Frequently Asked Questions</h2>
            {faqData.map((faq) => (
                <div key={faq.id} className="faq">
                    <h5 className="faq-title">{faq.question}</h5>
                    <div className="faq-text">
                        {typeof faq.answer === 'string' ? (
                            <p>{faq.answer}</p>
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

export default RhiaFAQ;
