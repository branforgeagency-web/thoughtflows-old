import React from "react";
import crcabout from "../../images/Courses/CRCAbout.jpg";
import coursebg from "../../images/coursebg.png";
import { Link } from "react-router-dom";
const AboutED = () => {
    return (
        <div className="flex flex-wrap items-center lg:py-16 p-10">
            <div className="w-full lg:w-1/12"></div>

            <div className="w-full lg:w-5/12 mb-8">
                <h2 className="text-3xl font-semibold mb-6 text-primaryy">About ED Coders</h2>
                <p className="text-gray-600 mb-4">
                    Emergency Department coders work in high-pressure, fast-paced environments such as:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 font-semibold">
                    <li>Hospitals</li>
                    <li>Urgent Care Centers</li>
                    <li>Ambulatory Surgical Centers</li>
                </ul>
                <p className="text-gray-600 mb-4">
                    Their primary responsibilities include:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li><strong>Accurately coding diagnoses and procedures</strong> to ensure compliance and proper reimbursement.</li>
                    <li><strong>Maintaining compliance with coding guidelines</strong> specific to emergency medicine.</li>
                    <li>
                        <strong>Minimizing claim denials</strong> and optimizing reimbursement by ensuring that the documentation supports
                        all diagnoses and procedures.
                    </li>
                </ul>
                <p className="text-gray-600">
                    ED coders are vital to the functioning of emergency care providers, ensuring that they remain
                    financially stable while adhering to healthcare regulations.
                </p>
            </div>

            <div className="w-full lg:w-1/12"></div>

            {/* course details */}
            <div className="w-full lg:w-4/12">
                <div
                    className="border border-gray-300 rounded-lg bg-cover bg-right-top bg-no-repeat py-10 px-4 "
                    style={{
                        // backgroundImage: `url(${coursebg})`,
                        // backgroundSize: 'auto 100%',
                        backgroundColor: "#e7f7f7",
                    }}
                >
                    <div className="overflow-x-auto ">
                        <table className="min-w-full border-collapse">
                            <tbody>
                                <tr>
                                    <td>
                                        <h3 className="text-2xl font-bold text-secondaryy text-nowrap text">
                                            Course Details
                                        </h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-bold ">Duration</td>
                                    <td className="px-4 py-2 ">15-20 Days</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-bold ">Class Hours</td>
                                    <td className="px-4 py-2 ">2 hours/day</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-bold ">Mode</td>
                                    <td className="px-4 py-2 ">Online and Offline</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-bold ">Batches</td>
                                    <td className="px-4 py-2 ">
                                        Weekdays, Weekends
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-bold ">Languages</td>
                                    <td className="px-4 py-2 ">English</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="home-btn mt-4" style={{ width: "170px" }}>
                <Link to="/contact" className="button-animation">
            Enroll Now
          </Link>
                </div>
            </div>

            <div className="w-full lg:w-1/12"></div>
        </div>
    );
};

export default AboutED;
