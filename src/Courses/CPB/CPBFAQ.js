



import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CRCFAQ = () => {
    const faqContents = [
        {
            question: "Who is eligible to apply for CPB training?",
            answer: "Anyone interested in pursuing a career in medical billing, particularly those with a basic understanding of medical terminology, anatomy, and healthcare regulations."
        },
        {
            question: "What is the duration of the CPB training program?",
            answer: "45 DAYS"
        },
        {
            question: "What study materials are provided during the course?",
            answer: "ICD, CPT, HCPCS as soft copy material provided."
        },
        {
            question: "Is the CPB training conducted online or offline?",
            answer: "Online."
        },
        {
            question: "Does Thoughtflows provide placement support?",
            answer: [
                "Resume enhancement",
                "Mock interviews",
                "Job placement support with connections to healthcare employers"
            ]
        },
        {
            question: "Do you offer mock exams and assessments during the course?",
            answer: [
                "Chapter-wise assessments",
                "Full-length mock CPB exams to help you prepare and track progress."
            ]
        },
        {
            question: "What is the pass rate for CPB exams at Thoughtflows?",
            answer: "Thoughtflows boasts a high success rate due to rigorous training and preparation."
        }
    ];

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
        <>
            <div className="faq-container" style={{ marginBlock: "30px" }}>
                <h2 className='text-center mb-5'>Frequently Asked Questions</h2>
                {faqContents.map((faq, index) => (
                    <div className="faq" key={index}>
                        <h5 className=" text-md faq-title">{faq.question}</h5>
                        <p className="faq-text" dangerouslySetInnerHTML={{ __html: faq.answer }} />

                        <ul>
                            {faqContents?.supportPoints?.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                        <button className="faq-toggle">
                            <i className="fa-solid fa-chevron-down"></i>
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CRCFAQ;
