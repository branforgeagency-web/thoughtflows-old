import React from 'react';

const objectives = [
    {
      "title": "Master ICD-10-CM, CPT, and HCPCS Level II coding systems"
    },
    {
      "title": "Develop skills in accurate medical record abstraction"
    },
    {
      "title": "Ensure compliance with coding guidelines and regulations"
    },
    {
      "title": "Learn medical terminology, anatomy, and disease processes"
    },
    {
      "title": "Gain proficiency in healthcare documentation and reimbursement processes"
    }
  ];
const objectives1 = [
    {
      "title": "Live Classes",
      "text": "Interactive sessions with PowerPoint presentations and video demonstrations."
    },
    {
      "title": "Real-World Case Studies",
      "text": "Hands-on practice with real clinical scenarios."
    },
    {
      "title": "Mock Exams",
      "text": "Chapter-wise tests and full-length mock exams to evaluate your knowledge."
    },
    {
      "title": "Placement Support",
      "text": "Guidance for resume building, interview preparation, and job search."
    }
  ]
  
  


const EMObjectives = () => {
    return (
        <div className="py-16 px-24 bg-gray-100 flex flex-col md:flex-row justify-center gap-20"  >
            <div>
            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold text-primaryy">Course Objectives</h2>
            </div>
            <div className="flex justify-center">
                <table className="min-w-80 table-auto bg-white shadow-md rounded-lg">
                    {/* <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-gray-600">Objective</th>
              <th className="px-6 py-3 text-left text-gray-600">Description</th>
            </tr>
          </thead> */}
                    <tbody>
                        {objectives.map((objective, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-6 py-4 text-secondaryy font-semibold">{objective.title}</td>
                                {/* <td className="px-6 py-4 text-gray-600">{objective.text}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
            <div>
            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold text-primaryy">Course Features</h2>
            </div>
            <div className="flex justify-center">
                <table className="min-w-80 table-auto bg-white shadow-md rounded-lg">
                    {/* <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-gray-600">Objective</th>
              <th className="px-6 py-3 text-left text-gray-600">Description</th>
            </tr>
          </thead> */}
                    <tbody>
                        {objectives1.map((objective, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-6 py-4 text-secondaryy font-semibold">{objective.title}</td>
                                <td className="px-6 py-4 text-gray-600">{objective.text}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default EMObjectives;
