


import React from "react";

const CICFeatures = () => {
    const features = [
        {
            title: "Expert Trainers",
            description:
                "Our instructors are <strong>AAPC-certified</strong> professionals with extensive experience in inpatient coding. They offer personalized guidance, ensuring that you understand complex concepts and gain practical insights from their real-world experience.",
            // details: [
            //     "PowerPoint Presentations to visualize complex concepts and coding guidelines.",
            //     "Video Tutorials that reinforce coding skills and enhance understanding of medical procedures.",
            //     "Interactive Q&A sessions to clarify doubts in real-time and ensure personalized attention.",
            // ],
        },
        {
            title: "Interactive Learning",
            description:
                "We make learning engaging and effective by incorporating <strong>live classes, PowerPoint presentations, and video tutorials</strong>. Our interactive sessions help students grasp key coding principles and practice through <strong>real-world case studies</strong>, ensuring you are well-prepared for actual coding scenarios.",
            // details: [
            //     "Chapter-wise Assessments designed to solidify your understanding of each module.",
            //     "Mock CPC Exams that replicate the real exam environment, helping you build confidence and improve time management skills.",
            //     "Detailed Feedback on practice tests to identify strengths and areas for improvement.",
            //     "Progress Tracking to ensure you are on the path to CPC certification success.",
            // ],
        },
        {
            title: "Flexible Scheduling",
            description:
                "At Thoughtflows, we offer both <strong>weekday and weekend batches</strong>, allowing you to choose a schedule that best fits your needs. Whether you’re a working professional or a full-time student, our flexible timings ensure that you can complete the course at your own pace.",
            // details: [
            //     "Code Books: Up-to-date editions of CPT®, ICD-10-CM, and HCPCS Level II manuals.",
            //     "Chapter-wise Study Plans to organize and streamline your preparation effectively.",
            // ],
        },
        {
            title: "Comprehensive Study Materials",
            description:
                "Our CIC training includes:",
            details: [
                "<strong>ICD-10-CM and ICD-10-PCS </strong>coding books that are essential for the certification exam.",
                "Self-study guides and <strong>revision notes</strong> designed to reinforce key concepts and ensure thorough understanding.",


            ],
        },



        {
            title: "Exam Preparation",
            description:
                "We focus on rigorous exam preparation through:",
            details: [
                "<strong>Chapter-wise assessments </strong>to test your knowledge and progress.",
                " <strong>Full-length mock exams</strong> that simulate the actual certification exam, giving you the confidence to pass with flying colors.",


            ],
        },
    ];



    return (
        <div className="bg-gray-100 px-4 py-8">
            <div className=" container ">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                    Course Features
                </h2>
                <p className="mb-8 px-4">

                    At <strong>Thoughtflows Medical Coding Academy</strong>, we provide a comprehensive and effective <strong>Certified Inpatient Coder (CIC)</strong> training program designed to help you excel in your certification exam and build a successful career in medical coding. Here's why you should choose <strong>Thoughtflows    </strong> for your CIC training:
                </p>

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


                <div className="overflow-x-auto flex justify-center container ">
                    <table className="min-w-80 table-auto bg-white shadow-md rounded-2xl border-1 border-b-gray-700">
                        <tbody>
                            {features.map((feature, index) => (
                                <tr key={index} className="border-b ">
                                    {/* Feature Title */}
                                    <td className="px-6 text-center py-4  font-semibold bg-[#14aeba] text-white text-lg">
                                       &nbsp; {feature.title}
                                    </td>
                                    {/* Feature Description */}
                                    <td className="px-6 py-4 text-gray-600">
                                        <p className="mb-2"   dangerouslySetInnerHTML={{ __html: feature.description  }}/>
                                        <ul className="list-disc pl-6 space-y-2">
                                            {feature?.details?.map((detail, idx) => (
                                                <li
                                                    key={idx}
                                                    dangerouslySetInnerHTML={{ __html: detail  }}
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

export default CICFeatures;

