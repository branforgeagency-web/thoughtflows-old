import React, { useState, useEffect } from 'react';
import contact from "../images/contact/6.jpg";
import map from "../images/svg/map.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import Meta from '../Meta';
import { isValidPhone, normalizePhone } from '../utils/phone';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { logEnquiry } from '../utils/enquiryLog';
import { coursesList } from '../coursesList';
function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // Initialize EmailJS with the same key from Home.js
    // emailjs.init("KLhirNBaXDhIlDonK");
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

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setShowZoomPopup(true);
  };


  const locations = [
    {
      name: 'Saravanampatti',
      top: '64.0%', left: '35.0%', // Adjusted for distance
      email: 'info@thoughtflows.in',
      phone: '+91 93845 76852',
      address: 'No-171/2A, 1st, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035',
      instagram: 'https://www.instagram.com/thought_flows?stkn=a2xlYW43eG45dmt6',
      facebook: 'https://www.facebook.com/Thoughtflowsacademy/',
    },
    {
      name: 'Hopes',
      top: '72.0%', left: '36.5%', // Adjusted for distance
      email: 'info@thoughtflows.in',
      phone: '+91 93845 76852',
      address: 'Door No.62 E/F , 1st Floor South Wing, Lalitha Towers Gandhi Street, Avinashi Rd, Coimbatore, Tamil Nadu 641004',
      instagram: 'https://www.instagram.com/thought_flows?stkn=a2xlYW43eG45dmt6',
      facebook: 'https://www.facebook.com/thoughtflowscoimbatore/',
    },
    {
      name: 'Gandhipuram',
      top: '71.5%', left: '32.0%', // Adjusted for distance
      email: 'info@thoughtflows.in',
      phone: '+91 93845 76852',
      address: 'Jay Enclave, 1084, 3rd St, Cross Cut Road, Gandhipuram, Coimbatore, Tamil Nadu 641012',
      instagram: 'https://www.instagram.com/thought_flows?stkn=a2xlYW43eG45dmt6',
      facebook: 'https://www.facebook.com/people/Thoughtflows-Medical-Coding-Academy-Gandhipuram-Coimbatore/61562789837696/',
    },
    {
      name: 'Tirupati',
      top: '44.72%', left: '48.43%',
      email: 'info@thoughtflows.in',
      phone: '+91 87904 24835',
      address: '20-1-171/C1 ,1st floor Upstairs MIOT Diagnostic center oppo.Sai Baba temple, Tirumala Bypass Rd, Korlagunta, Tirupati, Andhra Pradesh 517501',
      instagram: 'https://www.instagram.com/medicalcoding_thoughtflowstpt?stkn=MTZvZHkzNWhwN3B0dg%3D%3D',
      facebook: 'https://www.facebook.com/Thoughtflowsmedicalcodingacademytirupati',
    },
    {
      name: 'Ameerpet',
      top: '16.63%', left: '45.18%',
      email: 'info@thoughtflows.in',
      phone: '+91 87907 51742',
      address: 'Level 6(5th Floor, Vasavi Mpm Grand, No: 606/A, Ameerpet X Road, Yella Reddy Guda, Hyderabad, Telangana 500073',
      instagram: 'https://www.instagram.com/thoughtflowshyderabad?stkn=MTRtY2Z2bnNxNzZ1cQ%3D%3D',
      facebook: 'https://www.facebook.com/Thoughtflowshyderabad/',
    },
    {
      name: 'Trivandrum',
      top: '80.51%', left: '26.93%',
      email: 'info@thoughtflows.in',
      phone: '+91 90480 23242',
      address: '167, 1st Floor, Karimpanal Arcade, opp. to Padmanabhaswamy Temple, Fort, East Fort, Pazhavangadi, Thiruvananthapuram, Keralam 695023',
      instagram: 'https://www.instagram.com/thoughtflowskerala?stkn=ZG9ybTE2aGZ6cDVn',
      facebook: 'https://www.facebook.com/Thoughtflowskerala/',
    },
    {
      name: 'Kochi',
      top: '70.14%', left: '22.70%',
      email: 'info@thoughtflows.in',
      phone: '+91 90480 23242',
      address: '4 th floor, Vee Vee Tower, road, near Bhima Jewels, NH Bye Pass, Edappally, Kochi, Ernakulam, Keralam 682024',
      instagram: 'https://www.instagram.com/thoughtflows_kochi?stkn=M2tndXF5ZHc0dWZi',
      facebook: 'https://www.facebook.com/thoughtflowsacademykochi/',
    },
    {
      name: 'Trichy',
      top: '72.5%', left: '42.5%', // Adjusted for distance
      email: 'info@thoughtflows.in',
      phone: '+91 93845 76852',
      address: 'first floor, AMIL towers, 25, C-40, 3rd Cross Rd, Thillai Nagar, Tiruchirappalli, Tamil Nadu 620018',
      instagram: 'https://www.instagram.com/thoughtflows_trichy?stkn=MzJlemxjcjM1MWg4',
      facebook: 'https://www.facebook.com/Thoughtflowstrichy/',
    },
    {
      name: 'Salem',
      top: '62.5%', left: '39.8%', // Adjusted for distance
      email: 'info@thoughtflows.in',
      phone: '+91 81487 32017',
      address: '1st floor, S Square Towers, Omalur Main Rd, Arthanari Nagar, Mamangam, Salem, Tamil Nadu 636302',
      instagram: 'https://www.instagram.com/thoughtflowssalem?stkn=amU3YnowZmowOThq',
      facebook: 'https://www.facebook.com/profile.php?id=61557903507460',
    },
    {
      name: 'Dilsukhnagar',
      top: '18.64%', left: '48.43%',
      email: 'info@thoughtflows.in',
      phone: '+91 90305 08844',
      address: 'H.No:-16, Sai Towers, 11-477-/6/1/A 2nd floor, opp. pillar No:-1519, Indira Nagar, Dilsukhnagar, Hyderabad, Telangana 500102',
      instagram: 'https://www.instagram.com/thoughtflowsdilsukhnagar?stkn=MW10NTZqd3Z3NWhnZw==',
      facebook: 'https://www.facebook.com/profile.php?id=61592324790661',
    },
    {
      name: 'Vizag',
      top: '15.29%', left: '80.36%',
      email: 'info@thoughtflows.in',
      phone: '+91 89775 07230',
      address: '7th floor, IT Grand Palace, 701/A, 1st Ln, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530016',
      instagram: 'https://www.instagram.com/thoughtflows_vizag?stkn=cTRqZmV3cGcwcHBq',
      facebook: 'https://www.facebook.com/profile.php?id=61577112877261',
    },
    {
      name: 'Pune',
      top: '12.0%', left: '26.0%',
      email: '',
      phone: '',
      address: '',
      instagram: '',
      facebook: '',
    },
    {
      name: 'Kolhapur',
      top: '25.0%', left: '23.0%',
      email: '',
      phone: '',
      address: '',
      instagram: '',
      facebook: '',
    },
  ];


  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(345deg, #88d4d9, rgb(240, 240, 240))',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    transition: '0.3s',
    cursor: 'pointer',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    minHeight: '200px',
    flex: isMobile ? '1 1 100%' : '1 1 calc(50% - 20px)',
  };

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

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.ph) newErrors.ph = 'Phone number is required';
    else if (!isValidPhone(formData.ph)) newErrors.ph = 'Phone number is invalid';
    if (!formData.course) newErrors.course = 'Please select a course';
    if (!formData.location) newErrors.location = 'Location is required';
    if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
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
        // EmailJS template parameters
        const templateParams = {
          to_email: 'info@thoughtflows.in', // Same recipient as Home.js
          from_name: formData.name,
          from_email: formData.email,
          phone: normalizePhone(formData.ph),
          course: formData.course,
          qualification: 'N/A',
          location: formData.location,
          message: `Course: ${formData.course}
Location: ${formData.location}

Message:
${formData.message}`,
          subject: `Contact Form Submission from ${formData.name} (${formData.email})`,
          full_message: `
            New Contact Form Submission:
            
            Name: ${formData.name}
            Email: ${formData.email}  
            Phone: ${formData.ph}
            Course: ${formData.course}
            Location: ${formData.location}
            Message: ${formData.message}
          `
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
          'service_2anzqj9', // Same service ID as Home.js67
          'template_y72j1ke', // Same template ID as Home.js
          templateParams,
          "KLhirNBaXDhIlDonK"
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
                      href={`tel:${selectedLocation.phone.replace(/[^0-9+]/g, '')}`}
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
        className="contact-page "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="contact-header "
          style={{ textAlign: 'center' }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 style={{ fontSize: '2.5em', paddingTop: isMobile ? '50px' : isTablet ? '50px' : '50px', paddingBottom: isMobile ? '0px' : '0px' }}>Get in touch</h1>
          <p style={{ fontSize: '16px', maxWidth: '700px', margin: 'auto' }}>
            Feel Free To Reach Out To Us Using The Options Below, And Our Dedicated Team Will Respond To Your Inquiries Promptly.
          </p>
        </motion.div>

        <div className="contact-container" style={{ display: 'flex', flexDirection: isMobile ? 'column-reverse' : 'row', justifyContent: 'center', alignItems: 'center', gap: isMobile ? '20px' : '0', marginBottom: '20px', marginTop: '0px' }}>
          <motion.div
            className="contact-form"
            style={{ flex: 1, marginLeft: isMobile ? '0px' : isTablet ? '40px' : '100px', width: isMobile ? '100%' : 'auto' }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2>How can we help?</h2>
            <p>Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.</p>

            {/* Status Messages */}
            {submitStatus.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  textAlign: "center",
                  backgroundColor: submitStatus.type === 'success' ? '#10b981' : '#ef4444',
                  color: 'white',
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div style={{ marginBottom: '10px' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <span style={{ color: 'red', fontSize: '0.8em' }}>{errors.name}</span>}
              </div>
              <div style={{ marginBottom: '10px' }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span style={{ color: 'red', fontSize: '0.8em' }}>{errors.email}</span>}
              </div>
              <div style={{ marginBottom: '10px' }}>
                <input
                  type="tel"
                  name="ph"
                  placeholder="Phone"
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                  value={formData.ph}
                  onChange={handleInputChange}
                />
                {errors.ph && <span style={{ color: 'red', fontSize: '0.8em' }}>{errors.ph}</span>}
              </div>
              <div style={{ marginBottom: '10px' }}>
                <select
                  name="course"
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                  value={formData.course}
                  onChange={handleInputChange}
                >
                  <option value="">Select Course</option>
                  {coursesList.map((group) => (
                    <optgroup key={group.category} label={group.category}>
                      {group.courses.map(course => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </optgroup>
                  ))}
                  <option value="OTHER">Other</option>
                </select>
                {errors.course && <span style={{ color: 'red', fontSize: '0.8em' }}>{errors.course}</span>}
              </div>
              <div style={{ marginBottom: '10px' }}>
                <select
                  name="location"
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#fff', color: formData.location ? '#000' : '#757575' }}
                  value={formData.location}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select Location</option>
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
                  <option value="Online">Online</option>
                </select>
                {errors.location && <span style={{ color: 'red', fontSize: '0.8em' }}>{errors.location}</span>}
              </div>
              <div style={{ marginBottom: '10px' }}>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                {errors.message && <span style={{ color: 'red', fontSize: '0.8em' }}>{errors.message}</span>}
              </div>
              <motion.button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
                style={{
                  padding: '10px 20px',
                  fontSize: '1em',
                  borderRadius: '4px',
                  backgroundColor: isSubmitting ? '#94a3b8' : '#0D8F9C',
                  color: '#fff',
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </motion.button>
            </motion.form>
          </motion.div>
          <motion.div
            className="contact-image"
            style={{ flex: 1, marginRight: isMobile ? '0px' : isTablet ? '40px' : '100px', width: isMobile ? '100%' : 'auto' }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <img src={contact} alt='contact' style={{ width: '100%', maxWidth: isMobile ? '480px' : '100%', height: 'auto', borderRadius: '0px' }} />
          </motion.div>
        </div>

        <motion.div
          style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-around', marginTop: '40px', alignItems: 'center', gap: isMobile ? '10px' : '0' }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2 className='highligh' style={{ color: "#0a848f", paddingLeft: isMobile ? '0px' : '20px', fontSize: isMobile ? '32px' : '50px', marginTop: isMobile ? '10px' : '55px', textAlign: isMobile ? 'center' : 'left' }}>OUR BRANCHES</h2>
            <h2 style={{ marginTop: "20px", paddingLeft: isMobile ? '0px' : '20px', textAlign: isMobile ? 'center' : 'left' }}>Across South India & Maharashtra</h2>
          </div>
          <div style={{
            width: isMobile ? '100%' : '410px',
            maxWidth: isMobile ? '360px' : '410px',
            height: isMobile ? 'auto' : '400px',
            perspective: '1000px',
            padding: isMobile ? '10px' : '25px',
            margin: isMobile ? '0 auto' : '0'
          }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transformStyle: isMobile || isTablet ? 'none' : 'preserve-3d',
                transition: isMobile || isTablet ? 'none' : 'transform 0.3s ease-out'
              }}
              onMouseMove={isMobile || isTablet ? undefined : (e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const tiltX = (y - 0.5) * 30;
                const tiltY = (x - 0.5) * -30;
                e.currentTarget.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.1)`;
              }}
              onMouseLeave={isMobile || isTablet ? undefined : (e) => {
                e.currentTarget.style.transform = 'none';
              }}
            >
              <img
                src={map}
                className='Map-img'
                alt="map"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '0px',
                  pointerEvents: 'none'
                }}
              />
              
              {/* Overlay hover pins */}
              {locations.map((loc) => (
                <div
                  key={loc.name}
                  style={{
                    position: 'absolute',
                    top: loc.top,
                    left: loc.left,
                    width: '30px',
                    height: '30px',
                    backgroundColor: 'transparent', // Removed visual red dot
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                    zIndex: 10
                  }}
                  onMouseEnter={() => setHoveredPin(loc.name)}
                  onMouseLeave={() => setHoveredPin(null)}
                  onClick={() => handleLocationClick(loc)}
                >
                  {hoveredPin === loc.name && (
                    <div style={{
                      position: 'absolute',
                      bottom: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'rgba(13, 143, 156, 0.9)',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                      pointerEvents: 'none',
                      marginBottom: '2px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                      {loc.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col flex-wrap md:flex-row"
          style={{ paddingBottom: '45px', paddingRight: '20px', paddingLeft: '20px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleLocationClick(location)}
              style={{
                ...sectionStyle,
                position: 'relative',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                borderRadius: '15px',
                border: '1px solid rgba(255,255,255,0.18)',
                padding: '20px',
                textAlign: 'center'
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: '0 15px 30px rgba(13, 143, 156, 0.3)',
                background: '#34aebb',
                borderColor: '#0D8F9C'
              }}
            >
              <h2 style={{ textAlign: 'center', marginBottom: '10px', color: 'white' }}>{location.name}</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginBottom: '15px' }}>
                Click to view full details
              </p>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLocationClick(location);
                }}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgb(20, 174, 186)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  margin: '0 auto'
                }}
                whileHover={{ scale: 1.1, backgroundColor: '#0D8F9C' }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faArrowDown} style={{ fontSize: '15px', color: 'white' }} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </>
  );
}

export default Contact;
