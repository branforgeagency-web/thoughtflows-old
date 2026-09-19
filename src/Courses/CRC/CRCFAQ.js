



import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CRCFAQ = () => {
    const faqContents = [
        {
            question: "What is the CRC certification?",
            answer: "The <strong> Certified Risk Adjustment Coder (CRC)</strong> certification, awarded by the AAPC, demonstrates your proficiency in assigning ICD-10-CM codes for risk adjustment models like Medicare Advantage (HCC), ACA plans, and commercial risk programs."
        },
        {
            question: "Who is eligible to take the CRC exam?",
            answer: "Anyone interested in risk adjustment coding can take the CRC exam. While there are no strict prerequisites, a background in <strong>medical terminology, anatomy, and ICD-10-CM coding</strong> is recommended."
        },
        {
            question: "How long is the CRC exam, and what is the format?",
            answer: "The exam lasts  <strong>4 hours and consists of 100 multiple-choice questions </strong> covering ICD-10-CM coding, risk adjustment models, documentation guidelines, and compliance."
        },
        {
            question: "What is the passing score for the CRC exam?",
            answer: "You need a score of<strong> 70% or higher</strong> to pass the CRC exam."
        },
        {
            question: "What study materials are required for the CRC exam?",
            answer: "You need the current year’s<strong> ICD-10-CM coding manual and the AAPC's CRC study guide.</strong>Official coding guidelines and practice exams are also helpful."
        },
        {
            question: "What types of jobs can CRC-certified coders get?",
            answer: "CRC-certified coders can work as<strong>risk adjustment coders, HCC coders, medical auditors, compliance officers, and documentation specialists</strong>in hospitals, insurance companies, and coding firms."
        },
        {
            question: "How long does it take to complete CRC training at Thoughtflows?",
            answer: "The training program at Thoughtflows spans <strong> 45-50 days, with 2 hours of instruction daily</strong>, available in both <strong>online and offline</strong> formats."
        },
        {
            question: "How often does the CRC certification need to be renewed?",
            answer: "CRC certification is valid for<strong>2 years</strong>and requires earning  <strong>36 Continuing Education Units (CEUs)</strong> to maintain."
        },
        {
            question: "What is the importance of risk adjustment coding?",
            answer: "Risk adjustment coding ensures that healthcare providers receive accurate reimbursements based on patients’ chronic conditions and health risk scores, especially in <strong>  value-based care models.</strong> "
        },
        {
            question: "Does Thoughtflows provide placement assistance after CRC training?",
            answer: "Yes, Thoughtflows offers <strong>  resume enhancement, mock interviews, and job placement support </strong> to help you launch a successful career in risk adjustment coding.",
            // supportPoints: [
            //     "One-on-one sessions with instructors for personalized guidance.",
            //     "Access to study groups and discussions with peers to clarify doubts.",
            //     "Additional practice tests and resources to strengthen weak areas.",
            //     "Continuous feedback on progress to help you stay on track and improve before the exam.",

            // ],
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
            <div className="faq-container" style={{ marginTop: "20px" }}>
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
