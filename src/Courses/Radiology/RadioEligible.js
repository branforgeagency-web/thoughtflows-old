import React from 'react';
import num1 from "../../images/Courses/number-1.png";
import num2 from "../../images/Courses/number-2.png";

const EligibleData = [
  {
    "id": 1,
    "title": "Medical coders looking to specialize in radiology",
    "description": ""
  },
  {
    "id": 2,
    "title": "Healthcare professionals seeking to expand their coding expertise",
    "description": ""
  },
  {
    "id": 3,
    "title": "Recent graduates in healthcare or life sciences",
    "description": ""
  },
  {
    "id": 4,
    "title": "Individuals preparing for AAPC Radiology Coding Certification exams like CIRCC",
    "description": ""
  }
]


function RadioEligible() {
  return (
    <div className="py-12 px-6 lg:px-32 bg-gradient-to-br from-[#0e929f] to-[#4da9b3] text-white">
      <h2 className="text-3xl font-semibold text-left mb-10">Who Can Apply?</h2>
      {/* <p className="text-left text-lg mb-6">
        Anyone interested in a career in medical coding or looking to specialize in surgery coding can apply. While no formal degree is required, having the following can be beneficial:
      </p> */}



      {/* <h3 className="text-2xl font-semibol mb-4 underline">Eligibility Criteria</h3> */}
      <ul className="space-y-6">
        {EligibleData.map((item) => (
          <li key={item.id} className="flex items-start space-x-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-primaryy font-bold border border-pritext-primaryy bg-white">
              {item.id}
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-0">{item.title}</h4>
              {/* <p className="text-ms mt-2 text-gray-100">{item.description}</p> */}
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

export default RadioEligible;
