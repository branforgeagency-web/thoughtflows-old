import React from 'react';
import num1 from "../../images/Courses/number-1.png";
import num2 from "../../images/Courses/number-2.png";
const benefits =[
  {
    "id": 1,
    "title": "Medical Record Review",
    "description": [
      "CCS-P coders meticulously review patient medical records, such as charts, progress notes, and laboratory reports, to gather all necessary information for coding.",
      "They examine the patient’s diagnoses, medical conditions, procedures performed, and treatments provided by physicians to assign the appropriate codes."
    ]
  },
  {
    "id": 2,
    "title": "Assigning Diagnostic and Procedural Codes",
    "description": [
      "CPT® (Current Procedural Terminology) codes are used to document the procedures and services provided by physicians. CCS-P coders must have a deep understanding of CPT codes to accurately describe medical, surgical, and diagnostic services.",
      "ICD-10-CM (International Classification of Diseases, Clinical Modification) codes are used to document diagnoses, including conditions, diseases, and other medical problems that physicians diagnose during patient visits.",
      "HCPCS Level II codes are used for additional services and supplies that may not be covered by CPT codes, such as durable medical equipment, ambulance services, or specific drugs."
    ]
  },
  {
    "id": 3,
    "title": "Insurance Billing",
    "description": [
      "CCS-P coders play a vital role in ensuring healthcare providers are reimbursed for the services they provide. This is done by accurately coding the procedures and diagnoses, which are then submitted to insurance companies or Medicare/Medicaid for payment.",
      "They ensure that the codes align with insurance policies, ensuring timely and accurate payment for the services provided."
    ]
  },
  {
    "id": 4,
    "title": "Regulatory Compliance and Documentation",
    "description": [
      "A key responsibility of CCS-P coders is adhering to regulations set forth by the HIPAA (Health Insurance Portability and Accountability Act) and other healthcare regulations. These regulations govern how patient information is used, disclosed, and protected during the coding process.",
      "Coders must ensure that the codes assigned to patient records meet the requirements of the Centers for Medicare and Medicaid Services (CMS) and other regulatory bodies.",
      "They must also follow the National Correct Coding Initiative (NCCI), which helps prevent improper coding practices that could result in billing errors and fraud."
    ]
  },
  {
    "id": 5,
    "title": "Communication with Healthcare Providers",
    "description": [
      "CCS-P coders often work directly with physicians, healthcare administrators, and other healthcare professionals to clarify discrepancies in coding or documentation.",
      "They must be skilled in effective communication to ensure that all medical records are complete and accurate, enabling smooth billing processes."
    ]
  }
]


  
function EmEligible() {
  return (
    <div className="py-12 px-6 lg:px-32 bg-gradient-to-br from-[#0e929f] to-[#4da9b3] text-white">
      <h2 className="text-3xl font-semibold text-left mb-10">Key Responsibilities of a CCS-P Coder:</h2>
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
