import React from "react";

const CRCModule = () => {
  
  const courseModules = [
    {
        heading: "Introduction to Interventional Radiology",
        points: [
            "Fundamentals of minimally invasive image-guided procedures",
            "Understanding radiology imaging modalities",
            "Basic coding principles for IVR"
        ]
    },
    {
        heading: "Vascular Interventions",
        points: [
            "Coding for angioplasty, stent placement, and thrombectomy",
            "Arterial and venous embolization procedures",
            "Catheter-based interventions and dialysis access maintenance"
        ]
    },
    {
        heading: "Non-Vascular Interventions",
        points: [
            "Biopsy and drainage procedures",
            "Tumor ablation and pain management techniques",
            "Gastrointestinal and genitourinary interventions"
        ]
    },
    {
        heading: "Radiology Coding & Compliance",
        points: [
            "CPT, ICD-10, and HCPCS coding for IVR procedures",
            "Medicare, Medicaid, and private payer guidelines",
            "HIPAA compliance and documentation best practices"
        ]
    },
    {
        heading: "Revenue Cycle Management & Reimbursement",
        points: [
            "Understanding physician and facility reimbursement",
            "Denial management and appeals process",
            "Strategies to optimize revenue in interventional radiology"
        ]
    },
    {
        heading: "Mock Exams & Performance Assessments",
        points: [
            "Full-length practice exams to simulate real-world scenarios",
            "Chapter-wise tests for in-depth understanding",
            "Detailed performance analysis to identify strengths and weaknesses",
            "Timed assessments for improved exam readiness"
        ]
    }
];




  return (
    <div className="container mx-auto py-10 px-4 mb-12">
      <h1 className="text-3xl font-bold text-center my-8">
          IVR Training Modules
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {courseModules.map((module, index) => (
          <div
            key={index}
            className="p-6 border-b-8 border-[#14aeba] bg-slate-200 rounded-3xl"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {index + 1}. {module.heading}
            </h2>
           {module.para && (
            <p className="text-gray-600 mb-4">
              {module.para}
            </p>
           )}
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
