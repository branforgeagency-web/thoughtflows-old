import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../Meta';
import { PopupContext } from '../context/PopupContext';
import './RegionLanding.css';

import kochiImg from '../images/Branches/kerala_kochi_campus.jpg';
import trivandrumImg from '../images/Branches/kerala_trivandrum_campus.jpg';
import keralaHeroImg from '../images/Branches/kerala_hero.jpg';

const KeralaLanding = () => {
  const { setIsOpen } = useContext(PopupContext);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const campuses = [
    {
      name: "Kochi Campus",
      tagline: "Medical Coding Academy in Kochi",
      badge: "Commercial Capital Hub",
      address: "4th Floor, Vee Vee Tower, Near Bhima Jewels, NH Bypass, Edappally, Kochi, Ernakulam, Kerala - 682024",
      phone: "+91 90480 23242",
      path: "/Medical-Coding-Academy-Kochi",
      img: kochiImg,
      features: [
        "Near Edappally Metro Station & Lulu Mall",
        "Proximity to InfoPark & SmartCity",
        "State-of-the-Art Coding Computer Lab",
        "Dedicated UAE & Gulf Exam Orientation"
      ]
    },
    {
      name: "Trivandrum Campus",
      tagline: "Advanced Medical Coding in Trivandrum",
      badge: "Capital City Hub",
      address: "167, 1st Floor, Karimpanal Arcade, opp. Padmanabhaswamy Temple, East Fort, Thiruvananthapuram, Kerala - 695023",
      phone: "+91 90480 23242",
      path: "/Advanced-Medical-Coding-Tiruvandrum",
      img: trivandrumImg,
      features: [
        "Prime location at East Fort with easy bus/rail transit",
        "Proximity to Technopark Healthcare IT firms",
        "AAPC Certified Faculty with bilingual guidance",
        "100% Placement Support & Mock Interviews"
      ]
    }
  ];

  const courses = [
    {
      name: "AAPC CPC® Certification",
      org: "AAPC USA",
      desc: "Gold standard physician and clinical practice coding certification covering ICD-10-CM, CPT, and HCPCS.",
      duration: "3 - 4 Months",
      path: "/cpc"
    },
    {
      name: "Gulf & UAE Coding (DHA / MOH / DOH)",
      org: "Middle East Standards",
      desc: "Specialized training for coders seeking lucrative hospital roles in Dubai, Abu Dhabi, Qatar, and Saudi Arabia.",
      duration: "2 - 3 Months",
      path: "/cpc"
    },
    {
      name: "CIC® Inpatient Coding",
      org: "AAPC USA",
      desc: "Master facility-based hospital charts, IP-DRG classification systems, and complex inpatient coding.",
      duration: "2 - 3 Months",
      path: "/cic"
    },
    {
      name: "AHIMA CCS® Master Program",
      org: "AHIMA USA",
      desc: "Comprehensive dual-track coding certification recognized by elite international hospital chains.",
      duration: "3 - 4 Months",
      path: "/ccs"
    },
    {
      name: "CRC® Risk Adjustment",
      org: "AAPC USA",
      desc: "Fast-track certification specializing in HCC risk adjustment models for US healthcare payers.",
      duration: "2 Months",
      path: "/crc"
    },
    {
      name: "Specialty Medical Coding",
      org: "Clinical Level",
      desc: "In-depth practice covering Emergency Department, Surgery, Interventional Radiology, and Anesthesia.",
      duration: "1 - 2 Months",
      path: "/surgery"
    }
  ];

  const whyChoose = [
    {
      icon: "✈️",
      title: "Gulf & International Career Pathways",
      text: "Our training prepares you not only for Indian IT MNCs but also directly opens doors to healthcare systems in the UAE, Qatar, Oman, and Saudi Arabia."
    },
    {
      icon: "🏛️",
      title: "Strategic Campuses in Kochi & Trivandrum",
      text: "Located right at Edappally (Kochi) and East Fort (Trivandrum) with exceptional connectivity for students across Kerala."
    },
    {
      icon: "👨‍🏫",
      title: "Bilingual Faculty Mentorship",
      text: "Concepts in Anatomy, Physiology, and Coding guidelines are clearly explained with Malayalam and English support for effortless understanding."
    },
    {
      icon: "💼",
      title: "100% Placement Record",
      text: "Direct tie-ups with leading healthcare IT giants in InfoPark Kochi, TechnoPark Trivandrum, Bangalore, and Chennai."
    },
    {
      icon: "💻",
      title: "Online & Hybrid Across All Kerala",
      text: "Students from Calicut, Thrissur, Kollam, Kottayam, Kannur, and Palakkad can easily access our live digital classrooms with hands-on practice."
    },
    {
      icon: "🎯",
      title: "Real Hospital Case Studies",
      text: "Hands-on coding with authentic de-identified US hospital charts, operative notes, and emergency discharge summaries."
    }
  ];

  const faqs = [
    {
      q: "Where are ThoughtFlows campuses situated in Kerala?",
      a: "We have two fully functional training hubs in Kerala: Kochi (at Edappally near the Metro Station and NH bypass) and Trivandrum (at East Fort, Karimpanal Arcade). Both campuses offer in-person classroom coaching and modern computer labs."
    },
    {
      q: "Can I get a medical coding job in the Gulf (UAE, Qatar, Saudi) after this course?",
      a: "Absolutely! The AAPC CPC credential is the primary benchmark required by healthcare regulators in Dubai (DHA), Abu Dhabi (DOH/HAAD), and Saudi Arabia. Our curriculum covers all aspects needed to pass international licensing examinations and secure positions abroad."
    },
    {
      q: "Who is eligible to join the medical coding course in Kerala?",
      a: "Graduates with degrees in Life Sciences (Botany, Zoology, Biotechnology, Microbiology, Biochemistry), Nursing, Pharmacy, Physiotherapy, B.Sc/M.Sc, and other allied health disciplines are ideal candidates. Non-life science graduates with strong interest are also welcome through our introductory Medical Terminology module."
    },
    {
      q: "What if I live outside Kochi and Trivandrum (e.g., Kozhikode, Thrissur, Kollam)?",
      a: "We provide highly interactive Live Online training with two-way audio-video, live coding screens, doubt resolution, and daily recorded sessions accessible to students across every district in Kerala."
    },
    {
      q: "What is the average starting salary for a certified medical coder in Kerala?",
      a: "Entry-level certified coders in Kerala IT parks (InfoPark, TechnoPark) typically start around ₹25,000 to ₹40,000 per month, which scales rapidly to ₹60,000 - ₹90,000+ per month after 2–3 years of experience. For positions in the UAE/Gulf, salaries start from AED 4,500 to AED 8,000+ monthly."
    }
  ];

  const hiringPartners = [
    "Cognizant", "Guidehouse", "GeBBS Healthcare", "Omega Healthcare", 
    "R1 RCM", "Access Healthcare", "Optum", "Aster DM Healthcare", "Apollo Hospitals", "Narayana Health"
  ];

  return (
    <div className="region-landing">
      <Meta 
        title="Best Medical Coding Course in Kerala | Kochi & Trivandrum Campuses | ThoughtFlows"
        description="Launch your medical coding career in Kerala with ThoughtFlows. Leading AAPC CPC training institute with premier campuses in Kochi (Edappally) & Trivandrum (East Fort). 100% placement support & Gulf opportunities."
        canonical="https://www.thoughtflows.in/kerala"
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
                <span style={{ color: '#0f172a', fontWeight: 600 }}>Kerala</span>
              </div>
              <div className="region-hero-badge">
                🌴 Kerala's Leading Medical Coding Hub · Kochi & Trivandrum
              </div>
              <h1 className="region-hero-title">
                Premier Medical Coding Training in <span>Kerala</span>
              </h1>
              <p className="region-hero-subtitle">
                Unlock high-growth careers in domestic healthcare IT parks and lucrative hospital systems across the UAE and Gulf. Enroll at our flagship <strong>Kochi</strong> or <strong>Trivandrum</strong> campuses with AAPC-certified mentors and guaranteed placement support.
              </p>

              <div className="region-hero-actions">
                <a href="#campuses" className="btn-primary-action">
                  Explore Kerala Campuses &darr;
                </a>
                <button onClick={() => setIsOpen(true)} className="btn-secondary-action">
                  Enquire for Free Demo
                </button>
              </div>

              <div className="region-hero-stats">
                <div className="hero-stat-card">
                  <div className="hero-stat-num">2</div>
                  <div className="hero-stat-label">Kerala Campuses</div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-num">5000+</div>
                  <div className="hero-stat-label">Graduates Placed</div>
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
                <img src={keralaHeroImg} alt="ThoughtFlows Kerala Medical Coding Training" />
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
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Placement Support</div>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>InfoPark & Gulf Jobs</div>
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
            <span className="section-eyebrow">Our Kerala Campuses</span>
            <h2 className="section-title">
              Choose Your Nearest <span>Campus in Kerala</span>
            </h2>
            <p className="section-desc">
              Whether you prefer Kochi or Trivandrum, our campuses feature modern lab facilities, expert bilingual trainers, and direct campus recruitment drives.
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
            <span className="section-eyebrow">The ThoughtFlows Edge</span>
            <h2 className="section-title">
              Why Kerala Students Trust <span>ThoughtFlows Academy</span>
            </h2>
            <p className="section-desc">
              Tailored learning paths connecting Kerala's talented life-science and healthcare graduates to worldwide career opportunities.
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
            <span className="section-eyebrow">Certification Programs</span>
            <h2 className="section-title">
              Industry-Endorsed <span>Medical Coding Courses</span>
            </h2>
            <p className="section-desc">
              Prepare for world-class credentials with AAPC and AHIMA approved syllabi designed for high first-attempt success.
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
            <span className="section-eyebrow">Flexible Options</span>
            <h2 className="section-title">
              Learning Formats Across <span>Kerala</span>
            </h2>
            <p className="section-desc">
              Study directly in our physical classrooms in Kochi & Trivandrum or join live interactive classes from anywhere in Kerala.
            </p>
          </div>

          <div className="modes-grid">
            <div className="mode-card">
              <div className="mode-icon">🏫</div>
              <h3 className="mode-title">Classroom in Kochi & Trivandrum</h3>
              <p className="mode-desc">
                In-person interactive learning with physical code books, lab assignments, dedicated mentor coaching, and on-campus interview drives.
              </p>
            </div>
            <div className="mode-card">
              <div className="mode-icon">💻</div>
              <h3 className="mode-title">Live Online (All Districts)</h3>
              <p className="mode-desc">
                Interactive real-time classes for students across Kozhikode, Thrissur, Kollam, Kottayam, and Kannur with live questions and recorded backups.
              </p>
            </div>
            <div className="mode-card">
              <div className="mode-icon">🌙</div>
              <h3 className="mode-title">Evening & Weekend Batches</h3>
              <p className="mode-desc">
                Convenient batch timings for staff nurses, pharmacy graduates, and hospital administration professionals looking to upskill without pausing work.
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
              Our Kerala Alumni Are Hired By <span>Leading Healthcare MNCs</span>
            </h2>
            <p className="section-desc">
              Strong recruitment pipelines with domestic and international hospital networks and healthcare IT leaders.
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
              Frequently Asked Questions - <span>Kerala</span>
            </h2>
            <p className="section-desc">
              Clear answers regarding courses, placement assistance, and global opportunities for Kerala students.
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
                Ready to Start Your Medical Coding Journey in Kerala?
              </h2>
              <p className="cta-banner-desc">
                Join our upcoming batch at Kochi or Trivandrum, or enroll in our live online classroom. Free counseling and trial session available.
              </p>
              <div className="cta-banner-actions">
                <button onClick={() => setIsOpen(true)} className="btn-cta-white">
                  Book Free Demo Class
                </button>
                <a href="https://wa.me/919048023242?text=Hi%20ThoughtFlows,%20I%20am%20interested%20in%20Medical%20Coding%20Training%20in%20Kerala" target="_blank" rel="noopener noreferrer" className="btn-cta-ghost">
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

export default KeralaLanding;
