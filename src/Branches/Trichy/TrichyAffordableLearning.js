import React from 'react';

const AffordableLearning = () => {
    return (
        <div className="bg-gradient-to-r from-primaryy to-secondaryy py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-left text-white">
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                    Affordable Medical Coding Fees and Flexible Learning
                </h2>
                <p className="mt-4 text-lg sm:text-xl">
                    We believe quality medical coding training should be accessible to all. At Thoughtflows Medical Coding Coaching Centre, we offer:
                </p>

                {/* List of Features */}
                <div className="mt-8">
                    <ul className="space-y-6">
                        {/* List Item */}
                        {[
                            {
                                title: "Transparent Medical Coding Course Fees",
                                description:
                                    "Our course fees are clear and transparent, ensuring there are no hidden costs, giving you complete clarity.",
                                icon: (
                                    <path d="M17 11l4-4m0 0l-4-4m4 4H3m14 6l4 4m0 0l-4 4m4-4H3" />
                                ),
                            },
                            {
                                title: "Flexible Batch Timings",
                                description:
                                    "We offer flexible batch timings that cater to both working professionals and students, ensuring convenience for all.",
                                icon: <path d="M12 3v18m9-9H3" />,
                            },
                            {
                                title: "Medical Coding Online Courses",
                                description:
                                    "Our online courses make learning convenient and accessible for remote learners across the globe.",
                                icon: <path d="M22 12l-20 7 8-7-8-7z" />,
                            },
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <div className="flex-shrink-0 bg-secondaryy p-4 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        {item.icon}
                                    </svg>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="mt-2 text-gray-200">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="mt-8 text-gray-200">
                    With a focus on inclusivity and support, we aim to make medical coding education available to everyone, regardless of their schedule or financial constraints.
                </p>
            </div>
        </div>
    );
};

export default AffordableLearning;
