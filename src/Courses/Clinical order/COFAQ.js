import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaCircle } from 'react-icons/fa'; // Import FaCircle for the dot icon

const faqData = [
    {
      "id": 1,
      "question": "What is the difference between a CCC and a medical coder?",
      "answer": "A CCC focuses on coding diagnoses and procedures from medical records, while a medical coder may work in broader settings, including billing and insurance."
    },
    {
      "id": 2,
      "question": "How is this course different from other medical coding courses?",
      "answer": "Our course provides in-depth training with live sessions, real-world case studies, and personalized mentorship, ensuring job readiness."
    },
    {
      "id": 3,
      "question": "Is prior healthcare experience necessary for this course?",
      "answer": "No, prior healthcare experience is not mandatory, though a basic understanding of medical terminology can be helpful."
    },
    {
      "id": 4,
      "question": "What kind of support is available if I face difficulties during the course?",
      "answer": "Our instructors offer one-on-one guidance, Q&A sessions, and access to additional study materials."
    },
    {
      "id": 5,
      "question": "How do I access the online course materials?",
      "answer": "Enrolled students receive login credentials to our online learning portal, where all resources and recordings are available."
    },
    {
      "id": 6,
      "question": "Are there any assessments during the course?",
      "answer": "Yes, there are regular assessments, including chapter-wise tests and full-length mock exams, to track your progress."
    },
    {
      "id": 7,
      "question": "What is the average salary of a CCC?",
      "answer": "The average salary varies but typically ranges from $40,000 to $60,000 annually, depending on experience and location."
    },
    {
      "id": 8,
      "question": "Can I take this course while working a full-time job?",
      "answer": "Yes, our flexible weekday and weekend batches are designed to accommodate working professionals."
    },
    {
      "id": 9,
      "question": "What type of job roles can I apply for after completing this course?",
      "answer": "You can apply for roles such as CCC, Medical Coder, Coding Auditor, Health Information Technician, and Coding Consultant."
    },
    {
      "id": 10,
      "question": "Will this course help me prepare for professional coding certifications like CPC?",
      "answer": "Yes, the curriculum aligns with the requirements of professional coding certifications like the AAPC’s CPC exam."
    }
  ]
  



const EmFAQ = () => {
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
        <div className="faq-container">
            <h2 className='text-center my-5'>Frequently Asked Questions</h2>
            {faqData.map((faq) => (
                <div key={faq.id} className="faq">
                    <h5 className="faq-title">{faq.question}</h5>
                    <div className="faq-text">
                        {typeof faq.answer === 'string' ? (
                            faq.answer
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

export default EmFAQ;
