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
} from "react-icons/fa";
import { mediaUrl } from "../config/media";
import heroBannerLocal from "../images/Blog/aapc-ceus/hero-banner.jpg";
import earnCeusLocal from "../images/Blog/aapc-ceus/how-to-earn-ceus.jpg";
import afterCertLocal from "../images/Blog/aapc-ceus/what-happens-after-certification.jpg";
import mistakesLocal from "../images/Blog/aapc-ceus/common-ceu-mistakes.jpg";
import maintainLocal from "../images/Blog/aapc-ceus/maintaining-aapc-credentials.jpg";

const heroBanner = heroBannerLocal || mediaUrl("images/Blog/aapc-ceus/hero-banner.jpg");
const earnCeusImg = earnCeusLocal || mediaUrl("images/Blog/aapc-ceus/how-to-earn-ceus.jpg");
const afterCertImg = afterCertLocal || mediaUrl("images/Blog/aapc-ceus/what-happens-after-certification.jpg");
const mistakesImg = mistakesLocal || mediaUrl("images/Blog/aapc-ceus/common-ceu-mistakes.jpg");
const maintainImg = maintainLocal || mediaUrl("images/Blog/aapc-ceus/maintaining-aapc-credentials.jpg");

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
    { id: "what-are-ceus", title: "1. What Are CEUs in Medical Coding?" },
    { id: "why-important", title: "2. Why Are CEUs Important?" },
    { id: "after-certification", title: "3. What Happens After Earning Certification?" },
    { id: "ceu-requirements", title: "4. AAPC CEU Requirements by Credential" },
    { id: "curriculum-a-b", title: "5. Curriculum A & Curriculum B Explained" },
    { id: "how-to-earn", title: "6. How to Earn 36 CEUs (Step-by-Step)" },
    { id: "free-options", title: "7. Free Ways to Earn AAPC CEUs" },
    { id: "paid-options", title: "8. Paid Learning Options" },
    { id: "ceu-tracker", title: "9. How to Submit CEUs in AAPC Tracker" },
    { id: "missed-deadlines", title: "10. What If You Miss Your CEU Deadline?" },
    { id: "common-mistakes", title: "11. Common CEU Mistakes to Avoid" },
    { id: "faqs", title: "12. Frequently Asked Questions" },
    { id: "maintain-credentials", title: "13. Maintaining Your Credentials" },
  ];

  const ceuByCertCount = [
    { count: "1 certification (e.g. CPC)", ceus: "36 CEUs" },
    { count: "2 certifications (e.g. CPC + CIC)", ceus: "40 CEUs" },
    { count: "3 certifications", ceus: "44 CEUs" },
    { count: "4 certifications", ceus: "48 CEUs" },
    { count: "5 or more certifications", ceus: "52 CEUs" },
  ];

  const specificCredentialRequirements = [
    { cert: "CIRCC", req: "16 CEUs in interventional radiology or cardiovascular coding" },
    { cert: "CPMA", req: "16 CEUs related to auditing" },
    { cert: "CPCO", req: "16 CEUs related to compliance" },
    { cert: "CDEO", req: "16 CEUs related to documentation" },
    { cert: "CPPM", req: "16 CEUs related to practice management (Curriculum B limit exempt)" },
    { cert: "AAPC Specialty Credentials", req: "8 specialty-specific CEUs for each specialty credential held" },
  ];

  const faqData = [
    {
      id: 1,
      ques: "How many CEUs are required to maintain a CPC certification?",
      ans: (
        <p>
          A professional holding one AAPC certification, such as <strong>CPC</strong>, generally needs <strong>36 CEUs within a two-year reporting period</strong>. Requirements may vary based on the total number of credentials held and whether it is your first renewal cycle (which may be prorated).
        </p>
      ),
    },
    {
      id: 2,
      ques: "Can I earn free AAPC CEUs?",
      ans: (
        <p>
          <strong>Yes.</strong> AAPC provides multiple free educational opportunities, including monthly <strong>AAPC the Magazine quizzes (up to 12 CEUs/year)</strong> and <strong>quarterly member-only webinars (at least 4 CEUs/year)</strong>. In addition, attending eligible local chapter meetings and completing approved CMS web-based training can provide free CEU credits.
        </p>
      ),
    },
    {
      id: 3,
      ques: "Can I earn CEUs before passing the CPC examination?",
      ans: (
        <p>
          <strong>No.</strong> CEUs earned before obtaining your certification generally cannot be applied towards maintaining that credential. You should start participating in eligible educational activities and recording credits after officially receiving your certification.
        </p>
      ),
    },
    {
      id: 4,
      ques: "Do all medical coding webinars provide AAPC CEUs?",
      ans: (
        <p>
          <strong>No.</strong> Not every webinar or online lecture qualifies for AAPC CEUs. Always verify whether the activity is pre-approved by AAPC and whether the organizer provides an official CEU certificate or index number before participating.
        </p>
      ),
    },
    {
      id: 5,
      ques: "How do I check my AAPC CEU balance?",
      ans: (
        <p>
          Log in to your <strong>AAPC member account</strong> on the official AAPC website and navigate to the <strong>CEU Tracker</strong>. There you can view your total recorded credits, breakdown between Curriculum A and B, specialty requirements, and your upcoming reporting deadline.
        </p>
      ),
    },
    {
      id: 6,
      ques: "What happens if I don't complete my AAPC CEU requirements?",
      ans: (
        <p>
          According to AAPC policy, if membership payment or arrangements are not made, or required CEUs are not submitted within <strong>90 days of the renewal date</strong>, the credential will be <strong>revoked</strong>. AAPC also offers a CEU extension option for a <strong>$50 fee</strong> for members who need extra time.
        </p>
      ),
    },
    {
      id: 7,
      ques: "Do AAPC CEUs expire or carry forward to the next renewal period?",
      ans: (
        <p>
          AAPC does not generally allow excess CEUs to carry over into the subsequent two-year renewal period. However, CEUs earned <strong>within your renewal month</strong> can be applied to either your current submission or your next submission, according to AAPC policy.
        </p>
      ),
    },
    {
      id: 8,
      ques: "Are AAPC membership renewal and CEU submission the same?",
      ans: (
        <p>
          <strong>No.</strong> Membership renewal (annual dues) and CEU completion (typically reported every two years) are separate responsibilities. Paying your annual dues does not satisfy your continuing education obligations, and submitting CEUs does not waive your annual membership renewal.
        </p>
      ),
    },
    {
      id: 9,
      ques: "If I do not complete my CEUs, can I still renew my AAPC membership, or will my member ID remain active?",
      ans: (
        <p>
          AAPC membership renewal and CEU submission are two distinct responsibilities. You may renew your annual membership by paying the required dues, but this does not fulfill your CEU requirements or automatically keep your certification active. If the required CEUs are not submitted within <strong>90 days of your renewal date</strong>, your AAPC credential will be revoked. Members must satisfy both annual membership renewals and applicable CEU requirements to keep their credentials in good standing.
        </p>
      ),
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
        datePublished: "2026-11-24",
        dateModified: "2026-11-24",
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
          name: f.ques,
          acceptedAnswer: {
            "@type": "Answer",
            text:
              typeof f.ans === "string"
                ? f.ans
                : f.ques === "How many CEUs are required to maintain a CPC certification?"
                ? "A professional holding one AAPC certification, such as CPC, generally needs 36 CEUs within a two-year reporting period. Requirements may vary based on the total number of credentials held and whether it is your first renewal cycle."
                : f.ques === "Can I earn free AAPC CEUs?"
                ? "Yes. AAPC provides multiple free educational opportunities, including monthly AAPC the Magazine quizzes (up to 12 CEUs/year) and quarterly member-only webinars (at least 4 CEUs/year), plus chapter meetings and CMS courses."
                : f.ques === "Can I earn CEUs before passing the CPC examination?"
                ? "No. CEUs earned before obtaining your certification generally cannot be applied towards maintaining that credential."
                : f.ques === "Do all medical coding webinars provide AAPC CEUs?"
                ? "No. Not every webinar qualifies for AAPC CEUs. Check whether the activity is approved and provides an official index number or certificate."
                : f.ques === "How do I check my AAPC CEU balance?"
                ? "Log in to your AAPC member account and access the CEU Tracker to review your recorded credits and reporting progress."
                : f.ques === "What happens if I don't complete my AAPC CEU requirements?"
                ? "According to AAPC, if membership payment or arrangements are not made, or required CEUs are not submitted within 90 days of the renewal date, the credential will be revoked. A $50 extension option is available."
                : f.ques === "Do AAPC CEUs expire or carry forward to the next renewal period?"
                ? "AAPC does not generally allow excess CEUs to carry over to the next two-year renewal period, except credits earned within your renewal month."
                : f.ques === "Are AAPC membership renewal and CEU submission the same?"
                ? "No. Membership renewal and CEU completion are separate responsibilities. Both must be maintained."
                : "AAPC membership renewal and CEU submission are separate. If CEUs are not submitted within 90 days of the renewal date, the credential is revoked even if annual dues were paid.",
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
        <meta
          name="keywords"
          content="AAPC CEUs, AAPC CEU requirements, free AAPC CEUs, CPC CEU renewal, AAPC CEU tracker, continuing education units medical coding, AAPC certification maintenance"
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
              <FaCalendarAlt className="text-teal-400" /> Updated: November 2026
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
          <h1
            style={{
              color: "white",
              fontSize: "30px",
              fontWeight: "bold",
              lineHeight: "1.35",
            }}
          >
            Know About Your CEUs: Requirements, Free Learning Options and How to Maintain Your Certification
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm mt-4">
            <span className="flex items-center gap-2">
              <FaUserEdit className="text-teal-400" /> By ThoughtFlows Medical Coding Academy
            </span>
            <span className="flex items-center gap-2">
              <FaShieldAlt className="text-teal-400" /> Verified Coding Guide
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-teal-400" /> Updated: November 2026
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
            Passing an AAPC certification examination is an important milestone in a medical coding career. However, earning a certification is not the end of the learning process. Certified professionals must continue updating their knowledge to keep pace with changes in coding guidelines, healthcare regulations and industry practices.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            This is where Continuing Education Units (CEUs) play an essential role. This guide covers CEU rules, Curriculum A & B, free options, submission steps, and avoiding revocation.
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
              alt="Know About Your AAPC CEUs: Requirements, Free Learning Options and How to Maintain Your Certification"
              className="w-full rounded-2xl shadow-lg object-cover"
              onError={(e) => {
                e.target.src = "/media/images/Blog/aapc-ceus/hero-banner.jpg";
              }}
            />
          </div>

          {/* Quick Summary / Key Highlights */}
          <section className="max-w-4xl mx-auto py-4">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border-l-4 border-teal-600 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FaBookMedical className="text-teal-600" /> Essential CEU Facts at a Glance
              </h2>
              <ul className="space-y-2">
                {[
                  "1 AAPC credential requires 36 CEUs every 2 years; holding 2 requires 40 CEUs; up to 52 CEUs for 5+ credentials.",
                  "At least 66% (24 of 36 CEUs) must come from Curriculum A (core coding topics); maximum 33% (12 CEUs) from Curriculum B.",
                  "Free CEUs are accessible through AAPC Magazine quizzes (12 CEUs/yr) and quarterly member-only webinars (4 CEUs/yr).",
                  "Membership renewal dues (annual) and CEU reporting (biennial) are separate obligations—both are mandatory.",
                  "Failure to submit CEUs within 90 days after your renewal cycle leads to credential revocation. A $50 extension is available.",
                  "CEUs earned prior to passing your examination cannot be applied toward maintaining that credential.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <FaCheckCircle className="text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 1: What Are CEUs? */}
          <section id="what-are-ceus" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaGraduationCap className="text-teal-600" /> What Are CEUs in Medical Coding and Why Are They Important?
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                CEU stands for <strong>Continuing Education Unit</strong>. In medical coding, CEUs represent credits earned by certified professionals through eligible educational activities that help them maintain and update their professional knowledge.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Medical coding is a constantly evolving field. Changes in ICD-10-CM, CPT and HCPCS coding guidelines, healthcare regulations, documentation standards and compliance requirements make continuous learning important for medical coding professionals.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                For professionals holding AAPC credentials, CEUs are also part of the certification maintenance process. They demonstrate a commitment to keeping professional knowledge current beyond the initial certification examination.
              </p>
            </div>
          </section>

          {/* Section 2: Why Are CEUs Important? */}
          <section id="why-important" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaLightbulb className="text-teal-600" /> Why Are CEUs Important for Medical Coders?
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-teal-800 font-bold text-base">
                    <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">1</span>
                    Staying Updated with Coding Guidelines
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Medical coding guidelines, code sets and healthcare regulations are updated periodically. Continuing education helps professionals understand these changes and apply current coding practices when reviewing medical documentation and assigning codes.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-teal-800 font-bold text-base">
                    <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">2</span>
                    Maintaining AAPC Certification
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Earning and submitting the required CEUs within the applicable reporting period is an important part of maintaining AAPC credentials. Professionals must also keep their AAPC membership active by paying the required annual dues. Both responsibilities are important for maintaining certification status.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-teal-800 font-bold text-base">
                    <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">3</span>
                    Improving Knowledge & Skills
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    CEU programmes provide opportunities to learn about different coding specialties, medical documentation, auditing, compliance and industry developments. This ongoing learning helps professionals strengthen their existing knowledge and develop expertise in their areas of practice.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-teal-800 font-bold text-base">
                    <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">4</span>
                    Supporting Accuracy and Compliance
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Understanding current coding guidelines and documentation requirements helps medical coders make informed coding decisions. Continuing education also improves awareness of coding compliance standards and helps professionals recognise practices that may lead to errors or compliance concerns.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg">
                <p className="text-xs text-teal-900 leading-relaxed">
                  CEUs can be earned through eligible educational activities such as AAPC webinars, local chapter meetings, workshops, conferences, educational publications and other approved programmes. However, not every educational activity automatically qualifies for AAPC CEUs. Professionals should verify eligibility before claiming credits.
                </p>
              </div>

              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                <h4 className="font-bold text-amber-900 text-sm mb-1 flex items-center gap-2">
                  <FaExclamationTriangle className="text-amber-600" /> Remember:
                </h4>
                <p className="text-xs text-amber-900 leading-relaxed">
                  Earning CEUs and maintaining certification are ongoing responsibilities. Professionals should understand their reporting requirements, track their completed credits and submit them within the applicable deadlines to keep their credentials in good standing.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: What Happens After You Earn an AAPC Certification? */}
          <section id="after-certification" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaAward className="text-teal-600" /> What Happens After You Earn an AAPC Certification?
            </h2>

            <div className="mb-6">
              <img
                src={afterCertImg}
                alt="What Happens After You Earn an AAPC Certification"
                className="w-full rounded-xl shadow-md object-cover"
                onError={(e) => {
                  e.target.src = "/media/images/Blog/aapc-ceus/what-happens-after-certification.jpg";
                }}
              />
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-5">
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Passing an AAPC certification examination is an important milestone in a medical coding career. However, earning the credential is only the beginning of your professional journey. Once certified, you are responsible for meeting the requirements needed to maintain your certification.
              </p>
              <p className="text-sm font-semibold text-gray-900">
                Here is what every newly certified professional should understand:
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                    <FaCheckCircle className="text-teal-600" /> 1. Maintain Your AAPC Membership
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    AAPC membership must be renewed annually to keep your certification active. Membership renewal is separate from CEU submission, so paying your annual membership dues does not automatically fulfil your continuing education requirements.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                    <FaClock className="text-teal-600" /> 2. Understand Your CEU Requirements
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    AAPC-certified professionals must earn and submit the required Continuing Education Units within their applicable renewal cycle. For most members, CEUs are reported every two years. If you have recently earned your certification, your first CEU requirement may be prorated based on your membership renewal date. The exact requirement and due date should be checked in your AAPC account.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                    <FaBookMedical className="text-teal-600" /> 3. Start Earning CEUs After Certification
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    You do not have to wait until your renewal date to begin earning CEUs. You can start participating in eligible educational activities after receiving your certification and record the credits as you earn them.
                  </p>
                  <p className="text-xs text-red-600 font-semibold mt-1">
                    * One important point: CEUs earned before obtaining your certification will not be accepted towards maintaining that credential.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                    <FaFileAlt className="text-teal-600" /> 4. Track Your Learning and Keep Records
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Make it a habit to record your completed CEU activities and keep the relevant certificates or supporting documents. This makes it easier to review your progress and submit the required credits when your reporting period is due. AAPC provides a CEU Tracker through its member account, where eligible credits can be recorded and submitted.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                <p className="text-xs text-blue-950 leading-relaxed">
                  <strong>Remember:</strong> Certification maintenance is an ongoing responsibility. Understanding your membership renewal date, CEU requirements and reporting cycle from the beginning can help you avoid last-minute difficulties and keep your credential in good standing.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: AAPC CEU Requirements for Different Certifications */}
          <section id="ceu-requirements" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaClipboardCheck className="text-teal-600" /> AAPC CEU Requirements for Different Certifications
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-5">
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                The number of Continuing Education Units (CEUs) you need depends on your AAPC certification and membership status. Before planning your CEU activities, it is important to understand how many credits you must earn and when they must be submitted.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                For most AAPC credentials, CEUs are required within a <strong>two-year reporting period</strong>. However, the exact requirement can vary depending on the number and type of credentials you hold.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-4">
                How Many CEUs Are Required Based on Number of Certifications?
              </h3>
              <p className="text-xs text-gray-600">
                According to AAPC's current CEU policy, the required number of CEUs increases with the number of certifications you hold:
              </p>

              {/* CEU Table 1 */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="p-3 border border-gray-300 font-semibold">Number of AAPC Certifications Held</th>
                      <th className="p-3 border border-gray-300 font-semibold">CEUs Required Every Two Years</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ceuByCertCount.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-3 border border-gray-200 font-medium text-gray-800">{item.count}</td>
                        <td className="p-3 border border-gray-200 font-bold text-teal-700">{item.ceus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-600 italic">
                For example, a professional holding only the <strong>CPC</strong> credential generally needs 36 CEUs during the two-year renewal period. Someone holding both <strong>CPC and CIC</strong> needs 40 CEUs during the same period.
              </p>

              {/* Additional Requirements */}
              <h3 className="text-lg font-bold text-gray-900 pt-4 border-t border-gray-200">
                Additional CEU Requirements for Certain Credentials
              </h3>
              <p className="text-xs text-gray-600">
                Some AAPC credentials have additional subject-specific CEU requirements. These credits must relate to the relevant area of practice:
              </p>

              {/* CEU Table 2 */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                  <thead>
                    <tr className="bg-teal-800 text-white">
                      <th className="p-3 border border-gray-300 font-semibold">Certification</th>
                      <th className="p-3 border border-gray-300 font-semibold">CEUs Required for the Specific Credential</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specificCredentialRequirements.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-3 border border-gray-200 font-bold text-gray-800">{item.cert}</td>
                        <td className="p-3 border border-gray-200 text-gray-700">{item.req}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg">
                <p className="text-xs text-teal-900 leading-relaxed">
                  Therefore, it is important to check the requirements for each credential rather than relying only on the total CEU count. In addition to these requirements, professionals holding AAPC specialty credentials must also fulfil the applicable specialty-specific CEU requirements. AAPC requires <strong>8 specialty-specific CEUs</strong> for each specialty credential held. These credits must come from educational activities specifically pre-approved for the relevant specialty. Check the AAPC CEU policy to confirm which activities qualify.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Curriculum A & B */}
          <section id="curriculum-a-b" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaBookMedical className="text-teal-600" /> Understand Curriculum A and Curriculum B
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                AAPC divides approved educational content into two broad categories:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-2">
                <div className="p-5 bg-teal-50 border border-teal-200 rounded-xl">
                  <h3 className="font-bold text-teal-900 text-sm mb-2 flex items-center gap-2">
                    <FaCheckCircle className="text-teal-600" /> Curriculum A (Core Coding)
                  </h3>
                  <p className="text-xs text-teal-800 leading-relaxed">
                    Covers core technical knowledge related to medical coding and a professional's day-to-day coding responsibilities (ICD-10-CM, CPT, HCPCS, anatomy, medical terminology, compliance, and clinical documentation).
                  </p>
                  <div className="mt-3 bg-white p-2 rounded border border-teal-200 text-xs font-semibold text-teal-900 text-center">
                    Minimum 66% of Total CEUs (At least 24 of 36)
                  </div>
                </div>

                <div className="p-5 bg-indigo-50 border border-indigo-200 rounded-xl">
                  <h3 className="font-bold text-indigo-900 text-sm mb-2 flex items-center gap-2">
                    <FaLightbulb className="text-indigo-600" /> Curriculum B (Professional Growth)
                  </h3>
                  <p className="text-xs text-indigo-800 leading-relaxed">
                    Covers related subjects such as general business skills, professional development, communication, leadership, time management, and healthcare administration.
                  </p>
                  <div className="mt-3 bg-white p-2 rounded border border-indigo-200 text-xs font-semibold text-indigo-900 text-center">
                    Maximum 33% of Total CEUs (Up to 12 of 36)
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-gray-700 space-y-2">
                <p>
                  <strong>Example:</strong> If you hold one certification (such as CPC) and need 36 CEUs, at least <strong>24 must be from Curriculum A</strong>, while up to <strong>12 may come from Curriculum B</strong>.
                </p>
                <p>
                  <strong>Exception:</strong> AAPC does not enforce the Curriculum B limitation for the <strong>CPPM (Certified Physician Practice Manager)</strong> credential because the topics covered under Curriculum B are considered part of practice management responsibilities.
                </p>
              </div>

              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                <p className="text-xs text-amber-900 leading-relaxed">
                  <strong>Important:</strong> These are general requirements. Newly certified members may have prorated CEU requirements for their first renewal period. Always check your personal AAPC account for your exact CEU requirement, credential-specific conditions and submission deadline.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: How to Earn AAPC CEUs & 36 CEUs Step-by-Step */}
          <section id="how-to-earn" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaLaptopMedical className="text-teal-600" /> How to Earn AAPC CEUs
            </h2>

            <div className="mb-6">
              <img
                src={earnCeusImg}
                alt="How to Earn AAPC CEUs Step-by-Step"
                className="w-full rounded-xl shadow-md object-cover"
                onError={(e) => {
                  e.target.src = "/media/images/Blog/aapc-ceus/how-to-earn-ceus.jpg";
                }}
              />
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-5">
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Once you understand your CEU requirements, the next step is knowing where and how to earn those credits. AAPC-certified professionals can earn CEUs through various educational activities, including webinars, online courses, workshops, conferences and professional learning events. Some opportunities are free, while others require payment.
              </p>
              <p className="text-sm text-gray-700">
                However, not every educational activity qualifies for AAPC CEUs. Always check whether the activity is approved for CEU credit before participating.
              </p>

              <div className="border border-teal-200 rounded-xl p-5 bg-teal-50/50">
                <h3 className="text-lg font-bold text-teal-900 mb-3 flex items-center gap-2">
                  <FaCheckCircle className="text-teal-600" /> Blueprint: How to Earn 36 CEUs for One AAPC Certification (e.g. CPC)
                </h3>
                <p className="text-xs text-gray-700 mb-4 leading-relaxed">
                  AAPC members holding one certification generally need 36 CEUs within a two-year reporting period. Follow this practical breakdown to satisfy your requirements smoothly:
                </p>

                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-teal-100 flex items-start gap-3">
                    <span className="font-bold text-teal-600 text-sm">1</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs">Understand the 2-Year Cycle</h4>
                      <p className="text-xs text-gray-600">Earn 36 CEUs over two years to maintain one AAPC certification.</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-teal-100 flex items-start gap-3">
                    <span className="font-bold text-teal-600 text-sm">2</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs">Curriculum A – Minimum 24 CEUs</h4>
                      <p className="text-xs text-gray-600">At least 24 credits must come from core coding education (ICD-10-CM, CPT, HCPCS, coding guidelines, anatomy, medical terminology, and compliance).</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-teal-100 flex items-start gap-3">
                    <span className="font-bold text-teal-600 text-sm">3</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs">Curriculum B – Maximum 12 CEUs</h4>
                      <p className="text-xs text-gray-600">Up to 12 credits can come from approved courses covering communication, leadership, time management, and business management.</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-teal-100 flex items-start gap-3">
                    <span className="font-bold text-teal-600 text-sm">4</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs">Explore Free CEU Opportunities First</h4>
                      <p className="text-xs text-gray-600">AAPC Magazine quizzes, member-only webinars and local chapter meetings can easily deliver all or most of your required credits for free.</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-teal-100 flex items-start gap-3">
                    <span className="font-bold text-teal-600 text-sm">5</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs">Consider Paid Learning When Desired</h4>
                      <p className="text-xs text-gray-600">AAPC online courses, workshops and regional or national conferences provide specialized in-depth learning with high CEU values.</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-teal-100 flex items-start gap-3">
                    <span className="font-bold text-teal-600 text-sm">6</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs">Track & Submit Before Deadline</h4>
                      <p className="text-xs text-gray-600">Record completed activities in the AAPC CEU Tracker, collect certificates, and submit before your biennial deadline.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-white rounded border border-teal-300 text-center font-bold text-teal-800 text-xs">
                  Formula: 24 Curriculum A CEUs + 12 Curriculum B CEUs = 36 CEUs over 2 Years
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Free Ways to Earn AAPC CEUs */}
          <section id="free-options" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaAward className="text-teal-600" /> Free Ways to Earn AAPC CEUs
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-5">
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                You don't always need to spend money to maintain your AAPC certification. AAPC membership provides access to several free educational opportunities that can help professionals earn CEU credits.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                    <FaBookMedical className="text-teal-600" /> 1. AAPC the Magazine Quizzes
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    AAPC members can earn up to <strong>12 CEUs annually</strong> by completing the monthly "Test Yourself" quizzes available through <em>AAPC the Magazine</em>. Each eligible quiz provides <strong>1 CEU</strong> upon successful completion. Over a 2-year cycle, this alone can provide 24 CEUs!
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                    <FaVideo className="text-teal-600" /> 2. AAPC Member-Only Webinars
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    AAPC provides <strong>four free member-only webinars annually</strong>, offering at least <strong>4 CEUs per year</strong> (8 CEUs over a 2-year cycle). These webinars cover healthcare industry updates, coding practices and other professional topics.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                    <FaHandshake className="text-teal-600" /> 3. AAPC Local Chapter Meetings
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Local AAPC chapters organise educational meetings and networking events where members can learn from industry professionals and earn CEUs. Many of these chapter meetings are available <strong>free or at nominal cost</strong>.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                    <FaLaptopMedical className="text-teal-600" /> 4. CMS Web-Based Training
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    The Centers for Medicare & Medicaid Services (CMS) offers free online training courses on healthcare programmes, regulations and related topics through the Medicare Learning Network (MLN). Eligible activities may qualify for AAPC CEUs subject to documentation rules.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg text-xs text-amber-900">
                <strong>Note:</strong> CMS-sponsored education can count towards core Curriculum A CEUs, but cannot be used to fulfil specialty-specific CEU requirements.
              </div>
            </div>
          </section>

          {/* Section 8: Paid Ways to Earn AAPC CEUs */}
          <section id="paid-options" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaDollarSign className="text-teal-600" /> Paid Ways to Earn AAPC CEUs
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                For professionals who want structured learning opportunities or need specialized credits quickly, AAPC offers several paid educational options to earn CEU credits:
              </p>

              <div className="space-y-3">
                <div className="p-4 border border-slate-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">1. AAPC Online Courses</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    AAPC offers structured online courses covering medical coding, billing, auditing, compliance and specialty-specific topics. These courses allow professionals to improve their knowledge while earning pre-approved CEU credits.
                  </p>
                </div>

                <div className="p-4 border border-slate-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">2. Coding Workshops and Conferences</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Educational workshops and regional or national conferences (such as HEALTHCON) provide immersive opportunities to learn about code updates, regulatory shifts, and practical coding challenges while earning significant blocks of CEUs.
                  </p>
                </div>

                <div className="p-4 border border-slate-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">3. Specialty-Specific Training</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Professionals holding specialty credentials (like CPMA, CIRCC, CPCO, or CRC) can choose targeted training modules in inpatient coding, risk adjustment, auditing and documentation to meet their mandatory specialty CEU quotas.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-gray-50 border border-gray-200 rounded text-xs text-gray-600">
                <strong>Note:</strong> CEU credits, eligibility and fees vary by programme. Always verify the course details and AAPC approval information before enrolling.
              </div>
            </div>
          </section>

          {/* Section 9: How to Submit CEUs Through the AAPC CEU Tracker */}
          <section id="ceu-tracker" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaClipboardCheck className="text-teal-600" /> How to Submit CEUs Through the AAPC CEU Tracker
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-5">
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Earning CEUs is only one part of maintaining your AAPC certification. You must also record and submit the credits through your AAPC member account. The AAPC CEU Tracker helps members manage their continuing education activities, track completed credits and submit the required information.
              </p>

              <h3 className="text-lg font-bold text-gray-900">
                5 Steps to Submit CEUs Through the AAPC CEU Tracker
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 border border-gray-100 bg-gray-50 rounded-xl items-start">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Log in to Your AAPC Account</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Visit the official AAPC website (<a href="https://www.aapc.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">aapc.com</a>) and sign in using your member username and password.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-gray-100 bg-gray-50 rounded-xl items-start">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Open the CEU Tracker</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Navigate to the <strong>My AAPC &gt; CEU Tracker</strong> section in your member dashboard to view your current recorded credits, category splits, and reporting status.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-gray-100 bg-gray-50 rounded-xl items-start">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Add Your CEU Activity</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Select the option to add or submit a CEU activity. Enter the required information, including the <strong>CEU Index Number</strong>, date of completion, educational provider, and number of credits earned.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-gray-100 bg-gray-50 rounded-xl items-start">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Upload Supporting Documents</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      If requested (or for third-party approved courses), upload the relevant completion certificate. Ensure the document displays your name, date, provider details, and credit breakdown.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-gray-100 bg-gray-50 rounded-xl items-start">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Review Your CEU Records</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      After submission, review your tracker dashboard to confirm the activity has been recorded correctly. Keep physical or digital copies of your certificates in an organized folder.
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Walkthrough Box */}
              <div className="p-5 bg-gradient-to-r from-slate-900 to-teal-900 text-white rounded-xl shadow-md mt-6">
                <div className="flex items-center gap-3 mb-2">
                  <FaVideo className="text-teal-400 text-xl" />
                  <h3 className="font-bold text-base">Watch: How to Use the AAPC CEU Tracker</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  The following walkthrough illustrates how to access educational resources, locate eligible CEU opportunities, view completion certificates, and manage CEU records directly through your AAPC member account:
                </p>
                <div className="bg-black/40 rounded-lg p-6 border border-teal-500/30 text-center">
                  <FaLaptopMedical className="text-4xl text-teal-300 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-white">AAPC CEU Tracker Walkthrough Video & Tutorial</p>
                  <p className="text-xs text-gray-400 mt-1">Available via your AAPC Member Dashboard under "My AAPC &gt; CEU Tracker &gt; Video Tutorials"</p>
                </div>
              </div>

              {/* Important Submission Note */}
              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                <h4 className="font-bold text-amber-900 text-sm mb-1 flex items-center gap-2">
                  <FaExclamationTriangle className="text-amber-600" /> Important Distinction:
                </h4>
                <p className="text-xs text-amber-900 leading-relaxed">
                  <strong>Adding CEUs to your tracker and submitting them for review are two separate steps.</strong> You can record completed CEUs as soon as you earn them, but the official submission option generally becomes active <strong>one month before your due date</strong>. Make sure you complete the formal final submission before the deadline!
                </p>
              </div>
            </div>
          </section>

          {/* Section 10: What Happens If You Don't Complete Your AAPC CEU Requirements? */}
          <section id="missed-deadlines" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaExclamationTriangle className="text-red-500" /> What Happens If You Don't Complete Your AAPC CEU Requirements?
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-5">
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Maintaining an AAPC certification requires members to complete their CEU requirements and renew their membership on time. Missing these deadlines puts your hard-earned credentials at serious risk.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-red-50 border border-red-200 rounded-xl">
                  <h3 className="font-bold text-red-900 text-sm mb-2 flex items-center gap-2">
                    <FaTimesCircle className="text-red-600" /> Your Credential May Be Revoked
                  </h3>
                  <p className="text-xs text-red-800 leading-relaxed">
                    According to AAPC, if membership payment or arrangements are not made, or required CEUs are not submitted within <strong>90 days of the renewal date</strong>, the credential will be <strong>revoked</strong>. Once revoked, regaining the credential may require re-taking and passing the certification examination.
                  </p>
                </div>

                <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                  <h3 className="font-bold text-blue-900 text-sm mb-2 flex items-center gap-2">
                    <FaClock className="text-blue-600" /> Is a CEU Extension Available?
                  </h3>
                  <p className="text-xs text-blue-800 leading-relaxed">
                    <strong>Yes.</strong> AAPC offers a CEU extension option for members who need additional time to submit their credits. A <strong>$50 fee</strong> applies. Members can purchase this extension directly through their CEU Tracker before the 90-day grace period lapses.
                  </p>
                </div>
              </div>

              {/* How Can You Avoid These Issues? */}
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                  <FaCheckCircle className="text-teal-600" /> How Can You Avoid Credential Revocation?
                </h3>
                <ul className="text-xs text-gray-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">•</span> Check your CEU reporting deadline regularly in your AAPC account.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">•</span> Earn credits steadily throughout your two-year renewal period instead of waiting until the final weeks.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">•</span> Track completed credits in your CEU Tracker as soon as you finish each course or quiz.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">•</span> Keep copies of all certificates and documentation in a dedicated cloud or local folder.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">•</span> Review the exact requirements for each credential you hold (especially auditing, compliance, or specialty CEUs).
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg text-xs text-teal-900">
                <strong>Remember:</strong> Don't wait until your renewal deadline to check your CEU balance. Planning your continuing education in advance can help you maintain your AAPC certification without unnecessary stress.
              </div>
            </div>
          </section>

          {/* Section 11: Common AAPC CEU Mistakes */}
          <section id="common-mistakes" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaTimesCircle className="text-red-500" /> Common AAPC CEU Mistakes Medical Coders Should Avoid
            </h2>

            <div className="mb-6">
              <img
                src={mistakesImg}
                alt="Common AAPC CEU Mistakes Medical Coders Should Avoid"
                className="w-full rounded-xl shadow-md object-cover"
                onError={(e) => {
                  e.target.src = "/media/images/Blog/aapc-ceus/common-ceu-mistakes.jpg";
                }}
              />
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4">
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Even experienced medical coding professionals can make mistakes when earning, tracking or submitting CEUs. Understanding these common issues can help you maintain your AAPC certification without unnecessary complications.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                    <FaTimesCircle className="text-red-500" /> Waiting Until the Last Minute
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Delaying CEU activities until the renewal deadline can make it difficult to complete the required credits on time. Plan your learning activities throughout the reporting period instead of rushing at the end.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                    <FaTimesCircle className="text-red-500" /> Assuming Every Webinar Qualifies
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Not every medical coding webinar or educational session provides AAPC-approved CEU credits. Always verify the activity's eligibility before attending.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                    <FaTimesCircle className="text-red-500" /> Ignoring Curriculum A & B Splits
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Focusing only on the total number of CEUs can lead to an imbalance between Curriculum A and Curriculum B credits. Keep track of both categories to ensure you meet the 66% core technical requirement.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                    <FaTimesCircle className="text-red-500" /> Forgetting to Submit Earned CEUs
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Attending a webinar or completing a course does not necessarily mean the credits have been recorded in your AAPC account. Check whether the activity is automatically reported or requires manual submission.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                    <FaTimesCircle className="text-red-500" /> Losing CEU Certificates
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Certificates and supporting documents may be needed to verify completed educational activities during random audits. Save them in an organised digital folder.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                    <FaTimesCircle className="text-red-500" /> Overlooking Credential-Specific Rules
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Some AAPC credentials have additional subject-specific CEU requirements. Meeting the overall CEU total alone may not be sufficient if you have not fulfilled those additional requirements.
                  </p>
                </div>
              </div>

              <div className="p-4 border-2 border-red-200 bg-red-50/50 rounded-xl">
                <h3 className="font-bold text-red-900 text-sm mb-1 flex items-center gap-2">
                  <FaExclamationTriangle className="text-red-600" /> Confusing Membership Renewal with CEU Completion
                </h3>
                <p className="text-xs text-red-900 leading-relaxed">
                  Renewing your AAPC membership and completing your CEU requirements are separate responsibilities. Make sure you keep track of both. Paying annual membership dues does NOT satisfy your CEUs, and vice versa!
                </p>
              </div>

              <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg">
                <h4 className="font-bold text-teal-900 text-sm mb-1 flex items-center gap-2">
                  <FaLightbulb className="text-teal-600" /> Practical Tip:
                </h4>
                <p className="text-xs text-teal-900 leading-relaxed">
                  Review your CEU Tracker periodically rather than checking it only when your renewal date approaches. A simple record of completed activities, credit categories and certificates can help you stay organised and worry-free.
                </p>
              </div>
            </div>
          </section>

          {/* Section 12: Frequently Asked Questions */}
          <section id="faqs" className="max-w-4xl mx-auto py-6">
            <h2
              style={{ color: "#1d4971" }}
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3"
            >
              <FaClipboardCheck className="text-teal-600" /> Frequently Asked Questions
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

          {/* Section 13: Maintaining Your AAPC Credentials Through Continuous Learning */}
          <section id="maintain-credentials" className="max-w-4xl mx-auto py-6">
            <div className="mb-6">
              <img
                src={maintainImg}
                alt="Maintaining Your AAPC Credentials Through Continuous Learning"
                className="w-full rounded-xl shadow-md object-cover"
                onError={(e) => {
                  e.target.src = "/media/images/Blog/aapc-ceus/maintaining-aapc-credentials.jpg";
                }}
              />
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-4 mb-8">
              <h2
                style={{ color: "#1d4971" }}
                className="text-2xl font-bold mb-3 flex items-center gap-2"
              >
                <FaGraduationCap className="text-teal-600" /> Maintaining Your AAPC Credentials Through Continuous Learning
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
              <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-r-lg font-semibold text-teal-900 text-sm text-center">
                Keep learning, stay updated and take responsibility for maintaining your AAPC credentials.
              </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-gradient-to-br from-slate-800 to-teal-900 text-white p-8 rounded-2xl shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-3">
                Advance Your Medical Coding Career with ThoughtFlows
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
                Whether you are preparing for your CPC, CIC, CPMA, or specialty certifications, ThoughtFlows Medical Coding Academy provides industry-leading coaching, practical chart audits, and career guidance. Connect with our academic advisors today!
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
                  Contact ThoughtFlows Academy
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-1/4 bg-white p-4 md:p-6">
          <div className="sticky" style={{ top: "80px" }}>
            {/* Table of Contents */}
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
              <h3 className="font-bold text-sm mb-2">Need Help with Certification?</h3>
              <p className="text-xs text-gray-300 mb-4">
                Ask our trainers about CPC, CIC, CPMA prep, exam tips, and CEU guidance.
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

            {/* Quick Summary Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                <FaAward className="text-teal-600" /> CEU Summary at a Glance
              </h3>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex justify-between border-b pb-1">
                  <span>1 Credential:</span>
                  <span className="font-bold text-teal-700">36 CEUs / 2 yrs</span>
                </li>
                <li className="flex justify-between border-b pb-1">
                  <span>Curriculum A:</span>
                  <span className="font-bold text-teal-700">Min 66% (24 CEUs)</span>
                </li>
                <li className="flex justify-between border-b pb-1">
                  <span>Curriculum B:</span>
                  <span className="font-bold text-teal-700">Max 33% (12 CEUs)</span>
                </li>
                <li className="flex justify-between border-b pb-1">
                  <span>Magazine Quizzes:</span>
                  <span className="font-bold text-green-700">Up to 12 CEUs/yr (Free)</span>
                </li>
                <li className="flex justify-between border-b pb-1">
                  <span>AAPC Webinars:</span>
                  <span className="font-bold text-green-700">4 CEUs/yr (Free)</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span>Grace Period:</span>
                  <span className="font-bold text-red-600">90 Days ($50 Ext)</span>
                </li>
              </ul>
              <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                Always verify your exact requirements in your personal AAPC CEU Tracker.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
