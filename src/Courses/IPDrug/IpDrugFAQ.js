import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaCircle } from 'react-icons/fa'; // Import FaCircle for the dot icon

const faqData = [
    {
        "id": 1,
        "question": "What is the difference between MS-DRG and IPPS?",
        "answer": "MS-DRG (Medicare Severity Diagnosis-Related Group) is a system used to classify inpatient stays based on diagnoses and procedures. IPPS (Inpatient Prospective Payment System) is the reimbursement system based on these MS-DRG codes, designed by Medicare to pay hospitals a fixed rate for inpatient stays depending on the assigned DRG."
    },
    {
        "id": 2,
        "question": "What kind of support is available during the course?",
        "answer": "Thoughtflows provides continuous student support, including doubt resolution, interactive class sessions, and guidance from expert trainers. Additionally, practical coding exercises and assessments help reinforce concepts."
    },
    {
        "id": 3,
        "question": "Is there any certification after completing the course?",
        "answer": "Yes, after completing the IPDRG training at Thoughtflows, you will be prepared for the certification exam. You may pursue AAPC or AHIMA certifications related to inpatient coding to enhance your career prospects."
    },
    {
        "id": 4,
        "question": " How do I prepare for the certification exam after training?",
        "answer": "Thoughtflows provides mock exams, practice tests, and revision sessions to help you prepare for the certification exam. These mock tests are designed to simulate the actual exam environment and test your coding skills in a practical manner."
    },
    {
        "id": 5,
        "question": "Can I apply for a job as an IPDRG coder without certification?",
        "answer": "While some employers may consider candidates without certification, obtaining a relevant certification (such as Certified Inpatient Coder from AAPC) increases your job opportunities and credibility in the field of inpatient coding."
    },
    {
        "id": 6,
        "question": "What is the role of an IPDRG coder in reducing claim denials?",
        "answer": "IPDRG coders ensure accurate coding of inpatient diagnoses and procedures. By adhering to the ICD-10-CM/PCS and MS-DRG guidelines, they help prevent coding errors that could lead to claim denials, optimizing the revenue cycle and ensuring timely reimbursement."
    },
    {
        "id": 7,
        "question": "How long will it take to become proficient in IPDRG coding after completing the training?",
        "answer": "After completing the IPDRG training at Thoughtflows, proficiency can be achieved within a few months by practicing coding scenarios and real-world case studies. Continuous learning and hands-on experience will further enhance skills."
    },
    {
        "id": 8,
        "question": "Are there job opportunities available after completing IPDRG training?",
        "answer": "Yes, IPDRG coders are in demand at hospitals, healthcare facilities, and consulting firms. With Thoughtflows' placement support, you will be well-prepared to apply for job openings, including opportunities at acute care hospitals and long-term care centers."
    },
    {
        "id": 9,
        "question": "What is the difference between inpatient coding and outpatient coding?",
        "answer": "Inpatient coding involves coding for services provided during a hospital stay, typically requiring ICD-10-CM/PCS and MS-DRG codes. Outpatient coding is for services provided in outpatient settings and requires CPT and ICD-10-CM codes, but does not include the MS-DRG system used in inpatient coding."
    },
    {
        "id": 10,
        "question": "Do I need prior medical coding experience to enroll in the IPDRG course?",
        "answer": "While prior medical coding experience is beneficial, it is not required to enroll in the IPDRG training. Thoughtflows provides foundational knowledge in coding, ensuring that even beginners can grasp the required concepts and progress towards certification."
    }
];


const IpDrugFAQ = () => {
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
            <h2 className='text-center mb-5'>Frequently Asked Questions</h2>
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
                    <button className="faq-toggle" type="button" aria-label="Toggle frequently asked question answer" title="Expand or collapse this answer">
                        <i className="fa-solid fa-chevron-down"></i>
                        <i className="fa-solid fa-times"></i>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default IpDrugFAQ;
