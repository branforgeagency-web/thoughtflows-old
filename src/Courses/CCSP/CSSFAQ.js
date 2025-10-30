import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaCircle } from 'react-icons/fa'; // Import FaCircle for the dot icon

const faqData = [
  {
    "id": 1,
    "question": "What is CCS-P?",
    "answer": "CCS-P stands for Certified Coding Specialist – Physician-based, and it is a certification for professionals who specialize in coding for physician offices and outpatient services."
  },
  {
    "id": 2,
    "question": "Do I need previous coding experience to enroll in the course?",
    "answer": "While prior medical knowledge is helpful, it’s not mandatory to have experience in coding to enroll. Our course covers everything from the basics to advanced coding."
  },
  {
    "id": 3,
    "question": "How can I prepare for the CCS-P exam?",
    "answer": "The course includes mock exams, practice tests, and chapter-wise assessments that simulate the actual CCS-P exam to help you prepare effectively."
  },
  {
    "id": 4,
    "question": "What is the benefit of CCS-P certification?",
    "answer": "CCS-P certification enhances career opportunities, increases earning potential, and proves expertise in outpatient coding, particularly in physician-based settings."
  },
  {
    "id": 5,
    "question": "What is the difference between CCS-P and CCS certifications?",
    "answer": "CCS is a general certification for inpatient and outpatient coding across various healthcare settings, while CCS-P specifically focuses on outpatient coding for physician-based services, such as physician offices, clinics, and specialty centers."
  },
  {
    "id": 6,
    "question": "What coding systems are covered in the CCS-P course?",
    "answer": "The course covers major coding systems, including CPT® (Current Procedural Terminology), ICD-10-CM (International Classification of Diseases, Clinical Modification), and HCPCS Level II (Healthcare Common Procedure Coding System)."
  },
  {
    "id": 7,
    "question": "Is the CCS-P course suitable for beginners?",
    "answer": "Yes, the CCS-P course is designed for both beginners and experienced professionals. It starts with foundational concepts and progresses to advanced coding techniques, making it accessible for those new to the field."
  },
  {
    "id": 8,
    "question": "Are there any prerequisites for taking the CCS-P exam?",
    "answer": "While there are no mandatory prerequisites for enrolling in the CCS-P course, it is recommended to have foundational knowledge of anatomy, medical terminology, and coding systems before taking the exam."
  },
  {
    "id": 9,
    "question": "What is the passing rate for the CCS-P exam?",
    "answer": "While passing rates vary, Thoughtflows offers comprehensive preparation to increase your chances of success by providing thorough training, exam simulations, and dedicated support throughout the learning process."
  },
  {
    "id": 10,
    "question": "What kind of job roles can I pursue after obtaining CCS-P certification?",
    "answer": "With a CCS-P certification, you can pursue roles such as Outpatient Medical Coder, Physician-based Coder, Medical Billing Specialist, or Healthcare Compliance Auditor in physician offices, group practices, and outpatient clinics."
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
