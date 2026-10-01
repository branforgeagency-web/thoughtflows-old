  // Scroll-reveal animation for sections
  useEffect(() => {
    const els = document.querySelectorAll('.cbe-lp .reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const Icon = ({ name }) => {
    const paths = {
      phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />,
      pin: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
      check: <polyline points="20 6 9 17 4 12" />,
      x: <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>,
      arrow: <><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></>,
      map: <><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></>,
      users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1a4 4 0 0 1 0 7.8" /></>,
      plus: <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>
    };
    return (
      <svg className="cbe-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {paths[name]}
      </svg>
    );
  };

  const heroStats = [
    { num: "35,000+", label: "students trained" },
    { num: "30,000+", label: "students placed" },
    { num: "90", label: "courses" },
    { num: "3", label: "branches in Coimbatore" }
  ];

  const candidateTypes = [
    { icon: "🎓", label: "B.Sc. / B.Pharm. graduates" },
    { icon: "🩺", label: "Nurses & lab technicians" },
    { icon: "🎧", label: "Coimbatore BPO employees" }
  ];

  const sectionNav = [
    { id: "who-can-join", label: "Who can join" },
    { id: "courses", label: "Courses" },
    { id: "branches", label: "Branches" },
    { id: "career", label: "Careers" },
    { id: "batches", label: "Batch timings" },
    { id: "faqs", label: "FAQs" }
  ];

  const joinSteps = [
    "Book a free demo class at Saravanampatti, Hopes or Gandhipuram. Sit through a real session, not a sales pitch. Meet the trainer who would take your batch.",
    "Talk to a counsellor about your degree and your timeline. They will tell you which course fits, which branch is nearest, and whether your background places easily. If it does not, you will hear that too.",
    "Pick a batch and confirm your seat. Bring your mark sheets or provisional certificate and an ID. Instalment options are available."
  ];

  const companies = ["Omega Healthcare", "AGS Health", "R1 RCM", "Access Healthcare", "GeBBS Healthcare Solutions", "Cognizant", "Optum"];

  // Reusable CTA Block Component
  const CtaBlock = () => (
    <div className="cbe-cta reveal">
      <div className="cbe-cta-glow" aria-hidden="true" />
      <div className="cbe-cta-text">
        <span className="cbe-eyebrow light">Free demo class</span>
        <h3>Sit in on a class before you decide</h3>
        <p>
          Free demo sessions run at all three Coimbatore branches — Saravanampatti, Hopes and Gandhipuram. Pick a branch, pick a day, and see the training for yourself.
        </p>
        <div className="cbe-cta-numbers">
          Saravanampatti +91 93845 76852 · Hopes +91 93845 76852 · Gandhipuram +91 93845 76852 · WhatsApp +91 93845 76852
        </div>
      </div>
      <div className="cbe-cta-actions">
        <button onClick={() => setIsOpen(true)} className="cbe-btn cbe-btn-white">
          Book a Free Demo Class <Icon name="arrow" />
        </button>
        <a href="tel:+919384576852" className="cbe-btn cbe-btn-ghost">
          <Icon name="phone" /> Call the branch nearest you
        </a>
      </div>
    </div>
  );

  const SectionHead = ({ eyebrow, title, desc, center }) => (
    <div className={`cbe-head reveal ${center ? 'center' : ''}`}>
      {eyebrow && <span className="cbe-eyebrow">{eyebrow}</span>}
      <h2 className="cbe-h2">{title}</h2>
      {desc && <p className="cbe-lead">{desc}</p>}
    </div>
  );

  return (
    <div className="cbe-lp">
      <Meta
        title="Medical Coding Classes in Coimbatore | ThoughtFlows"
        description="Located in Saravanampatti, Hopes, and Gandhipuram, we offer in-person medical coding classes in Coimbatore. Trained over 35,000 students and employed over 30,000 of them."
        canonical="https://www.thoughtflows.in/coimbatore"
      />

      {/* ================= HERO ================= */}
      <section className="cbe-hero">
        <div className="cbe-hero-bg" aria-hidden="true" />
        <div className="cbe-wrap cbe-hero-grid">
          <div className="cbe-hero-copy">
            <nav className="cbe-crumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Branches</span>
              <span>/</span>
              <strong>Coimbatore</strong>
            </nav>

            <span className="cbe-pill"><span className="cbe-dot" /> Saravanampatti · Hopes · Gandhipuram</span>

            <h1 className="cbe-h1">
              Medical Coding Classes in <span>Coimbatore</span>
            </h1>

            <p className="cbe-hero-sub">
              Located in Saravanampatti, Hopes, and Gandhipuram, we offer in-person medical coding classes in Coimbatore. To date, we have trained over 35,000 students and employed over 30,000 of them. Our classes cover ICD-10-CM, CPT, and HCPCS Level II, and help students prepare for the AAPC CPC Certification Exam. The courses are open to students from life sciences, nursing, pharmacy, and allied health professions. Including this course, we offer a host of other services including free demo classes.
            </p>

            <div className="cbe-hero-actions">
              <button onClick={() => setIsOpen(true)} className="cbe-btn cbe-btn-primary">
                Book a Free Demo Class <Icon name="arrow" />
              </button>
              <a href="tel:+919384576852" className="cbe-btn cbe-btn-outline-light">
                <Icon name="phone" /> +91 93845 76852
              </a>
            </div>
          </div>

          <div className="cbe-hero-visual">
            <div className="cbe-hero-frame">
              <img src={ishaBannerImg} alt="Isha Yoga Center Adiyogi Coimbatore ThoughtFlows" />
            </div>
            <div className="cbe-float-badge">
              <span className="cbe-float-ico">📍</span>
              <div>
                <small>Landmark of Coimbatore</small>
                <strong>Isha Yoga Center & Adiyogi, Coimbatore</strong>
              </div>
            </div>
            <div className="cbe-float-chip">
              <strong>AAPC</strong>
              <span>CPC exam prep</span>
            </div>
          </div>
        </div>

        <div className="cbe-wrap">
          <div className="cbe-stats">
            {heroStats.map((s, i) => (
              <div className="cbe-stat" key={i}>
                <strong>{s.num}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-page navigation */}
      <div className="cbe-subnav">
        <div className="cbe-wrap cbe-subnav-inner">
          {sectionNav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>{n.label}</a>
          ))}
        </div>
      </div>

      {/* ================= INTRO / WHAT IS CODING ================= */}
      <section className="cbe-section">
        <div className="cbe-wrap">
          <div className="cbe-intro reveal">
            <div className="cbe-intro-types">
              {candidateTypes.map((c, i) => (
                <div className="cbe-type" key={i}>
                  <span className="cbe-type-num">0{i + 1}</span>
                  <span className="cbe-type-ico">{c.icon}</span>
                  <span className="cbe-type-label">{c.label}</span>
                </div>
              ))}
            </div>
            <p className="cbe-intro-text">
              The three types of candidates who want to do a medical coding course in Coimbatore are as follows. First, graduates of B.Sc. or B.Pharm. who do not have a job linked to their degree. Second, lab technicians and nurses who wish to give up their job which involves rotation of shifts. Third, employees working in a Coimbatore BPO who wishes to earn based on their skill rather than time.
            </p>
          </div>

          <div className="cbe-split">
            <div className="cbe-media reveal">
              <img src={handsOnImg} alt="What Medical Coding Actually Is" />
              <div className="cbe-media-tag">
                <span>💻</span>
                <div>
                  <small>Professional Desk Job</small>
                  <strong>ICD-10-CM, CPT & HCPCS Live Chart Practice</strong>
                </div>
              </div>
            </div>

            <div className="cbe-copy reveal">
              <span className="cbe-eyebrow">The basics</span>
              <h2 className="cbe-h2">What medical coding actually is</h2>
              <p>
                Medical coding is transforming the doctor's diagnosis and procedure notes into universal codes. In the U.S. code and bill the patient services rendered. Accurate coding is vital for prompt reimbursement from insurance companies. The U.S. healthcare system relies on medical coders, and that is why numerous outsourcing companies in India employ medical coders and auditors. Companies in Coimbatore, Chennai, and Bengaluru are constantly hiring.
              </p>
              <p>
                Coding is a desk job. You will not find patient contact or late night duties on your coding schedule. Employees work set shifts and are rewarded with a promotion for every rung on the ladder, coding auditor or quality assurance, that they climb.
              </p>
              <div className="cbe-highlight">
                We offer training for the certification. This industry credential is the CPC (Certified Professional Coder) offered through the AAPC. Our training, along with industry experience, will give you a leg up in the job market.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO CAN JOIN ================= */}
      <section className="cbe-section cbe-tint" id="who-can-join">
        <div className="cbe-wrap">
          <div className="cbe-split cbe-split-top">
            <div className="cbe-copy reveal">
              <span className="cbe-eyebrow">Eligibility</span>
              <h2 className="cbe-h2">Who can join a medical coding course in Coimbatore?</h2>
              <p>
                If your degree includes anatomy, physiology, or pharmacology, you are eligible for membership. The longer version: CPC certification has traditionally been dominated by American coders with expansive experience. Many of the Indian coders don’t have enough experience to qualify for the CPC exam. That is why the Indian employers ask for the relevant healthcare degree. The AAPC does not impose a degree requirement, but during an employment background check Indian employers might use the absence of a relevant degree to disqualify applicants.
              </p>
            </div>
            <div className="cbe-media reveal">
              <img src={teachingImg} alt="Who can join Medical Coding Course" />
              <div className="cbe-media-tag">
                <span>🎓</span>
                <div>
                  <small>Eligible Backgrounds</small>
                  <strong>Life Science, Nursing, Pharmacy & Allied Health</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="cbe-table-card reveal">
            <table className="cbe-table">
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
                    <td data-label="Your background"><strong>{row.bg}</strong></td>
                    <td data-label="Can you join">
                      <span className={`cbe-badge ${row.statusClass === 'badge-yes' ? 'yes' : 'maybe'}`}>
                        {row.statusClass === 'badge-yes' && <Icon name="check" />}
                        {row.join}
                      </span>
                    </td>
                    <td data-label="What to expect at hiring">{row.expect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cbe-note reveal">
            <span className="cbe-note-ico">!</span>
            <p>
              We would rather tell you that last row upfront than take a fee and leave you unplaceable. If you are from a non-life-science stream, come for the demo class and ask the counsellor directly what the current hiring picture looks like.
            </p>
          </div>

          <div className="cbe-duo">
            <div className="cbe-card reveal">
              <h3 className="cbe-h3">You do not need</h3>
              <ul className="cbe-xlist">
                {notNeededItems.map((item, idx) => (
                  <li key={idx}><span className="cbe-x"><Icon name="x" /></span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="cbe-card cbe-card-accent reveal">
              <span className="cbe-card-emoji">🎓</span>
              <h3 className="cbe-h3">Final-year students</h3>
              <p>
                You can start the classes while your results are pending. Most companies will only release an offer after your provisional certificate, so beginning the course three to four months before your results is the best-timed move we see students make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="cbe-section" id="courses">
        <div className="cbe-wrap">
          <div className="cbe-split">
            <div className="cbe-copy reveal">
              <span className="cbe-eyebrow">Courses</span>
              <h2 className="cbe-h2">Medical coding courses in Coimbatore — 90 to choose from</h2>
              <p>
                Our Coimbatore branches run 90 courses between them — core certifications such as CPC, CCS and CPMA, single-speciality modules spanning cardiology, orthopaedics, radiology and more, inpatient and facility coding, risk adjustment, and the full RCM and billing side. If you are new to the field, start with CPC: it is the certification almost every Indian employer lists first.
              </p>
              <button onClick={() => setIsOpen(true)} className="cbe-btn cbe-btn-primary">
                View all courses <Icon name="arrow" />
              </button>
              <p className="cbe-aside">
                Not sure which of the course applies to you? Tell a counsellor your degree and how soon you want to be working. Picking the wrong speciality too early is the most common and most expensive mistake students make here.
              </p>
            </div>
            <div className="cbe-media reveal">
              <img src={cpcImg} alt="AAPC CPC Certification Training" />
              <div className="cbe-media-tag">
                <span>📜</span>
                <div>
                  <small>AAPC USA Accredited</small>
                  <strong>Certified Professional Coder (CPC) Exam Prep</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="cbe-sub reveal">
            <h3 className="cbe-h3">What every batch includes, whichever course you pick</h3>
          </div>
          <div className="cbe-include-grid">
            {batchIncludes.map((inc, idx) => (
              <div className="cbe-include reveal" key={idx}>
                <span className="cbe-include-num">{String(idx + 1).padStart(2, '0')}</span>
                <p>{inc}</p>
              </div>
            ))}
          </div>

          <div className="cbe-banner reveal">
            Live chart practice is the aspect of the training that differentiates a certified coder from a trained coder. This is what employers expect you to be able to do.
          </div>

          <CtaBlock />
        </div>
      </section>

      {/* ================= BRANCHES ================= */}
      <section className="cbe-section cbe-tint" id="branches">
        <div className="cbe-wrap">
          <SectionHead
            center
            eyebrow="Our campuses"
            title="Medical coding classes at three branches across Coimbatore"
            desc="We run three centres in Coimbatore — Saravanampatti, Hopes and Gandhipuram — so that no student has to cross the city twice a day for a class. Same syllabus, same trainers, same placement team. Pick the one you can reach in under 30 minutes."
          />

          <div className="cbe-branch-grid">
            {branches.map((b, idx) => (
              <article className="cbe-branch reveal" key={idx}>
                <div className="cbe-branch-img">
                  <img src={b.img} alt={`ThoughtFlows ${b.name} Branch`} />
                  <span className="cbe-branch-name"><Icon name="pin" /> {b.name}</span>
                </div>
                <div className="cbe-branch-body">
                  <h3 className="cbe-branch-title">{b.title}</h3>
                  <p>{b.locationDesc}</p>
                  <p>{b.profileText}</p>

                  <div className="cbe-live">
                    <h4>Choose this branch if you live around:</h4>
                    <p>{b.liveAround}</p>
                  </div>

                  <ul className="cbe-meta">
                    <li><Icon name="pin" /><span>{b.address}</span></li>
                    <li><Icon name="phone" /><a href={`tel:${b.phone.replace(/\s/g, '')}`}>{b.phone}</a></li>
                  </ul>

                  <div className="cbe-branch-actions">
                    <a href={b.mapUrl} target="_blank" rel="noopener noreferrer" className="cbe-btn cbe-btn-soft">
                      <Icon name="map" /> Get directions
                    </a>
                    <Link to={b.path} className="cbe-btn cbe-btn-link">
                      Branch page <Icon name="arrow" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="cbe-note cbe-note-info reveal">
            <span className="cbe-note-ico">?</span>
            <p>
              <strong>Not sure which one?</strong> Call any branch and tell the counsellor where you live. If another centre is closer or has a batch timing that fits you better, they will say so.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY THOUGHTFLOWS ================= */}
      <section className="cbe-section">
        <div className="cbe-wrap">
          <SectionHead
            center
            eyebrow="Why ThoughtFlows"
            title="Why students pick ThoughtFlows for medical coding in Coimbatore"
            desc="Every institute in the city will tell you it is the best one. Here is what we actually do differently, in terms you can verify before you pay."
          />
          <div className="cbe-why-grid">
            {whyChoosePoints.map((item, idx) => (
              <div className="cbe-why reveal" key={idx}>
                <div className="cbe-why-top">
                  <span className="cbe-why-ico">{item.icon}</span>
                  <span className="cbe-why-num">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAREERS ================= */}
      <section className="cbe-section cbe-dark" id="career">
        <div className="cbe-wrap">
          <div className="cbe-split">
            <div className="cbe-copy reveal">
              <span className="cbe-eyebrow light">Jobs & placements</span>
              <h2 className="cbe-h2">What happens after the course — medical coding jobs in Coimbatore</h2>
              <p>
                Coimbatore has a steady medical coding employer base, and the bigger RCM companies in Chennai, Bengaluru and Hyderabad recruit from here year-round. Hiring is continuous rather than seasonal, because US payer volumes do not pause.
              </p>
              <h3 className="cbe-h3">Where our students get placed</h3>
              <ul className="cbe-checklist">
                {placementAvenues.map((ave, idx) => (
                  <li key={idx}><span className="cbe-check"><Icon name="check" /></span>{ave}</li>
                ))}
              </ul>
            </div>
            <div className="cbe-media reveal">
              <img src={placementBanner} alt="Medical Coding Placements Coimbatore" />
              <div className="cbe-media-tag">
                <span>💼</span>
                <div>
                  <small>30,000+ Students Placed</small>
                  <strong>Continuous Year-Round Healthcare MNC Recruitment</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="cbe-companies reveal">
            <p>Our students have gone on to work with leading RCM and healthcare outsourcing companies, including:</p>
            <div className="cbe-logo-row">
              {companies.map((c) => <span key={c}>{c}</span>)}
            </div>
            <p className="cbe-companies-more">
              - along with Sutherland, Vee Technologies, Visionary RCM, Episource, Sagility and others, including many mid-size coding firms and hospital HIM departments in Coimbatore, Chennai, Bengaluru and Hyderabad.
            </p>
          </div>

          <div className="cbe-sub reveal">
            <h3 className="cbe-h3">The career path, in order</h3>
          </div>
          <ol className="cbe-path">
            {careerSteps.map((s, idx) => (
              <li className="reveal" key={idx}>
                <span className="cbe-path-step">Step {idx + 1}</span>
                <strong>{s.title}</strong>
                <span className="cbe-path-desc">{s.desc}</span>
              </li>
            ))}
          </ol>
          <p className="cbe-path-note reveal">
            Most coders reach step 3 in two to three years. The ones who move faster are the ones who add a second certification early rather than waiting to be told to.
          </p>
        </div>
      </section>

      {/* ================= BATCH TIMINGS ================= */}
      <section className="cbe-section" id="batches">
        <div className="cbe-wrap">
          <SectionHead center eyebrow="Schedules" title="Course duration and batch timings" desc="Batch options at all three branches" />
          <div className="cbe-batch-grid">
            {batchTimings.map((b, idx) => (
              <div className="cbe-batch reveal" key={idx}>
                <span className="cbe-batch-ico">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
          <p className="cbe-center-note reveal">
            Online and hybrid options are available if you cannot reach a branch daily. Ask the counsellor — we will not push you online if a classroom seat near you works better.
          </p>
        </div>
      </section>

      {/* ================= HOW TO JOIN ================= */}
      <section className="cbe-section cbe-tint">
        <div className="cbe-wrap">
          <SectionHead center eyebrow="Admissions" title="How to join — three steps" />
          <div className="cbe-steps">
            {joinSteps.map((s, idx) => (
              <div className="cbe-step reveal" key={idx}>
                <span className="cbe-step-num">{idx + 1}</span>
                <p>{s}</p>
              </div>
            ))}
          </div>
          <div className="cbe-note cbe-note-info reveal">
            <span className="cbe-note-ico">✓</span>
            <p>
              <strong>What to bring to the demo</strong><br />
              Nothing. Just come. If you want to use the visit well, bring your degree details and a rough idea of the timings you can commit to, so the counsellor can check live seat availability while you are there.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FAQS ================= */}
      <section className="cbe-section" id="faqs">
        <div className="cbe-wrap cbe-faq-wrap">
          <SectionHead center eyebrow="FAQs" title="Frequently asked questions about medical coding classes in Coimbatore" />
          <div className="cbe-faq">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div className={`cbe-faq-item ${isOpen ? 'open' : ''}`} key={idx}>
                  <button
                    className="cbe-faq-q"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <h3>{faq.q}</h3>
                    <span className="cbe-faq-toggle"><Icon name="plus" /></span>
                  </button>
                  {isOpen && <div className="cbe-faq-a">{faq.a}</div>}
                </div>
              );
            })}
          </div>

          <CtaBlock />
        </div>
      </section>
    </div>
  );
};

export default CoimbatoreLanding;
