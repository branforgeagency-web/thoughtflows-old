import React from 'react';
import branch from "../../images/Branches/image7 copy.png";
import labImage from "../../images/Branches/online/lab.jpg";
import { CheckCircle2, ChevronDown } from 'lucide-react';

function KochiCore() {
  const journeySteps = [
    "Attend Free Career Guidance Session",
    "Enroll in the Training Program",
    "Learn Medical Coding Fundamentals",
    "Practice Real Coding Scenarios",
    "Prepare for CPC Certification",
    "Attend Interview Preparation Sessions",
    "Access Placement Support"
  ];

  const curriculumHighlights = [
    "Medical Terminology",
    "Human Anatomy and Physiology",
    "Disease Processes",
    "Healthcare Documentation",
    "ICD Coding Concepts",
    "CPT Coding Concepts",
    "Coding Guidelines",
    "Reimbursement Concepts",
    "Certification Preparation",
    "Practical Coding Exercises"
  ];

  return (
    <div className="bg-white py-16">
      
      {/* Journey Timeline Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img src={labImage} alt="Learning Journey" className="w-full rounded-2xl shadow-xl object-cover h-[500px]" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Your Medical Coding <span style={{ color: '#097D8A' }}>Learning Journey</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We have streamlined our training to ensure you take the most direct path to professional certification and your first job in the healthcare industry.
            </p>
            
            <div className="space-y-4">
              {journeySteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold z-10" style={{ backgroundColor: '#097D8A20', color: '#097D8A' }}>
                      {index + 1}
                    </div>
                    {index !== journeySteps.length - 1 && (
                      <div className="w-0.5 h-10 bg-gray-200 my-1"></div>
                    )}
                  </div>
                  <div className="pt-1">
                    <p className="text-lg font-medium text-gray-800">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Industry-Oriented Training Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Industry-Oriented Training Designed Around <span style={{ color: '#9B5DE6' }}>Real Healthcare Processes</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              At ThoughtFlows, training goes beyond theoretical concepts. Our programs are designed to help learners understand how Medical Coding functions within real healthcare workflows. The objective is to help learners build strong foundational knowledge while understanding the practical expectations of the healthcare industry.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
              {curriculumHighlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <CheckCircle2 className="text-purple-500 flex-shrink-0" size={24} style={{ color: '#9B5DE6' }} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default KochiCore;