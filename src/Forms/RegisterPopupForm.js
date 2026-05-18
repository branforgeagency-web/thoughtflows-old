import React, { useState, useContext } from 'react';
import { PopupContext } from '../context/PopupContext';
import emailjs from '@emailjs/browser';
import './RegisterPopup.css';
import { coursesList } from '../coursesList';

import RegisterBanner from '../images/forms/PHOTO-2026-05-18-14-56-19.jpg';

const RegisterPopupForm = () => {
    const { isOpen, setIsOpen } = useContext(PopupContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
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
        setIsSubmitting(true);

        try {
            const templateParams = {
                to_email: 'info@thoughtflows.in',
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                age: formData.age,
                qualification: formData.qualification,
                location: formData.location,
                course: formData.course,
                message: formData.message,
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
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="register-popup-overlay" onClick={handleClose}>
            <div className="register-popup-container" onClick={e => e.stopPropagation()}>
                <button className="popup-close-btn" onClick={handleClose}>
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
                                            <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" />
                                        </div>
                                    </div>
                                </div>

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

                                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Book a Free Demo Class!'}
                                </button>
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