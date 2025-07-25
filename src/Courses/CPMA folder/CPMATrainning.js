


import React from 'react';
import num1 from "../../images/Courses/number-1.png";
import num2 from "../../images/Courses/number-2.png";

const EligibleData = [
    {
        "id": 1,
        "title": "Format",
        "description": "Multiple-choice questions based on practical auditing scenarios."
    },
    {
        "id": 2,
        "title": "Content",
        "description": "Topics include auditing methodologies, coding systems, healthcare compliance, and fraud prevention."
    },
    {
        "id": 3,
        "title": "Duration",
        "description": " Typically, the exam lasts for a few hours, depending on the number of questions."
    },
    {
        "id": 4,
        "title": "Certification Validity",
        "description": "The CPMA certification is valid for two years, after which it requires recertification to maintain your credentials."
    },

];

const Data = [
    {
        "id": 1,
        "title": "",
        "description": "Demonstrates your expertise in medical auditing, enhancing your career prospects."
    },
    {
        "id": 2,
        "title": "",
        "description": "Recognized by employers across the healthcare industry, providing a competitive edge."
    },


];

function CPMATrainning() {
    return (
        <div className="py-12 px-6 lg:px-32 bg-gradient-to-br from-[#0e929f] to-[#4da9b3] text-white">
            <h2 className="text-3xl font-semibold text-left mb-4">CPMA Exam and Certification</h2>
            <p className="text-left text-lg mb-6">
                The <strong>Certified Professional Medical Auditor (CPMA) </strong>exam is a comprehensive assessment that evaluates your knowledge of various auditing methodologies, coding systems (ICD-10, CPT®, and HCPCS), and healthcare compliance regulations. The exam is designed to simulate real-world auditing scenarios, ensuring that candidates are prepared to handle actual challenges in medical auditing roles.
            </p>



            <h3 className="text-2xl font-semibold mb-4 underline decoration-2 underline-offset-4">
                Key Points of the CPMA Exam:
            </h3>
            <ul className="space-y-6">
                {EligibleData.map((item) => (
                    <li key={item.id} className="flex items-start space-x-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-primaryy font-bold border border-pritext-primaryy bg-white">
                            {item.id}
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold">{item.title}</h4>
                            <p className="text-ms mt-2 text-gray-100">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>








            <h3 className="text-2xl font-semibold mb-4 underline decoration-2 underline-offset-4">
                Certification Benefits:
            </h3>
            <ul className="space-y-6">
                {Data.map((item) => (
                    <li key={item.id} className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-primaryy font-bold border border-pritext-primaryy bg-white">
                            {item.id}
                        </div>
                        <div>
                            {/* <h4 className="text-xl font-semibold">{item.title}</h4> */}
                            <p className="text-ms mt-3 text-gray-100">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <p>Upon passing the CPMA exam, you will receive an official certification from AAPC, which will be essential for pursuing higher-paying roles in medical auditing, compliance, and healthcare management.</p>


        </div>
    );
}

export default CPMATrainning;
