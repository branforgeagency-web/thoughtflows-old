import React from 'react';
import { FaCircle } from 'react-icons/fa';

const TrichyExperts = () => {
    return (
        <div className="bg-third mx-3 mb-20 lg:px-5 sm:px-2 py-10 rounded-xl shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:px-20 px-10">
                {/* Left Column: Heading */}
                <div className="flex items-center justify-center sm:justify-start">
                    <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-primaryy leading-tight">
                        Meet the Experts Behind Your Success
                    </h2>
                </div>

                {/* Right Column: Content in two paragraphs */}
                <div className="flex flex-col justify-center space-y-4">
                    <div className="flex items-start space-x-2">
                        <FaCircle className="text-primaryy text-2xl" />
                        <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
                            At Thoughtflows Medical Coding Training Institute, our experienced trainers are dedicated mentors who bring real-world expertise to the classroom. Our faculty consists of industry professionals with deep insights into medical coding jobs and the unique demands of the profession.
                        </p>
                    </div>

                    <div className="flex items-start space-x-2">
                        <FaCircle className="text-primaryy text-2xl" />
                        <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
                            They provide interactive sessions, personalized mentoring, and real-world examples to bridge the gap between theory and practice. Our trainers ensure every student receives individual attention and the support needed to excel in medical coding courses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrichyExperts;
