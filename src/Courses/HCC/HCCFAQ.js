



import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CRCFAQ = () => {
    const faqContents =[
        {
            question: "Who is eligible to apply for HCC training?",
            answer: "Individuals eligible for HCC (Hierarchical Condition Category) training are typically certified medical coders with a strong understanding of diagnosis coding and medical terminology, particularly those looking to specialize in risk adjustment coding within the healthcare industry."
        },
        {
            question: "What is the duration of the HCC training program?",
            answer: "A typical HCC training program generally lasts around two months depending on the provider and the depth of the course, with options for both beginner and advanced levels of study."
        },
        {
            question: "What study materials are provided during the course?",
            answer: "Study materials provided during a course typically include textbooks, lecture notes, presentations, handouts, online resources, practice problems, assignments, case studies, and study guides."
        },
        {
            question: "Is the HCC training conducted online or offline?",
            answer: "Courses are 100% online. Quality Education - Our programs are designed to provide you with the skills and knowledge needed to excel in your chosen field."
        },
        {
            question: "Does the training include placement assistance?",
            answer: "Yes, the training does include placement assistance."
        },
        {
            question: "What is the pass rate for HCC certification at Thought Flows?",
            answer: "Thought Flows boasts a high success rate due to rigorous training and preparation."
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
