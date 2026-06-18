import React from "react";
import wow from "../../images/Branches/online/wow1.png";
import { GraduationCap, Briefcase, Globe, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

import CountUp from "react-countup";

const AudienceCard = ({ title, icon: Icon, color }) => (
  <div className="bg-white rounded-xl p-4 shadow border-l-4 hover:shadow-md transition-all flex flex-col items-center text-center" style={{ borderLeftColor: color }}>
    <div className="p-3 rounded-full mb-3" style={{ backgroundColor: `${color}15` }}>
      <Icon size={24} color={color} />
    </div>
    <h3 className="text-base font-semibold text-gray-800">{title}</h3>
  </div>
);

function TiruvandrumStat() {
  const audiences = [
    { title: "B.Sc Life Science", icon: GraduationCap, color: "#9B5DE6" },
    { title: "B.Pharm Graduates", icon: GraduationCap, color: "#F15BB5" },
    { title: "D.Pharm Graduates", icon: GraduationCap, color: "#00BBFA" },
    { title: "Nursing Graduates", icon: GraduationCap, color: "#01F6D5" },
    { title: "BDS Graduates", icon: GraduationCap, color: "#097D8A" },
    { title: "BHMS Graduates", icon: GraduationCap, color: "#9B5DE6" },
    { title: "Physiotherapy", icon: GraduationCap, color: "#F15BB5" },
  ];

  const benefits = [
    { text: "Healthcare industry career", icon: Briefcase },
    { text: "Work with multinational companies", icon: Globe },
    { text: "Attractive starting salaries", icon: TrendingUp },
    { text: "Opportunities in India and abroad", icon: Globe },
    { text: "Career growth through certifications", icon: Award },
    { text: "Suitable for various life science graduates", icon: GraduationCap },
  ];

  return (
    <>
      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Middle Stats Section Removed as per user request */}

          <div className="flex flex-col gap-16 items-center">
            {/* Why Choose Medical Coding as a Career? */}
            <div className="space-y-8 w-full max-w-4xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  Why Choose Medical Coding <span style={{color: '#097D8A'}}>as a Career?</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Medical Coding is one of the fastest growing healthcare careers.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex flex-col items-center text-center gap-3 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="p-3 rounded-full" style={{ backgroundColor: '#097D8A15' }}>
                        <Icon size={28} style={{ color: '#097D8A' }} />
                      </div>
                      <span className="text-gray-700 font-semibold">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Who Can Join This Course? */}
            <div className="space-y-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-4 w-full max-w-5xl mx-auto" style={{ borderColor: '#F15BB5' }}>
              <div className="text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  Who Can Join This Course?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This course is suitable for:
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {audiences.map((aud, idx) => (
                  <AudienceCard key={idx} title={aud.title} icon={aud.icon} color={aud.color} />
                ))}
              </div>
              
              <div className="mt-10 p-6 rounded-xl" style={{ backgroundColor: '#F15BB515' }}>
                <p className="text-xl font-bold text-center m-0" style={{ color: '#F15BB5' }}>
                  Fresh Graduates interested in Healthcare Careers. No prior coding experience required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TiruvandrumStat;
