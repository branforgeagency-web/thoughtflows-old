import React from "react";
import labs from "../../images/Branches/online/kochi.jpg";
import branch from "../../images/Branches/image7 copy.png";
import { Briefcase, Users, TrendingUp, Award, Building2, GraduationCap, BookOpen } from 'lucide-react';

function KochiAbout() {
  return (
    <>
      <div className="trivandrum-abt">
        <div className="trivandrum-abt-1">
          <img src={labs} alt="labs"  style={{width:"300px", borderRadius: "15px", objectFit: "cover"}}/>
          <div>
            <h2 className="highlight" style={{marginBottom: "20px"}}>Why Medical Coding is Gaining Popularity Among Students and Professionals in Kochi</h2>
            <p style={{ fontSize: "16px", textAlign: "justify", lineHeight: "26px" }}>
              Kochi is one of Kerala's major healthcare and business hubs, with growing opportunities in healthcare support services and revenue cycle management. As awareness of healthcare careers continues to increase, many graduates and professionals in Kochi are exploring Medical Coding as a career path that combines healthcare knowledge with professional growth opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Medical Coding is Becoming a <span style={{ color: '#097D8A' }}>Preferred Career Choice</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Medical Coding plays an important role in the healthcare ecosystem by transforming medical diagnoses, treatments, and procedures into standardized codes used for documentation and reimbursement processes.
            </p>
          </div>
          
          <div className="mb-10 text-center">
            <p className="text-xl font-semibold text-gray-800">Many graduates choose Medical Coding because it offers:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="p-3 bg-purple-100 rounded-full mb-4">
                <Briefcase size={28} className="text-purple-600" style={{color: '#9B5DE6'}} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">A professional healthcare career pathway</h3>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="p-3 bg-pink-100 rounded-full mb-4">
                <Users size={28} className="text-pink-600" style={{color: '#F15BB5'}} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Opportunities for freshers and experienced professionals</h3>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="p-3 bg-teal-100 rounded-full mb-4">
                <TrendingUp size={28} className="text-teal-600" style={{color: '#097D8A'}} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Continuous learning and career growth</h3>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center lg:col-span-1 md:col-span-2">
              <div className="p-3 bg-blue-100 rounded-full mb-4">
                <Award size={28} className="text-blue-600" style={{color: '#00BBFA'}} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Industry-recognized certification options</h3>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center lg:col-span-2 md:col-span-2">
              <div className="p-3 bg-yellow-100 rounded-full mb-4">
                <Building2 size={28} className="text-yellow-600" style={{color: '#FFC100'}} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Opportunities within healthcare and revenue cycle management sectors</h3>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl max-w-4xl mx-auto" style={{ borderLeftColor: '#00BBFA', backgroundColor: '#00BBFA15' }}>
            <p className="text-lg text-gray-800 m-0 font-medium text-center">
              For students and professionals seeking a healthcare-focused career without direct patient care responsibilities, Medical Coding offers a promising career direction.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f4f5 100%)' }}>
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Medical Coding Training in Kochi for{' '}
              <span style={{ color: '#097D8A' }}>Graduates, Professionals & Career Switchers</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you are a recent graduate, a working professional, or planning a career restart — Medical Coding offers a structured pathway into the healthcare industry.
            </p>
          </div>

          {/* 3 Audience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 text-center hover:shadow-lg transition-shadow" style={{ borderTopColor: '#097D8A' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#097D8A20' }}>
                <GraduationCap size={32} style={{ color: '#097D8A' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Recent Graduates</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Exploring healthcare career opportunities after completing your degree? Medical Coding is a great first step into the healthcare industry.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 text-center hover:shadow-lg transition-shadow" style={{ borderTopColor: '#F15BB5' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F15BB520' }}>
                <Briefcase size={32} style={{ color: '#F15BB5' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Working Professionals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Considering a career transition into healthcare? Our training is designed to fit professionals looking to shift into a growing and stable industry.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 text-center hover:shadow-lg transition-shadow" style={{ borderTopColor: '#9B5DE6' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#9B5DE620' }}>
                <TrendingUp size={32} style={{ color: '#9B5DE6' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Career Switchers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Restarting after a career break? Medical Coding offers a clear, learnable path back into professional life with strong healthcare industry demand.</p>
            </div>
          </div>

          {/* What You'll Learn Strip */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
            <p className="text-center text-lg font-semibold text-gray-700 mb-6">Our step-by-step training covers:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {['Medical Terminology', 'Anatomy Basics', 'Coding Concepts', 'Healthcare Documentation', 'Coding Guidelines'].map((topic, i) => (
                <div key={i} className="flex flex-col items-center text-center p-3 rounded-lg" style={{ backgroundColor: '#097D8A10' }}>
                  <BookOpen size={20} style={{ color: '#097D8A' }} className="mb-2" />
                  <span className="text-sm font-semibold text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center p-6 rounded-xl" style={{ backgroundColor: '#9B5DE615', border: '1px solid #9B5DE630' }}>
            <p className="text-lg font-semibold m-0" style={{ color: '#9B5DE6' }}>
              ✅ Suitable for both <strong>beginners</strong> and individuals looking to <strong>strengthen existing healthcare knowledge</strong>.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default KochiAbout;
