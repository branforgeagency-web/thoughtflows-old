

import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CPMAFAQ = () => {
    const faqContents = [
        {
            question: "What is the difference between CPMA and other certifications like CPC or CIC?",
            answer: "CPMA focuses specifically on medical auditing, while <strong>CPC (Certified Professional Coder)</strong> covers general medical coding, and <strong>CIC (Certified Inpatient Coder) </strong>specializes in inpatient coding. CPMA deals with auditing the entire medical documentation and coding process to ensure accuracy and compliance."
        },
        {
            question: "Can I take the CPMA exam without taking the course?",
            answer: "While taking a preparatory course is highly recommended, it’s not mandatory. However, without proper training, passing the exam may be more challenging, as it tests knowledge of complex coding and auditing standards."
        },
        {
            question: "How do I register for the CPMA exam?",
            answer: "Registration for the CPMA exam can be done through the <strong>AAPC website</strong>. You will need to create an account, pay the exam fee, and choose your preferred testing location or online proctored exam option."
        },
        {
            question: "What is the passing score for the CPMA exam?",
            answer: "The passing score for the CPMA exam is generally around 70%. Candidates are required to achieve this score to earn their certification."
        },
        {
            question: "What career opportunities are available with a CPMA certification?",
            answer: "CPMA-certified professionals can pursue careers as <strong>medical auditors, compliance officers, revenue cycle managers</strong>, and in other roles focusing on healthcare compliance, coding, and auditing in hospitals, physician offices, and insurance companies."
        },
        {
            question: "What is the cost of the CPMA certification exam?",
            answer: "The cost of the <strong>CPMA certification exam </strong>varies based on your AAPC membership status. Generally, the exam fee ranges from $399 (for members) to $499 (for non-members). Additional costs may apply for study materials or practice exams."
        },
        {
            question: "Is the CPMA certification recognized internationally?",
            answer: "Yes, <strong>CPMA certification</strong> is widely recognized, especially in countries with structured healthcare systems. Many organizations seek certified professionals in medical auditing to ensure compliance with global standards."
        },
        {
            question: "Do I need continuing education to maintain CPMA certification?",
            answer: "Yes, <strong>continuing education (CEUs)</strong> is required to maintain your CPMA certification. AAPC mandates that you complete 36 CEUs every two years to keep your credentials active.."
        },
        {
            question: "Are there any discounts for CPMA certification exam fees?",
            answer: "AAPC occasionally offers discounts or promotional pricing for members or through special events. Check the official <strong>AAPC website </strong>for any current discounts or offers"
        },
        {
            question: "What role does a CPMA-certified auditor play in healthcare organizations?",
            answer: "A CPMA-certified auditor ensures that healthcare providers' coding and billing are compliant with regulations, preventing fraud and ensuring accurate reimbursements. They perform audits, provide feedback to healthcare professionals, and help improve revenue cycle management.",
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

export default CPMAFAQ;
