import React from "react";
import crcabout from "../../images/Courses/CRCAbout.jpg";
import coursebg from "../../images/coursebg.png";
import { Link } from "react-router-dom";
const AboutEM = () => {
    return (
        <div className="flex flex-wrap items-center lg:py-16 p-10">
            <div className="w-full lg:w-1/12"></div>

            <div className="w-full lg:w-full mb-8">
                <h2 className="text-3xl font-semibold mb-6 text-primaryy">Importance of CCC</h2>
                {/* <p className="text-gray-600 mb-4 font-light">
                    E/M coders play a critical role in the healthcare industry by ensuring that medical services provided are properly documented and billed. They are specialized in coding for a variety of medical encounters in different healthcare settings, including hospitals, outpatient clinics, physician offices, and urgent care centers. Their responsibilities include:
                </p> */}
                <ol className="list-decimal list-inside text-gray-600 mb-4">
                    <li>Accurate Billing:
                        <ul className="list-disc">
                            <li>Ensures healthcare providers receive correct reimbursement.</li>
                        </ul>
                    </li>
                    <li>Healthcare Analytics:
                        <ul className="list-disc">
                            <li>Supports data-driven decisions for public health, research, and resource allocation.</li>
                        </ul>
                    </li>
                    <li>Legal and Ethical Compliance:
                        <ul className="list-disc">
                            <li>Reduces risks of fraud and billing errors.</li>
                        </ul>
                    </li>
                    <li>Improved Patient Care:
                        <ul className="list-disc">
                            <li>Enhances documentation quality, supporting accurate diagnoses and treatments.</li>
                        </ul>
                    </li>
                    
                </ol>
                <p className="text-gray-600 mb-4 font-light">
                 CCC play a vital role in the healthcare ecosystem by bridging the gap between clinical care and administrative processes, ensuring that healthcare services are accurately documented, billed, and analyzed.                </p>
            </div>

            {/* <div className="w-full lg:w-1/12"></div> */}

            {/* course details */}
            {/* <div className="w-full lg:w-4/12">
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
                                    <td className="px-4 py-2 "> 45-50 days</td>
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
            </div> */}

            {/* <div className="w-full lg:w-1/12"></div> */}
        </div>
    );
};

export default AboutEM;
