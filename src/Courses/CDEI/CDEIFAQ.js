



import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CRCFAQ = () => {
    const faqContents =[
        {
            question: "Who is eligible to apply for CDEI training?",
            answer: "Individuals eligible for CDEI (Certified Documentation Expert Inpatient) training typically have a background in healthcare coding, with a minimum of two years of inpatient coding experience and a coding certification, demonstrating proficiency in medical terminology, anatomy, and pathophysiology."
        },
        {
            question: "What is the duration of the CDEI training program?",
            answer: "60 DAYS"
        },
        {
            question: "What study materials are provided during the course?",
            answer: [
                "AAPC-approved CPC Study Guide",
                "CPT, and HCPCS Level II code books",
                "Chapter-wise self-study materials",
                "Practice exams and mock tests"
            ]
        },
        {
            question: "Is the CDEI training conducted online or offline?",
            answer: [
                "Online: Interactive live sessions.",
                "Offline: In-person classes at our branches."
            ]
        },
        {
            question: "What is the format of the CDEI exam?",
            answer: [
                "Duration: 4 hrs",
                "Marks: 100",
                "Pass percentage: 70% & above"
            ]
        },
        {
            question: "Does Thoughtflows provide placement support?",
            answer: [
                "Resume enhancement",
                "Mock interviews",
                "Job placement support with connections to healthcare employers."
            ]
        },
        {
            question: "Do you offer mock exams and assessments during the course?",
            answer: [
                "Chapter-wise assessments",
                "Full-length mock CDEI exams to help you prepare and track progress."
            ]
        },
        {
            question: "What is the pass rate for CDEI exams at Thoughtflows?",
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
                        <button className="faq-toggle" type="button" aria-label="Toggle frequently asked question answer" title="Expand or collapse this answer">
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
