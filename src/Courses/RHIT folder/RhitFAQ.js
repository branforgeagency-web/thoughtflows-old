import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaCircle } from 'react-icons/fa'; // Import FaCircle for the dot icon

const faqData = [
    {
        "id": 1,
        "question": "How do I apply for the RHIT exam?",
        "answer": "You can apply through the AHIMA website by submitting your application, eligibility documents, and exam fee."
      },
      {
        "id": 2,
        "question": "How long does it take to receive RHIT exam results?",
        "answer": "Preliminary results are provided immediately after the exam, and official results are available within 4-6 weeks."
      },
      {
        "id": 3,
        "question": "Can I retake the RHIT exam if I fail?",
        "answer": "Yes, you can retake the exam, but you must wait 45 days between attempts and pay the exam fee again."
      },
      {
        "id": 4,
        "question": "How should I manage my time during the RHIT exam?",
        "answer": "Plan to spend about 1.5 minutes per question to ensure you complete the exam within the 3.5-hour timeframe."
      },
      {
        "id": 5,
        "question": "Is the RHIT exam difficult?",
        "answer": "The RHIT exam is challenging, as it assesses a wide range of health information management skills, but thorough preparation can lead to success."
      },
      {
        "id": 6,
        "question": "Can I take the RHIT exam online?",
        "answer": "Yes, AHIMA offers online proctoring through Pearson VUE, allowing you to take the exam remotely."
      },
      {
        "id": 7,
        "question": "What happens if my RHIT certification expires?",
        "answer": "You will need to meet AHIMA’s reinstatement requirements, which may include retaking the exam or completing additional CEUs."
      },
      {
        "id": 8,
        "question": "Does the RHIT certification have global recognition?",
        "answer": "While it is primarily recognized in the U.S., the RHIT credential is valued internationally by healthcare organizations that follow U.S. standards."
      },
      {
        "id": 9,
        "question": "What is the difference between RHIT and RHIA certification?",
        "answer": "RHIT focuses on technical aspects of health information, while RHIA covers broader management and leadership in health information administration."
      },
      {
        "id": 10,
        "question": "What resources does AHIMA provide for RHIT exam prep?",
        "answer": "AHIMA offers study guides, online courses, webinars, and practice exams to help candidates prepare for the RHIT exam."
      }
];


const RhitFAQ = () => {
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
        <div className="faq-container mt-5">
            <h2 className='text-center mb-4'>Frequently Asked Questions</h2>
            {faqData.map((faq) => (
                <div key={faq.id} className="faq">
                    <h5 className="faq-title">{faq.question}</h5>
                    <div className="faq-text">
                        {typeof faq.answer === 'string' ? (
                            <p>{faq.answer}</p>
                        ) : (
                            <ul>
                                {faq.answer.map((item, index) => (
                                    <li key={index} className=' flex flex-row space-x-2 items-center '>
                                        <FaCircle className="fa-circle" style={{ color: 'black', fontSize: '8px', marginRight: '10px' }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <button className="faq-toggle">
                        <i className="fa-solid fa-chevron-down"></i>
                        <i className="fa-solid fa-times"></i>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default RhitFAQ;
