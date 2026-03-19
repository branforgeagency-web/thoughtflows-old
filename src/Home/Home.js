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
