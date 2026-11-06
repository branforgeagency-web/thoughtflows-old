import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { logEnquiry } from '../utils/enquiryLog';
import PhoneIllustration from './PhoneIllustration';
import './SupportForm.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SupportForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!EMAIL_PATTERN.test(formData.email)) {
            newErrors.email = 'Enter a valid email address';
        }
        if (!formData.message.trim()) newErrors.message = 'Please enter the details of your request';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const templateParams = {
                to_email: 'thoughtflowsinfo@gmail.com',
                name: formData.name,
                from_name: formData.name,
                user_name: formData.name,
                email: formData.email,
                from_email: formData.email,
                user_email: formData.email,
                reply_to: formData.email,
                message: formData.message,
                user_message: formData.message,
                subject: `Support Request from ${formData.name}`,
                full_message: `Name: ${formData.name}\nEmail: ${formData.email}\n\nRequest:\n${formData.message}`
            };

            logEnquiry('Need Support', {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            });

            await emailjs.send(
                'service_psbuu6o',
                'template_65u7qqm',
                templateParams,
                'Bu4k9osIvSGQZvMvy'
            );

            setSubmitStatus({ type: 'success', message: 'Thanks! Your request has been sent — our team will get back to you shortly.' });
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
            setTimeout(() => setSubmitStatus({ type: '', message: '' }), 5000);
        } catch (error) {
            console.error('Failed to send support request:', error);
            setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again in a moment.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="support-section">
            <div className="support-container">

                <PhoneIllustration />

                <div className="support-form-side">
                    <h2 className="support-heading">Need support?</h2>
                    <p className="support-subheading">Contact us if you need further assistance.</p>

                    {submitStatus.message && (
                        <div className={`support-status ${submitStatus.type}`}>
                            {submitStatus.message}
                        </div>
                    )}

                    <form className="support-form" onSubmit={handleSubmit} noValidate>
                        <div className="support-field">
                            <label htmlFor="support-name">Name and surname</label>
                            <input
                                id="support-name"
                                type="text"
                                name="name"
                                className={`support-input${errors.name ? ' has-error' : ''}`}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="support-error-text">{errors.name}</span>}
                        </div>

                        <div className="support-field">
                            <label htmlFor="support-email">Email</label>
                            <input
                                id="support-email"
                                type="email"
                                name="email"
                                className={`support-input${errors.email ? ' has-error' : ''}`}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="support-error-text">{errors.email}</span>}
                        </div>

                        <div className="support-field">
                            <label htmlFor="support-message">Please enter the details of your request.</label>
                            <textarea
                                id="support-message"
                                name="message"
                                className={`support-textarea${errors.message ? ' has-error' : ''}`}
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <span className="support-error-text">{errors.message}</span>}
                        </div>

                        <div className="support-form-footer">
                            <button type="submit" className="support-submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default SupportForm;
