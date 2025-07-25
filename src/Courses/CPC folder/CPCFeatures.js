



import React from "react";

const CourseFeaturesGrid = () => {
    const features = [
        {
            title: "Live Interactive Classes",
            description:
                "Our live sessions provide a dynamic and engaging learning environment. Each class utilizes:",
            details: [
                "PowerPoint Presentations to visualize complex concepts and coding guidelines.",
                "Video Tutorials that reinforce coding skills and enhance understanding of medical procedures.",
                "Interactive Q&A sessions to clarify doubts in real-time and ensure personalized attention.",
            ],
        },
        {
            title: "Practice Exams",
            description:
                "We offer a structured approach to mastering medical coding through:",
            details: [
                "Chapter-wise Assessments designed to solidify your understanding of each module.",
                "Mock CPC Exams that replicate the real exam environment, helping you build confidence and improve time management skills.",
                "Detailed Feedback on practice tests to identify strengths and areas for improvement.",
                "Progress Tracking to ensure you are on the path to CPC certification success.",
            ],
        },
        {
            title: "Self-Study Materials",
            description:
                "Our comprehensive study resources support independent learning and exam preparation:",
            details: [
                "Code Books: Up-to-date editions of CPT®, ICD-10-CM, and HCPCS Level II manuals.",
                "Chapter-wise Study Plans to organize and streamline your preparation effectively.",
            ],
        },
        {
            title: "Interview Preparation",
            description:
                "Thoughtflows goes beyond training to ensure you secure your first job confidently:",
            details: [
                "Resume Enhancement: Expert guidance on creating a compelling resume tailored to medical coding roles.",
                "Mock Interviews: Simulated interview sessions to build confidence, refine communication skills, and understand common interview questions.",
                "Job Placement Support:",
                "Networking Opportunities with healthcare employers and professionals.",
                "Placement Assistance to help you land positions offering competitive salary packages in physician offices, clinics, hospitals, and insurance companies.",
            ],
        },
    ];

    const highlightText = (text) => {
        const highlights = [
            { match: "PowerPoint Presentations", tag: "<strong>PowerPoint Presentations</strong>" },
            { match: "Video Tutorials", tag: "<strong>Video Tutorials</strong>" },
            { match: "Interactive Q&A", tag: "<strong>Interactive Q&A</strong>" },
            { match: "Chapter-wise Assessments", tag: "<strong>Chapter-wise Assessments</strong>" },
            { match: "Mock CPC Exams", tag: "<strong>Mock CPC Exams</strong>" },
            { match: "Detailed Feedback", tag: "<strong>Detailed Feedback</strong>" },
            { match: "Progress Tracking", tag: "<strong>Progress Tracking</strong>" },
            { match: "Code Books", tag: "<strong>Code Books</strong>" },
            { match: "CPT®, ICD-10-CM, and HCPCS Level II", tag: "<strong>CPT®, ICD-10-CM, and HCPCS Level II</strong>" },
            { match: "Chapter-wise Study Plans", tag: "<strong>Chapter-wise Study Plans</strong>" },
            { match: "Resume Enhancement:", tag: "<strong>Resume Enhancement:</strong>" },
            { match: "Mock Interviews:", tag: "<strong>Mock Interviews:</strong>" },

            { match: "Job Placement Support:", tag: "<strong>Job Placement Support:</strong>" },

            { match: "Networking Opportunities", tag: "<strong>Networking Opportunities</strong>" },

            { match: "Placement Assistance", tag: "<strong>Placement Assistance</strong>" },
        ];

        let highlightedText = text;
        highlights.forEach(({ match, tag }) => {
            const regex = new RegExp(`(${match})`, "g");
            highlightedText = highlightedText.replace(regex, tag);
        });

        return highlightedText;
    };

    return (
        // <div className="bg-gray-100 py-8">
        //     <div className=" container ">
        //         <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        //             Course Features
        //         </h2>
        //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        //             {features.map((feature, index) => (
        //                 <div
        //                     key={index}
        //                     className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300   "
        //                 >
        //                     {/* Title */}
        //                     <h2 className="text-2xl font-semibold text-white mb-2 bg-[#16adba] p-2 rounded  text-center justify-center">
        //                         {feature.title}
        //                     </h2>
        //                     {/* Description */}
        //                     <p className="text-gray-700  p-3 mb-0">
        //                         {feature.description}
        //                     </p>
        //                     {/* Details */}
        //                     <ul className="list-disc space-y-2  text-gray-600 p-6">
        //                         {feature.details.map((detail, idx) => (
        //                             <li
        //                                 key={idx}
        //                                 dangerouslySetInnerHTML={{ __html: highlightText(detail) }}
        //                             ></li>
        //                         ))}
        //                     </ul>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>

        <div className=" py-10 bg-gray-100 px-4">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold">Course Features</h2>
            </div>
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
                                    <p className="mb-2">{feature.description}</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        {feature.details.map((detail, idx) => (
                                            <li
                                                key={idx}
                                                dangerouslySetInnerHTML={{ __html: highlightText(detail) }}
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

    );
};

export default CourseFeaturesGrid;

