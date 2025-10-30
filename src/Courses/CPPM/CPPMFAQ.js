



import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CRCFAQ = () => {
    const faqContents =[
        {
            question: "Who is eligible to apply for CPPM training?",
            answer: "Those working in a medical practice management role, often requiring a minimum of two years of healthcare experience, and are looking to advance their skills and knowledge in managing a physician's practice; this usually means current or aspiring practice managers within a healthcare facility."
        },
        {
            question: "What is the duration of the CPPM training program?",
            answer: "60 DAYS"
        },
        {
            question: "What study materials are provided during the course?",
            answer: "BOOKS USED: PRACTICE MANAGEMENT REFERENCE GUIDE"
        },
        {
            question: "Is the CPPM training conducted online or offline?",
            answer: "Online: Interactive live sessions."
        },
        {
            question: "What is the format of the CPPM exam?",
            answer: "TOTAL MARKS FOR EXAMINATION: 135 MARKS | EXAM DURATION: 4 HOURS"
        },
        {
            question: "Does Thoughtflows provide placement support?",
            answer: "Resume enhancement, mock interviews, job placement support with connections to healthcare employers."
        },
        {
            question: "Do you offer mock exams and assessments during the course?",
            answer: "Chapter-wise assessments, full-length mock CPC exams to help you prepare and track progress."
        },
        {
            question: "What is the pass rate for CPPM exams at Thoughtflows?",
            answer: "Thoughtflows boasts a high success rate due to rigorous training and preparation."
        }
    ];

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
