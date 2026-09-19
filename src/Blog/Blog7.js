import { useEffect } from "react";
import image from "./medic.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import postImage7 from '../images/Blog/three-business-people-discussing-graph-points.jpg';
import Meta from "../Meta";

import { FaCircle } from "react-icons/fa";
export default function Blog6() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const topics = [
    { "id": "codingcareer", "title": "Introduction to Medical Coding as a Career" },
    { "id": "responsibilities", "title": "Key Responsibilities of a Medical Coder" },
    { "id": "education", "title": "Educational Requirements for Medical Coders" },
    { "id": "startingcareer", "title": "Starting Your Career as a Medical Coder" },
    { "id": "careeradvancement", "title": "Career Advancement Opportunities" },
    { "id": "specialization", "title": "Specializing in Medical Coding" },
    { "id": "salaryoutlook", "title": "Salary and Job Outlook for Medical Coders" },
    { "id": "successTips", "title": "Tips for Success in Your Medical Coding Career" },
    { "id": "conclusion", "title": "Conclusion" }
  ]


  return (
    <>
      <Meta
        title="Medical Coding Career Path: Opportunities and Growth | ThoughtFlows"
        description="Explore the medical coding career path — from entry-level roles to specializations and advancement. ThoughtFlows guides you through every stage of growth."
        canonical="https://www.thoughtflows.in/blog/medical-coding-career-path-opportunities-and-growth-in-healthcare"
      />
      <div
        style={{
          width: "auto",
          background: "linear-gradient(90deg,  #2E2C48 50%, #2E2C48 50%)",
          height: "auto",
          justifyContent: "space-around",
          fontSize: "40px",
        }}
        className="  lg:hidden "
      >
        <h2
          style={{
            padding: "50px",
            color: "white",
            fontSize: "35px",
            textAlign: "center",
          }}
        >
          Medical Coding Career Path: Opportunities and Growth         </h2>
        <div
          style={{
            background: "white",
            height: "auto",
            marginTop: "55px",
            marginRight: "85px",
            padding: "30px",
            marginBottom: "55px",
          }}
          className="w-full lg:w-1/2"
        >
          <p style={{ fontSize: "16px", fontWeight: "400" }}>
            In today’s rapidly evolving healthcare industry, the role of medical coders has become crucial in ensuring that the right codes are assigned to medical diagnoses, procedures, and treatments. Medical coding professionals play a key role in the healthcare system, directly affecting billing, reimbursement, compliance, and the quality of care patients receive. As the healthcare landscape continues to expand, the demand for skilled medical coders has never been higher.
          </p>
          <p style={{ fontSize: "16px", fontWeight: "400" }}>
            If you’re considering a career in medical coding or are already on this path, understanding the opportunities for growth and the various career paths available to you can help you plan a successful and rewarding career. This blog post will delve into the different stages of a medical coding career, the opportunities for specialization, the potential for career advancement, and tips for ongoing success in the field.
          </p>
        </div>
      </div>
      <div
        style={{
          width: "auto",
          background: "linear-gradient(90deg,  #2E2C48 50%, #f0f0f0 50%)",
          height: "auto",
          // display: "none",
          justifyContent: "space-around",
          fontSize: "40px",
        }}
        className=" hidden lg:flex  "
      >
        <h1
          style={{
            width: "45%",
            marginTop: "155px",
            marginLeft: "80px",
            color: "white",
            fontSize: "35px",
          }}
        >
          Medical Coding Career Path: Opportunities and Growth        </h1>
        <div
          style={{
            background: "white",
            // width: "55%",
            height: "auto",
            marginTop: "55px",
            marginRight: "85px",
            padding: "30px",
            marginBottom: "55px",
          }}
          className="w-full lg:w-1/2"
        >
          <p style={{ fontSize: "16px", fontWeight: "400" }}>
            In today’s rapidly evolving healthcare industry, the role of medical coders has become crucial in ensuring that the right codes are assigned to medical diagnoses, procedures, and treatments. Medical coding professionals play a key role in the healthcare system, directly affecting billing, reimbursement, compliance, and the quality of care patients receive. As the healthcare landscape continues to expand, the demand for skilled medical coders has never been higher.
          </p>
          <p style={{ fontSize: "16px", fontWeight: "400" }}>
            If you’re considering a career in medical coding or are already on this path, understanding the opportunities for growth and the various career paths available to you can help you plan a successful and rewarding career. This blog post will delve into the different stages of a medical coding career, the opportunities for specialization, the potential for career advancement, and tips for ongoing success in the field.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row ">
        {/* Left Container - 75% Width */}
        <div className="w-full lg:w-3/4  bg-gray-100 p-4">
          <section
            id="codingcareer"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24"
          >
            {/* Heading */}
            <h2
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl font-bold text-center line-height-1 -pt-10 mt-20 text-gray-900 mb-6"
            >
              Introduction to Medical Coding as a Career
            </h2>
            <img src={postImage7} alt="postImage7" className="mx-auto block" />
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Medical coding is the process of converting healthcare diagnoses, procedures, services, and equipment into alphanumeric codes that can be universally understood. These codes are used for insurance billing, statistical reporting, and patient care documentation. The role of a medical coder is vital in ensuring the accuracy and efficiency of the healthcare system, particularly when it comes to billing and insurance claims.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              As the healthcare industry continues to expand, the demand for trained medical coders is expected to rise. Medical coding offers a stable career path with competitive salaries, job security, and opportunities for growth. It is an ideal profession for those who enjoy working with detail-oriented tasks, have strong analytical skills, and are passionate about healthcare.
            </p>
          </section>
          <section
            id="responsibilities"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24 "
          >
            {/* Heading */}
            <h2
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl font-bold text-center mt-20 text-gray-900 mb-6"
            >
              Key Responsibilities of a Medical Coder            </h2>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              A medical coder’s primary responsibility is to review medical documentation provided by healthcare providers and assign the appropriate codes to diagnoses, treatments, and procedures. The key responsibilities of a medical coder include:
            </p>
            <ol className="list-decimal ">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Reviewing Patient Records                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Coders examine the details of a patient’s visit, including medical history, diagnoses, procedures, and test results, to identify the correct codes. The coder must understand complex medical terminology and procedures to ensure the proper codes are assigned.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Assigning the Correct Codes
                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Coders use various coding systems like ICD-10-CM for diagnoses and CPT for procedures. They assign these codes to ensure healthcare providers are reimbursed for the services rendered.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Ensuring Compliance                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Medical coders must follow strict guidelines to ensure their codes comply with healthcare laws and regulations, such as HIPAA (Health Insurance Portability and Accountability Act). Incorrect coding can lead to reimbursement issues or legal consequences.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Communicating with Healthcare Providers                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Coders often need to collaborate with healthcare providers, ensuring that the documentation is clear and accurate. They might request additional information or clarification if needed.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Submitting Claims to Insurance                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Medical coders ensure that claims are submitted accurately to insurance companies for reimbursement. This process includes verifying that the codes are correct and correspond to the services rendered.
                </p>
              </li>
            </ol>
          </section>
          <section
            id="education"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24 "
          >
            {/* Heading */}
            <h2
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl font-bold text-center mt-20 text-gray-900 mb-6"
            >
              Educational Requirements for Medical Coders            </h2>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              While there is no single educational pathway to becoming a medical coder, most professionals in the field have completed some form of formal training. The education and certification process can vary depending on the level of expertise and specialization you wish to pursue.
            </p>
            <ol className="list-decimal">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  High School Diploma                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  At a minimum, aspiring medical coders need a high school diploma or equivalent. Some basic understanding of biology, health science, or mathematics is helpful.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Medical Coding Certificate or Associate Degree                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Many medical coders begin their careers by obtaining a medical coding certification or completing an associate degree in medical coding, health information management, or a related field. Certificate programs typically take less time to complete (6-12 months), while associate degrees can take around two years.
                </p>

              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Certification                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Certification is an essential step for most medical coding professionals. Some of the most recognized certifications include:
                </p>
                <ul className="list-disc">
                  <li>
                    <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                      Certified Professional Coder (CPC):                    </b>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                      Offered by the AAPC (American Academy of Professional Coders), this is one of the most widely recognized certifications in the field.

                    </p>
                  </li>
                  <li>
                    <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                      Certified Coding Specialist (CCS):                     </b>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                      Offered by the AHIMA (American Health Information Management Association), this certification focuses on inpatient coding.
                    </p>
                  </li>
                  <li>
                    <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                      Certified Inpatient Coder (CIC):                    </b>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                      Focuses on coding inpatient hospital stays.
                    </p>
                  </li>
                  <li>
                    <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                      Certified Outpatient Coder (COC):                    </b>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                      Focuses on coding outpatient services.
                    </p>
                  </li>
                  <li>
                    <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                      Certified Coding Associate (CCA):                  </b>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                      An entry-level certification for those new to medical coding.</p>
                  </li>
                </ul>
              </li>

              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Certifications improve job prospects and can lead to higher salaries and more opportunities for advancement.                    </p>
            </ol>
          </section>
          <section
            id="startingcareer"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24  "
          >
            {/* Heading */}
            <h2
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl font-bold text-center mt-20 text-gray-900 mb-6"
            >
              Starting Your Career as a Medical Coder            </h2>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              The first step in your medical coding career is to complete the necessary training and earn a certification. Once you’re certified, you can begin working as an entry-level medical coder. Here’s a breakdown of how to start your career:
            </p>
            <ol className="list-decimal">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Entry-Level Roles                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  After certification, you can begin working in entry-level positions, which may include roles like:
                </p>
                <ul className="list-disc">
                  <li>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                      Medical Coding Specialist

                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                      Healthcare Data Entry Clerk
                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                      Medical Records Technician
                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                      Billing Specialist
                    </p>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Entry-level roles generally involve coding straightforward medical procedures and diagnoses under supervision. You’ll gain hands-on experience and become more comfortable working with different coding systems.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  On-the-Job Training                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Most employers provide on-the-job training, allowing you to learn their specific coding systems, software, and procedures. It’s also a great time to network and build relationships with other healthcare professionals, such as physicians, administrators, and fellow coders.
                </p>
              </li>
            </ol>
          </section>
          <section
            id="careeradvancement"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24  "
          >
            {/* Heading */}
            <h2
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl font-bold text-center mt-20 text-gray-900 mb-6"
            >
              Career Advancement Opportunities            </h2>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Medical coding offers several opportunities for career advancement. As you gain experience and refine your skills, you can progress in your career in a variety of ways. Some potential career paths include:
            </p>
            <ol className="list-decimal">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Senior Medical Coder                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  With several years of experience, you may advance to a senior medical coder role, where you’ll be responsible for more complex coding tasks and may supervise junior coders. Senior coders often specialize in certain areas, such as oncology or cardiology, and have a deep understanding of the coding systems.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Coding Supervisor/Manager                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  A coding supervisor or manager oversees the coding department, ensuring the team follows procedures, stays updated on coding guidelines, and meets productivity goals. They may also work on training new coders and handling complex coding issues.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Health Information Manager                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Health information managers are responsible for overseeing the entire medical records and health data department. This role may involve managing both coders and medical records technicians, ensuring compliance with healthcare regulations, and overseeing data security.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Medical Coding Auditor             </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Medical coding auditors review coded records for accuracy and compliance with regulatory standards. They are responsible for identifying discrepancies, ensuring that coding practices are followed, and preventing fraud or overbilling.
                </p>
              </li>
            </ol>
          </section>

          <section
            id="specialization"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24  "
          >
            {/* Heading */}
            <h2
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl mt-20 font-bold text-center text-gray-900 mb-6"
            >
              Specializing in Medical Coding            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              As the healthcare industry diversifies, so too do the opportunities for medical coders to specialize in various areas. Some common specializations include:
            </p>
            <ol className="list-decimal">
              <li>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  <b> Inpatient Coding</b>{" "}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Inpatient coders focus on coding hospital stays and surgeries, using ICD-10-CM codes to represent diagnoses and procedures.
                </p>
              </li>
              <li>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  <b> Outpatient Coding</b>{" "}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Outpatient coders work with patients who receive medical treatment but do not stay overnight in the hospital. This involves coding for doctor’s visits, diagnostic testing, and minor surgeries.
                </p>
              </li>
              <li>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  <b> Radiology Coding </b>{" "}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Radiology coders specialize in coding for imaging services, such as X-rays, CT scans, and MRIs.
                </p>
              </li>
              <li>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  <b> Oncology Coding  </b>{" "}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Oncology coders specialize in cancer treatment coding, including chemotherapy, radiation therapy, and surgeries related to cancer care.                </p>
              </li>
              <li>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  <b> Cardiovascular Coding</b>{" "}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Cardiovascular coders focus on heart-related procedures, surgeries, and treatments.
                </p>
              </li>
              <li>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  <b> Pediatrics Coding</b>{" "}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Pediatric coders specialize in coding services for children, including vaccinations, pediatric visits, and pediatric surgeries.                </p>
              </li>
            </ol>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              By specializing, you can increase your earning potential and develop expertise in a specific area of healthcare.</p>
          </section>
          <section
            id="salaryoutlook"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24  "
          >
            {/* Heading */}
            <h2
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl mt-20 font-bold text-center text-gray-900 mb-6"
            >
              Salary and Job Outlook for Medical Coders
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Medical coding offers competitive salaries and a favorable job outlook. According to the Bureau of Labor Statistics, the median annual wage for medical records and health information technicians, which includes medical coders, was $47,000 in 2023. However, the salary can vary depending on factors such as experience, location, certifications, and specialization. Experienced coders and those with advanced certifications can earn significantly higher salaries, with some professionals earning over $70,000 per year.            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              The job outlook for medical coders is also positive, with employment in the field expected to grow by 8% between 2022 and 2032, faster than the average for all occupations. The increasing complexity of healthcare services and the ongoing need for medical coding professionals are driving this demand.
            </p>
          </section>
          <section
            id="successTips"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24  "
          >
            {/* Heading */}
            <h2
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl mt-20 font-bold text-center text-gray-900 mb-6"
            >
              Tips for Success in Your Medical Coding Career            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Here are some tips for succeeding in your medical coding career:
            </p>
            <ul className="list-disc">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Stay Current:                           </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Medical coding guidelines and systems constantly change. Stay up to date with the latest code revisions, coding standards, and regulatory changes.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Network:                           </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Join professional organizations like the AAPC or AHIMA to connect with other coders, attend events, and access resources.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Seek Certifications:                          </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Earning advanced certifications can open up more opportunities for career growth and higher pay.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Gain Experience:                           </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  The more experience you have, the better you’ll become at coding. Take on new challenges, and always look for ways to improve your skills.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Embrace Technology:</b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Familiarize yourself with coding software and the growing role of automation and AI in coding. Staying tech-savvy will make you more adaptable and efficient.                </p>
              </li>
            </ul>
          </section>

          <section
            id="conclusion"
            className="max-w-4xl mx-auto md:px-6 py-12  "
          >
            {/* Heading */}
            <h2
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl font-bold mt-20 text-center text-gray-900 mb-6"
            >
              Conclusion{" "}
            </h2>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              The field of medical coding offers a wealth of opportunities for those looking for a stable and rewarding career in healthcare. Whether you’re just starting out or looking to advance, the medical coding career path provides numerous avenues for specialization, advancement, and growth. With the right education, certifications, and experience, you can build a successful career that directly impacts the efficiency, accuracy, and financial health of healthcare systems. As the demand for medical coders continues to rise, now is an excellent time to embark on this fulfilling career path.
            </p>

          </section>
        </div>
        {/* Right Container - 25% Width (Sticky) */}
        <div className=" sm:w-full  lg:w-1/4  bg-white p-4 shadow-lg h-fit px-5   lg:sticky lg:top-[115px] ">
          <h2 className="text-lg font-semibold" style={{ color: "#1d4971" }}>
            Table of contents
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            {topics.map((topic) => (
              <li key={topic.id}>
                <a
                  href={`#${topic.id}`}
                  style={{ color: "#15aeb8" }}
                  className="text-blue-600 no-underline hover:underline"
                >
                  {topic.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
