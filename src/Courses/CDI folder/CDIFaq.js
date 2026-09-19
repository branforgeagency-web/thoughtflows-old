import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CDIFaq = () => {
    const faqContents = [
        {
            question: 'What is Clinical Documentation Improvement (CDI)?',
            answer: 'CDI is the process of reviewing and improving patient medical records to ensure accuracy, completeness, and compliance. It helps in better coding, fewer claim denials, and proper reimbursement.'
        },
        {
            question: 'Do I need a medical background to join CDI training?',
            answer: 'A life science or healthcare background is helpful, but not mandatory. We cover the required fundamentals during the training.'
        },
        {
            question: 'What is the difference between CDI and Medical Coding?',
            answer: '<strong>Medical Coding</strong> focuses on assigning codes to diagnoses and procedures. <strong>CDI</strong> focuses on improving the quality and accuracy of clinical documentation before coding.'
        },
        {
            question: 'Will I get placement support after the course?',
            answer: 'Yes, we provide placement guidance, resume support, and interview preparation to help you start your career in CDI.'
        },
        {
            question: 'Is CDI a good career option?',
            answer: 'Yes, CDI is a growing field in healthcare with increasing demand for skilled professionals in documentation quality and compliance.'
        },
        {
            question: 'What job roles can I get after CDI training?',
            answer: 'You can work as a <strong>Clinical Documentation Specialist</strong>, <strong>CDI Analyst</strong>, <strong>Medical Coding Auditor</strong>, or <strong>Quality Analyst</strong> in healthcare RCM.'
        },
    ];

    useEffect(() => {
        const toggles = document.querySelectorAll('.cdi-faq-toggle');

        const toggleFaq = (event) => {
            const faqElement = event.currentTarget.closest('.faq');
            const isActive = faqElement.classList.contains('active');

            const allFaqs = document.querySelectorAll('.faq');
            allFaqs.forEach(faq => {
                faq.classList.remove('active');
            });

            if (!isActive) {
                faqElement.classList.add('active');
            }
        };

        toggles.forEach((toggle) => {
            toggle.addEventListener('click', toggleFaq);
        });

        return () => {
            toggles.forEach((toggle) => {
                toggle.removeEventListener('click', toggleFaq);
            });
        };
    }, []);

    return (
        <>
            <div className="faq-container" style={{ marginTop: '20px' }}>
                <h2 className='text-center mb-5'>Frequently Asked Questions</h2>
                {faqContents.map((faq, index) => (
                    <div className="faq" key={index}>
                        <h5 className="text-md faq-title">{faq.question}</h5>
                        <p className="faq-text" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        <button className="faq-toggle cdi-faq-toggle" type="button" aria-label="Toggle frequently asked question answer" title="Expand or collapse this answer">
                            <i className="fa-solid fa-chevron-down"></i>
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CDIFaq;
