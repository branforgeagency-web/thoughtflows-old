import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaCircle } from 'react-icons/fa'; // Import FaCircle for the dot icon

const faqData = [
  {
    "id": 1,
    "question": "What does an HIM Coder do?",
    "answer": "An HIM Coder is responsible for reviewing medical records and accurately assigning codes to diagnoses, procedures, and services using coding systems like ICD-10, CPT, and HCPCS."
  },
  {
    "id": 2,
    "question": "What skills are needed to be an HIM Coder?",
    "answer": "HIM Coders need knowledge of medical terminology, anatomy, coding systems, attention to detail, analytical skills, and understanding of healthcare regulations like HIPAA."
  },
  {
    "id": 3,
    "question": "Where can I work as an HIM Coder?",
    "answer": "HIM Coders can work in hospitals, clinics, health insurance companies, long-term care facilities, research institutions, medical billing companies, and telehealth services."
  },
  {
    "id": 4,
    "question": "Is certification required to become an HIM Coder?",
    "answer": "While certification is not always required, it is highly recommended. Certifications like Certified Coding Specialist (CCS) or Certified Professional Coder (CPC) enhance career opportunities."
  },
  {
    "id": 5,
    "question": "Can HIM Coders work remotely?",
    "answer": "Yes, many HIM Coders have the opportunity to work remotely, especially as telemedicine and electronic health records become more widespread."
  },
  {
    "id": 6,
    "question": "What is the salary range for HIM Coders?",
    "answer": "Salaries vary by location, experience, and certification. On average, HIM Coders earn between $45,000 to $65,000 per year, with experienced coders and those with certifications earning more."
  },
  {
    "id": 7,
    "question": "What is the job outlook for HIM Coders?",
    "answer": "The job outlook is very positive, with healthcare becoming more data-driven. HIM Coders are in high demand due to their critical role in maintaining accurate medical records and ensuring regulatory compliance."
  },
  {
    "id": 8,
    "question": "What are the qualifications to become an HIM Coder?",
    "answer": "Typically, HIM Coders need a high school diploma and a background in healthcare or coding. A formal training program or degree in Health Information Management is often preferred."
  },
  {
    "id": 9,
    "question": "What is the difference between an HIM Coder and a medical biller?",
    "answer": "An HIM Coder assigns medical codes to diagnoses and procedures, while a medical biller processes insurance claims and ensures that healthcare providers are reimbursed for their services."
  },
  {
    "id": 10,
    "question": "What career advancement opportunities are available for HIM Coders?",
    "answer": "HIM Coders can advance to roles like Health Information Manager, Medical Records Supervisor, or Compliance Officer, with additional certifications and experience. Specializations in areas like oncology or cardiology can also lead to higher pay and advanced roles."
  }
]

  



const EmFAQ = () => {
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

export default EmFAQ;
