import React from "react";

const COTypes = () => {
  const modules = [
    {
      "module": "Module 1: Introduction to Medical Terminology & Anatomy",
      "details": [
        "Basic human anatomy",
        "Medical terms and abbreviations used in coding"
      ]
    },
    {
      "module": "Module 2: CPT® Coding",
      "details": [
        "Overview of CPT® system",
        "Detailed review of CPT® code categories (Evaluation and Management, Surgery, Radiology, Pathology, etc.)"
      ]
    },
    {
      "module": "Module 3: ICD-10-CM Coding",
      "details": [
        "Diagnosis coding principles",
        "ICD-10-CM structure and guidelines"
      ]
    },
    {
      "module": "Module 4: HCPCS Level II Coding",
      "details": [
        "Understanding HCPCS codes for non-physician services and supplies",
        "Correct coding for Medicare, Medicaid, and insurance reimbursements"
      ]
    },
    {
      "module": "Module 5: Medical Coding Guidelines and Compliance",
      "details": [
        "HIPAA regulations",
        "Compliance with coding standards and billing procedures"
      ]
    },
    {
      "module": "Module 6: Practice with Case Studies & Real-World Applications",
      "details": [
        "Coding practice based on real patient charts",
        "Understanding medical records and applying coding principles"
      ]
    },
    {
      "module": "Module 7: CCS-P Exam Preparation",
      "details": [
        "Chapter-wise tests",
        "Mock exams to prepare for the CCS-P certification exam",
        "Strategies for answering exam questions efficiently"
      ]
    },
    {
      "module": "Module 8: Career Guidance & Placement Support",
      "details": [
        "Resume building and job application tips",
        "Mock interviews",
        "Placement assistance with top healthcare providers"
      ]
    }
  ]



  return (
    <div className=" container mx-auto  py-5 px-4 ">
      <h2 className="text-3xl font-semibold mb-4  text-primaryy text-center">
        Course Outline
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 ">
        {modules.map((modul, index) => (
          <div
            key={index}
            className=" p-6 border-b-8 border-[#14aeba]  bg-slate-200 rounded-3xl  "
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {index + 1}. {modul.module}
            </h2>
            <ul className="list-disc">
              {modul.details.map((item) => (

                <li>{item}</li>
              ))}
            </ul>
            {/* <ul className="list-disc list-inside text-gray-700">
                            {module?.details?.map((detail, i) => (
                                <li
                                    key={i}
                                    dangerouslySetInnerHTML={{ __html: detail }}
                                />
                            ))}
                        </ul> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default COTypes;
