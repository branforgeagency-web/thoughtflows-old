import React, { useEffect, useContext, useState } from "react";
import HomeBanner from "./HomeBanner";
import GifSection from "./GifSection";
import WelcomSection from "./WelcomSection";
import PopularCourses from "./PopularCourses";
import Branches from "./Branches";
import Counters from "./Counters";
import Coaching from "./Coaching";
import GoogleRev from "./GoogleRev";
import HomeBlog from "./HomeBlog";
import Meta from "../Meta";
import formimg from "../images/courseimage/TF Image copy.webp";
import posterImg from "../images/poster tf.jpeg";
import FloatingIcons from "../FloatingIcons";
import Companies from "./Companies";
import { PopupContext } from "../context/PopupContext";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const inputStyle = {
  width: "100%",
  padding: "12px 15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "15px",
  outline: "none",
  transition: "border-color 0.3s ease",
};

const Home = () => {
  const { isOpen, setIsOpen } = useContext(PopupContext);
  const [showPopup, setShowPopup] = useState(false);
  const [showPosterPopup, setShowPosterPopup] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    qualification: '',
    location: '',
    course: '',
  });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Initialize EmailJS
    // emailjs.init("KLhirNBaXDhIlDonK"); // You'll need to replace this with your actual EmailJS public key

    // For production, use environment variables instead:
    // emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    // const timer = setTimeout(() => {
    //   setShowPosterPopup(true); // After 5 seconds, show poster popup
    // }, 5000);

    // return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Add resize listener for dynamic responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const togglePopup = () => {
    setShowRegistrationForm(false);
    setIsOpen(false);
    setShowPosterPopup(false);
    // Reset form and status when closing
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      qualification: '',
      location: '',
      course: '',
    });
    setSubmitStatus({ type: '', message: '' });
  };

  const closePosterPopup = () => {
    setShowPosterPopup(false);
  };

  const openRegistrationForm = () => {
    setShowPosterPopup(false);
    setShowRegistrationForm(true);
    setIsOpen(true);
    setShowPopup(true);
  };

  const closeRegistrationForm = () => {
    setShowRegistrationForm(false);
    setIsOpen(false);
    setShowPopup(false);
    // Reset form and status when closing
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      qualification: '',
      location: '',
      course: '',
    });
    setSubmitStatus({ type: '', message: '' });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // EmailJS template parameters
      const templateParams = {
        to_email: 'info@thoughtflows.in',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        age: formData.age,
        qualification: formData.qualification,
        location: formData.location,
        course: formData.course,
        message: `
          New Unified Form Registration:
          
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Age: ${formData.age}
          Qualification: ${formData.qualification}
          Location: ${formData.location}
          Course: ${formData.course}
        `
      };

      const response = await emailjs.send(
        'service_2anzqj9',
        'template_vx3lkna',
        templateParams,
        "KLhirNBaXDhIlDonK"
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus({
        type: 'success',
        message: 'Registration successful! We will contact you soon.'
      });

      // Reset form after successful submission
      setTimeout(() => {
        togglePopup();
      }, 3000);

    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit registration. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Meta
        title="Best Medical Coding Training Academy | Expert Coaching Institute"
        description="Get expert medical coding training at the best academy for comprehensive coaching. Start your career today!"
      />
      {/* Unified Poster & Registration Modal */}
      {(showRegistrationForm || showPosterPopup) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="popup-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(10px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "20px",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeRegistrationForm();
            }
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="popup"
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              width: "100%",
              maxWidth: "800px",
              maxHeight: "95vh",
              position: "relative",
              overflowY: "auto",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Poster Header - COMMENTED OUT */}
            {/* <div style={{ position: "relative", width: "100%" }}>
              <img
                src={posterImg}
                alt="Promotion"
                style={{
                  width: "100%",
                  height: "auto",
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                  display: "block",
                }}
              />
            </div> */}
            <button
              className="close-button"
              onClick={closeRegistrationForm}
              style={{
                position: "absolute",
                right: "16px",
                top: "16px",
                background: "white",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                cursor: "pointer",
                color: "#e67e22",
                fontWeight: "bold",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                zIndex: 10,
              }}
            >
              ×
            </button>

            {/* Form Content */}
            <div style={{ padding: windowWidth <= 768 ? "20px" : "30px" }}>
              <div style={{ textAlign: "center", marginBottom: "25px" }}>
                <h2 style={{
                  fontSize: windowWidth <= 768 ? "20px" : "28px",
                  fontWeight: "700",
                  color: "#333",
                  marginBottom: "5px",
                }}>
                  Receive a Scholarship Discount Upto 100%
                </h2>
              </div>

              {submitStatus.message && (
                <div
                  style={{
                    padding: "12px",
                    borderRadius: "8px",
                    marginBottom: "20px",
                    textAlign: "center",
                    backgroundColor: submitStatus.type === 'success' ? '#10b981' : '#ef4444',
                    color: 'white',
                    fontWeight: "500",
                  }}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: windowWidth <= 640 ? "1fr" : "1fr 1fr",
                  gap: "15px",
                }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="qualification"
                    placeholder="Qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                </div>

                <select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleInputChange}
                  style={{ ...inputStyle, width: "100%" }}
                >
                  <option value="">Select Course</option>
                  <optgroup label="AAPC Courses">
                    <option value="CPC">CPC (Certified Professional Coder)</option>
                    <option value="CIC">CIC (Certified Inpatient Coder)</option>
                    <option value="COC">COC (Certified Outpatient Coder)</option>
                    <option value="CPMA">CPMA (Certified Professional Medical Auditor)</option>
                    <option value="CRC">CRC (Certified Risk Adjustment Coder)</option>
                    <option value="CPB">CPB (Certified Professional Biller)</option>
                    <option value="CEDC">CEDC (Certified Emergency Department Coder)</option>
                    <option value="CEMC">CEMC (Certified Evaluation and Management Coder)</option>
                    <option value="CDEO">CDEO (Certified Documentation Expert — Outpatient)</option>
                    <option value="CDEI">CDEI (Certified Documentation Expert — Inpatient)</option>
                    <option value="CPPM">CPPM (Certified Physician Practice Manager)</option>
                  </optgroup>
                  <optgroup label="Specialty Training">
                    <option value="SURGERY">SURGERY</option>
                    <option value="ED">ED (Emergency Department)</option>
                    <option value="EM">EM (Evaluation and Management)</option>
                    <option value="RADIOLOGY">RADIOLOGY</option>
                    <option value="ANESESTHESIA">ANESESTHESIA</option>
                    <option value="IP-DRG">IP DRG</option>
                    <option value="HCC">HCC (Hierarchical Condition Category)</option>
                    <option value="IVR">IVR (Interventional Radiology)</option>
                  </optgroup>
                  <optgroup label="AHIMA Courses">
                    <option value="CCS">CCS (Certified Coding Specialist)</option>
                    <option value="CCS-P">CCS-P (Certified Coding Specialist – Physician-based)</option>
                    <option value="RHIA">RHIA (Registered Health Information Administrator)</option>
                    <option value="RHIT">RHIT (Registered Health Information Technician)</option>
                  </optgroup>
                  <optgroup label="HIMAA Courses">
                    <option value="CCC">CCC</option>
                    <option value="HIM">HIM (Healthcare Information Management)</option>
                  </optgroup>
                  <option value="OTHER">Other Courses</option>
                </select>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: isSubmitting ? "#ccc" : "#f1c40f",
                    color: "#000",
                    border: "none",
                    borderRadius: "50px",
                    padding: "15px 30px",
                    fontSize: "18px",
                    fontWeight: "700",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    marginTop: "20px",
                    alignSelf: "center",
                    boxShadow: "0 4px 14px rgba(241, 196, 15, 0.4)",
                    width: windowWidth <= 640 ? "100%" : "auto",
                    transition: "all 0.3s ease",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Book a Free Demo Class!"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
      <div style={{ overflow: "hidden" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HomeBanner />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <GifSection />
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <WelcomSection />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <PopularCourses />
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Branches />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Counters />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Coaching />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Companies />
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <GoogleRev />
        </motion.div>
      </div>
      {/* <FloatingIcons/> */}
    </>
  );
};

export default Home;
