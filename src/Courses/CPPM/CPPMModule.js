import React from "react";

const CRCModule = () => {

  const courseModules = [
    {
      heading: "Healthcare Practice Operations & Administration",
      points: [
        "Managing patient flow and appointment scheduling",
        "Policies and procedures for practice efficiency",
        "Electronic health records (EHR) and practice management software",
        "Risk management and quality improvement initiatives"
      ]
    },
    {
      heading: "Revenue Cycle & Financial Management",
      points: [
        "Basics of medical billing and coding for practice managers",
        "Understanding insurance reimbursements and denials",
        "Revenue cycle management strategies",
        "Cost control and financial reporting"
      ]
    },
    {
      heading: "Compliance & Risk Management",
      points: [
        "HIPAA regulations and patient data security",
        "OSHA guidelines and workplace safety",
        "Fraud, abuse, and Stark Law compliance",
        "Medical documentation and audit readiness"
      ]
    },
    {
      heading: "Human Resource & Staff Management",
      points: [
        "Hiring, training, and retaining healthcare staff",
        "Performance management and employee relations",
        "Payroll, benefits, and compensation strategies",
        "Leadership and team management in medical practices"
      ]
    },
    {
      heading: "Patient Relations & Quality Improvement",
      points: [
        "Enhancing patient experience and satisfaction",
        "Handling patient complaints and conflict resolution",
        "Implementing quality improvement initiatives",
        "Community outreach and patient education programs"
      ]
    },
    {
      heading: "Mock Tests",
      para: "Mock tests are crucial for assessing your knowledge and ensuring you’re fully prepared for CPPM certification:",
      points: [
        "Full-Length Practice Exams that simulate the actual CPPM exam",
        "Chapter-Wise Tests to reinforce learning for each module",
        "Detailed Performance Analysis to identify strengths and weaknesses",
        "Timed Assessments to build exam readiness and improve time management"
      ]
    }
  ];



  return (
    <div className="container mx-auto py-10 px-4 mb-12">
      <h2 className="text-3xl font-bold text-center my-8">
        CPPM Training Modules
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
