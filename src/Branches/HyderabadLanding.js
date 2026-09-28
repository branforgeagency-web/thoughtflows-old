import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../Meta';
import { PopupContext } from '../context/PopupContext';
import './HyderabadLanding.css';

import hydHeroImg from '../images/Hyderabad/hyderabad_hero.jpg';
import ameerpetImg from '../images/Hyderabad/ameerpet_campus.jpg';
import dilsukhnagarImg from '../images/Hyderabad/dilsukhnagar_campus.jpg';
import placementImg from '../images/Hyderabad/placement_success.jpg';

const HyderabadLanding = () => {
  const { setIsOpen } = useContext(PopupContext);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const campuses = [
    {
      name: "Ameerpet Campus",
      tagline: "Trusted Medical Coding Academy Ameerpet",
      badge: "Metro Interchange Hub",
      address: "Level 6 (5th Floor), Vasavi MPM Grand, No: 606/A, Ameerpet X Road, Yella Reddy Guda, Hyderabad, Telangana - 500073",
      phone: "+91 87907 51742",
      path: "/Trusted-Medical-Coding-Ameerpet",
      img: ameerpetImg,
      features: [
        "Directly at Ameerpet Metro Interchange",
        "Modern Digital Classrooms & Latest Coding Software",
        "Morning, Evening & Weekend Batches",
        "Dedicated CPC Trainers & Placement Assistance"
      ]
    },
    {
      name: "Dilsukhnagar Campus",
      tagline: "Professional Medical Coding Dilsukhnagar",
      badge: "South Hyderabad Metro Hub",
      address: "H.No: 16, Sai Towers, 11-477/6/1/A, 2nd Floor, opp. Pillar No: 1519, Indira Nagar, Dilsukhnagar, Hyderabad, Telangana - 500102",
      phone: "+91 90305 08844",
      path: "/Professional-Medical-Coding-Dilsukhnagar",
      img: dilsukhnagarImg,
      features: [
        "Opposite Metro Pillar 1519 with quick transit",
        "Real-Time Practice on ICD-10, CPT & HCPCS",
        "Flexible Shift Timings & EMI Options",
        "100% Placement Support & Interview Coaching"
      ]
    }
  ];

  const coreValues = [
    {
      icon: "🔥",
      title: "Passion",
      desc: "Medical coding isn't just a subject for us, it's a craft we genuinely enjoy teaching. That energy in the classroom is a big part of why students choose our medical coding institute in Hyderabad."
    },
    {
      icon: "🤝",
      title: "Loyalty",
      desc: "The relationship we develop with our learners does not end with the final exam. We appreciate that our alumni contact us from time to time for guidance."
    },
    {
      icon: "🎯",
      title: "Commitment",
      desc: "We don't leave any student behind regardless of their experience level. We offer comprehensive support to all students whether they are preparing for the CPC exams or require assistance in basic concepts."
    },
    {
      icon: "🛡️",
      title: "Responsibility",
      desc: "Your career will always be important to us. We will always ensure that you attain the knowledge and skills needed to excel in this industry. This means we have to be accountable for the methods we use to teach you and how efficient those methods are."
    },
    {
      icon: "⚖️",
      title: "Consistency",
      desc: "Every batch, every branch, the same standard. Our medical coding training in Hyderabad delivers the same quality whether you study in Ameerpet or Dilsukhnagar, year after year."
    }
  ];

  const faqs = [
    {
      q: "1. Who can join your medical coding training in Hyderabad?",
      a: "We welcome students and professionals from life sciences, nursing and pharmacy and all paramedical fields to apply. Previous programming experience is not needed and this is open to all at any stage of their career."
    },
    {
      q: "2. Where are your branches located?",
      a: "We have two locations in Hyderabad, Ameerpet and Dilsukhnagar. Our branches are very near to each other and both are equally good in terms of training and courses offered. You can pick the one that is convenient to you."
    },
    {
      q: "3. Do you help with CPC certification?",
      a: "Yes. We help you prepare for the CPC and CCS exams. We provide coaching, and help with case question practice and mock tests."
    },
    {
      q: "4. What batch timings are available?",
      a: "We have batches in the morning, evening and on the weekend at both our centers. Choose the batch that works best for your work, study or life schedule."
    },
    {
      q: "5. Do you provide placement support?",
      a: "Yes. As a trusted medical coding institute in Hyderabad, we help every student with resume building, interview practice, and connections to real job openings with hospitals and coding companies."
    },
    {
      q: "6. Are EMI options available for the course fee?",
      a: "Yes. Our fees are low, and we have flexible EMI options, allowing you to pay in parts. This reduces the hassle of a large, one-time payment. To get the full details on our fees, visit our Ameerpet or Dilsukhnagar branches."
    }
  ];

  return (
    <div className="hyd-landing">
      <Meta 
        title="Medical Coding Institute in Hyderabad | Ameerpet & Dilsukhnagar | ThoughtFlows"
        description="Our faculty, course materials, and job placement support make our branches in Ameerpet and Dilsukhnagar the best choice for medical coding training in Hyderabad."
        canonical="https://www.thoughtflows.in/hyderabad"
      />

      {/* =========================================================
          1. HERO SECTION WITH AI-GENERATED HEALTHCARE WORKSTATION
          ========================================================= */}
      <section className="hyd-hero">
        <div className="hyd-container">
          <div className="hyd-hero-grid">
            <div className="hyd-hero-content">
              <div className="hyd-breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Branches</span>
                <span>/</span>
                <span style={{ color: '#0f172a', fontWeight: 600 }}>Hyderabad</span>
              </div>
              
              <div className="hyd-hero-badge">
                ✨ From Beginner to Certified
              </div>
              
              <h1 className="hyd-hero-title">
                Medical Coding Institute in <span className="hyd-gradient-text">Hyderabad</span>
              </h1>
              
              <p className="hyd-hero-subtitle">
                Our faculty, course materials, and job placement support make our branches in Ameerpet and Dilsukhnagar the best choice for medical coding training in Hyderabad.
              </p>

              <div className="hyd-hero-actions">
                <a href="#campuses" className="hyd-btn-primary">
                  Explore Ameerpet & Dilsukhnagar &darr;
                </a>
                <button onClick={() => setIsOpen(true)} className="hyd-btn-secondary">
                  Enquire for Free Demo
                </button>
              </div>

              <div className="hyd-hero-stats">
                <div>
                  <div className="hyd-stat-num">2</div>
                  <div className="hyd-stat-label">Hyderabad Centers</div>
                </div>
                <div>
                  <div className="hyd-stat-num">100%</div>
                  <div className="hyd-stat-label">Placement Support</div>
                </div>
                <div>
                  <div className="hyd-stat-num">CPC & CCS</div>
                  <div className="hyd-stat-label">Certification Prep</div>
                </div>
                <div>
                  <div className="hyd-stat-num">Easy EMI</div>
                  <div className="hyd-stat-label">Affordable Options</div>
                </div>
              </div>
            </div>

            {/* Visual with AI Generated Medical Coding Workstation */}
            <div className="hyd-hero-visual">
              <div className="hyd-visual-wrapper">
                <img 
                  src={hydHeroImg} 
                  alt="ThoughtFlows Medical Coding Institute in Hyderabad - Real-time Workstation Practice" 
                />
                <div className="hyd-floating-badge badge-top">
                  <div className="hyd-badge-icon">🎯</div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Certification Success</div>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>98.4% CPC Pass Rate</div>
                  </div>
                </div>
                <div className="hyd-floating-badge badge-bottom">
                  <div className="hyd-badge-icon">💼</div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Dedicated Careers</div>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>100% Placement Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. CAMPUSES HUB SECTION (Ameerpet & Dilsukhnagar)
          ========================================================= */}
      <section className="hyd-section" id="campuses">
        <div className="hyd-container">
          <div className="hyd-head-center">
            <span className="hyd-eyebrow">Our Hyderabad Branches</span>
            <h2 className="hyd-title">
              Our Centers at <span>Ameerpet & Dilsukhnagar</span>
            </h2>
            <p className="hyd-desc">
              Choose the branch that is most convenient for your commute. Both centers provide the exact same high standard of training and job support.
            </p>
          </div>

          <div className="hyd-campus-grid">
            {campuses.map((campus, idx) => (
              <div className="hyd-campus-card" key={idx}>
                <div className="hyd-campus-img-wrap">
                  <img src={campus.img} alt={`ThoughtFlows ${campus.name}`} />
                  <span className={`hyd-campus-hub-badge ${idx === 0 ? 'highlight' : ''}`}>{campus.badge}</span>
                </div>
                <div className="hyd-campus-body">
                  <h3 className="hyd-campus-title">{campus.name}</h3>
                  <div className="hyd-campus-tagline">{campus.tagline}</div>
                  <div className="hyd-campus-address">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#097D8A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{campus.address}</span>
                  </div>

                  <ul className="hyd-campus-features">
                    {campus.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <span className="hyd-check-circle">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="hyd-campus-footer">
                    <Link to={campus.path} className="hyd-explore-btn">
                      Explore Branch &rarr;
                    </Link>
                    <a href={`tel:${campus.phone.replace(/\s+/g, '')}`} className="hyd-call-link">
                      📞 {campus.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. WHY CHOOSE SECTION & BATCH TIMINGS
          ========================================================= */}
      <section className="hyd-section bg-alt">
        <div className="hyd-container">
          <div className="hyd-head-center">
            <span className="hyd-eyebrow">Why Choose Us</span>
            <h2 className="hyd-title">
              Why Choose Our Medical Coding Institute in <span>Hyderabad?</span>
            </h2>
            <p className="hyd-desc" style={{ maxWidth: '880px', margin: '0 auto', fontSize: '16.5px' }}>
              There are several things that shape your career. We understand this at our Ameerpet and Dilsukhnagar branches. With this understanding, we have patterned our training at Hyderabad's Medical Coding Training Institute with your professional growth. We employ experienced CPC trainers. We provide the latest and adequate training infrastructure. As part of our placement training, we provide training and certification at subsidized rates. We also provide training during weekdays and weekends. We are committed to professionally developing you from the basic level to a stage where you are competent and confident to handle the profession.
            </p>
          </div>

          <div className="hyd-why-grid">
            <div className="hyd-why-card">
              <div className="hyd-why-icon-box">🖥️</div>
              <h3 className="hyd-why-card-title">Train the Way You'll Actually Work, at Our Ameerpet & Dilsukhnagar Centers</h3>
              <p className="hyd-why-card-text">
                We understand what makes an ideal learning environment. Our Hyderabad campus is built with this knowledge. Our branches have digital classrooms. We provide latest coding software, and the latest versions of ICD-10, CPT and HCPCS. We perform medical coding in a limited group environment. Our students get the opportunity to code in a realistic environment. So, if you are interested in learning medical coding, our coding institute in Hyderabad is definitely worth checking out.
              </p>
            </div>

            <div className="hyd-why-card">
              <div className="hyd-why-icon-box">📖</div>
              <h3 className="hyd-why-card-title">Explore a Curriculum That Covers It All</h3>
              <p className="hyd-why-card-text">
                Our course provides the comprehensive medical coding training you've been searching for. Through hands-on medical coding training in Hyderabad at our Ameerpet and Dilsukhnagar branches, you'll cover everything that matters: coding systems and guidelines, healthcare documentation, and reimbursement methodologies. Most important, we offer you the opportunity to learn in a structured environment and give you the confidence to pursue a rewarding career in medical coding.
              </p>
            </div>

            <div className="hyd-why-card">
              <div className="hyd-why-icon-box">👨‍⚕️</div>
              <h3 className="hyd-why-card-title">Learn From Faculty Who've Done the Job</h3>
              <p className="hyd-why-card-text">
                We know trainers are important. That’s why ours are medical coders. They have years of experience in the field and in the classroom. Our staff at both our Ameerpet and Dilsukhnagar locations use their real world knowledge and experience to develop constructive and positive mentorships with their students. This allows students to develop a true understanding of medical coding rather than theoretical knowledge.
              </p>
            </div>

            <div className="hyd-why-card">
              <div className="hyd-why-icon-box">🌱</div>
              <h3 className="hyd-why-card-title">A Learning Environment Built Around You</h3>
              <p className="hyd-why-card-text">
                Great training needs the right setting. As a trusted medical coding institute in Hyderabad, In a positive and motivated environment, our Ameerpet and Dilsukhnagar classrooms foster the development of coding skills. Our students learn concepts and build skills that help them increase their speed and efficiency in coding. Our students feel prepared to participate and excel in various coding competitions.
              </p>
            </div>
          </div>

          {/* Batch Timings That Fit Your Life */}
          <div className="hyd-timings-card">
            <h3 style={{ fontSize: '23px', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>
              Batch Timings That Fit Your Life
            </h3>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', margin: '0 0 16px' }}>
              We know how busy life can be, and we want to help you achieve your goals with our medical coding training in Hyderabad. That’s why we have training available at multiple locations and times. Our goal is to help you succeed regardless of your other obligations. We have classes at our Ameerpet and Dilsukhnagar locations:
            </p>
            
            <div className="hyd-timings-grid">
              <div className="hyd-timing-item">
                <strong>🌅 Morning Batches</strong>
                <span>For full-time learners seeking dedicated daytime training</span>
              </div>
              <div className="hyd-timing-item">
                <strong>🌆 Evening Batches</strong>
                <span>Tailored for working professionals after regular office hours</span>
              </div>
              <div className="hyd-timing-item">
                <strong>📅 Weekend Batches</strong>
                <span>Convenient schedules for busy weekday commitments</span>
              </div>
            </div>

            <div className="hyd-timing-note">
              <span style={{ fontSize: '20px' }}>💡</span>
              <span><strong>Affordable Fees & EMI Options:</strong> Quality training remains well within your reach. Share your availability and preferred branch, and we'll help you select the ideal batch.</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. OUR CORE VALUES
          ========================================================= */}
      <section className="hyd-section">
        <div className="hyd-container">
          <div className="hyd-head-center">
            <span className="hyd-eyebrow">Our Core Values</span>
            <h2 className="hyd-title">
              The Principles Behind <span>Every Class</span>
            </h2>
            <p className="hyd-desc">
              The right mindset forms the basis of great training. From the first day of training to placement, our mentors and faculty members at both Ameerpet and Dilsukhnagar branches adopt an values-based approach towards training and development.
            </p>
          </div>

          <div className="hyd-values-grid">
            {coreValues.map((val, idx) => (
              <div className="hyd-value-card" key={idx}>
                <div className="hyd-value-icon">{val.icon}</div>
                <h3 className="hyd-value-title">{val.title}</h3>
                <p className="hyd-value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. LEARNING & PLACEMENT PILLARS (WITH AI PLACEMENT VISUAL)
          ========================================================= */}
      <section className="hyd-section bg-alt">
        <div className="hyd-container">
          {/* Spotlight Visual Card */}
          <div className="hyd-spotlight-banner">
            <div className="hyd-spotlight-content">
              <span className="hyd-spotlight-tag">Placement & Certification Excellence</span>
              <h2 className="hyd-spotlight-title">
                Certified Coders. Proven Careers Across Leading Healthcare Giants.
              </h2>
              <p className="hyd-spotlight-text">
                From basic anatomy and terminology to solving complex patient charts, our Hyderabad graduates clear the CPC exam on their very first attempt and step into reputed hospitals, MNCs, and healthcare RCM leaders.
              </p>
              <button onClick={() => setIsOpen(true)} className="hyd-btn-primary">
                Join Next Hyderabad Batch &rarr;
              </button>
            </div>
            <div className="hyd-spotlight-img-wrap">
              <img 
                src={placementImg} 
                alt="ThoughtFlows Hyderabad Medical Coding Certification and Placement Success" 
              />
            </div>
          </div>

          <div className="hyd-head-center">
            <span className="hyd-eyebrow">Comprehensive Training</span>
            <h2 className="hyd-title">
              How We Prepare You for a <span>Rewarding Career</span>
            </h2>
          </div>

          <div className="hyd-pillars-grid">
            <div className="hyd-pillar-card">
              <span className="hyd-pillar-badge">Hands-On Training</span>
              <h3 className="hyd-pillar-title">Learn by Practising Real Coding</h3>
              <p className="hyd-pillar-text">
                The best way to learn medical coding is to practice it. Our medical coding institute in hyderabad provides first-hand, practical sessions with real patient case records and charts. Participants at our centers at Ameerpet and Dilsukhnagar get lots of take home assignments including case studies and projects that build up their competency to work as medical coders.
              </p>
            </div>

            <div className="hyd-pillar-card">
              <span className="hyd-pillar-badge">Exam Success</span>
              <h3 className="hyd-pillar-title">Get Ready for Your Certification</h3>
              <p className="hyd-pillar-text">
                A certification helps you stand out to potential employers, and we help you with the prep for the most sought-after certifications like the CPC and CCS. Our unique approach of training, which includes one-on-one training and multiple practice tests, will help build your confidence while preparing you for the coding exam.
              </p>
            </div>

            <div className="hyd-pillar-card">
              <span className="hyd-pillar-badge">Career Placement</span>
              <h3 className="hyd-pillar-title">We Help You Find a Job</h3>
              <p className="hyd-pillar-text">
                The goal of this medical coding course is to help you land a coding job. As the best medical coding institute in Hyderabad, we provide placement assistance to all of our students at our Ameerpet and Dilsukhnagar centers. We have industry partnerships with coding and hospital companies for employment opportunities. Additionally, our career development team provides individual coaching to improve your resume, prepare you for interviews, and enhance your job search. As a result, you will walk away with a job and not just a piece of paper.
              </p>
            </div>

            <div className="hyd-pillar-card">
              <span className="hyd-pillar-badge">Up-To-Date Curriculum</span>
              <h3 className="hyd-pillar-title">Always Learn the Latest Codes</h3>
              <p className="hyd-pillar-text">
                New medical coding rules and codes are released annually. Therefore, changes are made to our course content. We ensure our learners don’t study outdated coding manuals. We provide the latest versions of ICD-10, CPT and HCPCS codes. We teach the latest coding rules and practices at our Ameerpet and Dilsukhnagar training center.
              </p>
            </div>

            <div className="hyd-pillar-card">
              <span className="hyd-pillar-badge">Proven Track Record</span>
              <h3 className="hyd-pillar-title">Our Students' Success Stories</h3>
              <p className="hyd-pillar-text">
                Our students demonstrate the excellence of our training programs. Some students had no previous experience with coding and, with us, successfully completed their CPC exams and landed their first jobs. Their success is why people call us one of the best medical coding institutes in Hyderabad. Review the stories below and imagine where your medical coding career could go after our coding training in Hyderabad.
              </p>
            </div>

            <div className="hyd-pillar-card">
              <span className="hyd-pillar-badge">Flexible Payments</span>
              <h3 className="hyd-pillar-title">Affordable Fees With Easy EMI</h3>
              <p className="hyd-pillar-text">
                We know you have a lot of options when it comes to your medical coding training. You have many things to consider when choosing the right course for you, especially your time and money. This is why we try our best to keep our prices fair, and allow flexible payments. We also give our students the option of paying via Equated Monthly Installments (EMI). This way the cost of the course is broken down to a more manageable amount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. FAQ ACCORDION SECTION
          ========================================================= */}
      <section className="hyd-section">
        <div className="hyd-container">
          <div className="hyd-head-center">
            <span className="hyd-eyebrow">Got Questions?</span>
            <h2 className="hyd-title">
              Frequently Asked Questions
            </h2>
            <p className="hyd-desc">
              Clear answers to the most common questions about our medical coding training at Ameerpet and Dilsukhnagar.
            </p>
          </div>

          <div className="hyd-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div className={`hyd-faq-item ${isOpen ? 'active' : ''}`} key={idx}>
                  <button 
                    className="hyd-faq-btn"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="hyd-faq-q">{faq.q}</h3>
                    <span className="hyd-faq-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="hyd-faq-answer">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          7. BOTTOM CTA BANNER
          ========================================================= */}
      <section className="hyd-section" style={{ paddingTop: 0 }}>
        <div className="hyd-container">
          <div className="hyd-cta-card">
            <div className="hyd-cta-inner">
              <h2 className="hyd-cta-title">
                Got Questions? Talk to Us
              </h2>
              <p className="hyd-cta-desc">
                Picking the right course is a big decision, and we're here to help you make it. As a trusted medical coding institute in Hyderabad, we'll answer all your questions honestly, whether they're about the course, fees, batch timings, certifications, or placements. Visit our Ameerpet or Dilsukhnagar branch, or call us for clear answers and friendly guidance. Take the first step toward your medical coding career today.
              </p>
              <div className="hyd-cta-buttons">
                <button onClick={() => setIsOpen(true)} className="hyd-btn-white">
                  Book Free Demo Class
                </button>
                <a 
                  href="https://wa.me/918790751742?text=Hi%20ThoughtFlows,%20I%20am%20interested%20in%20Medical%20Coding%20Training%20in%20Hyderabad" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hyd-btn-ghost"
                >
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

export default HyderabadLanding;
