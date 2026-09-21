import React from "react";
import rhiaIcon from "../../images/Courses/online-learning (1).png"

const RhitOutline = () => {
  const courseModules = [
    {
        title: "Data Content, Structure, and Information Governance:",
        icon: rhiaIcon,
        topic:
            "Learn about the structure and content of health data, including standards for data collection, classification, and governance.",

    },
    {
        title: "Access, Disclosure, Privacy, and Security:",
        icon: rhiaIcon,

        topic:
            " Understand patient privacy rights, HIPAA regulations, and secure handling of health data.",

    },
    {
        title: "Health Data Analytics and Use:",
        icon: rhiaIcon,

        topic:
            "Master the techniques used to analyze health data and support decision-making processes in healthcare.",
    },
    {
        title: "Revenue Cycle Management:",
        icon: rhiaIcon,

        topic:
            "Study healthcare reimbursement methods, including billing and coding for insurance claims.",

    },
    {
        title: "Compliance and Risk Management: ",
        icon: rhiaIcon,

        topic:
            " Learn about compliance standards, risk management strategies, and the legal implications of health information management.",

    },
    {
        title: "Health Information Technologies:",
        icon: rhiaIcon,

        topic:
            " Gain knowledge of the technologies used in managing health data, including EHR systems and health information exchanges.",

    },
];

  return (
    <section className="course-outline">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-4 text-primaryy"> Course Outline</h2>
        {/* <p className="section-subtitle">
          Comprehensive modules for aspiring RHIA professionals
        </p> */}
        <div className="row">
          {courseModules.map((module, index) => (
            <div key={index} className="col-md-4">
              <div className="outline-item">
                <div className="icon-wrapper">
                  <img alt="" src={module.icon}/>
                </div>
                <h5 className="text-center">{module.title}</h5>
              <p className="text-center">{module.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RhitOutline;