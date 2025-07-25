import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CICFaq = () => {
    const faqContents = [
        {
            question: "How much does the CIC certification exam cost?",
            answer: "The cost for the CIC exam through AAPC is approximately $399 for members and $499 for non-members. Membership to AAPC provides access to various resources, discounts on exams, and other benefits related to professional coding."
        },
        {
            question: "How do I apply for the CIC exam?",
            answer: "You can apply for the CIC exam directly through the AAPC website. The process involves filling out an application form, paying the exam fee, and selecting a testing date. Upon approval, you'll receive access to exam materials and study resources."
        },
        {
            question: "Is there any continuing education required to maintain the CIC certification?",
            answer: "Yes, CIC-certified coders are required to complete 36 continuing education units (CEUs) every 2 years to maintain their certification. This can include attending training, workshops, webinars, or conferences related to inpatient coding."
        },
        {
            question: "What is the difference between CIC and CPC?",
            answer: "CIC focuses on inpatient coding, including both ICD-10-CM and ICD-10-PCS codes for hospital settings, while CPC is a broader certification that covers coding for outpatient services and physician offices, focusing on CPT® codes."
        },
        {
            question: "How does CIC certification benefit my career?",
            answer: "CIC certification can improve job prospects, lead to higher salaries, and provide opportunities for advancement in the specialized field of inpatient coding, as hospitals require certified coders for accurate reimbursement and compliance."
        },
        {
            question: "How do I prepare for the CIC exam if I have no prior coding experience?",
            answer: "If you're new to coding, it's recommended to first complete a formal coding training program. Thoughtflows offers comprehensive CIC training that includes foundational topics like medical terminology, ICD-10 coding systems, and inpatient coding guidelines to help beginners build the necessary skills."
        },
        {
            question: "Can I get a job before passing the CIC exam?",
            answer: "Many healthcare organizations hire individuals who are in the process of completing their CIC training, as long as they are actively working toward certification. Some employers may offer entry-level coding positions or internships, allowing you to gain practical experience while preparing for the exam."
        },
        {
            question: "How long does it take to get CIC certification after passing the exam?",
            answer: "After passing the CIC exam, it usually takes 2-4 weeks for AAPC to process your results and issue your official certification. You'll receive a digital badge and certificate, which can be used to update your resume and online profiles."
        },
        {
            question: "Can I take the CIC exam if I already have another coding certification (e.g., CPC)?",
            answer: "Yes, if you are already certified as a Certified Professional Coder (CPC) or hold another AAPC certification, you can still take the CIC exam. However, it's important to study the differences between inpatient and outpatient coding to succeed in the exam."
        },
        {
            question: "Can I get additional support if I am struggling with CIC exam preparation?",
            answer: "Yes, Thoughtflows offers extra support to students who may find certain topics challenging. This includes: One-on-one sessions with instructors for personalized guidance, access to study groups and discussions with peers to clarify doubts, additional practice tests and resources to strengthen weak areas, and continuous feedback on progress to help you stay on track and improve before the exam.",
            supportPoints: [
                "One-on-one sessions with instructors for personalized guidance.",
                "Access to study groups and discussions with peers to clarify doubts.",
                "Additional practice tests and resources to strengthen weak areas.",
                "Continuous feedback on progress to help you stay on track and improve before the exam.",

            ],
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
            <div className="faq-container" style={{ marginTop: "20px" }}>
                <h2 className='text-center mb-5'>Frequently Asked Questions</h2>
                {faqContents.map((faq, index) => (
                    <div className="faq" key={index}>
                        <h5 className=" text-md faq-title">{faq.question}</h5>
                        <p className="faq-text">{faq.answer}</p>

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

export default CICFaq;
