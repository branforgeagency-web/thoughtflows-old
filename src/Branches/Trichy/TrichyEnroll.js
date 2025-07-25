import React from 'react';
import triEnroll from "../../images/Branches/online/nurse-typing.jpg";

function TrichyEnroll() {
  return (
    <>
      <div className="py-12 px-6 my-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Image Section */}
          <div className="relative col-span-1 h-full">
            <img 
              src={triEnroll} 
              alt="Medical Coding" 
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 rounded-lg"></div>
          </div>

          {/* Introduction Section */}
          <div className="space-y-8 col-span-1">
            <h2 className="text-4xl font-bold text-primaryy leading-tight">
              Embrace Excellence: <span className="text-gray-800">Medical Coding Education</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Thoughtflows Medical Coding Academy, we uphold the highest standards of education and excellence in everything we do. Our commitment to quality has earned us the reputation of being a premier medical coding training institute in Trichy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that excellence is a journey, not a destination. As such, we continuously strive to improve and innovate, ensuring that our students receive the best education possible. Our faculty, curriculum, infrastructure, and support services are all tailored to foster excellence and provide students with a transformative learning experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We embrace excellence not only in academics but also in the character and values we instill in our students. Integrity, professionalism, and a commitment to lifelong learning are the hallmarks of Thoughtflows Medical Coding Academy.
            </p>
          </div>

          {/* Enrollment Section */}
          <div className="space-y-6 col-span-1">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Enroll in Medical Coding Training Today</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Are you ready to embark on an exciting journey in medical coding? Thoughtflows Medical Coding Academy welcomes all aspiring medical coders to join our esteemed training program. Whether you are a recent graduate, a healthcare professional seeking a career change, or an individual looking to enhance your coding skills, our academy is the ideal platform to kickstart your medical coding career.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We understand that choosing the right training institute is crucial to your career success, and we are here to provide all the information you need to make an informed decision. Our admissions team is available to guide you through the enrollment process and answer any questions you may have about our training programs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At Thoughtflows Medical Coding Academy, we are committed to empowering our students to unlock their potential and pursue successful careers as certified medical coders. Join us today and take the first step towards a fulfilling and rewarding career in the healthcare industry.
              </p>
            </div>

            <a href="#">
              <button className="mt-6 bg-primaryy text-white py-3 px-8 rounded-lg shadow-lg hover:bg-gray-700 transition-all font-bold">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrichyEnroll;