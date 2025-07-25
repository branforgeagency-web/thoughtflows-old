import React from 'react';
import num1 from "../../images/Courses/number-1.png";
import num2 from "../../images/Courses/number-2.png";
const benefits = [
  {
    id:1,
    title: "Analyzing Medical Records",
    description: [
      "CCC thoroughly review clinical documentation, such as physician notes, pathology reports, imaging results, and surgical reports.",
      "They extract relevant details related to diagnoses, treatments, and procedures performed during a patient's visit.",
    ],
  },
  {
    id:2,
    title: "Assigning Appropriate Codes",
    description: [
      "Coders translate extracted medical information into standardized codes using different classification systems.",
      "The primary coding systems include:",
      " ICD-10 (International Classification of Diseases, 10th Edition) for diagnoses.",
      " ICD-11 (adopted in some countries) for advanced classification of diseases.",
      " CPT (Current Procedural Terminology) for procedures and services performed (commonly used in the United States).",
      " HCPCS (Healthcare Common Procedure Coding System) for additional procedures, supplies, and services.",
      " DRGs (Diagnosis-Related Groups) for categorizing hospital cases for reimbursement purposes.",
    ],
  },
  {
    id:3,
    title: "Ensuring Accuracy and Completeness",
    description: [
      "Coders verify that the assigned codes accurately reflect the medical services and diagnoses documented by healthcare providers.",
      "They ensure that all medical records are coded consistently, without errors, and in accordance with official guidelines.",
    ],
  },
  {
    id:4,
    title: "Maintaining Compliance",
    description: [
      "CCC must adhere to healthcare regulations and standards, including:",
      "HIPAA (Health Insurance Portability and Accountability Act) for patient data privacy in the United States.",
      " National and international coding guidelines established by governing bodies (e.g., WHO, AHIMA, AAPC).",
      "Compliance helps prevent fraud, incorrect billing, and legal issues.",
    ],
  },
  {
    id:5,
    title: "Collaboration with Healthcare Teams",
    description: [
      "Coders work closely with physicians, nurses, and other healthcare professionals to clarify documentation and resolve discrepancies.",
      "They may also assist with quality improvement initiatives and help ensure complete and accurate medical documentation.",
    ],
  },
  {
    id:6,
    title: "Supporting Reimbursement Processes",
    description: [
      "Accurate coding is essential for generating claims submitted to insurance companies and government payers (e.g., Medicare, Medicaid).",
      "Coders ensure that the codes support the services billed, facilitating proper reimbursement.",
    ],
  },
  {id:7,
    title: "Generating Health Data and Statistics",
    description: [
      "Clinical coding supports healthcare analytics by providing data for research, public health studies, and resource allocation.",
      "Health organizations use coded data to track disease prevalence, treatment outcomes, and healthcare trends.",
    ],
  },
];

  
function EmEligible() {
  return (
    <div className="py-12 px-6 lg:px-32 bg-gradient-to-br from-[#0e929f] to-[#4da9b3] text-white">
      <h2 className="text-3xl font-semibold text-left mb-10">Responsibilities of a CCC</h2>
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
