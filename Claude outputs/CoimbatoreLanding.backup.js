import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../Meta';
import { PopupContext } from '../context/PopupContext';
import './RegionLanding.css';

import hopesImg from '../images/Branches/cbe_hopes_campus.jpg';
import saravanampattiImg from '../images/Branches/cbe_saravanampatti_campus.jpg';
import gandhipuramImg from '../images/Branches/cbe_gandhipuram_campus.jpg';
import ishaBannerImg from '../images/Branches/isha_coimbatore_banner.jpg';
import handsOnImg from '../images/hands-on.png';
import cpcImg from '../images/cpc.png';
import teachingImg from '../images/Branches/theni-teaching.jpg';
import placementBanner from '../images/Branches/placement banner.jpeg';

const CoimbatoreLanding = () => {
  const { setIsOpen } = useContext(PopupContext);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const eligibilityData = [
    { bg: "B.Sc Nursing, GNM, Post Basic", join: "Yes", statusClass: "badge-yes", expect: "Strongest profile. Clinical reading comes easily" },
    { bg: "B.Pharm, D.Pharm, M.Pharm", join: "Yes", statusClass: "badge-yes", expect: "Very commonly hired, especially for drug-related coding" },
    { bg: "BPT, MPT, Occupational Therapy", join: "Yes", statusClass: "badge-yes", expect: "Good fit for E/M and outpatient coding" },
    { bg: "B.Sc Microbiology, Biochemistry, Biotechnology, Zoology, Botany", join: "Yes", statusClass: "badge-yes", expect: "Standard fresher profile in Coimbatore" },
    { bg: "BDS, BAMS, BHMS, BUMS, BNYS, MBBS", join: "Yes", statusClass: "badge-yes", expect: "Often fast-tracked to IP-DRG or audit roles" },
    { bg: "Paramedical — MLT, Radiology, OT, Dialysis, Anaesthesia Tech", join: "Yes", statusClass: "badge-yes", expect: "Widely accepted" },
    { bg: "B.Sc Nutrition, Dietetics, Psychology, Food Science", join: "Yes", statusClass: "badge-yes", expect: "Accepted by most employers" },
    { bg: "Life science diploma holders", join: "Yes", statusClass: "badge-yes", expect: "Some employers want a degree. We advise before you enrol" },
    { bg: "B.Com, BBA, BA, Engineering", join: "Can be trained", statusClass: "badge-trained", expect: "Fewer openings. Honest conversation before you pay" }
  ];

  const notNeededItems = [
    "A medical degree",
    "Prior coding or billing experience",
    'Any programming knowledge — "coding" here means classification codes, not software',
    "Fluent spoken English. You need to read English clinical notes well. Interviews are mostly written and logic-based"
  ];

  const batchIncludes = [
    "A focus on terminology and anatomy pertinent to medical coding, and taught from a coding perspective",
    "Live chart exercises on sample records (instead of abstract examples)",
    "Practice with selecting the correct level of E/M codes and applying appropriate modifiers",
    "Familiarity with basic elements of HIPAA and practice compliance",
    "Mock Coding Exams under simulated AAPC conditions",
    "Preparing for the job: resumes, interviews and coding simulation"
  ];

  const branches = [
    {
      name: "Saravanampatti",
      title: "Saravanampatti — North Coimbatore and the IT corridor",
      locationDesc: "Our Saravanampatti centre sits on the Sathy Road side of the city, within the stretch that runs past TIDEL Park and the KGISL campus toward Kalapatti and Vilankurichi.",
      profileText: "This branch mostly fills with two groups. Students from the arts and science colleges clustered along this belt — Hindusthan, SNS, Dr. NGP, KPR, Sri Krishna. And people already working in the IT and BPO offices nearby who want a healthcare-side career with fixed shifts. Evening and weekend batches run strongest here for that reason.",
      liveAround: "Saravanampatti, Kalapatti, Vilankurichi, Thudiyalur, Chinnavedampatti, Ganapathy, Keeranatham, Annur or Karamadai side.",
      address: "Door No-171/2A, 1st Floor, Sathy Road, Saravanampatti, Coimbatore - 641035",
      phone: "+91 93845 76852",
      path: "/Top-Medical-Coding-Training-Saravanampatti",
      mapUrl: "https://maps.google.com/?q=ThoughtFlows+Saravanampatti+Coimbatore",
      img: saravanampattiImg
    },
    {
      name: "Hopes (Hope College)",
      title: "Hopes (Hope College) — Peelamedu, Avinashi Road",
      locationDesc: "The Hopes branch is on the Avinashi Road corridor at Peelamedu, near the PSG campus and hospital cluster, a short run from CODISSIA and the airport road.",
      profileText: "Because it sits inside the city's biggest hospital belt, this centre sees the most nurses, lab technicians and pharmacy staff moving out of clinical shift work. Engineering and arts students from PSG, Kumaraguru and Sri Ramakrishna also enrol here. If you are currently on hospital duty and need a batch that fits around a roster, this is the branch to ask at.",
      liveAround: "Peelamedu, Hope College, Nava India, Singanallur, Uppilipalayam, Ramanathapuram, Ondipudur, Sulur or the airport road stretch.",
      address: "Door No.62 E/F, 1st Floor South Wing, Lalitha Towers, Gandhi Street, Avinashi Rd, Coimbatore - 641004",
      phone: "+91 93845 76852",
      path: "/Medical-Coding-Excellence-at-Hopes",
      mapUrl: "https://maps.google.com/?q=ThoughtFlows+Hopes+Coimbatore",
      img: hopesImg
    },
    {
      name: "Gandhipuram",
      title: "Gandhipuram — city centre, best for district commuters",
      locationDesc: "Gandhipuram is the branch for anyone travelling in from outside Coimbatore city. Both the Central and Town bus stands are here, which means almost every mofussil route in the district drops you within walking distance, and Coimbatore Junction is a short auto ride away.",
      profileText: "Students commute to this centre from Pollachi, Mettupalayam, Tirupur, Udumalpet, Annur and Palladam. If you are travelling 40 kilometres or more, take a morning batch here and plan your return around the afternoon buses — our counsellors will help you pick the timing that works.",
      liveAround: "Gandhipuram, Cross Cut Road, RS Puram, Ukkadam, Town Hall, Saibaba Colony, Tatabad, Sivananda Colony — or if you are commuting in from a nearby town.",
      address: "Jay Enclave, 1084, 3rd Street, Cross Cut Road, Gandhipuram, Coimbatore - 641012",
      phone: "+91 93845 76852",
      path: "/Premier-Medical-Coding-Institute-Gandhipuram",
      mapUrl: "https://maps.google.com/?q=ThoughtFlows+Gandhipuram+Coimbatore",
      img: gandhipuramImg
    }
  ];

  const whyChoosePoints = [
    {
      title: "Trainers who have coded for a living.",
      text: "Our faculty are certified coders who have worked on live client accounts, not general science lecturers reading from a module. Ask to meet the trainer for your batch at the demo class. If an institute will not let you do that, that tells you something.",
      icon: "👩‍🏫"
    },
    {
      title: "Capped batch sizes.",
      text: "Coding is learnt by having your charts corrected one by one. That does not happen in a hall of eighty. We hold batches to small, capped limits so every chart you code gets looked at.",
      icon: "👥"
    },
    {
      title: "We take you to the exam, not just to the end of the syllabus.",
      text: "AAPC membership, exam slot booking, the code book editions you need, and what to carry on exam day — the office handles the paperwork side with you rather than leaving you to work out the AAPC portal alone.",
      icon: "📝"
    },
    {
      title: "Mock exams under real conditions.",
      text: "Full-length, timed, with the same book-use rules as the actual CPC paper. Most students fail their first mock. That is the point of running them early.",
      icon: "⏱️"
    },
    {
      title: "Backup classes at no extra cost.",
      text: "Miss a session for a hospital shift, a family function or a bus that did not come — sit the same topic in another batch at any of the three branches.",
      icon: "🔄"
    },
    {
      title: "Placement support that runs past the course end date.",
      text: "Our placement desk keeps working your profile until you are placed, not until your last class. We also run centres outside Tamil Nadu — in Hyderabad at Ameerpet and Dilsukhnagar, and in Kerala — which widens the employer list for anyone open to relocating.",
      icon: "💼"
    }
  ];

  const placementAvenues = [
    "RCM and medical coding companies with Coimbatore delivery centres",
    "Chennai and Bengaluru coding floors that hire Coimbatore freshers in bulk drives",
    "Hospital HIM and billing departments",
    "Insurance and claims processing teams",
    "Remote and hybrid coding roles, which have grown sharply for certified coders"
  ];

  const careerSteps = [
    { title: "Trainee coder", desc: "learning the client account, working under review" },
    { title: "Medical coder", desc: "handling your own chart volume at target accuracy" },
    { title: "Senior / speciality coder", desc: "surgery, IP-DRG, HCC, ED" },
    { title: "Quality analyst or auditor", desc: "checking other coders' work" },
    { title: "Team lead, then coding manager or compliance lead", desc: "leading operational teams and compliance" }
  ];

  const batchTimings = [
    {
      icon: "🌅",
      title: "Morning Batches",
      desc: "For full-time learners seeking dedicated daytime training"
    },
    {
      icon: "🌆",
      title: "Evening Batches",
      desc: "Tailored for working professionals after regular office hours"
    },
    {
      icon: "📅",
      title: "Weekend Batches",
      desc: "Convenient schedules for busy weekday commitments"
    }
  ];

  const faqs = [
    {
      q: "How long is a medical coding course in Coimbatore?",
      a: "The duration depends on your batch type and the month count on its own is not meaningful. Ask for total contact hours. Find out if preparation for the CPC exam is included in the course and how many contact hours are devoted to live charting practice. Two institutes may say “three months” and differ by 100 hours of session time. Our counselor will give you the start date of your chosen batch and the other two figures."
    },
    {
      q: "Can I do medical coding after B.Sc Nursing, B.Pharm or BPT?",
      a: "Yes. Nursing, pharmacy, physiotherapy, paramedical and life science graduates are the most commonly hired profiles in this field. Your clinical reading is an advantage, not a formality."
    },
    {
      q: "Will AI replace medical coders?",
      a: "No, but it will. Coders of the future will analyze and edit code generated by programs. Already, junior coders are tasked with reviewing code outputs generated by automated coding systems for accuracy. As systems become more sophisticated, only senior coders will be able to interpret complicating and mitigating factors, evaluate the correctness of coding decisions and justify them."
    },
    {
      q: "Do I need CPC certification to get a job?",
      a: "Not always, but it changes your starting position. Some companies hire untrained graduates into long stipend-paid training periods; certified candidates usually skip that and start on a higher band. If you can certify before applying, do."
    },
    {
      q: "Which ThoughtFlows branch should I join — Saravanampatti, Hopes or Gandhipuram?",
      a: "Join the one you can reach in under 30 minutes. Saravanampatti suits the north Coimbatore and IT corridor belt, Hopes suits Peelamedu, Avinashi Road and the hospital cluster, and Gandhipuram suits city-centre residents and anyone commuting from Pollachi, Tirupur, Mettupalayam or Udumalpet."
    },
    {
      q: "Are weekend or online classes available?",
      a: "Yes. All three branches run weekend batches for hospital staff and working professionals, and online and hybrid options are available if you cannot travel daily."
    },
    {
      q: "Can final-year students join?",
      a: "Yes. You can begin classes while results are pending, though most employers release offers only after your provisional certificate. Starting three to four months before results is the best timing."
    },
    {
      q: "Is placement guaranteed?",
      a: "No institute can honestly guarantee a job, and you should be cautious of any that does. We provide placement assistance — profile preparation, interview drills and repeated introductions to hiring companies — and the placement desk keeps working with you after the course ends."
    },
    {
      q: "How do I choose a medical coding institute in Coimbatore?",
      a: "Visit a minimum of two centers and ask the following questions at each: can I see my actual trainer? how many students in a batch? do you use actual code and diagrams?, what is the total cost to me? (including books and exam fee) and can I speak to a recent placement (with in the last 6 months)? Any institute that avoids this question, answers negatively."
    },
    {
      q: "Where is the CPC exam held near Coimbatore?",
      a: "AAPC exams are conducted at approved centres and in online proctored format. Our office helps you book the slot and format that suits you — confirm current centre options with the branch, since they change."
    }
  ];

  // Reusable CTA Block Component
  const CtaBlock = () => (
    <div className="compact-cta-box">
      <h3 className="compact-cta-heading">Sit in on a class before you decide</h3>
      <p className="compact-cta-body">
        Free demo sessions run at all three Coimbatore branches — Saravanampatti, Hopes and Gandhipuram. Pick a branch, pick a day, and see the training for yourself.
      </p>
      <div className="compact-cta-buttons">
        <button onClick={() => setIsOpen(true)} className="btn-cta-white">
          Book a Free Demo Class
        </button>
        <a href="tel:+919384576852" className="btn-cta-ghost">
          Call the branch nearest you
        </a>
      </div>
      <div className="compact-cta-numbers">
        Saravanampatti +91 93845 76852 · Hopes +91 93845 76852 · Gandhipuram +91 93845 76852 · WhatsApp +91 93845 76852
      </div>
    </div>
  );

  return (
    <div className="region-landing">
      <Meta 
        title="Medical Coding Classes in Coimbatore | ThoughtFlows"
        description="Located in Saravanampatti, Hopes, and Gandhipuram, we offer in-person medical coding classes in Coimbatore. Trained over 35,000 students and employed over 30,000 of them."
        canonical="https://www.thoughtflows.in/coimbatore"
      />

      {/* Hero / Banner section - Strictly containing ONLY the exact specified banner text */}
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
              <h1 className="region-hero-title">
                Medical Coding Classes in <span>Coimbatore</span>
              </h1>
              <p className="region-hero-subtitle" style={{ fontSize: '16.5px', lineHeight: '1.75', marginBottom: '24px' }}>
                Located in Saravanampatti, Hopes, and Gandhipuram, we offer in-person medical coding classes in Coimbatore. To date, we have trained over 35,000 students and employed over 30,000 of them. Our classes cover ICD-10-CM, CPT, and HCPCS Level II, and help students prepare for the AAPC CPC Certification Exam. The courses are open to students from life sciences, nursing, pharmacy, and allied health professions. Including this course, we offer a host of other services including free demo classes.
              </p>

              {/* Banner Stats Bar */}
              <div style={{ background: '#ffffff', padding: '16px 24px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '0 0 24px 0', fontSize: '15.5px', fontWeight: 700, color: '#097D8A', boxShadow: '0 4px 14px rgba(15,23,42,0.04)' }}>
                35,000+ students trained · 30,000+ students placed · 90 courses · 3 branches in Coimbatore
              </div>

              <div className="region-hero-actions">
                <button onClick={() => setIsOpen(true)} className="btn-primary-action">
                  Book a Free Demo Class &rarr;
                </button>
              </div>
            </div>

            {/* Banner Visual Image */}
            <div className="region-hero-visual">
              <div className="luxury-image-card">
                <img src={ishaBannerImg} alt="Isha Yoga Center Adiyogi Coimbatore ThoughtFlows" />
                <div className="image-floating-badge">
                  <div className="badge-icon">📍</div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Landmark of Coimbatore</div>
                    <div>Isha Yoga Center & Adiyogi, Coimbatore</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Content - Starting with Candidate Profiles & What is Medical Coding */}
      <section className="region-section">
        <div className="region-container">
          {/* Candidate Types Paragraph */}
          <div style={{ marginBottom: '36px', background: '#ffffff', padding: '24px 28px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 14px rgba(15,23,42,0.03)' }}>
            <p className="section-desc" style={{ fontSize: '16px', lineHeight: '1.8', color: '#1e293b', margin: 0 }}>
              The three types of candidates who want to do a medical coding course in Coimbatore are as follows. First, graduates of B.Sc. or B.Pharm. who do not have a job linked to their degree. Second, lab technicians and nurses who wish to give up their job which involves rotation of shifts. Third, employees working in a Coimbatore BPO who wishes to earn based on their skill rather than time.
            </p>
          </div>

          {/* What medical coding actually is - Side-by-side with Image */}
          <div className="section-visual-grid">
            <div className="luxury-image-card">
              <img src={handsOnImg} alt="What Medical Coding Actually Is" />
              <div className="image-floating-badge">
                <div className="badge-icon">💻</div>
                <div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Professional Desk Job</div>
                  <div>ICD-10-CM, CPT & HCPCS Live Chart Practice</div>
                </div>
              </div>
            </div>

            <div className="info-callout-box" style={{ background: '#ffffff', margin: 0 }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                What medical coding actually is
              </h2>
              <p style={{ marginBottom: '14px', fontSize: '15px', lineHeight: '1.7' }}>
                Medical coding is transforming the doctor's diagnosis and procedure notes into universal codes. In the U.S. code and bill the patient services rendered. Accurate coding is vital for prompt reimbursement from insurance companies. The U.S. healthcare system relies on medical coders, and that is why numerous outsourcing companies in India employ medical coders and auditors. Companies in Coimbatore, Chennai, and Bengaluru are constantly hiring.
              </p>
              <p style={{ marginBottom: '14px', fontSize: '15px', lineHeight: '1.7' }}>
                Coding is a desk job. You will not find patient contact or late night duties on your coding schedule. Employees work set shifts and are rewarded with a promotion for every rung on the ladder, coding auditor or quality assurance, that they climb.
              </p>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.7', fontWeight: 600, color: '#097D8A' }}>
                We offer training for the certification. This industry credential is the CPC (Certified Professional Coder) offered through the AAPC. Our training, along with industry experience, will give you a leg up in the job market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Page copy — who can join */}
      <section className="region-section bg-alt" id="who-can-join">
        <div className="region-container">
          <div className="section-visual-grid" style={{ alignItems: 'flex-start', marginBottom: '32px' }}>
            <div>
              <h2 className="section-title">
                Who can join a medical coding course in Coimbatore?
              </h2>
              <p className="section-desc" style={{ fontSize: '16px', lineHeight: '1.75' }}>
                If your degree includes anatomy, physiology, or pharmacology, you are eligible for membership. The longer version: CPC certification has traditionally been dominated by American coders with expansive experience. Many of the Indian coders don’t have enough experience to qualify for the CPC exam. That is why the Indian employers ask for the relevant healthcare degree. The AAPC does not impose a degree requirement, but during an employment background check Indian employers might use the absence of a relevant degree to disqualify applicants.
              </p>
            </div>

            <div className="luxury-image-card">
              <img src={teachingImg} alt="Who can join Medical Coding Course" />
              <div className="image-floating-badge">
                <div className="badge-icon">🎓</div>
                <div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Eligible Backgrounds</div>
                  <div>Life Science, Nursing, Pharmacy & Allied Health</div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="eligibility-table-wrapper">
            <table className="eligibility-table">
              <thead>
                <tr>
                  <th>Your background</th>
                  <th>Can you join</th>
                  <th>What to expect at hiring</th>
                </tr>
              </thead>
              <tbody>
                {eligibilityData.map((row, idx) => (
                  <tr key={idx}>
                    <td><strong>{row.bg}</strong></td>
                    <td><span className={row.statusClass}>{row.join}</span></td>
                    <td>{row.expect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="info-callout-warning" style={{ fontSize: '15.5px', lineHeight: '1.7' }}>
            We would rather tell you that last row upfront than take a fee and leave you unplaceable. If you are from a non-life-science stream, come for the demo class and ask the counsellor directly what the current hiring picture looks like.
          </div>

          {/* You do not need */}
          <div style={{ marginTop: '36px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              You do not need
            </h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', margin: 0, fontSize: '15.5px', lineHeight: '1.8', color: '#334155' }}>
              {notNeededItems.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '8px' }}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Final-year students */}
          <div style={{ marginTop: '36px', background: '#ffffff', padding: '24px 28px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
              Final-year students
            </h3>
            <p style={{ margin: 0, fontSize: '15.5px', lineHeight: '1.7', color: '#334155' }}>
              You can start the classes while your results are pending. Most companies will only release an offer after your provisional certificate, so beginning the course three to four months before your results is the best-timed move we see students make.
            </p>
          </div>
        </div>
      </section>

      {/* Page copy — courses */}
      <section className="region-section" id="courses">
        <div className="region-container">
          <div className="section-visual-grid" style={{ alignItems: 'center', marginBottom: '36px' }}>
            <div>
              <h2 className="section-title">
                Medical coding courses in Coimbatore — 90 to choose from
              </h2>
              <p className="section-desc" style={{ fontSize: '16px', lineHeight: '1.75', marginBottom: '20px' }}>
                Our Coimbatore branches run 90 courses between them — core certifications such as CPC, CCS and CPMA, single-speciality modules spanning cardiology, orthopaedics, radiology and more, inpatient and facility coding, risk adjustment, and the full RCM and billing side. If you are new to the field, start with CPC: it is the certification almost every Indian employer lists first.
              </p>
              <div style={{ marginBottom: '20px' }}>
                <button onClick={() => setIsOpen(true)} className="btn-primary-action" style={{ fontSize: '15px' }}>
                  View all courses →
                </button>
              </div>
              <p className="section-desc" style={{ fontSize: '15.5px', lineHeight: '1.7', color: '#475569', fontStyle: 'italic' }}>
                Not sure which of the course applies to you? Tell a counsellor your degree and how soon you want to be working. Picking the wrong speciality too early is the most common and most expensive mistake students make here.
              </p>
            </div>

            <div className="luxury-image-card">
              <img src={cpcImg} alt="AAPC CPC Certification Training" />
              <div className="image-floating-badge">
                <div className="badge-icon">📜</div>
                <div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>AAPC USA Accredited</div>
                  <div>Certified Professional Coder (CPC) Exam Prep</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '36px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '18px' }}>
              What every batch includes, whichever course you pick
            </h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', margin: '0 0 24px 0', fontSize: '15.5px', lineHeight: '1.8', color: '#334155' }}>
              {batchIncludes.map((inc, idx) => (
                <li key={idx} style={{ marginBottom: '10px' }}>{inc}</li>
              ))}
            </ul>

            <div className="info-callout-box" style={{ background: '#f0fdfa', margin: 0 }}>
              <p style={{ margin: 0, fontSize: '15.5px', lineHeight: '1.7', fontWeight: 600, color: '#097D8A' }}>
                Live chart practice is the aspect of the training that differentiates a certified coder from a trained coder. This is what employers expect you to be able to do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Page copy — our three Coimbatore branches */}
      <section className="region-section bg-alt" id="branches">
        <div className="region-container">
          <div style={{ marginBottom: '32px' }}>
            <h2 className="section-title">
              Medical coding classes at three branches across Coimbatore
            </h2>
            <p className="section-desc" style={{ fontSize: '16px', lineHeight: '1.75' }}>
              We run three centres in Coimbatore — Saravanampatti, Hopes and Gandhipuram — so that no student has to cross the city twice a day for a class. Same syllabus, same trainers, same placement team. Pick the one you can reach in under 30 minutes.
            </p>
          </div>

          <div className="campus-grid">
            {branches.map((b, idx) => (
              <div className="branch-detail-card" key={idx}>
                <div className="campus-card-img-wrap" style={{ borderRadius: '16px 16px 0 0', marginBottom: '16px' }}>
                  <img src={b.img} alt={`ThoughtFlows ${b.name} Branch`} />
                </div>
                <h3 className="branch-title">{b.title}</h3>
                <p className="branch-desc" style={{ fontSize: '15.5px', lineHeight: '1.7' }}>{b.locationDesc}</p>
                <p className="branch-desc" style={{ fontSize: '15.5px', lineHeight: '1.7' }}>{b.profileText}</p>

                <div className="branch-area-chips" style={{ marginTop: '14px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                    Choose this branch if you live around:
                  </h4>
                  <p style={{ fontSize: '14.5px', color: '#475569', margin: 0, lineHeight: '1.6' }}>
                    {b.liveAround}
                  </p>
                </div>

                <div className="branch-meta-info" style={{ marginTop: '20px' }}>
                  <div className="branch-meta-item">
                    <span>Address: {b.address}</span>
                  </div>
                  <div className="branch-meta-item">
                    <span>Phone: {b.phone}</span>
                  </div>
                  <div className="branch-actions-row">
                    <a href={b.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-branch-map">
                      Map: Google Business Profile link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '28px', fontSize: '15.5px', color: '#334155', background: '#ffffff', padding: '20px 24px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
              Not sure which one?
            </h3>
            <p style={{ margin: 0 }}>
              Call any branch and tell the counsellor where you live. If another centre is closer or has a batch timing that fits you better, they will say so.
            </p>
          </div>
        </div>
      </section>

      {/* Page copy — why ThoughtFlows */}
      <section className="region-section">
        <div className="region-container">
          <div style={{ marginBottom: '32px' }}>
            <h2 className="section-title">
              Why students pick ThoughtFlows for medical coding in Coimbatore
            </h2>
            <p className="section-desc" style={{ fontSize: '16px', lineHeight: '1.75' }}>
              Every institute in the city will tell you it is the best one. Here is what we actually do differently, in terms you can verify before you pay.
            </p>
          </div>

          <div className="why-grid">
            {whyChoosePoints.map((item, idx) => (
              <div className="why-card" key={idx}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-text" style={{ fontSize: '15.5px', lineHeight: '1.7' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page copy — jobs and career path */}
      <section className="region-section bg-alt" id="career">
        <div className="region-container">
          <div className="section-visual-grid" style={{ alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <h2 className="section-title">
                What happens after the course — medical coding jobs in Coimbatore
              </h2>
              <p className="section-desc" style={{ fontSize: '16px', lineHeight: '1.75' }}>
                Coimbatore has a steady medical coding employer base, and the bigger RCM companies in Chennai, Bengaluru and Hyderabad recruit from here year-round. Hiring is continuous rather than seasonal, because US payer volumes do not pause.
              </p>
            </div>

            <div className="luxury-image-card">
              <img src={placementBanner} alt="Medical Coding Placements Coimbatore" />
              <div className="image-floating-badge">
                <div className="badge-icon">💼</div>
                <div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>30,000+ Students Placed</div>
                  <div>Continuous Year-Round Healthcare MNC Recruitment</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
              Where our students get placed
            </h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', margin: '0 0 24px 0', fontSize: '15.5px', lineHeight: '1.8', color: '#334155' }}>
              {placementAvenues.map((ave, idx) => (
                <li key={idx}>{ave}</li>
              ))}
            </ul>

            <div style={{ background: '#ffffff', padding: '24px 28px', borderRadius: '16px', border: '1px solid #e2e8f0', marginBottom: '32px' }}>
              <p style={{ fontSize: '15.5px', lineHeight: '1.7', color: '#1e293b', marginBottom: '12px' }}>
                Our students have gone on to work with leading RCM and healthcare outsourcing companies, including:
              </p>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#097D8A', marginBottom: '12px' }}>
                Omega Healthcare · AGS Health · R1 RCM · Access Healthcare · GeBBS Healthcare Solutions · Cognizant · Optum
              </div>
              <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#475569', margin: 0 }}>
                - along with Sutherland, Vee Technologies, Visionary RCM, Episource, Sagility and others, including many mid-size coding firms and hospital HIM departments in Coimbatore, Chennai, Bengaluru and Hyderabad.
              </p>
            </div>
          </div>

          {/* The career path, in order */}
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '18px' }}>
              The career path, in order
            </h3>
            <ol style={{ paddingLeft: '24px', margin: '0 0 20px 0', fontSize: '15.5px', lineHeight: '1.8', color: '#334155' }}>
              {careerSteps.map((s, idx) => (
                <li key={idx} style={{ marginBottom: '8px' }}>
                  <strong>{s.title}</strong> — {s.desc}
                </li>
              ))}
            </ol>
            <p style={{ fontSize: '15.5px', lineHeight: '1.7', color: '#475569' }}>
              Most coders reach step 3 in two to three years. The ones who move faster are the ones who add a second certification early rather than waiting to be told to.
            </p>
          </div>
        </div>
      </section>

      {/* Page copy — duration and batch timings */}
      <section className="region-section">
        <div className="region-container">
          <div style={{ marginBottom: '32px' }}>
            <h2 className="section-title">
              Course duration and batch timings
            </h2>
            <p className="section-desc" style={{ fontSize: '16px', lineHeight: '1.75' }}>
              Batch options at all three branches
            </p>
          </div>

          {/* Rendered as three cards side by side */}
          <div className="batch-timings-grid">
            {batchTimings.map((b, idx) => (
              <div className="batch-timing-card" key={idx}>
                <div className="batch-timing-icon">{b.icon}</div>
                <h3 className="batch-timing-title">{b.title}</h3>
                <p className="batch-timing-desc">{b.desc}</p>
              </div>
            ))}
          </div>

          <p className="section-desc" style={{ fontSize: '15.5px', lineHeight: '1.7', color: '#475569', marginTop: '28px' }}>
            Online and hybrid options are available if you cannot reach a branch daily. Ask the counsellor — we will not push you online if a classroom seat near you works better.
          </p>
        </div>
      </section>

      {/* Page copy — next steps */}
      <section className="region-section bg-alt">
        <div className="region-container">
          <div style={{ marginBottom: '32px' }}>
            <h2 className="section-title">
              How to join — three steps
            </h2>
          </div>

          <ol style={{ paddingLeft: '24px', margin: '0 0 32px 0', fontSize: '16px', lineHeight: '1.85', color: '#1e293b' }}>
            <li style={{ marginBottom: '14px' }}>
              Book a free demo class at Saravanampatti, Hopes or Gandhipuram. Sit through a real session, not a sales pitch. Meet the trainer who would take your batch.
            </li>
            <li style={{ marginBottom: '14px' }}>
              Talk to a counsellor about your degree and your timeline. They will tell you which course fits, which branch is nearest, and whether your background places easily. If it does not, you will hear that too.
            </li>
            <li style={{ marginBottom: '14px' }}>
              Pick a batch and confirm your seat. Bring your mark sheets or provisional certificate and an ID. Instalment options are available.
            </li>
          </ol>

          <div style={{ background: '#ffffff', padding: '24px 28px', borderRadius: '16px', border: '1px solid #e2e8f0', marginBottom: '36px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
              What to bring to the demo
            </h3>
            <p style={{ margin: 0, fontSize: '15.5px', lineHeight: '1.7', color: '#334155' }}>
              Nothing. Just come. If you want to use the visit well, bring your degree details and a rough idea of the timings you can commit to, so the counsellor can check live seat availability while you are there.
            </p>
          </div>
        </div>
      </section>

      {/* Page copy — FAQs */}
      <section className="region-section" id="faqs">
        <div className="region-container">
          <div style={{ marginBottom: '32px' }}>
            <h2 className="section-title">
              Frequently asked questions about medical coding classes in Coimbatore
            </h2>
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

          {/* CTA block repeat 3 */}
          <div style={{ marginTop: '40px' }}>
            <CtaBlock />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoimbatoreLanding;
