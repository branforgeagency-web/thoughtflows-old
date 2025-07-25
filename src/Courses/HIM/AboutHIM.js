import React from "react";
import crcabout from "../../images/Courses/CRCAbout.jpg";
import coursebg from "../../images/coursebg.png";
import { Link } from "react-router-dom";
const AboutEM = () => {
    return (
        <>
        <div className="flex flex-wrap items-center justify-center p-10 pb-0">
        <div className="w-full lg:w-1/2">
        </div>
        <div className="">

        <h2 className="text-3xl font-semibold text-center mb-6 text-primaryy">About HIM Coder
                </h2>
                <p className="text-gray-600 mb-4 text-justify lg:px-20 font-light">
                An HIM Coder is a healthcare professional who specializes in the accurate coding of medical records using standardized coding systems, such as ICD-10, CPT, and HCPCS. HIM Coders are responsible for translating clinical data from medical records into alphanumeric codes that are used for several purposes, including billing, insurance claims, reimbursement, and data analysis.
                </p>
        </div>
        </div>
        <div className="flex flex-wrap items-center lg:py-16 p-10">
            <div className="w-full lg:w-1/12">
            
            </div>

            <div className="w-full lg:w-full mb-8">
                
                <h2 className="text-3xl font-semibold mb-6 text-primaryy">The role of an HIM Coder includes:
                </h2>
                <ol className="list-decimal list-inside text-gray-600 mb-4">
                    <li>Reviewing medical records:
                        <ul className="list-disc">
                            <li>HIM Coders thoroughly examine patient charts, physician notes, and other clinical documentation to extract relevant information for coding.
                            </li>
                        </ul>
                    </li>
                    <li>Assigning codes:
                        <ul className="list-disc">
                            <li>Using standardized coding systems like ICD-10 (International Classification of Diseases) for diagnoses, CPT (Current Procedural Terminology) for medical procedures, and HCPCS (Healthcare Common Procedure Coding System) for healthcare services.
                            </li>
                        </ul>
                    </li>
                    <li>Collaboration with healthcare providers: 
                        <ul className="list-disc">
                            <li> HIM Coders work closely with physicians, nurses, and administrative staff to ensure that the documentation is accurate and complete for proper coding.</li>
                        </ul>
                    </li>
                    <li>Ensuring compliance:
                        <ul className="list-disc">
                            <li> They follow coding guidelines and regulations to ensure that the codes assigned are correct and compliant with healthcare laws and reimbursement policies.
                            </li>
                        </ul>
                    </li>
                    <li>Data processing for billing and reimbursement: :
                        <ul className="list-disc">
                            <li> 
                            HIM Coders ensure that the assigned codes are used to generate accurate insurance claims for reimbursement and to support the healthcare facility’s financial operations.
                            </li>
                        </ul>
                    </li>
                    
                </ol>
                <p className="text-gray-600 mb-4 font-light">
                HIM Coders contribute to the financial health of healthcare organizations by ensuring that accurate billing practices are followed and that medical records are properly coded for insurance purposes. They also support healthcare analytics by providing coded data for research, disease tracking, and quality control.
</p>                </div>

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
                                    <td className="px-4 py-2 "> 3 months</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-bold ">Course  Type</td>
                                    <td className="px-4 py-2 ">Certification program</td>
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
        </>
        
    );
};

export default AboutEM;
