import React from "react";
import rhiaIcon from "../../images/Courses/online-learning (1).png"

const RhiaOutline = () => {
  const courseModules = [
    {
      title: "Health Data Management",
      icon: rhiaIcon,
      topics: [
        "Data structure, content, and standards",
        "Health data integrity and quality management",
      ],
    },
    {
      title: "Information Governance and Compliance",
      icon: rhiaIcon,
      topics: [
        "Legal aspects of health information",
        "Compliance with HIPAA and other regulations",
      ],
    },
    {
      title: "Health Information Technology",
      icon: rhiaIcon,
      topics: [
        "Health information systems and databases",
        "Electronic health records (EHR) and cybersecurity",
      ],
    },
    {
      title: "Revenue Cycle Management",
      icon: rhiaIcon,
      topics: [
        "Coding systems and reimbursement methods",
        "Billing processes and payment integrity",
      ],
    },
    {
      title: "Data Analytics and Decision Support",
      icon: rhiaIcon,
      topics: [
        "Analyzing data to improve patient outcomes",
        "Clinical and business intelligence",
      ],
    },
    {
      title: "Leadership and Management",
      icon: rhiaIcon,
      topics: [
        "Project management and healthcare leadership",
        "Communication, training, and staff development",
      ],
    },
  ];

  return (
    <section className="course-outline">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-4 text-primaryy">RHIA Course Outline</h2>
        <p className="section-subtitle">
          Comprehensive modules for aspiring RHIA professionals
        </p>
        <div className="row">
          {courseModules.map((module, index) => (
            <div key={index} className="col-md-4">
              <div className="outline-item">
                <div className="icon-wrapper">
                  <img alt="" src={module.icon}/>
                </div>
                <h5 className="text-center">{module.title}</h5>
                <ul>
                  {module.topics.map((topic, i) => (
                    <li className="text-center" key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RhiaOutline;