
import React, { useState } from 'react'
import rightimg from '../../images/Group710.png'
import { Row, Col } from 'react-bootstrap'
import cpmaWebp from "../../images/courseimage/Thought flows Img 4 CPMA.webp"
import cpma1 from "../../images/Course Images/CPMA1.jpg"
import { FaArrowRightLong } from "react-icons/fa6";

const WhatCPMA = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };
    return (
        <div >


            {/* <Row className='' >
                <Col lg={1}></Col>

                <Col lg={5}>
                    <h1>Certified Professional Coder (CPC)</h1>
                    <h2>What is CPC?</h2>
                    <p style={{ color: '#505050' }}>
                        The
                        <b style={{ fontWeight: 900 }}>Certified Professional Coder (CPC)</b>
                        credential, issued by the
                        <b style={{ fontWeight: 900 }}>AAPC (American Academy of Professional Coders)</b>
                        , is the gold standard in medical coding certifications. This certification validates your expertise in assigning accurate
                        <b style={{ fontWeight: 900 }}>CPT (Current Procedural Terminology), ICD-10-CM (Diagnosis Codes), and HCPCS Level II
                        </b> codes.
                    </p>


                    <p style={{ color: '#505050' }}>Passing the CPC exam demonstrates proficiency in outpatient coding and understanding healthcare regulations, which is essential for working in physician offices, hospitals, and insurance companies.</p>

                </Col>
                <Col lg={5} style={{ textAlign: 'center' }}>
                    <img src={rightimg} alt='leftimg' className=' img-fluid' style={{ width: '450px' }} />
                </Col>
                <Col lg={1}></Col>


                <Col sm={12}>
                    <h2>About Certified Medical Coders</h2>

                </Col>
            </Row > */}

            <section className=' px-4 container mx-auto mt-5'>

                <div className='grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-items-center'>



                    <div className=' col-span-1 md:col-span-6 order-2 md:order-2 '>
                       



                        <p >
                            The <strong>Certified Professional Medical Auditor (CPMA) (CPC)</strong> credential, issued by the <strong>AAPC (American Academy of Professional Coders)</strong>, , is designed for individuals seeking expertise in medical auditing. CPMA-certified professionals are skilled in reviewing clinical and financial documents, ensuring compliance with regulations, and identifying areas where coding errors, fraud, or inefficiencies may occur. This certification specifically focuses on outpatient, inpatient, and other medical settings, making it ideal for those aiming to audit healthcare facilities, physician offices, and other entities.
                        </p>

                        <h2>What is Medical auditing?</h2>

                        <p >Medical auditing is a critical process that involves the systematic review of medical records to verify that coding, billing, and documentation practices are accurate, complete, and compliant with healthcare regulations. This helps prevent errors and fraud, ensuring providers receive appropriate reimbursement.</p>



                    </div>


                    <div className=' col-span-1 md:col-span-6 w-full flex justify-center order-1 md:order-1'>
                        <img
                            src={cpmaWebp}
                            alt='leftimg'
                            className='w-full h-[360px] md:h-[400px] object-contain'
                        />
                    </div>
                </div>





                <div className='grid grid-cols-1  md:grid-cols-12 gap-10 items-center'>







                    <div className=' col-span-1 md:col-span-6 mt-4 '>

                        <div className=' "bg-white rounded-lg shadow-md p-4'>

                            <h2>Training Details</h2>

                            <p><strong>Class Types: </strong>Online & Offline Classes</p>
                            <div className=' flex flex-row gap-2' >


                                <div>
                                    <p className=' border-b-2 border-black inline-block w-fit'><strong>Batch Options:</strong></p>
                                    <p><strong>Weekday : </strong>Monday to Friday</p>
                                    <p><strong>Weekend : </strong>Saturday and Sunday</p>
                                    <p><strong>Language : </strong>English</p>

                                </div>

                                <div>
                                    <p className=' border-b-2 border-black inline-block w-fit'><strong>Duration:</strong></p>
                                    <p><strong>Total : </strong> 45-50 days</p>
                                    <p><strong>Daily Instruction : </strong>2 hours per day</p>
                                    <p><strong>Flexible Schedule : </strong>Suitable for working professionals</p>

                                </div>

                            </div>

                        </div>


                    </div>
                    <div className=' col-span-1 md:col-span-6 my-4   bg-white rounded-lg shadow-md  '>





                        <div className="flex  flex-col md:flex-row gap-1 p-4">
                            <div className="pl-3 flex flex-col">
                                <h2 className="mb-3">CPMA Exam Overview</h2>
                                <p>
                                    <strong>Duration:</strong> 4 hour
                                </p>
                                <p>
                                    <strong>Format:</strong> 100 MCQ
                                </p>
                                <p>
                                    <strong>Pass Requirement:</strong> 70% or higher
                                </p>
                                <div
                                    className="border-2 border-green-600  cursor-pointer bg-green-100 rounded-2xl flex justify-between items-center px-2"
                                    onClick={toggleExpand}
                                >
                                    <p className='pt-3'><strong>Topics covered</strong></p>
                                    <FaArrowRightLong />
                                </div>

                                {/* Expanded Content */}

                            </div>

                            <img
                                src={cpma1}
                                alt="Car"
                                width={200}
                                height={200}
                                style={{ width: "250px", height: "250px", borderRadius: "10px" }}
                            />
                        </div>

                        {isExpanded && (
                            <div className=" space-y-2 list-disc pl-5 ">
                                <p>1. Medical Auditing Methodologies</p>
                                <p>
                                    2. ICD-10-CM and CPT® Coding Audits
                                </p>
                                <p>3. Compliance Regulations (e.g., HIPAA, Medicare)</p>
                                <p>4. Fraud Prevention and Detection</p>
                                <p>5. Healthcare Reimbursement Systems and DRGs</p>

                                <p>6. Risk Analysis</p>
                                <p>7. Documentation Compliance</p>
                            </div>
                        )}
                    </div>




                </div>






            </section>









        </div>

    )
}
export default WhatCPMA