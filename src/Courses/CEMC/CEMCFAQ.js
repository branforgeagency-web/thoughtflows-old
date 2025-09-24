



import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CRCFAQ = () => {
    const faqContents =[
        {
            question: "Who is eligible to apply for CEMC training?",
            answer: "Anyone with significant experience in Evaluation and Management (E/M) coding is eligible to apply for CEMC (Certified Evaluation and Management Coder) training. This is particularly suitable for those wanting to demonstrate a high level of expertise in E/M coding by taking the CEMC certification exam. Typically, this requires at least two years of experience in medical coding, with a strong focus on E/M coding across different specialties."
        },
        {
            question: "What is the duration of the CEMC training program?",
            answer: "45 DAYS\nMONDAY TO FRIDAY\nONLINE"
        },
        {
            question: "What study materials are provided during the course?",
            answer: "AAPC-approved CPC Study Guide\nCPT, and HCPCS Level II code books\nChapter-wise self-study materials\nPractice exams and mock tests"
        },
        {
            question: "Is the CEMC training conducted online or offline?",
            answer: "Online: Interactive live sessions.\nOffline: In-person classes at our branches."
        },
        {
            question: "What is the format of the CEMC exam?",
            answer: "Duration: 4 hours\nQuestions: 100 multiple-choice questions\nPass Score: 70% or higher\n\nIt is an open-book exam, allowing the use of approved code books."
        },
        {
            question: "Does Thoughtflows provide placement support?",
            answer: "Resume enhancement\nMock interviews\nJob placement support with connections to healthcare employers."
        },
        {
            question: "Do you offer mock exams and assessments during the course?",
            answer: "Chapter-wise assessments\nFull-length mock CEMC exams to help you prepare and track progress."
        },
        {
            question: "What is the pass rate for CEMC exams at Thoughtflows?",
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
