import React, { useState } from "react";
import rightimg from "../../images/Group710.png";
import { Row, Col } from "react-bootstrap";
import ivr from "../../images/Course Images/What is IVR.jpg"
import ivr1 from "../../images/Course Images/IVR Exam Overview.jpg"
import { FaArrowRightLong } from "react-icons/fa6";

const  WhatCRC = () => {
    const coursePages =[
      {
          title: "IVR-Interventional Radiology",
          question: "What is IVR?",
          answer1: "Interventional Radiology (IVR) is a specialized branch of radiology that uses minimally invasive, image-guided procedures to diagnose and treat a variety of medical conditions.",
          answer2: "These procedures reduce the need for open surgery, lower risk, and enhance patient recovery. IVR professionals play a crucial role in performing and coding complex procedures, ensuring accurate documentation, and optimizing reimbursement.This field is essential for professionals working in hospitals, outpatient radiology centers, and medical billing organizations that require specialized knowledge in radiology coding andcompliance."
      }
  ];
  
  
  //   const courseDetails = [
  //     {
  //       heading: "About Interventional Radiology Professionals",
  //       paragraph: "Interventional Radiology professionals specialize in:",
  //       subPoints: [
  //           "Image-Guided Minimally Invasive Procedures",
  //           " Vascular and Non-Vascular Interventions",
  //           " Compliance with Coding and Billing Regulations",
  //           " Revenue Cycle and Reimbursement Optimization"
  //       ]
  //   }
    
  // ];
  
    const courseCategories = [
      "Diagnostic angiography",
      "HEALTH CARE REFORM",
      "COMPLIANCE",
      "QUALITY IN HEALTH CARE",
      "MEDICAL OFFICE ACCOUNTING",
      "PHYSICIAN REIMBURSEMENT",
      "HEALTH CARE RCM,ETC"
    ];
    
    
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div>
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
            <img src={ivr} alt="leftimg" width={450} height={450} />
          </div>
        </div>
        {/* {courseDetails.map((detail, index) => (
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
        ))} */}



        <div className="grid grid-cols-1  md:grid-cols-12 gap-10 items-center">
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
                    <strong>Total : </strong> 20 days
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
                <h2 className="mb-3">CIRCC Exam Overview</h2>
                <p>
                  <strong>Exam Duration:</strong> 4 hours
                </p>
                <p>
                  <strong>Total marks for examination:</strong> 100 marks
                </p>
                <p>
                  <strong>Pass Requirement:</strong> 70% or higher
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
                src={ivr1}
                alt="Car"
                width={200}
                height={200}
                style={{ width: "250px", height: "250px", borderRadius: "10px" }}
              />
            </div>

            {isExpanded && (
              <div className=" space-y-2 list-disc pl-5 ">
                {/* <ol className="list-decimal">
                    {courseCategories.map((category, index) => (
                      <li key={index}>{category}</li>
                    ))}
                </ol> */}
                <p>The CIRCC certification exam will test:</p>
                <p>1. Diagnostic angiography</p>
                <p>2. Nonvascular interventions (biliary procedures, biopsies, ablations, spine interventions, etc.)</p>
                <p>3. Percutaneous vascular interventions</p>
                <p>4. Diagnostic cardiac catheterization</p>
                <p>5. Basic coronary arterial interventions</p>
                <p>6. Basic coding</p>
                <p>7. Medical terminology</p>
                <p>8. Anatomy and physiology</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default WhatCRC;
