



import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CRCFAQ = () => {
    const faqContents =[ {
        question: "Who is eligible to apply for CEDC training?",
        answer: "Anyone interested in a career in medical coding can apply. A background in medical terminology, anatomy, or healthcare is helpful but not mandatory."
    },
    {
        question: "What is the duration of the CEDC training program?",
        answer: "45 DAYS"
    },
    {
        question: "What study materials are provided during the course?",
        answer: [
            "AAPC-approved CPC Study Guide",
            "CPT, ICD-10-CM, and HCPCS Level II code books",
            "Chapter-wise self-study materials",
            "Practice exams and mock tests"
        ]
    },
    {
        question: "Is the CEDC training conducted online or offline?",
        answer: "Online: Interactive live sessions."
    },
    {
        question: "Does Thoughtflows provide placement support?",
        answer: [
            "Chapter-wise assessments",
            "Full-length mock CPC exams to help you prepare and track progress."
        ]
    },
    {
        question: "What is the pass rate for CEDC exams at Thoughtflows?",
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
