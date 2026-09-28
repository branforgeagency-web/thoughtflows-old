import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../Meta';
import { PopupContext } from '../context/PopupContext';
import './RegionLanding.css';

import hopesImg from '../images/Branches/cbe_hopes_campus.jpg';
import saravanampattiImg from '../images/Branches/cbe_saravanampatti_campus.jpg';
import gandhipuramImg from '../images/Branches/cbe_gandhipuram_campus.jpg';
import cbeHeroImg from '../images/Branches/cbe_hopes_campus.jpg';

const CoimbatoreLanding = () => {
  const { setIsOpen } = useContext(PopupContext);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const campuses = [
    {
      name: "Hopes Campus",
      tagline: "Medical Coding Excellence at Hopes",
      badge: "Avinashi Road Hub",
      address: "Door No.62 E/F, 1st Floor South Wing, Lalitha Towers, Gandhi Street, Avinashi Rd, Coimbatore - 641004",
      phone: "+91 93845 76852",
      path: "/Medical-Coding-Excellence-at-Hopes",
      img: hopesImg,
      features: [
        "Near PSG Tech & Fun Mall",
        "Air-conditioned Smart Lab",
        "Weekday & Weekend Batches",
        "Dedicated AAPC Certified Mentors"
      ]
    },
    {
      name: "Saravanampatti Campus",
      tagline: "Top Medical Coding Training in Saravanampatti",
      badge: "IT Corridor Hub",
      address: "No-171/2A, 1st Floor, Sathy Road, Saravanampatti, Coimbatore - 641035",
      phone: "+91 93845 76852",
      path: "/Top-Medical-Coding-Training-Saravanampatti",
      img: saravanampattiImg,
      features: [
        "In the heart of Coimbatore IT Hub",
        "High-Speed Systems & Online Portals",
        "Live Mock Test Facilities",
        "100% Placement Assistance"
      ]
    },
    {
      name: "Gandhipuram Campus",
      tagline: "Premier Medical Coding Institute Gandhipuram",
      badge: "Central City Hub",
      address: "Jay Enclave, 1084, 3rd Street, Cross Cut Road, Gandhipuram, Coimbatore - 641012",
      phone: "+91 93845 76852",
      path: "/Premier-Medical-Coding-Institute-Gandhipuram",
      img: gandhipuramImg,
      features: [
        "2 mins walk from Central Bus Stand",
        "Extensive Medical Library & Notes",
        "Direct HR Interviews on Campus",
        "Flexible Shift Timings"
      ]
    }
  ];

  const courses = [
    {
      name: "AAPC CPC® Certification",
      org: "AAPC USA",
      desc: "Comprehensive preparation covering ICD-10-CM, CPT, and HCPCS Level II with real-world clinical documentation.",
      duration: "3 - 4 Months",
      path: "/cpc"
    },
    {
      name: "CIC® Inpatient Coding",
      org: "AAPC USA",
      desc: "Specialized inpatient medical coding program covering IP-DRG, ICD-10-PCS facility guidelines, and acute care charts.",
      duration: "2 - 3 Months",
      path: "/cic"
    },
    {
      name: "COC® Outpatient Coding",
      org: "AAPC USA",
      desc: "Master outpatient hospital clinics, ambulatory surgery centers, and APC payment methodologies.",
      duration: "2 - 3 Months",
      path: "/coc"
    },
    {
      name: "CRC® Risk Adjustment",
      org: "AAPC USA",
      desc: "High-demand training focused on HCC coding models, CMS risk adjustments, and chronic disease documentation.",
      duration: "2 Months",
      path: "/crc"
    },
    {
      name: "AHIMA CCS® Mastery",
      org: "AHIMA USA",
      desc: "Master inpatient and outpatient health records coding for gold-standard global hospital systems.",
      duration: "3 - 4 Months",
      path: "/ccs"
    },
    {
      name: "Specialty Medical Coding",
      org: "Specialty Level",
      desc: "Advanced deep-dive coding into Surgery, Emergency Department (ED), Evaluation & Management (E/M), and Radiology.",
      duration: "1 - 2 Months",
      path: "/surgery"
    }
  ];

  const whyChoose = [
    {
      icon: "🏆",
      title: "3 Prime Campuses in Coimbatore",
      text: "Conveniently located at Hopes, Saravanampatti, and Gandhipuram so you never have to travel far for top-tier coaching."
    },
    {
      icon: "🎓",
      title: "AAPC Certified Lead Trainers",
      text: "Learn directly from senior industry leaders with 10+ years of healthcare revenue cycle and live chart auditing experience."
    },
    {
      icon: "💼",
      title: "100% Placement Assurance",
      text: "Direct interview drives with Coimbatore, Chennai, and Bangalore healthcare MNCs like Omega, Cognizant, and Vee Tech."
    },
    {
      icon: "💻",
      title: "Hands-on Clinical Chart Practice",
      text: "Decode over 1,500+ genuine patient records to build real muscle memory before attending technical recruiter interviews."
    },
    {
      icon: "⏱️",
      title: "Flexible Regular & Weekend Batches",
      text: "Tailored schedules for college students, life science graduates, and working nursing/pharmacy professionals."
    },
    {
      icon: "📚",
      title: "Comprehensive Study Materials",
      text: "Complimentary access to official code books, chapter quizzes, timed mock exam simulators, and interview prep kits."
    }
  ];

  const faqs = [
    {
      q: "Where are ThoughtFlows campuses located in Coimbatore?",
      a: "ThoughtFlows operates 3 fully equipped campuses across Coimbatore: Hopes (Avinashi Road near Peelamedu), Saravanampatti (Sathy Road near IT parks), and Gandhipuram (Cross Cut Road near the central bus terminal). You can study at whichever branch is most convenient for you."
    },
    {
      q: "What qualifications are required to join medical coding in Coimbatore?",
      a: "Graduates and post-graduates from Life Sciences, Nursing, Pharmacy, Biotechnology, Microbiology, Biochemistry, Physiotherapy, B.Sc/M.Sc, and other degrees are welcome. Non-science graduates with good analytical skills can also join through our specialized Medical Terminology foundation module."
    },
    {
      q: "Do you offer placement assistance in Coimbatore?",
      a: "Yes! ThoughtFlows has an established placement division tied up with 80+ top healthcare RCM companies in Coimbatore, Chennai, Bangalore, and across India. We provide resume building, technical mock interviews, and guaranteed job interviews until you are placed."
    },
    {
      q: "Can I switch between Coimbatore branches or study online?",
      a: "Yes. Students enrolled at ThoughtFlows have complete flexibility. You can attend classroom sessions at any of our three Coimbatore campuses, attend live interactive online sessions from home, or take hybrid classes."
    },
    {
      q: "How long does the CPC certification training take in Coimbatore?",
      a: "Our core CPC certification program spans 3 to 4 months with rigorous daily lecture hours, chart coding labs, and weekly mock exams to ensure a 95%+ first-attempt pass rate."
    }
  ];

  const hiringPartners = [
    "Omega Healthcare", "Cognizant", "Vee Technologies", "Access Healthcare", 
    "CorroHealth", "AGS Health", "Episource", "GeBBS Healthcare", "Optum", "Miramed Ajuba"
  ];

  return (
    <div className="region-landing">
      <Meta 
        title="Best Medical Coding Course in Coimbatore | Hopes, Saravanampatti & Gandhipuram | ThoughtFlows"
        description="Join ThoughtFlows Medical Coding Academy in Coimbatore across 3 state-of-the-art campuses: Hopes, Saravanampatti & Gandhipuram. AAPC CPC certification, 100% placement assurance & flexible batches."
        canonical="https://www.thoughtflows.in/coimbatore"
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
                <span style={{ color: '#0f172a', fontWeight: 600 }}>Coimbatore</span>
              </div>
              <div className="region-hero-badge">
                ✨ Flagship Training Hub · 3 Campuses
              </div>
              <h1 className="region-hero-title">
                Premier Medical Coding Training in <span>Coimbatore</span>
              </h1>
              <p className="region-hero-subtitle">
                Launch a high-paying healthcare IT career with India's most trusted AAPC-accredited medical coding institute. Choose your nearest campus among <strong>Hopes</strong>, <strong>Saravanampatti</strong>, and <strong>Gandhipuram</strong> with guaranteed placement assistance.
              </p>

              <div className="region-hero-actions">
                <a href="#campuses" className="btn-primary-action">
                  Explore 3 Campuses &darr;
                </a>
                <button onClick={() => setIsOpen(true)} className="btn-secondary-action">
                  Enquire for Free Demo
                </button>
              </div>

              <div className="region-hero-stats">
                <div className="hero-stat-card">
                  <div className="hero-stat-num">3</div>
                  <div className="hero-stat-label">Coimbatore Campuses</div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-num">5000+</div>
                  <div className="hero-stat-label">Coders Placed</div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-num">95%+</div>
                  <div className="hero-stat-label">AAPC Pass Rate</div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-num">100%</div>
                  <div className="hero-stat-label">Placement Support</div>
                </div>
              </div>
            </div>

            <div className="region-hero-visual">
              <div className="hero-visual-card">
                <img src={cbeHeroImg} alt="ThoughtFlows Coimbatore Medical Coding Training" />
                <div className="hero-floating-chip chip-top">
                  <div className="chip-icon">🎯</div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Certification Success</div>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>98.4% CPC Pass Rate</div>
                  </div>
                </div>
                <div className="hero-floating-chip chip-bottom">
                  <div className="chip-icon">💼</div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Placement Assurance</div>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>100% Job Assistance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campuses Hub Section */}
      <section className="region-section" id="campuses">
        <div className="region-container">
          <div className="section-head-center">
            <span className="section-eyebrow">Our Coimbatore Presence</span>
            <h2 className="section-title">
              Choose Your Nearest <span>Coimbatore Campus</span>
            </h2>
            <p className="section-desc">
              Every ThoughtFlows campus in Coimbatore is equipped with air-conditioned multimedia classrooms, dedicated coding software terminals, and senior faculty mentors.
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
            <span className="section-eyebrow">Why ThoughtFlows</span>
            <h2 className="section-title">
              Why Aspiring Coders in Coimbatore Choose <span>ThoughtFlows</span>
            </h2>
            <p className="section-desc">
              From foundational medical terminology to passing your AAPC CPC exam on the very first try, we provide end-to-end guidance and career launchpad.
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
            <span className="section-eyebrow">Our Curriculum</span>
            <h2 className="section-title">
              Globally Recognized <span>Medical Coding Courses</span>
            </h2>
            <p className="section-desc">
              All courses are aligned with latest AAPC and AHIMA guidelines and updated for ICD-10-CM, CPT, and HCPCS code sets.
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
              Tailored Learning Modes in <span>Coimbatore</span>
            </h2>
            <p className="section-desc">
              Choose the learning mode that fits your lifestyle, college hours, or work shifts.
            </p>
          </div>

          <div className="modes-grid">
            <div className="mode-card">
              <div className="mode-icon">🏫</div>
              <h3 className="mode-title">Classroom Training</h3>
              <p className="mode-desc">
                Attend immersive in-person sessions at Hopes, Saravanampatti, or Gandhipuram with face-to-face mentorship and collaborative peer coding sessions.
              </p>
            </div>
            <div className="mode-card">
              <div className="mode-icon">💻</div>
              <h3 className="mode-title">Live Interactive Online</h3>
              <p className="mode-desc">
                Join live two-way audio-video classes with real-time doubt clearing, recorded lectures for revision, and daily digital chart assignments.
              </p>
            </div>
            <div className="mode-card">
              <div className="mode-icon">🔄</div>
              <h3 className="mode-title">Weekend & Fast Track</h3>
              <p className="mode-desc">
                Specially designed intensive weekend batches for working healthcare professionals, doctors, nurses, and final-year college students.
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
              Top Recruiters Hiring Our <span>Coimbatore Coders</span>
            </h2>
            <p className="section-desc">
              Our graduates are working at leading healthcare IT companies and hospital billing networks across Coimbatore, Chennai, and Bangalore.
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
              Frequently Asked Questions - <span>Coimbatore</span>
            </h2>
            <p className="section-desc">
              Everything you need to know about our Coimbatore medical coding admissions, campus facilities, and placements.
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
                Ready to Become a Certified Medical Coder in Coimbatore?
              </h2>
              <p className="cta-banner-desc">
                Book a free counseling and demo session today at your nearest Coimbatore campus (Hopes, Saravanampatti, or Gandhipuram) and step into a rewarding healthcare career.
              </p>
              <div className="cta-banner-actions">
                <button onClick={() => setIsOpen(true)} className="btn-cta-white">
                  Book Free Demo Class
                </button>
                <a href="https://wa.me/919384576852?text=Hi%20ThoughtFlows,%20I%20am%20interested%20in%20Medical%20Coding%20Training%20in%20Coimbatore" target="_blank" rel="noopener noreferrer" className="btn-cta-ghost">
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

export default CoimbatoreLanding;
