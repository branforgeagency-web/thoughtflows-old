import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { isValidPhone, normalizePhone, PHONE_ERROR } from '../utils/phone';
import { coursesList } from '../coursesList';
import { logEnquiry } from '../utils/enquiryLog';
import PhoneIllustration from '../Contact/PhoneIllustration';
import '../Contact/SupportForm.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BRANCHES = [
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
    "Vizag",
    "Maharashtra - Pune",
    "Maharashtra - Kolhapur",
    "Theni"
];

const PlacementSupportForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        ph: '',
        email: '',
        interestedCourse: '',
        preferredBranch: ''
    });
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
        if (!formData.ph) {
            newErrors.ph = 'Mobile number is required';
        } else if (!isValidPhone(formData.ph)) {
            newErrors.ph = PHONE_ERROR;
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!EMAIL_PATTERN.test(formData.email)) {
            newErrors.email = 'Enter a valid email address';
        }
        if (!formData.interestedCourse) newErrors.interestedCourse = 'Please select a course';
        if (!formData.preferredBranch) newErrors.preferredBranch = 'Please select a branch';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const fullDetails = `Name: ${formData.name}
Email: ${formData.email}
Mobile / Phone: ${formData.ph}
Interested Course: ${formData.interestedCourse || 'N/A'}
Preferred Branch: ${formData.preferredBranch || 'N/A'}
Discount Offer: 30%`;

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
                course: formData.interestedCourse || 'N/A',
                location: formData.preferredBranch || 'N/A',
                qualification: fullDetails,
                message: fullDetails,
                user_message: 'Discount Offer: 30%',
                subject: `Placement Enquiry from ${formData.name}`,
                full_message: fullDetails
            };

            logEnquiry('Placement Support Form', {
                name: formData.name,
                phone: formData.ph,
                email: formData.email,
                course: formData.interestedCourse,
                location: formData.preferredBranch,
                message: 'Discount Offer: 30%'
            });

            await emailjs.send(
                'service_psbuu6o',
                'template_65u7qqm',
                templateParams,
                'Bu4k9osIvSGQZvMvy'
            );

            setSubmitStatus({ type: 'success', message: 'Thank you for registering! Our team will contact you shortly.' });
            setFormData({ name: '', ph: '', email: '', interestedCourse: '', preferredBranch: '' });
            setErrors({});
            setTimeout(() => setSubmitStatus({ type: '', message: '' }), 5000);
        } catch (error) {
            console.error('Failed to submit placement enquiry:', error);
            setSubmitStatus({ type: 'error', message: 'Failed to submit. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="support-section">
            <div className="support-container">

                <PhoneIllustration />

                <div className="support-form-side">
                    <h2 className="support-heading">Join our Medical Coding training</h2>
                    <p className="support-subheading">With placement support and career guidance.</p>

                    {submitStatus.message && (
                        <div className={`support-status ${submitStatus.type}`}>
                            {submitStatus.message}
                        </div>
                    )}

                    <form className="support-form" onSubmit={handleSubmit} noValidate>
                        <div className="support-field-row">
                            <div className="support-field">
                                <label htmlFor="placement-name">Full Name</label>
                                <input
                                    id="placement-name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className={`support-input${errors.name ? ' has-error' : ''}`}
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <span className="support-error-text">{errors.name}</span>}
                            </div>
                            <div className="support-field">
                                <label htmlFor="placement-ph">Mobile Number</label>
                                <input
                                    id="placement-ph"
                                    type="tel"
                                    name="ph"
                                    placeholder="Enter mobile number"
                                    className={`support-input${errors.ph ? ' has-error' : ''}`}
                                    value={formData.ph}
                                    onChange={handleChange}
                                />
                                {errors.ph && <span className="support-error-text">{errors.ph}</span>}
                            </div>
                        </div>

                        <div className="support-field">
                            <label htmlFor="placement-email">Email</label>
                            <input
                                id="placement-email"
                                type="email"
                                name="email"
                                placeholder="Enter your email id"
                                className={`support-input${errors.email ? ' has-error' : ''}`}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="support-error-text">{errors.email}</span>}
                        </div>

                        <div className="support-field-row">
                            <div className="support-field">
                                <label htmlFor="placement-course">Interested Course</label>
                                <select
                                    id="placement-course"
                                    name="interestedCourse"
                                    className={`support-input support-select${errors.interestedCourse ? ' has-error' : ''}`}
                                    value={formData.interestedCourse}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select a course</option>
                                    {coursesList.map((group) => (
                                        <optgroup key={group.category} label={group.category}>
                                            {group.courses.map((course) => (
                                                <option key={course} value={course}>{course}</option>
                                            ))}
                                        </optgroup>
                                    ))}
                                    <option value="OTHER">Other</option>
                                </select>
                                {errors.interestedCourse && <span className="support-error-text">{errors.interestedCourse}</span>}
                            </div>
                            <div className="support-field">
                                <label htmlFor="placement-branch">Preferred Branch</label>
                                <select
                                    id="placement-branch"
                                    name="preferredBranch"
                                    className={`support-input support-select${errors.preferredBranch ? ' has-error' : ''}`}
                                    value={formData.preferredBranch}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select a branch</option>
                                    {BRANCHES.map((branch) => (
                                        <option key={branch} value={branch}>{branch}</option>
                                    ))}
                                </select>
                                {errors.preferredBranch && <span className="support-error-text">{errors.preferredBranch}</span>}
                            </div>
                        </div>

                        <div className="support-form-footer">
                            <button type="submit" className="support-submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit Now'}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default PlacementSupportForm;
