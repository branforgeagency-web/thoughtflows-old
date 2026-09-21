import React, { useState } from 'react';
import { isValidPhone, normalizePhone, PHONE_ERROR } from '../utils/phone';
import './DiscountBanner.css';
import studentImage from '../images/form-img.jpg'; // Adjust path if needed
import emailjs from '@emailjs/browser';
import { coursesList } from '../coursesList';

const DiscountBanner = () => {
    const [formData, setFormData] = useState({
        name: '',
        ph: '',
        email: '',
        interestedCourse: '',
        preferredBranch: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const branches = [
        "Coimbatore - Hopes",
        "Coimbatore - Saravanampatti",
        "Coimbatore - Gandhipuram",
        "Kerala - Kochi",
        "Kerala - Trivandrum",
        "Hyderabad - Ameerpet",
        "Hyderabad - Dilsukhnagar",
        "Tirupati",
        "Trichy",
        "Salem",
        "Vizag"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValidPhone(formData.ph)) {
            setSubmitStatus({ type: 'error', message: PHONE_ERROR });
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const fullDetails = `Interested Course: ${formData.interestedCourse}
Preferred Branch: ${formData.preferredBranch}
Discount Offer: 30%`;

            const templateParams = {
                to_email: 'info@thoughtflows.in',
                from_name: formData.name,
                from_email: formData.email,
                phone: normalizePhone(formData.ph),
                qualification: fullDetails, // Send full details in qualification template field
                message: fullDetails, // Send full details in message template field
                subject: `Discount Banner Inquiry from ${formData.name}`,
                full_message: `
          New Discount Banner Submission:
          
          Name: ${formData.name}
          Mobile: ${formData.ph}
          Email: ${formData.email}
          Interested Course: ${formData.interestedCourse}
          Preferred Branch: ${formData.preferredBranch}
          Discount Offer: 30%
        `
            };

            const response = await emailjs.send(
                'service_2anzqj9',
                'template_y72j1ke',
                templateParams,
                "KLhirNBaXDhIlDonK"
            );

            console.log('Email sent successfully:', response);
            setSubmitStatus({
                type: 'success',
                message: 'Thank you for registering!'
            });
            setFormData({ name: '', ph: '', email: '', interestedCourse: '', preferredBranch: '' });

            setTimeout(() => setSubmitStatus({ type: '', message: '' }), 5000);

        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Failed to submit. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="discount-banner-container">
            <div className="discount-banner-wrapper">

                {/* Left Side - Text */}
                <div className="discount-text-section">
                    <h2 className="discount-main-offer">Join our Medical Coding training</h2>
                    <p className="discount-subtext">with placement support and career guidance.</p>
                </div>

                {/* Center - Form */}
                <div className="discount-form-section">
                    <div style={{ width: '100%', maxWidth: '350px' }}>
                        {submitStatus.message && (
                            <div style={{
                                padding: '10px',
                                borderRadius: '5px',
                                marginBottom: '10px',
                                backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                                color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                                textAlign: 'center',
                                fontSize: '0.9rem'
                            }}>
                                {submitStatus.message}
                            </div>
                        )}
                        {submitStatus.type === 'success' ? (
                            <div className="offer-claimed-success">
                                <div className="success-circle">
                                    <i className="fa fa-check"></i>
                                </div>
                                <h3 className="claimed-text">Thank you for registering!</h3>
                                <p className="claimed-subtext">Our team will contact you shortly.</p>
                                <button 
                                    className="reset-form-btn" 
                                    onClick={() => setSubmitStatus({ type: '', message: '' })}
                                >
                                    Submit Another Inquiry
                                </button>
                            </div>
                        ) : (
                            <form className="discount-form" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your Name"
                                    className="discount-input"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="ph"
                                    value={formData.ph}
                                    onChange={handleInputChange}
                                    placeholder="Enter Mobile Number"
                                    className="discount-input"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your Email Id"
                                    className="discount-input"
                                    required
                                />
                                <select
                                    name="interestedCourse"
                                    value={formData.interestedCourse}
                                    onChange={handleInputChange}
                                    className="discount-input discount-select"
                                    required
                                >
                                    <option value="" disabled>Interested Course</option>
                                    {coursesList.map((group) => (
                                        <optgroup key={group.category} label={group.category}>
                                            {group.courses.map(course => (
                                                <option key={course} value={course}>{course}</option>
                                            ))}
                                        </optgroup>
                                    ))}
                                    <option value="OTHER">Other</option>
                                </select>
                                <select
                                    name="preferredBranch"
                                    value={formData.preferredBranch}
                                    onChange={handleInputChange}
                                    className="discount-input discount-select"
                                    required
                                >
                                    <option value="" disabled>Preferred Branch</option>
                                    {branches.map((branch, index) => (
                                        <option key={index} value={branch}>{branch}</option>
                                    ))}
                                </select>
                                <button type="submit" className="discount-submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Submit Now'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="discount-image-section">
                    <img src={studentImage} alt="Happy Student" className="discount-student-img" />
                </div>

            </div>
        </div>
    );
};

export default DiscountBanner;
