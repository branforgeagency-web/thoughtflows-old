


import React from "react";

const CRCFeatures = () => {
    const courseSections = [
        {
            heading: "Live Interactive Classes",
            paragraph: "Our live sessions provide a dynamic and engaging learning environment. Each class utilizes:",
            points: [
                "PowerPoint Presentations to visualize complex billing processes and industry guidelines.",
                "Video Tutorials that reinforce billing skills and enhance understanding of insurance claims and payment processes.",
                "Interactive Q&A sessions to clarify doubts in real-time and ensure personalized attention."
            ]
        },
        {
            heading: "Practice Exams",
            paragraph: "We offer a structured approach to mastering medical billing through:",
            points: [
                "Chapter-wise Assessments designed to solidify your understanding of each module.",
                "Mock CPB Exams that replicate the real exam environment, helping you build confidence and improve time management skills.",
                "Detailed Feedback on practice tests to identify strengths and areas for improvement.",
                "Progress Tracking to ensure you are on the path to CPB certification success."
            ]
        },
        {
            heading: "Self-Study Materials",
            paragraph: "Our comprehensive study resources support independent learning and exam preparation:",
            points: [
                "Code Books: Up-to-date editions of CPT, ICD-10-CM, and HCPCS Level II manuals for billing processes.",
                "Chapter-wise Study Plans to organize and streamline your preparation effectively."
            ]
        },
        {
            heading: "Interview Preparation",
            paragraph: "Thoughtflows goes beyond training to ensure you secure your first job confidently:",
            points: [
                "Resume Enhancement: Expert guidance on creating a compelling resume tailored to medical billing roles.",
                "Mock Interviews: Simulated interview sessions to build confidence, refine communication skills, and understand common interview questions.",
                "Job Placement Support: Assistance in connecting with potential employers.",
                "Networking Opportunities with healthcare employers and professionals.",
                "Placement Assistance to help you land positions offering competitive salary packages in physician offices, clinics, hospitals, and insurance companies."
            ]
        }
    ];
    
    
    const features = [
        {
            title: "Expert Instructors",
            description:
                "Learn from <strong>AAPC-certified </strong>professionals with extensive experience in risk adjustment coding and real-world applications.",
            // details: [
            //     "PowerPoint Presentations to visualize complex concepts and coding guidelines.",
            //     "Video Tutorials that reinforce coding skills and enhance understanding of medical procedures.",
            //     "Interactive Q&A sessions to clarify doubts in real-time and ensure personalized attention.",
            // ],
        },
        {
            title: "Flexible Learning Options",
            // description:
            //     "We make learning engaging and effective by incorporating <strong>live classes, PowerPoint presentations, and video tutorials</strong>. Our interactive sessions help students grasp key coding principles and practice through <strong>real-world case studies</strong>, ensuring you are well-prepared for actual coding scenarios.",
            details: [
                "Choose between <strong>online and offline classes</strong> to suit your learning style",
                "Weekday and weekend batches available to accommodate busy schedules.",
            ],
        },
        {
            title: "Comprehensive Curriculum",
            description:
                "Covers <strong> ICD-10-CM coding </strong>, risk adjustment models <strong>(HCC, RxHCC, ACA)</strong>, compliance guidelines, and documentation requirements.",
            // details: [
            //     "Code Books: Up-to-date editions of CPT®, ICD-10-CM, and HCPCS Level II manuals.",
            //     "Chapter-wise Study Plans to organize and streamline your preparation effectively.",
            // ],
        },
        {
            title: "Interactive Learning",
            description:
                "Engaging sessions featuring <strong> PowerPoint presentations </strong>, case studies, and video tutorials for better understanding",
            // details: [
            //     "<strong>ICD-10-CM and ICD-10-PCS </strong>coding books that are essential for the certification exam.",
            //     "Self-study guides and <strong>revision notes</strong> designed to reinforce key concepts and ensure thorough understanding.",


            // ],
        },



        {
            title: "Hands-On Practice",
            description:
                "<strong>Chapter-wise assessments and mock exams </strong> to reinforce learning and build confidence for the CRC exam.",
            // details: [
            //     "<strong>Chapter-wise assessments </strong>to test your knowledge and progress.",
            //     " <strong>Full-length mock exams</strong> that simulate the actual certification exam, giving you the confidence to pass with flying colors.",


            // ],
        },


        {
            title: "Study Materials Provided",
            description:
                "Includes <strong> ICD-10-CM coding books </strong>,self-study guides, and exam preparation resources approved by AAPC.",
            // details: [
            //     "<strong>Chapter-wise assessments </strong>to test your knowledge and progress.",
            //     " <strong>Full-length mock exams</strong> that simulate the actual certification exam, giving you the confidence to pass with flying colors.",


            // ],
        },



        {
            title: "Real-World Case Scenarios",
            description:
                "Practical exercises that help you understand how to apply coding principles to actual medical records.",
            // details: [
            //     "<strong>Chapter-wise assessments </strong>to test your knowledge and progress.",
            //     " <strong>Full-length mock exams</strong> that simulate the actual certification exam, giving you the confidence to pass with flying colors.",


            // ],
        },











        {
            title: "Personalized Support",
            description:
                "<strong>One-on-one mentoring </strong> and doubt-clearing sessions to address individual needs and challenges.",
            // details: [
            //     "<strong>Chapter-wise assessments </strong>to test your knowledge and progress.",
            //     " <strong>Full-length mock exams</strong> that simulate the actual certification exam, giving you the confidence to pass with flying colors.",


            // ],
        },
        {
            title: "Exam Preparation Focus",
            description:
                "Full-length mock exams to simulate the CRC exam environment and help you achieve a <strong>70% or higher</strong> passing score..",
            // details: [
            //     "<strong>Chapter-wise assessments </strong>to test your knowledge and progress.",
            //     " <strong>Full-length mock exams</strong> that simulate the actual certification exam, giving you the confidence to pass with flying colors.",


            // ],
        },
        {
            title: "Placement Assistance",
            description:
                "<strong>Resume enhancement</strong>, mock interviews, and job placement support to help you launch or advance your career in risk adjustment coding.",
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
                    Course Features
                </h2>   

                {/* 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6  justify-items-center ">
                    {features?.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl   "
                        >
                    
                            <h3 className="text-2xl font-semibold text-white mb-2 bg-[#16adba] p-2 rounded  text-center">
                                {feature.title}
                            </h3>
                
                            <p className="text-gray-700  p-3 mb-0 pb-0" dangerouslySetInnerHTML={{ __html: feature.description }} />

                 
                            <ul className="list-disc space-y-2  text-gray-600 p-6">
                                {feature?.details?.map((detail, idx) => (
                                    <li
                                        key={idx}
                                        dangerouslySetInnerHTML={{ __html: detail }}
                                    ></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div> */}
                <div className="overflow-x-auto flex justify-center container mb-8">
                    <table className="min-w-80 table-auto bg-white shadow-md rounded-2xl border-1 border-b-gray-700">
                        <tbody>
                            {courseSections.map((section, index) => (
                                <tr key={index} className="border-b">
                                    <td className="px-6 py-4 text-center font-semibold bg-[#14aeba] text-white text-lg">
                                        &nbsp;{section.heading}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        <p className="mb-3">{section.paragraph}</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            {section.points.map((point, idx) => (
                                                <li key={idx}>{point}</li>
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

export default CRCFeatures;

