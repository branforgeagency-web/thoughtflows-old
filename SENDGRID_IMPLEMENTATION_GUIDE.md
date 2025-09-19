# SendGrid Implementation Guide for Dynamic Sender Addresses

## Overview
This guide shows how to replace EmailJS with SendGrid to send emails from the user's actual email address instead of your own.

## Setup Steps

### 1. Create SendGrid Account
1. Go to [SendGrid.com](https://sendgrid.com)
2. Sign up for a free account (100 emails/day)
3. Verify your email address

### 2. Create API Key
1. Go to Settings → API Keys
2. Click "Create API Key"
3. Choose "Restricted Access"
4. Give it "Mail Send" permissions
5. Copy the API key (you'll need this)

### 3. Install SendGrid Package
```bash
npm install @sendgrid/mail
```

## Code Implementation

### Updated Contact.js with SendGrid

```javascript
import React, { useState, useEffect } from 'react';
import contact from "../images/contact/6.jpg";
import map from "../images/contact/pinmap.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Meta from '../Meta';
import { motion } from 'framer-motion';
import sgMail from '@sendgrid/mail';

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
    
    // Initialize SendGrid with your API key
    sgMail.setApiKey('YOUR_SENDGRID_API_KEY_HERE');
  }, [])

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

  // ... existing code for locations, styles, etc. ...

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus({ type: '', message: '' });

      try {
        // SendGrid email configuration
        const msg = {
          to: 'info@thoughtflows.in', // Your business email
          from: {
            email: formData.email, // User's email as sender
            name: formData.name    // User's name
          },
          replyTo: formData.email, // Replies go to user
          subject: `Contact Form Submission from ${formData.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background-color: #0D8F9C; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
                <h2>New Contact Form Submission</h2>
              </div>
              
              <div style="padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px;">
                <div style="background-color: #f8f9fa; border: 2px solid #0D8F9C; border-radius: 8px; padding: 15px; margin: 20px 0; text-align: center;">
                  <div style="font-weight: bold; color: #0D8F9C; font-size: 16px; margin-bottom: 10px;">📧 MESSAGE FROM:</div>
                  <div style="font-size: 14px; color: #333;">
                    <strong>${formData.name}</strong><br>
                    Email: ${formData.email}<br>
                    Phone: ${formData.ph}
                  </div>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <div style="font-weight: bold; color: #0D8F9C;">Qualification:</div>
                  <div style="margin-top: 5px;">${formData.qualification}</div>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <div style="font-weight: bold; color: #0D8F9C;">Message:</div>
                  <div style="background-color: #f8f9fa; border-left: 4px solid #0D8F9C; padding: 15px; margin: 15px 0; border-radius: 4px;">
                    ${formData.message}
                  </div>
                </div>
              </div>
              
              <div style="margin-top: 20px; font-size: 12px; color: #666; text-align: center;">
                <p>This email was sent from the Thoughtflows Medical Coding Academy contact form.</p>
                <p><strong>Reply directly to: ${formData.email}</strong></p>
              </div>
            </div>
          `,
          text: `
            New Contact Form Submission
            
            From: ${formData.name} (${formData.email})
            Phone: ${formData.ph}
            Qualification: ${formData.qualification}
            
            Message:
            ${formData.message}
            
            Reply directly to: ${formData.email}
          `
        };

        // Send email using SendGrid
        const response = await sgMail.send(msg);

        console.log('Email sent successfully:', response);
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you for contacting us! We will get back to you soon.' 
        });
        
        // Reset form after successful submission
        setFormData({ name: '', email: '', message: '', ph: '', qualification: '' });
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

  // ... rest of your existing component code ...
}

export default Contact;
```

## Environment Variables (Recommended)

Create a `.env` file in your project root:

```env
REACT_APP_SENDGRID_API_KEY=your_sendgrid_api_key_here
```

Then update the initialization:

```javascript
// Initialize SendGrid with environment variable
sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
```

## Important Notes

### Domain Authentication (Optional but Recommended)
For better deliverability, you can:
1. Add your domain to SendGrid
2. Set up SPF, DKIM, and DMARC records
3. This prevents emails from being marked as spam

### Security Considerations
- Never expose your API key in client-side code
- Consider using a backend service for production
- Implement rate limiting to prevent abuse

### Deliverability Tips
- The user's email domain should be legitimate
- Some email providers may still flag emails from unknown domains
- Consider using a "Reply-To" header as backup

## Testing
1. Replace `YOUR_SENDGRID_API_KEY_HERE` with your actual API key
2. Test the form submission
3. Check that emails appear to come from the user's address
4. Verify replies go to the user's email

## Alternative: Backend Implementation
For production, consider moving email sending to your backend:

```javascript
// Frontend - just send form data
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});

// Backend - handle email sending with SendGrid
// This keeps your API key secure
```

## Cost Comparison
- **SendGrid**: Free (100 emails/day), then $19.95/month for 50k emails
- **Mailgun**: Free (5k emails/month for 3 months), then $35/month for 50k emails  
- **AWS SES**: $0.10 per 1,000 emails (very cheap)
- **Mailjet**: Free (6k emails/month), then $15/month for 30k emails

SendGrid is recommended for its ease of use and excellent documentation.
