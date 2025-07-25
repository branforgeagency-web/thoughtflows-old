

import React from "react";

const FeaturesCPMA = () => {
    const features = [
        {
            title: "Experienced Trainers",
            description:
                "Learn from certified professionals who have years of experience in auditing and coding. Our trainers provide personalized attention and mentorship to ensure your success.",
            // details: [
            //     "PowerPoint Presentations to visualize complex concepts and coding guidelines.",
            //     "Video Tutorials that reinforce coding skills and enhance understanding of medical procedures.",
            //     "Interactive Q&A sessions to clarify doubts in real-time and ensure personalized attention.",
            // ],
        },
        {
            title: "Comprehensive Curriculum",
            description:
                "Our CPMA course covers all aspects of medical auditing, from compliance regulations to risk analysis and statistical sampling.",
            // details: [
            //     "Chapter-wise Assessments designed to solidify your understanding of each module.",
            //     "Mock CPC Exams that replicate the real exam environment, helping you build confidence and improve time management skills.",
            //     "Detailed Feedback on practice tests to identify strengths and areas for improvement.",
            //     "Progress Tracking to ensure you are on the path to CPC certification success.",
            // ],
        },
        {
            title: "Flexible Learning Options",
            description:
                "You can choose between <strong>weekday or weekend batches</strong>, allowing you to tailor your learning schedule to your needs.",
            // details: [
            //     "Code Books: Up-to-date editions of CPT®, ICD-10-CM, and HCPCS Level II manuals.",
            //     "Chapter-wise Study Plans to organize and streamline your preparation effectively.",
            // ],
        },
        {
            title: "Interactive Learning",
            description:
                "Participate in live classes with PowerPoint presentations, case studies, and video tutorials. Real-world scenarios and case studies are included to make the learning process more practical.",
            // details: [
            //     "<strong>ICD-10-CM and ICD-10-PCS </strong>coding books that are essential for the certification exam.",
            //     "Self-study guides and <strong>revision notes</strong> designed to reinforce key concepts and ensure thorough understanding.",


            // ],
        },



        {
            title: "Exam Preparation",
            description:
                "Our program includes <strong>mock exams</strong>, chapter-wise assessments, and practice questions to help you prepare thoroughly for the CPMA certification exam.",
            // details: [
            //     "<strong>Chapter-wise assessments </strong>to test your knowledge and progress.",
            //     " <strong>Full-length mock exams</strong> that simulate the actual certification exam, giving you the confidence to pass with flying colors.",


            // ],
        },
    ];



    return (
        <div className="bg-gray-100 px-3 py-8">
            <div className=" container ">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                    Key Features of CPMA Training at Thoughtflows:
                </h2>




                <div className="overflow-x-auto flex justify-center container ">
                    <table className="min-w-80 table-auto bg-white shadow-md rounded-2xl border-1 border-b-gray-700">
                        <tbody>
                            {features.map((feature, index) => (
                                <tr key={index} className="border-b">
                                    {/* Feature Title */}
                                    <td className="px-6 py-4  font-semibold bg-[#14aeba] text-white text-lg">
                                        {feature.title}
                                    </td>
                                    {/* Feature Description */}
                                    <td className="px-6 py-4 text-gray-600">
                                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: feature.description }} />
                                        <ul className="list-disc pl-6 space-y-2">
                                            {feature?.details?.map((detail, idx) => (
                                                <li
                                                    key={idx}
                                                    dangerouslySetInnerHTML={{ __html: detail }}
                                                ></li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>



            </div>
        </div>
    );
};

export default FeaturesCPMA;

