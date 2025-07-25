import React from 'react';
import num1 from "../../images/Courses/number-1.png";
import num2 from "../../images/Courses/number-2.png";

const EligibleData = [
  {
    "id": 1,
    "title": "Basic Knowledge of Medical Terminology and Anatomy",
    "description": "Familiarity with these concepts will help in understanding surgical procedures and coding accurately."
  },
  {
    "id": 2,
    "title": "Background in Healthcare",
    "description": "Experience in a healthcare setting or exposure to medical records is an advantage."
  },
  {
    "id": 3,
    "title": "Aspiring Medical Coders",
    "description": "Those who have completed general medical coding courses and want to specialize in surgery coding."
  },
  {
    "id": 4,
    "title": "Certified Coders",
    "description": "Current CPC, COC, CIC, or CRC-certified coders looking to expand their skills."
  },
  {
    "id": 5,
    "title": "Career Changers",
    "description": "Individuals from other fields who are interested in transitioning into medical coding."
  },
  {
    "id": 6,
    "title": "Students of Allied Health Programs",
    "description": "Those studying healthcare-related fields can benefit from surgery coding expertise."
  }
];

function  SurgeryEligible() {
  return (
    <div className="py-12 px-6 lg:px-32 bg-gradient-to-br from-[#0e929f] to-[#4da9b3] text-white">
      <h2 className="text-3xl font-semibold text-left mb-4">Eligibility for Surgery Coding Training</h2>
      <p className="text-left text-lg mb-6">
        Anyone interested in a career in medical coding or looking to specialize in surgery coding can apply. While no formal degree is required, having the following can be beneficial:
      </p>

     

      <h3 className="text-2xl font-semibol mb-4 underline">Eligibility Criteria</h3>
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

      <p className="text-left text-lg mb-8">
        <span className="font-semibold">Note:</span> No strict prerequisites, but completing a basic medical coding course (such as CPC) or having coding experience is recommended for success.
      </p>
    </div>
  );
}

export default SurgeryEligible;
