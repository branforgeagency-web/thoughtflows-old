import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaCircle } from 'react-icons/fa'; // Import FaCircle for the dot icon

const faqData = [
    {
      "id": 1,
      "question": "What is Anesesthesia coding?",
      "answer": "Anesesthesia coding involves assigning CPT, ICD-10-CM, and HCPCS Level II codes for Anesesthesia services, incorporating factors like Anesesthesia type, duration, and modifiers."
    },
    {
      "id": 2,
      "question": "Who is eligible for Anesesthesia coding training?",
      "answer": "Anyone with an interest in medical coding, especially those with knowledge of medical terminology, anatomy, and physiology, can apply."
    },
    {
      "id": 3,
      "question": "What are the career prospects for an Anesesthesia coder?",
      "answer": "Anesesthesia coders can work in hospitals, surgical centers, and physician offices, or become coding auditors, billing specialists, and compliance officers."
    },
    {
      "id": 4,
      "question": "Will this course cover both diagnostic and interventional procedures?",
      "answer": "Yes, the training includes coding for surgical Anesesthesia as well as pain management procedures."
    },
    {
      "id": 5,
      "question": "What books and study materials are used?",
      "answer": "The course uses AAPC’s Official CANPC Study Guide, CPT Professional Manual, ICD-10-CM Manual, and HCPCS Level II Manual."
    },
    {
      "id": 6,
      "question": "Do I need prior coding experience to join this course?",
      "answer": "While prior experience in medical coding is helpful, our course is designed to accommodate both beginners and experienced coders."
    },
    {
      "id": 7,
      "question": "Why should I choose Thoughtflows for Anesesthesia coding training?",
      "answer": "Expert trainers, interactive learning, real-world scenarios, live chart training, mock exams, and job placement support make Thoughtflows the top choice."
    },
    {
      "id": 8,
      "question": "What career paths can I pursue after completing Anesesthesia coding training?",
      "answer": "You can work as an Anesesthesia coder, coding auditor, billing specialist, or compliance officer in hospitals, surgical centers, or physician offices."
    },
    {
      "id": 9,
      "question": "Does Thoughtflows provide job placement assistance?",
      "answer": "Yes, Thoughtflows offers resume building, mock interviews, and placement support with top healthcare organizations."
    }
  ];
  



const AnaesthesiaFAQ = () => {
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

export default AnaesthesiaFAQ;
