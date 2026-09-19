import React from 'react';
import { GraduationCap, HeartPulse, Stethoscope, Briefcase, Award } from 'lucide-react';

const AudienceCard = ({ title, icon: Icon, color }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border-b-4" style={{ borderColor: color }}>
    <div className="p-4 rounded-full mb-4" style={{ backgroundColor: `${color}15` }}>
      <Icon size={32} color={color} />
    </div>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
  </div>
);

const KochiChoice = () => {
  const audiences = [
    { title: "Life Science Graduates", icon: GraduationCap, color: "#9B5DE6" },
    { title: "Nursing Graduates", icon: HeartPulse, color: "#F15BB5" },
    { title: "Pharmacy Graduates", icon: Stethoscope, color: "#00BBFA" },
    { title: "Biotech & Microbiology", icon: Award, color: "#01F6D5" },
    { title: "Allied Health Science", icon: HeartPulse, color: "#097D8A" },
    { title: "Healthcare Professionals", icon: Stethoscope, color: "#9B5DE6" },
    { title: "Fresh Graduates", icon: GraduationCap, color: "#F15BB5" },
    { title: "Career Switchers", icon: Briefcase, color: "#00BBFA" },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Who Can Join Our Medical Coding Training?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Medical Coding is suitable for graduates, professionals, and individuals looking to build a career in the healthcare industry. Our programs are commonly chosen by:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {audiences.map((aud, idx) => (
            <AudienceCard key={idx} title={aud.title} icon={aud.icon} color={aud.color} />
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md text-center max-w-4xl mx-auto border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Students from non-life science backgrounds may also explore Medical Coding opportunities based on their learning ability, career goals, and program requirements.
          </p>
          <div className="inline-block bg-pink-50 text-pink-600 px-6 py-3 rounded-full font-semibold text-lg">
            No prior Medical Coding experience is required to begin learning.
          </div>
        </div>
      </div>
    </div>
  );
};

export default KochiChoice;
