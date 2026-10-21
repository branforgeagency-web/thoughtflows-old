import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import heroBanner from "../images/Blog/fy-2027-icd-10/hero-banner.jpg";
import keyChangesImg from "../images/Blog/fy-2027-icd-10/key-changes.jpg";
import guidelineChangesImg from "../images/Blog/fy-2027-icd-10/guideline-changes.jpg";
import codingMistakesImg from "../images/Blog/fy-2027-icd-10/coding-mistakes.jpg";
import howToPrepareImg from "../images/Blog/fy-2027-icd-10/how-to-prepare.jpg";
import thoughtflowsCtaImg from "../images/Blog/fy-2027-icd-10/thoughtflows-cta.jpg";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUserEdit,
  FaCheckCircle,
  FaLightbulb,
  FaBookMedical,
  FaExclamationTriangle,
  FaFileMedicalAlt,
  FaGraduationCap,
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaHeartbeat,
  FaDna,
  FaPills,
  FaClipboardCheck,
  FaTimesCircle,
} from "react-icons/fa";

export default function Blog11() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const canonicalUrl = "https://thoughtflows.in/fy-2027-icd-10-cm-updates/";

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "FY 2027 ICD-10-CM Updates: What Medical Coders Need to Know",
        "description": "Learn about FY 2027 ICD-10-CM updates, including new and deleted codes, key guideline changes, and what medical coders need to know to code accurately.",
        "datePublished": "2026-10-21",
        "dateModified": "2026-10-21",
        "author": {
          "@type": "Person",
          "name": "ThoughtFlows Team",
          "jobTitle": "Medical Coding Experts"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ThoughtFlows Medical Coding Academy",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.thoughtflows.in/logo.svg"
          }
        },
        "mainEntityOfPage": canonicalUrl
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When did the FY 2027 ICD-10-CM codes become effective?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The FY 2027 code set became effective on October 1, 2026, and applies through September 30, 2027."
            }
          },
          {
            "@type": "Question",
            "name": "How many new ICD-10-CM codes were added for FY 2027?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ACDIS reports 190 new codes, 30 deleted codes, and 4 revised code titles. AAPC reports 238 new entries, 21 deleted entries, and 4 revised entries, a count that includes non-billable header entries. Use the official CMS and CDC/NCHS files as the primary reference."
            }
          },
          {
            "@type": "Question",
            "name": "What are the main FY 2027 guideline changes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The key updates address hypertension with heart disease, hypertensive crisis, genetic disorders, and diethylstilbestrol (DES) exposure."
            }
          },
          {
            "@type": "Question",
            "name": "Are Z84.A and Z91.B new FY 2027 codes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not as FY 2027 additions. Z84.A was added in the April 1, 2026 update. What FY 2027 adds is guideline instruction on how to apply the DES-related Z codes, including the difference between family history of exposure and personal risk factor."
            }
          },
          {
            "@type": "Question",
            "name": "Do medical coders need to memorize every new FY 2027 code?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Understand the overall update and prioritize the new, revised, and deleted codes relevant to your specialty and daily responsibilities."
            }
          },
          {
            "@type": "Question",
            "name": "Where can coders verify FY 2027 ICD-10-CM changes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the official CMS and CDC/NCHS FY 2027 files, Addendum, code tables, and Official Guidelines."
            }
          }
        ]
      }
    ]
  };

  const topics = [
    { id: "intro", title: "Introduction" },
    { id: "what-changed", title: "What Changed in FY 2027" },
    { id: "major-code-changes", title: "Major Code Changes" },
    { id: "code-structure", title: "Watch Code Structure" },
    { id: "deleted-codes", title: "Deleted Codes" },
    { id: "date-of-service", title: "Why Date of Service Matters" },
    { id: "guideline-changes", title: "Important Guideline Changes" },
    { id: "other-notable-additions", title: "Other Notable Additions" },
    { id: "coding-mistakes", title: "Common Mistakes to Avoid" },
    { id: "how-to-prepare", title: "How Coders Can Prepare" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "final-takeaway", title: "Final Takeaway & Skills" },
  ];

  const codeChangesData = [
    {
      code: "C78.31",
      desc: "Secondary malignant neoplasm of larynx",
      why: "Adds site-specific metastatic cancer coding",
    },
    {
      code: "C78.32",
      desc: "Secondary malignant neoplasm of pharynx",
      why: "Adds greater specificity for the metastatic site",
    },
    {
      code: "C79.83",
      desc: "Secondary malignant neoplasm of oral cavity",
      why: "Provides a specific code for this metastatic site",
    },
    {
      code: "J34.830",
      desc: "Odontogenic sinusitis, maxillary sinus",
      why: "Adds site-specific sinusitis coding",
    },
    {
      code: "K6A.01",
      desc: "Prevesical abscess",
      why: "Provides a specific code under the new pelvic disease category",
    },
    {
      code: "M67.A01",
      desc: "Plantar fasciitis, right foot",
      why: "Adds laterality-specific coding",
    },
    {
      code: "Z68.18",
      desc: "Body mass index [BMI] 18.4 or less, adult",
      why: "Adds specificity at the low end of adult BMI reporting",
    },
    {
      code: "QA1.792",
      desc: "Li-Fraumeni syndrome",
      why: "Adds specificity for a genetic disorder associated with neoplasms",
    },
  ];

  const faqData = [
    {
      id: 1,
      ques: "1. When did the FY 2027 ICD-10-CM codes become effective?",
      ans: "The FY 2027 code set became effective on October 1, 2026, and applies through September 30, 2027.",
    },
    {
      id: 2,
      ques: "2. How many new ICD-10-CM codes were added for FY 2027?",
      ans: (
        <>
          ACDIS reports 190 new codes, 30 deleted codes, and 4 revised code titles.
          AAPC reports 238 new entries, 21 deleted entries, and 4 revised
          entries, a count that includes non-billable header entries. Use the
          official CMS and CDC/NCHS files as the primary reference.
        </>
      ),
    },
    {
      id: 3,
      ques: "3. What are the main FY 2027 guideline changes?",
      ans: "The key updates address hypertension with heart disease, hypertensive crisis, genetic disorders, and diethylstilbestrol (DES) exposure.",
    },
    {
      id: 4,
      ques: "4. Are Z84.A and Z91.B new FY 2027 codes?",
      ans: "Not as FY 2027 additions. Z84.A was added in the April 1, 2026 update. What FY 2027 adds is guideline instruction on how to apply the DES-related Z codes, including the difference between family history of exposure and personal risk factor.",
    },
    {
      id: 5,
      ques: "5. Do medical coders need to memorize every new FY 2027 code?",
      ans: "No. Understand the overall update and prioritize the new, revised, and deleted codes relevant to your specialty and daily responsibilities.",
    },
    {
      id: 6,
      ques: "6. Where can coders verify FY 2027 ICD-10-CM changes?",
      ans: (
        <>
          Use the official{" "}
          <a
            href="https://www.cms.gov/medicare/coding-billing/icd-10-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 font-semibold hover:underline"
          >
            CMS
          </a>{" "}
          and{" "}
          <a
            href="https://www.cdc.gov/nchs/icd/icd-10-cm/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 font-semibold hover:underline"
          >
            CDC/NCHS
          </a>{" "}
          FY 2027 files, Addendum, code tables, and Official Guidelines.
        </>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>FY 2027 ICD-10-CM Updates: What Medical Coders Need to Know</title>
        <meta
          name="description"
          content="Learn about FY 2027 ICD-10-CM updates, including new and deleted codes, key guideline changes, and what medical coders need to know to code accurately."
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
          justifyContent: "space-around",
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
          FY 2027 ICD-10-CM Updates: What Medical Coders Need to Know
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 text-gray-300 text-sm pb-4 px-4">
          <span className="flex items-center gap-1">
            <FaUserEdit className="text-teal-400" /> ThoughtFlows Editorial Team
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-teal-400" /> Effective: Oct 1, 2026 – Sep 30, 2027
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
        <div style={{ width: "45%", marginTop: "90px", marginLeft: "80px", marginBottom: "40px" }}>
          <h1
            style={{
              color: "white",
              fontSize: "32px",
              fontWeight: "bold",
              lineHeight: "1.35",
            }}
          >
            FY 2027 ICD-10-CM Updates: What Medical Coders Need to Know
          </h1>
          <div className="flex items-center gap-6 text-gray-300 text-sm mt-4">
            <span className="flex items-center gap-2">
              <FaUserEdit className="text-teal-400" /> ThoughtFlows Editorial Team | Medical Coding Academy
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-teal-400" /> Effective: Oct 1, 2026 – Sep 30, 2027
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
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#333", lineHeight: "1.6" }}>
            The FY 2027 ICD-10-CM code set is now in effect, bringing new diagnosis codes, deleted codes, revised entries, and targeted guideline changes that medical coders need to understand.
          </p>
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#333", lineHeight: "1.6", marginTop: "10px" }}>
            Understanding what changed, when a code should be reported, and how guidelines affect sequencing is vital to maintaining coding compliance and claim accuracy across all healthcare facilities.
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Left Container - Main Article */}
        <div className="w-full lg:w-3/4 bg-gray-100 p-4 md:p-8">
          
          {/* Main Hero Image Banner */}
          <div className="max-w-4xl mx-auto mb-8">
            <img
              src={heroBanner}
              alt="FY 2027 ICD-10-CM Updates: What Medical Coders Need to Know"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Intro Text for Mobile */}
          <div className="lg:hidden max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm mb-8">
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              The FY 2027 ICD-10-CM code set is now in effect, bringing new diagnosis codes, deleted codes, revised entries, and targeted guideline changes that medical coders need to understand.
            </p>
            <p className="text-gray-700 text-base leading-relaxed font-semibold italic text-teal-800">
              Understanding what changed, when a code should be reported, and how guidelines affect sequencing is vital to maintaining coding compliance and claim accuracy.
            </p>
          </div>

          {/* Section: Intro Overview */}
          <section id="intro" className="max-w-4xl mx-auto py-4">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm mb-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                The FY 2027 ICD-10-CM code set is now in effect, bringing new diagnosis codes, deleted codes, revised entries, and targeted guideline changes that medical coders need to understand.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                The code set applies to healthcare services from <strong>October 1, 2026, through September 30, 2027</strong>. The update affects diagnosis coding across hospitals, physician practices, outpatient facilities, and other healthcare settings.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                For medical coders, the annual update is not simply about memorizing new code numbers. The more important task is understanding what changed, when a code should be reported, and how the updated guidelines affect code selection and sequencing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify font-semibold text-teal-900">
                This article highlights important FY 2027 updates and what coders should review when working with the new code set.
              </p>
            </div>
          </section>

          {/* Section: What Changed in FY 2027 ICD-10-CM? */}
          <section id="what-changed" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <FaBookMedical className="text-teal-600" /> What Changed in FY 2027 ICD-10-CM?
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm mb-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                The FY 2027 update includes <strong>190 new codes</strong>, <strong>30 deleted codes</strong>, and <strong>4 revised code titles</strong>, according to{" "}
                <a
                  href="https://acdis.org/node/70401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 font-semibold underline hover:text-teal-900 inline-flex items-center gap-1"
                >
                  ACDIS’s summary of the official release <FaExternalLinkAlt className="text-xs" />
                </a>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                You may also see a different figure from AAPC, which reports <strong>238 new entries</strong>, <strong>21 deleted entries</strong>, and <strong>4 revised entries</strong>. The difference comes from counting methods. The 238 figure includes 48 non-billable category headers alongside the 190 billable codes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                For coders, the headline number matters less than the source files. Use the official{" "}
                <a
                  href="https://www.cms.gov/medicare/coding-billing/icd-10-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 font-semibold underline hover:text-teal-900 inline-flex items-center gap-1"
                >
                  CMS <FaExternalLinkAlt className="text-xs" />
                </a>{" "}
                and{" "}
                <a
                  href="https://www.cdc.gov/nchs/icd/icd-10-cm/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 font-semibold underline hover:text-teal-900 inline-flex items-center gap-1"
                >
                  CDC/NCHS <FaExternalLinkAlt className="text-xs" />
                </a>{" "}
                FY 2027 files, including the Addendum, Tabular List, Alphabetic Index, and Official Guidelines, to determine which codes are valid and reportable.
              </p>
            </div>

            {/* In-content Banner 1: Key Changes */}
            <div className="my-8">
              <img
                src={keyChangesImg}
                alt="FY 2027 ICD-10-CM Key Changes - 190 New Codes, 30 Deleted Codes, 4 Revised Code Titles"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>
          </section>

          {/* Section: Major FY 2027 ICD-10-CM Code Changes */}
          <section id="major-code-changes" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <FaFileMedicalAlt className="text-teal-600" /> Major FY 2027 ICD-10-CM Code Changes
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm mb-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Several new codes provide greater specificity for documented conditions across oncology, ENT, abdominal conditions, orthopedics, and genetics:
              </p>

              {/* Responsive Code Table */}
              <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200 mb-6">
                <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
                  <thead className="bg-slate-800 text-white">
                    <tr>
                      <th scope="col" className="px-5 py-3 font-semibold text-sm">
                        Code
                      </th>
                      <th scope="col" className="px-5 py-3 font-semibold text-sm">
                        FY 2027 Description
                      </th>
                      <th scope="col" className="px-5 py-3 font-semibold text-sm">
                        Why It Matters
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {codeChangesData.map((item, idx) => (
                      <tr
                        key={item.code}
                        className={idx % 2 === 0 ? "bg-white" : "bg-slate-50 hover:bg-slate-100 transition-colors"}
                      >
                        <td className="px-5 py-4 whitespace-nowrap font-mono font-bold text-teal-800 text-base">
                          {item.code}
                        </td>
                        <td className="px-5 py-4 text-gray-800 font-medium">
                          {item.desc}
                        </td>
                        <td className="px-5 py-4 text-gray-600">
                          {item.why}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed text-justify font-medium">
                These examples show how the update provides more detailed coding options in several clinical areas. Coders should still verify the documentation and the full Tabular List entry before assigning any code.
              </p>
            </div>
          </section>

          {/* Section: Watch the Code Structure */}
          <section id="code-structure" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <FaExclamationTriangle className="text-amber-500" /> Watch the Code Structure
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm mb-6">
              <p className="text-lg text-gray-800 leading-relaxed text-justify mb-4">
                Some entries are categories or headers rather than final reportable codes.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed text-justify mb-4">
                For example, <strong>K6A.0</strong> is the category for pelvic abscess. The reportable codes beneath it are:
              </p>
              <ul className="space-y-2 text-gray-800 text-base ml-4 mb-4">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                  <span><strong>K6A.01:</strong> Prevesical abscess</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                  <span><strong>K6A.09:</strong> Other pelvic abscess</span>
                </li>
              </ul>
              <p className="text-lg text-gray-800 leading-relaxed text-justify font-semibold">
                Review the complete code structure and Tabular List before assigning the final code.
              </p>
            </div>
          </section>

          {/* Section: Deleted Codes */}
          <section id="deleted-codes" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <FaTimesCircle className="text-red-500" /> Deleted Codes: The S23.420- Series
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm mb-6 border-l-4 border-red-500">
              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                FY 2027 also deletes codes from the previous code set. One example is the <strong>S23.420-</strong> series, which represented sprain of the sternoclavicular (joint) (ligament). The deleted codes include:
              </p>
              <ul className="space-y-2 text-gray-700 text-base ml-4 mb-4">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                  <span><strong>S23.420A:</strong> Initial encounter</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                  <span><strong>S23.420D:</strong> Subsequent encounter</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                  <span><strong>S23.420S:</strong> Sequela</span>
                </li>
              </ul>
              <p className="text-lg text-red-700 font-semibold leading-relaxed text-justify">
                The S23.420- series is no longer valid for FY 2027 dates of service.
              </p>
            </div>
          </section>

          {/* Section: Why Date of Service Matters */}
          <section id="date-of-service" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <FaCalendarAlt className="text-teal-600" /> Why Date of Service Matters
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm mb-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                Always use the ICD-10-CM code set that applies to the date of service. A code that was valid through September 30, 2026, should not be carried forward to services provided on or after October 1, 2026.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                When coding older services, corrected claims, or historical records, use the code set that applied on the original date of service. Reviewing a chart after October 1 does not change which code year applies.
              </p>
            </div>
          </section>

          {/* Section: Important FY 2027 Guideline Changes */}
          <section id="guideline-changes" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <FaClipboardCheck className="text-teal-600" /> Important FY 2027 Guideline Changes
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm mb-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                The FY 2027 Official Guidelines contain a focused set of changes. The updates involve hypertension with heart disease, hypertensive crisis, genetic disorders, and diethylstilbestrol (DES) exposure. You can read the full document in the{" "}
                <a
                  href="https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Publications/ICD10CM/2027/ICD-10-CM-October-1-2026-FY27-Guidelines.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 font-semibold underline hover:text-teal-900 inline-flex items-center gap-1"
                >
                  FY 2027 Official Guidelines (PDF) <FaExternalLinkAlt className="text-xs" />
                </a>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Other sections, including sepsis and cancer treatment, remain important to know well, so always work from the current guideline text rather than memory.
              </p>
            </div>

            {/* In-content Banner 2: Guideline Changes */}
            <div className="my-8">
              <img
                src={guidelineChangesImg}
                alt="FY 2027 Guideline Changes: 4 Key Areas Medical Coders Should Review"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>

            {/* 4 Guideline Subsections */}
            <div className="space-y-6">
              {/* Subsection 1: Hypertension With Heart Disease */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border-t-4 border-blue-600">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FaHeartbeat className="text-blue-600" /> 1. Hypertension With Heart Disease
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                  The FY 2027 guidelines revise the wording for hypertensive heart disease to refer to <em>hypertension with one or more heart conditions</em>. This clarifies that category <strong>I11</strong> applies when hypertension is documented with any one or more of the qualifying heart conditions, not only a single one.
                </p>
                <div className="bg-blue-50 p-5 rounded-lg mb-4">
                  <p className="text-base text-gray-800 font-semibold mb-2">
                    Hypertension with heart conditions classified to the following is assigned to category I11, Hypertensive heart disease:
                  </p>
                  <ul className="space-y-1 text-gray-700 ml-4 font-mono text-sm">
                    <li>• <strong>I50.-:</strong> Heart failure</li>
                    <li>• <strong>I51.4:</strong> Myocarditis, unspecified</li>
                    <li>• <strong>I51.89:</strong> Other ill-defined heart diseases</li>
                    <li>• <strong>I51.9:</strong> Heart disease, unspecified</li>
                  </ul>
                  <p className="text-sm text-gray-700 mt-3 font-sans">
                    Use additional code(s) from category I50 or I51 to identify the heart condition.
                  </p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                  Hypertension with <strong>I51.5</strong> (Myocardial degeneration) or <strong>I51.7</strong> (Cardiomegaly) is also assigned to category I11.
                </p>
                <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                  <p className="text-base text-gray-800 leading-relaxed text-justify font-medium">
                    <strong>Important Exception:</strong> These same heart conditions (I50.-, I51.4-I51.7, I51.89, I51.9) are coded separately if the provider has documented that they are unrelated to the hypertension. Without that documentation, the classification presumes a relationship between the two.
                  </p>
                </div>
              </div>

              {/* Subsection 2: Hypertensive Crisis */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border-t-4 border-teal-600">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FaHeartbeat className="text-teal-600" /> 2. Hypertensive Crisis
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                  The guideline for hypertensive crisis has also been expanded. For documented hypertensive urgency, hypertensive emergency, or unspecified hypertensive crisis, assign a code from category <strong>I16, Hypertensive crisis</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                  Also code any identified hypertensive disease. The guideline now specifically includes <strong>I1A.-, Other hypertension</strong>, alongside categories I10 through I15. Sequencing depends on the reason for the encounter.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify font-semibold text-teal-900">
                  This matters when another form of hypertension, such as resistant hypertension, is documented together with a hypertensive crisis.
                </p>
              </div>

              {/* Subsection 3: Genetic Disorders */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border-t-4 border-indigo-600">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FaDna className="text-indigo-600" /> 3. Genetic Disorders
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                  The Chapter 17 title has been expanded to:
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg mb-4 text-center font-bold text-indigo-950 text-base md:text-lg">
                  “Congenital malformations, deformations, chromosomal abnormalities, and genetic disorders (Q00-QA1)”
                </div>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                  The guidelines direct coders to assign codes from <strong>Q00-QA1</strong> when a congenital malformation, deformation, chromosomal abnormality, or genetic disorder is documented. The new <strong>QA1.-</strong> range covers genetic disorders associated with neoplasms not elsewhere classified, for example <strong>QA1.792, Li-Fraumeni syndrome</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify font-semibold text-indigo-900">
                  This is particularly relevant to oncology, genetics, and hereditary-condition coding.
                </p>
              </div>

              {/* Subsection 4: Diethylstilbestrol (DES) Exposure */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border-t-4 border-purple-600">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FaPills className="text-purple-600" /> 4. Diethylstilbestrol (DES) Exposure
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                  The FY 2027 guidelines add instruction for two Z codes related to DES exposure:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="font-mono font-bold text-purple-900 text-base mb-1">Z84.A</p>
                    <p className="font-semibold text-gray-800 text-sm mb-2">
                      Family history of exposure to diethylstilbestrol
                    </p>
                    <p className="text-sm text-gray-700">
                      Used when a family member’s DES exposure may place the patient at increased risk, such as when the patient’s maternal grandmother was exposed (third-generation exposure).
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="font-mono font-bold text-purple-900 text-base mb-1">Z91.B</p>
                    <p className="font-semibold text-gray-800 text-sm mb-2">
                      Personal risk factor of exposure to diethylstilbestrol
                    </p>
                    <p className="text-sm text-gray-700">
                      Used when the patient was directly exposed in utero, for example because the patient’s mother took DES during pregnancy.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-3">
                  The distinction coders need to make is whether the patient was <em>directly exposed</em> or has a <em>family history of exposure</em>.
                </p>
                <p className="text-base text-gray-600 leading-relaxed text-justify italic">
                  Note: These are not two brand-new FY 2027 codes to memorize. Z84.A, for example, was added in the April 1, 2026 update, and the FY 2027 guidelines add instruction on applying it.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Other Notable FY 2027 Code Additions */}
          <section id="other-notable-additions" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <FaLightbulb className="text-teal-600" /> Other Notable FY 2027 Code Additions
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm mb-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                The update contains many additional changes beyond the examples above. For instance, <strong>33 new codes</strong> cover continuing pregnancy after vanishing twin syndrome, and <strong>17 new codes</strong> cover the toxic effect of cycloparaffins (
                <a
                  href="https://acdis.org/node/70401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 font-semibold underline hover:text-teal-900 inline-flex items-center gap-1"
                >
                  ACDIS <FaExternalLinkAlt className="text-xs" />
                </a>).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                Other areas receiving new codes include:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                {[
                  "Cardiomyopathy",
                  "Ectopic pregnancy",
                  "Osteomyelitis",
                  "Odontogenic sinusitis",
                  "Plantar fasciitis",
                  "Body Mass Index [BMI]",
                  "Genetic disorders",
                  "Gender-transition history",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg text-gray-800 text-sm font-medium">
                    <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-justify font-medium">
                This is why coders should review the complete annual update for their specialty rather than only the most widely discussed changes.
              </p>
            </div>
          </section>

          {/* Section: Common FY 2027 Coding Mistakes to Avoid */}
          <section id="coding-mistakes" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <FaExclamationTriangle className="text-amber-500" /> Common FY 2027 Coding Mistakes to Avoid
            </h2>
            
            {/* In-content Banner 3: Mistakes */}
            <div className="mb-6">
              <img
                src={codingMistakesImg}
                alt="FY 2027 Coding Mistakes to Avoid - Verify Before You Code"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  1. Using an outdated code
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  A code valid in FY 2026 may have been deleted, revised, or restructured for FY 2027. Always verify the code against the date of service.
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  2. Reporting a category instead of a complete code
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  A category or header may not be the final reportable code. For example, do not report <strong>K6A.0</strong> when a more specific code such as <strong>K6A.01</strong> applies.
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  3. Ignoring laterality or required characters
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Some codes require additional specificity, such as right or left, or a 7th character. Confirm that the provider documentation supports the required level of detail.
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  4. Choosing a code without checking the Tabular List
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify mb-3">
                  The Alphabetic Index is only the starting point. Confirm the final selection in the Tabular List and review:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 ml-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500"></span> Inclusion terms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500"></span> Excludes notes (Excludes1 and Excludes2)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500"></span> Code first and Use additional code instructions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500"></span> Code also instructions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500"></span> Required characters
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500"></span> Other applicable notes
                  </li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  5. Relying on previous-year guidelines
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  A familiar diagnosis does not always mean the coding rules are unchanged. Review the FY 2027 Official Guidelines, particularly the sections affected by revisions.
                </p>
              </div>
            </div>
          </section>

          {/* Section: How Medical Coders Can Prepare for FY 2027 */}
          <section id="how-to-prepare" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <FaGraduationCap className="text-teal-600" /> How Medical Coders Can Prepare for FY 2027
            </h2>

            {/* In-content Banner 4: How to Prepare */}
            <div className="mb-6">
              <img
                src={howToPrepareImg}
                alt="FY 2027 ICD-10-CM Updates: Review, Verify, Practice, Apply"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm mb-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                Divide the annual update into three clear action areas:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="p-5 bg-teal-50 rounded-xl border border-teal-100">
                  <h4 className="font-bold text-teal-900 text-lg mb-2">1. New Codes</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Identify the additions relevant to your specialty and daily coding work.
                  </p>
                </div>
                <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 text-lg mb-2">2. Guideline Changes</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Review changes that affect code selection, sequencing, and documentation interpretation.
                  </p>
                </div>
                <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-100">
                  <h4 className="font-bold text-indigo-900 text-lg mb-2">3. Deleted / Revised</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Check frequently used codes and update coding references, cheat sheets, templates, and internal resources.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border-l-4 border-slate-700">
                <p className="text-lg text-gray-800 leading-relaxed text-justify font-medium">
                  <strong>Most importantly:</strong> Apply the changes to real or sample clinical documentation. Understanding how a rule affects an actual medical record is far more useful than memorizing a list of code numbers.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Frequently Asked Questions */}
          <section id="faq" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 font-semibold text-lg text-gray-800 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span>{item.ques}</span>
                    {openFaq === index ? (
                      <FaChevronUp className="text-teal-600 flex-shrink-0 ml-2" />
                    ) : (
                      <FaChevronDown className="text-gray-400 flex-shrink-0 ml-2" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="p-5 pt-0 text-gray-700 text-base leading-relaxed border-t border-gray-100 bg-gray-50">
                      {item.ans}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section: Final Takeaway & ThoughtFlows CTA */}
          <section id="final-takeaway" className="max-w-4xl mx-auto py-6">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-200">
              <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-4">
                Final Takeaway
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                The FY 2027 ICD-10-CM update is more than a list of new diagnosis codes. It includes new and deleted codes, greater clinical specificity, and targeted guideline changes that can affect everyday coding decisions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                Pay particular attention to hypertension with heart disease, hypertensive crisis, genetic disorders, DES exposure, newly expanded diagnosis categories, and deleted code series.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                The best approach is to review the new codes, check deleted codes against the date of service, understand the guideline changes, verify the Tabular List, and apply the updates to real clinical documentation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify font-medium mb-6">
                Staying current with ICD-10-CM updates helps coders maintain accuracy, reduce avoidable errors, and support compliant reporting throughout FY 2027.
              </p>

              {/* ThoughtFlows Academy Callout */}
              <div className="bg-teal-900 text-white p-6 md:p-8 rounded-xl text-center shadow-md">
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-amber-300 mb-3">
                  Build Your Medical Coding Skills With ThoughtFlows
                </h3>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto mb-6">
                  Understanding ICD-10-CM updates is an important part of becoming a confident medical coder. To build practical coding knowledge and prepare for industry-recognized certification, explore the medical coding training and certification programs at ThoughtFlows Medical Coding Academy.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/cpc"
                    className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors shadow-sm"
                  >
                    Explore CPC Training
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-block bg-teal-700 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-lg transition-colors border border-teal-500 shadow-sm"
                  >
                    Contact ThoughtFlows Academy
                  </Link>
                </div>
              </div>

              {/* Bottom CTA Banner Image */}
              <div className="mt-8">
                <Link to="/cpc">
                  <img
                    src={thoughtflowsCtaImg}
                    alt="FY 2027 ICD-10-CM Updates - Stay Updated on Coding Changes With ThoughtFlows Medical Coding Training & Certification Programs"
                    className="w-full rounded-xl shadow-md object-cover hover:opacity-95 transition-opacity"
                  />
                </Link>
              </div>
            </div>
          </section>

        </div>

        {/* Right Sidebar - Sticky Topics Navigation */}
        <div className="w-full lg:w-1/4 bg-white p-6 border-l border-gray-200">
          <div className="sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-gray-900 border-b pb-2 flex items-center gap-2">
              <FaLightbulb className="text-teal-600" /> Table of Contents
            </h3>
            <ul className="space-y-2 text-sm">
              {topics.map((topic) => (
                <li key={topic.id}>
                  <a
                    href={`#${topic.id}`}
                    className="text-gray-600 hover:text-teal-600 hover:font-semibold transition-colors block py-1"
                  >
                    {topic.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-900 mb-2">Master Medical Coding</h4>
              <p className="text-xs text-gray-600 mb-4">
                Learn ICD-10-CM, CPT, and HCPCS coding from industry experts at ThoughtFlows Medical Coding Academy.
              </p>
              <Link
                to="/cpc"
                className="block text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs py-2 px-4 rounded-lg transition-colors"
              >
                View Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
