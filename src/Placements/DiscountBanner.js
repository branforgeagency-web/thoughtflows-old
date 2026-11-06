import React, { useState } from 'react';
import { isValidPhone, normalizePhone, PHONE_ERROR } from '../utils/phone';
import './DiscountBanner.css';
import emailjs from '@emailjs/browser';
import { coursesList } from '../coursesList';
import { logEnquiry } from '../utils/enquiryLog';

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
        "Vizag",
        "Maharashtra - Pune",
        "Maharashtra - Kolhapur",
        "Theni"
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
                subject: `Discount Banner Inquiry from ${formData.name}`,
                full_message: fullDetails
            };

            logEnquiry('Discount Banner', {
                name: formData.name,
                phone: formData.ph,
                email: formData.email,
                course: formData.interestedCourse,
                location: formData.preferredBranch,
                message: 'Discount Offer: 30%'
            });

            const response = await emailjs.send(
                'service_psbuu6o',
                'template_65u7qqm',
                templateParams,
                "Bu4k9osIvSGQZvMvy"
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
            <div className="discount-banner-outer">
                <div className="discount-banner-wrapper">

                    {/* Left Side - Illustration */}
                    <div className="discount-illustration-section">
                        <svg className="phone-illustration" viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="phoneGrad" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0" stopColor="#FF9B63" />
                                    <stop offset="1" stopColor="#E65100" />
                                </linearGradient>
                            </defs>
                            <line x1="62" y1="58" x2="138" y2="260" stroke="url(#phoneGrad)" strokeWidth="30" strokeLinecap="round" />
                            <ellipse cx="58" cy="54" rx="50" ry="48" fill="url(#phoneGrad)" />
                            <circle cx="58" cy="54" r="32" fill="none" stroke="#fff" strokeOpacity="0.45" strokeWidth="2.5" />
                            <circle cx="58" cy="54" r="18" fill="none" stroke="#fff" strokeOpacity="0.45" strokeWidth="2.5" />
                            <ellipse cx="142" cy="264" rx="50" ry="48" fill="url(#phoneGrad)" />
                            <circle cx="142" cy="264" r="32" fill="none" stroke="#fff" strokeOpacity="0.45" strokeWidth="2.5" />
                            <circle cx="142" cy="264" r="18" fill="none" stroke="#fff" strokeOpacity="0.45" strokeWidth="2.5" />
                        </svg>
                    </div>

                    {/* Right Side - Content + Form */}
                    <div className="discount-content-section">
                        <div className="discount-content-header">
                            <h2 className="discount-main-offer">Join our Medical Coding training</h2>
                            <p className="discount-subtext">With placement support and career guidance.</p>
                        </div>

                        {submitStatus.message && submitStatus.type !== 'success' && (
                            <div className="discount-status-message error">
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
                                <div className="discount-field-row">
                                    <div className="discount-field">
                                        <label htmlFor="db-name">Full Name</label>
                                        <input
                                            id="db-name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter your name"
                                            className="discount-input"
                                            required
                                        />
                                    </div>
                                    <div className="discount-field">
                                        <label htmlFor="db-ph">Mobile Number</label>
                                        <input
                                            id="db-ph"
                                            type="tel"
                                            name="ph"
                                            value={formData.ph}
                                            onChange={handleInputChange}
                                            placeholder="Enter mobile number"
                                            className="discount-input"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="discount-field">
                                    <label htmlFor="db-email">Email</label>
                                    <input
                                        id="db-email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email id"
                                        className="discount-input"
                                        required
                                    />
                                </div>

                                <div className="discount-field-row">
                                    <div className="discount-field">
                                        <label htmlFor="db-course">Interested Course</label>
                                        <select
                                            id="db-course"
                                            name="interestedCourse"
                                            value={formData.interestedCourse}
                                            onChange={handleInputChange}
                                            className="discount-input discount-select"
                                            required
                                        >
                                            <option value="" disabled>Select a course</option>
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
                                    <div className="discount-field">
                                        <label htmlFor="db-branch">Preferred Branch</label>
                                        <select
                                            id="db-branch"
                                            name="preferredBranch"
                                            value={formData.preferredBranch}
                                            onChange={handleInputChange}
                                            className="discount-input discount-select"
                                            required
                                        >
                                            <option value="" disabled>Select a branch</option>
                                            {branches.map((branch, index) => (
                                                <option key={index} value={branch}>{branch}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="discount-form-footer">
                                    <button type="submit" className="discount-submit-btn" disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Submit Now'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                </div>

                {/* Decorative coiled cord trailing below the card */}
                <svg className="discount-cord" viewBox="0 0 340 480" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M40.0,20.0 Q40.1,24.2 39.7,26.5 Q39.4,28.8 39.4,31.0 Q39.3,33.1 39.8,34.9 Q40.4,36.7 41.8,38.0 Q43.1,39.4 45.3,40.2 Q47.5,41.0 50.2,41.5 Q53.0,42.0 56.0,42.4 Q59.0,42.7 61.7,43.2 Q64.5,43.7 66.6,44.6 Q68.7,45.4 69.8,46.9 Q70.9,48.4 71.0,50.5 Q71.0,52.6 70.1,55.2 Q69.1,57.9 67.6,61.0 Q66.0,64.0 64.3,67.1 Q62.6,70.3 61.3,73.2 Q60.0,76.0 59.6,78.4 Q59.1,80.8 59.9,82.4 Q60.7,84.1 62.8,85.0 Q64.9,85.9 68.1,86.1 Q71.3,86.3 75.1,86.2 Q79.0,86.0 83.0,85.8 Q87.0,85.5 90.4,85.6 Q93.9,85.7 96.3,86.4 Q98.7,87.1 99.7,88.6 Q100.8,90.1 100.4,92.5 Q100.0,94.8 98.3,97.9 Q96.7,101.0 94.4,104.5 Q92.0,108.0 89.6,111.6 Q87.1,115.1 85.3,118.3 Q83.5,121.5 82.8,124.0 Q82.1,126.6 83.0,128.2 Q83.8,129.8 86.2,130.5 Q88.6,131.2 92.3,131.1 Q96.1,131.0 100.5,130.5 Q105.0,130.0 109.5,129.4 Q114.1,128.9 118.0,128.7 Q121.8,128.5 124.4,129.1 Q127.1,129.7 128.0,131.2 Q129.0,132.8 128.4,135.3 Q127.7,137.8 125.7,141.1 Q123.6,144.4 120.8,148.2 Q118.0,152.0 115.1,155.8 Q112.3,159.6 110.1,163.0 Q107.9,166.4 107.1,169.0 Q106.3,171.6 107.2,173.2 Q108.1,174.8 110.7,175.4 Q113.3,176.0 117.3,175.7 Q121.3,175.5 126.2,174.7 Q131.0,174.0 135.9,173.2 Q140.7,172.5 144.9,172.2 Q149.0,171.9 151.7,172.4 Q154.4,172.9 155.4,174.4 Q156.4,176.0 155.5,178.6 Q154.7,181.2 152.4,184.7 Q150.2,188.1 147.1,192.1 Q144.0,196.0 140.9,200.0 Q137.8,203.9 135.5,207.4 Q133.1,210.9 132.2,213.6 Q131.3,216.2 132.2,217.8 Q133.1,219.4 135.9,219.9 Q138.6,220.4 142.8,220.0 Q147.0,219.7 152.0,218.8 Q157.0,218.0 162.0,217.2 Q167.0,216.3 171.3,215.9 Q175.5,215.6 178.2,216.0 Q181.0,216.5 181.9,218.1 Q182.9,219.7 182.0,222.3 Q181.1,225.0 178.7,228.5 Q176.4,232.0 173.2,236.0 Q170.0,240.0 166.8,244.0 Q163.6,248.0 161.3,251.5 Q158.9,255.0 158.0,257.7 Q157.1,260.3 158.1,261.9 Q159.0,263.5 161.8,264.0 Q164.5,264.4 168.7,264.1 Q173.0,263.7 178.0,262.8 Q183.0,262.0 188.0,261.2 Q193.0,260.3 197.2,260.0 Q201.4,259.6 204.1,260.1 Q206.9,260.6 207.8,262.2 Q208.7,263.8 207.8,266.4 Q206.9,269.1 204.5,272.6 Q202.2,276.1 199.1,280.0 Q196.0,284.0 192.9,287.9 Q189.8,291.9 187.6,295.3 Q185.3,298.8 184.5,301.4 Q183.6,304.0 184.6,305.6 Q185.6,307.1 188.3,307.6 Q191.0,308.1 195.1,307.8 Q199.3,307.5 204.1,306.8 Q209.0,306.0 213.8,305.3 Q218.7,304.5 222.7,304.3 Q226.7,304.0 229.3,304.6 Q231.9,305.2 232.8,306.8 Q233.7,308.4 232.9,311.0 Q232.1,313.6 229.9,317.0 Q227.7,320.4 224.9,324.2 Q222.0,328.0 219.2,331.8 Q216.4,335.6 214.3,338.9 Q212.3,342.2 211.6,344.7 Q211.0,347.2 212.0,348.8 Q212.9,350.3 215.6,350.9 Q218.2,351.5 222.0,351.3 Q225.9,351.1 230.5,350.6 Q235.0,350.0 239.5,349.5 Q243.9,349.0 247.7,348.9 Q251.4,348.8 253.8,349.5 Q256.2,350.2 257.0,351.8 Q257.9,353.4 257.2,356.0 Q256.5,358.5 254.7,361.7 Q252.9,364.9 250.4,368.4 Q248.0,372.0 245.6,375.5 Q243.3,379.0 241.7,382.1 Q240.0,385.2 239.6,387.5 Q239.2,389.9 240.3,391.4 Q241.3,392.9 243.7,393.6 Q246.1,394.3 249.6,394.4 Q253.0,394.5 257.0,394.2 Q261.0,394.0 264.9,393.8 Q268.7,393.7 271.9,393.9 Q275.1,394.1 277.2,395.0 Q279.3,395.9 280.1,397.6 Q280.9,399.2 280.4,401.6 Q280.0,404.0 278.7,406.8 Q277.4,409.7 275.7,412.9 Q274.0,416.0 272.4,419.0 Q270.9,422.1 269.9,424.8 Q269.0,427.4 269.0,429.5 Q269.1,431.6 270.2,433.1 Q271.3,434.6 273.4,435.4 Q275.5,436.3 278.3,436.8 Q281.0,437.3 284.0,437.6 Q287.0,438.0 289.8,438.5 Q292.5,439.0 294.7,439.8 Q296.9,440.6 298.2,442.0 Q299.6,443.3 300.2,445.1 Q300.7,446.9 300.6,449.0 Q300.6,451.2 300.3,453.5 Q299.9,455.8 300.0,457.9 L300.0,460.0"
                        fill="none" stroke="#E65100" strokeWidth="9" strokeLinecap="round" opacity="0.9" />
                </svg>
            </div>
        </div>
    );
};

export default DiscountBanner;
