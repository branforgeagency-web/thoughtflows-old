


import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const COCFaq = () => {
    const faqContents = [
        {
            question: "What is the COC certification?",
            answer: "The <strong>Certified Outpatient Coder (COC)</strong>certification validates expertise in coding for outpatient services, procedures, and diagnosis within various healthcare settings such as clinics, physician offices, and ambulatory care centers."
        },
        {
            question: "Who can apply for COC certification?",
            answer: "Anyone interested in pursuing a career in outpatient medical coding can apply, especially individuals with a background in healthcare or those willing to learn medical terminology and coding practices."
        },
        {
            question: "What is the duration of the COC training at Thoughtflows?",
            answer: "The COC training spans <strong>45-50 days</strong>, with <strong>2 hours of instruction per day</strong>. We offer both <strong>weekday and weekend</strong> batches to suit your schedule."
        },
        {
            question: "Is the COC training available online and offline?",
            answer: "Yes, Thoughtflows provides flexible learning options, offering both <strong>online and offline</strong> training formats to ensure convenience for all students."
        },
        {
            question: "What is included in the COC training curriculum?",
            answer: "The training covers key topics such as <strong>ICD-10-CM, CPT coding, HCPCS Level II, reimbursement methodologies, compliance regulations, and case studies</strong>."
        },
        {
            question: "How will COC training help me with the certification exam?",
            answer: "The curriculum is aligned with the <strong>COC exam syllabus</strong>, and we provide <strong>practice exams, self-study materials, and interactive learning sessions</strong> to help you succeed in the certification exam."
        },
        {
            question: "Can I get job placement support after completing COC training?",
            answer: "Yes, Thoughtflows offers <strong>resume building, mock interviews, and job placement assistance</strong> to help you land a job in outpatient coding with leading healthcare organizations"
        },
        {
            question: "What books and materials are used in the COC training?",
            answer: "The training includes <strong>AAPC-approved books</strong> such as the <strong>ICD-10-CM, CPT, and HCPCS Level II coding books, along with self-study guides and revision notes</strong> ."
        },
        {
            question: "How can I apply for COC training at Thoughtflows?",
            answer: "You can easily apply for the <strong>COC training</strong>  by visiting the <strong>Thoughtflows Medical Coding Academy</strong>  website or contacting our admissions team for more details."
        },
        {
            question: "What are the career prospects after becoming COC certified?",
            answer: "COC certification opens doors to a wide range of opportunities in healthcare settings, including hospitals, clinics, and outpatient care centers. It enhances career growth, offers better salary prospects, and ensures job security.",
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

export default COCFaq;
