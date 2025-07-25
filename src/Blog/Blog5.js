import { useEffect } from "react";
import image from "./medic.jpg";
import postImage5 from '../images/Blog/stomatolog-nurse-tooth-clinic-checking-patient-appointment-looking-computer-monitor-stomatology-assistant-teeth-doctor-discussing-reception-dental-office.jpg';

import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaCircle } from "react-icons/fa";
export default function Blog5() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  }, []);
  const topics = [
    { "id": "icd10cm", "title": "What Is ICD-10-CM?" },
    { "id": "icdupdates", "title": "Why Are ICD-10-CM Updates Important?" },
    { "id": "keychanges", "title": "Key Changes in the Latest ICD-10-CM Updates" },
    { "id": "newupdates2025", "title": "New Additions and Updates in ICD-10-CM for 2025" },
    { "id": "exclusionsrevisions", "title": "Important Exclusions and Revisions in ICD-10-CM" },
    { "id": "impactcoding", "title": "How ICD-10-CM Changes Impact Medical Coding" },
    { "id": "stayupdated", "title": "How to Stay Updated on ICD-10-CM Changes" },
    { "id": "bestpractices", "title": "Best Practices for Implementing ICD-10-CM Updates" },
    { "id": "conclusion", "title": "Conclusion" }
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
        <h1
          style={{
            padding: "50px",
            color: "white",
            fontSize: "35px",
            textAlign: "center",
          }}
        >
Exploring ICD-10-CM: Key Changes You Need to Know        </h1>
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
          The ICD-10-CM (International Classification of Diseases, 10th Edition, Clinical Modification) is a critical coding system used by healthcare professionals worldwide to document diseases, conditions, and medical procedures. ICD-10-CM is updated annually, and these updates are important for coders to understand as they ensure accurate coding practices for patient care, billing, and insurance purposes.

          </p>
          <p style={{ fontSize: "16px", fontWeight: "400" }}>
          The complexity and scope of ICD-10-CM can make it overwhelming for both experienced coders and newcomers. With the constant evolution of the healthcare industry, including new diseases, treatment methods, and medical advancements, staying on top of ICD-10-CM changes is essential for maintaining coding accuracy and compliance.

          </p>
          <p style={{ fontSize: "16px", fontWeight: "400" }}>
          In this blog post, we’ll explore the key changes in the latest ICD-10-CM updates that medical coders need to know. Whether you’re preparing for certification exams, keeping up with industry shifts, or looking to improve your coding accuracy, this guide will provide valuable insights into the ICD-10-CM updates that directly impact your work.
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
Exploring ICD-10-CM: Key Changes You Need to Know         </h1>
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
          The ICD-10-CM (International Classification of Diseases, 10th Edition, Clinical Modification) is a critical coding system used by healthcare professionals worldwide to document diseases, conditions, and medical procedures. ICD-10-CM is updated annually, and these updates are important for coders to understand as they ensure accurate coding practices for patient care, billing, and insurance purposes.

          </p>
          <p style={{ fontSize: "16px", fontWeight: "400" }}>
          The complexity and scope of ICD-10-CM can make it overwhelming for both experienced coders and newcomers. With the constant evolution of the healthcare industry, including new diseases, treatment methods, and medical advancements, staying on top of ICD-10-CM changes is essential for maintaining coding accuracy and compliance.

          </p>
          <p style={{ fontSize: "16px", fontWeight: "400" }}>
          In this blog post, we’ll explore the key changes in the latest ICD-10-CM updates that medical coders need to know. Whether you’re preparing for certification exams, keeping up with industry shifts, or looking to improve your coding accuracy, this guide will provide valuable insights into the ICD-10-CM updates that directly impact your work.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row ">
        {/* Left Container - 75% Width */}
        <div className="w-full lg:w-3/4  bg-gray-100 p-4">
          <section
            id="icd10cm"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24"
          >
            {/* Heading */}
            <h1
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl font-bold text-center line-height-1 -pt-10 mt-20 text-gray-900 mb-6"
            >
What Is ICD-10-CM?            </h1>
            <img src={postImage5} alt="postImage5" className="mx-auto block" /> 
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            The ICD-10-CM is a coding system used to classify and document a wide range of diseases, conditions, injuries, and other health-related issues. The CM in ICD-10-CM stands for Clinical Modification, indicating that it is specifically adapted for use in the United States healthcare system.

            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            ICD-10-CM is maintained by the Centers for Disease Control and Prevention (CDC) and is used by healthcare providers, insurance companies, and government agencies to accurately document diagnoses and conditions in patient records. It ensures that there is consistency in the way medical conditions are identified, coded, and communicated.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            This coding system plays a vital role in medical billing, research, public health reporting, and ensuring compliance with healthcare regulations.
            </p>
          </section>
          <section
            id="icdupdates"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24 "
          >
            {/* Heading */}
            <h1
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl font-bold text-center mt-20 text-gray-900 mb-6"
            >
Why Are ICD-10-CM Updates Important?            </h1>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            The healthcare landscape is constantly evolving, with new diseases, treatments, and medical technologies emerging all the time. As a result, ICD-10-CM undergoes regular updates to reflect these changes. These updates are essential for the following reasons:
            </p>
            <ul className="list-disc ">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Accuracy:
                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Ensures that the most current and accurate codes are used to represent medical conditions and procedures.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Compliance:                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Keeps healthcare providers and coders in compliance with regulations from organizations like CMS (Centers for Medicare & Medicaid Services).

                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Billing and Reimbursement:                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Helps ensure correct billing and reimbursement by insurance companies, reducing the risk of denied claims or audit issues.

                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Clinical Research:               </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Facilitates the collection of consistent and up-to-date data for clinical research, public health statistics, and epidemiological studies.
                </p>
              </li>
            </ul>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                The updates to ICD-10-CM affect how healthcare providers report diagnoses, which is why coders must stay informed about changes to avoid errors and ensure proper documentation.                </p>
          </section>
          <section id="keychanges" className="max-w-4xl mx-auto md:px-6 py-12 -mb-24 ">
            {/* Heading */}
            <h1
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl font-bold text-center mt-20 text-gray-900 mb-6"
            >
Key Changes in the Latest ICD-10-CM Updates            </h1>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            Each year, the ICD-10-CM updates introduce several new codes, revisions, and deletions. Coders must familiarize themselves with these changes to ensure they are using the most up-to-date coding practices. Below, we’ll explore some of the significant changes from the latest ICD-10-CM updates.
            </p>
            <ol className="list-decimal">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                New Codes for Emerging Diseases                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                One of the most common types of updates involves the addition of new codes for newly discovered diseases or conditions. For example, in recent years, we’ve seen the addition of codes for diseases like COVID-19. As new health threats emerge, ICD-10-CM is updated to capture these diseases and provide accurate coding for patient records, billing, and treatment.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                 Expansion of Codes for Specific Conditions             </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                As more research is conducted on existing diseases and medical conditions, ICD-10-CM is updated to reflect a deeper understanding of these conditions. This can involve the addition of more specific codes to better categorize a disease or condition. For instance:
                </p>
             <ul className="list-disc">
             <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Mental health disorders:          </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                New codes have been added to reflect more precise diagnoses of specific conditions, such as various types of schizophrenia or bipolar disorder.
                </p>
              </li>
             <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Cancer codes:        </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                ICD-10-CM has updated its codes for various forms of cancer, including more detailed classifications for specific types of tumors, their locations, and stages.                </p>
              </li>
             </ul>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Updated Guidelines for Coding             </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Along with new and modified codes, there are changes to coding guidelines and conventions. For example, there might be updates to:
                </p>
             <ul className="list-disc">
             <li>
               
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                The use of eCodes for external causes of injury.                </p>
              </li>
             <li>
               
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                The correct sequencing of primary and secondary diagnoses.                           </p>
              </li>
             <li>
               
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                The assignment of combination codes for conditions that commonly occur together.                          </p>
              </li>

             </ul>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">These updates are crucial for maintaining consistency in how conditions are reported and billed.                   </p>

              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Revisions in Terminology           </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                As medical terminology evolves, updates are made to ICD-10-CM to ensure that the system accurately reflects current language and understanding. For instance:
                </p>
             <ul className="list-disc">
             <li>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Revisions might be made to the wording of codes to clarify diagnoses, ensure consistency across healthcare settings, or eliminate outdated terms.                </p>
              </li>
             <li>
               
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Gender-neutral language and other terminology updates may also be incorporated.</p>              </li>
             </ul>
              </li>
              </ol>
          </section>
          <section
            id="newupdates2025"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24  "
          >
            {/* Heading */}
            <h1
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl font-bold text-center mt-20 text-gray-900 mb-6"
            >
             New Additions and Updates in ICD-10-CM for 2025
            </h1>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            While many changes to ICD-10-CM occur year after year, the updates for 2025 introduced several new codes and revisions, with a special focus on emerging health issues and new technologies. Here are some of the key updates for 2025:
            </p>
            <ol className="list-decimal">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Codes for New Technologies and Procedures                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                As medical technology advances, there are often new procedures or diagnostic tools developed. The 2025 update included new codes for emerging technologies such as advanced genetic testing and telemedicine.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Expansion of Codes for Infectious Diseases                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                In response to the ongoing global health challenges, additional codes have been added for infectious diseases, especially those that might require specific interventions, such as emerging viruses or pandemic-related conditions.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Updates to Mental Health and Substance Use Disorders              </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                As society gains a better understanding of mental health and substance abuse, more specific codes have been introduced. These updates allow for more granular coding, capturing additional factors such as co-occurring disorders and severity levels.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Refinements in Musculoskeletal Disorders               </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                The musculoskeletal section of ICD-10-CM has seen updates in terms of more specific coding for various types of joint disorders, bone fractures, and soft tissue injuries, particularly in the context of sports-related injuries and aging populations.
                </p>
              </li>
            </ol>
          </section>
          <section
            id="exclusionsrevisions"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24  "
          >
            {/* Heading */}
            <h1
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl font-bold text-center mt-20 text-gray-900 mb-6"
            >
Important Exclusions and Revisions in ICD-10-CM            </h1>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            As part of the annual updates, some codes are revised, deleted, or excluded from the ICD-10-CM. This can be due to several factors, including advancements in research, changes in disease classification, or the obsolescence of older terms.            </p>
            <ol className="list-decimal">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Code Deletions              </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Some codes are no longer used because they are outdated or redundant. These codes are removed from the system and replaced with more accurate or comprehensive options. Coders need to be aware of any deletions to avoid errors in coding.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Exclusions and Modifiers              </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                The guidelines for exclusions are critical, especially when specific conditions or codes cannot be reported together. For example, if two diseases are considered mutually exclusive, you need to be aware of these exclusion rules to avoid incorrect reporting.                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Code Modifiers             </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                ICD-10-CM includes a variety of modifiers that offer more detailed information about a diagnosis or procedure. Modifiers allow coders to capture additional information such as whether a condition is acute or chronic, whether a procedure was done on a particular side of the body, or whether a condition is related to another diagnosis.                </p>
              </li>
            </ol>
          </section>
          
          <section
            id="impactcoding"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24  "
          >
            {/* Heading */}
            <h1
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl mt-20 font-bold text-center text-gray-900 mb-6"
            >
How ICD-10-CM Changes Impact Medical Coding            </h1>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            Changes in ICD-10-CM directly impact how medical coders assign codes to patient diagnoses, procedures, and conditions. If you’re a medical coder, staying updated on these changes is crucial for maintaining the accuracy of your work. Outdated or incorrect coding can lead to:
            </p>
            <ul className="list-decimal">
              <li>
                
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Claim denials or delays in reimbursement.
                </p>
              </li>
              <li>
                
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Legal or regulatory consequences for non-compliance.                </p>
              </li>
              <li>
                
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Inaccurate medical records that can impact patient care                </p>
              </li>
             
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            Coders must integrate these updates into their day-to-day workflows to ensure compliance with both the CDC and CMS guidelines, and to guarantee proper reimbursement for healthcare providers.            </p>
          </section>
          <section
            id="stayupdated"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24 "
          >
            {/* Heading */}
            <h1
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl font-bold text-center mt-20 text-gray-900 mb-6"
            >
How to Stay Updated on ICD-10-CM Changes            </h1>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            With frequent updates to the ICD-10-CM system, staying current can be challenging. Here are some strategies for keeping up-to-date:
            </p>
            <ol className="list-decimal">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Subscribe to AAPC’s Updates:                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                The American Academy of Professional Coders (AAPC) provides regular updates on coding changes and is an excellent resource for professional coders.

                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Attend Webinars and Training:                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Participate in training courses or webinars that focus on the latest ICD-10-CM changes.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Use ICD-10-CM Code Books with Updates:                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Make sure to use the most current edition of the ICD-10-CM coding manual. Always check for the annual updates when you get a new edition.
                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Join Professional Networks:                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Connecting with other coders through professional organizations and forums is a great way to stay informed about changes.

                </p>
              </li>
            </ol>
          </section>
          <section
            id="bestpractices"
            className="max-w-4xl mx-auto md:px-6 py-12 -mb-24 "
          >
            {/* Heading */}
            <h1
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl font-bold mt-20 text-center text-gray-900 mb-6"
            >
Best Practices for Implementing ICD-10-CM Updates            </h1>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            Once you’re familiar with the updates, integrating them into your practice is key. Here are some tips to implement ICD-10-CM changes effectively:
            </p>
            <ul className="list-disc ">
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  {" "}
                  Regularly Review Updates:                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Set aside time to review annual updates and refresh your knowledge.

                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  {" "}
                  Audit Your Coding Practices:
                </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Periodically audit your coding to ensure that you’re applying the latest changes correctly.

                </p>
              </li>
              <li>
                <b className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Use Technology:                 </b>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Many coding software systems have built-in features to ensure that you are using the most current codes.
                </p>
              </li>
             
            </ul>
          </section>
          <section
            id="conclusion"
            className="max-w-4xl mx-auto md:px-6 py-12   "
          >
            {/* Heading */}
            <h1
              style={{ color: "#1d4971" }}
              className="text-3xl md:text-4xl font-bold mt-20 text-center text-gray-900 mb-6"
            >
Conclusion            </h1>
            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            ICD-10-CM updates are essential for keeping the medical coding profession accurate, compliant, and efficient. By understanding the key changes and following best practices for staying up-to-date, coders can ensure they are providing the highest level of service and compliance to healthcare providers and patients.

            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            Staying informed about updates, changes, and revisions to the ICD-10-CM system is vital to your career as a medical coder. Remember, accuracy in coding is not just about 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            following the rules—it's about improving healthcare delivery and patient care, one code at a time.
            </p>


            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
            For coders looking to stay sharp and ahead of the curve, Thoughtflows Medical Coding Academy offers specialized training to help you master ICD-10-CM and other coding systems. Get in touch today to start your journey toward becoming an expert coder!
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
