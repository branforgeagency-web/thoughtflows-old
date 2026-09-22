import React, { useState, useContext } from 'react';
import { PopupContext } from '../context/PopupContext';
import emailjs from '@emailjs/browser';
import { logEnquiry } from '../utils/enquiryLog';
import './RegisterPopup.css';
import { coursesList } from '../coursesList';
import { isValidPhone, normalizePhone, PHONE_ERROR } from '../utils/phone';

import RegisterBanner from '../images/ai-medical-coding-banner.png';

const RegisterPopupForm = () => {
    const { isOpen, setIsOpen } = useContext(PopupContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        qualification: '',
        location: '',
        course: '',
        message: ''
    });

    if (!isOpen) return null;

    const handleClose = (e) => {
        if (e) e.preventDefault();
        setIsOpen(false);
        setTimeout(() => {
            setIsSuccess(false);
            setFormData({
                name: '', email: '', phone: '', age: '',
                qualification: '', location: '', course: '', message: ''
            });
        }, 500);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        if (!isValidPhone(formData.phone)) {
            setErrorMsg(PHONE_ERROR);
            return;
        }
        setIsSubmitting(true);

        try {
            const fullDetails = `Course: ${formData.course}
Location: ${formData.location}
Age: ${formData.age || 'N/A'}
Qualification: ${formData.qualification || 'N/A'}
Message: ${formData.message || 'N/A'}`;

            const templateParams = {
                to_email: 'info@thoughtflows.in',
                from_name: formData.name,
                from_email: formData.email,
                phone: normalizePhone(formData.phone),
                age: formData.age,
                qualification: formData.qualification,
                location: formData.location,
                course: fullDetails,
                message: fullDetails,
                subject: `Registration from Website Popup - ${formData.name}`,
                full_message: `
                    New Registration from Website Popup:
                    
                    Name: ${formData.name}
                    Email: ${formData.email}
                    Phone: ${formData.phone}
                    Age: ${formData.age}
                    Qualification: ${formData.qualification}
                    Location: ${formData.location}
                    Course: ${formData.course}
                    Message: ${formData.message}
                `
            };

            // Log this enquiry to the Google Sheet (admin report). Fire-and-forget:
            // this never throws, so it can't block or break the email send below.
            logEnquiry('Register Popup', {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                course: formData.course,
                location: formData.location,
                age: formData.age,
                qualification: formData.qualification,
                message: formData.message,
            });

            await emailjs.send(
                'service_2anzqj9',
                'template_vx3lkna',
                templateParams,
                "KLhirNBaXDhIlDonK"
            );

            setIsSuccess(true);
            setTimeout(() => {
                handleClose();
            }, 3000);
        } catch (error) {
            console.error('Failed to send email:', error);
            setErrorMsg('Something went wrong. Please try again or call us on +91 93845 76852.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="register-popup-overlay" onClick={handleClose}>
            <div className="register-popup-container" onClick={e => e.stopPropagation()}>
                <button className="popup-close-btn" onClick={handleClose} type="button" aria-label="Close modal">
                    <i className="fa fa-times"></i>
                </button>

                {!isSuccess ? (
                    <>
                        <div className="popup-banner">
                            <img src={RegisterBanner} alt="Register Banner" className="img-fluid" />
                        </div>

                        <div className="popup-content-wrapper">
                            <div className="popup-header">
                                <h2>Start Your Medical Coding Career Today</h2>
                                <p className="popup-subtitle">Book your free demo class — seats are limited.</p>
                            </div>

                            <form className="popup-form" onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <input type="text" name="age" value={formData.age} onChange={handleInputChange} placeholder="Age" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} placeholder="Qualification" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <select name="location" value={formData.location} onChange={handleInputChange} required>
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
                                                <option value="Online">Online</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group">
                                            <select name="course" value={formData.course} onChange={handleInputChange} required>
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
                                        </div>
                                    </div>
                                </div>

                                {errorMsg && <p role="alert" style={{ color: '#d93025', fontSize: 14, margin: '8px 0 0' }}>{errorMsg}</p>}
                                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Book a Free Demo Class!'}
                                </button>

                                <div className="form-features">
                                    <span>● 100% Free Training</span>
                                    <span>● Placement Support</span>
                                    <span>● Limited Seats</span>
                                </div>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className="success-content">
                        <div className="success-icon">
                            <i className="fa fa-check"></i>
                        </div>
                        <h2>Submission Successful!</h2>
                        <p>We've received your request. Our team will contact you shortly to schedule your free demo class.</p>
                        <button className="submit-btn w-100 mt-4" onClick={handleClose}>
                            Awesome!
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegisterPopupForm;