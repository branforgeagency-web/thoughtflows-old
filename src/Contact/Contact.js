import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import supportTeamImg from "../images/contact/support-team.jpg";
import contactHeroBg from "../images/contact/contact-banner-balls.jpg";
import map from "../images/svg/map.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import Meta from '../Meta';
import { isValidPhone, normalizePhone } from '../utils/phone';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { logEnquiry } from '../utils/enquiryLog';
import { coursesList } from '../coursesList';
import { BRANCHES, STATES } from "../Home/BranchShowcase/branchDirectoryData";
import { branchDetails } from "../data/branchDetails";
function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // Initialize EmailJS with the same key from Home.js
    // emailjs.init("Bu4k9osIvSGQZvMvy");
  }, [])
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const isMobile = viewportWidth <= 768;
  const isTablet = viewportWidth > 768 && viewportWidth <= 1024;
  const [activeSection, setActiveSection] = useState(null);
  const [showZoomPopup, setShowZoomPopup] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hoveredPin, setHoveredPin] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ph: '',
    course: '',
    location: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterStatus('Thank you for subscribing to ThoughtFlows newsletter!');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus(''), 4500);
    }
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setShowZoomPopup(true);
  };

  const MAP_COORDINATES = {
    saravanampatti: { top: '66.43%', left: '34.76%' },
    hopes: { top: '70.77%', left: '36.71%' },
    gandhipuram: { top: '70.77%', left: '32.15%' },
    salem: { top: '64.08%', left: '40.62%' },
    trichy: { top: '71.44%', left: '42.25%' },
    theni: { top: '76.25%', left: '33.22%' },
    tirupati: { top: '45.02%', left: '48.76%' },
    ameerpet: { top: '16.93%', left: '45.51%' },
    dilsukhnagar: { top: '18.93%', left: '48.76%' },
    vizag: { top: '15.59%', left: '80.69%' },
    kochi: { top: '70.44%', left: '23.03%' },
    trivandrum: { top: '80.81%', left: '27.27%' },
    pune: { top: '22.74%', left: '19.54%' },
    kolhapur: { top: '37.46%', left: '16.29%' }
  };

  const allBranches = useMemo(() => {
    return BRANCHES.map((b) => {
      const d = branchDetails[b.id] || {};
      const coords = MAP_COORDINATES[b.id] || { top: '50%', left: '50%' };
      return {
        ...b,
        ...coords,
        email: d.email || 'thoughtflowsinfo@gmail.com',
        phone: b.phone || d.phone || '',
        phoneHref: b.phoneHref || (d.phoneClean ? `tel:${d.phoneClean}` : ''),
        address: b.address || d.address || '',
        instagram: d.instagram || '',
        facebook: d.facebook || '',
      };
    });
  }, []);

  const [selectedState, setSelectedState] = useState('All');
  const [selectedBranchId, setSelectedBranchId] = useState('gandhipuram');
  const [branchSearch, setBranchSearch] = useState('');

  const stateCounts = useMemo(() => {
    const counts = { All: allBranches.length };
    allBranches.forEach((b) => {
      counts[b.state] = (counts[b.state] || 0) + 1;
    });
    return counts;
  }, [allBranches]);

  const filteredBranches = useMemo(() => {
    let list = selectedState === 'All'
      ? allBranches
      : allBranches.filter((b) => b.state === selectedState);
    if (branchSearch.trim()) {
      const q = branchSearch.toLowerCase();
      list = list.filter((b) =>
        b.name.toLowerCase().includes(q) ||
        b.city.toLowerCase().includes(q) ||
        b.state.toLowerCase().includes(q) ||
        (b.address && b.address.toLowerCase().includes(q))
      );
    }
    return list;
  }, [allBranches, selectedState, branchSearch]);

  const activeBranch = useMemo(() => {
    if (!filteredBranches.length) return allBranches[0];
    return (
      filteredBranches.find((b) => b.id === selectedBranchId) ||
      allBranches.find((b) => b.id === selectedBranchId) ||
      filteredBranches[0]
    );
  }, [allBranches, selectedBranchId, filteredBranches]);

  const activeStyle = {
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    background: 'linear-gradient(90deg,  white 50%, white 50%)'
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.ph) newErrors.ph = 'Phone number is required';
    else if (!isValidPhone(formData.ph)) newErrors.ph = 'Phone number is invalid';
    if (!formData.course) newErrors.course = 'Please select a course';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 3) {
      newErrors.message = 'Message must be at least 3 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus({ type: '', message: '' });

      try {
        const fullDetails = `Name: ${formData.name}
Email: ${formData.email}
Mobile / Phone: ${formData.ph}
Course: ${formData.course || 'N/A'}
Location: ${formData.location || 'N/A'}

Message:
${formData.message || 'N/A'}`;

        // EmailJS template parameters
        const templateParams = {
          to_email: 'thoughtflowsinfo@gmail.com',
          name: formData.name,
          from_name: formData.name,
          user_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          user_email: formData.email,
          reply_to: formData.email,
          phone: normalizePhone(formData.ph),
          mobile: normalizePhone(formData.ph),
          ph: normalizePhone(formData.ph),
          user_phone: normalizePhone(formData.ph),
          course: formData.course || '',
          qualification: 'N/A',
          location: formData.location || '',
          message: fullDetails,
          user_message: formData.message || '',
          subject: `Contact Form Submission from ${formData.name} (${formData.email})`,
          full_message: fullDetails
        };

        // Log this enquiry to the Google Sheet (admin report). Fire-and-forget:
        // this never throws, so it can't block or break the email send below.
        logEnquiry('Contact', {
          name: formData.name,
          email: formData.email,
          phone: formData.ph,
          course: formData.course,
          location: formData.location,
          message: formData.message,
        });

        // Send email using the same EmailJS credentials as Home.js
        const response = await emailjs.send(
          'service_psbuu6o',
          'template_65u7qqm',
          templateParams,
          "Bu4k9osIvSGQZvMvy"
        );

        console.log('Email sent successfully:', response);
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for contacting us! We will get back to you soon.'
        });

        // Reset form after successful submission
        setFormData({ name: '', email: '', message: '', ph: "", course: "", location: "" });
        setErrors({});

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: '', message: '' });
        }, 5000);

      } catch (error) {
        console.error('Failed to send email:', error);
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again or contact us directly.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };


  return (
    <>
      <Meta title="Contact ThoughtFlows | Medical Coding Support & Queries" description="Reach out to ThoughtFlows for inquiries about medical coding training, courses, admissions, and support. We’re here to help you grow your career." canonical="https://www.thoughtflows.in/contact" />

      {/* Location Zoom Popup */}
      {showZoomPopup && selectedLocation && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[99999] flex items-center justify-center p-4"
          onClick={() => setShowZoomPopup(false)}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-[#0D8F9C]">{selectedLocation.name}</h2>
              <button
                onClick={() => setShowZoomPopup(false)}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} className="text-gray-600" />
              </button>
            </div>

            <div className="space-y-4">
              {selectedLocation.email && (
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-[#0D8F9C] rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faArrowDown} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                    <p className="text-gray-600">{selectedLocation.email}</p>
                  </div>
                </div>
              )}

              {selectedLocation.phone && (
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-[#0D8F9C] rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faArrowDown} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                    <a
                      href={selectedLocation.phoneHref || `tel:${selectedLocation.phone.split(/[/,&]/)[0].replace(/[^0-9+]/g, '')}`}
                      className="text-gray-600 hover:text-[#0D8F9C] transition-colors"
                    >
                      {selectedLocation.phone}
                    </a>
                  </div>
                </div>
              )}

              {selectedLocation.address && (
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-[#0D8F9C] rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faArrowDown} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Address</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedLocation.address}</p>
                  </div>
                </div>
              )}

              {!selectedLocation.phone && !selectedLocation.address && !selectedLocation.email && (
                <p className="text-gray-500 italic py-3 text-center">
                  Branch contact details coming soon.
                </p>
              )}

              {(selectedLocation.instagram || selectedLocation.facebook) && (
                <div className="flex items-center gap-3 pt-3">
                  {selectedLocation.instagram && (
                    <a
                      href={selectedLocation.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium shadow-sm hover:opacity-90 transition-all text-sm"
                      style={{
                        background: 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)'
                      }}
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                  )}
                  {selectedLocation.facebook && (
                    <a
                      href={selectedLocation.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium shadow-sm hover:opacity-90 transition-all text-sm"
                      style={{ backgroundColor: '#1877F2' }}
                    >
                      <i className="fab fa-facebook"></i>
                      <span>Facebook</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setShowZoomPopup(false)}
                className="px-6 py-3 bg-[#0D8F9C] text-white rounded-lg hover:bg-[#0a848f] transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
      <motion.div
        className="contact-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* ================= Hero Banner (Matching Raiou Design with Desk Image) ================= */}
        <div
          className="contact-raiou-hero"
          style={{ backgroundImage: `url(${contactHeroBg})` }}
        >
          <div className="contact-raiou-hero-container">
            <div className="contact-raiou-hero-left">
              <h1 className="contact-raiou-hero-title">
                <span className="contact-raiou-pill">Contact</span>
                <span className="contact-raiou-word">Us</span>
              </h1>
              <p className="contact-raiou-hero-desc">
                Have a question or looking to begin your medical coding career? Fill out the form below, reach our counselors directly, or visit any of our 14 campuses across South India and Maharashtra.
              </p>
            </div>
          </div>
        </div>

        {/* ================= Section 1: Stay In Touch With Us ================= */}
        <section className="contact-raiou-touch-section">
          <div className="contact-raiou-touch-container">
            {/* Left Column */}
            <div className="contact-raiou-touch-left">
              <div className="contact-raiou-decor-dots" aria-hidden="true">
                <span className="dot dot-navy"></span>
                <span className="dot dot-coral"></span>
              </div>
              <span className="contact-raiou-eyebrow">LET'S CONNECT</span>
              <h2 className="contact-raiou-touch-title">Stay In Touch With Us</h2>
              <p className="contact-raiou-touch-desc">
                Reach out to ThoughtFlows Medical Coding Academy. Whether you need syllabus details, certification counseling, or fee assistance, our expert team is ready to guide you.
              </p>

              <div className="contact-raiou-info-list">
                <div className="contact-raiou-info-item">
                  <div className="contact-raiou-icon-circle">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-raiou-info-text">
                    <h3 className="contact-raiou-info-label">Our Address (Main Branch)</h3>
                    <p className="contact-raiou-info-val">
                      Jay Enclave, 1084, 3rd St, Cross Cut Road, Gandhipuram, Coimbatore, Tamil Nadu – 641012
                    </p>
                  </div>
                </div>

                <div className="contact-raiou-info-item">
                  <div className="contact-raiou-icon-circle">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-raiou-info-text">
                    <h3 className="contact-raiou-info-label">Email Address</h3>
                    <a href="mailto:thoughtflowsinfo@gmail.com" className="contact-raiou-info-link">
                      thoughtflowsinfo@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-raiou-info-item">
                  <div className="contact-raiou-icon-circle">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="contact-raiou-info-text">
                    <h3 className="contact-raiou-info-label">Telephone</h3>
                    <a href="tel:+919384576852" className="contact-raiou-info-link">
                      +91 93845 76852 / +91 95004 88825
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo with Floating Quote Card */}
            <div className="contact-raiou-touch-right">
              <div className="contact-raiou-photo-wrapper">
                <img
                  src={supportTeamImg}
                  alt="ThoughtFlows Student Admissions Counselor"
                  className="contact-raiou-counselor-photo"
                />

                {/* Floating Quote Card */}
                <div className="contact-raiou-quote-card">
                  <div className="contact-raiou-quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="contact-raiou-quote-text">
                    "Empowering aspiring healthcare professionals with industry-leading medical coding curriculum, AAPC-certified trainers, and 100% placement assurance."
                  </p>
                  {/* <div className="contact-raiou-quote-author">
                    <strong className="author-name">Mrs. Malathi R.</strong>
                    <span className="author-role">HEAD OF STUDENT ADMISSIONS</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Section 2: Map + Send Message ================= */}
        <section className="contact-raiou-form-map-section">
          <div className="contact-raiou-form-map-card">
            {/* Left: Embedded Live Google Map for Gandhipuram Main Branch */}
            <div className="contact-raiou-map-container">
              <iframe
                title="ThoughtFlows Medical Coding Academy Gandhipuram Main Branch Map"
                src="https://maps.google.com/maps?q=Jay%20Enclave%2C%201084%2C%203rd%20St%2C%20Cross%20Cut%20Road%2C%20Gandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="contact-raiou-map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Right: Modern Contact Form */}
            <div className="contact-raiou-form-container">
              <h2 className="contact-raiou-form-title">Send Us a Message</h2>

              {submitStatus.message && (
                <div
                  className="contact-raiou-status-msg"
                  style={{
                    backgroundColor: submitStatus.type === 'success' ? '#10b981' : '#ef4444'
                  }}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-raiou-form">
                <div className="contact-raiou-form-row">
                  <div className="contact-raiou-field">
                    <label htmlFor="rf-name">First Name</label>
                    <input
                      id="rf-name"
                      type="text"
                      name="name"
                      placeholder="First Name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>

                  <div className="contact-raiou-field">
                    <label htmlFor="rf-phone">Phone</label>
                    <input
                      id="rf-phone"
                      type="tel"
                      name="ph"
                      placeholder="Phone Number"
                      required
                      value={formData.ph}
                      onChange={handleInputChange}
                    />
                    {errors.ph && <span className="field-error">{errors.ph}</span>}
                  </div>
                </div>

                <div className="contact-raiou-form-row">
                  <div className="contact-raiou-field">
                    <label htmlFor="rf-email">Email</label>
                    <input
                      id="rf-email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>

                  <div className="contact-raiou-field">
                    <label htmlFor="rf-course">Subject</label>
                    <select
                      id="rf-course"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleInputChange}
                    >
                      <option value="">-- Choose Subject --</option>
                      {coursesList.map((group) => (
                        <optgroup key={group.category} label={group.category}>
                          {group.courses.map((course) => (
                            <option key={course} value={course}>{course}</option>
                          ))}
                        </optgroup>
                      ))}
                      <option value="OTHER">Other Query</option>
                    </select>
                    {errors.course && <span className="field-error">{errors.course}</span>}
                  </div>
                </div>

                <div className="contact-raiou-field">
                  <label htmlFor="rf-location">Location</label>
                  <select
                    id="rf-location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>-- Choose Location --</option>
                    <option value="Saravanampatti, Coimbatore">Saravanampatti, Coimbatore</option>
                    <option value="Hopes, Coimbatore">Hopes, Coimbatore</option>
                    <option value="Gandhipuram, Coimbatore">Gandhipuram, Coimbatore</option>
                    <option value="Salem">Salem</option>
                    <option value="Trichy">Trichy</option>
                    <option value="Tirupati">Tirupati</option>
                    <option value="Ameerpet, Hyderabad">Ameerpet, Hyderabad</option>
                    <option value="Dilsukhnagar, Hyderabad">Dilsukhnagar, Hyderabad</option>
                    <option value="Kochi">Kochi</option>
                    <option value="Trivandrum">Trivandrum</option>
                    <option value="Vizag">Vizag</option>
                    <option value="Pune, Maharashtra">Pune, Maharashtra</option>
                    <option value="Kolhapur, Maharashtra">Kolhapur, Maharashtra</option>
                    <option value="Theni">Theni</option>
                    <option value="Online Training">Online Training</option>
                  </select>
                  {errors.location && <span className="field-error">{errors.location}</span>}
                </div>

                <div className="contact-raiou-field">
                  <label htmlFor="rf-message">Message</label>
                  <textarea
                    id="rf-message"
                    name="message"
                    rows="3"
                    placeholder="Your Message..."
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="contact-raiou-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ================= Section 3: Subscribe Newsletter ================= */}
        <section className="contact-raiou-newsletter-section">
          <div className="contact-raiou-newsletter-card">
            <h2 className="contact-raiou-newsletter-title">Subscribe Our Newsletter</h2>
            <form onSubmit={handleNewsletterSubmit} className="contact-raiou-newsletter-form">
              <input
                type="email"
                placeholder="Email Address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="contact-raiou-newsletter-input"
              />
              <button type="submit" className="contact-raiou-newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
          {newsletterStatus && (
            <div className="contact-raiou-newsletter-feedback">{newsletterStatus}</div>
          )}
        </section>

        {/* ================= Redesigned Non-Card Campus Directory Section ================= */}
        <section className="contact-directory-section" aria-labelledby="contact-branches-title">
          {/* Section Header */}
          <div className="contact-dir-header">
            <span className="contact-dir-eyebrow">
              <i className="fas fa-location-dot"></i> 14 Academy Campuses
            </span>
            <h2 id="contact-branches-title" className="contact-dir-title">
              Our Branches Across South India &amp; Maharashtra
            </h2>
            <p className="contact-dir-desc">
              Visit any of our premier medical coding academies for hands-on classroom training, CPC/CIC certification guidance, and direct counselor support.
            </p>

            {/* Filter bar: State pills + search */}
            <div className="contact-dir-controls">
              <div className="contact-dir-state-pills" role="group" aria-label="Filter campuses by state">
                {['All', ...STATES].map((state) => {
                  const count = stateCounts[state] || 0;
                  if (state !== 'All' && count === 0) return null;
                  const isActive = selectedState === state;
                  return (
                    <button
                      key={state}
                      type="button"
                      className={`contact-dir-state-btn ${isActive ? 'is-active' : ''}`}
                      onClick={() => {
                        setSelectedState(state);
                        if (state !== 'All') {
                          const firstInState = allBranches.find((b) => b.state === state);
                          if (firstInState) setSelectedBranchId(firstInState.id);
                        }
                      }}
                      aria-pressed={isActive}
                    >
                      <span>{state === 'All' ? 'All Campuses' : state}</span>
                      <span className="contact-dir-pill-count">{count}</span>
                    </button>
                  );
                })}
              </div>

              <div className="contact-dir-search-wrap">
                <i className="fas fa-search contact-dir-search-icon" aria-hidden="true"></i>
                <input
                  type="text"
                  className="contact-dir-search-input"
                  placeholder="Search campus, city or state..."
                  value={branchSearch}
                  onChange={(e) => setBranchSearch(e.target.value)}
                  aria-label="Search campuses"
                />
                {branchSearch && (
                  <button
                    type="button"
                    className="contact-dir-search-clear"
                    onClick={() => setBranchSearch('')}
                    aria-label="Clear search"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Split-Screen Layout (NO CARDS) */}
          <div className="contact-dir-layout">
            {/* Left Pane: Campus Directory List */}
            <div className="contact-dir-list-wrap">
              <div className="contact-dir-list-header">
                <span className="contact-dir-col-num">#</span>
                <span className="contact-dir-col-name">Campus &amp; Location</span>
                <span className="contact-dir-col-contact">Helpline</span>
                <span className="contact-dir-col-action">Details</span>
              </div>

              {filteredBranches.length > 0 ? (
                <div className="contact-dir-rows" role="list">
                  {filteredBranches.map((branch, index) => {
                    const isSelected = activeBranch && activeBranch.id === branch.id;
                    return (
                      <div
                        key={branch.id}
                        role="listitem"
                        className={`contact-dir-row ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => setSelectedBranchId(branch.id)}
                        onMouseEnter={() => setSelectedBranchId(branch.id)}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setSelectedBranchId(branch.id);
                          }
                        }}
                      >
                        <div className="contact-dir-col-num">
                          <span className="contact-dir-row-index">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <div className="contact-dir-col-name">
                          <div className="contact-dir-campus-cell">
                            <img
                              src={branch.img}
                              alt=""
                              className="contact-dir-row-thumb"
                              loading="lazy"
                            />
                            <div className="contact-dir-row-info">
                              <h3 className="contact-dir-row-title">{branch.name}</h3>
                              <div className="contact-dir-row-tags">
                                <span className="contact-dir-state-tag">{branch.state}</span>
                                <span className="contact-dir-city-tag">• {branch.city}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="contact-dir-col-contact">
                          {branch.phone ? (
                            <a
                              href={branch.phoneHref || `tel:${branch.phone}`}
                              className="contact-dir-phone-link"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <i className="fas fa-phone-alt"></i>
                              <span>{branch.phone}</span>
                            </a>
                          ) : (
                            <span className="contact-dir-phone-muted">Available via counselor</span>
                          )}
                        </div>

                        <div className="contact-dir-col-action">
                          <button
                            type="button"
                            className="contact-dir-select-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLocationClick(branch);
                            }}
                            title="View Full Details"
                            aria-label={`View details for ${branch.name}`}
                          >
                            <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="contact-dir-empty">
                  <i className="fas fa-search-location contact-dir-empty-icon"></i>
                  <p>No branches found matching "{branchSearch}".</p>
                  <button
                    type="button"
                    className="contact-dir-reset-btn"
                    onClick={() => {
                      setBranchSearch('');
                      setSelectedState('All');
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>

            {/* Right Pane: Sticky Geographic Locator & Campus Spotlight */}
            <aside className="contact-dir-sidebar" aria-label="Branch spotlight and interactive map">
              {/* Interactive South India & Maharashtra Map */}
              <div className="contact-dir-map-box">
                <div className="contact-dir-map-header">
                  <span className="contact-dir-map-label">
                    <i className="fas fa-compass"></i> Interactive Campus Map
                  </span>
                  <span className="contact-dir-map-hint">Click pin to explore</span>
                </div>
                <div
                  className="contact-dir-map-stage"
                  style={{
                    transformStyle: isMobile || isTablet ? 'none' : 'preserve-3d',
                    transition: isMobile || isTablet ? 'none' : 'transform 0.3s ease-out'
                  }}
                  onMouseMove={isMobile || isTablet ? undefined : (e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width;
                    const y = (e.clientY - rect.top) / rect.height;
                    const tiltX = (y - 0.5) * 16;
                    const tiltY = (x - 0.5) * -16;
                    e.currentTarget.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
                  }}
                  onMouseLeave={isMobile || isTablet ? undefined : (e) => {
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <img
                    src={map}
                    className="contact-dir-map-graphic"
                    alt="Map of ThoughtFlows Academy branch network"
                  />
                  {allBranches.map((branch) => {
                    const isActive = activeBranch && activeBranch.id === branch.id;
                    return (
                      <div
                        key={branch.id}
                        className={`contact-dir-pin ${isActive ? 'is-active' : ''}`}
                        style={{
                          top: branch.top,
                          left: branch.left,
                        }}
                        onMouseEnter={() => setHoveredPin(branch.name)}
                        onMouseLeave={() => setHoveredPin(null)}
                        onClick={() => setSelectedBranchId(branch.id)}
                        aria-label={`Select ${branch.name} branch`}
                        role="button"
                        tabIndex={0}
                      >
                        <span className="contact-dir-pin-pulse" aria-hidden="true" />
                        <span className="contact-dir-pin-dot" />
                        {(hoveredPin === branch.name || isActive) && (
                          <div className="contact-dir-pin-tooltip">
                            <strong>{branch.name}</strong> • {branch.city}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Active Campus Spotlight Feature Box */}
              {activeBranch && (
                <div className="contact-spotlight-dossier">
                  <div className="contact-spotlight-photo-frame">
                    <img
                      src={activeBranch.img}
                      alt={activeBranch.name}
                      className="contact-spotlight-photo"
                    />
                    <div className="contact-spotlight-photo-overlay">
                      <span className="contact-spotlight-badge">
                        {activeBranch.state}
                      </span>
                      <span className="contact-spotlight-city">
                        {activeBranch.city}
                      </span>
                    </div>
                  </div>

                  <div className="contact-spotlight-body">
                    <div className="contact-spotlight-title-row">
                      <h3 className="contact-spotlight-name">{activeBranch.name} Campus</h3>
                      <span className="contact-spotlight-hours-tag">
                        <i className="far fa-clock"></i> Mon–Sat 9AM–6:30PM
                      </span>
                    </div>

                    {activeBranch.address ? (
                      <p className="contact-spotlight-address">
                        <i className="fas fa-location-dot"></i>
                        <span>{activeBranch.address}</span>
                      </p>
                    ) : (
                      <p className="contact-spotlight-address muted">
                        <i className="fas fa-location-dot"></i>
                        <span>Branch address details available via counseling support.</span>
                      </p>
                    )}

                    <div className="contact-spotlight-contact-grid">
                      {activeBranch.phone && (
                        <a
                          href={activeBranch.phoneHref || `tel:${activeBranch.phone.split(/[/,&]/)[0].replace(/[^0-9+]/g, '')}`}
                          className="contact-spotlight-contact-item"
                        >
                          <div className="contact-spotlight-icon-circle">
                            <i className="fas fa-phone-alt"></i>
                          </div>
                          <div>
                            <span className="contact-spotlight-meta-label">Helpline</span>
                            <span className="contact-spotlight-meta-val">{activeBranch.phone}</span>
                          </div>
                        </a>
                      )}

                      <a
                        href={`mailto:${activeBranch.email || 'thoughtflowsinfo@gmail.com'}`}
                        className="contact-spotlight-contact-item"
                      >
                        <div className="contact-spotlight-icon-circle">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                          <span className="contact-spotlight-meta-label">Email Support</span>
                          <span className="contact-spotlight-meta-val">{activeBranch.email || 'thoughtflowsinfo@gmail.com'}</span>
                        </div>
                      </a>
                    </div>

                    <div className="contact-spotlight-actions">
                      <button
                        type="button"
                        className="contact-spotlight-btn-primary"
                        onClick={() => handleLocationClick(activeBranch)}
                      >
                        <i className="fas fa-info-circle"></i>
                        <span>View Campus Details</span>
                      </button>

                      {activeBranch.path && (
                        <Link
                          to={activeBranch.path}
                          className="contact-spotlight-btn-secondary"
                        >
                          <span>Explore Campus</span>
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>

      </motion.div>
    </>
  );
}

export default Contact;
