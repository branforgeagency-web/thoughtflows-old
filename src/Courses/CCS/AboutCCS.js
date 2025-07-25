import React from "react";
import crcabout from "../../images/Courses/CRCAbout.jpg";
import coursebg from "../../images/coursebg.png";
import { Link } from "react-router-dom";
const AboutCCS = () => {

    return (
        <div className="flex flex-wrap items-center justify-center px-3 py-5">
            <div className="w-full lg:w-1/12"></div>

            <div className="w-full lg:w-5/12 mb-4">
                <h2 className="text-3xl font-semibold mb-4 text-primaryy">About CCS Coders</h2>
                <p>
                    A CCS-certified coder plays a critical role in the healthcare system by ensuring accurate medical coding and billing, particularly in hospital settings. CCS coders are responsible for reviewing patient records and assigning accurate codes for diagnoses, procedures, and services. This expertise helps hospitals and healthcare organizations:</p>
                <div className="overflow-x-auto">
                    <table className="table table-zebra table-no-border">
                        {/* head */}
                        <thead>
                            <th></th>
                            <th></th>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th><p>1</p></th>
                                <td><p>Ensure accurate billing and reimbursement.</p></td>

                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th><p>2</p></th>
                                <td><p>Maintain compliance with federal and state regulations.</p></td>

                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th><p>3</p></th>
                                <td><p>Improve healthcare data quality and patient care management.</p></td>

                            </tr>

                        </tbody>
                    </table>
                </div>
                <p>CCS-certified coders are in high demand across hospitals, outpatient clinics, insurance companies, and healthcare consulting firms.</p>

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
                                    <td className="font-bold "><h5>Duration</h5></td>
                                    <td className=""><p>45-50 days</p></td>
                                </tr>
                                <tr>
                                    <td className="font-bold "><h5>Class Hours</h5></td>
                                    <td className=""><p>2 hours/day</p></td>
                                </tr>
                                <tr>
                                    <td className="font-bold "><h5>Class Type</h5></td>
                                    <td className=""><p>Online and Offline</p></td>
                                </tr>
                                <tr>
                                    <td className="font-bold "><h5>Batch Options</h5></td>
                                    <td className="">
                                        <p>Weekday and Weekend Options Available</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold "><h5>Languages</h5></td>
                                    <td className=""><p>English</p></td>
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


        </div>
    );
};

export default AboutCCS;
