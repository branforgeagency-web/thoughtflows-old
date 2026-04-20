import { useEffect } from "react";
import image from "./medic.jpg";
import postImage2 from '../images/Blog/medical-banner-with-doctor-wearing-goggles.jpg';

import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaCircle } from "react-icons/fa";
export default function Blog2() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const toggles = document.querySelectorAll(".faq-toggle");
    const toggleFaq = (event) => {
      const faqElement = event.currentTarget.closest(".faq");
      const isActive = faqElement.classList.contains('active');

      // Close all other FAQs first
      const allFaqs = document.querySelectorAll('.faq');
      allFaqs.forEach(faq => {
        faq.classList.remove('active');
      });

      // If the clicked FAQ was not active, open it
      if (!isActive) {
        faqElement.classList.add('active');
      }
    };

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", toggleFaq);
    });

    return () => {
      toggles.forEach((toggle) => {
        toggle.removeEventListener("click", toggleFaq);
      });
    };
  }, []);
  const topics = [
    {
      id: "Medical",
      title: "What is Medical Coding?",
    },
    {
      id: "Crucial",
      title: "The Crucial Role of Medical Coding in Healthcare",
    },
    {
      id: "How",
      title: "How Medical Coding Ensures Accurate Billing",
    },
    {
      id: "Compliance",
      title: "Medical Coding and Compliance: Safeguarding Legal and Ethical Standards",
    },
    {
      id: "Improves",
      title: "How Medical Coding Improves Patient Care",
    },
    {
      id: "Economic",
      title: "The Economic Benefits of Medical Coding",
    },
    {
      id: "Pursue",
      title: "Why Pursue a Career in Medical Coding?",
    },
    {
      id: "Do's",
      title: "Do's and Don’ts for Medical Coding Success",
    },
    {
      id: "Conclusion",
      title: "Conclusion: Start Your Journey as a Certified Medical Coder",
    },
    {
      id: "FAQ",
      title: "FAQ",
    },
  ]


  const faqData = [
    {
      "id": 1,
      "question": "What is medical coding?",
      "answer": "Medical coding is the process of converting healthcare diagnoses, procedures, services, and medical equipment into universal alphanumeric codes used for billing, reporting, and research."
    },
    {
      "id": 2,
      "question": "How does medical coding affect healthcare billing?",
      "answer": "Accurate medical coding ensures that healthcare providers are properly reimbursed for services rendered. It helps streamline the billing process and ensures insurance claims are processed without errors."
    },
    {
      "id": 3,
      "question": "What are the most commonly used medical coding systems?",
      "answer": "The most commonly used medical coding systems are ICD-10 (International Classification of Diseases), CPT (Current Procedural Terminology), and HCPCS (Healthcare Common Procedure Coding System)."
    },
    {
      "id": 4,
      "question": "Why is compliance important in medical coding?",
      "answer": "Medical coding ensures compliance with healthcare regulations such as HIPAA, Medicare, and Medicaid. Coders must adhere to these standards to protect patient privacy and avoid legal repercussions."
    },
    {
      "id": 5,
      "question": "What is the role of a medical coder in patient care?",
      "answer": "Medical coders play a vital role in ensuring that patient records are accurate and easily accessible, which helps healthcare providers deliver better care and make informed decisions."
    },
    {
      "id": 6,
      "question": "Can I work from home as a medical coder?",
      "answer": "Yes, many medical coders have the option to work from home, as long as they have access to the necessary software and patient records, making it a flexible career choice."
    },
    {
      "id": 7,
      "question": "What qualifications do I need to become a medical coder?",
      "answer": "To become a certified medical coder, you typically need to complete a training program and earn certifications such as the CPC (Certified Professional Coder). At Thoughtflows, we provide these certifications through our specialized training."
    },
    {
      "id": 8,
      "question": "What is the job outlook for medical coders?",
      "answer": "The demand for medical coders is growing rapidly as the healthcare industry expands. Job security, opportunities for career growth, and competitive salaries make it a promising field."
    },
    {
      "id": 9,
      "question": "What certifications are recognized for medical coding?",
      "answer": "The most recognized certifications in medical coding include the CPC (Certified Professional Coder) by AAPC, CCS (Certified Coding Specialist) by AHIMA, and COC (Certified Outpatient Coder) certifications."
    },
    {
      "id": 10,
      "question": "How can Thoughtflows Medical Coding Academy help me become a medical coder?",
      "answer": "Thoughtflows Medical Coding Academy provides comprehensive training, covering all specialties and certifications. Our expert instructors and hands-on approach ensure that you’re ready to pass your exams and succeed in the medical coding field."
    }
  ]


  return (
    <>
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
          Why Medical Coding is the Backbone of the Healthcare Industry        </h2>
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
            The healthcare system is like a giant puzzle—each piece contributing to the bigger picture. One crucial piece often overlooked is medical coding. While it may seem like a technical or administrative task, medical coding plays an essential role in ensuring the healthcare system operates efficiently, from accurate billing to compliance with regulations. At Thoughtflows Medical Coding Academy, we understand the immense value of this role, and that’s why we train future medical coders to ensure healthcare runs smoothly and ethically.

          </p>
          <p style={{ fontSize: "16px", fontWeight: "400" }}>
            In this blog, we’re going to explore exactly why medical coding is often described as the backbone of the healthcare industry. Whether you're a prospective student or someone curious about this field, read on to understand why a career in medical coding might just be the perfect fit for you.

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
          Why Medical Coding is the Backbone of the Healthcare Industry        </h1>
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
            The healthcare system is like a giant puzzle—each piece contributing to the bigger picture. One crucial piece often overlooked is medical coding. While it may seem like a technical or administrative task, medical coding plays an essential role in ensuring the healthcare system operates efficiently, from accurate billing to compliance with regulations. At Thoughtflows Medical Coding Academy, we understand the immense value of this role, and that’s why we train future medical coders to ensure healthcare runs smoothly and ethically.

          </p>
          <p style={{ fontSize: "16px", fontWeight: "400" }}>
            In this blog, we’re going to explore exactly why medical coding is often described as the backbone of the healthcare industry. Whether you're a prospective student or someone curious about this field, read on to understand why a career in medical coding might just be the perfect fit for you.

          </p>

        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row ">
        {/* Left Container - 75% Width */}
        <div className="w-full lg:w-3/4  bg-gray-100 p-4">
          <section
            id="Medical"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24"
          >
            {/* Heading */}
            <h2 style={{ color: "#1d4971" }} className="text-3xl md:text-4xl font-bold text-center line-height-1 -pt-10 mt-20 text-gray-900 mb-6">
              What is Medical Coding?
            </h2>
            <img src={postImage2} alt="postImage2" className="mx-auto block" />
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Let’s start with the basics. Medical coding is the process of converting healthcare diagnoses, procedures, services, and medical equipment into universal alphanumeric codes. These codes are then used by insurance companies, healthcare providers, and other stakeholders to ensure accurate billing, reporting, and communication.

            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              These codes are often derived from medical records or physician notes and are a critical part of ensuring that the services provided to patients are properly documented and reimbursed. Medical coders work with codes like ICD-10, CPT, and HCPCS Level II, which are standardized across the globe.

            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              At Thoughtflows Medical Coding Academy, we offer specialized training programs that cover these codes in detail, preparing students for the CPC exam and beyond, ensuring they are well-equipped to succeed in this vital healthcare role.

            </p>

          </section>
          <section
            id="Crucial"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24 "
          >
            {/* Heading */}
            <h2 style={{ color: "#1d4971" }} className="text-3xl md:text-4xl font-bold text-center mt-20 text-gray-900 mb-6">
              The Crucial Role of Medical Coding in Healthcare
            </h2>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Imagine a world where patient care, insurance claims, and treatment history are all misaligned. It’s hard to picture, right? That's because medical coding plays such a pivotal role in the smooth operation of healthcare. Here's how:

            </p>
            <ol className="list-decimal ">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Accurate Billing and Reimbursement
                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Without accurate medical coding, healthcare providers might not be paid for the services they provide. Insurance claims are directly tied to the codes assigned during a patient’s visit. By ensuring that the codes are accurate, medical coders ensure that the healthcare provider is reimbursed for their services, and patients receive the care they need without unnecessary delays.

                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Efficient Patient Data Management
                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Medical coders also help organize and streamline patient information. Each time a patient visits a healthcare provider, a new set of codes are created that represent the diagnosis and treatment. These codes provide healthcare providers with structured data that can be used for future reference and follow-up care.

                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Research and Analysis
                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Medical coding isn’t just about billing—it’s also an essential tool for healthcare research. The codes provide insights into patient trends, disease patterns, and treatment outcomes, which are used to improve patient care and guide public health policies.
                  .
                </p>
              </li>

            </ol>
          </section>
          <section
            id="How"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24 "
          >
            {/* Heading */}
            <h2 style={{ color: "#1d4971" }} className="text-3xl md:text-4xl font-bold text-center mt-20 text-gray-900 mb-6">
              How Medical Coding Ensures Accurate Billing            </h2>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              It might sound like a straightforward task, but medical coding is essential for ensuring that billing and reimbursement processes are handled correctly and without error. Billing errors due to improper coding can lead to delays or denials of claims, which can have significant financial consequences for healthcare providers.            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              For example, incorrect coding might mean that a patient isn’t billed for a procedure, or a healthcare provider might not get reimbursed for critical services. With medical coding, the precise and accurate use of coding standards like ICD-10, CPT, and HCPCS Level II ensures healthcare organizations receive the correct amount of payment in a timely manner.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              The accuracy of these codes is critical. Coders ensure that every medical encounter, diagnosis, and procedure is assigned the correct code, minimizing errors and ensuring the billing process runs smoothly.             </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Did You Know? Accurate medical coding can drastically reduce the chances of a claim being denied or delayed, saving valuable time and revenue for healthcare providers.
            </p>

          </section>
          <section
            id="Compliance"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24  "
          >
            {/* Heading */}
            <h2 style={{ color: "#1d4971" }} className="text-3xl md:text-4xl font-bold text-center mt-20 text-gray-900 mb-6">
              Medical Coding and Compliance: Safeguarding Legal and Ethical Standards
            </h2>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              In healthcare, compliance is non-negotiable. Medical coding plays a key role in ensuring healthcare providers adhere to regulations, including laws such as:

            </p>
            <ul className="list-disc">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  HIPAA (Health Insurance Portability and Accountability Act):
                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">This law mandates strict privacy protections for patient information. Accurate medical coding helps ensure patient data is handled securely and confidentially.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Medicare and Medicaid:
                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  These government-funded healthcare programs require healthcare providers to meet specific coding and billing standards. Medical coders ensure that the correct codes are used for these services, ensuring compliance and minimizing legal risks.
                </p>
              </li>


            </ul>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              By maintaining strict standards of accuracy and ethics, medical coders help protect both patients and healthcare providers from legal pitfalls and penalties.
            </p>
          </section>
          <section
            id="Improves"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24  "
          >
            {/* Heading */}
            <h2 style={{ color: "#1d4971" }} className="text-3xl md:text-4xl font-bold text-center mt-20 text-gray-900 mb-6">
              How Medical Coding Improves Patient Care            </h2>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Medical coding isn’t just about paperwork—it’s about improving patient care and outcomes. Here’s how it does so:
            </p>
            <ol className="list-decimal ">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  {" "}
                  Clinical Decision Support                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Accurate medical coding ensures that healthcare providers have access to precise information about a patient’s medical history, diagnosis, and treatment plan. This data helps doctors make more informed decisions, reducing the risk of medical errors and improving patient outcomes.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  {" "}
                  Continuity of Care                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Patients often see multiple specialists during their healthcare journey. Medical coding ensures that the information from one doctor’s visit is properly recorded and transferred to the next, allowing for seamless communication and continuous care. This is particularly important for patients with chronic conditions who require ongoing treatments.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Better Health Outcomes                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  When a healthcare system uses accurate and timely coding, it can track patient progress more effectively. This allows for adjustments in treatments or interventions to be made promptly, which can lead to better health outcomes for patients.

                </p>
              </li>

            </ol>
          </section>
          <section
            id="Economic"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24  "
          >
            {/* Heading */}
            <h2 style={{ color: "#1d4971" }} className="text-3xl md:text-4xl mt-20 font-bold text-center text-gray-900 mb-6">
              The Economic Benefits of Medical Coding            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">Aside from ensuring proper reimbursement and compliance, medical coding also brings economic benefits to the healthcare system. It plays a direct role in the financial health of medical institutions.
            </p>
            <ul className="list-decimal">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Improved Cash Flow:
                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Medical coding ensures that claims are filed promptly and accurately, leading to faster reimbursement and a healthier cash flow for healthcare providers.

                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Cost Reduction:                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  By reducing the chances of billing errors and compliance issues, medical coding reduces administrative costs. It also minimizes the need for resubmissions or corrections, saving time and resources.

                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Fraud Prevention:                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Proper coding helps detect fraud and misuse of healthcare services. By ensuring that only legitimate services are billed, it plays a key role in maintaining the integrity of the healthcare system.

                </p>
              </li>

            </ul>
          </section>
          <section
            id="Pursue"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24 "
          >
            {/* Heading */}
            <h2 style={{ color: "#1d4971" }} className="text-3xl md:text-4xl font-bold text-center mt-20 text-gray-900 mb-6">
              Why Pursue a Career in Medical Coding?            </h2>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Now that we know how important medical coding is to the healthcare industry, let’s talk about why pursuing a career in medical coding can be a game-changer for you.

            </p>
            <ol className="list-decimal">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Job Security                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  The demand for medical coders is growing. As the healthcare industry continues to expand, the need for trained medical coding professionals is higher than ever before. You can be assured of job stability with the potential for career advancement.

                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Competitive Pay               </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Medical coding is a well-paying career. Coders with specialized skills and certifications can earn competitive salaries, and with the increasing need for coders, compensation is only expected to rise.

                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Flexibility              </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Many medical coding jobs offer flexibility, including remote work options. If you’re looking for a career with a good work-life balance, medical coding offers opportunities for both full-time and part-time work.

                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Career Growth              </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Medical coding offers excellent opportunities for growth. With additional certifications, you can expand your skill set, work in specialized areas, and even move into managerial or educational roles.

                </p>
              </li>

            </ol>
          </section>
          <section
            id="Do's"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24 "
          >
            {/* Heading */}
            <h2 style={{ color: "#1d4971" }} className="text-3xl md:text-4xl font-bold mt-20 text-center text-gray-900 mb-6">
              Do's and Don’ts for Medical Coding Success            </h2>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              <b>
                Do's:
              </b>

            </p>
            <ol className="list-decimal ">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  {" "}
                  Keep Learning:                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  The medical coding field evolves with new codes and regulations. Stay updated with certifications and continued education.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  {" "}
                  Be Detail-Oriented:                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Accuracy is key. Always double-check codes before submitting them to ensure they’re correct.

                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Follow Ethical Standards:
                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Maintain confidentiality and integrity in your work.

                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  {" "}
                  Pursue Certifications:                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  A CPC (Certified Professional Coder) certification can open up many career opportunities and give you an edge in the job market.
                </p>
              </li>
            </ol>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              <b>
                Don’ts:
              </b>

            </p>
            <ol className="list-decimal ">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  {" "}
                  Don’t Rush:               </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Taking your time and being thorough is crucial to avoid errors.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  {" "}
                  Don’t Ignore Compliance Guidelines:               </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Always follow HIPAA and other regulatory requirements.

                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Don’t Skip Training:
                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Proper training is essential. Invest in quality education to ensure your success in the field.

                </p>
              </li>

            </ol>

          </section>
          <section
            id="Conclusion"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24  "
          >
            {/* Heading */}
            <h2 style={{ color: "#1d4971" }} className="text-3xl md:text-4xl font-bold mt-20 text-center text-gray-900 mb-6">
              Conclusion: Start Your Journey as a Certified Medical Coder{" "}
            </h2>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Medical coding is, without a doubt, the backbone of the healthcare industry. It’s an essential, in-demand role that plays a huge part in everything from patient care to billing to compliance. By becoming a certified medical coder, you’re stepping into a career that offers job security, competitive pay, and the chance to make a real difference in the healthcare system.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Are you ready to kickstart your career in medical coding and become a vital part of the healthcare industry? At Thoughtflows Medical Coding Academy, we offer expert-led training programs designed to prepare you for certification exams and ensure your success in this high-demand field.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              <b> Start your journey today:</b>{" "}
            </p>
            <ul className="list-disc">
              <li>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  <b>Enroll in our Medical Coding Courses </b>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Get the training you need to pass your CPC exam and launch your career in medical coding.
                </p>
              </li>
              <li>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  <b>Contact us for more details</b>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  Have questions? Our team is here to guide you every step of the way.
                </p>
              </li>

            </ul>

            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Why wait? Secure your future in healthcare by becoming a certified medical coder with Thoughtflows Medical Coding Academy!

            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              <b>Enroll Now | Get More Info</b>
            </p>

          </section>
          <section id="FAQ" className=" px-0 max-w-4xl mx-auto md:px-6 py-12 ">
            <div className="faq-container p-0">
              <h2 style={{ color: "#1d4971" }} className='text-center my-5'>Frequently Asked Questions</h2>
              {faqData.map((faq) => (
                <div key={faq.id} className="faq">
                  <h5 className="faq-title">{faq.question}</h5>
                  <div className="faq-text">
                    {typeof faq.answer === 'string' ? (
                      faq.answer
                    ) : (
                      <ul>
                        {faq.answer.map((item, index) => (
                          <li key={index} className=' flex flex-row space-x-2 items-center '>
                            <FaCircle className="fa-circle" style={{ color: 'black', fontSize: '8px', marginRight: '10px' }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <button className="faq-toggle" type="button" aria-label="Toggle frequently asked question answer" title="Expand or collapse this answer">
                    <i className="fa-solid fa-chevron-down"></i>
                    <i className="fa-solid fa-times"></i>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* Right Container - 25% Width (Sticky) */}
        <div className=" sm:w-full  lg:w-1/4  bg-white p-4 shadow-lg h-fit px-5   lg:sticky lg:top-[115px] ">
          <h2 className="text-lg font-semibold" style={{ color: "#1d4971" }}>Table of contents</h2>
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
