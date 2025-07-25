import React from "react";

const COTypes = () => {
    const modules = [
      {
        "title": "Growing Job Market",
        "description": ["The demand for HIM Coders is increasing as healthcare becomes more data-driven."]
      },
      {
        "title": "Job Security",
        "description": ["HIM Coders play a critical role in healthcare, ensuring accurate data management and processing."]
      },
      {
        "title": "Potential for Remote Work",
        "description": ["Many HIM Coders have the flexibility to work from home, offering a better work-life balance."]
      },
      {
        "title": "Competitive Salary",
        "description": ["With certifications and experience, HIM Coders can earn a competitive salary in a high-demand field."]
      },
      {
        "title": "Diverse Work Environments",
        "description": ["HIM Coders can work in hospitals, insurance companies, research institutions, clinics, and more."]
      },
      {
        "title": "Positive Impact",
        "description": ["HIM Coders ensure the accuracy and confidentiality of healthcare data, directly contributing to patient care and healthcare efficiency."]
      }
    ]
    
      

    return (
        <div className=" container mx-auto  py-5 px-4 ">
            <h1 className="text-3xl font-semibold mb-4  text-primaryy text-center">
            Why Pursue a Career as an HIM Coder?
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 ">
                {modules.map((module, index) => (
                    <div
                        key={index}
                        className=" p-6 border-b-8 border-[#14aeba]  bg-slate-200 rounded-3xl  "
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">
                            {index + 1}. {module.title}
                        </h2>
                        <ul className="list-disc">
                {module.description.map((item) => (
                  
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
