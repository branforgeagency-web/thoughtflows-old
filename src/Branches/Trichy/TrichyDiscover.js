import React from 'react';
import { FaBookMedical, FaCogs, FaRegClock } from 'react-icons/fa'; // Importing icons

const TrichyDiscover = () => {
    return (
        <div className="lg:py-20 py-10">
            <h2 className="text-center font-bold text-5xl text-primaryy pb-5 sm:pb-3 sm:px-5">
                Discover Our Comprehensive Medical Coding Program
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 gap-6 lg:px-20 px-10 py-5">
                {/* First Card */}
                <div className="p-4 border-b-4 border-primaryy rounded-lg shadow-lg">
                    <div className="flex flex-col items-center space-x-3">
                        <FaBookMedical className="text-primaryy text-5xl mb-5" />
                        <p>
                            At Thoughtflows Medical Coding Academy, we offer a well-rounded medical coding training program designed to prepare students for success in the healthcare industry. Our curriculum covers essential topics, including medical terminology, anatomy, and physiology, providing a robust foundation for understanding complex healthcare terminologies and procedures.
                        </p>
                    </div>
                </div>

                {/* Second Card */}
                <div className="p-4 border-b-4 border-primaryy rounded-lg shadow-lg">
                    <div className="flex flex-col items-center space-x-3">
                        <FaCogs className="text-primaryy text-5xl mb-5" />
                        <p>
                            We focus on mastering medical coding systems like ICD-10 and CPT, enabling students to translate medical records into standardized codes accurately. Through practical coding exercises, case studies, and coding simulations, students gain hands-on experience to handle real-world coding scenarios confidently.
                        </p>
                    </div>
                </div>

                {/* Third Card */}
                <div className="p-4 border-b-4 border-primaryy rounded-lg shadow-lg">
                    <div className="flex flex-col items-center space-x-3">
                        <FaRegClock className="text-primaryy text-5xl mb-5" />
                        <p>
                            Our curriculum is regularly updated to reflect the latest industry standards, ensuring that our students stay ahead in the ever-evolving world of medical coding education.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrichyDiscover;
