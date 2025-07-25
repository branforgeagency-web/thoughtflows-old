import React from "react";

const RhiaPursue = () => {
  const benefits = [
    {
      title: "Career Advancement",
      subtitle: "Unlock leadership roles in healthcare management.",
      icon: "fa-solid fa-briefcase",
    },
    {
      title: "Industry Recognition",
      subtitle: "AHIMA-certified credential valued nationwide.",
      icon: "fa-solid fa-certificate",
    },
    {
      title: "High Demand",
      subtitle: "Increasing need for data management professionals in healthcare.",
      icon: "fa-solid fa-chart-line",
    },
    {
      title: "Higher Salaries",
      subtitle: "Competitive salaries and opportunities for promotions.",
      icon: "fa-solid fa-dollar-sign",
    },
    {
      title: "Versatile Career Paths",
      subtitle:
        "Work in hospitals, consulting firms, insurance companies, and more.",
      icon: "fa-solid fa-network-wired",
    },
    {
      title: "Professional Credibility",
      subtitle: "Proves your expertise in health information management.",
      icon: "fa-solid fa-user-check",
    },
  ];

  return (
    <div className="bg-gray-100 px-3 py-12">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-semibold mb-4 text-primaryy text-center">
          Why Pursue RHIA Certification?
        </h2>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              {/* Icon */}
              <div className="text-4xl mb-4" style={{color:' #0e3d69'}}>
                <i className={benefit.icon}></i>
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              {/* Subtitle */}
              <p className="text-gray-600">{benefit.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RhiaPursue;
