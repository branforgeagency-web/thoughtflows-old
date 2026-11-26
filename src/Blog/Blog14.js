import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
  FaClock,
  FaAward,
  FaHandshake,
  FaShieldAlt,
  FaLaptopMedical,
  FaPhoneAlt,
  FaTimesCircle,
  FaFileAlt,
  FaVideo,
  FaDollarSign,
  FaBuilding,
} from "react-icons/fa";
import { mediaUrl } from "../config/media";
import heroBannerLocal from "../images/Blog/aapc-ceus/hero-banner.jpg";
import earnCeusLocal from "../images/Blog/aapc-ceus/how-to-earn-ceus.jpg";
import afterCertLocal from "../images/Blog/aapc-ceus/what-happens-after-certification.jpg";
import mistakesLocal from "../images/Blog/aapc-ceus/common-ceu-mistakes.jpg";
import maintainLocal from "../images/Blog/aapc-ceus/maintaining-aapc-credentials.jpg";
import videoLocal from "../images/Blog/aapc-ceus/aapc-ceu-tracker-walkthrough.mp4";

const heroBanner = heroBannerLocal || mediaUrl("images/Blog/aapc-ceus/hero-banner.jpg");
const earnCeusImg = earnCeusLocal || mediaUrl("images/Blog/aapc-ceus/how-to-earn-ceus.jpg");
const afterCertImg = afterCertLocal || mediaUrl("images/Blog/aapc-ceus/what-happens-after-certification.jpg");
const mistakesImg = mistakesLocal || mediaUrl("images/Blog/aapc-ceus/common-ceu-mistakes.jpg");
const maintainImg = maintainLocal || mediaUrl("images/Blog/aapc-ceus/maintaining-aapc-credentials.jpg");
const ceuTrackerVideo = videoLocal || mediaUrl("images/Blog/aapc-ceus/aapc-ceu-tracker-walkthrough.mp4");

export default function Blog14() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const canonicalUrl = "https://www.thoughtflows.in/blog/aapc-ceus";

  const topics = [
    { id: "intro-ceus", title: "1. Know About Your CEUs" },
    { id: "what-are-ceus", title: "2. What Are CEUs in Medical Coding?" },
    { id: "why-important", title: "3. Why Are CEUs Important for Medical Coders?" },
    { id: "after-certification", title: "4. What Happens After You Earn an AAPC Certification?" },
    { id: "ceu-requirements", title: "5. AAPC CEU Requirements for Different Certifications" },
    { id: "curriculum-a-b", title: "6. Understand Curriculum A and Curriculum B" },
    { id: "how-to-earn-ceus", title: "7. How to Earn AAPC CEUs" },
    { id: "how-to-earn-36", title: "8. How to Earn 36 CEUs for One AAPC Certification" },
    { id: "free-ways", title: "9. Free Ways to Earn AAPC CEUs" },
    { id: "paid-ways", title: "10. Paid Ways to Earn AAPC CEUs" },
    { id: "submit-tracker", title: "11. How to Submit CEUs Through AAPC CEU Tracker" },
    { id: "missed-deadlines", title: "12. What Happens If You Don't Complete Requirements?" },
    { id: "common-mistakes", title: "13. Common AAPC CEU Mistakes to Avoid" },
    { id: "faqs", title: "14. Frequently Asked Questions" },
    { id: "maintaining-credentials", title: "15. Maintaining Your AAPC Credentials" },
  ];

  const ceuTableData = [
    { count: "1 certification", ceus: "36 CEUs" },
    { count: "2 certifications", ceus: "40 CEUs" },
    { count: "3 certifications", ceus: "44 CEUs" },
    { count: "4 certifications", ceus: "48 CEUs" },
    { count: "5 or more certifications", ceus: "52 CEUs" },
  ];

  const specificCredentialData = [
    { cert: "CIRCC", req: "16 CEUs in interventional radiology or cardiovascular coding" },
    { cert: "CPMA", req: "16 CEUs related to auditing" },
    { cert: "CPCO", req: "16 CEUs related to compliance" },
    { cert: "CDEO", req: "16 CEUs related to documentation" },
    { cert: "CPPM", req: "16 CEUs related to practice management" },
  ];

  const faqData = [
    {
      id: 1,
      ques: "1. How many CEUs are required to maintain a CPC certification?",
      ans: "A professional holding one AAPC certification, such as CPC, generally needs 36 CEUs within a two-year reporting period. Requirements may vary based on the number of credentials held and the first renewal period.",
    },
    {
      id: 2,
      ques: "2. Can I earn free AAPC CEUs?",
      ans: "Yes. AAPC provides free educational opportunities, including AAPC the Magazine quizzes and member-only webinars. Eligible local chapter meetings and other approved learning activities may also provide CEU credits.",
    },
    {
      id: 3,
      ques: "3. Can I earn CEUs before passing the CPC examination?",
      ans: "CEUs earned before obtaining your certification generally cannot be applied towards maintaining that credential. You should start earning eligible CEUs after receiving your certification.",
    },
    {
      id: 4,
      ques: "4. Do all medical coding webinars provide AAPC CEUs?",
      ans: "No. Not every webinar qualifies for AAPC CEUs. Check whether the activity is eligible and whether the organiser provides the required CEU documentation before participating.",
    },
    {
      id: 5,
      ques: "5. How do I check my AAPC CEU balance?",
      ans: "Log in to your AAPC member account and access the CEU Tracker to review your recorded credits and reporting progress.",
    },
    {
      id: 6,
      ques: "6. What happens if I don't complete my AAPC CEU requirements?",
      ans: "According to AAPC, if membership payment or arrangements are not made, or required CEUs are not submitted within 90 days of the renewal date, the credential will be revoked. AAPC also offers a CEU extension option for a $50 fee.",
    },
    {
      id: 7,
      ques: "7. Do AAPC CEUs expire or carry forward to the next renewal period?",
      ans: "AAPC does not generally allow excess CEUs to carry over to the next two-year renewal period. However, CEUs earned within your renewal month can be applied to either your current submission or your next submission, according to AAPC policy.",
    },
    {
      id: 8,
      ques: "8. Are AAPC membership renewal and CEU submission the same?",
      ans: "No. Membership renewal and CEU completion are separate responsibilities. You must keep track of your annual membership renewal and your CEU reporting deadline.",
    },
    {
      id: 9,
      ques: "9. If I do not complete my CEUs, can I still renew my AAPC membership, or will my member ID remain active?",
      ans: (
        <div className="space-y-2">
          <p>
            AAPC membership renewal and CEU submission are two separate responsibilities. You may renew your annual membership by paying the required dues, but this does not fulfil your CEU requirements or automatically keep your certification active.
          </p>
          <p>
            If the required CEUs are not submitted within 90 days of your renewal date, your AAPC credential will be revoked. Therefore, members must complete both their annual membership renewal and applicable CEU requirements to maintain their certification.
          </p>
          <p className="font-semibold text-gray-900">
            Important: Membership status and certification status are different. Always check your AAPC account for your renewal and CEU deadlines.
          </p>
        </div>
      ),
      plainAns:
        "AAPC membership renewal and CEU submission are two separate responsibilities. You may renew your annual membership by paying the required dues, but this does not fulfil your CEU requirements or automatically keep your certification active. If the required CEUs are not submitted within 90 days of your renewal date, your AAPC credential will be revoked. Therefore, members must complete both their annual membership renewal and applicable CEU requirements to maintain their certification. Important: Membership status and certification status are different. Always check your AAPC account for your renewal and CEU deadlines.",
    },
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "AAPC CEUs: Requirements, Free Options & Renewal Guide",
        description:
          "Understand AAPC CEU requirements, explore free and paid learning options, learn how to submit CEUs through the AAPC Tracker, and maintain your credentials.",
        image: "https://www.thoughtflows.in/images/Blog/aapc-ceus/hero-banner.jpg",
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
        mainEntity: faqData.map((f) => ({
          "@type": "Question",
          name: f.ques.replace(/^\d+\.\s*/, ""),
          acceptedAnswer: {
            "@type": "Answer",
            text: f.plainAns || f.ans,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>AAPC CEUs: Requirements, Free Options & Renewal Guide</title>
        <meta
          name="description"
          content="Understand AAPC CEU requirements, explore free and paid learning options, learn how to submit CEUs through the AAPC Tracker, and maintain your credentials."
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
        }}
        className="lg:hidden"
      >
        <div className="py-8 px-4 text-center">
          <span className="inline-block bg-teal-500 text-gray-900 font-bold text-xs uppercase px-3 py-1 rounded-full mb-3 tracking-wider">
            AAPC Credential Maintenance Guide
          </span>
          <h1
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
              lineHeight: "1.35",
            }}
          >
            Know About Your CEUs: Requirements, Free Learning Options and How to Maintain Your Certification
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4 text-gray-300 text-xs mt-4">
            <span className="flex items-center gap-1">
              <FaUserEdit className="text-teal-400" /> ThoughtFlows Medical Coding Academy
            </span>
            <span className="flex items-center gap-1">
              <FaShieldAlt className="text-teal-400" /> AAPC Guidelines & Insights
            </span>
            <span className="flex items-center gap-1">
              <FaCalendarAlt className="text-teal-400" /> October 29, 2026
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header - Desktop */}
      <div
        style={{
          width: "auto",
          background: "linear-gradient(90deg, #112840 50%, #f0f4f8 50%)",
          height: "auto",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "135px",
          paddingBottom: "55px",
          paddingLeft: "60px",
          paddingRight: "60px",
        }}
        className="hidden lg:flex"
      >
        <div
          style={{
            width: "50%",
            paddingRight: "30px",
          }}
        >
          <span className="inline-block bg-teal-500 text-gray-900 font-bold text-xs uppercase px-3 py-1 rounded-full mb-3 tracking-wider">
            AAPC Credential Maintenance Guide
          </span>
          <div role="heading" aria-level="1" className="h1"
            style={{
              color: "white",
              fontSize: "30px",
              fontWeight: "bold",
              lineHeight: "1.35",
            }}
          >
            Know About Your CEUs: Requirements, Free Learning Options and How to Maintain Your Certification
          </div>
          <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm mt-4">
            <span className="flex items-center gap-2">
              <FaUserEdit className="text-teal-400" /> By ThoughtFlows Medical Coding Academy
            </span>
            <span className="flex items-center gap-2">
              <FaShieldAlt className="text-teal-400" /> Verified Coding Guide
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-teal-400" /> October 29, 2026
            </span>
          </div>
        </div>

        <div
          style={{
            background: "white",
            width: "44%",
            padding: "28px",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          }}
        >
          <p className="text-sm text-gray-700 leading-relaxed">
            Whether you have recently earned your CPC certification or have years of experience, understanding CEU requirements is essential to keeping your AAPC credentials in good standing.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            This guide explains AAPC CEUs, including certification requirements, free and paid learning opportunities, submission procedures and what happens if you miss your CEU deadline.
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Left Container - Main Article */}
        <div className="w-full lg:w-3/4 bg-gray-100 p-4 md:p-8">
          <div className="max-w-4xl mx-auto space-y-6">

            {/* First image placement above this: Know About Your CEUs... */}
            <div>
              <img
                src={heroBanner}
                alt="Know About Your CEUs: Requirements, Free Learning Options and How to Maintain Your Certification"
                className="w-full rounded-2xl shadow-lg object-cover"
                onError={(e) => {
                  e.target.src = "/media/images/Blog/aapc-ceus/hero-banner.jpg";
                }}
              />
            </div>

            {/* Section 1: Intro Section */}
            <section id="intro-ceus" className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl md:text-3xl font-bold leading-tight flex items-center gap-3"
              >
                <FaBookMedical className="text-teal-600 flex-shrink-0" />
                <span>What Are AAPC CEUs and Why Do They Matter?</span>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Passing an AAPC certification examination is an important milestone in a medical coding career. However, earning a certification is not the end of the learning process. Certified professionals must continue updating their knowledge to keep pace with changes in coding guidelines, healthcare regulations and industry practices.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                This is where Continuing Education Units (CEUs) play an important role. They help medical coding professionals maintain their AAPC credentials while continuing to develop their knowledge and skills.
              </p>
            </section>

            {/* Section 2: What Are CEUs in Medical Coding and Why Are They Important? */}
            <section id="what-are-ceus" className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3"
              >
                <FaGraduationCap className="text-teal-600 flex-shrink-0" />
                <span>What Are CEUs in Medical Coding and Why Are They Important?</span>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                CEU stands for <strong>Continuing Education Unit</strong>. In medical coding, CEUs represent credits earned by certified professionals through eligible educational activities that help them maintain and update their professional knowledge.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Medical coding is a constantly evolving field. Changes in ICD-10-CM, CPT and HCPCS coding guidelines, healthcare regulations, documentation standards and compliance requirements make continuous learning important for medical coding professionals.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                For professionals holding AAPC credentials, CEUs are also part of the certification maintenance process. They demonstrate a commitment to keeping professional knowledge current beyond the initial certification examination.
              </p>
            </section>

            {/* Section 3: Why Are CEUs Important for Medical Coders? */}
            <section id="why-important" className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-6">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3"
              >
                <FaLightbulb className="text-teal-600 flex-shrink-0" />
                <span>Why Are CEUs Important for Medical Coders?</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-teal-800 font-bold text-base">
                    <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0">1</span>
                    Staying Updated with Coding Guidelines and Industry Changes
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    Medical coding guidelines, code sets and healthcare regulations are updated periodically. Continuing education helps professionals understand these changes and apply current coding practices when reviewing medical documentation and assigning codes.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-teal-800 font-bold text-base">
                    <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0">2</span>
                    Maintaining AAPC Certification
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    Earning and submitting the required CEUs within the applicable reporting period is an important part of maintaining AAPC credentials. Professionals must also keep their AAPC membership active by paying the required annual dues. Both responsibilities are important for maintaining certification status.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-teal-800 font-bold text-base">
                    <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0">3</span>
                    Improving Coding Knowledge and Professional Skills
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    CEU programmes provide opportunities to learn about different coding specialties, medical documentation, auditing, compliance and industry developments. This ongoing learning helps professionals strengthen their existing knowledge and develop expertise in their areas of practice.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-teal-800 font-bold text-base">
                    <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0">4</span>
                    Supporting Coding Accuracy and Compliance
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    Understanding current coding guidelines and documentation requirements helps medical coders make informed coding decisions. Continuing education also improves awareness of coding compliance standards and helps professionals recognise practices that may lead to errors or compliance concerns.
                  </p>
                </div>
              </div>

              <p className="text-base text-gray-700 leading-relaxed text-justify pt-2">
                CEUs can be earned through eligible educational activities such as AAPC webinars, local chapter meetings, workshops, conferences, educational publications and other approved programmes. However, not every educational activity automatically qualifies for AAPC CEUs. Professionals should verify eligibility before claiming credits.
              </p>

              <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg">
                <p className="text-base text-teal-950 leading-relaxed">
                  <strong>Remember:</strong> Earning CEUs and maintaining certification are ongoing responsibilities. Professionals should understand their reporting requirements, track their completed credits and submit them within the applicable deadlines to keep their credentials in good standing.
                </p>
              </div>
            </section>

            {/* Second image placement above this: What Happens After You Earn an AAPC Certification? */}
            <div>
              <img
                src={afterCertImg}
                alt="What Happens After You Earn an AAPC Certification?"
                className="w-full rounded-2xl shadow-lg object-cover"
                onError={(e) => {
                  e.target.src = "/media/images/Blog/aapc-ceus/what-happens-after-certification.jpg";
                }}
              />
            </div>

            {/* Section 4: What Happens After You Earn an AAPC Certification? */}
            <section id="after-certification" className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-5">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3"
              >
                <FaAward className="text-teal-600 flex-shrink-0" />
                <span>What Happens After You Earn an AAPC Certification?</span>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Passing an AAPC certification examination is an important milestone in a medical coding career. However, earning the credential is only the beginning of your professional journey. Once certified, you are responsible for meeting the requirements needed to maintain your certification.
              </p>
              <p className="text-base font-semibold text-gray-900">
                Here is what every newly certified professional should understand:
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                    <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                    <span>1. Maintain Your AAPC Membership</span>
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed text-justify">
                    AAPC membership must be renewed annually to keep your certification active. Membership renewal is separate from CEU submission, so paying your annual membership dues does not automatically fulfil your continuing education requirements.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                    <FaClock className="text-teal-600 flex-shrink-0" />
                    <span>2. Understand Your CEU Requirements</span>
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed text-justify">
                    AAPC-certified professionals must earn and submit the required Continuing Education Units within their applicable renewal cycle. For most members, CEUs are reported every two years.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed text-justify mt-2">
                    If you have recently earned your certification, your first CEU requirement may be prorated based on your membership renewal date. The exact requirement and due date should be checked in your AAPC account.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                    <FaBookMedical className="text-teal-600 flex-shrink-0" />
                    <span>3. Start Earning CEUs After Certification</span>
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed text-justify">
                    You do not have to wait until your renewal date to begin earning CEUs. You can start participating in eligible educational activities after receiving your certification and record the credits as you earn them.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed text-justify mt-2 font-medium text-amber-900">
                    One important point: CEUs earned before obtaining your certification will not be accepted towards maintaining that credential.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                    <FaFileAlt className="text-teal-600 flex-shrink-0" />
                    <span>4. Track Your Learning and Keep Records</span>
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed text-justify">
                    Make it a habit to record your completed CEU activities and keep the relevant certificates or supporting documents. This makes it easier to review your progress and submit the required credits when your reporting period is due.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed text-justify mt-2">
                    AAPC provides a CEU Tracker through its member account, where eligible credits can be recorded and submitted.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg mt-3">
                <p className="text-base text-teal-950 leading-relaxed">
                  <strong>Remember:</strong> Certification maintenance is an ongoing responsibility. Understanding your membership renewal date, CEU requirements and reporting cycle from the beginning can help you avoid last-minute difficulties and keep your credential in good standing.
                </p>
              </div>
            </section>

            {/* Section 5: AAPC CEU Requirements for Different Certifications */}
            <section id="ceu-requirements" className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3"
              >
                <FaClipboardCheck className="text-teal-600 flex-shrink-0" />
                <span>AAPC CEU Requirements for Different Certifications</span>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                The number of Continuing Education Units (CEUs) you need depends on your AAPC certification and membership status. Before planning your CEU activities, it is important to understand how many credits you must earn and when they must be submitted.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                For most AAPC credentials, CEUs are required within a two-year reporting period. However, the exact requirement can vary depending on the number and type of credentials you hold.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                AAPC currently lists the following CEU requirements based on the number of certifications held:
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">
                How Many CEUs Are Required?
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                According to AAPC's current CEU policy, the required number of CEUs increases with the number of certifications you hold.
              </p>

              {/* Table 1: CEUs based on number of certifications */}
              <div className="overflow-x-auto my-3">
                <table className="w-full text-left border-collapse border border-gray-300 text-sm md:text-base">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="p-3 border border-gray-300 font-semibold">Number of AAPC certifications</th>
                      <th className="p-3 border border-gray-300 font-semibold">CEUs required every two years</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ceuTableData.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-3 border border-gray-300 text-gray-800">{row.count}</td>
                        <td className="p-3 border border-gray-300 font-semibold text-teal-800">{row.ceus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-base text-gray-700 leading-relaxed text-justify">
                For example, a professional holding only the CPC credential generally needs 36 CEUs during the two-year renewal period. Someone holding both CPC and CIC needs 40 CEUs during the same period.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-3">
                Additional CEU Requirements for Certain Credentials
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Some AAPC credentials have additional subject-specific CEU requirements. These credits must relate to the relevant area of practice.
              </p>

              {/* Table 2: Specific Credential Requirements */}
              <div className="overflow-x-auto my-3">
                <table className="w-full text-left border-collapse border border-gray-300 text-sm md:text-base">
                  <thead>
                    <tr className="bg-teal-900 text-white">
                      <th className="p-3 border border-gray-300 font-semibold">Certification</th>
                      <th className="p-3 border border-gray-300 font-semibold">CEUs required for the specific credential</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specificCredentialData.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-3 border border-gray-300 font-bold text-gray-800">{row.cert}</td>
                        <td className="p-3 border border-gray-300 text-gray-700">{row.req}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Therefore, it is important to check the requirements for each credential rather than relying only on the total CEU count.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                In addition to these requirements, professionals holding AAPC specialty credentials must also fulfil the applicable specialty-specific CEU requirements. AAPC requires 8 specialty-specific CEUs for each specialty credential held. These credits must come from educational activities specifically pre-approved for the relevant specialty. Check the AAPC CEU policy to confirm which activities qualify.
              </p>
            </section>

            {/* Section 6: Understand Curriculum A and Curriculum B */}
            <section id="curriculum-a-b" className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3"
              >
                <FaBookMedical className="text-teal-600 flex-shrink-0" />
                <span>Understand Curriculum A and Curriculum B</span>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                AAPC divides approved educational content into two broad categories:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-2">
                <div className="p-5 bg-teal-50 border border-teal-200 rounded-xl">
                  <h3 className="font-bold text-teal-950 text-base mb-2">
                    Curriculum A
                  </h3>
                  <p className="text-sm text-teal-900 leading-relaxed">
                    Covers core technical knowledge related to medical coding and a professional's day-to-day coding responsibilities.
                  </p>
                </div>

                <div className="p-5 bg-indigo-50 border border-indigo-200 rounded-xl">
                  <h3 className="font-bold text-indigo-950 text-base mb-2">
                    Curriculum B
                  </h3>
                  <p className="text-sm text-indigo-900 leading-relaxed">
                    Covers related subjects such as general business skills and professional development.
                  </p>
                </div>
              </div>

              <p className="text-base text-gray-700 leading-relaxed text-justify">
                AAPC requires at least 66% of the total CEUs to come from Curriculum A. Curriculum B can account for no more than 33%.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                For example, if you hold one certification and need 36 CEUs, at least 24 must be from Curriculum A, while up to 12 may come from Curriculum B.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                <strong>Exception:</strong> AAPC does not enforce the Curriculum B limitation for the CPPM credential because the topics covered under Curriculum B are considered part of practice management responsibilities.
              </p>
              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg mt-3">
                <p className="text-base text-amber-950 leading-relaxed">
                  <strong>Important:</strong> These are general requirements. Newly certified members may have prorated CEU requirements for their first renewal period. Always check your AAPC account for your exact CEU requirement, credential-specific conditions and submission deadline.
                </p>
              </div>
            </section>

            {/* Third image placement above this: How to Earn AAPC CEUs */}
            <div>
              <img
                src={earnCeusImg}
                alt="How to Earn AAPC CEUs"
                className="w-full rounded-2xl shadow-lg object-cover"
                onError={(e) => {
                  e.target.src = "/media/images/Blog/aapc-ceus/how-to-earn-ceus.jpg";
                }}
              />
            </div>

            {/* Section 7: How to Earn AAPC CEUs */}
            <section id="how-to-earn-ceus" className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3"
              >
                <FaLaptopMedical className="text-teal-600 flex-shrink-0" />
                <span>How to Earn AAPC CEUs</span>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Once you understand your CEU requirements, the next step is knowing where and how to earn those credits.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                AAPC-certified professionals can earn CEUs through various educational activities, including webinars, online courses, workshops, conferences and professional learning events. Some opportunities are free, while others require payment.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                However, not every educational activity qualifies for AAPC CEUs. Always check whether the activity is approved for CEU credit before participating.
              </p>
            </section>

            {/* Section 8: How to Earn 36 CEUs for One AAPC Certification */}
            <section id="how-to-earn-36" className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3"
              >
                <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                <span>How to Earn 36 CEUs for One AAPC Certification</span>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                AAPC members holding one certification, such as CPC, generally need 36 CEUs within a two-year reporting period. These credits must meet Curriculum A and Curriculum B requirements.
              </p>

              <div className="space-y-3 mt-3">
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                  <span className="font-bold text-teal-600 text-sm mt-0.5">•</span>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong>Understand the requirement:</strong> Earn 36 CEUs over two years to maintain one AAPC certification.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                  <span className="font-bold text-teal-600 text-sm mt-0.5">•</span>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong>Curriculum A – 24 CEUs:</strong> At least 24 credits must come from core coding education.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                  <span className="font-bold text-teal-600 text-sm mt-0.5">•</span>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong>Where to earn Curriculum A credits:</strong> Choose approved ICD-10-CM, CPT and HCPCS coding webinars, coding workshops, conferences and AAPC courses.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                  <span className="font-bold text-teal-600 text-sm mt-0.5">•</span>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong>Other Curriculum A opportunities:</strong> Approved education covering anatomy, medical terminology, coding guidelines and compliance may also qualify.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                  <span className="font-bold text-teal-600 text-sm mt-0.5">•</span>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong>Curriculum B – Maximum 12 CEUs:</strong> Up to 12 credits can come from related professional development and business education.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                  <span className="font-bold text-teal-600 text-sm mt-0.5">•</span>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong>Where to earn Curriculum B credits:</strong> Look for approved courses covering communication, leadership, time management and business management.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                  <span className="font-bold text-teal-600 text-sm mt-0.5">•</span>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong>Explore free CEU opportunities:</strong> AAPC Magazine quizzes, member-only webinars and eligible local chapter meetings can help you earn credits.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                  <span className="font-bold text-teal-600 text-sm mt-0.5">•</span>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong>Consider paid learning options:</strong> AAPC online courses, workshops and conferences may provide additional approved CEUs.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                  <span className="font-bold text-teal-600 text-sm mt-0.5">•</span>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong>Track your credits:</strong> Collect certificates, check CEU values and categories, and record completed activities through the AAPC CEU Tracker.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                  <span className="font-bold text-teal-600 text-sm mt-0.5">•</span>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <strong>Submit before your deadline:</strong> Review your CEU balance and submit the required credits within your renewal period. Keep supporting documents for verification.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg mt-3">
                <p className="text-base font-bold text-teal-900">
                  Example: 24 Curriculum A CEUs + 12 Curriculum B CEUs = 36 CEUs over two years.
                </p>
              </div>

              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg mt-3">
                <p className="text-base text-amber-950 leading-relaxed">
                  <strong>Important:</strong> CEU eligibility and category depend on AAPC approval and the educational content. Always verify the activity before claiming credits. Newly certified members may have prorated requirements for their first renewal period.
                </p>
              </div>
            </section>

            {/* Section 9: Free Ways to Earn AAPC CEUs */}
            <section id="free-ways" className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3"
              >
                <FaAward className="text-teal-600 flex-shrink-0" />
                <span>Free Ways to Earn AAPC CEUs</span>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                You don't always need to spend money to maintain your AAPC certification. AAPC membership provides access to several free educational opportunities that can help professionals earn CEU credits.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                    <FaBookMedical className="text-teal-600 flex-shrink-0" />
                    <span>1. AAPC the Magazine Quizzes</span>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    AAPC members can earn up to 12 CEUs annually by completing the monthly Test Yourself quizzes available through AAPC the Magazine. Each eligible quiz provides 1 CEU upon successful completion.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                    <FaVideo className="text-teal-600 flex-shrink-0" />
                    <span>2. AAPC Member-Only Webinars</span>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    AAPC provides four free member-only webinars annually, offering at least 4 CEUs per year. These webinars cover healthcare industry updates, coding practices and other professional topics.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                    <FaHandshake className="text-teal-600 flex-shrink-0" />
                    <span>3. AAPC Local Chapter Meetings</span>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    Local AAPC chapters organise educational meetings and events where members can learn from industry professionals and earn CEUs. Many of these opportunities are available free or at a low cost.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                    <FaLaptopMedical className="text-teal-600 flex-shrink-0" />
                    <span>4. CMS Web-Based Training</span>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    The Centers for Medicare & Medicaid Services (CMS) offers free online training courses on healthcare programmes, regulations and related topics. Eligible educational activities may qualify for AAPC CEUs, subject to AAPC's requirements and documentation rules.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg mt-3">
                <p className="text-base text-teal-950 leading-relaxed">
                  <strong>Note:</strong> CMS-sponsored education can count towards core CEUs but cannot be used to fulfil specialty-specific CEU requirements.
                </p>
              </div>
            </section>

            {/* Section 10: Paid Ways to Earn AAPC CEUs */}
            <section id="paid-ways" className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3"
              >
                <FaDollarSign className="text-teal-600 flex-shrink-0" />
                <span>Paid Ways to Earn AAPC CEUs</span>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                For professionals who want structured learning opportunities, AAPC offers several paid educational options to earn CEU credits.
              </p>

              <div className="space-y-4 mt-3">
                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                    <FaLaptopMedical className="text-teal-600 flex-shrink-0" />
                    <span>1. AAPC Online Courses</span>
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed text-justify">
                    AAPC offers online courses covering medical coding, billing, auditing, compliance and specialty-specific topics. These courses allow professionals to improve their knowledge while earning eligible CEU credits.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                    <FaBuilding className="text-teal-600 flex-shrink-0" />
                    <span>2. Coding Workshops and Conferences</span>
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed text-justify">
                    Educational workshops and conferences provide opportunities to learn about coding updates, industry changes and practical coding challenges. Eligible sessions may offer CEU credits.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                    <FaGraduationCap className="text-teal-600 flex-shrink-0" />
                    <span>3. Specialty-Specific Training</span>
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed text-justify">
                    Professionals can choose specialised training in areas such as inpatient coding, risk adjustment, auditing and documentation. These learning opportunities can help them strengthen their expertise and meet applicable specialty-specific CEU requirements.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg mt-3">
                <p className="text-base text-teal-950 leading-relaxed">
                  <strong>Note:</strong> CEU credits, eligibility and fees vary by programme. Always check the course details and AAPC approval information before enrolling.
                </p>
              </div>
            </section>

            {/* Section 11: How to Submit CEUs Through the AAPC CEU Tracker */}
            <section id="submit-tracker" className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3"
              >
                <FaClipboardCheck className="text-teal-600 flex-shrink-0" />
                <span>How to Submit CEUs Through the AAPC CEU Tracker</span>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Earning CEUs is only one part of maintaining your AAPC certification. You must also record and submit the credits through your AAPC member account.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                The AAPC CEU Tracker helps members manage their continuing education activities, track completed credits and submit the required information.
              </p>

              <h3 className="text-xl font-bold text-gray-900 pt-2">
                Steps to Submit CEUs Through the AAPC CEU Tracker
              </h3>

              <div className="space-y-3 mt-2">
                <div className="flex gap-4 p-4 border border-gray-200 bg-gray-50/70 rounded-xl items-start">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">
                      Step 1: Log in to Your AAPC Account
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Visit the official AAPC website and sign in using your member login credentials.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-gray-200 bg-gray-50/70 rounded-xl items-start">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">
                      Step 2: Open the CEU Tracker
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Navigate to the CEU Tracker in your member account to view your CEU records and reporting status.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-gray-200 bg-gray-50/70 rounded-xl items-start">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">
                      Step 3: Add Your CEU Activity
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Select the option to add or submit a CEU activity. Depending on the activity, you may need to enter details such as the CEU index number and educational information.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-gray-200 bg-gray-50/70 rounded-xl items-start">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">
                      Step 4: Upload Supporting Documents
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      If required, upload the relevant CEU certificate or supporting documentation. Make sure the document contains the necessary details to verify your participation and earned credits.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-gray-200 bg-gray-50/70 rounded-xl items-start">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">
                      Step 5: Review Your CEU Records
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      After submission, review your CEU Tracker to confirm that the activity has been recorded correctly. Keep copies of your certificates and supporting documents for your records.
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Walkthrough Box */}
              <div className="p-5 md:p-6 bg-gradient-to-r from-slate-900 to-teal-900 text-white rounded-2xl shadow-md mt-6">
                <div className="flex items-center gap-3 mb-2">
                  <FaVideo className="text-teal-400 text-xl flex-shrink-0" />
                  <h3 className="font-bold text-lg md:text-xl">Watch: How to Use the AAPC CEU Tracker</h3>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed mb-2">
                  The following video demonstrates how to access educational resources, find eligible CEU opportunities, view completion certificates and manage CEU records through an AAPC account.
                </p>
                <p className="text-xs text-teal-300 italic mb-4">
                  AAPC CEU Tracker walkthrough video.
                </p>
                <div className="rounded-xl overflow-hidden border border-teal-500/30 bg-black shadow-lg">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-auto max-h-[500px] mx-auto rounded-lg"
                    style={{ backgroundColor: "#000" }}
                  >
                    <source src={ceuTrackerVideo} type="video/mp4" />
                    <source src="/media/images/Blog/aapc-ceus/aapc-ceu-tracker-walkthrough.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg mt-4">
                <p className="text-base text-amber-950 leading-relaxed">
                  <strong>Important:</strong> Adding CEUs to your tracker and submitting them for review are two separate steps. You can record completed CEUs as soon as you earn them, but the official submission option generally becomes available one month before your due date. Make sure you complete the formal submission before the deadline.
                </p>
              </div>
            </section>

            {/* Section 12: What Happens If You Don't Complete Your AAPC CEU Requirements? */}
            <section id="missed-deadlines" className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3"
              >
                <FaExclamationTriangle className="text-red-500 flex-shrink-0" />
                <span>What Happens If You Don't Complete Your AAPC CEU Requirements?</span>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Maintaining an AAPC certification requires members to complete their CEU requirements and renew their membership on time. Missing these deadlines can put their credentials at risk.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-2">
                <div className="p-5 bg-red-50 border border-red-200 rounded-xl">
                  <h3 className="font-bold text-red-950 text-base mb-2 flex items-center gap-2">
                    <FaTimesCircle className="text-red-600 flex-shrink-0" />
                    <span>Your Credential May Be Revoked</span>
                  </h3>
                  <p className="text-sm text-red-900 leading-relaxed text-justify">
                    According to AAPC, if membership payment or arrangements are not made, or required CEUs are not submitted within 90 days of the renewal date, the credential will be revoked.
                  </p>
                </div>

                <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                  <h3 className="font-bold text-blue-950 text-base mb-2 flex items-center gap-2">
                    <FaClock className="text-blue-600 flex-shrink-0" />
                    <span>Is a CEU Extension Available?</span>
                  </h3>
                  <p className="text-sm text-blue-900 leading-relaxed text-justify">
                    AAPC offers a CEU extension option for members who need additional time to submit their credits. A $50 fee applies. Members can purchase the extension through their CEU Tracker.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/70 mt-3">
                <h3 className="font-bold text-gray-900 text-base mb-3 flex items-center gap-2">
                  <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                  <span>How Can You Avoid These Issues?</span>
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-gray-700 leading-relaxed">
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Check your CEU reporting deadline regularly.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Earn credits throughout your renewal period.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Track completed credits through your AAPC account.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Keep copies of certificates and supporting documents.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Review the requirements for each credential you hold.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg mt-3">
                <p className="text-base text-teal-950 leading-relaxed">
                  <strong>Remember:</strong> Don't wait until your renewal deadline to check your CEU balance. Planning your continuing education in advance can help you maintain your AAPC certification.
                </p>
              </div>
            </section>

            {/* Fourth image placement above this: Common AAPC CEU Mistakes Medical Coders Should Avoid */}
            <div>
              <img
                src={mistakesImg}
                alt="Common AAPC CEU Mistakes Medical Coders Should Avoid"
                className="w-full rounded-2xl shadow-lg object-cover"
                onError={(e) => {
                  e.target.src = "/media/images/Blog/aapc-ceus/common-ceu-mistakes.jpg";
                }}
              />
            </div>

            {/* Section 13: Common AAPC CEU Mistakes Medical Coders Should Avoid */}
            <section id="common-mistakes" className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3"
              >
                <FaTimesCircle className="text-red-500 flex-shrink-0" />
                <span>Common AAPC CEU Mistakes Medical Coders Should Avoid</span>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Even experienced medical coding professionals can make mistakes when earning, tracking or submitting CEUs. Understanding these common issues can help you maintain your AAPC certification without unnecessary complications.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div className="p-4 border border-gray-200 rounded-xl bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 flex items-center gap-2">
                    <FaTimesCircle className="text-red-500 flex-shrink-0" />
                    <span>Waiting Until the Last Minute</span>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    Delaying CEU activities until the renewal deadline can make it difficult to complete the required credits on time. Plan your learning activities throughout the reporting period instead of rushing at the end.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-xl bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 flex items-center gap-2">
                    <FaTimesCircle className="text-red-500 flex-shrink-0" />
                    <span>Assuming Every Webinar Qualifies for CEUs</span>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    Not every medical coding webinar or educational session provides AAPC-approved CEU credits. Always verify the activity's eligibility before attending.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-xl bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 flex items-center gap-2">
                    <FaTimesCircle className="text-red-500 flex-shrink-0" />
                    <span>Ignoring Curriculum A and Curriculum B Requirements</span>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    Focusing only on the total number of CEUs can lead to an imbalance between Curriculum A and Curriculum B credits. Keep track of both categories to ensure you meet the applicable requirements.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-xl bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 flex items-center gap-2">
                    <FaTimesCircle className="text-red-500 flex-shrink-0" />
                    <span>Forgetting to Submit Earned CEUs</span>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    Attending a webinar or completing a course does not necessarily mean the credits have been recorded in your AAPC account. Check whether the activity is automatically reported or requires manual submission.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-xl bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 flex items-center gap-2">
                    <FaTimesCircle className="text-red-500 flex-shrink-0" />
                    <span>Losing CEU Certificates</span>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    Certificates and supporting documents may be needed to verify completed educational activities. Save them in an organised folder so you can access them whenever necessary.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-xl bg-gray-50/70 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 flex items-center gap-2">
                    <FaTimesCircle className="text-red-500 flex-shrink-0" />
                    <span>Overlooking Credential-Specific Requirements</span>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    Some AAPC credentials have additional subject-specific CEU requirements. Meeting the overall CEU total alone may not be sufficient if you have not fulfilled those additional requirements.
                  </p>
                </div>
              </div>

              <div className="p-5 border border-red-200 bg-red-50/60 rounded-xl mt-3">
                <h3 className="font-bold text-red-950 text-base mb-1 flex items-center gap-2">
                  <FaExclamationTriangle className="text-red-600 flex-shrink-0" />
                  <span>Confusing Membership Renewal with CEU Completion</span>
                </h3>
                <p className="text-sm text-red-900 leading-relaxed text-justify">
                  Renewing your AAPC membership and completing your CEU requirements are separate responsibilities. Make sure you keep track of both.
                </p>
              </div>

              <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg mt-3">
                <p className="text-base text-teal-950 leading-relaxed">
                  <strong>Practical tip:</strong> Review your CEU Tracker periodically rather than checking it only when your renewal date approaches. A simple record of completed activities, credit categories and certificates can help you stay organised.
                </p>
              </div>
            </section>

            {/* Section 14: Frequently Asked Questions */}
            <section id="faqs" className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3"
              >
                <FaClipboardCheck className="text-teal-600 flex-shrink-0" />
                <span>Frequently Asked Questions</span>
              </h2>

              <div className="space-y-3 mt-4">
                {faqData.map((faq) => (
                  <div
                    key={faq.id}
                    className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50"
                  >
                    <button
                      className="w-full text-left p-4 flex justify-between items-center gap-4 hover:bg-gray-100 transition-colors"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={openFaq === faq.id}
                    >
                      <span className="font-semibold text-gray-900 text-sm md:text-base">
                        {faq.ques}
                      </span>
                      {openFaq === faq.id ? (
                        <FaChevronUp className="text-teal-600 flex-shrink-0" />
                      ) : (
                        <FaChevronDown className="text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === faq.id && (
                      <div className="p-4 bg-white text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-200">
                        {faq.ans}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Fifth image placement above this: Maintaining Your AAPC Credentials Through Continuous Learning */}
            <div>
              <img
                src={maintainImg}
                alt="Maintaining Your AAPC Credentials Through Continuous Learning"
                className="w-full rounded-2xl shadow-lg object-cover"
                onError={(e) => {
                  e.target.src = "/media/images/Blog/aapc-ceus/maintaining-aapc-credentials.jpg";
                }}
              />
            </div>

            {/* Section 15: Maintaining Your AAPC Credentials Through Continuous Learning */}
            <section id="maintaining-credentials" className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4 mb-6">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3"
              >
                <FaGraduationCap className="text-teal-600 flex-shrink-0" />
                <span>Maintaining Your AAPC Credentials Through Continuous Learning</span>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Your AAPC credentials represent an important professional achievement, but maintaining them requires continuous learning and attention to CEU requirements.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Understanding how many CEUs you need, where to earn them, how to track your credits and when to submit them can help you keep your credentials active and stay updated with changes in the medical coding industry.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Whether you have recently earned your CPC credential or have years of coding experience, make continuing education part of your professional development.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify font-semibold text-teal-900">
                Keep learning, stay updated and take responsibility for maintaining your AAPC credentials.
              </p>
            </section>

          </div>
        </div>

        {/* Right Sidebar - Sticky Table of Contents & Quick Contact */}
        <div className="w-full lg:w-1/4 bg-white p-4 md:p-6">
          <div className="sticky" style={{ top: "90px" }}>
            {/* Table of Contents */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
              <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                <FaBookMedical className="text-teal-600" />
                <span>Table of Contents</span>
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

            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-teal-700 to-slate-800 rounded-xl p-5 text-white text-center">
              <FaPhoneAlt className="mx-auto mb-3 text-teal-300 text-xl" />
              <h3 className="font-bold text-sm mb-2">Need Guidance?</h3>
              <p className="text-xs text-gray-300 mb-4">
                Connect with ThoughtFlows Medical Coding Academy for certification training and career guidance.
              </p>
              <a
                href="tel:+919384576852"
                className="block bg-teal-400 hover:bg-teal-300 text-slate-900 font-bold text-sm py-2 px-4 rounded-lg transition-colors"
              >
                093845 76852
              </a>
              <Link
                to="/contact"
                className="block mt-2 text-xs text-teal-300 hover:text-white hover:underline"
              >
                Visit Contact Page →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
