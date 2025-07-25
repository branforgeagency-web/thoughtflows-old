import React, { useState } from "react";
import rightimg from "../../images/Group710.png";
import { Row, Col } from "react-bootstrap";
import cpb from "../../images/Course Images/CPB.jpg"
import cpb1 from "../../images/Course Images/CPB1.jpg"
import { FaArrowRightLong } from "react-icons/fa6";

const WhatCRC = () => {
    const coursePages = [
        {
            title: "CPB - Certified Professional Biller",
            question: "What is CPB?",
            answer1: "The Certified Professional Biller (CPB) credential, issued by the AAPC (American Academy of Professional Coders), is the gold standard in medical billing certifications. This certification validates your expertise in healthcare claims processing, payer policies, revenue cycle management, and compliance with federal regulations.",
            answer2:"Earning the CPB certification demonstrates proficiency in handling insurance claims, reimbursements, billing processes, and regulatory guidelines, making it essential for working in physician offices, hospitals, and healthcare organizations.",
        }
    ];
    const courseDetails = [
        {
            heading: "About Certified Medical Billers",
            paragraph: "A Certified Professional Biller ensures accurate processing of medical claims to optimize healthcare revenue cycles. CPB-certified professionals play a crucial role in:",
            subPoints: [
                " Insurance Claims Processing",
                "Medical Billing Compliance",
                " Revenue Cycle Optimization"
            ]
        }
    ];
    const courseCategories = [
        "TYPES OF INSURANCE",
        "BILLING REGULATIONS",
        "HIPAA & COMPLIANCE",
        "REIMBURSEMENT & COLLECTIONS",
        "BILLING",
        "CODING",
        "CASE ANALYSIS"
    ];
    
    
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div>
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

      <section className=" px-4 container mx-auto mt-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className=" col-span-1 md:col-span-6  ">
            {coursePages.map((page, index) => (
              <div key={index}>
                {/* <h1 className=" pb-4">{page.title}</h1> */}
                <h2>{page.question}</h2>
                <p>{page.answer1}</p>
                <p>{page.answer2}</p>
              </div>
            ))}
          </div>

          <div className=" col-span-1 md:col-span-6  ">
            <img src={cpb} alt="leftimg" width={450} height={400} />
          </div>
        </div>

        {/* {courseDetails.map((detail, index) => (
          <div key={index}>
            <h2 className=" mb-8 mt-16">{detail.heading}</h2>
            <p>{detail.paragraph}</p>
            <ul className="list-disc pl-5">
              {detail.subPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
              
            </ul>
          </div>
        ))} */}
        {courseDetails.map((detail, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 my-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 transition-all duration-500 hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:border-[#14aeba]">
            <h2 className="text-3xl font-semibold mb-6 bg-clip-text black">{detail.heading}</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed hover:text-slate-800 transition-colors duration-300">{detail.paragraph}</p>
            <ul className="space-y-4">
              {detail.subPoints.map((point, idx) => (
                <li key={idx} className="flex items-center group">
                  <div className="h-2 w-2 rounded-full bg-[#14aeba] mr-3 transition-all duration-300 group-hover:w-4"></div>
                  <span className="text-gray-700 transition-all duration-300 group-hover:translate-x-2 group-hover:text-gray-900">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}



        <div className="grid grid-cols-1  md:grid-cols-12 gap-10 items-center">
          {/* <div className=' col-span-1 md:col-span-6  '>
                        <ol className=' flex flex-col space-y-3 l  pt-3 border-3 border-black-200 p-3 bg-green-200  rounded-xl '>
                            <li>Insurance Reimbursements</li>
                            <li>Public Health Research</li>
                            <li>Compliance with Healthcare Regulations​ </li>
                        </ol>
                    </div>

                    <div className=' col-span-1 md:col-span-6  '>
                        <h5>Roles of a CPC:</h5>
                        <ol className=' flex flex-col space-y-3 list-disc pl-5'>
                            <li>Reviewing patient records and assigning correct codes</li>
                            <li>Ensuring compliance with federal and payer regulations</li>
                            <li>Helping optimize revenue cycles in healthcare settings</li>
                        </ol>
                    </div> */}

          <div className=" col-span-1 md:col-span-6 mt-4 ">
            <div className=' "bg-white rounded-lg shadow-md p-4'>
              <h2>Training Details</h2>

              <p>
                <strong>Class Type: </strong>Online 
              </p>
              <div className=" flex flex-row gap-6">
                <div>
                  <p className=" border-b-2 border-black inline-block w-fit">
                    <strong>Batch Options:</strong>
                  </p>
                  <p>
                    <strong>Weekday : </strong>Monday to Friday
                  </p>
                  <p>
                    <strong>Weekend : </strong>Saturday and Sunday
                  </p>
                  <p>
                    <strong>Language : </strong>English
                  </p>
                </div>

                <div>
                  <p className=" border-b-2 border-black inline-block w-fit">
                    <strong>Duration:</strong>
                  </p>
                  <p>
                    <strong>Total : </strong> 45 days
                  </p>
                  <p>
                    <strong>Class Hours: </strong>2 hours per day
                  </p>
                  {/* <p><strong>Flexible Schedule : </strong>Suitable for working professionals</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-1 md:col-span-6 my-4   bg-white rounded-lg shadow-md  ">
            <div className="flex  flex-col md:flex-row gap-10 p-4">
              <div className="pl-3 flex flex-col">
                <h2 className="mb-3">CPB Exam Overview</h2>
                <p>
                  <strong>Exam Duration:</strong> 4 hour
                </p>
                <p>
                  <strong>Total marks for examination:</strong> 135 marks
                </p>
                <div
                  className="border-2 border-green-600  cursor-pointer bg-green-100 rounded-2xl flex justify-between items-center px-2"
                  onClick={toggleExpand}
                >
                  <p className="pt-3">
                    <strong>Topics covered</strong>
                  </p>
                  <FaArrowRightLong />
                </div>

                {/* Expanded Content */}
              </div>

              <img
                src={cpb1}
                alt="Car"
                width={200}
                height={200}
                style={{ width: "250px", height: "250px", borderRadius: "10px" }}
              />
            </div>

            {isExpanded && (
              <div className=" space-y-2 list-disc pl-5 ">
                <ol className="list-decimal">
                    {courseCategories.map((category, index) => (
                      <li key={index}>{category}</li>
                    ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default WhatCRC;
