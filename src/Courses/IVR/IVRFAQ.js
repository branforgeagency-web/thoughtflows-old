



import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CRCFAQ = () => {
    const faqContents =[
        {
            question: "Who is eligible to apply for IVR training?",
            answer: "Anyone interested in learning about Interactive Voice Response (IVR) systems, including individuals in roles like customer service representatives, call center managers, technical support staff, software developers, project managers, and anyone involved in designing or managing customer interaction systems can apply for IVR training."
        },
        {
            question: "What is the duration of the IVR training program?",
            answer: "20 days"
        },
        {
            question: "What study materials are provided during the course?",
            answer: "AAPC-approved CPC Study Guide, CPT, and HCPCS Level II code books, Chapter-wise self-study materials, Practice exams and mock tests"
        },
        {
            question: "Is the IVR training conducted online or offline?",
            answer: "Online: Interactive live sessions."
        },
        {
            question: "Does the training include placement assistance?",
            answer: "Resume enhancement, Mock interviews, Job placement support with connections to healthcare employers."
        },
        {
            question: "What is the pass rate for IVR certification at Thoughtflows?",
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
