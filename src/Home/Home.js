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
import formimg from "../images/form-img.jpg";
import FloatingIcons from "../FloatingIcons";
import Companies from "./Companies";
import { PopupContext } from "../context/PopupContext";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Home = () => {
  const { isOpen, setIsOpen } = useContext(PopupContext);
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    qualification: '',
    yearOfPassing: '',
    location: '',
    source: '',
    workshop: ''
  });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Initialize EmailJS
    emailjs.init("0J_1VFdtt2A1E5DL5"); // You'll need to replace this with your actual EmailJS public key
    
    // For production, use environment variables instead:
    // emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    const timer = setTimeout(() => {
      setShowPopup(true); // After 5 seconds, allow popup rendering
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
    setShowPopup(false);
    // Reset form and status when closing
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      qualification: '',
      yearOfPassing: '',
      location: '',
      source: '',
      workshop: ''
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
        to_email: 'info@thoughtflows.in', // Corrected email address
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        qualification: formData.qualification,
        year_of_passing: formData.yearOfPassing,
        location: formData.location,
        source: formData.source || 'Not specified',
        workshop: formData.workshop,
        message: `
          New Workshop Registration:
          
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Qualification: ${formData.qualification}
          Year of Passing: ${formData.yearOfPassing}
          Location: ${formData.location}
          Source: ${formData.source || 'Not specified'}
          Workshop Location: ${formData.workshop}
        `
      };

      // Send email using EmailJS
      // You'll need to replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual values
      const response = await emailjs.send(
        'service_2anzqj9', // Replace with your EmailJS service ID
        'template_vx3lkna', // Replace with your EmailJS template ID
        templateParams
      );
      
      // For production, use environment variables:
      // const response = await emailjs.send(
      //   process.env.REACT_APP_EMAILJS_SERVICE_ID,
      //   process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      //   templateParams
      // );

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
      {/* Popup Form */}
      {showPopup && isOpen && (
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
              togglePopup();
            }
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="popup"
            style={{
              background: "linear-gradient(145deg, #ffffff 0%, #f7f9fc 100%)",
              borderRadius: "20px",
              width: "100%",
              maxWidth: window.innerWidth <= 768 ? "500px" : "850px",
              maxHeight: "90vh",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: window.innerWidth <= 768 ? "column" : "row",
            }}
          >
            {/* Premium gradient overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #00BBFA 0%, #0099D6 50%, #00BBFA 100%)",
              }}
            />

            {/* Close button */}
            <button
              className="close-button"
              onClick={togglePopup}
              style={{
                position: "absolute",
                right: "16px",
                top: "16px",
                background: "white",
                border: "2px solid #f0f0f0",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                cursor: "pointer",
                color: "#666",
                transition: "all 0.3s ease",
                zIndex: 10,
                fontWeight: "bold",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#00BBFA";
                e.target.style.color = "#00BBFA";
                e.target.style.transform = "rotate(90deg)";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "#f0f0f0";
                e.target.style.color = "#666";
                e.target.style.transform = "rotate(0deg)";
              }}
            >
              ×
            </button>
            {/* Left side - Image */}
            <div style={{
              flex: window.innerWidth <= 768 ? "none" : "1",
              width: window.innerWidth <= 768 ? "100%" : "45%",
              display: "block",
            }}>
              <img
                src={formimg}
                alt="Enquiry"
                style={{
                  display: "block",
                  width: "100%",
                  height: window.innerWidth <= 768 ? "220px" : "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Right side - Form */}
            <div style={{ 
              flex: window.innerWidth <= 768 ? "none" : "1.2",
              padding: window.innerWidth <= 768 ? "24px 20px" : "40px",
              width: "100%",
            }}>
              {/* Header */}
              <div style={{ marginBottom: window.innerWidth <= 768 ? "20px" : "25px", textAlign: "center" }}>
                <h2 style={{
                  fontSize: window.innerWidth <= 768 ? "22px" : "28px",
                  fontWeight: "800",
                  background: "linear-gradient(135deg, #00BBFA 0%, #0099D6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "8px",
                }}>
                  Book for Free Demo Class!
                </h2>
                <p style={{
                  fontSize: window.innerWidth <= 768 ? "14px" : "15px",
                  color: "#64748b",
                  fontWeight: "500",
                }}>
                  Fill in your details and we’ll reach out soon
                </p>
              </div>

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
                    fontSize: window.innerWidth <= 768 ? "14px" : "15px",
                    fontWeight: "500",
                  }}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: window.innerWidth <= 768 ? "12px" : "14px",
                }}
              >
                {/* Input fields */}
                {[
                  { name: "name", type: "text", placeholder: "Full Name", icon: "👤" },
                  { name: "phone", type: "tel", placeholder: "Phone Number", icon: "📱" },
                  { name: "email", type: "email", placeholder: "Email Address", icon: "✉️" },
                  { name: "course", type: "text", placeholder: "Course", icon: "🎓" },
                ].map((field, index) => (
                  <div key={index} style={{ position: "relative" }}>
                    <div style={{
                      position: "absolute",
                      left: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "16px",
                      opacity: "0.7",
                    }}>
                      {field.icon}
                    </div>
                    <input
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      style={{
                        width: "100%",
                        padding: window.innerWidth <= 768 ? "12px 12px 12px 40px" : "14px 14px 14px 44px",
                        borderRadius: "10px",
                        border: "2px solid #e2e8f0",
                        fontSize: window.innerWidth <= 768 ? "14px" : "16px",
                        outline: "none",
                        transition: "all 0.3s ease",
                        backgroundColor: "#f8fafc",
                        fontWeight: "500",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#00BBFA";
                        e.target.style.backgroundColor = "#ffffff";
                        e.target.style.transform = "translateY(-1px)";
                        e.target.style.boxShadow = "0 4px 12px rgba(0,187,250,0.15)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e2e8f0";
                        e.target.style.backgroundColor = "#f8fafc";
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "none";
                      }}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  disabled={isSubmitting}
                  style={{
                    gridColumn: "1 / -1",
                    padding: window.innerWidth <= 768 ? "12px 24px" : "14px 32px",
                    background: isSubmitting ? "#94a3b8" : "linear-gradient(135deg, #00BBFA 0%, #0099D6 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: window.innerWidth <= 768 ? "15px" : "16px",
                    fontWeight: "700",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    marginTop: window.innerWidth <= 768 ? "8px" : "12px",
                    boxShadow: isSubmitting ? "none" : "0 4px 15px rgba(0,187,250,0.3)",
                    position: "relative",
                    overflow: "hidden",
                    opacity: isSubmitting ? 0.7 : 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  <span style={{ position: "relative", zIndex: 1 }}>
                    {isSubmitting ? (
                      <>
                        <span style={{ display: "inline-block", marginRight: "8px" }}>
                          ⏳
                        </span>
                        Submitting...
                      </>
                    ) : (
                      'Register Now '
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
            {/* No right visual panel in new design */}
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
