import React from "react";
import crcabout from "../../images/Courses/CRCAbout.jpg";
import coursebg from "../../images/coursebg.png";
import { Link } from "react-router-dom";
const AboutRadiology = () => {
    return (
        <div className="flex flex-wrap items-center lg:py-16 p-10">
            <div className="w-full lg:w-1/12"></div>

            <div className="w-full lg:w-5/12 mb-4">
                <h2 className="text-3xl font-semibold mb-4 text-primaryy">Roles of a Radiology Coder</h2>
                <p className="text-gray-600">
                    Radiology coders play an essential role in ensuring that healthcare providers receive accurate and timely reimbursement for these procedures, as well as ensuring compliance with billing standards and regulations. They carefully review medical documentation and imaging reports to determine the appropriate codes for billing and insurance purposes. This prevents underbilling or overbilling, optimizes the revenue cycle, and reduces claim denials.
                </p>
                <p className="text-gray-600">
                    In this specialized field, radiology coders must have a deep understanding of both medical terminology and the specific coding systems that are applied to radiology services, all while staying up to date with healthcare regulations.
                </p>
            </div>

            <div className="w-full lg:w-1/12"></div>

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
                                    <td className="px-4 py-2 ">45-60 days</td>
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

export default AboutRadiology;
