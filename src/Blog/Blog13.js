import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import heroBanner from "../images/Blog/medical-coding-tamilnadu/hero-banner.jpg";
import salaryImg from "../images/Blog/medical-coding-tamilnadu/salary-india.jpg";
import whyChooseImg from "../images/Blog/medical-coding-tamilnadu/why-choose-thoughtflows.jpg";
import startJourneyImg from "../images/Blog/medical-coding-tamilnadu/start-journey.jpg";
import howToChooseImg from "../images/Blog/medical-coding-tamilnadu/how-to-choose.jpg";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUserEdit,
  FaCheckCircle,
  FaLightbulb,
  FaBookMedical,
  FaExclamationTriangle,
  FaGraduationCap,
  FaChevronDown,
  FaChevronUp,
  FaClipboardCheck,
  FaBuilding,
  FaUserGraduate,
  FaMoneyBillWave,
  FaClock,
  FaAward,
  FaBriefcase,
  FaStethoscope,
  FaHandshake,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaLaptopMedical,
  FaPhoneAlt,
  FaTimesCircle,
  FaUsers,
  FaRobot,
  FaQuoteLeft,
} from "react-icons/fa";

export default function Blog13() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const canonicalUrl =
    "https://www.thoughtflows.in/blog/medical-coding-course-in-tamilnadu";

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Medical Coding Course in Tamil Nadu: Is It Worth It in 2027?",
        description:
          "Looking for a medical coding course in Tamil Nadu? Explore course fees, CPC certification, eligibility, training options and career opportunities at ThoughtFlows Academy.",
        image:
          "https://www.thoughtflows.in/images/medical-coding-course-tamilnadu.jpg",
        datePublished: "2026-10-29",
        dateModified: "2026-10-29",
        author: {
          "@type": "Organization",
          name: "ThoughtFlows Medical Coding Academy",
          url: "https://www.thoughtflows.in/",
        },
        publisher: {
          "@type": "Organization",
          name: "ThoughtFlows Medical Coding Academy",
          logo: {
            "@type": "ImageObject",
            url: "https://www.thoughtflows.in/logo.svg",
          },
        },
        mainEntityOfPage: canonicalUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is a medical coding course worth it in 2027?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It can be worthwhile if you enjoy detailed documentation work, are prepared to practise regularly and have budgeted for training and certification costs. Career outcomes depend on your skills, qualifications and employer requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Which is the best medical coding institute in Tamil Nadu?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The right medical coding institute depends on your educational background, career goals, budget and preferred learning format. Before enrolling, compare the course curriculum, trainer experience, practical coding sessions, mock tests, certification preparation and fee structure. ThoughtFlows Medical Coding Academy offers medical coding training through online and offline learning formats, with multiple course options.",
            },
          },
          {
            "@type": "Question",
            name: "What are the medical coding course fees in Tamil Nadu?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The training fees at ThoughtFlows are ₹15,000 for CPC, ₹23,000 for CCS, ₹20,000 for CPMA, ₹15,000 for CRC and ₹15,000 for CPB. Certification exam fees and books are separate. Contact the academy for the latest fees.",
            },
          },
          {
            "@type": "Question",
            name: "How long does medical coding training take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The listed ThoughtFlows training durations are 45 days for CPC, CRC and CPB, and 60 days for CCS and CPMA. Exam preparation and scheduling may require additional time.",
            },
          },
          {
            "@type": "Question",
            name: "Who can join a medical coding course?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Life-science, pharmacy, nursing and allied-health graduates commonly explore medical coding. People from other educational backgrounds can also enquire about suitable training. Professional certification eligibility depends on the certifying organization's current rules.",
            },
          },
          {
            "@type": "Question",
            name: "Which is better: CPC, CCS, CPMA, CRC or CPB?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "None is the best choice for everyone. CPC focuses on professional and outpatient coding, CCS on inpatient and outpatient coding, CPMA on auditing, CRC on risk adjustment and CPB on billing. Choose according to your interests, background and career goals.",
            },
          },
          {
            "@type": "Question",
            name: "Will AI replace medical coders?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI tools can suggest codes and assist with routine tasks, but their output must be evaluated against documentation and coding guidelines. Developing strong coding fundamentals, documentation-review skills and compliance knowledge can help you adapt as workflows change.",
            },
          },
          {
            "@type": "Question",
            name: "What is the salary of a medical coder in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "According to the Hyring India Salary Model 2026, the estimated median annual CTC is approximately ₹3.6 lakh. Estimated ranges include ₹1.8–₹2.5 LPA for freshers, ₹2.5–₹5.4 LPA for intermediate professionals and ₹5.4–₹7.4 LPA for senior professionals.",
            },
          },
        ],
      },
    ],
  };

  const topics = [
    { id: "worth-it", title: "1. Is It Worth It in 2027?" },
    { id: "what-is-coding", title: "2. What Is Medical Coding?" },
    { id: "eligibility", title: "3. Who Is Eligible?" },
    { id: "how-to-choose", title: "4. Choosing the Best Institute" },
    { id: "fees", title: "5. Course Fees & Duration" },
    { id: "course-comparison", title: "6. CPC vs CCS vs CPMA vs CRC vs CPB" },
    { id: "why-thoughtflows", title: "7. Why ThoughtFlows?" },
    { id: "online-offline", title: "8. Online or Offline Classes?" },
    { id: "ai-impact", title: "9. Will AI Replace Coders?" },
    { id: "locations", title: "10. ThoughtFlows Locations" },
    { id: "roadmap", title: "11. Learning Roadmap" },
    { id: "salary", title: "12. Salary in India" },
    { id: "testimonials", title: "13. Student Testimonials" },
    { id: "faq", title: "14. Frequently Asked Questions" },
  ];

  const courseData = [
    {
      course: "CPC",
      link: "/cpc",
      fee: "₹15,000",
      duration: "45 days",
      focus: "Professional and outpatient coding",
      suitedFor: "Learners interested in physician-office and outpatient coding",
    },
    {
      course: "CCS",
      link: "/ccs",
      fee: "₹23,000",
      duration: "60 days",
      focus: "Inpatient & Outpatient hospital coding",
      suitedFor:
        "Learners interested in hospital inpatient coding & Outpatient coding",
    },
    {
      course: "CPMA",
      link: "/cpma",
      fee: "₹20,000",
      duration: "60 days",
      focus: "Coding audits and documentation review",
      suitedFor: "Learners interested in auditing, quality and compliance",
    },
    {
      course: "CRC",
      link: "/crc",
      fee: "₹15,000",
      duration: "45 days",
      focus: "Risk adjustment coding",
      suitedFor:
        "Learners interested in diagnosis-focused risk adjustment work",
    },
    {
      course: "CPB",
      link: "/cpb",
      fee: "₹15,000",
      duration: "45 days",
      focus: "Medical billing and reimbursement",
      suitedFor:
        "Learners interested in billing and revenue cycle operations",
    },
  ];

  const salaryData = [
    {
      level: "Freshers / Entry-level",
      range: "₹1.8 – ₹2.5 LPA",
      color: "bg-blue-50 border-blue-200",
      badge: "bg-blue-100 text-blue-800",
    },
    {
      level: "Intermediate",
      range: "₹2.5 – ₹5.4 LPA",
      color: "bg-teal-50 border-teal-200",
      badge: "bg-teal-100 text-teal-800",
    },
    {
      level: "Senior Professionals",
      range: "₹5.4 – ₹7.4 LPA",
      color: "bg-indigo-50 border-indigo-200",
      badge: "bg-indigo-100 text-indigo-800",
    },
  ];

  const testimonials = [
    {
      name: "Rino R",
      role: "CPC Student, Trivandrum",
      text: "I'm Rino R, I completed the medical coding course in Thought Flows academy in Trivandrum. I completed my Bachelor degree in BSc Chemistry. I passed CPC with 89%.",
      score: "CPC — 89%",
    },
    {
      name: "Athish",
      role: "AMCT Graduate, Coimbatore",
      text: "Hi I am Athish I completed AMCT three month course. I am really fulfilled because the trainers teach very clearly and in a friendly manner. I was placed in MedCode Services in Coimbatore. I am really thankful to ThoughtFlows Academy.",
      score: "Placed at MedCode Services",
    },
    {
      name: "Sharumathi A.",
      role: "Google Review — Trichy Branch",
      text: "ThoughtFlows Institute provided excellent training and guidance in medical coding. The trainers were supportive and explained the concepts clearly. With their guidance, I got selected at MedCode Services.",
      score: "Placed at MedCode Services",
    },
    {
      name: "Saranya L",
      role: "Google Review — Saravanampatti Branch",
      text: "A great place to learn medical coding! The trainers are supportive, and the concepts are explained in a simple and understandable way. The training helped me build confidence and improve my knowledge as a fresher. Highly recommended for aspiring medical coders!",
      score: "Fresher Success Story",
    },
    {
      name: "Gayathri M",
      role: "Google Review — Gandhipuram Branch",
      text: "I had a good learning experience in this medical coding class. I learned many things like anatomy, ICD coding, CPT coding and medical terminology. This class helped me improve and understand the level of medical coding.",
      score: "Completed Successfully",
    },
  ];

  const faqData = [
    {
      id: 1,
      ques: "Is a medical coding course worth it in 2027?",
      ans: (
        <p>
          It can be worthwhile if you enjoy detailed documentation work, are
          prepared to practise regularly and have budgeted for training and
          certification costs. Career outcomes depend on your skills,
          qualifications and employer requirements.
        </p>
      ),
    },
    {
      id: 2,
      ques: "Which is the best medical coding institute in Tamil Nadu?",
      ans: (
        <p>
          The right medical coding institute depends on your educational
          background, career goals, budget and preferred learning format. Before
          enrolling, compare the course curriculum, trainer experience, practical
          coding sessions, mock tests, certification preparation and fee
          structure. ThoughtFlows Medical Coding Academy offers training through
          online and offline formats with multiple course options.
        </p>
      ),
    },
    {
      id: 3,
      ques: "What are the medical coding course fees in Tamil Nadu?",
      ans: (
        <p>
          The training fees at ThoughtFlows are{" "}
          <strong>₹15,000 for CPC</strong>,{" "}
          <strong>₹23,000 for CCS</strong>,{" "}
          <strong>₹20,000 for CPMA</strong>,{" "}
          <strong>₹15,000 for CRC</strong> and{" "}
          <strong>₹15,000 for CPB</strong>. Certification exam fees and books
          are charged separately. Contact the academy for the latest fees.
        </p>
      ),
    },
    {
      id: 4,
      ques: "How long does medical coding training take?",
      ans: (
        <p>
          The ThoughtFlows training durations are{" "}
          <strong>45 days for CPC, CRC and CPB</strong>, and{" "}
          <strong>60 days for CCS and CPMA</strong>. Exam preparation and
          scheduling may require additional time.
        </p>
      ),
    },
    {
      id: 5,
      ques: "Who can join a medical coding course?",
      ans: (
        <p>
          Life-science, pharmacy, nursing and allied-health graduates commonly
          explore medical coding. People from other educational backgrounds can
          also enquire about suitable training. Professional certification
          eligibility depends on the certifying organization's current rules.
        </p>
      ),
    },
    {
      id: 6,
      ques: "Which is better: CPC, CCS, CPMA, CRC or CPB?",
      ans: (
        <p>
          None is the best choice for everyone. <strong>CPC</strong> focuses on
          professional and outpatient coding, <strong>CCS</strong> on inpatient
          and outpatient coding, <strong>CPMA</strong> on auditing,{" "}
          <strong>CRC</strong> on risk adjustment and <strong>CPB</strong> on
          billing. Choose according to your interests, background and career
          goals.
        </p>
      ),
    },
    {
      id: 7,
      ques: "How many courses does ThoughtFlows offer?",
      ans: (
        <p>
          ThoughtFlows reports offering more than{" "}
          <strong>48 courses</strong>, including CPC, CCS, CPMA, CRC, CPB,
          surgery coding and Health Information Management. Contact the academy
          for its current course list.
        </p>
      ),
    },
    {
      id: 8,
      ques: "Are online medical coding classes available in Tamil Nadu?",
      ans: (
        <p>
          ThoughtFlows offers both online and offline learning formats. Contact
          the academy to confirm current availability, batch schedules and
          course options.
        </p>
      ),
    },
    {
      id: 9,
      ques: "Will AI replace medical coders?",
      ans: (
        <p>
          AI tools can suggest codes and assist with routine tasks, but their
          output must be evaluated against documentation and coding guidelines.
          Developing strong coding fundamentals, documentation-review skills and
          compliance knowledge can help you adapt as workflows change.
        </p>
      ),
    },
    {
      id: 10,
      ques: "What is the salary of a medical coder in India?",
      ans: (
        <p>
          According to the Hyring India Salary Model 2026, the estimated median
          annual CTC is approximately <strong>₹3.6 lakh</strong>. Estimated
          ranges include <strong>₹1.8–₹2.5 LPA</strong> for freshers,{" "}
          <strong>₹2.5–₹5.4 LPA</strong> for intermediate professionals and{" "}
          <strong>₹5.4–₹7.4 LPA</strong> for senior professionals. These are
          market estimates, not guaranteed salaries.
        </p>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Medical Coding Course in Tamil Nadu | ThoughtFlows Academy
        </title>
        <meta
          name="description"
          content="Looking for a medical coding course in Tamil Nadu? Explore course fees, CPC certification, eligibility, training options and career opportunities at ThoughtFlows Academy."
        />
        <meta
          name="keywords"
          content="medical coding course in tamil nadu, medical coding course fees tamil nadu, cpc certification tamil nadu, medical coding institute tamil nadu, thoughtflows medical coding"
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* Hero Header - Mobile */}
      <div
        style={{
          width: "auto",
          background: "linear-gradient(90deg, #112840 50%, #112840 50%)",
          height: "auto",
          fontSize: "40px",
        }}
        className="lg:hidden"
      >
        <h1
          style={{
            padding: "40px 20px 10px 20px",
            color: "white",
            fontSize: "26px",
            textAlign: "center",
            fontWeight: "bold",
            lineHeight: "1.3",
          }}
        >
          Medical Coding Course in Tamil Nadu: Is It Worth It in 2027?
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 text-gray-300 text-sm pb-4 px-4">
          <span className="flex items-center gap-1">
            <FaUserEdit className="text-teal-400" /> ThoughtFlows Medical Coding
            Academy
          </span>
          <span className="flex items-center gap-1">
            <FaShieldAlt className="text-teal-400" /> 10+ Years of Training
            Experience
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-teal-400" /> Updated: October 2026
          </span>
        </div>
      </div>

      {/* Hero Header - Desktop */}
      <div
        style={{
          width: "auto",
          background: "linear-gradient(90deg, #112840 50%, #f0f4f8 50%)",
          height: "auto",
          justifyContent: "space-around",
          fontSize: "40px",
        }}
        className="hidden lg:flex"
      >
        <div
          style={{
            width: "45%",
            marginTop: "80px",
            marginLeft: "80px",
            marginBottom: "40px",
          }}
        >
          <span className="inline-block bg-teal-500 text-gray-900 font-bold text-xs uppercase px-3 py-1 rounded-full mb-3 tracking-wider">
            Tamil Nadu Career Guide — 2027
          </span>
          <h1
            style={{
              color: "white",
              fontSize: "32px",
              fontWeight: "bold",
              lineHeight: "1.35",
            }}
          >
            Medical Coding Course in Tamil Nadu: Is It Worth It in 2027?
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm mt-4">
            <span className="flex items-center gap-2">
              <FaUserEdit className="text-teal-400" /> By ThoughtFlows Medical
              Coding Academy
            </span>
            <span className="flex items-center gap-2">
              <FaShieldAlt className="text-teal-400" /> 10+ Years of Training
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-teal-400" /> Updated: October 2026
            </span>
          </div>
        </div>

        <div
          style={{
            background: "white",
            height: "auto",
            marginTop: "45px",
            marginRight: "85px",
            padding: "25px",
            marginBottom: "45px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
          className="w-full lg:w-1/2"
        >
          <p
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#333",
              lineHeight: "1.6",
            }}
          >
            Is a medical coding course worth it in 2027? For the right student,
            yes. If you enjoy detailed work with medical records and want a
            healthcare career without direct patient care, medical coding can be
            a relatively accessible training option.
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#333",
              lineHeight: "1.6",
              marginTop: "10px",
            }}
          >
            At ThoughtFlows Medical Coding Academy, we have been training
            students for over 10 years. This guide explains fees, durations,
            certifications, and what to check before enrolling.
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Left Container - Main Article */}
        <div className="w-full lg:w-3/4 bg-gray-100 p-4 md:p-8">
          {/* Hero Banner Image */}
          <div className="max-w-4xl mx-auto mb-8">
            <img
              src={heroBanner}
              alt="Medical Coding Course in Tamil Nadu — Is It Worth It in 2027? ThoughtFlows Academy"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Key Takeaways */}
          <section className="max-w-4xl mx-auto py-4">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border-l-4 border-teal-600 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FaBookMedical className="text-teal-600" /> Key Takeaways
              </h2>
              <ul className="space-y-2">
                {[
                  "Medical coding converts clinical documentation into standard codes used in healthcare records and insurance claims.",
                  "ThoughtFlows training fees range from ₹15,000 to ₹23,000, with durations of 45 to 60 days depending on the course.",
                  "CPC, CCS, CPMA, CRC and CPB focus on professional coding, inpatient coding, auditing, risk adjustment and billing.",
                  "Certification exam fees and coding books are charged separately from training fees.",
                  "AI tools are changing coding workflows, making coding accuracy and compliance knowledge increasingly important.",
                  "Completing a course or earning a certification does not guarantee employment or a particular salary.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <FaCheckCircle className="text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 1: Is It Worth It? */}
          <section id="worth-it" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaLightbulb className="text-teal-600" /> Is a Medical Coding
              Course Worth It in 2027?
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm mb-6 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                A medical coding course can be worthwhile if you enjoy
                detail-oriented work, understand the commitment involved and are
                prepared to keep practising after training.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                  <h3 className="font-bold text-teal-900 text-sm mb-2 flex items-center gap-2">
                    <FaCheckCircle className="text-teal-600" /> It may be a good
                    fit if you:
                  </h3>
                  <ul className="text-xs text-teal-800 space-y-1">
                    <li>• Want healthcare work without direct patient care</li>
                    <li>• Enjoy reading documents carefully and applying rules accurately</li>
                    <li>• Have a background in life sciences, pharmacy or nursing</li>
                    <li>• Want structured training in a specialized skill</li>
                    <li>• Are willing to prepare for certification</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-bold text-red-900 text-sm mb-2 flex items-center gap-2">
                    <FaTimesCircle className="text-red-500" /> Think carefully
                    before enrolling if you:
                  </h3>
                  <ul className="text-xs text-red-800 space-y-1">
                    <li>• Dislike detailed, rule-based work</li>
                    <li>• Expect a job immediately after classes without practice</li>
                    <li>• Haven't budgeted for certification exam fees and books</li>
                    <li>• Are not prepared to keep learning as guidelines change</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                <h4 className="font-bold text-amber-900 text-sm mb-1 flex items-center gap-2">
                  <FaLightbulb className="text-amber-600" /> Our Advice
                </h4>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Review the certification requirements, compare the total cost
                  with your career goals and ask about a demo class before
                  deciding. Some employers require certification, relevant
                  experience or a coding assessment. Completing a short training
                  course alone may not meet every employer's requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: What Is Medical Coding */}
          <section id="what-is-coding" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaStethoscope className="text-teal-600" /> What Is Medical
              Coding?
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Medical coding is the process of translating clinical
                documentation into standardized codes. Healthcare organizations
                use these codes for medical records, insurance claims,
                reimbursement and related administrative processes.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <span className="font-bold text-blue-900 block mb-1">
                    ICD-10-CM
                  </span>
                  <p className="text-xs text-blue-800">
                    Used to classify diagnoses and medical conditions. Identifies
                    what the patient was diagnosed with.
                  </p>
                </div>
                <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                  <span className="font-bold text-teal-900 block mb-1">
                    CPT®
                  </span>
                  <p className="text-xs text-teal-800">
                    Used to report medical procedures and professional services.
                    Documents what the clinician performed.
                  </p>
                </div>
                <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                  <span className="font-bold text-indigo-900 block mb-1">
                    HCPCS Level II
                  </span>
                  <p className="text-xs text-indigo-800">
                    Used to report certain supplies, products and services
                    including drugs and durable medical equipment.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                <h3 className="font-bold text-amber-900 text-sm mb-1 flex items-center gap-2">
                  <FaExclamationTriangle className="text-amber-600" /> Why
                  Accuracy Matters
                </h3>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Medical coding involves more than memorizing codes. A coder
                  must understand the documentation, apply the relevant
                  guidelines and select codes supported by the medical record.
                  Coding errors can affect claims, reimbursement, reporting and
                  compliance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Eligibility */}
          <section id="eligibility" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaUserGraduate className="text-teal-600" /> Who Is Eligible to
              Join a Medical Coding Course?
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <p className="text-gray-700 leading-relaxed text-justify">
                People from different educational backgrounds may be interested
                in medical coding. Common backgrounds include:
              </p>

              <div className="grid md:grid-cols-2 gap-3 mt-2">
                {[
                  "Life-science and biological-science graduates",
                  "B.Pharm and other pharmacy graduates",
                  "Nursing and allied-health graduates",
                  "Healthcare professionals interested in revenue cycle work",
                  "Other graduates interested in healthcare-related skills",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg"
                  >
                    <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 mt-4">
                <p className="text-xs text-blue-800 leading-relaxed">
                  <strong>Important:</strong> Training eligibility and
                  professional certification eligibility are not the same.
                  Certification requirements are set by the relevant certifying
                  organization. Some credentials have specific education,
                  membership or experience requirements. Always check the latest
                  official rules before registering for an exam.
                </p>
              </div>

              <p className="text-gray-700 text-sm">
                To discuss your qualification and course options, call or
                WhatsApp{" "}
                <a
                  href="tel:+919384576852"
                  className="text-teal-600 font-bold hover:underline"
                >
                  +91 93845 76852
                </a>
                .
              </p>
            </div>
          </section>

          {/* Section 4: How to Choose */}
          <section id="how-to-choose" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaGraduationCap className="text-teal-600" /> How to Choose the
              Best Medical Coding Institute in Tamil Nadu
            </h2>
            {/* In-content Banner */}
            <div className="mb-6">
              <img
                src={howToChooseImg}
                alt="How to Choose the Best Medical Coding Institute in Tamil Nadu"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <p className="text-gray-700 leading-relaxed text-justify">
                The best medical coding institute is one that matches your
                background, learning preferences, budget and career goals. Use
                the following checklist when comparing institutes.
              </p>

              <div className="space-y-3 mt-4">
                {[
                  {
                    icon: <FaBookMedical className="text-teal-600" />,
                    title: "Course Relevance",
                    desc: "Check whether the curriculum matches the coding specialty you want to learn.",
                  },
                  {
                    icon: <FaUserEdit className="text-teal-600" />,
                    title: "Trainer Experience",
                    desc: "Ask about trainers' qualifications and practical coding experience.",
                  },
                  {
                    icon: <FaClipboardCheck className="text-teal-600" />,
                    title: "Practice and Mock Tests",
                    desc: "Look for regular coding exercises, assessments and mock exams rather than lectures alone.",
                  },
                  {
                    icon: <FaAward className="text-teal-600" />,
                    title: "Certification Preparation",
                    desc: "Confirm which certification the course prepares you for and whether exam registration is separate.",
                  },
                  {
                    icon: <FaMoneyBillWave className="text-teal-600" />,
                    title: "Fee Transparency",
                    desc: "Request a written breakdown of training fees, books, exam fees and applicable taxes.",
                  },
                  {
                    icon: <FaLaptopMedical className="text-teal-600" />,
                    title: "Learning Format",
                    desc: "Check whether online or classroom learning is suitable for your schedule.",
                  },
                  {
                    icon: <FaBriefcase className="text-teal-600" />,
                    title: "Career Support",
                    desc: "Ask what is included, such as resume guidance, interview preparation and job information.",
                  },
                  {
                    icon: <FaBuilding className="text-teal-600" />,
                    title: "Track Record",
                    desc: "Ask how long the institute has been operating and how its student and placement figures are calculated.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="border-l-4 border-teal-500 pl-4 py-2"
                  >
                    <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                      {item.icon} {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500 mt-4">
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>Be cautious</strong> of providers promising guaranteed
                  jobs or fixed salaries. Employment outcomes depend on
                  individual performance, qualifications and employer
                  requirements.
                </p>
              </div>

              <p className="text-gray-700 text-sm">
                Want to understand how the classes work? Call or WhatsApp{" "}
                <a
                  href="tel:+919384576852"
                  className="text-teal-600 font-bold hover:underline"
                >
                  +91 93845 76852
                </a>{" "}
                to ask about fees, batches and demo-class availability. You can
                also visit our{" "}
                <Link to="/contact" className="text-teal-600 font-bold hover:underline">
                  contact page
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Section 5: Course Fees */}
          <section id="fees" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaMoneyBillWave className="text-teal-600" /> Medical Coding
              Course Fees in Tamil Nadu
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm mb-6">
              <p className="text-gray-700 leading-relaxed text-justify mb-4">
                Medical coding course fees vary according to the course,
                duration, training format and inclusions. The following are the
                training fees and durations provided by ThoughtFlows Medical
                Coding Academy.
              </p>

              {/* Fee Table */}
              <div className="overflow-x-auto my-6 border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
                  <thead className="bg-slate-800 text-white">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Course</th>
                      <th className="py-3 px-4 font-semibold">Training Fee</th>
                      <th className="py-3 px-4 font-semibold">Duration</th>
                      <th className="py-3 px-4 font-semibold">Main Focus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {courseData.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="py-3 px-4 font-bold text-teal-700">
                          <Link
                            to={row.link}
                            className="hover:underline"
                          >
                            {row.course}
                          </Link>
                        </td>
                        <td className="py-3 px-4 font-semibold text-gray-900">
                          {row.fee}
                        </td>
                        <td className="py-3 px-4 text-gray-700">
                          {row.duration}
                        </td>
                        <td className="py-3 px-4 text-gray-600 text-xs">
                          {row.focus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400 mb-4">
                <p className="text-xs text-red-800 leading-relaxed">
                  <strong>Important:</strong> These are training fees only.
                  Certification exam fees and coding books are charged
                  separately. Fees may change — contact the academy for the
                  latest prices, payment details and batch dates.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-gray-700 text-sm font-semibold">
                  Before comparing fees between institutes, ask:
                </p>
                <ul className="space-y-1">
                  {[
                    "Are study materials, coding exercises and mock tests included?",
                    "Are certification exam fees and books included or charged separately?",
                    "Are applicable taxes included?",
                    "Is there a charge for repeating a batch or retaking an assessment?",
                    "What support is available after the classes finish?",
                  ].map((q, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600 text-xs"
                    >
                      <FaCheckCircle className="text-teal-500 mt-0.5 flex-shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-700 text-sm mt-4">
                For current fees and batch availability, call or WhatsApp{" "}
                <a
                  href="tel:+919384576852"
                  className="text-teal-600 font-bold hover:underline"
                >
                  +91 93845 76852
                </a>
                .
              </p>
            </div>
          </section>

          {/* Section 6: Course Comparison */}
          <section id="course-comparison" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaAward className="text-teal-600" /> CPC vs CCS vs CPMA vs CRC
              vs CPB: Which Course Should You Choose?
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm mb-6">
              <p className="text-gray-700 leading-relaxed text-justify mb-4">
                These credentials cover different areas of medical coding and
                healthcare revenue cycle work. Your choice should depend on your
                interests, experience and career goals.
              </p>

              <div className="overflow-x-auto my-6 border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
                  <thead className="bg-teal-900 text-white">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Course</th>
                      <th className="py-3 px-4 font-semibold">Main Focus</th>
                      <th className="py-3 px-4 font-semibold">Suitable For</th>
                      <th className="py-3 px-4 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {courseData.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="py-3 px-4 font-bold text-teal-700">
                          <Link to={row.link} className="hover:underline">
                            {row.course}
                          </Link>
                        </td>
                        <td className="py-3 px-4 text-gray-700 text-xs">
                          {row.focus}
                        </td>
                        <td className="py-3 px-4 text-gray-600 text-xs">
                          {row.suitedFor}
                        </td>
                        <td className="py-3 px-4 text-gray-700 font-medium">
                          {row.duration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400 mt-2">
                <p className="text-xs text-blue-800 leading-relaxed">
                  These durations refer to ThoughtFlows training periods, not
                  the time required to earn a certification. Exam preparation
                  and scheduling may take additional time. Many beginners explore
                  CPC as a starting point, but the right choice depends on your
                  background and goals.
                </p>
              </div>

              <p className="text-gray-700 text-sm mt-4">
                Alongside CPC, CCS, CPMA, CRC and CPB, ThoughtFlows offers
                training in surgery coding and Health Information Management
                (HIM). The academy reports offering more than{" "}
                <strong>48 courses</strong> — contact the team for the current
                course list.
              </p>
            </div>
          </section>

          {/* Section 7: Why ThoughtFlows */}
          <section id="why-thoughtflows" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaBuilding className="text-teal-600" /> Why Choose ThoughtFlows
              Medical Coding Academy?
            </h2>

            {/* In-content Banner */}
            <div className="mb-6">
              <img
                src={whyChooseImg}
                alt="Why Choose ThoughtFlows Medical Coding Academy — Training, Certifications and Career Support"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <p className="text-gray-700 leading-relaxed text-justify">
                ThoughtFlows Medical Coding Academy provides medical coding
                training through online and offline learning formats.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {[
                  {
                    icon: <FaClock className="text-teal-600" />,
                    title: "10+ Years of Training Experience",
                    desc: "ThoughtFlows has been training medical coding students for more than a decade.",
                  },
                  {
                    icon: <FaUsers className="text-teal-600" />,
                    title: "35,000+ Students Trained",
                    desc: "The academy reports having trained more than 35,000 students across several states.",
                  },
                  {
                    icon: <FaBookMedical className="text-teal-600" />,
                    title: "48+ Courses",
                    desc: "CPC, CCS, CPMA, CRC, CPB, surgery coding, Health Information Management and more.",
                  },
                  {
                    icon: <FaLaptopMedical className="text-teal-600" />,
                    title: "Online and Offline Classes",
                    desc: "Ask about the available learning format for your preferred course.",
                  },
                  {
                    icon: <FaClipboardCheck className="text-teal-600" />,
                    title: "Coding Practice and Mock Tests",
                    desc: "Practice activities help learners apply coding concepts rather than relying only on theory.",
                  },
                  {
                    icon: <FaHandshake className="text-teal-600" />,
                    title: "Career Support",
                    desc: "The academy reports more than 30,000 student placements over its years of operation.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg"
                  >
                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400 mt-2">
                <p className="text-xs text-amber-800 leading-relaxed">
                  When evaluating these points, ask the academy about the current
                  curriculum, training schedule, assessment process and exact
                  career-support services offered. Placement figures are
                  institutional totals, not guarantees for individual students.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Online or Offline */}
          <section id="online-offline" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaLaptopMedical className="text-teal-600" /> Medical Coding
              Classes in Tamil Nadu: Online or Offline?
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <p className="text-gray-700 leading-relaxed text-justify mb-6">
                Both online and offline classes can be suitable. The better
                option depends on your routine, location and learning
                preferences.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                  <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                    <FaBuilding className="text-slate-600" /> Offline Medical
                    Coding Classes
                  </h3>
                  <p className="text-gray-600 text-xs mb-3">
                    Classroom training may suit learners who prefer:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Face-to-face interaction with trainers",
                      "A structured timetable",
                      "In-person doubt clarification",
                      "A classroom learning environment",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-700 text-xs"
                      >
                        <FaCheckCircle className="text-slate-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 bg-teal-50 border border-teal-200 rounded-xl">
                  <h3 className="font-bold text-teal-900 text-base mb-3 flex items-center gap-2">
                    <FaLaptopMedical className="text-teal-600" /> Online Medical
                    Coding Classes
                  </h3>
                  <p className="text-gray-600 text-xs mb-3">
                    Online training may suit learners who:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Live far from a training branch",
                      "Need flexibility around work or college",
                      "Prefer studying from home",
                      "Have reliable internet and a regular study routine",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-700 text-xs"
                      >
                        <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 text-sm mt-4">
                ThoughtFlows offers online and offline training options. Contact
                the academy to confirm availability, batch timings and the
                format offered for your preferred course.
              </p>
            </div>
          </section>

          {/* Section 9: AI Impact */}
          <section id="ai-impact" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaRobot className="text-teal-600" /> Will AI Replace Medical
              Coders in 2027?
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                AI tools can help analyze clinical notes, suggest codes and speed
                up routine coding tasks. As these tools become more common,
                medical coding workflows are likely to continue changing.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                However, suggested codes still need to be evaluated against the
                medical documentation and applicable guidelines. Complex cases,
                incomplete records and compliance questions may require careful
                human review.
              </p>

              <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl mt-4">
                <h3 className="font-bold text-indigo-900 text-sm mb-3">
                  To prepare for changing workflows, focus on building these
                  skills:
                </h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    "Medical terminology and anatomy",
                    "Accurate application of coding guidelines",
                    "Reading and interpreting clinical documentation",
                    "Identifying missing details and inconsistencies",
                    "Reviewing code suggestions against the source record",
                    "Understanding compliance requirements and AI tool limitations",
                  ].map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-indigo-800 text-xs"
                    >
                      <FaCheckCircle className="text-indigo-500 flex-shrink-0" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500 mt-2">
                <p className="text-xs text-amber-800 leading-relaxed">
                  Nobody can predict exactly how the medical coding job market
                  will look in 2027. Rather than choosing a course based on
                  predictions alone, focus on developing strong fundamentals and
                  staying willing to learn new tools.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10: Locations */}
          <section id="locations" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaMapMarkerAlt className="text-teal-600" /> Where Can You Find
              ThoughtFlows in Tamil Nadu?
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-teal-600" /> Tamil Nadu
                    Locations
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Coimbatore — Hopes, Saravanampatti and Gandhipuram",
                      "Salem",
                      "Trichy",
                      "Theni",
                    ].map((loc, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 bg-teal-50 rounded-lg text-sm text-teal-800"
                      >
                        <FaMapMarkerAlt className="text-teal-500 flex-shrink-0" />
                        {loc}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-indigo-600" /> Other States
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Kerala — Kochi and Trivandrum",
                      "Telangana — Ameerpet and Dilsukhnagar, Hyderabad",
                      "Maharashtra — Pune and Kolhapur",
                      "Andhra Pradesh — Tirupati and Vizag",
                    ].map((loc, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 bg-indigo-50 rounded-lg text-sm text-indigo-800"
                      >
                        <FaMapMarkerAlt className="text-indigo-500 flex-shrink-0" />
                        {loc}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                For current branch addresses and directions, visit the{" "}
                <Link
                  to="/contact"
                  className="text-teal-600 font-bold hover:underline"
                >
                  ThoughtFlows contact page
                </Link>
                . If travelling to a branch is inconvenient, ask about online
                training availability.
              </p>
            </div>
          </section>

          {/* Section 11: Roadmap */}
          <section id="roadmap" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaClipboardCheck className="text-teal-600" /> Medical Coding
              Learning Roadmap: From Training to Certification to a Job
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <p className="text-gray-700 leading-relaxed text-justify mb-6">
                A medical coding career generally involves several stages.
                Completing one stage does not automatically complete the next.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Complete Your Training",
                    desc: "Learn medical terminology, anatomy, coding systems and relevant guidelines. Practise with coding exercises, review mistakes and take regular assessments.",
                    color: "border-teal-500 bg-teal-50",
                    numColor: "bg-teal-600",
                  },
                  {
                    step: "02",
                    title: "Prepare for Certification",
                    desc: "Choose a certification that matches your career goal. Check the official eligibility requirements, understand the exam structure, prepare thoroughly and register through the appropriate certifying organization. Completing a training course does not automatically grant a professional certification.",
                    color: "border-blue-500 bg-blue-50",
                    numColor: "bg-blue-600",
                  },
                  {
                    step: "03",
                    title: "Prepare for Job Applications",
                    desc: "Build a resume that accurately reflects your education, training and certification status. Practise interview questions and coding assessments, and apply for suitable entry-level positions.",
                    color: "border-indigo-500 bg-indigo-50",
                    numColor: "bg-indigo-600",
                  },
                  {
                    step: "04",
                    title: "Continue Developing Your Skills",
                    desc: "Keep improving your accuracy, documentation knowledge and familiarity with coding guidelines. As you gain experience, explore specializations that match your interests and employer requirements.",
                    color: "border-purple-500 bg-purple-50",
                    numColor: "bg-purple-600",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 p-4 rounded-xl border-l-4 ${item.color}`}
                  >
                    <div
                      className={`${item.numColor} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0`}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        Step {item.step}: {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 12: Salary */}
          <section id="salary" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaMoneyBillWave className="text-teal-600" /> Medical Coding
              Salary in India: Freshers vs Experienced Professionals
            </h2>

            {/* Salary Banner */}
            <div className="mb-6">
              <img
                src={salaryImg}
                alt="Medical Coding Salary in India — Freshers vs Experienced Professionals 2026"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <p className="text-gray-700 leading-relaxed text-justify">
                Medical coding salaries in India vary depending on experience,
                employer, location, specialization and professional
                certification. According to the{" "}
                <a
                  href="https://hyring.com/jobseeker-toolkit/salary/medical-coder-salary-in-india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 font-semibold hover:underline"
                >
                  Hyring India Salary Model 2026
                </a>
                , the estimated median annual CTC for medical coders is
                approximately <strong>₹3.6 lakh</strong>.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-4">
                {salaryData.map((item, i) => (
                  <div
                    key={i}
                    className={`p-5 border rounded-xl text-center ${item.color}`}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${item.badge}`}
                    >
                      {item.level}
                    </span>
                    <p className="text-2xl font-bold text-gray-900">
                      {item.range}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Estimated Annual CTC
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                <p className="text-xs text-amber-800 leading-relaxed">
                  These figures are market estimates and not guaranteed salary
                  packages. Actual earnings may differ depending on
                  certification, coding accuracy, practical experience, employer
                  requirements and job location. When considering a medical
                  coding career, focus on building practical skills and long-term
                  professional growth.
                </p>
              </div>
            </div>
          </section>

          {/* Section 13: Testimonials */}
          <section id="testimonials" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaQuoteLeft className="text-teal-600" /> What Students Say About
              ThoughtFlows
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col"
                >
                  <FaQuoteLeft className="text-teal-400 mb-3" />
                  <p className="text-gray-700 text-sm leading-relaxed flex-1 italic">
                    "{t.text}"
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900 text-sm">
                        {t.name}
                      </p>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                    <span className="text-xs font-semibold bg-teal-100 text-teal-800 px-2 py-1 rounded-full">
                      {t.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4 text-center">
              These are individual experiences and do not guarantee the same
              results for every student.
            </p>
          </section>

          {/* Section 14: FAQ */}
          <section id="faq" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaClipboardCheck className="text-teal-600" /> Frequently Asked
              Questions
            </h2>
            <div className="space-y-3">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={openFaq === faq.id}
                  >
                    <span className="font-semibold text-gray-900 text-sm">
                      {faq.id}. {faq.ques}
                    </span>
                    {openFaq === faq.id ? (
                      <FaChevronUp className="text-teal-600 flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.ans}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-4xl mx-auto py-6">
            <div className="mb-6">
              <img
                src={startJourneyImg}
                alt="Start Your Medical Coding Training Journey — Take Your Next Step with ThoughtFlows"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-teal-900 text-white p-8 rounded-2xl shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-3">
                Start Your Medical Coding Training Journey
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
                Choosing the right medical coding course in Tamil Nadu starts
                with understanding your goals, comparing certification pathways
                and checking the full cost of training and exams. Take time to
                ask questions, compare your options and choose a program that
                fits your background and learning needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+919384576852"
                  className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  <FaPhoneAlt />
                  Call or WhatsApp: +91 93845 76852
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 bg-white text-slate-900 hover:bg-gray-100 font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  <FaHandshake />
                  Contact ThoughtFlows
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-1/4 bg-white p-4 md:p-6">
          {/* Table of Contents */}
          <div
            className="sticky"
            style={{ top: "80px" }}
          >
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
              <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                <FaBookMedical className="text-teal-600" /> Table of Contents
              </h3>
              <ul className="space-y-2">
                {topics.map((topic) => (
                  <li key={topic.id}>
                    <a
                      href={`#${topic.id}`}
                      className="text-xs text-teal-700 hover:text-teal-900 hover:underline block leading-relaxed"
                    >
                      {topic.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-teal-700 to-slate-800 rounded-xl p-5 text-white text-center mb-6">
              <FaPhoneAlt className="mx-auto mb-3 text-teal-300 text-xl" />
              <h3 className="font-bold text-sm mb-2">
                Talk to a Course Advisor
              </h3>
              <p className="text-xs text-gray-300 mb-4">
                Ask about fees, batch dates and demo class availability.
              </p>
              <a
                href="tel:+919384576852"
                className="block bg-teal-400 hover:bg-teal-300 text-slate-900 font-bold text-sm py-2 px-4 rounded-lg transition-colors"
              >
                +91 93845 76852
              </a>
              <Link
                to="/contact"
                className="block mt-2 text-xs text-teal-300 hover:text-white hover:underline"
              >
                Visit Contact Page →
              </Link>
            </div>

            {/* Quick Fee Summary */}
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                <FaMoneyBillWave className="text-teal-600" /> Quick Fee Summary
              </h3>
              <ul className="space-y-2">
                {courseData.map((c, i) => (
                  <li key={i} className="flex justify-between text-xs">
                    <Link
                      to={c.link}
                      className="text-teal-700 font-semibold hover:underline"
                    >
                      {c.course}
                    </Link>
                    <span className="text-gray-700 font-medium">{c.fee}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                Training fees only. Exam fees & books extra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
