import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import heroBanner from "../images/Blog/ai-coding/hero-banner.jpg";
import howAiHelpsImg from "../images/Blog/ai-coding/how-ai-helps.jpg";
import skillsNeededImg from "../images/Blog/ai-coding/skills-needed.jpg";
import goodCareerImg from "../images/Blog/ai-coding/good-career-2026.jpg";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUserEdit, FaCheckCircle, FaLightbulb, FaRobot, FaUserCheck, FaChartLine } from "react-icons/fa";

export default function Blog9() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const canonicalUrl = "https://www.thoughtflows.in/blog/artificial-intelligence-in-medical-coding-a-beginners-guide";

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Artificial Intelligence in Medical Coding: A Beginner's Guide",
        "description": "Learn how artificial intelligence in medical coding works, its real accuracy limits, job outlook, and the skills beginners need to build an AI-ready career.",
        "datePublished": "2026-09-26",
        "dateModified": "2026-09-26",
        "author": {
          "@type": "Person",
          "name": "Santhosh",
          "jobTitle": "Blogger"
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
            "name": "Will AI take away medical coding jobs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. AI automates code suggestions, but certified coders still validate codes and remain accountable for claims. The BLS projects 7% job growth for medical records specialists through 2034."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to learn AI tools to become a medical coder?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Learn coding fundamentals first. Once you can code accurately by hand, AI tools become easy to learn and review."
            }
          },
          {
            "@type": "Question",
            "name": "How accurate is AI in medical coding?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Accuracy varies by tool and specialty. Some advanced models get the top suggestion right only about 68% of the time for common DRGs, so human review is essential."
            }
          },
          {
            "@type": "Question",
            "name": "What is Computer-Assisted Coding (CAC)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "CAC is software that reads clinical documentation and suggests codes. A coder then approves or corrects each suggestion."
            }
          },
          {
            "@type": "Question",
            "name": "Which certification is best for an AI-driven coding career?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "CPC is the most widely recognised starting point. CRC is valuable for risk adjustment roles, where AI tools are widely used."
            }
          },
          {
            "@type": "Question",
            "name": "Can freshers in India get medical coding jobs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Many US healthcare providers outsource coding to India, and certified freshers with strong guideline knowledge are regularly hired."
            }
          }
        ]
      }
    ]
  };

  const topics = [
    { id: "key-takeaways", title: "Key Takeaways" },
    { id: "what-is-ai", title: "What is AI in Medical Coding?" },
    { id: "market-size", title: "How Big is the Market?" },
    { id: "how-ai-helps", title: "How Does AI Help Coders?" },
    { id: "can-ai-replace", title: "Can AI Replace Medical Coders?" },
    { id: "ai-vs-coder", title: "AI vs Certified Coder: Who Does What?" },
    { id: "job-growth", title: "Are Medical Coding Jobs Growing?" },
    { id: "skills-needed", title: "Skills Beginners Need in 2026" },
    { id: "thoughtflows-prep", title: "How ThoughtFlows Prepares You" },
    { id: "good-career", title: "Is it a Good Career for Beginners?" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const faqData = [
    {
      id: 1,
      ques: "1. Will AI take away medical coding jobs?",
      ans: "No. AI automates code suggestions, but certified coders still validate codes and remain accountable for claims. The BLS projects 7% job growth for medical records specialists through 2034."
    },
    {
      id: 2,
      ques: "2. Do I need to learn AI tools to become a medical coder?",
      ans: "Learn coding fundamentals first. Once you can code accurately by hand, AI tools become easy to learn and review."
    },
    {
      id: 3,
      ques: "3. How accurate is AI in medical coding?",
      ans: "Accuracy varies by tool and specialty. Some advanced models get the top suggestion right only about 68% of the time for common DRGs, so human review is essential."
    },
    {
      id: 4,
      ques: "4. What is Computer-Assisted Coding (CAC)?",
      ans: "CAC is software that reads clinical documentation and suggests codes. A coder then approves or corrects each suggestion."
    },
    {
      id: 5,
      ques: "5. Which certification is best for an AI-driven coding career?",
      ans: "CPC is the most widely recognised starting point. CRC is valuable for risk adjustment roles, where AI tools are widely used."
    },
    {
      id: 6,
      ques: "6. Can freshers in India get medical coding jobs?",
      ans: "Yes. Many US healthcare providers outsource coding to India, and certified freshers with strong guideline knowledge are regularly hired."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI in Medical Coding: A Beginner's Guide (2026) | ThoughtFlows</title>
        <meta name="description" content="Learn how artificial intelligence in medical coding works, its real accuracy limits, job outlook, and the skills beginners need to build an AI-ready career." />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* Hero Header - Mobile */}
      <div
        style={{
          width: "auto",
          background: "linear-gradient(90deg, #2E2C48 50%, #2E2C48 50%)",
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
            fontSize: "28px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Artificial Intelligence in Medical Coding: A Beginner's Guide
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 text-gray-300 text-sm pb-4 px-4">
          <span className="flex items-center gap-1">
            <FaUserEdit className="text-teal-400" /> Santhosh, Blogger | ThoughtFlows
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-teal-400" /> Sept 26, 2026
          </span>
        </div>
      </div>

      {/* Hero Header - Desktop */}
      <div
        style={{
          width: "auto",
          background: "linear-gradient(90deg, #2E2C48 50%, #f0f0f0 50%)",
          height: "auto",
          justifyContent: "space-around",
          fontSize: "40px",
        }}
        className="hidden lg:flex"
      >
        <div style={{ width: "45%", marginTop: "110px", marginLeft: "80px" }}>
          <h1
            style={{
              color: "white",
              fontSize: "34px",
              fontWeight: "bold",
              lineHeight: "1.3",
            }}
          >
            Artificial Intelligence in Medical Coding: A Beginner's Guide
          </h1>
          <div className="flex items-center gap-6 text-gray-300 text-sm mt-4">
            <span className="flex items-center gap-2">
              <FaUserEdit className="text-teal-400" /> Santhosh, Blogger | ThoughtFlows Medical Coding Academy
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-teal-400" /> Published: Sept 26, 2026
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
            Artificial intelligence for medical coding is technology that automatically codes elements of patient cases based on information in the patient’s record. Medical coding software suggests codes based on clinical documentation, and medical coders accept, amend, or reject suggested codes.
          </p>
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#333", lineHeight: "1.6", marginTop: "10px" }}>
            Medical coders will no longer type codes. Instead, coders will be responsible for reviewing and validating codes suggested by artificial intelligence. The most marketable coders in the near future will be those who are adept at auditing the output of AI.
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
              alt="Artificial Intelligence in Medical Coding: A Beginner's Guide"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Intro Text for Mobile */}
          <div className="lg:hidden max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm mb-8">
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              Artificial intelligence for medical coding is technology that automatically codes elements of patient cases based on information in the patient’s record. Medical coding software suggests codes based on clinical documentation, and medical coders accept, amend, or reject suggested codes.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Medical coders will no longer type codes. Instead, coders will be responsible for reviewing and validating codes suggested by artificial intelligence. The most marketable coders in the near future will be those who are adept at auditing the output of AI.
            </p>
          </div>

          {/* Key Takeaways Section */}
          <section id="key-takeaways" className="max-w-4xl mx-auto py-6">
            <div className="bg-gradient-to-r from-teal-900 to-blue-900 text-white p-6 md:p-8 rounded-xl shadow-md mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 text-amber-400">
                <FaLightbulb /> Key Takeaways
              </h2>
              <ul className="space-y-3 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-teal-400 mt-1 flex-shrink-0" />
                  <span>AI and coders interact differently than the traditional coder/coding system. While medical coders will not be replaced, AI will alter their day-to-day work.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-teal-400 mt-1 flex-shrink-0" />
                  <span>The market for healthcare AI is expected to expand.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-teal-400 mt-1 flex-shrink-0" />
                  <span>There will always be a need for human coders to review AI output for errors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-teal-400 mt-1 flex-shrink-0" />
                  <span>The employment of medical coders in the U.S. will continue to increase through 2034.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-teal-400 mt-1 flex-shrink-0" />
                  <span>It is important for students to learn both AI technology and code sets.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 1: What is AI in Medical Coding? */}
          <section id="what-is-ai" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-4">
              What is artificial intelligence in medical coding?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
              Artificial Intelligence in medical coding utilizes NLP (Natural Language Processing) or ML (Machine Learning) to recommend codes to the human coder based on the documentation in the record. The Human coder accepts the suggestions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Other automated coding systems used in hospitals are called Computer-Assisted Coding systems (CAC). There are newer coding systems that are based on large language models (LLMs).
            </p>
          </section>

          {/* Section 2: How big is the market? */}
          <section id="market-size" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-4">
              How big is the AI medical coding market?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
              High growth markets are attractive, and we at Straits Research expect the AI in medical coding market to rise from <strong>$3.41 billion in 2025</strong> to <strong>$10.84 billion in 2034</strong>, at a healthy CAGR of <strong>13.76%</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
              Other research firms give a more conservative outlook. For example, TechSci Research expects the market to be worth <strong>$4.22 billion in 2031</strong>, from a 2025 base of $2.45 billion, at a CAGR of 9.49%.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              AI in medical coding is gaining traction in the U.S. Mordor Intelligence anticipates that the use of predictive AI in U.S. hospitals would reach <strong>71% in 2024</strong>, up from 66% the previous year.
            </p>
          </section>

          {/* Section 3: How does AI help medical coders? */}
          <section id="how-ai-helps" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-6">
              How does AI help medical coders?
            </h2>
            
            <img
              src={howAiHelpsImg}
              alt="How does AI help medical coders? Smarter Tools. Faster Coding. Better Accuracy."
              className="w-full rounded-xl shadow-md mb-6 object-cover"
            />

            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              AI handles the repetitive parts of the job. This lets coders spend more time on complex charts.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500 mb-6">
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                  <span><strong>Scans documentation:</strong> Quickly finds diagnoses and procedures in complex medical records.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                  <span><strong>Recommends codes:</strong> Knows appropriate coding guidelines and suggests ICD-10-CM, CPT, and HCPCS codes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                  <span><strong>Anticipates issues:</strong> Uses natural language processing to recognize potential issues including upcoding and missing/inadequate documentation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                  <span><strong>Encourages compliance:</strong> Supports authorization and attestation decisions to protect billing integrity.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Can AI replace medical coders? */}
          <section id="can-ai-replace" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-4">
              Can AI replace medical coders?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
              <strong>No. Currently, AI needs human editing.</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
              Mordor Intelligence revealed research claiming LLMs reach a top-1 accuracy of <strong>68.1%</strong> for 30 most common DRGs when trained on clinical data. This suggests AI suggested first answers to 3 out of 10 questions in a given case, and the rest were either wrong or unrelated to the question.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              AI implementation has also failed to decrease the overall workload on staff. According to the Medical Group Management Association, in a 2025 survey, <strong>44% of leaders of management groups</strong> reported that AI failed to replace staff work, and the reason was attributable to the need for staff verification of AI outputs.
            </p>
          </section>

          {/* Section 5: AI vs Certified Coder Comparison Table */}
          <section id="ai-vs-coder" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-6">
              AI vs certified coder: who does what?
            </h2>
            
            <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-200 mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-teal-800 text-white text-base md:text-lg">
                    <th className="p-4 border-b border-teal-700">Task</th>
                    <th className="p-4 border-b border-teal-700 flex items-center gap-2">
                      <FaRobot /> AI Tool
                    </th>
                    <th className="p-4 border-b border-teal-700">
                      <FaUserCheck className="inline mr-2" /> Certified Coder
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-base md:text-lg divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">Scanning long clinical notes</td>
                    <td className="p-4 text-emerald-700 font-bold">✅ Fast</td>
                    <td className="p-4">Reviews key sections</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">Suggesting codes</td>
                    <td className="p-4 text-emerald-700 font-bold">✅ Yes</td>
                    <td className="p-4">Accepts, edits, or rejects</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">Applying official guidelines and sequencing</td>
                    <td className="p-4 text-amber-700 font-semibold">Partial</td>
                    <td className="p-4 text-emerald-700 font-bold">✅ Final authority</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">Handling unclear or missing documentation</td>
                    <td className="p-4 text-rose-600 font-bold">❌ Weak</td>
                    <td className="p-4 text-emerald-700 font-bold">✅ Queries the physician</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">Legal accountability for the claim</td>
                    <td className="p-4 text-rose-600 font-bold">❌ None</td>
                    <td className="p-4 text-emerald-700 font-bold">✅ Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: Are medical coding jobs still growing? */}
          <section id="job-growth" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <FaChartLine className="text-teal-600" /> Are medical coding jobs still growing?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
              <strong>Yes.</strong> The US Bureau of Labor Statistics projects that employment of medical records specialists will grow <strong>7% from 2024 to 2034</strong>, much faster than the average for all occupations.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
              <li>About <strong>14,200 openings</strong> are projected each year over the decade.</li>
              <li>The median annual wage was <strong>$50,250 in May 2024</strong>.</li>
              <li>Employers may prefer candidates who hold a certification.</li>
            </ul>
            <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-lg mb-6">
              <p className="text-lg text-gray-800 leading-relaxed text-justify">
                <strong>For Indian coders, this matters because a large share of US coding work is outsourced.</strong> Straits Research notes the outsourced mode led the market in 2025, and offshore teams in India are a big part of that supply chain.
              </p>
            </div>
          </section>

          {/* Section 7: Skills beginners need */}
          <section id="skills-needed" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-6">
              What skills do beginners need in an AI-driven coding job?
            </h2>
            
            <img
              src={skillsNeededImg}
              alt="What skills do beginners need in an AI-driven coding job?"
              className="w-full rounded-xl shadow-md mb-6 object-cover"
            />

            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              At ThoughtFlows, artificial intelligence in medical coding skills are taught in two layers: core coding knowledge first, then AI review skills on top.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Layer 1: Core Skills */}
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">
                  Core skills (non-negotiable):
                </h3>
                <ul className="space-y-3 text-base md:text-lg text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Anatomy, physiology, and medical terminology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>ICD-10-CM, CPT, and HCPCS guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Code sequencing and modifier rules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>A recognised certification such as CPC, CCS, or CRC</span>
                  </li>
                </ul>
              </div>

              {/* Layer 2: AI-era Skills */}
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-teal-600">
                <h3 className="text-xl font-bold mb-4 text-teal-900 border-b pb-2">
                  AI-era skills (the new edge):
                </h3>
                <ul className="space-y-3 text-base md:text-lg text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Auditing AI-suggested codes against documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Spotting when AI misreads context (for example, "ruled out" vs "confirmed")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Writing clear physician queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Basic comfort with CAC and EHR platforms</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: How ThoughtFlows Prepares Students */}
          <section id="thoughtflows-prep" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-4">
              How does ThoughtFlows prepare students for AI-assisted coding?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
              At ThoughtFlows, artificial intelligence in medical coding is part of our training, not a shortcut around it. We see one pattern often: freshers who rely on tools too early struggle to catch AI mistakes. You cannot audit a code you do not understand.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              So our training follows a <strong>"fundamentals first, validator second"</strong> approach:
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <span className="bg-teal-700 text-white font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Build the base</h4>
                  <p className="text-gray-700 text-base">Students code charts manually until they can justify every code with a guideline.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="bg-teal-700 text-white font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Introduce AI output</h4>
                  <p className="text-gray-700 text-base">Students review AI-style code suggestions and mark each as accept, edit, or reject.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="bg-teal-700 text-white font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Explain the decision</h4>
                  <p className="text-gray-700 text-base">Every correction must cite the chart text and the official guideline.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="bg-teal-700 text-white font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Mock audits</h4>
                  <p className="text-gray-700 text-base">Students practice the review-and-validate role that US clients now expect from offshore teams.</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              This mirrors what the job actually looks like today. The coder who can confidently say <em>"the AI is wrong here, and here's why"</em> is the coder employers keep.
            </p>
          </section>

          {/* Section 9: Is medical coding a good career in 2026? */}
          <section id="good-career" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-6">
              Is medical coding a good career for beginners in 2026?
            </h2>

            <img
              src={goodCareerImg}
              alt="Is medical coding A Good Career for beginners in 2026? Begin with Skills. Grow with Confidence."
              className="w-full rounded-xl shadow-md mb-6 object-cover"
            />

            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              <strong>Yes, if you train for where the job is going.</strong> AI is removing the most repetitive work. It is increasing demand for coders who understand guidelines deeply and can review machine output.
            </p>

            <div className="bg-teal-900 text-white p-6 md:p-8 rounded-xl shadow-md mb-8 text-center">
              <h3 className="text-2xl font-bold mb-3 text-amber-400">Want to become an AI-ready certified coder?</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Explore the <Link to="/cpc" className="text-teal-300 underline font-bold hover:text-white">CPC Certification</Link> Training Program, which includes ThoughtFlows' artificial intelligence in medical coding practice modules, or book a free counselling session with <Link to="/" className="text-teal-300 underline font-bold hover:text-white">ThoughtFlows today.</Link>
              </p>
              <Link to="/contact">
                <button className="bg-amber-400 text-gray-900 font-bold text-lg px-8 py-3 rounded-lg shadow hover:bg-amber-300 transition duration-200">
                  Book Free Counselling
                </button>
              </Link>
            </div>
          </section>

          {/* Section 10: Frequently Asked Questions Accordion */}
          <section id="faq" className="max-w-4xl mx-auto py-6">
            <h2 style={{ color: "#1d4971" }} className="text-2xl md:text-3xl font-bold mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-teal-50/50 transition-colors focus:outline-none cursor-pointer"
                    >
                      <span className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                        {item.ques}
                      </span>
                      <span
                        className={`text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? "bg-teal-700 text-white rotate-45" : "bg-teal-100 text-teal-800"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="p-5 pt-2 text-gray-700 text-base md:text-lg leading-relaxed border-t border-gray-100 bg-teal-50/30">
                        <p className="mt-2 text-gray-800">{item.ans}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>

        {/* Right Sidebar - Sticky Table of Contents */}
        <div className="sm:w-full lg:w-1/4 bg-white p-4 shadow-lg h-fit px-5 lg:sticky lg:top-[115px]">
          <h2 className="text-lg font-semibold mb-4" style={{ color: "#1d4971" }}>
            Table of contents
          </h2>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            {topics.map((topic) => (
              <li key={topic.id}>
                <a
                  href={`#${topic.id}`}
                  style={{ color: "#15aeb8" }}
                  className="no-underline hover:underline font-medium"
                >
                  {topic.title}
                </a>
              </li>
            ))}
          </ol>

          <div className="mt-8 p-4 bg-teal-50 rounded-lg border border-teal-200 text-center">
            <h3 className="font-bold text-teal-900 text-base mb-2">Ready to Start?</h3>
            <p className="text-xs text-gray-600 mb-3">Join ThoughtFlows Medical Coding Academy for CPC certification & AI practice modules.</p>
            <Link to="/contact">
              <button className="bg-teal-600 text-white text-xs font-bold py-2 px-4 rounded hover:bg-teal-700 transition">
                Book Free Session
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
