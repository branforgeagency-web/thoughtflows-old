import React from 'react'
import triEnroll from "../../images/Branches/online/nurse-typing.jpg";


const TrichyPlacement = () => {
    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold text-primaryy">
                    Your Career Secured with Placement Support
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    At Thoughtflows Medical Coding Academy, we prioritize your career success. Our dedicated placement support team offers:
                </p>

                <div className="mt-8 grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
                    {/* Career Counseling */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img
                            src={triEnroll}
                            alt="Career Counseling"
                            className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <h3 className="text-2xl font-bold text-secondaryy mt-4">Career Counseling</h3>
                        <p className="mt-2 text-gray-600">
                            Get expert career advice to guide you through your journey in the healthcare industry.
                        </p>
                    </div>

                    {/* Interview Preparation */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img
                            src={triEnroll}
                            alt="Interview Preparation"
                            className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <h3 className="text-2xl font-bold text-secondaryy mt-4">Interview Preparation</h3>
                        <p className="mt-2 text-gray-600">
                            Prepare for interviews with mock sessions and tips from industry professionals.
                        </p>
                    </div>

                    {/* Job Search Assistance */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img
                            src={triEnroll}
                            alt="Job Search Assistance"
                            className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <h3 className="text-2xl font-bold text-secondaryy mt-4">Job Search Assistance</h3>
                        <p className="mt-2 text-gray-600">
                            Receive personalized job search support and connect with top employers.
                        </p>
                    </div>
                </div>

                <p className="mt-8 text-lg text-gray-600">
                    We connect our students with leading healthcare providers, insurance companies, and medical coding organizations. Regular job fairs, resume workshops, and networking events ensure our graduates are well-positioned in the competitive job market.
                </p>

                <p className="mt-4 text-lg text-gray-600">
                    With our comprehensive medical coding training program, we take pride in seeing our students embark on rewarding careers in the healthcare sector.
                </p>
            </div>
        </div>
    )
}

export default TrichyPlacement
