import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../Meta';
import { PopupContext } from '../context/PopupContext';
import './RegionLanding.css';

import puneImg from '../images/Branches/maha_pune_campus.jpg';
import kolhapurImg from '../images/Branches/maha_kolhapur_campus.jpg';
import mahaHeroImg from '../images/Branches/maha_pune_campus.jpg';

const MaharashtraLanding = () => {
  const { setIsOpen } = useContext(PopupContext);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const campuses = [
    {
      name: "Pune Campus",
      tagline: "Medical Coding Course in Pune",
      badge: "IT & Healthcare Hub",
      address: "Near IT Corridor, Kharadi & Shivajinagar Connectivity, Pune, Maharashtra - 411014",
      phone: "+91 93845 76852",
      path: "/medical-coding-course-pune/",
      img: puneImg,
      features: [
        "Proximity to Hinjawadi & Kharadi IT Parks",
        "Modern Multimedia Coding Systems",
        "Expert AAPC Certified Trainers",
        "Regular & Fast-Track Batches"
      ]
    },
    {
      name: "Kolhapur Campus",
      tagline: "Medical Coding Training in Kolhapur",
      badge: "Western Maharashtra Hub",
      address: "Central Location, Shahupuri & Railway Station Connectivity, Kolhapur, Maharashtra - 416001",
      phone: "+91 93845 76852",
      path: "/Medical-Coding-Training-Kolhapur",
      img: kolhapurImg,
      features: [
        "Easily accessible from Sangli & Satara",
        "Dedicated Practical Computer Lab",
        "Marathi, Hindi & English Mentorship",
        "100% Placement Support & Interview Prep"
      ]
    }
  ];

  const courses = [
    {
      name: "AAPC CPC® Certification",
      org: "AAPC USA",
      desc: "Gold standard professional coding qualification covering ICD-10-CM, CPT, and HCPCS code sets with real charts.",
      duration: "3 - 4 Months",
      path: "/cpc"
    },
    {
      name: "CIC® Hospital Inpatient Coding",
      org: "AAPC USA",
      desc: "Specialized training for acute care and inpatient facility records focusing on IP-DRG and ICD-10-PCS.",
      duration: "2 - 3 Months",
      path: "/cic"
    },
    {
      name: "COC® Hospital Outpatient Coding",
      org: "AAPC USA",
      desc: "Master outpatient encounters, ambulatory surgical centers, and APC payment structures.",
      duration: "2 - 3 Months",
      path: "/coc"
    },
    {
      name: "CRC® Risk Adjustment",
      org: "AAPC USA",
      desc: "High-growth domain mastering HCC models, chronic conditions, and Medicare Advantage risk calculations.",
      duration: "2 Months",
      path: "/crc"
    },
    {
      name: "AHIMA CCS® Master Track",
      org: "AHIMA USA",
      desc: "In-depth clinical data coding recognized by global hospital groups and healthcare IT enterprises.",
      duration: "3 - 4 Months",
      path: "/ccs"
    },
    {
      name: "Specialty Surgical & ED Coding",
      org: "Specialty Level",
      desc: "Advanced modules for experienced and fresh coders handling surgical specialties, E/M, and acute trauma.",
      duration: "1 - 2 Months",
      path: "/surgery"
    }
  ];

  const whyChoose = [
    {
      icon: "🏢",
      title: "Western India's Healthcare IT Boom",
      text: "Pune and Mumbai represent the fastest expanding market for US healthcare analytics, revenue cycle management, and health informatics."
    },
    {
      icon: "📍",
      title: "Campuses in Pune & Kolhapur",
      text: "Conveniently located training centers providing direct access for students across Western Maharashtra."
    },
    {
      icon: "🗣️",
      title: "Multilingual Mentorship Support",
      text: "Trainers explain complex medical terminology, anatomical guidelines, and coding scenarios in Marathi, Hindi, and English."
    },
    {
      icon: "💼",
      title: "100% Placement Record",
      text: "Dedicated recruitment drives with top healthcare IT companies in Pune (Hinjawadi, Magarpatta, Kharadi) and Mumbai."
    },
    {
      icon: "💻",
      title: "Live Online Throughout Maharashtra",
      text: "Students from Mumbai, Nagpur, Nashik, Aurangabad, Sangli, and Solapur can access high-definition live interactive sessions."
    },
    {
      icon: "📚",
      title: "Genuine Clinical Chart Practice",
      text: "Analyze and code over 1,200+ actual patient charts to gain job-ready confidence before attending MNC technical interviews."
    }
  ];

  const faqs = [
    {
      q: "Where are ThoughtFlows campuses in Maharashtra?",
      a: "ThoughtFlows operates two prime centers in Maharashtra: Pune (near the IT corridor with smooth connectivity) and Kolhapur (Shahupuri / Station Road area). We also offer live interactive online classes for students across Mumbai, Nashik, Nagpur, Aurangabad, and other cities."
    },
    {
      q: "What career opportunities exist for medical coders in Maharashtra?",
      a: "Maharashtra has a booming healthcare BPO/KPO and analytics sector. Top MNCs like GeBBS, Cognizant, Wipro, Omega Healthcare, and Optum have major operations in Pune and Navi Mumbai, offering substantial starting salaries and rapid promotion tracks for AAPC certified coders."
    },
    {
      q: "Who is eligible to join the medical coding course in Maharashtra?",
      a: "Graduates and post-graduates in Life Sciences, B.Pharmacy/M.Pharmacy, Nursing, Biotechnology, Microbiology, Biochemistry, Physiotherapy, B.Sc/M.Sc, and Allied Health Sciences are prime candidates. Candidates with non-science degrees can also join through our foundational Medical Terminology training."
    },
    {
      q: "Are the lectures conducted in Marathi or Hindi?",
      a: "While the examination and official curriculum are in English, our instructors explain complex concepts with Marathi and Hindi support, ensuring that all students thoroughly understand clinical logic and coding rules without language barriers."
    },
    {
      q: "Does ThoughtFlows offer placement support in Maharashtra?",
      a: "Yes! We provide 100% placement support. Our placement team arranges campus interviews, technical mock assessments, and resume preparation with leading healthcare MNCs across Pune, Mumbai, Bangalore, and Hyderabad until you secure a job."
    }
  ];

  const hiringPartners = [
    "GeBBS Healthcare", "Cognizant Pune", "Omega Healthcare", "Wipro Healthcare", 
    "Optum / UnitedHealth", "Access Healthcare", "CorroHealth", "Episource", "Tech Mahindra", "Carelon"
  ];

  return (
    <div className="region-landing">
      <Meta 
        title="Best Medical Coding Course in Maharashtra | Pune & Kolhapur | ThoughtFlows"
        description="Enroll in the leading Medical Coding Course in Maharashtra at ThoughtFlows. Premier campuses in Pune and Kolhapur. AAPC CPC certification, 100% placement assurance, practical chart training & flexible batches."
        canonical="https://www.thoughtflows.in/maharashtra"
      />

      {/* Hero Section */}
      <section className="region-hero">
        <div className="region-container">
          <div className="region-hero-inner">
            <div className="region-hero-content">
              <div className="region-breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Branches</span>
                <span>/</span>
                <span style={{ color: '#0f172a', fontWeight: 600 }}>Maharashtra</span>
              </div>
              <div className="region-hero-badge">
                🌟 Maharashtra's Leading Medical Coding Hub · Pune & Kolhapur
              </div>
              <h1 className="region-hero-title">
                Premier Medical Coding Course in <span>Maharashtra</span>
              </h1>
              <p className="region-hero-subtitle">
                Build a thriving career in Western India's fast-growing healthcare technology sector. Get trained at our premier campuses in <strong>Pune</strong> and <strong>Kolhapur</strong> by AAPC-certified mentors with real-time chart practice and 100% placement assurance.
              </p>

              <div className="region-hero-actions">
                <a href="#campuses" className="btn-primary-action">
                  Explore Maharashtra Campuses &darr;
                </a>
                <button onClick={() => setIsOpen(true)} className="btn-secondary-action">
                  Enquire for Free Demo
                </button>
              </div>

              <div className="region-hero-stats">
                <div className="hero-stat-card">
                  <div className="hero-stat-num">2</div>
                  <div className="hero-stat-label">Maharashtra Campuses</div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-num">5000+</div>
                  <div className="hero-stat-label">Successful Placements</div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-num">95%+</div>
                  <div className="hero-stat-label">CPC Exam Pass Rate</div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-num">100%</div>
                  <div className="hero-stat-label">Placement Support</div>
                </div>
              </div>
            </div>

            <div className="region-hero-visual">
              <div className="hero-visual-card">
                <img src={mahaHeroImg} alt="ThoughtFlows Maharashtra Medical Coding Training" />
                <div className="hero-floating-chip chip-top">
                  <div className="chip-icon">🎯</div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Certification Success</div>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>98.2% CPC Pass Rate</div>
                  </div>
                </div>
                <div className="hero-floating-chip chip-bottom">
                  <div className="chip-icon">💼</div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Campus Placements</div>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>Pune & Mumbai MNCs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campuses Section */}
      <section className="region-section" id="campuses">
        <div className="region-container">
          <div className="section-head-center">
            <span className="section-eyebrow">Our Training Centers</span>
            <h2 className="section-title">
              Choose Your Nearest <span>Campus in Maharashtra</span>
            </h2>
            <p className="section-desc">
              Whether you are in Pune or Western Maharashtra, our modern learning hubs offer advanced coding labs, expert faculty, and structured job preparation.
            </p>
          </div>

          <div className="campus-grid">
            {campuses.map((campus, idx) => (
              <div className="campus-card" key={idx}>
                <div className="campus-card-img-wrap">
                  <img src={campus.img} alt={`ThoughtFlows ${campus.name}`} />
                  <span className={`campus-badge ${idx === 0 ? 'highlight' : ''}`}>{campus.badge}</span>
                </div>
                <div className="campus-card-body">
                  <h3 className="campus-card-title">{campus.name}</h3>
                  <div className="campus-card-location">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{campus.address}</span>
                  </div>

                  <ul className="campus-card-features">
                    {campus.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <span className="bullet">✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="campus-card-footer">
                    <Link to={campus.path} className="campus-explore-btn">
                      Explore Campus &rarr;
                    </Link>
                    <a href={`tel:${campus.phone.replace(/\s+/g, '')}`} className="campus-contact-link">
                      📞 {campus.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="region-section bg-alt">
        <div className="region-container">
          <div className="section-head-center">
            <span className="section-eyebrow">The ThoughtFlows Advantage</span>
            <h2 className="section-title">
              Why Students in Maharashtra Choose <span>ThoughtFlows</span>
            </h2>
            <p className="section-desc">
              We provide practical, industry-focused training that turns fresh life science graduates and healthcare workers into certified, high-earning medical coders.
            </p>
          </div>

          <div className="why-grid">
            {whyChoose.map((item, idx) => (
              <div className="why-card" key={idx}>
                <div className="why-icon">{item.icon}</div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="region-section">
        <div className="region-container">
          <div className="section-head-center">
            <span className="section-eyebrow">Our Programs</span>
            <h2 className="section-title">
              Industry-Standard <span>Medical Coding Certifications</span>
            </h2>
            <p className="section-desc">
              Comprehensive curricula aligned with latest AAPC and AHIMA guidelines for high exam success and technical job interviews.
            </p>
          </div>

          <div className="region-courses-grid">
            {courses.map((course, idx) => (
              <div className="region-course-card" key={idx}>
                <span className="course-org-badge">{course.org}</span>
                <h3 className="region-course-name">{course.name}</h3>
                <p className="region-course-desc">{course.desc}</p>
                <div className="course-meta-tags">
                  <span className="meta-tag">⏱️ {course.duration}</span>
                  <span className="meta-tag">Classroom / Online</span>
                </div>
                <Link to={course.path} className="course-link-btn">
                  View Syllabus &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modes */}
      <section className="region-section bg-alt">
        <div className="region-container">
          <div className="section-head-center">
            <span className="section-eyebrow">Study Options</span>
            <h2 className="section-title">
              Flexible Learning Across <span>Maharashtra</span>
            </h2>
            <p className="section-desc">
              Attend classroom sessions at Pune or Kolhapur, or join live digital classes from anywhere in the state.
            </p>
          </div>

          <div className="modes-grid">
            <div className="mode-card">
              <div className="mode-icon">🏫</div>
              <h3 className="mode-title">Classroom in Pune & Kolhapur</h3>
              <p className="mode-desc">
                In-person interactive learning with personal mentor attention, physical code book exercises, and daily chart practice sessions.
              </p>
            </div>
            <div className="mode-card">
              <div className="mode-icon">💻</div>
              <h3 className="mode-title">Live Online (All Districts)</h3>
              <p className="mode-desc">
                Interactive real-time classes for students across Mumbai, Nagpur, Nashik, Aurangabad, and Solapur with digital coding portals and live Q&A.
              </p>
            </div>
            <div className="mode-card">
              <div className="mode-icon">⏱️</div>
              <h3 className="mode-title">Weekend & Working Executive Batches</h3>
              <p className="mode-desc">
                Specially arranged batches on Saturdays and Sundays for working nurses, pharmacy executives, and healthcare staff looking to upskill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="region-section">
        <div className="region-container">
          <div className="section-head-center">
            <span className="section-eyebrow">Placement Network</span>
            <h2 className="section-title">
              Leading Healthcare MNCs Hiring <span>Our Coders</span>
            </h2>
            <p className="section-desc">
              Direct campus hiring associations with top IT and healthcare business process leaders across Western India.
            </p>
          </div>

          <div className="partners-badge-list">
            {hiringPartners.map((partner, idx) => (
              <span className="partner-pill" key={idx}>{partner}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="region-section bg-alt">
        <div className="region-container">
          <div className="section-head-center">
            <span className="section-eyebrow">Got Questions?</span>
            <h2 className="section-title">
              Frequently Asked Questions - <span>Maharashtra</span>
            </h2>
            <p className="section-desc">
              Answers to common queries regarding admissions, certifications, and job placements in Maharashtra.
            </p>
          </div>

          <div className="region-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div className={`region-faq-item ${isOpen ? 'active' : ''}`} key={idx}>
                  <button 
                    className="faq-header-btn"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="faq-question-text">{faq.q}</h3>
                    <span className={`faq-arrow ${isOpen ? 'rotated' : ''}`}>▼</span>
                  </button>
                  {isOpen && (
                    <div className="faq-body-content">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="region-section" style={{ paddingTop: 0 }}>
        <div className="region-container">
          <div className="region-cta-banner">
            <div className="cta-banner-content">
              <h2 className="cta-banner-title">
                Start Your Medical Coding Career in Maharashtra
              </h2>
              <p className="cta-banner-desc">
                Attend a free demo session at our Pune or Kolhapur campus, or join our live interactive online trial class today.
              </p>
              <div className="cta-banner-actions">
                <button onClick={() => setIsOpen(true)} className="btn-cta-white">
                  Book Free Demo Class
                </button>
                <a href="https://wa.me/919384576852?text=Hi%20ThoughtFlows,%20I%20am%20interested%20in%20Medical%20Coding%20Training%20in%20Maharashtra" target="_blank" rel="noopener noreferrer" className="btn-cta-ghost">
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaharashtraLanding;
