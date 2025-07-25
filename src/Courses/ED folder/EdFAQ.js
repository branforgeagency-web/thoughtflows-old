import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaCircle } from 'react-icons/fa'; // Import FaCircle for the dot icon

const faqData = [
    {
        "id": 1,
        "question": "What is the role of an Emergency Department (ED) Coder?",
        "answer": "ED Coders are responsible for translating medical documentation from emergency room visits into standardized codes for diagnoses, procedures, and treatments. They ensure correct billing for insurance purposes and play a key role in the healthcare revenue cycle."
    },
    {
        "id": 2,
        "question": "What is the difference between ED coding and other types of medical coding?",
        "answer": "ED coding focuses specifically on services rendered in emergency departments, which include critical care, trauma care, and urgent treatments. Unlike outpatient coding, ED coding deals with complex, emergency-specific coding scenarios."
    },
    {
        "id": 3,
        "question": "What types of cases does an ED Coder typically encounter?",
        "answer": "ED Coders deal with a wide range of cases, such as trauma, lacerations, fractures, burns, critical care scenarios, and emergency medical procedures that require urgent attention."
    },
    {
        "id": 4,
        "question": "How does Emergency Department coding impact reimbursement?",
        "answer": "ED coding is essential for ensuring that healthcare providers are reimbursed for the emergency services provided. Accurate coding ensures that the services are properly billed according to the correct codes, improving reimbursement and reducing claims denials."
    },
    {
        "id": 5,
        "question": "What certification can I pursue after completing ED coding training?",
        "answer": "After completing ED coding training, you can pursue the Certified Emergency Department Coder (CEDC) certification from AAPC, which is widely recognized in the healthcare industry."
    },
    {
        "id": 6,
        "question": "Do I need to be a certified coder to start working in an Emergency Department?",
        "answer": "While certification is not always mandatory to start, CEDC certification can significantly improve your chances of securing a job and demonstrate your proficiency in ED coding, which is highly valued by employers."
    },
    {
        "id": 7,
        "question": "Can I work as an ED Coder remotely?",
        "answer": "Yes, many hospitals and healthcare organizations offer remote coding positions. However, some ED coding jobs may require in-person attendance, particularly in fast-paced, high-volume settings like hospitals and urgent care centers."
    },
    {
        "id": 8,
        "question": "What skills are necessary for success as an ED Coder?",
        "answer": "An ED Coder should have a solid understanding of medical terminology, anatomy, ICD-10-CM, CPT coding systems, and HCPCS Level II codes. Strong attention to detail and the ability to work under pressure are also crucial in the fast-paced emergency department setting."
    },
    {
        "id": 9,
        "question": "What are the benefits of learning ED coding at Thoughtflows?",
        "answer": "Thoughtflows offers a structured curriculum with live classes, real-world coding scenarios, placement assistance, and mock interviews, helping you build practical skills while also preparing for certification exams."
    },
    {
        "id": 10,
        "question": "How will Thoughtflows help me prepare for my ED coding certification?",
        "answer": "Thoughtflows provides comprehensive study materials, mock exams, and interactive training sessions to ensure you're ready for the CEDC exam. They also provide personalized training and exam strategies to help you succeed."
    }
];



const EdFAQ = () => {
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

export default EdFAQ;
