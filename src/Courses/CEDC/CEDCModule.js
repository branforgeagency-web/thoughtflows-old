import React from "react";

const CRCModule = () => {

  const courseModules = [
    {
      heading: "Medical Terminology & Anatomy for Emergency Medicine",
      paragraph: "Understanding medical terminology and human anatomy is essential for accurate emergency department coding. This module covers:",
      points: [
        "Medical Word Roots, Prefixes, and Suffixes",
        "Body Systems and Trauma Terminology",
        "Anatomical Positions, Directions, and Planes",
        "Pathological Conditions and Emergency Procedures",
        "Medical Abbreviations and Acronyms"
      ]
    },
    {
      heading: "Emergency Department Coding Guidelines",
      paragraph: "This module focuses on understanding coding requirements for emergency visits:",
      points: [
        "Emergency Department E/M Coding Guidelines",
        "Facility vs. Professional Coding in Emergency Settings",
        "Critical Care and Observation Coding",
        "Modifier Usage for Emergency Services",
        "Payer-Specific Documentation Requirements"
      ]
    },
    {
      heading: "CPT Coding for Emergency Procedures",
      paragraph: "Master coding for procedures commonly performed in emergency departments using the CPT system:",
      points: [
        "Laceration Repairs and Wound Closures",
        "Fracture Care and Splinting",
        "Burn Treatments and Wound Management",
        "Cardiopulmonary Resuscitation (CPR) and Intubation",
        "Injection and Infusion Coding"
      ]
    },
    {
      heading: "HCPCS Level II Coding for Emergency Services",
      paragraph: "Learn the Healthcare Common Procedure Coding System (HCPCS) Level II, used for supplies, ambulance services, and more:",
      points: [
        "Structure and Format of HCPCS Codes",
        "Ambulance Transport and Emergency Services Coding",
        "Coding for Supplies, Medications, and Equipment",
        "Compliance and Documentation Requirements"
      ]
    },
    {
      heading: "Emergency Department Billing Regulations & Compliance",
      paragraph: "Learn ethical practices and legal requirements in emergency medical coding:",
      points: [
        "HIPAA (Health Insurance Portability and Accountability Act)",
        "Fraud, Abuse, and Upcoding Risks",
        "Medicare and Medicaid Regulations for Emergency Services",
        "Coding Ethics and Professionalism"
      ]
    },
    {
      heading: "Case Studies and Real-World Applications",
      paragraph: "Practical experience enhances confidence and prepares you for real-life emergency department coding challenges:",
      points: [
        "Hands-On Coding Exercises",
        "Real-World Emergency Department Case Studies",
        "Trauma and Acute Care Coding Scenarios",
        "Billing Scenarios with Detailed Feedback"
      ]
    },
    {
      heading: "Mock Tests",
      paragraph: "Mock tests are crucial for assessing your knowledge and ensuring you’re fully prepared for CEDC certification:",
      points: [
        "Full-Length Practice Exams that simulate the actual CEDC exam",
        "Chapter-Wise Tests to reinforce learning for each module",
        "Detailed Performance Analysis to identify strengths and weaknesses",
        "Timed Assessments to build exam readiness and improve time management"
      ]
    }
  ];


  return (
    <div className="container mx-auto py-10 px-4 mb-12">
      <h2 className="text-3xl font-bold text-center my-8">
        CEDC Training Modules
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {courseModules.map((module, index) => (
          <div
            key={index}
            className="p-6 border-b-8 border-[#14aeba] bg-slate-200 rounded-3xl"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {index + 1}. {module.heading}
            </h2>
            <p className="text-gray-600 mb-4">
              {module.paragraph}
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {module.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {module.subpara && (
              <p className="text-gray-600">
                {/* {module.subpara} */}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>


    // <div className=" container mx-auto  py-10 px-4 mb-12">
    //   <h1 className="text-3xl font-bold text-center my-8">
    //     CRC Training Modules
    //   </h1>
    //   <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 ">
    //     {modules.map((module, index) => (
    //       <div
    //         key={index}
    //         className=" p-6 border-b-8 border-[#14aeba]  bg-slate-200 rounded-3xl  "
    //       >
    //         <h2 className="text-xl font-semibold text-gray-800 mb-3">
    //           {index + 1}. {module.title}
    //         </h2>
    //         <p
    //           className="text-gray-600 mb-4"
    //           dangerouslySetInnerHTML={{ __html: module.description }}
    //         />
    //         <ul className="list-disc list-inside text-gray-700">
    //           {module?.details?.map((detail, i) => (
    //             <li
    //               key={i}
    //               dangerouslySetInnerHTML={{ __html: detail }}
    //             />
    //           ))}
    //         </ul>

    //         <p
    //           className="text-gray-600 mb-4"
    //           dangerouslySetInnerHTML={{ __html: module.description1 }}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>

  );
};

export default CRCModule;
