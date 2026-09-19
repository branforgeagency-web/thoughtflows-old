import React, { useEffect, useRef, useState } from 'react';
import './Vetri108.css';
import Meta from '../Meta';

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
    <div ref={revRef} className={`v108-tier${feature ? ' v108-tier--feature' : ''} v108-reveal${visible ? ' v108-in' : ''}`}>
      {feature && <span className="v108-ribbon">Most Coveted</span>}
      <div ref={ref} className="v108-big">{val.toLocaleString('en-IN')}</div>
      <div className="v108-tag">{label}</div>
      <div className="v108-pctbar"><i style={{ width: pct }}></i></div>
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
const Vetri108 = () => {
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
    const marq = document.getElementById('v108Marq');
    if (marq) marq.innerHTML += marq.innerHTML;
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
      data.append('Interested Course', 'Medical Coding');
      data.append('Message', form.msg);
      data.append('_subject', 'New Vetri 108 Scholarship Application');

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
        title="Vetri 108 – 1,008 Scholarships | Thoughtflows Medical Coding Academy"
        description="Vetri 108 – 1,008 scholarships for medical coding. 108 fully free seats, 300 half scholarships and 600 concessions with placement support for freshers in Coimbatore. Apply now."
        canonical="https://www.thoughtflows.in/vetri-108"
      />

      {/* BACKGROUND */}
      <div className="v108-bg-mesh" aria-hidden="true">
        <div className="v108-blob v108-b1"></div>
        <div className="v108-blob v108-b2"></div>
        <div className="v108-blob v108-b3"></div>
        <div className="v108-blob v108-b4"></div>
      </div>
      <div className="v108-bg-sheen" aria-hidden="true"></div>
      <div className="v108-bg-grid" aria-hidden="true"></div>
      <div className="v108-bg-noise" aria-hidden="true"></div>

      {/* TOPBAR */}
      <div className="v108-topbar">
        <div className="v108-wrap">
          <span className="v108-badge">Coimbatore Admissions Open</span>
          <div className="v108-grp">
            <a href="tel:+919655079784" aria-label="Call us">📞 +91 96550 79784</a>
            <a href="mailto:info@thoughtflows.in" aria-label="Email us">✉️ info@thoughtflows.in</a>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav className={`v108-nav${navScrolled ? ' v108-scrolled' : ''}`}>
        <div className="v108-wrap">
          <a className="v108-brand" href="#v108-top" aria-label="Thoughtflows Medical Coding Academy — Vetri 108">
            <span className="v108-logo-chip">
              <span className="v108-brand-logo" role="img" aria-label="Thoughtflows logo"></span>
            </span>
          </a>
          <div className="v108-nav-links">
            <a href="#v108-scholarships">Scholarships</a>
            <a href="#v108-apply">Apply</a>
            <a href="#v108-locations">Locations</a>
            <a href="#v108-why">Why Us</a>
            <a href="#v108-contact">Contact</a>
          </div>
          <div className="v108-nav-cta">
            <a href="tel:+919655079784" className="v108-btn v108-btn-ghost v108-btn-sm">Call Now</a>
            <a href="#v108-apply" className="v108-btn v108-btn-primary v108-btn-sm">Apply Now</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="v108-hero" id="v108-top">
        <div className="v108-wrap">
          <div ref={heroRef} className={`v108-hero-copy v108-reveal${heroVisible ? ' v108-in' : ''}`}>
            <span className="v108-eyebrow">
              <span className="v108-dot"></span>1,008 Scholarships · 2026 Intake
            </span>
            <h1 className="v108-h1">Vetri 108 <br /><span className="v108-accent">1,008 Scholarships</span></h1>
            <p className="v108-sub">
              Free medical coding training with placement support for freshers — by Thoughtflows Medical Coding Academy.
            </p>
            <div className="v108-points">
              <div className="v108-point"><span className="v108-tick">✓</span><span><b>108 — Fully free</b> training for selected students (100% scholarship)</span></div>
              <div className="v108-point"><span className="v108-tick">✓</span><span><b>300 — 50% scholarship</b> for eligible students</span></div>
              <div className="v108-point"><span className="v108-tick">✓</span><span><b>600 — 20% discount</b> for remaining students</span></div>
            </div>
            <div className="v108-hero-cta">
              <a href="#v108-apply" className="v108-btn v108-btn-primary v108-btn-lg">Apply Now →</a>
              <a href="#v108-scholarships" className="v108-btn v108-btn-gold v108-btn-lg">Check Eligibility</a>
            </div>
          </div>

          {/* DASHBOARD */}
          <div ref={dashRef} className={`v108-dash v108-reveal${dashVisible ? ' v108-in' : ''}`}>
            <div className="v108-dash-inner">
              <div className="v108-gcard">
                <span className="v108-pct">100% Scholarship</span>
                <div ref={ref1} className="v108-num">{total1}</div>
                <span className="v108-lbl">FREE Seats</span>
              </div>
              <div className="v108-gcard">
                <span className="v108-pct">50% Concession</span>
                <div ref={ref2} className="v108-num">{total2}</div>
                <span className="v108-lbl">HALF Seats</span>
              </div>
              <div className="v108-gcard">
                <span className="v108-pct">20% Discount</span>
                <div ref={ref3} className="v108-num">{total3}</div>
                <span className="v108-lbl">CONCESSION</span>
              </div>
              <div className="v108-gcard v108-span2">
                <span className="v108-pct">Scholarship Support Program</span>
                <div ref={ref4} className="v108-num">{total4}</div>
                <span className="v108-lbl">Total Students Supported</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MARQUEE STRIP */}
      <div className="v108-strip" aria-hidden="true">
        <div className="v108-row" id="v108Marq">
          <span className="v108-item"><b>Free Training</b></span><span className="v108-item">Placement Support</span>
          <span className="v108-item"><b>Industry Curriculum</b></span><span className="v108-item">Experienced Trainers</span>
          <span className="v108-item"><b>Career Guidance</b></span><span className="v108-item">Fresher Friendly</span>
          <span className="v108-item"><b>Coimbatore Intake Open</b></span><span className="v108-item">Easy Online Registration</span>
        </div>
      </div>

      {/* SCHOLARSHIPS */}
      <section className="v108-sec-pad" id="v108-scholarships">
        <div className="v108-wrap">
          <div className="v108-shead">
            <span className="v108-kick">Scholarship Eligibility</span>
            <h2>Three tiers. One launchpad into <span style={{ fontStyle: 'italic', color: 'var(--v108-gold-soft)' }}>healthcare careers.</span></h2>
            <p>Every applicant is assessed for the highest scholarship they qualify for. Here is how the 1,008 seats are distributed.</p>
          </div>
          <div className="v108-grid-3">
            <CountCard count={108} label="FREE · 100% Scholarship" pct="100%" feature />
            <CountCard count={300} label="HALF · 50% Concession" pct="50%" />
            <CountCard count={600} label="CONCESSION · 20% Discount" pct="20%" />
          </div>
          <div className="v108-total-banner">
            <div className="v108-n" data-count="1008">1,008</div>
            <div className="v108-t">Total Beneficiaries Supported</div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="v108-sec-pad v108-form-section" id="v108-apply">
        <div className="v108-wrap">
          <div className="v108-shead">
            <span className="v108-kick">Application</span>
            <h2>Apply for Vetri 108 — 1,008 Scholarships</h2>
            <p>Takes under two minutes. Our admissions team reviews every application personally.</p>
          </div>
          <div className="v108-form-shell">
            {!success ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="v108-form-grid">
                  <div className="v108-field">
                    <label>Full Name <span className="v108-req">*</span></label>
                    <input type="text" name="name" value={form.name} onChange={handleInput} placeholder="Your full name" required />
                  </div>
                  <div className="v108-field">
                    <label>Mobile Number <span className="v108-req">*</span></label>
                    <input type="tel" name="mobile" value={form.mobile} onChange={handleInput} placeholder="10-digit mobile number" required />
                  </div>
                  <div className="v108-field">
                    <label>Email Address <span className="v108-req">*</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleInput} placeholder="you@example.com" required />
                  </div>
                  <div className="v108-field">
                    <label>City <span className="v108-req">*</span></label>
                    <select name="city" value={form.city} onChange={handleInput} required>
                      <option value="" disabled>Select your city</option>
                      <option>Coimbatore</option><option>Chennai</option><option>Madurai</option>
                      <option>Trichy</option><option>Salem</option><option>Erode</option>
                      <option>Vellore</option><option>Dindigul</option><option>Tirunelveli</option><option>Thanjavur</option>
                    </select>
                  </div>
                  <div className="v108-field">
                    <label>Highest Qualification <span className="v108-req">*</span></label>
                    <input type="text" name="qual" value={form.qual} onChange={handleInput} placeholder="e.g. B.Sc, B.E, BCA, Diploma" required />
                  </div>
                  <div className="v108-field">
                    <label>Year of Graduation</label>
                    <input type="text" name="year" value={form.year} onChange={handleInput} placeholder="e.g. 2025" />
                  </div>
                  <div className="v108-field v108-full">
                    <label>Message (Optional)</label>
                    <textarea name="msg" value={form.msg} onChange={handleInput} placeholder="Anything you'd like our admissions team to know?" rows={3}></textarea>
                  </div>
                  <div className="v108-form-foot">
                    <button type="submit" className="v108-btn v108-btn-primary v108-btn-lg" disabled={submitting}>
                      {submitting ? 'Submitting...' : 'Submit Application →'}
                    </button>
                    <span className="v108-note">🔒 Your details are safe. We only use them for admissions.</span>
                  </div>
                </div>
              </form>
            ) : (
              <div className="v108-form-success">
                <div style={{ fontSize: 34 }}>✓</div>
                <h3>Application Received</h3>
                <p>Thank you for applying for Vetri 108 – 1,008 Scholarships. Our admissions team will contact you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="v108-sec-pad" id="v108-locations">
        <div className="v108-wrap">
          <div className="v108-shead">
            <span className="v108-kick">Scholarship Locations</span>
            <h2>Where Vetri 108 is rolling out</h2>
            <p>The program launches in Coimbatore with more Tamil Nadu cities opening soon.</p>
          </div>
          <div className="v108-loc-grid">
            {['Coimbatore','Chennai','Madurai','Trichy','Salem','Erode','Vellore','Dindigul','Tirunelveli','Thanjavur'].map(city => (
              <a key={city} href={`/free-medical-coding-course-${city.toLowerCase()}/`} className="v108-loc v108-open">
                <span className="v108-city">{city}</span>
                <span className="v108-st"><span className="v108-d"></span>🟢 Admissions Open</span>
                <span className="v108-btn v108-btn-gold v108-btn-sm v108-open-cta">Free Course in {city} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="v108-sec-pad" id="v108-why">
        <div className="v108-wrap">
          <div className="v108-shead">
            <span className="v108-kick">Why Thoughtflows</span>
            <h2>Built to turn freshers into <span style={{ fontStyle: 'italic', color: 'var(--v108-gold-soft)' }}>certified coders.</span></h2>
            <p>Why Choose Thoughtflows Medical Coding Academy</p>
          </div>
          <div className="v108-bento">
            <div className="v108-feat v108-wide"><div className="v108-ic">🩺</div><h3>Medical Coding Training</h3><p>Structured, industry-aligned training covering ICD, CPT and HCPCS — taught for real-world clinical accuracy.</p></div>
            <div className="v108-feat"><div className="v108-ic">🎯</div><h3>Placement Support</h3><p>Dedicated placement assistance connecting you to healthcare and coding employers.</p></div>
            <div className="v108-feat"><div className="v108-ic">📚</div><h3>Industry Curriculum</h3><p>A syllabus mapped to what employers actually hire for today.</p></div>
            <div className="v108-feat"><div className="v108-ic">👩‍🏫</div><h3>Experienced Trainers</h3><p>Learn from certified, experienced medical coding professionals.</p></div>
            <div className="v108-feat"><div className="v108-ic">🧭</div><h3>Career Guidance</h3><p>One-on-one mentoring to plan your medical coding career path.</p></div>
            <div className="v108-feat"><div className="v108-ic">🎓</div><h3>Scholarship Opportunities</h3><p>1,008 scholarships across three tiers to make training accessible.</p></div>
            <div className="v108-feat v108-wide"><div className="v108-ic">⚡</div><h3>Practical, Fresher-Friendly Learning</h3><p>Hands-on, beginner-friendly sessions designed so freshers with no prior experience can thrive.</p></div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="v108-sec-pad v108-trust-sec">
        <div className="v108-wrap">
          <div className="v108-shead">
            <span className="v108-kick">Trust & Credibility</span>
            <h2>What you can count on</h2>
          </div>
          <div className="v108-trust-grid">
            <div className="v108-trust"><div className="v108-ic">🤝</div><div><h4>Placement Support</h4><p>Active assistance to help you land your first medical coding role.</p></div></div>
            <div className="v108-trust"><div className="v108-ic">🏥</div><div><h4>Industry-Oriented Training</h4><p>Curriculum shaped around real healthcare coding requirements.</p></div></div>
            <div className="v108-trust"><div className="v108-ic">⭐</div><div><h4>Experienced Trainers</h4><p>Guidance from seasoned coding professionals and mentors.</p></div></div>
            <div className="v108-trust"><div className="v108-ic">🧭</div><div><h4>Career Guidance</h4><p>Personalised direction from enrolment through placement.</p></div></div>
            <div className="v108-trust"><div className="v108-ic">🎁</div><div><h4>Scholarship Benefits</h4><p>Up to 100% scholarships under the Vetri 108 program.</p></div></div>
            <div className="v108-trust"><div className="v108-ic">🚀</div><div><h4>Career-Focused Learning</h4><p>Every module is built to make you employable, fast.</p></div></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="v108-sec-pad" id="v108-contact">
        <div className="v108-wrap">
          <div className="v108-contact-shell">
            <h2>Need help with your application?</h2>
            <p>Our admissions team is ready to assist you with eligibility, course details and the registration process.</p>
            <div className="v108-contact-meta">
              <a href="tel:+919655079784">📞 +91 96550 79784</a>
              <a href="mailto:info@thoughtflows.in">✉️ info@thoughtflows.in</a>
            </div>
            <div className="v108-contact-btns">
              <a href="tel:+919655079784" className="v108-btn v108-btn-gold v108-btn-lg">📞 Call Now</a>
              <a href="https://wa.me/919655079784" target="_blank" rel="noopener noreferrer" className="v108-btn v108-btn-wa v108-btn-lg">💬 WhatsApp Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="v108-finalcta">
        <div className="v108-wrap">
          <h2>Start your <span className="v108-em">medical coding</span> career today</h2>
          <p>Apply for Vetri 108 – 1,008 Scholarships and begin your journey toward a rewarding medical coding career with training and placement support.</p>
          <div className="v108-btns">
            <a href="#v108-apply" className="v108-btn v108-btn-primary v108-btn-lg">Apply Now →</a>
            <a href="#v108-scholarships" className="v108-btn v108-btn-gold v108-btn-lg">Check Eligibility</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="v108-footer">
        <div className="v108-wrap">
          <div className="v108-foot-grid">
            <div className="v108-foot-brand">
              <span className="v108-logo-chip" style={{ marginBottom: 18 }}>
                <span className="v108-brand-logo" role="img" aria-label="Thoughtflows logo"></span>
              </span>
              <p>Vetri 108 – 1,008 Scholarships. Free medical coding training with placement support for freshers across Tamil Nadu.</p>
            </div>
            <div className="v108-foot-col">
              <h5>Quick Links</h5>
              <a href="#v108-apply">Apply Now</a>
              <a href="#v108-scholarships">Scholarship Eligibility</a>
              <a href="#v108-locations">Locations</a>
              <a href="#v108-contact">Contact Us</a>
            </div>
            <div className="v108-foot-col">
              <h5>Reach Us</h5>
              <a href="tel:+919655079784">📞 +91 96550 79784</a>
              <a href="mailto:info@thoughtflows.in">✉️ info@thoughtflows.in</a>
              <span>📍 Coimbatore – Admissions Open</span>
            </div>
          </div>
          <div className="v108-foot-bottom">
            <span>© 2026 Thoughtflows Medical Coding Academy. All Rights Reserved.</span>
            <span>Vetri 108 – 1,008 Scholarships</span>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE BAR */}
      <div className="v108-mobar">
        <a href="tel:+919655079784" className="v108-btn v108-btn-ghost">📞 Call Now</a>
        <a href="#v108-apply" className="v108-btn v108-btn-primary">Apply Now</a>
      </div>
    </>
  );
};

export default Vetri108;
