import React from "react";

const CRCModule = () => {

  const courseModules = [
    {
      heading: "Fundamentals of Risk Adjustment & HCC Coding",
      points: [
        "Understanding risk adjustment models (CMS-HCC, HHS-HCC, etc.)",
        "Importance of accurate coding in risk-based payment models",
        "Overview of ICD-10-CM codes and their role in HCC"
      ]
    },
    {
      heading: "CMS Guidelines & Compliance in Risk Adjustment",
      points: [
        "Medicare Advantage (MA) and Affordable Care Act (ACA) risk models",
        "Documentation and coding requirements",
        "Avoiding fraud, waste, and abuse in risk adjustment coding"
      ]
    },
    {
      heading: "HCC Coding & Medical Record Documentation",
      points: [
        "Identifying chronic conditions and mapping them to HCC categories",
        "Best practices for provider documentation improvement (PDI)",
        "Addressing common documentation and coding errors"
      ]
    },
    {
      heading: "Risk Adjustment Audits & Validation",
      points: [
        "Conducting retrospective and prospective chart reviews",
        "Risk adjustment data validation (RADV) audit preparation",
        "Ensuring accurate code capture for optimal reimbursement"
      ]
    },
    {
      heading: "Advanced HCC Coding & Case Studies",
      points: [
        "Real-world case studies and hands-on coding exercises",
        "Hierarchical structure of HCC categories and risk scores",
        "Strategies to optimize documentation and reimbursement"
      ]
    },
    {
      heading: "Mock Tests & Certification Preparation",
      points: [
        "Full-Length Practice Exams mimicking actual HCC coding assessments",
        "Chapter-wise Knowledge Tests to reinforce understanding",
        "Performance Analysis & Time Management Strategies for success"
      ]
    }
  ];



  return (
    <div className="container mx-auto py-10 px-4 mb-12">
      <h2 className="text-3xl font-bold text-center my-8">
        HCC Training Modules
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
