import React from 'react';
import num1 from "../../images/Courses/number-1.png";
import num2 from "../../images/Courses/number-2.png";

const EligibleData = [
  {
    "id": 1,
    "title": "Exam Format:",
    "description": " Computer-based, multiple-choice questions."
  },
  {
    "id": 2,
    "title": "Number of Questions:",
    "description": " 130-160 questions (including scored and pretest questions)."
  },
  {
    "id": 3,
    "title": "Duration:",
    "description": "3.5 hours"
  },
  {
    "id": 4,
    "title": "Passing Score:",
    "description": " 300 or higher (scaled score)."
  },
  {
    "id": 5,
    "title": "Eligibility:",
    "description": " Completion of a CAHIIM-accredited associate degree program in Health Information Management."
  }
]  


function RhitSkills() {
  return (
    <div className="py-12 px-6 lg:px-32 bg-gradient-to-br from-[#0e929f] to-[#4da9b3] text-white">
      <h2 className="text-3xl font-semibold text-left p-2">RHIT Exam Overview</h2>
      <p className="text-left text-lg p-2">
      The Registered Health Information Technician (RHIT) Certification Exam, offered by AHIMA, assesses your knowledge and skills in health information management. Here are the key details:      </p>



      {/* <h3 className="text-2xl font-semibol mb-4 underline">Eligibility Criteria</h3> */}
      <ul className="space-y-6">
        {EligibleData.map((item) => (
          <li key={item.id} className="flex items-start space-x-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-primaryy font-bold border border-pritext-primaryy bg-white">
              {item.id}
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-0">{item.title}</h4>
              <p className="text-ms mt-2 text-gray-100">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* <p className="text-left text-lg mb-8">
        <span className="font-semibold">Note:</span> No strict prerequisites, but completing a basic medical coding course (such as CPC) or having coding experience is recommended for success.
      </p> */}
    </div>
  );
}

export default RhitSkills;
