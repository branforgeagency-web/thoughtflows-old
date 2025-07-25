import React from "react";
const objectives1 = {
  "titles": [
    "Live Interactive Classes with experienced instructors",
    "Comprehensive Study Materials including coding books, online resources, and revision guides",
    "Chapter-wise Assessments to track progress",
    "Mock Exams simulating the CCS-P certification exam environment",
    "Resume Enhancement and Interview Preparation",
    "Job Placement Support to help you secure your first coding position"
  ]
}
  const obj={
    "titles": [
      "Individuals Interested in Outpatient Coding",
      "Medical Coding Professionals",
      "Healthcare Professionals",
      "Graduates of Medical Coding Programs"
    ]
  }
  
  
const COWho = () => {
  return (
    <div className=" bg-slate-100 mb-10 py-5">
      {/* Books Required Section */}

      <div className=" px-3 py-3 pt-5 container grid grid-cols-1 md:grid-cols-12">
        <div className=" col-span-1 md:col-span-6 ">
          <section className="pt-6 md:px-8  bg-blue-100    border-2 border-blue-400 pb-8">
            <h3 className="text-3xl font-semibold mb-4 text-center mb-3">
              {" "}
              Key Features
            </h3>

            <ul className="list-disc  text-gray-700">
            {objectives1.titles.map((objective, index) => (
                            <li key={index} className="px-6 py-2 text-secondaryy font-semibold">
                        {objective}
                             </li>
                        ))}
            </ul>
          </section>
        </div>

        <div className=" col-span-1 md:col-span-6 pt-6 bg-[#19959f4a] ">
          <section className="md:px-8">
            <h3 className="text-3xl font-semibold mb-4 text-center mb-3">
            Who Can Apply for the CCS-P Certification Course?            </h3>

            <ul className="list-disc">
            {obj.titles.map((objective, index) => (
                            <li key={index} className="px-6 py-2 text-secondaryy font-semibold">
                        {objective}
                             </li>
                        ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default COWho;
