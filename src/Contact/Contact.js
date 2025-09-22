import React, { useState,useEffect } from 'react';
import contact from "../images/contact/6.jpg";
import map from "../images/contact/pinmap.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Meta from '../Meta';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
    
    // Initialize EmailJS with the same key from Home.js
    emailjs.init("0J_1VFdtt2A1E5DL5");
 },[])
  const [activeSection, setActiveSection] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ph: '',
    qualification: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };


  const locations = [
    {
      name: 'Saravanampatti',
      email: 'info@thoughtflows.in',
      phone: '+91 88075 10359 & +91 93845 76852 ',
      address: 'No-171/2A, 1st, Promenade Tower, Sathy Road, Saravanampatti, Coimbatore, Tamil Nadu 641035',
    },
    {
      name: 'Hopes',
      email: 'info@thoughtflows.in',
      phone: '+91 9791974560 & +91 9384576852',
      address: 'Door No.62 E/F , 1st Floor South Wing, Lalitha Towers Gandhi Street, Avinashi Rd, Coimbatore, Tamil Nadu 641004',
    },
    {
      name: 'Gandhipuram',
      email: 'info@thoughtflows.in',
      phone: '+91 8148732017 & +91 9384576852',
      address: 'Jay Enclave, 1084, 3rd Street, Cross Cut Road, Gandhipuram, Tamil Nadu 641012',
    },
    {
      name: 'Tirupati',
      email: 'info@thoughtflows.in',
      phone: '+91 8790424835 & +91 9384576852',
      address: '20-1-171/C1, 1st floor Upstairs MIOT Diagnostic center oppo. Sai Baba temple, Tirumala Bypass Rd, Korlagunta, Tirupati, Andhra Pradesh 517501',
    },
    {
      name: 'Hyderabad',
      email: 'info@thoughtflows.in',
      phone: '+91 8790751742 & +91 98045 76852',
      address: 'No:405, 3rd Floor & No:606/A, 5th Floor, Vasavi MPM Grand Yellareddyguda, Ameerpet X Road Telangana 500073',
    },
    {
      name: 'Trivandrum',
      email: 'info@thoughtflows.in',
      phone: '070122 47525 & +91 9384576852',
      address: '167, 1st Floor, Karimpanal Arcade, opp. to Padmanabhaswamy Temple, East Fort, Thiruvananthapuram, Kerala 695024',
    },
    {
      name: 'Kochi',
      email: 'info@thoughtflows.in',
      phone: '+91 9995790525 & +91 9384576852',
      address: '4 th floor, Vee Vee Tower , NH Bypass road, Near Bhima Jewels, Edappally, Kochi, Eranakulam, Kerala 682024',
    },
    {
      name: 'Trichy',
      email: 'info@thoughtflows.in',
      phone: '+91 9384576852',
      address: '25 ,C-40,first floor ,AMIL towers, 3rd cross, Thillai nagar east, Trichy, Tamil Nadu 620018',
    },
    {
      name: 'Salem',
      email: 'info@thoughtflows.in',
      phone: '+91 8148732017 & +91 9384576852',
      address: '1st floor, S Square Towers, Omalur Main Rd, Arthanari Nagar, Mamangam, Salem, Tamil Nadu 636302',
    },
    {
      name: 'Dilsuknagar',
      email: 'info@thoughtflows.in',
      phone: '+91 8148732017 & +91 9384576852',
      address: 'Sai Towers H.No:-16-11-477-/6/1/A, 2nd floor Opp.pillar No:-1519, Dilshuknagar., Hyderabad, Telangana 500102',
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
    flex: '1 1 calc(50% - 20px)',
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
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(formData.ph)) {
      newErrors.ph = 'Phone number is invalid';
    }
    if (!formData.qualification) newErrors.qualification = 'Qualification is required';
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
          phone: formData.ph,
          qualification: formData.qualification,
          message: formData.message,
          subject: 'New Contact Form Submission',
          full_message: `
            New Contact Form Submission:
            
            Name: ${formData.name}
            Email: ${formData.email}  
            Phone: ${formData.ph}
            Qualification: ${formData.qualification}
            Message: ${formData.message}
          `
        };

        // Send email using the same EmailJS credentials as Home.js
        const response = await emailjs.send(
          'service_k1hktqq', // Same service ID as Home.js
          'template_rrxzg6i', // Same template ID as Home.js
          templateParams
        );

        console.log('Email sent successfully:', response);
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you for contacting us! We will get back to you soon.' 
        });
        
        // Reset form after successful submission
        setFormData({ name: '', email: '', message: '' ,ph:"",qualification:""});
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
    <Meta title="Contact Us - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />
    <motion.div 
      className="contact-page "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="contact-header " 
        style={{ textAlign: 'center' }}
        initial={{  opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h1 style={{ fontSize: '2.5em',paddingTop:"200px" }}>Get in touch</h1>
        <p style={{ fontSize: '16px', maxWidth: '700px', margin: 'auto' }}>
          Feel free to reach out to us using the options below, and our dedicated team will respond to your inquiries promptly.
        </p>
      </motion.div>

      <div className="contact-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop:'0px' }}>
        <motion.div 
          className="contact-form"
          style={{ flex: '1', marginLeft: '100px' }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <button className="contact-button" style={{ padding: '10px 60px', fontSize: '1em', marginBottom: '20px', fontFamily:'Poppins' }}>Contact Us</button>
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
              <input
                type="text"
                name="qualification"
                placeholder="Qualification"
                required
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                value={formData.qualification}
                onChange={handleInputChange}
              />
              {errors.qualification && <span style={{ color: 'red', fontSize: '0.8em' }}>{errors.qualification}</span>}
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
          style={{ flex: '1', marginRight: '100px' }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <img src={contact} alt='contact' style={{ width: '100%', borderRadius: '0px', }} />
        </motion.div>
      </div>

      <motion.div 
        style={{ display: 'flex', justifyContent: 'space-around', marginTop:'40px',alignItems:'center' }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <h1 className='highligh' style={{ color: "#0a848f",paddingLeft:"20px", fontSize: "50PX", marginTop: "55px" }}>OUR BRANCHES</h1>
          <h2 style={{ marginTop: "20px" ,paddingLeft:"20px"}}>All Over South India Zone</h2>
        </div>
        <div style={{
          width: '450px',
          height: '400px',
          perspective: '1000px',
          overflow: 'hidden',
          padding:"25px"
        }}>
          <img 
            src={map} 
            className='Map-img' 
            alt="map" 
            style={{ 
              width: '100%',
              height: '100%',
              borderRadius: '0px',
              transition: 'transform 0.3s ease-out',
              transformStyle: 'preserve-3d'
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width;
              const y = (e.clientY - rect.top) / rect.height;
              const tiltX = (y - 0.5) * 30;
              const tiltY = (x - 0.5) * -30;
              e.currentTarget.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.1)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
            }}
          />
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-col flex-wrap md:flex-row"
        style={{paddingBottom: '45px', paddingRight: '20px', paddingLeft: '20px' }}
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
            onClick={() => handleSectionClick(location.name)}
            style={{
              ...sectionStyle,
              ...(activeSection === location.name ? activeStyle : {}),
              position: 'relative',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.18)'
            }}
            whileHover={{
              y: -10,
              rotate: 1,
              boxShadow: '0 15px 30px rgba(13, 143, 156, 0.3)',
              background: '#34aebb',
              borderColor: '#0D8F9C'
            }}
          >
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>{location.name}</h2>

            {activeSection === location.name && (
              <motion.div 
                style={{ textAlign: 'center' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h5>Email: {location.email}</h5>
                <h5>Phone: {location.phone}</h5>
                <h5>Address: {location.address}</h5>
              </motion.div>
            )}

            <motion.button
              onClick={() => handleSectionClick(location.name)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '20%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgb(20, 174, 186)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
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
