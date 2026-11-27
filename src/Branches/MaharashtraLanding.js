import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Laptop,
  MapPin,
  MessageCircle,
  Phone,
  School,
  Sparkles,
} from 'lucide-react';
import Meta from '../Meta';
import { PopupContext } from '../context/PopupContext';
import './MaharashtraLanding.css';
import BranchLuxBanner from './common/BranchLuxBanner';
import { LuxScope, LuxSection, LuxHead, LuxValues } from './common/LuxSections';
import AI_INTERIORS from './common/aiInteriors';

const puneImg = AI_INTERIORS.pune[0];
const kolhapurImg = AI_INTERIORS.kolhapur[0];

const MaharashtraLanding = () => {
  const { setIsOpen } = useContext(PopupContext);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const campuses = [
    {
      name: 'Pune Campus',
      badge: 'IT & Healthcare Hub',
      address:
        '1st floor, Trios, Indialand Global Tech Park, Phase 1, Rajiv Gandhi Infotech Park, Hinjawadi, Maharashtra 411057',
      phone: '072195 57734',
      path: '/medical-coding-course-pune',
      img: puneImg,
      features: [
        'Proximity to Hinjawadi IT Park Phase 1',
        'Modern Multimedia Coding Systems',
        'Expert AAPC Certified Trainers',
        'Regular & Fast-Track Batches',
      ],
    },
    {
      name: 'Kolhapur Campus',
      badge: 'Western Maharashtra Hub',
      address:
        'Genesis group of institutions - Near Gaibi Titta, Radhanagari Road, opposite to Mahadik Petrol Pump, Tal - Radhanagari, Dist - Kolhapur, PIN-416212',
      phone: '083904 52121 / 072195 57734',
      path: '/Medical-Coding-Training-Kolhapur',
      img: kolhapurImg,
      features: [
        'Easily accessible from Sangli & Satara',
        'Dedicated Practical Computer Lab',
        'Marathi, Hindi & English Mentorship',
        '100% Placement Support & Interview Prep',
      ],
    },
  ];

  const courses = [
    {
      name: 'AAPC CPC® Certification',
      org: 'AAPC USA',
      desc: 'Gold standard professional coding qualification covering ICD-10-CM, CPT, and HCPCS code sets with real charts.',
      duration: '3 - 4 Months',
      path: '/cpc',
    },
    {
      name: 'CIC® Hospital Inpatient Coding',
      org: 'AAPC USA',
      desc: 'Specialized training for acute care and inpatient facility records focusing on IP-DRG and ICD-10-PCS.',
      duration: '2 - 3 Months',
      path: '/cic',
    },
    {
      name: 'COC® Hospital Outpatient Coding',
      org: 'AAPC USA',
      desc: 'Master outpatient encounters, ambulatory surgical centers, and APC payment structures.',
      duration: '2 - 3 Months',
      path: '/coc',
    },
    {
      name: 'CRC® Risk Adjustment',
      org: 'AAPC USA',
      desc: 'High-growth domain mastering HCC models, chronic conditions, and Medicare Advantage risk calculations.',
      duration: '2 Months',
      path: '/crc',
    },
    {
      name: 'AHIMA CCS® Master Track',
      org: 'AHIMA USA',
      desc: 'In-depth clinical data coding recognized by global hospital groups and healthcare IT enterprises.',
      duration: '3 - 4 Months',
      path: '/ccs',
    },
    {
      name: 'Specialty Surgical & ED Coding',
      org: 'Specialty Level',
      desc: 'Advanced modules for experienced and fresh coders handling surgical specialties, E/M, and acute trauma.',
      duration: '1 - 2 Months',
      path: '/surgery',
    },
  ];

  const whyChoose = [
    {
      icon: Building2,
      title: "Western India's Healthcare IT Boom",
      text: 'Pune and Mumbai represent the fastest expanding market for US healthcare analytics, revenue cycle management, and health informatics.',
    },
    {
      icon: MapPin,
      title: 'Campuses in Pune & Kolhapur',
      text: 'Conveniently located training centers providing direct access for students across Western Maharashtra.',
    },
    {
      icon: Sparkles,
      title: 'Multilingual Mentorship Support',
      text: 'Trainers explain complex medical terminology, anatomical guidelines, and coding scenarios in Marathi, Hindi, and English.',
    },
    {
      icon: Briefcase,
      title: '100% Placement Record',
      text: 'Dedicated recruitment drives with top healthcare IT companies in Pune (Hinjawadi, Magarpatta, Kharadi) and Mumbai.',
    },
    {
      icon: Laptop,
      title: 'Live Online Throughout Maharashtra',
      text: 'Students from Mumbai, Nagpur, Nashik, Aurangabad, Sangli, and Solapur can access high-definition live interactive sessions.',
    },
    {
      icon: BookOpen,
      title: 'Genuine Clinical Chart Practice',
      text: 'Analyze and code over 1,200+ actual patient charts to gain job-ready confidence before attending MNC technical interviews.',
    },
  ];

  const studyModes = [
    {
      icon: School,
      title: 'Classroom in Pune & Kolhapur',
      text: 'In-person interactive learning with personal mentor attention, physical code book exercises, and daily chart practice sessions.',
    },
    {
      icon: Laptop,
      title: 'Live Online (All Districts)',
      text: 'Interactive real-time classes for students across Mumbai, Nagpur, Nashik, Aurangabad, and Solapur with digital coding portals and live Q&A.',
    },
    {
      icon: Clock,
      title: 'Weekend & Working Executive Batches',
      text: 'Specially arranged batches on Saturdays and Sundays for working nurses, pharmacy executives, and healthcare staff looking to upskill.',
    },
  ];

  const faqs = [
    {
      q: 'Where are ThoughtFlows campuses in Maharashtra?',
      a: 'ThoughtFlows operates two prime centers in Maharashtra: Pune (Hinjawadi Phase 1) and Kolhapur (Genesis Group of Institutions, Radhanagari Road). We also offer live interactive online classes for students across Mumbai, Nashik, Nagpur, Aurangabad, and other cities.',
    },
    {
      q: 'What career opportunities exist for medical coders in Maharashtra?',
      a: 'Maharashtra has a booming healthcare BPO/KPO and analytics sector. Top MNCs like GeBBS, Cognizant, Wipro, Omega Healthcare, and Optum have major operations in Pune and Navi Mumbai, offering substantial starting salaries and rapid promotion tracks for AAPC certified coders.',
    },
    {
      q: 'Who is eligible to join the medical coding course in Maharashtra?',
      a: 'Graduates and post-graduates in Life Sciences, B.Pharmacy/M.Pharmacy, Nursing, Biotechnology, Microbiology, Biochemistry, Physiotherapy, B.Sc/M.Sc, and Allied Health Sciences are prime candidates. Candidates with non-science degrees can also join through our foundational Medical Terminology training.',
    },
    {
      q: 'Are the lectures conducted in Marathi or Hindi?',
      a: 'While the examination and official curriculum are in English, our instructors explain complex concepts with Marathi and Hindi support, ensuring that all students thoroughly understand clinical logic and coding rules without language barriers.',
    },
    {
      q: 'Does ThoughtFlows offer placement support in Maharashtra?',
      a: 'Yes! We provide 100% placement support. Our placement team arranges campus interviews, technical mock assessments, and resume preparation with leading healthcare MNCs across Pune, Mumbai, Bangalore, and Hyderabad until you secure a job.',
    },
  ];

  const hiringPartners = [
    'GeBBS Healthcare',
    'Cognizant Pune',
    'Omega Healthcare',
    'Wipro Healthcare',
    'Optum / UnitedHealth',
    'Access Healthcare',
    'CorroHealth',
    'Episource',
    'Tech Mahindra',
    'Carelon',
  ];

  return (
    <div className="mh-landing">
      <Meta
        title="Medical Coding Course in Maharashtra | ThoughtFlows"
        description="Medical coding course in Maharashtra at ThoughtFlows — CPC & CCS certification with AAPC-certified trainers, live chart practice and placement support."
        canonical="https://www.thoughtflows.in/maharashtra"
      />

      {/* Hero Section */}
      <BranchLuxBanner
        location="Maharashtra – Pune · Kolhapur"
        titleLead="Medical Coding Course"
        accent="Maharashtra"
        subTitle="CPC & CCS Training"
        heroImage={AI_INTERIORS.maharashtra[0]}
        heroAlt="ThoughtFlows Medical Coding Academy Maharashtra campus interior"
        badgeTitle="2 Branches in Maharashtra"
        badgeText="Pune · Kolhapur"
        phone="072195 57734"
        phoneHref="tel:+917219557734"
        stripHeading="Our Branches"
        campus={[
          { img: AI_INTERIORS.pune[0], label: 'Pune', alt: 'ThoughtFlows Pune branch', to: '/medical-coding-course-pune' },
          { img: AI_INTERIORS.kolhapur[0], label: 'Kolhapur', alt: 'ThoughtFlows Kolhapur branch', to: '/Medical-Coding-Training-Kolhapur' },
          { img: AI_INTERIORS.maharashtra[1], label: 'Practical Training', alt: 'Maharashtra practical medical coding training' },
          { img: AI_INTERIORS.maharashtra[2], label: 'Modern Classrooms', alt: 'Maharashtra medical coding classroom' },
        ]}
        locationLabel="Pune · Kolhapur"
        exploreTo="#campuses"
        exploreLabel="Explore Maharashtra Branches"
      />

      <LuxScope>
        {/* Campuses Section */}
        <LuxSection tone="light" id="campuses">
          <LuxHead
            eyebrow="Our Training Centers"
            title="Choose Your Nearest"
            accent="Campus in Maharashtra"
            intro="Whether you are in Pune or Western Maharashtra, our modern learning hubs offer advanced coding labs, expert faculty, and structured job preparation."
          />

          <div className="mh-campus-grid">
            {campuses.map((campus) => (
              <div className="mh-campus-card" key={campus.name}>
                <div className="mh-campus-media">
                  <img src={campus.img} alt={`ThoughtFlows ${campus.name}`} loading="lazy" decoding="async" />
                  <span className="mh-campus-badge">{campus.badge}</span>
                </div>
                <div className="mh-campus-body">
                  <h3 className="mh-campus-title">{campus.name}</h3>
                  <div className="mh-campus-location">
                    <MapPin size={18} />
                    <span>{campus.address}</span>
                  </div>
                  <ul className="mh-campus-features">
                    {campus.features.map((feat) => (
                      <li key={feat}>
                        <CheckCircle2 size={16} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mh-campus-footer">
                    <Link to={campus.path} className="mh-explore-btn">
                      Explore Campus <ArrowRight size={15} />
                    </Link>
                    <a
                      href={`tel:${campus.phone.split('/')[0].replace(/\s+/g, '').replace(/^0/, '+91')}`}
                      className="mh-phone-link"
                    >
                      <Phone size={15} /> {campus.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </LuxSection>

        {/* Why Choose Section */}
        <LuxSection tone="tint">
          <LuxHead
            eyebrow="The ThoughtFlows Advantage"
            title="Why Students in Maharashtra Choose"
            accent="ThoughtFlows"
            intro="We provide practical, industry-focused training that turns fresh life science graduates and healthcare workers into certified, high-earning medical coders."
          />
          <LuxValues items={whyChoose} />
        </LuxSection>

        {/* Courses Offered */}
        <LuxSection tone="light">
          <LuxHead
            eyebrow="Our Programs"
            title="Industry-Standard"
            accent="Medical Coding Certifications"
            intro="Comprehensive curricula aligned with latest AAPC and AHIMA guidelines for high exam success and technical job interviews."
          />
          <div className="mh-courses-grid">
            {courses.map((course) => (
              <div className="mh-course-card" key={course.name}>
                <span className="mh-course-org">{course.org}</span>
                <h3 className="mh-course-name">{course.name}</h3>
                <p className="mh-course-desc">{course.desc}</p>
                <div className="mh-course-meta">
                  <span className="mh-meta-tag">
                    <Clock size={13} /> {course.duration}
                  </span>
                  <span className="mh-meta-tag">Classroom / Online</span>
                </div>
                <Link to={course.path} className="mh-course-link">
                  View Syllabus <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </LuxSection>

        {/* Learning Modes */}
        <LuxSection tone="tint">
          <LuxHead
            eyebrow="Study Options"
            title="Flexible Learning Across"
            accent="Maharashtra"
            intro="Attend classroom sessions at Pune or Kolhapur, or join live digital classes from anywhere in the state."
          />
          <LuxValues items={studyModes} />
        </LuxSection>

        {/* Hiring Partners */}
        <LuxSection tone="light">
          <LuxHead
            eyebrow="Placement Network"
            title="Leading Healthcare MNCs Hiring"
            accent="Our Coders"
            intro="Direct campus hiring associations with top IT and healthcare business process leaders across Western India."
          />
          <div className="mh-partners">
            {hiringPartners.map((partner) => (
              <span className="mh-partner-pill" key={partner}>
                {partner}
              </span>
            ))}
          </div>
        </LuxSection>

        {/* FAQ Section */}
        <LuxSection tone="tint">
          <LuxHead
            eyebrow="Got Questions?"
            title="Frequently Asked Questions –"
            accent="Maharashtra"
            intro="Answers to common queries regarding admissions, certifications, and job placements in Maharashtra."
          />
          <div className="mh-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div className={`mh-faq-item ${isOpen ? 'open' : ''}`} key={faq.q}>
                  <button
                    type="button"
                    className="mh-faq-btn"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="mh-faq-q">{faq.q}</h3>
                    <span className="mh-faq-toggle" aria-hidden="true">
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  {isOpen && <div className="mh-faq-a">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </LuxSection>

        {/* Bottom CTA Banner */}
        <LuxSection tone="light">
          <div className="mh-cta-box">
            <h2>Start Your Medical Coding Career in Maharashtra</h2>
            <p>
              Attend a free demo session at our Pune or Kolhapur campus, or join our live interactive online trial
              class today.
            </p>
            <div className="mh-cta-actions">
              <button type="button" onClick={() => setIsOpen(true)} className="mh-btn-gold">
                Book Free Demo Class
              </button>
              <a
                href="https://wa.me/919384576852?text=Hi%20ThoughtFlows,%20I%20am%20interested%20in%20Medical%20Coding%20Training%20in%20Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="mh-btn-outline"
              >
                <MessageCircle size={17} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </LuxSection>
      </LuxScope>
    </div>
  );
};

export default MaharashtraLanding;
