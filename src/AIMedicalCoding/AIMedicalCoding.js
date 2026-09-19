import React, { useEffect, useRef, useState } from 'react';
import './AIMedicalCoding.css';
import Meta from '../Meta';
import aiBanner from './ai-medical-coding-banner.png';

/* ── animated counter hook ── */
function useCounter(target, duration = 1600) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); io.unobserve(el); } },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return [val, ref];
}

/* ── reveal hook ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.unobserve(el); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

/* ── Counter card ── */
function CountCard({ count, label, pct, feature }) {
  const [val, ref] = useCounter(count);
  const [revRef, visible] = useReveal();
  return (
    <div ref={revRef} className={`aimc-tier${feature ? ' aimc-tier--feature' : ''} aimc-reveal${visible ? ' aimc-in' : ''}`}>
      {feature && <span className="aimc-ribbon">Most Coveted</span>}
      <div ref={ref} className="aimc-big">{val.toLocaleString('en-IN')}</div>
      <div className="aimc-tag">{label}</div>
      <div className="aimc-pctbar"><i style={{ width: pct }}></i></div>
      <p>{feature
        ? 'Fully free medical coding training for selected eligible students. Zero course fee — just commitment.'
        : pct === '50%'
          ? 'Half scholarship covering 50% of the course fee for eligible students who qualify.'
          : 'A 20% discount on course fees for the remaining qualifying students in the program.'
      }</p>
    </div>
  );
}

/* ── Main Component ── */
const AIMedicalCoding = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [form, setForm] = useState({ name: '', mobile: '', email: '', city: '', qual: '', year: '', msg: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Nav scroll
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Marquee duplicate
  useEffect(() => {
    const marq = document.getElementById('aimcMarq');
    if (marq && !marq.dataset.duplicated) {
      marq.innerHTML += marq.innerHTML;
      marq.dataset.duplicated = 'true';
    }
  }, []);

  // Counters
  const [total1, ref1] = useCounter(108);
  const [total2, ref2] = useCounter(300);
  const [total3, ref3] = useCounter(600);
  const [total4, ref4] = useCounter(1008);

  // Hero reveal
  const [heroRef, heroVisible] = useReveal();
  const [dashRef, dashVisible] = useReveal();

  const handleInput = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const data = new FormData();
      data.append('Full Name', form.name);
      data.append('Mobile Number', form.mobile);
      data.append('Email Address', form.email);
      data.append('City', form.city);
      data.append('Highest Qualification', form.qual);
      data.append('Year of Graduation', form.year);
      data.append('Interested Course', 'AI-Powered Medical Coding');
      data.append('Message', form.msg);
      data.append('_subject', 'New AI-Powered Medical Coding Application');

      const res = await fetch('https://formspree.io/f/mrevbwbo', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        alert('Submission failed. Please call us at +91 96550 79784 or try again.');
      }
    } catch {
      alert('Something went wrong. Please call us at +91 96550 79784 or try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Meta
        title="Start Your AI-Powered Medical Coding Career | Thoughtflows Medical Coding Academy"
        description="Start your AI-powered medical coding career. Enquire now to learn about our medical coding training and AI-enabled learning with placement support. Apply now."
        canonical="https://www.thoughtflows.in/ai-medical-coding"
      />

      {/* BACKGROUND */}
      <div className="aimc-bg-mesh" aria-hidden="true">
        <div className="aimc-blob aimc-b1"></div>
        <div className="aimc-blob aimc-b2"></div>
        <div className="aimc-blob aimc-b3"></div>
        <div className="aimc-blob aimc-b4"></div>
      </div>
      <div className="aimc-bg-sheen" aria-hidden="true"></div>
      <div className="aimc-bg-grid" aria-hidden="true"></div>
      <div className="aimc-bg-noise" aria-hidden="true"></div>

      {/* TOPBAR */}
      <div className="aimc-topbar">
        <div className="aimc-wrap">
          <span className="aimc-badge">AI-Powered Intake · Admissions Open</span>
          <div className="aimc-grp">
            <a href="tel:+919655079784" aria-label="Call us">📞 +91 96550 79784</a>
            <a href="mailto:info@thoughtflows.in" aria-label="Email us">✉️ info@thoughtflows.in</a>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav className={`aimc-nav${navScrolled ? ' aimc-scrolled' : ''}`}>
        <div className="aimc-wrap">
          <a className="aimc-brand" href="#aimc-top" aria-label="Thoughtflows Medical Coding Academy — AI-Powered Medical Coding">
            <span className="aimc-logo-chip">
              <span className="aimc-brand-logo" role="img" aria-label="Thoughtflows logo"></span>
            </span>
          </a>
          <div className="aimc-nav-links">
            <a href="#aimc-scholarships">Scholarships</a>
            <a href="#aimc-apply">Apply</a>
            <a href="#aimc-locations">Locations</a>
            <a href="#aimc-why">Why Us</a>
            <a href="#aimc-contact">Contact</a>
          </div>
          <div className="aimc-nav-cta">
            <a href="tel:+919655079784" className="aimc-btn aimc-btn-ghost aimc-btn-sm">Call Now</a>
            <a href="#aimc-apply" className="aimc-btn aimc-btn-primary aimc-btn-sm">Enquire Now</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="aimc-hero" id="aimc-top">
        <div className="aimc-wrap">
          <div ref={heroRef} className={`aimc-hero-copy aimc-reveal${heroVisible ? ' aimc-in' : ''}`}>
            <span className="aimc-eyebrow">
              <span className="aimc-dot"></span>AI-Enabled Learning · 2026 Intake
            </span>
            <h1 className="aimc-h1">
              START YOUR <br />
              <span className="aimc-accent">AI-POWERED</span> <br />
              <span className="aimc-accent-sub">MEDICAL CODING CAREER</span>
            </h1>
            <p className="aimc-sub">
              Enquire now to learn about our medical coding training and AI-enabled learning — by Thoughtflows Medical Coding Academy.
            </p>
            <div className="aimc-points">
              <div className="aimc-point"><span className="aimc-tick">✓</span><span><b>108 — Fully free</b> training for selected students (100% scholarship)</span></div>
              <div className="aimc-point"><span className="aimc-tick">✓</span><span><b>300 — 50% scholarship</b> for eligible students</span></div>
              <div className="aimc-point"><span className="aimc-tick">✓</span><span><b>600 — 20% discount</b> for remaining students</span></div>
            </div>
            <div className="aimc-hero-cta">
              <a href="#aimc-apply" className="aimc-btn aimc-btn-primary aimc-btn-lg">Enquire Now →</a>
              <a href="#aimc-scholarships" className="aimc-btn aimc-btn-cyan aimc-btn-lg">Check Eligibility</a>
            </div>
          </div>

          {/* DASHBOARD */}
          <div ref={dashRef} className={`aimc-dash aimc-reveal${dashVisible ? ' aimc-in' : ''}`}>
            <div className="aimc-dash-inner">
              <div className="aimc-gcard">
                <span className="aimc-pct">100% Scholarship</span>
                <div ref={ref1} className="aimc-num">{total1}</div>
                <span className="aimc-lbl">FREE Seats</span>
              </div>
              <div className="aimc-gcard">
                <span className="aimc-pct">50% Concession</span>
                <div ref={ref2} className="aimc-num">{total2}</div>
                <span className="aimc-lbl">HALF Seats</span>
              </div>
              <div className="aimc-gcard">
                <span className="aimc-pct">20% Discount</span>
                <div ref={ref3} className="aimc-num">{total3}</div>
                <span className="aimc-lbl">CONCESSION</span>
              </div>
              <div className="aimc-gcard aimc-span2">
                <span className="aimc-pct">Scholarship Support Program</span>
                <div ref={ref4} className="aimc-num">{total4}</div>
                <span className="aimc-lbl">Total Students Supported</span>
              </div>
            </div>
          </div>
        </div>

        {/* PROMINENT BANNER VISUAL */}
        <div className="aimc-wrap">
          <div className="aimc-banner-showcase">
            <img src={aiBanner} alt="Start Your AI-Powered Medical Coding Career" className="aimc-banner-img" />
          </div>
        </div>
      </header>

      {/* MARQUEE STRIP */}
      <div className="aimc-strip" aria-hidden="true">
        <div className="aimc-row" id="aimcMarq">
          <span className="aimc-item"><b>AI-Powered Training</b></span><span className="aimc-item">Placement Support</span>
          <span className="aimc-item"><b>AI-Enabled Learning</b></span><span className="aimc-item">ICD-10 & CPT</span>
          <span className="aimc-item"><b>Industry Curriculum</b></span><span className="aimc-item">Experienced Trainers</span>
          <span className="aimc-item"><b>Career Guidance</b></span><span className="aimc-item">Fresher Friendly</span>
          <span className="aimc-item"><b>Coimbatore Intake Open</b></span><span className="aimc-item">Easy Online Registration</span>
        </div>
      </div>

      {/* SCHOLARSHIPS */}
      <section className="aimc-sec-pad" id="aimc-scholarships">
        <div className="aimc-wrap">
          <div className="aimc-shead">
            <span className="aimc-kick">Scholarship Eligibility</span>
            <h2>Three tiers. One launchpad into <span style={{ fontStyle: 'italic', color: 'var(--aimc-cyan)' }}>healthcare careers.</span></h2>
            <p>Every applicant is assessed for the highest scholarship they qualify for. Here is how the 1,008 seats are distributed.</p>
          </div>
          <div className="aimc-grid-3">
            <CountCard count={108} label="FREE · 100% Scholarship" pct="100%" feature />
            <CountCard count={300} label="HALF · 50% Concession" pct="50%" />
            <CountCard count={600} label="CONCESSION · 20% Discount" pct="20%" />
          </div>
          <div className="aimc-total-banner">
            <div className="aimc-n" data-count="1008">1,008</div>
            <div className="aimc-t">Total Beneficiaries Supported</div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="aimc-sec-pad aimc-form-section" id="aimc-apply">
        <div className="aimc-wrap">
          <div className="aimc-shead">
            <span className="aimc-kick">Application & Enquiry</span>
            <h2>Apply for AI-Powered Medical Coding Training</h2>
            <p>Takes under two minutes. Our admissions team reviews every application personally.</p>
          </div>
          <div className="aimc-form-shell">
            {!success ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="aimc-form-grid">
                  <div className="aimc-field">
                    <label>Full Name <span className="aimc-req">*</span></label>
                    <input type="text" name="name" value={form.name} onChange={handleInput} placeholder="Your full name" required />
                  </div>
                  <div className="aimc-field">
                    <label>Mobile Number <span className="aimc-req">*</span></label>
                    <input type="tel" name="mobile" value={form.mobile} onChange={handleInput} placeholder="10-digit mobile number" required />
                  </div>
                  <div className="aimc-field">
                    <label>Email Address <span className="aimc-req">*</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleInput} placeholder="you@example.com" required />
                  </div>
                  <div className="aimc-field">
                    <label>City <span className="aimc-req">*</span></label>
                    <select name="city" value={form.city} onChange={handleInput} required>
                      <option value="" disabled>Select your city</option>
                      <option>Coimbatore</option><option>Chennai</option><option>Madurai</option>
                      <option>Trichy</option><option>Salem</option><option>Erode</option>
                      <option>Vellore</option><option>Dindigul</option><option>Tirunelveli</option><option>Thanjavur</option>
                    </select>
                  </div>
                  <div className="aimc-field">
                    <label>Highest Qualification <span className="aimc-req">*</span></label>
                    <input type="text" name="qual" value={form.qual} onChange={handleInput} placeholder="e.g. B.Sc, B.E, BCA, Diploma" required />
                  </div>
                  <div className="aimc-field">
                    <label>Year of Graduation</label>
                    <input type="text" name="year" value={form.year} onChange={handleInput} placeholder="e.g. 2025" />
                  </div>
                  <div className="aimc-field aimc-full">
                    <label>Message (Optional)</label>
                    <textarea name="msg" value={form.msg} onChange={handleInput} placeholder="Anything you'd like our admissions team to know?" rows={3}></textarea>
                  </div>
                  <div className="aimc-form-foot">
                    <button type="submit" className="aimc-btn aimc-btn-primary aimc-btn-lg" disabled={submitting}>
                      {submitting ? 'Submitting...' : 'Submit Application →'}
                    </button>
                    <span className="aimc-note">🔒 Your details are safe. We only use them for admissions.</span>
                  </div>
                </div>
              </form>
            ) : (
              <div className="aimc-form-success">
                <div style={{ fontSize: 34 }}>✓</div>
                <h3>Application Received</h3>
                <p>Thank you for enquiring about our AI-Powered Medical Coding Training. Our admissions team will contact you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="aimc-sec-pad" id="aimc-locations">
        <div className="aimc-wrap">
          <div className="aimc-shead">
            <span className="aimc-kick">Training Locations</span>
            <h2>Where our training is rolling out</h2>
            <p>The program launches in Coimbatore with more Tamil Nadu cities opening soon.</p>
          </div>
          <div className="aimc-loc-grid">
            {['Coimbatore','Chennai','Madurai','Trichy','Salem','Erode','Vellore','Dindigul','Tirunelveli','Thanjavur'].map(city => (
              <a key={city} href={`/free-medical-coding-course-${city.toLowerCase()}/`} className="aimc-loc aimc-open">
                <span className="aimc-city">{city}</span>
                <span className="aimc-st"><span className="aimc-d"></span>🟢 Admissions Open</span>
                <span className="aimc-btn aimc-btn-cyan aimc-btn-sm aimc-open-cta">Free Course in {city} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="aimc-sec-pad" id="aimc-why">
        <div className="aimc-wrap">
          <div className="aimc-shead">
            <span className="aimc-kick">Why Thoughtflows</span>
            <h2>Built to turn freshers into <span style={{ fontStyle: 'italic', color: 'var(--aimc-cyan)' }}>certified coders.</span></h2>
            <p>Why Choose Thoughtflows Medical Coding Academy</p>
          </div>
          <div className="aimc-bento">
            <div className="aimc-feat aimc-wide"><div className="aimc-ic">🩺</div><h3>Medical Coding Training</h3><p>Structured, industry-aligned training covering ICD, CPT and HCPCS — taught for real-world clinical accuracy.</p></div>
            <div className="aimc-feat"><div className="aimc-ic">🎯</div><h3>Placement Support</h3><p>Dedicated placement assistance connecting you to healthcare and coding employers.</p></div>
            <div className="aimc-feat"><div className="aimc-ic">📚</div><h3>Industry Curriculum</h3><p>A syllabus mapped to what employers actually hire for today.</p></div>
            <div className="aimc-feat"><div className="aimc-ic">👩‍🏫</div><h3>Experienced Trainers</h3><p>Learn from certified, experienced medical coding professionals.</p></div>
            <div className="aimc-feat"><div className="aimc-ic">🧭</div><h3>Career Guidance</h3><p>One-on-one mentoring to plan your medical coding career path.</p></div>
            <div className="aimc-feat"><div className="aimc-ic">🎓</div><h3>Scholarship Opportunities</h3><p>1,008 scholarships across three tiers to make training accessible.</p></div>
            <div className="aimc-feat aimc-wide"><div className="aimc-ic">⚡</div><h3>Practical, Fresher-Friendly Learning</h3><p>Hands-on, beginner-friendly sessions designed so freshers with no prior experience can thrive.</p></div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="aimc-sec-pad aimc-trust-sec">
        <div className="aimc-wrap">
          <div className="aimc-shead">
            <span className="aimc-kick">Trust & Credibility</span>
            <h2>What you can count on</h2>
          </div>
          <div className="aimc-trust-grid">
            <div className="aimc-trust"><div className="aimc-ic">🤝</div><div><h4>Placement Support</h4><p>Active assistance to help you land your first medical coding role.</p></div></div>
            <div className="aimc-trust"><div className="aimc-ic">🏥</div><div><h4>Industry-Oriented Training</h4><p>Curriculum shaped around real healthcare coding requirements.</p></div></div>
            <div className="aimc-trust"><div className="aimc-ic">⭐</div><div><h4>Experienced Trainers</h4><p>Guidance from seasoned coding professionals and mentors.</p></div></div>
            <div className="aimc-trust"><div className="aimc-ic">🧭</div><div><h4>Career Guidance</h4><p>Personalised direction from enrolment through placement.</p></div></div>
            <div className="aimc-trust"><div className="aimc-ic">🎁</div><div><h4>Scholarship Benefits</h4><p>Up to 100% scholarships under the scholarship program.</p></div></div>
            <div className="aimc-trust"><div className="aimc-ic">🚀</div><div><h4>Career-Focused Learning</h4><p>Every module is built to make you employable, fast.</p></div></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="aimc-sec-pad" id="aimc-contact">
        <div className="aimc-wrap">
          <div className="aimc-contact-shell">
            <h2>Need help with your application?</h2>
            <p>Our admissions team is ready to assist you with eligibility, course details and the registration process.</p>
            <div className="aimc-contact-meta">
              <a href="tel:+919655079784">📞 +91 96550 79784</a>
              <a href="mailto:info@thoughtflows.in">✉️ info@thoughtflows.in</a>
            </div>
            <div className="aimc-contact-btns">
              <a href="tel:+919655079784" className="aimc-btn aimc-btn-cyan aimc-btn-lg">📞 Call Now</a>
              <a href="https://wa.me/919655079784" target="_blank" rel="noopener noreferrer" className="aimc-btn aimc-btn-wa aimc-btn-lg">💬 WhatsApp Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="aimc-finalcta">
        <div className="aimc-wrap">
          <h2>Start your <span className="aimc-em">AI-powered medical coding</span> career today</h2>
          <p>Enquire now to learn about our medical coding training and AI-enabled learning with placement support.</p>
          <div className="aimc-btns">
            <a href="#aimc-apply" className="aimc-btn aimc-btn-primary aimc-btn-lg">Enquire Now →</a>
            <a href="#aimc-scholarships" className="aimc-btn aimc-btn-cyan aimc-btn-lg">Check Eligibility</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="aimc-footer">
        <div className="aimc-wrap">
          <div className="aimc-foot-grid">
            <div className="aimc-foot-brand">
              <span className="aimc-logo-chip" style={{ marginBottom: 18 }}>
                <span className="aimc-brand-logo" role="img" aria-label="Thoughtflows logo"></span>
              </span>
              <p>Thoughtflows Medical Coding Academy. Start your AI-powered medical coding career with training and placement support across Tamil Nadu.</p>
            </div>
            <div className="aimc-foot-col">
              <h5>Quick Links</h5>
              <a href="#aimc-apply">Apply Now</a>
              <a href="#aimc-scholarships">Scholarship Eligibility</a>
              <a href="#aimc-locations">Locations</a>
              <a href="#aimc-contact">Contact Us</a>
            </div>
            <div className="aimc-foot-col">
              <h5>Reach Us</h5>
              <a href="tel:+919655079784">📞 +91 96550 79784</a>
              <a href="mailto:info@thoughtflows.in">✉️ info@thoughtflows.in</a>
              <span>📍 Coimbatore – Admissions Open</span>
            </div>
          </div>
          <div className="aimc-foot-bottom">
            <span>© 2026 Thoughtflows Medical Coding Academy. All Rights Reserved.</span>
            <span>AI-Powered Medical Coding</span>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE BAR */}
      <div className="aimc-mobar">
        <a href="tel:+919655079784" className="aimc-btn aimc-btn-ghost">📞 Call Now</a>
        <a href="#aimc-apply" className="aimc-btn aimc-btn-primary">Enquire Now</a>
      </div>
    </>
  );
};

export default AIMedicalCoding;
