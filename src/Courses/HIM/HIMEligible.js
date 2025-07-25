import React from 'react';
import num1 from "../../images/Courses/number-1.png";
import num2 from "../../images/Courses/number-2.png";
const benefits = [
  {
    "id": 1,
    "title": "Data Management",
    "description": [
      "Overseeing the collection, classification, and storage of patient information."
    ]
  },
  {
    "id": 2,
    "title": "Data Security",
    "description": [
      "Ensuring that healthcare data is protected from unauthorized access and breaches."
    ]
  },
  {
    "id": 3,
    "title": "Compliance",
    "description": [
      "Ensuring adherence to health regulations, like HIPAA (Health Insurance Portability and Accountability Act), to protect patient privacy."
    ]
  },
  {
    "id": 4,
    "title": "Healthcare Analytics",
    "description": [
      "Facilitating data analysis that supports decision-making and quality improvement in healthcare."
    ]
  }
]


  
function EmEligible() {
  return (
    <div className="py-12 px-6 lg:px-32 bg-gradient-to-br from-[#0e929f] to-[#4da9b3] text-white">
      <h2 className="text-3xl font-semibold text-left mb-10">Key responsibilities of HIM professionals include:
      </h2>
      {/* <p className="text-left text-lg mb-6">
        Anyone interested in a career in medical coding or looking to specialize in surgery coding can apply. While no formal degree is required, having the following can be beneficial:
      </p> */}

     

      {/* <h3 className="text-2xl font-semibol mb-4 underline">Eligibility Criteria</h3> */}
      <ul className="space-y-6">
        {benefits.map((item) => (
          <li key={item.id} className="flex items-start space-x-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-primaryy font-bold border border-pritext-primaryy bg-white">
              {item.id}
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-0">{item.title}</h4>
              {/* <p className="text-ms mt-2 text-gray-100">{item.description}</p> */}
              <ul className="list-disc">
                {item.description.map((item) => (
                  
                  <li>{item}</li>
                ))}
              </ul>
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

export default EmEligible;
